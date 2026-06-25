import Image from "next/image";

const STEPS = [
  {
    title: "Create your account",
    description: "Sign up in minutes with just your phone number and a valid ID. No paperwork, no branch visits.",
  },
  {
    title: "Choose your loan",
    description: "Browse flexible loan products tailored to your business size and repayment capacity.",
  },
  {
    title: "Get approved fast",
    description: "Our system reviews your application and gives you a decision in under 24 hours.",
  },
  {
    title: "Grow your business",
    description: "Funds land directly in your mobile wallet. Use them immediately and repay on your schedule.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
        <h1 className="text-center mb-10 text-gray-700">
            How It Works
        </h1>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Image */}
          <div className="w-full max-w-sm lg:max-w-none lg:w-1/2 shrink-0">
            <Image
              src="/images/how-it-works.png"
              alt="Business owner managing finances"
              width={600}
              height={700}
              className="w-full h-auto rounded-3xl object-cover shadow-xl"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800 leading-snug">
              Start saving with confidence in just a few simple steps.
            </h2>

            {/* Steps */}
            <div className="flex flex-col">
              {STEPS.map((step, index) => (
                <div key={index} className="flex gap-4">

                  {/* Dot + vertical dashed line */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[#1A5A45] shrink-0 mt-1" />
                    {index < STEPS.length - 1 && (
                      <div className="w-px flex-1 border-l-2 border-dashed border-[#1A5A45] opacity-40 my-1" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="pb-8">
                    <h3 className="text-base font-semibold text-green-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}