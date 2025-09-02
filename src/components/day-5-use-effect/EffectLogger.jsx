import { useEffect, useRef, useState } from "react";

export default function EffectLogger() {
  const [count, setCount] = useState(0)
  const renders = useRef(0)
  renders.current += 1


  useEffect(() => {
    // Used for demo log, avoid heavy work here
    console.log("[Effect] no-deps -> after every render (render #", renders.current, ")");
  })

  // With deps: on `count` change
  useEffect(() => {
    console.log("[Effect] deps [count] -> count changed to", count)
  }, [count]);

  // Cleanup example: ticking timer
  useEffect(() => {
    console.log("[Effect] mount -> start interval");
    const id = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      clearInterval(id)
      console.log("[Cleanup] unmount -> interval cleared");

    }
  },[]); // mount once

  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Effect Logger</h3>
      <p className="text-sm">Renders: {renders.current}</p>
      <p className="text-sm">Count: {count}</p>
      <div className="flex gap-2">
        <button className="rounded border px-2 py-1 text-sm" onClick={() => setCount((count) => count + 1 )}>Increment</button>
        <button className="rounded border px-2 py-1 text-sm" onClick={() => setCount(0)}>Reset</button>
      </div>

      <p className="text-xs text-neutral-500">
        Open the browser console to see when each effect fires (mount/update/unmount)
      </p>
    </div>
  )
};
