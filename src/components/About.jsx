export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Bio Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              I am a Computer Science graduate building a dedicated freelance practice. My focus is on helping businesses modernize their digital presence and make sense of their data.
            </p>
            <p>
              I recognized early on that businesses don't just need a website, they need interconnected solutions. Whether it's crafting a responsive React interface, designing intuitive UX in Figma, or structuring raw enterprise data in Microsoft Fabric, I approach every problem with an engineering mindset.
            </p>
            <p>
              When I'm not coding web applications or building ELT transformations, I'm continuously exploring new ways to optimize workflows and deliver premium value to my clients.
            </p>
          </div>
        </div>

        {/* Timeline / Experience Section */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 lg:mt-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Experience & Background</h3>
          
          <div className="relative border-l-2 border-slate-200 pl-6 space-y-8">
            {/* Timeline Item 1 */}
            <div className="relative">
              <div className="absolute -left-[33px] top-1.5 w-4 h-4 bg-indigo-600 rounded-full border-4 border-slate-50"></div>
              <h4 className="text-lg font-bold text-slate-900">Power Platform & UI/UX Intern</h4>
              <p className="text-sm text-indigo-600 font-semibold mb-2">PSSTEC • July 2025 - Jan 2026</p>
              <p className="text-slate-600 text-sm">
                Built data ingestion pipelines using Microsoft Fabric and OneLake. Developed and optimized over 10 Power BI analytical dashboards integrated with Dynamics 365 Business Central. Designed intuitive interfaces for internal applications.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="absolute -left-[33px] top-1.5 w-4 h-4 bg-slate-300 rounded-full border-4 border-slate-50"></div>
              <h4 className="text-lg font-bold text-slate-900">B.Tech in Computer Science</h4>
              <p className="text-sm text-slate-500 font-semibold mb-2">MIT - World Peace University • CGPA: 7.15</p>
              <p className="text-slate-600 text-sm">
                Built a strong foundation in software engineering, database management, and data structures.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}