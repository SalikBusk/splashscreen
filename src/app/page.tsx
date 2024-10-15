"use client"

import SplashScreen from "@/Components/SplashScreen";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };
  return (
    <main>
      {loading ? <SplashScreen finishLoading={finishLoading} /> : null}
            <section className="flex justify-start">
                <span className="text-7xl relative">
          <Link href={"/about"} className="text-xl p-3 rounded-md bg-rose-400">
            about
                    </Link>
                </span>
            </section>
        </main>
  );
}
