import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-8xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Welcome to the About page! Here, you can learn more about me and explore my professional journey and projects. Feel free to browse through my portfolio to get a deeper insight into my work and skills.
        </p>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <iframe
            src="https://sushantportfolio.vercel.app/"
            title="Sushant Portfolio"
            className="w-full h-[500px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
