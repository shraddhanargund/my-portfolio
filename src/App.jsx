import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projects';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Selected Work Section */}
        <section id="work" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-200">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Selected Work
            </h2>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl">
              A collection of web development and data analytics projects showcasing my ability to build interfaces and process complex datasets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        
        <Skills />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;