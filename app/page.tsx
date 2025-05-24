import Image from "next/image"; // If you want to add an image later

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24 bg-gray-900 text-white">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Prashanth E
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-cyan-400">
            Application Security Engineer
          </h2>
          <p className="text-lg md:text-xl mb-3 leading-relaxed">
            Transitioning from Automation Testing with 4.6 years of experience at Infosys. [cite: 1]
          </p>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Proficient in Static Application Security Testing (SAST), Dynamic Application Security Testing (DAST), and Secure Code Review with hands-on expertise in SonarQube, Checkmarx, Burp Suite, and CodeQL. [cite: 1]
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
                href="#projects" // We'll create this section later
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
            >
              View My Projects
            </a>
            <a
                href="#contact" // We'll create this section later
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </main>
  );
}