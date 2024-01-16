"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const AchievementsSection = () => {
  const achievementsList = [
    {
      metric: "Projects",
      value: "10",
      postfix: "+",
    },
    {
      metric: "Years",
      value: "1",
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-5 sm:py-5 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md p-4 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {achievementsList.map((achievement, index) => (
            <div key={index} className="mb-4 w-24">
              <h2 className="text-white text-4xl font-bold flex items-center">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
