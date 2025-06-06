import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const codingLinks = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/your-username/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
  },
  {
    name: "GitHub",
    url: "https://github.com/your-username",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-username",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
  }
];

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px] flex flex-col items-center justify-center`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Find me on</p>
          <h2 className={styles.sectionHeadText}>Coding Profiles</h2>
        </motion.div>
        <div className="flex flex-row gap-10 mt-8">
          {codingLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:scale-110 transition-transform"
            >
              <img src={link.logo} alt={link.name} className="w-16 h-16 rounded-full object-contain mb-2" />
              <span className="text-white font-medium text-lg">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
