type NodeProps = { layer: string; title: string; detail: string; highlight?: boolean };

function Node({ layer, title, detail, highlight }: NodeProps) {
  return (
    <div
      className={`rounded-lg border px-3 py-2.5 ${
        highlight ? "border-accent/50 bg-accent/[0.07]" : "border-ink-700 bg-ink-900"
      }`}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">{layer}</p>
      <p className="mt-0.5 text-sm font-medium text-white">{title}</p>
      <p className="text-xs text-slate-400">{detail}</p>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-1.5" aria-hidden="true">
      <div className="h-5 w-px bg-gradient-to-b from-ink-600 to-accent/60" />
    </div>
  );
}

/** A compact system diagram of PropScore, built with plain markup so it stays crisp and accessible. */
export default function Architecture() {
  return (
    <figure className="rounded-xl border border-ink-700 bg-ink-950/60 p-4 sm:p-5">
      <figcaption className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
        <span>System overview</span>
        <span className="flex items-center gap-1.5 normal-case tracking-normal text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Live
        </span>
      </figcaption>

      <div className="grid grid-cols-2 gap-2">
        <Node layer="Web" title="React + Vite" detail="Vercel" />
        <Node layer="Mobile" title="Expo" detail="iOS and Android" />
      </div>
      <Connector />
      <Node layer="API" title="Node.js + Express" detail="REST API on Render, shared by web and mobile" highlight />
      <Connector />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <Node layer="Data" title="Supabase" detail="Postgres + auth" />
        <Node layer="Billing" title="Stripe" detail="Checkout, webhooks, portal" />
        <Node layer="Geo + market" title="Mapbox · RentCast" detail="Maps, rents, comps" />
      </div>
    </figure>
  );
}
