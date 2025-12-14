export const metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-semibold">Privacy Policy</h1>
      <p className="mt-3 text-zinc-800">
        We respect your privacy. This policy explains what information we collect and how it is used.
      </p>
      <div className="mt-6 space-y-4 text-sm text-zinc-800">
        <p>We collect minimal personal information provided by you for communication purposes.</p>
        <p>We do not sell personal data. Data is retained only as long as necessary.</p>
        <p>Contact us to request deletion or updates to your information.</p>
      </div>
    </main>
  );
}