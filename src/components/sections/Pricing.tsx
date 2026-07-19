import AnimatedHeading from "../ui/AnimatedHeading";

type Plan = {
  name: string;
  price: string;
  duration: string;
  features: string[];
  featured: boolean;
};

const plans: Plan[] = [
  {
    name: "Basic",
    price: "₹2,999",
    duration: "/month",
    features: [
      "Gym Access",
      "Basic Workout Plan",
      "1 Trainer Consultation",
      "Locker Access",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "₹5,999",
    duration: "/month",
    features: [
      "Everything in Basic",
      "Personal Training",
      "Custom Diet Plan",
      "Progress Tracking",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "₹9,999",
    duration: "/month",
    features: [
      "Everything in Pro",
      "Daily Coaching",
      "Priority Support",
      "Premium Facilities",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#F5F5F5] px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8ca660]">
            Membership Plans
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight text-[#1C181B] sm:text-5xl lg:text-6xl">
            <AnimatedHeading
              text="Pricing Plans"
              delayBase={0.2}
            />
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#666666] sm:text-lg">
            Choose the perfect fitness plan based on your goals
            and budget. Start your transformation today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[32px] border p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "lg:scale-105 border-[#8ca660] bg-gradient-to-b from-[#8ca660] to-[#8ca559] text-white shadow-2xl shadow-[#8ca660]/25"
                  : "border-[#E5E5E5] bg-white text-[#1C181B] shadow-lg"
              }`}
            >
              {/* Badge */}
              {plan.featured && (
                <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  Most Popular
                </span>
              )}

              {/* Plan Name */}
              <h3 className="mt-6 text-2xl font-bold">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-black">
                  {plan.price}
                </span>

                <span
                  className={
                    plan.featured
                      ? "pb-1 text-white/80"
                      : "pb-1 text-[#666666]"
                  }
                >
                  {plan.duration}
                </span>
              </div>

              {/* Divider */}
              <div
                className={`mt-8 h-px ${
                  plan.featured
                    ? "bg-white/20"
                    : "bg-[#E5E5E5]"
                }`}
              />

              {/* Features */}
              <ul className="mt-8 space-y-5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 ${
                      plan.featured
                        ? "text-white/90"
                        : "text-[#666666]"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-sm ${
                        plan.featured
                          ? "bg-white/20 text-white"
                          : "bg-[#F5F5F5] text-[#8ca660]"
                      }`}
                    >
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-10 w-full rounded-xl py-4 font-semibold transition-all duration-300 ${
                  plan.featured
                    ? "bg-white text-[#8ca660] hover:scale-105 hover:bg-[#F5F5F5]"
                    : "bg-[#1C181B] text-white hover:bg-[#333333]"
                }`}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}