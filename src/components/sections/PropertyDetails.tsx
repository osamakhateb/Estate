// لازم تحميل هي المكتبة npm install framer-motion
import { motion } from "framer-motion";
import InfoBlock from "../ui/InfoBlock";
import FeatureItem from "../ui/FeatureItem";

const PropertyDetails = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row gap-[20px] px-4 lg:px-20 2xl:px-20">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="
                w-full lg:w-1/2 rounded-[12px] border border-white/10 p-6 lg:h-[330px] overflow-auto
                transition-all duration-500
                hover:-translate-y-1 hover:border-white/30
                hover:shadow-[0_12px_32px_var(--color-primary-60)]
                "
            >
                <InfoBlock />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="
                    w-full lg:w-1/2 rounded-[12px] border border-white/10 p-6
                    flex flex-col gap-5
                    transition-all duration-500
                    hover:-translate-y-1 hover:border-white/30
                    hover:shadow-[0_12px_32px_var(--color-primary-60)]
                "
            >
                <h3 className="text-white text-[18px] font-semibold mb-4">
                    Key Features and Amenities
                </h3>

                <FeatureItem text="Expansive oceanfront terrace for outdoor entertaining" />
                <FeatureItem text="Gourmet kitchen with top-of-the-line appliances" />
                <FeatureItem text="Private beach access for morning strolls and sunset views" />
                <FeatureItem text="Master suite with a spa-inspired bathroom and ocean-facing balcony" />
                <FeatureItem text="Private garage and ample storage space" />
            </motion.div>

        </section>
    );
};

export default PropertyDetails;
