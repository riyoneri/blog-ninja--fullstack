"use client";
import { useEffect } from "react";
import type {} from "ldrs";

export default function Loader() {
  useEffect(() => {
    async function getLoader() {
      const { orbit } = await import("ldrs");
      orbit.register();
    }
    getLoader();
  }, []);

  return <l-orbit size="40" speed="1.5" color="black"></l-orbit>;
}
