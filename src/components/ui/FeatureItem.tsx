import { motion } from "framer-motion";
type FeatureItemProps = {
  text: string;
  icon?: string;
};

const FeatureItem = ({
  text,
  icon = "/assets/icons/CategoryWhite.svg",
}: FeatureItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        relative group flex items-start gap-4 p-4
        bg-[linear-gradient(90deg,#1A1A1A_0%,rgba(26,26,26,0)_100%)]
        overflow-hidden
      "
    >
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_left,rgba(139,92,246,0.15),transparent_60%)]
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      <div className="absolute left-0 top-0 h-full w-[2px] bg-purple-500 rounded-full" />

      <div className="z-10">
        <img
          src={icon}
          alt="feature icon"
          className="
            w-6 h-6
            transition-transform duration-300
            group-hover:scale-125 group-hover:rotate-6
          "
        />
      </div>
      <p
        className="
          z-10 flex-1 max-w-[488px] text-sm
          text-[var(--color-gray-60)]
          transition-all duration-500
          group-hover:text-white group-hover:tracking-wide
        "
      >
        {text}
      </p>
    </motion.div>
  );
};

export default FeatureItem;
