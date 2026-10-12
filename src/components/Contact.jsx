export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let's build something together.
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-md">
            Currently available for freelance projects and open to new opportunities. Whether you need a web application, a data pipeline, or both, I'd love to hear about your project.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-700">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:shraddhanargund.work@gmail.com" className="hover:text-indigo-600 transition-colors font-medium">
                shraddhanargund.work@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+917666450297" className="hover:text-indigo-600 transition-colors font-medium">
                +91 76664 50297
              </a>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Contact Form UI */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          {/* TO MAKE THIS WORK: Add action="https://api.web3forms.com/submit" method="POST" to the form tag and include your access key input */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell me about your web or data project..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}