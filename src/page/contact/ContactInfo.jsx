import { contact } from "../../data/contact";

function ContactInfo() {
  return (
    <div className="rounded-3xl bg-slate-900 p-8 shadow-2xl ring-1 ring-white/10 sm:p-10">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Contact Information
        </h3>
        <p className="mt-2 text-base text-slate-400 sm:text-lg">
          Contact me directly or send me a message at any time.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
              Phone & WhatsApp
            </h4>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={contact.phone.href}
                className="group flex flex-col rounded-xl bg-slate-800/80 p-4 transition-all hover:bg-slate-800 hover:ring-1 hover:ring-emerald-500/40"
              >
                <span className="text-sm font-medium text-slate-200">Phone</span>
                <span className="mt-1 text-base font-semibold text-slate-400 transition-colors group-hover:text-emerald-400 sm:text-lg">
                  {contact.phone.display}
                </span>
              </a>

              <a
                href={contact.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl bg-slate-800/80 p-4 transition-all hover:bg-slate-800 hover:ring-1 hover:ring-emerald-500/40"
              >
                <span className="flex items-center justify-between text-sm font-medium text-slate-200">
                  <span>WhatsApp</span>
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                </span>
                <span className="mt-1 text-base font-semibold text-slate-400 transition-colors group-hover:text-emerald-400 sm:text-lg">
                  {contact.whatsapp.display}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-800 text-slate-300 ring-1 ring-white/10">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
              Email Address
            </h4>
            <a
              href={contact.email.href}
              className="mt-1 inline-block break-all text-base font-semibold text-slate-400 transition-colors hover:text-emerald-400 sm:text-lg"
            >
              {contact.email.display}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
