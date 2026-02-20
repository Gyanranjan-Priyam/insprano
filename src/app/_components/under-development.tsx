import Link from "next/link"

export default function UnderDevelopment() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="mb-6 font-mono text-[10px] tracking-widest text-foreground/50">
        [ CONSTRUCTION MODE ACTIVE ]
      </div>
      <h1 className="font-display text-5xl font-bold tracking-wider text-primary md:text-7xl [text-shadow:0_0_40px_oklch(from_var(--primary)_l_c_h/0.4)]">
        UNDER DEVELOPMENT
      </h1>
      <p className="mt-4 font-display text-lg tracking-wider text-foreground/80">
        We&apos;re building something incredible. Check back soon.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="border border-primary/30 bg-primary/10 px-6 py-2 font-mono text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary/20"
        >
          Return Home
        </Link>
      </div>
      
      {/* Progress indicator */}
      <div className="mt-12 w-64">
        <div className="mb-2 flex justify-between font-mono text-[10px] text-foreground/50">
          <span>PROGRESS</span>
          <span>42%</span>
        </div>
        <div className="h-1 w-full border border-primary/30 bg-background">
          <div className="h-full w-[42%] bg-primary shadow-[0_0_10px_var(--primary)]" />
        </div>
      </div>
    </div>
  )
}
