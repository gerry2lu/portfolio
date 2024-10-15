"use client";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import {
  Sparkles,
  Code,
  Palette,
  Coffee,
  Send,
  ChevronDown,
  Lightbulb,
  Cpu,
  BarChart3,
  Rocket,
  Sun,
  Moon,
  Menu,
  MessageCircle,
  LucideArrowRight,
} from "lucide-react";
import TypingEffect from "@/components/typing-text";

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

// Animated component
const AnimatedElement = ({ children, className = "" }: any) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  }) as [MutableRefObject<HTMLDivElement | null>, boolean];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isIntersecting
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const interests = [
    { title: "Product", icon: <Lightbulb size={24} />, gridArea: "a" },
    { title: "Software Development", icon: <Cpu size={24} />, gridArea: "b" },
    { title: "Strategy", icon: <BarChart3 size={24} />, gridArea: "c" },
    { title: "Ventures", icon: <Rocket size={24} />, gridArea: "d" },
  ];

  const companies = [
    "TechCorp",
    "InnovateTech",
    "StrategyLabs",
    "CodeCrafters",
    "VentureVision",
    "DataDynamo",
    "CloudNine",
    "AIRevolution",
    "BlockchainBuilders",
    "CyberShield",
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "GraphQL", level: 75 },
    { name: "Python", level: 70 },
  ];

  const projects = [
    {
      title: "Project Awesome",
      description: "A revolutionary app that does... stuff. Very cool stuff.",
      category: "Web",
    },
    {
      title: "Sassy CSS Framework",
      description: "Because the world needed another CSS framework.",
      category: "CSS",
    },
    {
      title: "Bug Tracker 3000",
      description: "It finds bugs in your code, life, and relationships.",
      category: "Tool",
    },
    {
      title: "AI Meme Generator",
      description: "Teaching machines to be as unfunny as humans.",
      category: "AI",
    },
    {
      title: "Quantum Blog Engine",
      description: "It exists in multiple states until you observe it.",
      category: "Web",
    },
    {
      title: "Procrastination App",
      description: "An app to help you procrastinate more efficiently.",
      category: "Mobile",
    },
  ];

  const testimonials = [
    {
      name: "Jane Doe",
      role: "CEO, TechCorp",
      text: "Gerry Lu turned our ideas into digital gold!",
    },
    {
      name: "John Smith",
      role: "CTO, InnovateTech",
      text: "The most creative developer I've ever worked with.",
    },
    {
      name: "Alice Johnson",
      role: "Product Manager, StrategyLabs",
      text: "Gerry Lu's code is as clean as it is innovative.",
    },
  ];

  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-300 flex font-[family-name:var(--font-geist-sans)]`}
    >
      <nav
        className={`fixed left-0 top-0 bottom-0 w-64 ${
          darkMode
            ? "bg-gradient-to-r from-indigo-900/50 to-black rounded-lg"
            : "bg-white"
        } shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full justify-between p-6">
          <div>
            <img
              src="/pic.png"
              alt="Gerry Lu"
              className="rounded-full w-24 h-24 object-cover mb-4 border-2 border-purple-500"
            />
            <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-geist-mono)]">
              Gerry Lu
            </h2>
            <ul className="space-y-4">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Projects",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      smoothScroll(e, `#${item.toLowerCase()}`);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-lg font-medium hover:text-indigo-300 transition-colors ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full w-10 ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`lg:hidden fixed top-4 ${
          mobileMenuOpen ? "left-44" : "left-4"
        } transition-all duration-300 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700`}
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      <main
        className={`flex-1 lg:ml-64 font-[family-name:var(--font-geist-sans)]`}
      >
        <section
          id="home"
          ref={heroRef}
          className={`min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-cover bg-center ${
            darkMode ? "text-white" : "text-black"
          }`}
          style={{
            backgroundImage:
              'url("https://png.pngtree.com/thumb_back/fw800/background/20231024/pngtree-iridescent-ultraviolet-abstract-background-captivating-foil-texture-for-creative-designs-image_13680624.png")',
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div
            className={`absolute left-0 right-0 h-screen w-full ${
              darkMode
                ? "bg-[radial-gradient(circle_600px_at_50%_300px,#fbfbfb36,#000)]"
                : "bg-[radial-gradient(circle_600px_at_50%_300px,#fbfbfb36,#fff)]"
            }`}
          ></div>
          <div
            className={`absolute inset-0 ${
              darkMode ? "bg-black opacity-50" : "bg-black opacity-5"
            } `}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
              <AnimatedElement className="lg:w-1/2 text-center lg:text-left pl-12">
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight font-[family-name:var(--font-geist-mono)]">
                  Hey, I'm <span className="text-purple-500 ">Gerry Lu</span>
                </h1>
                <TypingEffect />
                <a
                  href="#about"
                  onClick={(e) => smoothScroll(e, "#about")}
                  className="mt-1 inline-block relative px-[1px] pt-[1px] pb-[2px] font-medium text-lg rounded-full overflow-hidden group bg-stone-400 shadow-lg"
                >
                  <div className="gradient-border-wrapper animate-border-spin absolute h-[550%] w-[100%] left-[0%] top-[-220%] z-10"></div>
                  <div
                    className={`relative z-10 flex items-center px-5 py-2 rounded-3xl ${
                      darkMode ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    Discover My Talents
                    <LucideArrowRight className="ml-2" />
                  </div>
                </a>
              </AnimatedElement>
              <AnimatedElement className="lg:w-1/2">
                <div
                  className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-md mx-auto"
                  style={{
                    gridTemplateAreas: `
                    "a a b"
                    "c d d"
                    "c d d"
                  `,
                  }}
                >
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex flex-col items-center justify-center text-center hover:transform hover:scale-105 transition-transform"
                      style={{ gridArea: interest.gridArea }}
                    >
                      <div className="text-yellow-400 mb-2 flex justify-center">
                        {interest.icon}
                      </div>
                      <h3 className="text-lg font-medium">{interest.title}</h3>
                    </div>
                  ))}
                </div>
              </AnimatedElement>
            </div>
          </div>
          <ChevronDown
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white"
            size={48}
          />
        </section>

        <AnimatedElement>
          <section
            id="about"
            className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-8 text-center tracking-tight">
                About Me
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Gerry Lu"
                    className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-purple-500"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-lg mb-4 font-light leading-relaxed">
                    I'm not your average developer. I'm a code poet, a pixel
                    perfectionist, and a caffeine-powered problem-solver. When
                    I'm not crafting beautiful websites, you can find me
                    debugging my life choices or optimizing my Netflix queue.
                  </p>
                  <p className="text-lg font-light leading-relaxed">
                    My spirit animal is a rubber duck, and my superpower is
                    turning "It's not possible" into "It's shipped." Let's
                    create some digital magic together!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedElement>

        <AnimatedElement>
          <section
            id="experience"
            className={`py-20 ${
              darkMode ? "bg-gray-900" : "bg-white"
            } overflow-hidden`}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-8 text-center tracking-tight">
                Companies I've Worked With
              </h2>
              <div className="relative">
                <div className="flex flex-wrap justify-center">
                  {companies.map((company, index) => (
                    <div
                      key={index}
                      className="inline-block  m-4 text-2xl font-medium hover:text-yellow-400 transition-colors cursor-pointer"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedElement>

        <AnimatedElement>
          <section
            id="skills"
            className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">
                My Superpowers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-light">{skill.level}%</span>
                    </div>
                    <div
                      className={`w-full h-4 ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      } rounded-full overflow-hidden`}
                    >
                      <div
                        className="h-full bg-yellow-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "0%" }}
                        ref={(el) => {
                          if (el) {
                            setTimeout(() => {
                              el.style.width = `${skill.level}%`;
                            }, 100);
                          }
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedElement>

        <AnimatedElement>
          <section
            id="projects"
            className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">
                My Digital Offspring
              </h2>
              <div className="flex justify-center space-x-4 mb-8 flex-wrap">
                {["All", "Web", "Mobile", "AI", "Tool", "CSS"].map(
                  (category) => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2 rounded-full mb-2 ${
                        activeFilter === category
                          ? "bg-yellow-400 text-gray-900"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {projects
                  .filter(
                    (project) =>
                      activeFilter === "All" ||
                      project.category === activeFilter
                  )
                  .map((project, index) => (
                    <AnimatedElement
                      key={index}
                      className={`${
                        darkMode ? "bg-gray-800" : "bg-gray-100"
                      } rounded-lg p-6 hover:shadow-lg transition-shadow break-inside-avoid`}
                    >
                      <h3 className="text-xl font-medium mb-2">
                        {project.title}
                      </h3>
                      <p className="font-light mb-4">{project.description}</p>
                      <span className="inline-block bg-yellow-400 text-gray-900 px-2 py-1 rounded text-sm">
                        {project.category}
                      </span>
                    </AnimatedElement>
                  ))}
              </div>
            </div>
          </section>
        </AnimatedElement>

        <AnimatedElement>
          <section
            id="testimonials"
            className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">
                What People Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <AnimatedElement
                    key={index}
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-white"
                    } p-6 rounded-lg shadow-lg`}
                  >
                    <p className="text-lg mb-4 font-light italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </section>
        </AnimatedElement>

        <AnimatedElement>
          <section
            id="contact"
            className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
          >
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">
                Let's Connect
              </h2>
              <div className="max-w-md mx-auto">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full px-4 py-2 rounded-md ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    } focus:outline-none focus:ring-2 focus:ring-yellow-400 font-light`}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-2 rounded-md ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    } focus:outline-none focus:ring-2 focus:ring-yellow-400 font-light`}
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className={`w-full px-4 py-2 rounded-md ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    } focus:outline-none focus:ring-2 focus:ring-yellow-400 font-light`}
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    Send It!
                  </button>
                </form>
              </div>
            </div>
          </section>
        </AnimatedElement>
        <div className="container mx-auto px-6 text-center">
          <p className="font-light">
            &copy; {new Date().getFullYear()} Gerry Lu. All rights reserved.
            Powered by caffeine and sass.
          </p>
        </div>
      </main>

      <div
        className="fixed bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:from-blue-700 hover:to-purple-700 transition-colors"
        style={{ opacity: scrollY > 200 ? 1 : 0, transition: "opacity 0.3s" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronDown className="transform rotate-180" size={24} />
      </div>

      <a
        href="#contact"
        onClick={(e) => smoothScroll(e, "#contact")}
        className="fixed bottom-4 left-4 lg:left-auto lg:right-20 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition-colors"
        aria-label="Contact me"
      >
        <MessageCircle className="text-gray-900" size={24} />
      </a>
    </div>
  );
}
