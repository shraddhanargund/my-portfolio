export default function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
      
      {/* Image or Placeholder Area */}
      <div className="h-48 w-full bg-slate-100 border-b border-slate-200 relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
            {/* 
              HOW TO REPLACE PLACEHOLDERS:
              1. Add your screenshot to the src/assets/ folder (e.g., 'saffron.png')
              2. In src/data/projects.js, import it: import saffronImg from '../assets/saffron.png'
              3. Set the image property: image: saffronImg 
            */}
            [ Project Screenshot Placeholder ]
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-600 text-sm mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((techItem) => (
            <span 
              key={techItem} 
              className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-md"
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-4 mt-auto">
          {project.link !== '#' && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Live Demo &rarr;
            </a>
          )}
          {project.github !== '#' && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}