"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 120;
const BASE_PATH = "/AntiGravity-Portfolio";

const getPath = (i: number) =>
  `${BASE_PATH}/frame_${String(i).padStart(3, "0")}_delay-0.066s.webp`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getPath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      // For immediate cached load tracking
      if (img.complete && img.naturalHeight !== 0) {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded((prev) => prev ? prev : true);
        }
      }
      imgArray.push(img);
    }
    setImages(imgArray);
  }, []);

  const renderFrame = useCallback((index: number) => {
    if (!canvasRef.current || !images[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // Ensure intrinsic dimensions are ready
    if (!img.naturalWidth || !img.naturalHeight) return;

    // Determine scale for cover
    const scale = Math.max(
      canvas.width / img.naturalWidth,
      canvas.height / img.naturalHeight
    );
    const dx = (img.naturalWidth * scale - canvas.width) / 2;
    const dy = (img.naturalHeight * scale - canvas.height) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Dark background under transparent pixels (if any)
    ctx.fillStyle = "#0e0e0e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      img,
      -dx / scale,
      -dy / scale,
      img.naturalWidth * scale,
      img.naturalHeight * scale
    );
  }, [images]);

  // Resize canvas handler
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // Set canvas internal resolution to window inner size
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame on resize
        const currentFrameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(scrollYProgress.get() * TOTAL_FRAMES)
        );
        renderFrame(currentFrameIndex);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // trigger initially

    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, renderFrame, scrollYProgress]); // re-run if imagesLoaded changes so we can render frame 0

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded) return;
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(latest * TOTAL_FRAMES))
    );
    renderFrame(frameIndex);
  });

  // Initial render when images load
  useEffect(() => {
    if (imagesLoaded) {
      renderFrame(0);
    }
  }, [imagesLoaded, renderFrame]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#0e0e0e]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Parallax overlays */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
