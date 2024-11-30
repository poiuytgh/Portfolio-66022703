import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 text-black flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl p-8 bg-white rounded-xl shadow-lg">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src="/image/pluem1.png"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-md"
              />
            </div>
            <h1 className="text-3xl font-bold mt-4">Thanakrit Suphamongkhon</h1>
            <p className="text-gray-600">Software Engineering Student</p>
          </div>

          {/* Education Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <p className="text-xl font-semibold">University of Phayao</p>
            <p className="mt-2">Faculty of Information and Communication Technology</p>
            <p className="mt-1">Software Engineering</p>
            <p className="mt-4 text-gray-600">2023 - Present</p>
          </div>

          {/* Skills Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Programming: JavaScript, Python</li>
              <li>Web Development: HTML, CSS, React, Next.js</li>
              <li>Team Collaboration & Problem Solving</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-start mt-24 space-y-8">
          {/* Top Section */}
          <div className="space-y-8">
            {/* About Me Section */}
            <div className="p-6 bg-blue-50 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p>
                Hello! My name is Thanakrit Suphamongkhon, a second-year Software
                Engineering student at the University of Phayao. I'm passionate
                about web development and enjoy learning new technologies.
              </p>
            </div>

            {/* Projects Section */}
            <div className="p-6 bg-blue-50 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Projects</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Trained in front-end frameworks for modern UI development</li>
                <li>Developed a website for novel collections: *NovelVerse*</li>
                <li>Built a BMI-based food recommendation system</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>Facebook: Thanakrit Suphamongkhon</p>
            <p>Email: 66022635@up.ac.th</p>
            <p>Phone: 099-891-4553</p>
          </div>
        </div>
      </div>
    </div>
  );
}
