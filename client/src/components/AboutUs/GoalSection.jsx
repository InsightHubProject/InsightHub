import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import goal_img from "../../assets/goal_img.png";
import { Link } from "react-router-dom";
import useInView from "../../hooks/useInView";

const GoalSection = forwardRef((props, ref) => {
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="hero sm:py-16 bg-base-300">
      <div ref={inViewRef} className="hero-content grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: '-100vw' }}
          animate={inView ? { x: 0 } : { x: '-100vw' }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="hidden md:block"
        >
          <img src={goal_img} alt="Goal" />
        </motion.div>
        <motion.div
          initial={{ x: '100vw' }}
          animate={inView ? { x: 0 } : { x: '100vw' }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <h1 className="text-5xl font-bold leading-normal">Our Goal</h1>
          <div className="block md:hidden">
            <img src={goal_img} alt="Goal" className="w-1/2 h-auto mx-auto" />
          </div>
          <p className="py-6 text-xl sm:text-3xl">
            At InsightHub, we are on a mission to revolutionize social media
            analytics. We aim to provide exceptional value and insights,
            simplifying the way you navigate the online conversation landscape.
            Join us in championing simplicity and meaningful insights in every
            data-driven step you take.
          </p>
          <Link to={"/"} className="btn btn-warning w-1/2 text-xl mt-4 mb-16">
            Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
});

export default GoalSection;
