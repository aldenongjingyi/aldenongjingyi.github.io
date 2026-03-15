"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { photography } from "@/lib/data";
import { X, Camera } from "lucide-react";

export function PhotographySection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="photography" className="pb-24">
      <div className="animate-in mb-1">
        <span className="text-xs text-[#555] uppercase tracking-widest">
          Visual Work
        </span>
      </div>
      <h2 className="animate-in text-2xl font-bold text-[#f5f5f5] mb-2" style={{ animationDelay: '40ms' }}>
        Photography
      </h2>
      <p className="animate-in text-sm text-[#888] mb-8" style={{ animationDelay: '80ms' }}>
        Shot through{" "}
        <a
          href="https://instagram.com/waffleboxproductions"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f59e0b] hover:underline"
        >
          WaffleBox Productions
        </a>
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {photography.map((photo, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            className="animate-in relative aspect-square rounded-lg overflow-hidden cursor-pointer group border border-[#1f1f1f] hover:border-[#333] transition-all"
            style={{ animationDelay: `${120 + i * 50}ms` }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <Camera size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-2xl max-h-[80vh] rounded-lg overflow-hidden"
            >
              <Image
                src={photography[selected].src}
                alt={photography[selected].alt}
                width={800}
                height={800}
                className="object-contain"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-colors"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
