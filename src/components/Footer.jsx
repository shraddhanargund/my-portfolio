export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-12 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand / Copyright */}
        <div className="text-center md:text-left">
          <span className="text-xl font-bold tracking-tight text-white">
            Shraddha<span className="text-indigo-400">.</span>
          </span>
          <p className="text-slate-400 text-sm mt-2">
            © {currentYear} Shraddha Vinod Nargund. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/shraddhavinodnargund" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
            LinkedIn
          </a>
          <a href="https://github.com/shraddhanargund" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
            GitHub
          </a>
          <a href="mailto:shraddhanargund.work@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}