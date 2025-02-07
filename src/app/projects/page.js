export default function Projects() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-700 p-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-gray-600 p-4 rounded-lg shadow-lg hover:scale-105 transition"
            >
              <h2 className="text-xl font-bold">Project {project}</h2>
              <p className="mt-2 text-sm">A brief description of the project goes here.</p>
            </div>
          ))}
        </div>
      </section>
    );
  }