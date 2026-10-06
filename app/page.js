import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="next-section flex items-center justify-center bg-[#0a0a0a] text-white">
        <p className="text-sm font-light tracking-[0.45em]">NEXT SECTION</p>
      </section>
    </main>
  );
}
