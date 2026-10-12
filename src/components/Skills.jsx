import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-200">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Technical Expertise
        </h2>
        <p className="text-lg text-slate-600 mt-4 max-w-2xl">
          My toolset spans the modern frontend ecosystem and robust data processing environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-lg border border-indigo-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}