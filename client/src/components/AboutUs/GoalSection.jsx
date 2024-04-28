import React, { forwardRef } from "react";
import goal_img from "../../assets/goal_img.png";
import { Link } from "react-router-dom";

const GoalSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="hero sm:py-16 bg-base-300">
      <div className="hero-content grid md:grid-cols-2 gap-8">
        <div className="hidden md:block">
          <img src={goal_img} alt="Goal" />
        </div>
        <div>
          <h1 className="text-5xl font-bold leading-normal">Our Goal</h1>
          <div className="block md:hidden">
            <img src={goal_img} alt="Goal" className="w-1/2 h-auto mx-auto" />
          </div>
          <p className="py-6 text-xl sm:text-3xl">
            At InsightHub, we are on a mission to revolutionize social media
            analytics. We aim to provide exceptional value and insights,
            simplifying the way you navigate the online conversation landscape.
            Join us in championing simplicity and meaningful insights in every
            data-driven step you take
          </p>
          <Link to={"/"} className="btn btn-warning w-1/2 text-xl mt-4">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
});

export default GoalSection;
