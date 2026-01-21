import { motion } from "framer-motion";
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const InfoBlock = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full rounded-2xl backdrop-blur-sm"
        >
            <motion.div variants={item} className="mb-5 pb-6 border-b border-white/20">
                <h3 className="text-white text-xl font-bold mb-4">Description</h3>
                <p className="text-[var(--color-gray-60)] text-base leading-relaxed">
                    Discover your own piece of paradise with the Seaside Serenity Villa. With an open
                    floor plan, breathtaking ocean views from every room, and direct access to
                    a pristine sandy beach, this property is the epitome of coastal living.
                </p>
            </motion.div>
            <motion.div
                variants={container}
                className="grid grid-cols-2 gap-6 pt-2 lg:grid-cols-3 lg:gap-6"
            >
                <motion.div variants={item} className="flex flex-col gap-3 group">
                    <div className="flex items-center gap-3 text-white/60 text-sm">
                        <img
                            src="/public/assets/icons/Bedroom.svg"
                            className="w-5 h-5 opacity-60 transition-transform duration-300 group-hover:scale-110"
                        />
                        <span>Bedrooms</span>
                    </div>
                    <span className="text-white text-2xl font-bold">04</span>
                </motion.div>

                <motion.div
                    variants={item}
                    className="flex flex-col gap-3 border-l border-white/20 pl-6 lg:border-x lg:px-6 group"
                >
                    <div className="flex items-center gap-3 text-white/60 text-sm">
                        <img
                            src="/public/assets/icons/Bathroom.svg"
                            className="w-5 h-5 opacity-60 transition-transform duration-300 group-hover:scale-110"
                        />
                        <span>Bathrooms</span>
                    </div>
                    <span className="text-white text-2xl font-bold">03</span>
                </motion.div>

                <motion.div
                    variants={item}
                    className="col-span-2 h-px bg-white/20 lg:hidden"
                />

                <motion.div
                    variants={item}
                    className="flex flex-col gap-3 col-span-2 lg:col-span-1 group"
                >
                    <div className="flex items-center gap-3 text-white/60 text-sm">
                        <img
                            src="/public/assets/icons/area.svg"
                            className="w-5 h-5 opacity-60 transition-transform duration-300 group-hover:scale-110"
                        />
                        <span>Area</span>
                    </div>
                    <span className="text-white text-[20px] font-bold whitespace-nowrap">
                        2,500 Square Feet
                    </span>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default InfoBlock;
