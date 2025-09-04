import React from "react";
import { useScrollAnimation } from "../../hooks";
import { journeyData } from "../../assets/static";
import TimelineItem from "../../components/TimeLine";
import { Button } from "../../components/ui";

const Journey: React.FC = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.5);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute"></div>

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">My Journey</h1>
          <p className="text-xl text-indigo-300 max-w-3xl mx-auto leading-relaxed">
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
          <div className="backdrop-blur-sm border border-indigo-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready for the Next Chapter
            </h3>
            <p className="text-indigo-300 mb-6">
              The journey continues with new technologies, challenges, and
              opportunities to create innovative solutions.
            </p>

            <Button>Let's Build Something Amazing</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
