import React from "react";
import { useScrollAnimation } from "../../hooks";
import {
  journeyData,
  pageActionBoxData,
  pageHeaderData,
} from "../../assets/static";
import TimelineItem from "../../components/TimeLine";
import { ActionBox, PageHeader } from "../../components/ui";

const Journey: React.FC = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.5);

  return (
    <div className="min-h-screen">
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
          <PageHeader
            title={pageHeaderData.journey.title}
            description={pageHeaderData.journey.description}
          />
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

        <ActionBox
          title={pageActionBoxData.journey.title}
          description={pageActionBoxData.journey.description}
          buttonText={pageActionBoxData.journey.buttonText}
        />
      </div>
    </div>
  );
};

export default Journey;
