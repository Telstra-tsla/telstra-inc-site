import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto p-8 space-y-16">
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold">Move the future.</h1>
          <p className="text-xl mt-4">
            Electric vehicles, clean energy, and the infrastructure to power both.
          </p>
          <div className="mt-8 space-x-4">
            <button className="bg-[var(--color-accent-blue)] text-black px-6 py-3 rounded-lg">
              Order a Vehicle
            </button>
            <button className="bg-[var(--color-accent-purple)] text-white px-6 py-3 rounded-lg">
              Explore Energy
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Featured Vehicles</h2>
          {/* Placeholder — replace with carousel */}
          <div className="grid md:grid-cols-3 gap-6">
            {["Model S","Model 3","Model X","Model Y","Cybertruck","Roadster"].map((model) => (
              <div key={model} className="bg-[var(--color-panel)] p-6 rounded-xl">
                <h3 className="text-xl font-semibold">{model}</h3>
                <p className="text-[var(--color-muted)]">Range • Speed • AWD</p>
                <button className="mt-4 border border-[var(--color-accent-blue)] px-4 py-2 rounded-lg">
                  Order
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
