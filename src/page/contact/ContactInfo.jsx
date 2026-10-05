
function ContactInfo() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>

      <div className="font-outfit rounded-3xl bg-slate-900 p-8 sm:p-10 shadow-2xl ring-1 ring-white/10">
        {/* Main Header */}
        <div className="mb-8 border-b border-slate-800 pb-6">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Contact Information
          </h3>
          <p className="mt-2 text-base sm:text-lg text-slate-400">
            Contact me directly or send me a message at any time.
          </p>
        </div>

        <div className="space-y-8">
          {/* Phone Numbers Section */}
          <div className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                Phone & WhatsApp
              </h4>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href="tel:+11234567890"
                  className="group flex flex-col rounded-xl bg-slate-800/80 p-4 transition-all hover:bg-slate-800 hover:ring-1 hover:ring-emerald-500/40"
                >
                  <span className="text-ms font-medium text-slate-200">Primary Office</span>
                  <span className="mt-1 text-base sm:text-lg font-semibold text-slate-400 group-hover:text-emerald-400 transition-colors">
                    01036595279
                  </span>
                </a>

                <a
                  href="https://wa.me/10987654321?text=Hello!%20I'd%20like%20to%20make%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl bg-slate-800/80 p-4 transition-all hover:bg-slate-800 hover:ring-1 hover:ring-emerald-500/40"
                >
                  <span className="flex items-center justify-between text-ms font-medium text-slate-200">
                    <span>WhatsApp Line</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </span>
                  <span className="mt-1 text-base sm:text-lg font-semibold text-slate-400 group-hover:text-emerald-400 transition-colors">
                    011 2784 6533
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-800 text-slate-300 ring-1 ring-white/10">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                Email Address
              </h4>
              <a
                href="mailto:support@example.com"
                className="mt-1 inline-block text-base sm:text-lg font-semibold text-slate-400 transition-colors hover:text-emerald-400"
              >
                alkhwlyhasan777@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;