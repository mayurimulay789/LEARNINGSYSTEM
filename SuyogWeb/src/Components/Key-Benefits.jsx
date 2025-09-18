import { Lightbulb, ShieldCheck, Flame, DollarSign, Award, CheckCircle, Zap, Layers, TreePine } from "lucide-react"

export default function KeyBenefits() {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We are committed to continuous innovation, developing cutting-edge solutions for our customers.",
      gradient: true,
    },
    {
      icon: ShieldCheck,
      title: "Highest Safety",
      description:
        "Unlike hazardous cylinders, there is no storage of gas in our generators, eliminating explosion risks.",
      gradient: false,
    },
    {
      icon: Flame,
      title: "Gas on Demand",
      description: "Gas is generated on demand as and when required. No need to install cylinders every now and then.",
      gradient: false,
    },
    {
      icon: DollarSign,
      title: "Better Economy",
      description: "Cost savings of up to 50% compared to acetylene and 35% compared to L.P.G.",
      gradient: false,
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in all aspects of our operations, from product development to customer service.",
      gradient: true,
    },
    {
      icon: CheckCircle,
      title: "Improves Quality",
      description:
        "Oxy-hydro gas is cleaner than hydrocarbon fuel gases, minimizing post brazing/soldering cleaning operations.",
      gradient: false,
    },
    {
      icon: Zap,
      title: "Increases Productivity",
      description:
        "Hydrogen gas provides a highly focused heat required for precision work, enabling faster speed and increased productivity.",
      gradient: false,
    },
    {
      icon: Layers,
      title: "Multiple Torches",
      description:
        "The generator can support one or more torches, depending on tip nozzle size, pressure, flame length, etc.",
      gradient: false,
    },
    {
      icon: TreePine,
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices throughout our manufacturing processes.",
      gradient: true,
    },
  ]

  return (
    <section className="px-4 py-8 md:py-16 lg:py-20 md:px-8 lg:px-12 bg-sky-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-2xl font-bold text-center text-blue-900 md:text-3xl lg:text-4xl">Key Benefits</h2>
        <div className="w-16 h-1 mx-auto mb-8 bg-black md:w-24 md:mb-12 lg:mb-16"></div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className={`${
                  benefit.gradient
                    ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                    : "bg-white border border-gray-200"
                } p-4 md:p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col`}
              >
                <IconComponent
                  className={`h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 mb-3 md:mb-4 ${
                    benefit.gradient ? "text-white" : "text-blue-900"
                  }`}
                />
                <h3
                  className={`text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 ${
                    benefit.gradient ? "text-white" : "text-blue-900"
                  }`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`text-sm md:text-lg leading-relaxed flex-1 ${
                    benefit.gradient ? "text-white" : "text-gray-700"
                  }`}
                >
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
