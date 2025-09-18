import { ShieldCheck, Flame, DollarSign, Zap } from "lucide-react"

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Highest Safety",
      description:
        "Unlike hazardous cylinders, there is no storage of gas in our generators, eliminating the risk of explosion or accidents.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Flame,
      title: "Gas On Demand",
      description:
        "Gas is generated on demand as and when required. There is no need to install cylinders every now and then.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: DollarSign,
      title: "Better Economy",
      description: "Cost savings of up to 50% compared to acetylene and 35% compared to L.P.G.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Zap,
      title: "Increases Productivity",
      description:
        "Hydrogen gas provides a highly focused heat required for precision work, enabling faster speed and increased productivity.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ]

  return (
    <section className="px-4 py-8 md:py-16 lg:py-20 md:px-8 lg:px-12 bg-sky-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-2xl font-bold text-center text-blue-900 md:text-3xl lg:text-4xl md:mb-12 lg:mb-16">
          Why Choose Us
        </h2>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="h-full p-4 transition-shadow duration-300 bg-white shadow-sm md:p-6 lg:p-8 rounded-xl hover:shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${benefit.bgColor} p-3 md:p-4 rounded-lg flex-shrink-0`}>
                    <IconComponent className={`h-6 w-6 md:h-8 md:w-8 ${benefit.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-blue-900 md:text-xl lg:text-2xl md:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700 md:text-lg">{benefit.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
