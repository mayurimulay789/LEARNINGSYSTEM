import vision from '../Assets/Vision1.png'
export default function OurVision() {
  return (
    <section id="vision" className="px-4 py-8 md:py-16 lg:py-20 md:px-8 lg:px-12 bg-sky-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-6 lg:grid-cols-2 md:gap-8 lg:gap-12">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-blue-900 md:text-3xl lg:text-4xl md:mb-6">Our Vision</h2>

            <p className="mb-4 text-sm text-gray-700 md:text-lg">
              We envision becoming a global leader in manufacturing excellence, setting new benchmarks in quality,
              efficiency, innovation, and sustainability across every industry we serve.
            </p>

            <p className="mb-4 text-sm text-gray-700 md:text-lg">
              Our aim is to be the most trusted name in innovative manufacturing solutions, consistently exceeding
              customer expectations through advanced technology and exceptional service.
            </p>

            <p className="mb-4 text-sm text-gray-700 md:text-lg">
              We strive to be recognized as the gold standard for quality and efficiency, driving continuous improvement
              and delivering outstanding value.
            </p>

            <p className="text-sm text-gray-700 md:text-lg">
              Ultimately, we aspire to be the most admired manufacturing company, celebrated for our unwavering
              commitment to excellence, our innovative mindset, and our dedication to empowering customers, employees,
              and vendors alike.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <img src={vision} alt="Vision concept" className="object-cover w-full h-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
