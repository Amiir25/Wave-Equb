import Image from "next/image";

const FEATURES = [
  {
    title: "Secure Cashless Equub Transactions",
    description: "Send and receive Equub payments safely — no cash, no risk.",
    image: "/images/feature1.png",
    alt: "Payment screen showing cashless Equub transaction",
  },
  {
    title: "Easy Equub Creation & Management",
    description: "Create or join Equub groups and manage everything in one place.",
    image: "/images/feature2.png",
    alt: "Start Equub screen showing group options",
    featured: true,
  },
  {
    title: "Smart Automated Contributions",
    description: "Stay on track with scheduled payments and instant reminders.",
    image: "/images/feature3.png",
    alt: "Account screen showing contribution tracking",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#1A5A45] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4ade80] text-center mb-14 lg:mb-20">
          Digital Equub, Zero Cash Risk
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl flex overflow-hidden ${
                feature.featured ? "flex-col-reverse md:-mt-6" : "flex-col"
                }`}
            >
              {/* Text */}
              <div className="px-8 pt-10 pb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A5A45] leading-snug mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              
              <div className="mx-auto w-48 sm:w-56 h-80 bg-stone-100 rounded-3xl
              flex items-center justify-center mb-0">
                <Image
                    alt="Feature Image"
                    src={feature.image}
                    width={300}
                    height={400}
                    className={`${feature.featured && 'h-100'}`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}