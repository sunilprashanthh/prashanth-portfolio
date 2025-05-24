// Define a simple component for section titles to maintain consistency
const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-3xl font-bold text-cyan-400 mb-6">{children}</h2>;
};

// Define a simple component for skill/tool tags
const Tag = ({ children }: { children: React.ReactNode }) => {
  return <span className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 inline-block">{children}</span>;
};


export default function HomePage() {
  // Content based on your blog post (Source [1])
  const intro = {
    headline: "My Journey into Cybersecurity",
    statement: "Hello Folks! Thank you for visiting. Let me take you through my journey into cybersecurity, from curiosity-driven tinkerer to a certified professional blending QA and AppSec." // [cite: 1]
  };

  const foundation = {
    title: "The Spark: Early Beginnings",
    points: [
      "Started IT career with a Bachelor’s degree in Computer Applications, followed by a part-time Master’s degree while working as an Automation Tester.", // [cite: 1]
      "Always fascinated by how systems work—whether reverse-engineering gadgets, analyzing code, or obsessing over Batman’s tech.", // [cite: 1]
      "Cybersecurity journey began during my bachelor’s program with a Phishing Detection Application project.", // [cite: 1]
      "Built a system to detect malicious emails and spoofed websites using open-source tools from GitHub.", // [cite: 1]
      "This project sparked my passion for ethical hacking, understanding it as methodical problem-solving." // [cite: 1]
    ]
  };

  const learningCurve = {
    title: "Navigating the Learning Curve",
    udemy: {
      intro: "A friend gifted me a Udemy course 'Ethical Hacking from Scratch' by Zaid Sabih. While it introduced basics like information gathering, scanning, and gaining access, I struggled to grasp the \"why\" behind attacks. Completing the course left me with a certificate but little practical knowledge—a humbling lesson in the importance of foundational learning.", // [cite: 1]
      skills: ["Information Gathering", "Network Scanning", "Nmap Advanced Enumeration", "Wireshark Packet Analysis", "Metasploit Framework", "Web App Testing (WAPT)", "Access Exploitation"] // [cite: 1] (Combined from list)
    },
    tryhackme: {
      intro: "My breakthrough came with TryHackMe. Here, I learned the fundamentals of networking, tools like Nmap, and web app hacking via the OWASP Top 10. Solving machines taught me to research services, abuse misconfigurations, and chain vulnerabilities—skills I now use daily as a Software Quality Engineer at Infosys.", // [cite: 1]
      achievementsHeading: "Mastered through 100+ labs:", // [cite: 1]
      skills: ["Pentesting Principles", "Linux System Mastery", "Network Fundamentals", "OWASP Top 10 Vulnerabilities", "Nmap Advanced Techniques", "EternalBlue Exploitation"] // [cite: 1] (Combined from list)
    }
  };

  const currentStatus = {
    title: "Where I Am Now: Merging QA and AppSec",
    introPoints: [
      "Today, I hold certifications like CompTIA Security+ and CEH v12, and I’m preparing for the OSCP.", // [cite: 1]
      "At Infosys, I merge QA automation (Java/Selenium) with security testing, focusing on:", // [cite: 1]
    ],
    focusAreas: [
      "Identifying OWASP Top 10 vulnerabilities in web apps/APIs.", // [cite: 1]
      "Securing legacy systems (Mainframe, Oracle JDBC) for GDPR/HIPAA compliance.", // [cite: 1]
      "Automating security checks in CI/CD pipelines using tools like Burp Suite." // [cite: 1]
    ],
    summary: {
      certifications: ["Security+", "CEH v12"], // [cite: 1]
      tools: ["Burp Suite", "Metasploit", "Selenium"], // [cite: 1]
      specialties: ["Web App Security", "Legacy System Hardening"] // [cite: 1]
    }
  };

  const finalThoughts = {
    title: "The Journey Continues",
    statement1: "Cybersecurity is a journey of continuous learning. Whether you’re starting with TryHackMe or transitioning from QA like me, persistence and curiosity are key.", // [cite: 1]
    statement2: "If you’re passionate about ethical hacking, AppSec, or Batman’s tech, let’s connect!" // [cite: 1]
  };

  const connectLinks = [
    { name: "Twitter", url: "#" }, // Replace # with actual URLs
    { name: "LinkedIn", url: "#" },
    { name: "Blog", url: "https://sunilprashanthh.blogspot.com/" } // [cite: 1]
  ];


  return (
      <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl"> {/* Main container for content */}
        {/* Hero/Introduction Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{intro.headline}</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{intro.statement}</p>
        </section>

        {/* Foundation Section */}
        <section className="mb-12">
          <SectionTitle>{foundation.title}</SectionTitle>
          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
            {foundation.points.map((point, index) => <li key={index}>{point}</li>)}
          </ul>
        </section>

        {/* Learning Curve Section */}
        <section className="mb-12">
          <SectionTitle>{learningCurve.title}</SectionTitle>
          <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-3">The Udemy Experiment</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{learningCurve.udemy.intro}</p>
            <div className="mb-2">
              {learningCurve.udemy.skills.map(skill => <Tag key={skill}>{skill}</Tag>)}
            </div>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-3">TryHackMe & Practical Awakening</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{learningCurve.tryhackme.intro}</p>
            <h4 className="font-semibold text-white mb-2">{learningCurve.tryhackme.achievementsHeading}</h4>
            <div>
              {learningCurve.tryhackme.skills.map(skill => <Tag key={skill}>{skill}</Tag>)}
            </div>
          </div>
        </section>

        {/* Current Status Section */}
        <section className="mb-12">
          <SectionTitle>{currentStatus.title}</SectionTitle>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            {currentStatus.introPoints.map((point, index) => <p key={index} className="text-gray-300 mb-2 leading-relaxed">{point}</p>)}
            <ul className="list-disc list-inside space-y-2 my-4 text-gray-300 pl-4">
              {currentStatus.focusAreas.map((area, index) => <li key={index}>{area}</li>)}
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Certifications:</h4>
                {currentStatus.summary.certifications.map(cert => <Tag key={cert}>{cert}</Tag>)}
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Tools:</h4>
                {currentStatus.summary.tools.map(tool => <Tag key={tool}>{tool}</Tag>)}
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Specialties:</h4>
                {currentStatus.summary.specialties.map(spec => <Tag key={spec}>{spec}</Tag>)}
              </div>
            </div>
          </div>
        </section>

        {/* Final Thoughts Section */}
        <section className="mb-12 text-center">
          <SectionTitle>{finalThoughts.title}</SectionTitle>
          <p className="text-gray-300 mb-3 leading-relaxed">{finalThoughts.statement1}</p>
          <p className="text-gray-300 leading-relaxed">{finalThoughts.statement2}</p>
        </section>

        {/* Connect Section */}
        <section className="text-center border-t border-gray-700 pt-8 mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Connect with Me</h2>
          <div className="flex justify-center space-x-6">
            {connectLinks.map(link => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-lg"
                >
                  {link.name}
                </a>
            ))}
          </div>
        </section>
      </div>
  );
}