import Image from "next/image";

export default function AboutTheApp() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
        <h1 className="text-center text-gray-700">
            About The App
        </h1>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Image */}
          <div className="w-full max-w-sm lg:max-w-none lg:w-1/2 shrink-0">
            <Image
              src="/images/about-the-app.png"
              alt="Business owner managing finances"
              width={600}
              height={700}
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800 leading-snug">
              Wave Equb
            </h2>

            {/* Description */}
            <div className="flex flex-col text-gray-600 gap-2">
              <p>
                Wave Equb modernizes the traditional equb system, making it easier, clearer, and faster to use. Users can save money together in a 
                structured and secure manner using mobile technology—without confusion or risk. Every contribution and payout is recorded, visible,
                and easy to track.
              </p>

              <p>
                With Wave Equb, users can effortlessly create or join Equb groups, set contribution amounts and schedules, and manage everything
                directly from their mobile device. The platform offers a fully cashless environment where all transactions are processed digitally,
                ensuring safety, accuracy, and convenience. Automated reminders and smart payment systems help users stay consistent with their
                contributions, minimizing delays or conflicts within the group.
              </p>

              <p>
                Beyond just digitizing Equb, Wave Equb enhances the entire saving experience by merging technology with community trust.
                It empowers individuals to build better financial habits, supports groups in achieving their goals more efficiently, and opens
                access to structured savings for those who may lack traditional financial services.
              </p>

              <p>
                By bridging tradition and technology, Wave Equb provides a smarter, safer, and more reliable way to save—anytime, anywhere.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}