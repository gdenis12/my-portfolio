import avatar from './assets/avatar.jpg'
import './App.css'
import SkillsRadar from './SkillsRadar';
import { Home, User, Code, EnvelopeAlt, BriefcaseAlt, Github, LinkedinSquare, Envelope, Git, CSharp, Mongodb, TailwindCss, Nodejs, Typescript, Javascript, Postgresql } from '@boxicons/react';
import { SiReact } from "react-icons/si";
import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import ContactSection from './Contactsection';

const skills = [
  { icon: <SiReact fill="#ffffff" size={36} />, name: "React" },
  { icon: <Javascript fill="#ffffff" size="md" />, name: "JS" },
  { icon: <Typescript fill="#ffffff" size="md" />, name: "TS" },
  { icon: <Nodejs fill="#ffffff" size="md" />, name: "Node" },
  { icon: <TailwindCss fill="#ffffff" size="md" />, name: "Tailwind" },
  { icon: <Postgresql fill="#ffffff" size="md" />, name: "PostgreSQL" },
  { icon: <Mongodb fill="#ffffff" size="md" />, name: "Mongo" },
  { icon: <CSharp fill="#ffffff" size="md" />, name: "C#" },
  { icon: <Git fill="#ffffff" size="md" />, name: "Git" },
];

const navLinks = [
  { href: "#home", icon: <Home />, label: "Home" },
  { href: "#about", icon: <User />, label: "About" },
  { href: "#skills", icon: <Code />, label: "Skills" },
  { href: "#projects", icon: <BriefcaseAlt />, label: "Projects" },
  { href: "#contact", icon: <EnvelopeAlt />, label: "Contacts" },
];

const words = ["Developer", "Designer"];
const navItemClass = 'flex gap-1 p-2 md:p-3 rounded-full transition-all duration-500 ease-in-out hover:bg-gray-300/5 text-sm md:text-base';

