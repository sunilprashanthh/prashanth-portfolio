// src/app/page.tsx
import Image from 'next/image';
import { ThemeSwitcher } from '@/components/ThemeSwitcher'; // Adjust path if necessary

// SectionTitle and Tag components remain the same from your previous code
const SectionTitle = ({ title }: { title: string }) => {
  return <h2 className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 mb-8 mt-12 text-center md:text-left">{title}</h2>;
};

const Tag = ({ text }: { text: string }) => {
  return (
      <span className="bg-gray-200 text-cyan-700 dark:bg-gray-700 dark:text-cyan-300 px-3 py-1.5 rounded-full text-sm mr-2 mb-2 inline-block shadow-md">
      {text}
    </span>
  );
};


export default function HomePage() {
  // --- CONTENT PLACEHOLDERS (from your previous code) ---
  const yourName = "Prashanth E";
  const yourRole = "Application Security Engineer";
  const heroIntroText = "Hello! I'm Prashanth, a cybersecurity professional transforming digital landscapes by blending QA expertise with a deep passion for application security.";
  const profileImageSrc = "/prashanth-profile.jpg"; // Update this path

  // ... (rest of your content objects: education, career, technicalProfile) ...
  // Ensure you have these defined as in the previous version of this file.
  // For brevity, I'm omitting them here, but they should be present.
  // Example:
  const education = {
    title: "My Foundation & Education",
    ug: { degree: "Bachelor’s degree in Computer Applications", institution: "SRM Institute of Science and Technology", details: "Started IT career with this degree." },
    pg: { degree: "Part-time Master’s degree", institution: "University of Madras", details: "Pursued while working as an Automation Tester." },
    fascination: "Always fascinated by how systems work, whether reverse-engineering gadgets, analyzing code, or obsessing over Batman’s tech."
  };
  const career = { // This object itself does not have a 'title' property
    firstJob: { role: "Automation Tester", company: "Infosys", spark: "Cybersecurity journey started during my bachelor’s program with a Phishing Detection Application project..." },
    udemyExperiment: { title: "The Udemy Experiment", course: "'Ethical Hacking from Scratch' by Zaid Sabih.", learnings: "Introduced basics... a humbling lesson..." },
    tryHackMeAwakening: { title: "TryHackMe & Practical Awakening", experience: "My breakthrough came with TryHackMe... skills now used daily..." }
  };
  const technicalProfile = {
    // This object also does not have a 'title' property directly
    skillsAndTechIntro: "Key skills and technologies I've worked with through my journey:",
    categories: [
      { name: "From Phishing Project & Early Learning", items: ["Open-source GitHub tools"] },
      { name: "Udemy Course Learnings", items: ["Information Gathering", "Network Scanning", "Nmap", "Wireshark", "Metasploit", "WAPT"] },
      { name: "TryHackMe Expertise (100+ labs)", items: ["Pentesting Principles", "Linux Mastery", "Network Fundamentals", "OWASP Top 10", "Nmap Advanced", "EternalBlue"] },
      { name: "Current Role @ Infosys - Focus Areas & Tools", items: ["Identifying OWASP Top 10", "Securing Legacy Systems", "GDPR/HIPAA", "Automating Security in CI/CD", "Burp Suite", "Selenium", "Java"] }
    ],
    certifications: [
      { name: "CompTIA Security+", status: "Certified" },
      { name: "CEH v12", status: "Certified" },
      { name: "OSCP", status: "Preparing" }
    ]
  };


  return (
      // Main page background and text colors are now theme-aware
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 font-sans leading-relaxed transition-colors duration-300">

        {/* Theme Switcher - Positioned fixed for easy access */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeSwitcher />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">

          {/* Hero/Introduction Section */}
          <section
              id="hero-introduction"
              className="min-h-screen flex flex-col justify-center items-center p-6 md:p-12 lg:p-24
                     bg-gradient-to-br from-gray-100 via-white to-gray-100
                     dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                     relative overflow-hidden transition-colors duration-300"
          >
            {/* ... (Optional subtle background pattern - ensure it also supports dark/light themes if used) ... */}

            <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 relative transform transition-all duration-500 hover:scale-105">
                  <Image
                      src={profileImageSrc}
                      alt={yourName}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full shadow-2xl border-4 border-gray-300 dark:border-gray-700 transition-colors duration-300"
                      priority
                  />
                </div>
              </div>
              <div className="md:col-span-3 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight transition-colors duration-300">
                  <span className="block">{yourName.split(' ')[0]}</span>
                  <span className="block text-cyan-600 dark:text-cyan-400 transition-colors duration-300">{yourName.substring(yourName.indexOf(' ') + 1)}</span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
                  {yourRole}
                </p>
                <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0 transition-colors duration-300">
                  {heroIntroText}
                </p>
                <div className="mt-10">
                  <a
                      href="#education"
                      className="inline-block bg-cyan-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg
                             hover:bg-cyan-600 dark:hover:bg-cyan-400
                             transform hover:scale-105 transition-all duration-300"
                  >
                    Discover My Journey
                  </a>
                </div>
              </div>
            </div>
            {/* ... (Scroll down indicator - ensure its colors are theme-aware if you keep it) ... */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 animate-bounce hidden md:block transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-16 md:py-24 px-6 container mx-auto max-w-4xl">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-xl transition-colors duration-300">
              <SectionTitle title={education.title} /> {/* This is correct as education object has a title property */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{education.ug.degree}</h3>
                  <p className="text-cyan-600 dark:text-cyan-500">{education.ug.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{education.ug.details}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{education.pg.degree}</h3>
                  <p className="text-cyan-600 dark:text-cyan-500">{education.pg.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{education.pg.details}</p>
                </div>
                <p className="italic text-gray-500 dark:text-gray-500 pt-2">{education.fascination}</p>
              </div>
            </div>
          </section>

          {/* Career Journey Section - Alternating Background Example */}
          <section id="career-journey" className="py-16 md:py-24 px-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto max-w-4xl p-6 bg-white dark:bg-gray-850 rounded-xl shadow-xl transition-colors duration-300"> {/* Inner card can have slightly different bg */}
              {/* CORRECTED LINE BELOW: Provide a string literal for the main section title */}
              <SectionTitle title="My Career Journey" />
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{career.firstJob.role} at <span className="text-cyan-600 dark:text-cyan-500">{career.firstJob.company}</span></h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{career.firstJob.spark}</p>
                </div>
                <div>
                  {/* Sub-section title from career object */}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{career.udemyExperiment.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1"><span className="font-medium text-gray-700 dark:text-gray-200">Course:</span> {career.udemyExperiment.course}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{career.udemyExperiment.learnings}</p>
                </div>
                <div>
                  {/* Sub-section title from career object */}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{career.tryHackMeAwakening.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{career.tryHackMeAwakening.experience}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Profile Section */}
          <section id="technical-profile" className="py-16 md:py-24 px-6 container mx-auto max-w-4xl">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-xl transition-colors duration-300">
              {/* CORRECTED LINE BELOW: Provide a string literal for the main section title */}
              <SectionTitle title="Technical Profile & Skills" />
              <p className="text-gray-600 dark:text-gray-400 mb-6">{technicalProfile.skillsAndTechIntro}</p>
              {technicalProfile.categories.map((category) => (
                  <div key={category.name} className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{category.name}:</h3>
                    <div className="flex flex-wrap">
                      {category.items.map((item) => <Tag key={item} text={item} />)}
                    </div>
                  </div>
              ))}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 mt-6">Certifications:</h3>
                <div className="flex flex-wrap">
                  {technicalProfile.certifications.map((cert) => (
                      <Tag key={cert.name} text={`${cert.name} (${cert.status})`} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-10 border-t border-gray-300 dark:border-gray-700 mt-12 transition-colors duration-300">
            <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} {yourName}. All rights reserved.</p>
          </footer>

        </div>
      </div>
  );
}