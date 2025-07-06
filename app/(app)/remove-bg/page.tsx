"use client";

import React, { useEffect, useState } from "react";
import type { Config } from "@imgly/background-removal";

// Define the function type
type RemoveBgFn = (input: Blob, config?: Config) => Promise<Blob>;

export default function BgRemovalPage() {
  const [removeBg, setRemoveBg] = useState<RemoveBgFn | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Dynamically import in browser only
  useEffect(() => {
    import("@imgly/background-removal").then((mod) => {
      mod.preload?.({
        model: "isnet", // ✅ best model
        device: "gpu",
      });

      setRemoveBg(() => mod.removeBackground as RemoveBgFn);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setOutputUrl(null);
    setFile(e.target.files?.[0] || null);
  };

  const handleRemove = async () => {
    if (!file || !removeBg) return;

    setIsProcessing(true);
    setError(null);

    try {
      const blob = new Blob([await file.arrayBuffer()], { type: file.type });

      const resultBlob = await removeBg(blob, {
        model: "isnet", // ✅ valid type-safe value
        device: "gpu",
      });

      const url = URL.createObjectURL(resultBlob);
      setOutputUrl(url);
    } catch (err) {
      console.error(err);
      setError("Background removal failed.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto max-w-2xl p-6 space-y-4">
      <h1 className="text-3xl font-bold text-center">Client-Side Background Remover</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="file-input file-input-bordered w-full"
      />

      <button
        className="btn btn-primary w-full"
        disabled={!file || isProcessing}
        onClick={handleRemove}
      >
        {isProcessing ? "Processing..." : "Remove Background"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {outputUrl && (
        <div className="text-center space-y-4">
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img src={outputUrl} alt="Background removed" className="mx-auto rounded shadow" />
          <a href={outputUrl} download="no_bg.png" className="btn btn-secondary">
            Download Image
          </a>
        </div>
      )}
    </div>
  );
}