function App() {
  const avatarUrl = avatar;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const current = words[index];
    const speed = deleting ? 60 : 120;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1500);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <>
      <div className='bg-gradient-to-bl from-[#1a2420] to-[#0f1614] min-h-screen' id='home'>

        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[85px] px-4 md:px-6 font-sans text-white backdrop-blur-md bg-black/15 border-b-2 border-white/40">
          <div className='flex flex-col font-bold'>
            <a href="#home">
              <h1 className='text-3xl md:text-4xl text-[#e8f5e9]'>gdenis</h1>
              <span className='text-xs md:text-sm pl-4 md:pl-6 font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#00e676] via-[#4caf50] to-[#00e676] bg-[length:200%_100%] animate-shimmer'>
                Web Developer
              </span>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className='hidden md:flex items-center gap-2 lg:gap-4 h-[75%] px-4 text-lg bg-black/30 rounded-full'>
            {navLinks.map(({ href, icon, label }) => (
              <a key={label} href={href} className={navItemClass}>
                {icon}{label}
              </a>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className='md:hidden flex flex-col gap-1.5 p-2'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </header>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className='fixed top-[85px] left-0 right-0 z-40 bg-black/60 backdrop-blur-md border-b border-white/10 flex flex-col md:hidden'>
            {navLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className='flex items-center gap-3 px-6 py-4 text-white hover:bg-white/5 transition-colors border-b border-white/5'
              >
                {icon}{label}
              </a>
            ))}
          </div>
        )}

        {/* HERO SECTION */}
        <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center px-6 md:px-20 relative overflow-hidden pt-[85px] gap-8 lg:gap-0 py-10 lg:py-0">

          {/* GitHub calendar */}
          <div className="w-full lg:w-[600px] lg:shrink-0 text-white">
            <div className="bg-[#0f1614] p-4 md:p-6 rounded-2xl shadow-lg border border-[#1f2a27] transition duration-300 hover:shadow-[0_0_30px_rgba(0,230,118,0.2)] hover:-translate-y-1 overflow-x-auto">
              <h3 className="text-white text-lg mb-4">GitHub Activity</h3>
              <div className="min-w-0">
                <GitHubCalendar
                  username="gdenis12"
                  colorScheme="dark"
                  theme={{ dark: ['#0f1614', '#00e676'] }}
                  blockSize={12}
                  blockMargin={3}
                  fontSize={12}
                />
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { val: "65+", label: "Contributions" },
                  { val: "10+", label: "Projects" },
                  { val: "3+", label: "Years Learning" },
                  { val: "∞", label: "Motivation" },
                ].map(({ val, label }) => (
                  <div key={label} className="bg-[#111] p-3 md:p-4 rounded-xl border border-[#1f2a27]">
                    <p className="text-xl md:text-2xl font-bold text-green-400">{val}</p>
                    <p className="text-xs md:text-sm text-gray-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero text */}
          <div className="flex-1 flex flex-col items-center justify-center text-center text-white font-sans lg:pl-10">
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
              Hi, I'm a gdenis, <br />
              A Web{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00e676] via-[#4caf50] to-[#00e676] bg-[length:200%_100%] animate-shimmer'>
                {text}
              </span>
              <span className="animate-pulse text-[#00e676] font-normal">|</span>
            </h1>
            <h2 className='text-zinc-400 pt-4 text-base md:text-lg max-w-xl leading-relaxed'>
              I craft modern web applications with clean code and a sharp eye for design —{" "}
              turning ideas into fast, interactive, and user-centered digital experiences
              that people love to use.
            </h2>
            <div className='mt-8 md:mt-10 flex gap-4'>
              <a href="#projects" className='bg-[#00e676] text-[#0f1614] px-5 md:px-6 py-2.5 md:py-3 rounded-full font-bold transition-all duration-200 hover:scale-105 hover:brightness-110 cursor-pointer text-sm md:text-base'>
                My Projects
              </a>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border-2 border-white/30 hover:scale-105 hover:bg-white/25 hover:border-white/55 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full font-bold transition-all duration-200 cursor-pointer text-sm md:text-base"
              >
                View CV
              </a>
            </div>
            <div className='flex justify-center gap-6 mt-6 md:mt-8'>
              <a href="https://github.com/gdenis12" target="_blank" rel="noreferrer" className='text-zinc-400 hover:text-[#00e676] hover:scale-110 transition-all duration-200'><Github size="lg" /></a>
              <a href="https://www.linkedin.com/in/huba-denis-3bb786301" target="_blank" rel="noreferrer" className='text-zinc-400 hover:text-[#00e676] hover:scale-110 transition-all duration-200'><LinkedinSquare size="lg" /></a>
              <a href="mailto:gubadenisweb@gmail.com" className='text-zinc-400 hover:text-[#00e676] hover:scale-110 transition-all duration-200'><Envelope pack="filled" size="lg" /></a>
            </div>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="min-h-screen flex items-center px-6 md:px-20 relative overflow-hidden pt-[85px] py-16">
          <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-0">

            <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left text-white font-sans lg:mr-36">
              <h1 className='text-5xl md:text-6xl font-bold leading-tight scroll-mt-[350px]' id='about'>
                About Me
              </h1>
              <h2 className='text-zinc-400 pt-4 text-base md:text-lg max-w-xl leading-relaxed'>
                I'm a 17-year-old junior web developer from Kryvyi Rih, Ukraine, with 3+ years of experience building modern web applications. I specialize in React, Tailwind CSS, and JavaScript on the frontend, and I'm actively growing in backend development with Node.js and C#. I work with databases like PostgreSQL and MongoDB, and I enjoy building full-stack projects from scratch. Currently studying at ITSTEP Academy. I'm a fast learner, team-oriented, and results-driven — open to internship or junior developer opportunities.
              </h2>
            </div>

            <div className="lg:shrink-0 flex items-center justify-center">
              <div className='w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#00e676]/40 shadow-[0_0_40px_rgba(0,230,118,0.15)]'>
                <img src={avatarUrl} alt="Denis" className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="min-h-screen flex items-center px-6 md:px-20 relative overflow-hidden pt-[85px] py-16">
          <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

            <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left text-white font-sans lg:mr-36">
              <h1 className='text-5xl md:text-6xl font-bold leading-tight mb-8 scroll-mt-[325px]' id='skills'>
                Skills
              </h1>
              <div className="w-full max-w-xs md:max-w-sm grid grid-cols-3 gap-3 items-center justify-items-center">
                {skills.map(({ icon, name }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-2 p-3 md:p-4 w-full rounded-xl bg-[#00e676]/5 border border-[#00e676]/10 transition duration-200 hover:bg-[#00e676]/15 hover:border-[#00e676]/40 hover:-translate-y-1 cursor-default"
                  >
                    <span className="text-2xl md:text-3xl">{icon}</span>
                    <span className="font-mono text-[0.6rem] md:text-[0.65rem] text-[#00e676] font-medium tracking-wider uppercase">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:flex-1 flex items-center justify-center overflow-x-auto">
              <SkillsRadar />
            </div>
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div className="min-h-screen flex items-center justify-center px-6 md:px-20 relative overflow-hidden pt-[85px] py-16" id='projects'>
          <div className="relative bg-black/30 border border-[#00e676]/15 rounded-2xl p-8 md:p-12 flex flex-col items-center text-center max-w-lg w-full overflow-hidden">
            <span className="absolute text-[80px] md:text-[130px] font-bold select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-b from-[#00e676]/10 to-transparent top-0 right-4">
              WIP
            </span>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00e676]/5 border border-[#00e676]/20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl mb-6">💻</div>
            <span className="font-mono text-xs text-[#00e676] border border-[#00e676]/30 bg-[#00e676]/5 px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">
              In Progress
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Projects Loading...</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-sm mb-2">
              I'm currently building something cool. <br />
              Check back soon — or star my{" "}
              <a href="https://github.com/gdenis12" target="_blank" rel="noreferrer" className="text-[#00e676] hover:underline">GitHub</a>
              {" "}to stay updated.
            </p>
            <div className="w-full bg-white/5 rounded-full h-1.5 mt-6 mb-2">
              <div className="h-1.5 rounded-full bg-gradient-to-r from-[#00e676] to-[#4caf50] w-[35%] animate-pulse" />
            </div>
            <p className="font-mono text-xs text-zinc-500">35% complete</p>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div id="contact">
          <ContactSection />
        </div>

      </div>
    </>
  );
}

export default App;