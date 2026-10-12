export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 min-h-[85vh] flex flex-col justify-center max-w-5xl mx-auto">
      <div className="max-w-3xl space-y-6">
        {/* Subtle eyebrow text */}
        <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
          Available for freelance opportunities
        </p>
        
        {/* Core positioning statement */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          Web & Data Solutions <br className="hidden md:block" />
          Developer
        </h1>
        
        {/* Value proposition - UPDATED */}
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
          I build intuitive web interfaces and transform complex data into actionable insights. From developing responsive business applications to architecting analytics solutions, I deliver tools that drive business value.
        </p>
        
        {/* Calls to Action */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <a 
            href="#work"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            View My Work
          </a>
          <a 
            href="https://github.com/shraddhanargund" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}