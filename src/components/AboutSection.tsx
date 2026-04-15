import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6" id="about">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
            {/* <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6 md:mb-8 font-sans">
              About 
            </p> */}
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8 md:mb-10 text-foreground leading-tight">
            About <span className="italic text-gradient-warm">Me</span> 
            <br />
            
          </h2>
          <div className="space-y-5 md:space-y-6 text-sm md:text-base text-muted-foreground leading-[1.8] font-sans font-light">
            <p>
              I'm a Master's student at{" "}
              <span className="text-foreground font-normal">Brown University</span>,
              where I study Computer Engineering & Computer Science with research in AI and robotics. I'm currently a research assistant at the Carney Institute for Brain Science at Brown, and previously have been a RA at Georgia Tech. I've worked as an intern in India's leading AI company, Fractal and have been an SDE intern at Jai Kisan. </p>
            <p>
              I work on <b>reinforcement learning and robotics</b>, mainly focused on decision-making in intelligent systems and agents. I'm curious, focused, passionate, and hardworking, and I'm the happiest when I'm building.
            </p>
            <p>
              I'm an aspiring entrepreneur and <b>currently looking to work in growing startup environments</b>. I'm also open to research opportunities in AI, robotics, and computational neuroscience. If you’re looking for someone who can build, communicate, and understand what actually makes a product work, you’re in the right place! 
            </p>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 md:mt-12 inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase font-sans font-normal text-foreground border border-foreground/20 hover:border-foreground/60 px-6 py-3.5 transition-all duration-300 hover:bg-foreground/5 group"
          >
            <span>View Resume</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-6 md:gap-12 mt-14 md:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* {[
            { value: "15+", label: "Projects" },
            { value: "3", label: "Publications" },
            { value: "∞", label: "Curiosity" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-4xl font-serif text-foreground">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-2 tracking-[0.2em] uppercase font-sans font-light">
                {stat.label}
              </p>
            </div>
          ))} */}
        </motion.div>
      </div>
    </section>
  );
}