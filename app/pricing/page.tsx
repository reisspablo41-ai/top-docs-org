export const metadata = { title: "Pricing" };

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-semibold">Pricing</h1>
      <p className="mt-3 text-zinc-800">
        Transparent pricing for guidance and support packages.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 p-4">
          <h2 className="text-sm font-semibold">Starter</h2>
          <p className="mt-2 text-sm text-zinc-800">Self-serve resources and checklists.</p>
          <p className="mt-4 text-lg font-semibold">Free</p>
        </div>
        <div className="rounded-xl border border-zinc-200 p-4">
          <h2 className="text-sm font-semibold">Guided</h2>
          <p className="mt-2 text-sm text-zinc-800">Email support and document review.</p>
          <p className="mt-4 text-lg font-semibold">Contact us</p>
        </div>
      </div>
    </main>
  );
}