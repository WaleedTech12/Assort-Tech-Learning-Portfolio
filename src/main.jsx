import { createRoot } from 'react-dom/client'
import './style.css'

function App() {
  return (
    <div className="min-h-screen bg-green-950 text-white">
      <nav className="border-b border-white-400">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-white">
          <h1 className="text-xl text-white-200 font-bold">Waleed Nisar</h1>

          <div className="hidden gap-6 md:flex">
            <a href="#home" className="text-slate-300 hover:text-white">Home</a>
            <a href="#about" className="text-red-300 hover:text-white">About</a>
            <a href="#skills" className="text-slate-300 hover:text-white">Skills</a>
            <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6"
      >
        <div className="max-w-xl">
          <p className="mb-4 text-lg font-medium text-blue-600">
            Web Development Intern
          </p>

          <h2 className="text-5xl font-bold leading-tight md:text-7xl">
            Building modern{' '}
            <span className="text-gray-600">web experiences.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I'm a passionate web development intern with a strong foundation in HTML, CSS, and JavaScript.
          </p>

          <div className="mt-8 flex flex-wrap gap-15">
            <a
              href="#projects"
              className="rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-green-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-green-700 px-6 py-3 font-semibold hover:bg-red-800"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="text-green-800 py-24">
        <div className="mx-auto max-w-4xl px-10">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I'm a Computer Science graduate and aspiring full-stack developer.{' '}
            <span className="text-red-500">
              I'm currently improving my skills in modern frontend technologies and learning how professional development teams build applications.
            </span>
          </p>
        </div>
      </section>

      <section id="skills" className="bg-slate-900 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-white font-bold">Skills</h2>

          <div className="mt-10 grid gap-3 sm:grid-cols-4 lg:grid-cols-4">
            <div className="rounded-xl border border-green-800 bg-red-950 p-6">
              <h3 className="text-xl font-bold">HTML</h3>
              <p className="mt-3 text-slate-400">Building semantic web pages.</p>
            </div>
            <div className="rounded-xl border border-yellow-800 bg-purple-950 p-6">
              <h3 className="text-xl font-bold">CSS</h3>
              <p className="mt-3 text-slate-400">Styling and responsive layouts.</p>
            </div>
            <div className="rounded-xl border border-blue-800 bg-black-950 p-6">
              <h3 className="text-xl font-bold">JavaScript</h3>
              <p className="mt-3 text-slate-400">Adding logic and interactivity.</p>
            </div>
            <div className="rounded-xl border border--800 bg-pink-950 p-6">
              <h3 className="text-xl font-bold">Tailwind</h3>
              <p className="mt-3 text-slate-400">Building interfaces with utility classes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-24">
        <div className="mx-auto max-w-14xl px-6">
          <h2 className="text-4xl font-bold">Projects</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold">Task Manager</h3>
              <p className="mt-4 text-yellow-400">
                A task management application built while learning modern frontend development.
              </p>
              <button className="mt-6 rounded-lg bg-red-600 px-5 py-2 font-medium hover:bg-blue-700">
                View Project
              </button>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-2xl font-bold">AI Recruiter</h3>
              <p className="mt-4 text-orange-400">
                An AI-based recruitment project designed to automate parts of the hiring workflow.
              </p>
              <button className="mt-6 rounded-lg bg-orange-600 px-5 py-2 font-medium hover:bg-orange-700">
                View Project
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-8xl font-bold">Let's Work Together</h2>
          <p className="mx-auto mt-5 max-w-xl text-pink-400">
            I'm interested in learning, building and working on modern web applications.
          </p>
          <button className="mt-8 rounded-lg bg-gray-600 px-8 py-3 font-semibold hover:bg-green-700">
            Contact Me
          </button>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-8 text-center">
        <p className="text-slate-500">© 2026 Waleed. All rights reserved.</p>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('app')).render(<App />)