import React from "react";
import { useScrollAnimation } from "../../hooks";
import { journeyData } from "../../assets/static";
import TimelineItem from "../../components/TimeLine";

const Journey: React.FC = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.5);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(120,119,198,0.4),transparent_70%),radial-gradient(circle_at_70%_60%,_rgba(255,119,198,0.3),transparent_70%)]"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${
            headerVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
            My Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A timeline of growth, learning, and technological mastery. From
            humble beginnings to full-stack expertise, each step has been a
            building block towards creating impactful software solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          {journeyData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === journeyData.length - 1}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-indigo-600/20 to-indigo-600/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-indigo-500 bg-clip-text text-transparent">
              Ready for the Next Chapter
            </h3>
            <p className="text-gray-300 mb-6">
              The journey continues with new technologies, challenges, and
              opportunities to create innovative solutions.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
              Let's Build Something Amazing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
