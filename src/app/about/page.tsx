import Link from "next/link";
import { Globe } from "lucide-react";

const timeline = [
  {
    year: "2011",
    title: "Company Founded",
    description:
      "Crimson Industries established with a vision to transform megaproject management through intelligent solutions.",
  },
  {
    year: "2019",
    title: "First Major Contract",
    description:
      "Secured our first major infrastructure project, establishing our reputation in the region.",
  },
  {
    year: "2020",
    title: "Crimson Industries Taskforce Established",
    description:
      "Crimson Industries Taskforce Established to provide strategic partnerships across global regions on large programmes.",
  },
  {
    year: "2021",
    title: "Technology Innovation",
    description:
      "Launched AI-focused quality assurance solutions and advanced governance frameworks.",
  },
  {
    year: "2022",
    title: "Global Reach",
    description:
      "Extended operations to UK | USA & Americas | EU | AFRICA markets, becoming truly global.",
  },
  {
    year: "2023",
    title: "Cyber Security Leadership",
    description:
      "Established cyber security and surveillance partnerships, leading industry innovation in the shipping and logistics sector.",
  },
  {
    year: "2024",
    title: "Public Safety Excellence",
    description:
      "Building the dominant presence in design of next-generation emergency services and public safety systems in the developing world.",
  },
  {
    year: "2025",
    title: "Intelligent Future",
    description:
      "Continuing to redefine what's possible in intelligent infrastructure and megaproject delivery.",
  },
];

const reasons = [
  {
    number: "1",
    title: "Proven Track Record",
    description:
      "Decades of experience delivering complex megaprojects across multiple industries and markets.",
  },
  {
    number: "2",
    title: "Innovation-Driven",
    description:
      "Cutting-edge technology and AI-powered solutions for enhanced project outcomes, > 95% predictability and efficiency.",
  },
  {
    number: "3",
    title: "Global Expertise",
    description:
      "International presence with deep understanding of local markets and regulatory requirements.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            About Crimson Industries
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Founded as a taskforce of industry experts, Crimson Industries
            Corporation transcends traditional project management to deliver
            intelligent infrastructure solutions that shape the future.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-crimson-100 text-crimson-700 px-4 py-2 rounded-full text-sm font-medium">
                <span>GET TO KNOW US</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Redefining What&apos;s Possible
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Founded as G Sage and Associates in 1993 and backed by Madison488 Ltd and a
                consortium of industry experts, the Crimson Industries Corporation,
                Programme Management Taskforce transcends mere project management,
                we forge strategic partnerships with global leaders and provide
                transformative infrastructure solutions. We deliver beyond simply
                blueprints, we craft lasting legacies across any region, from
                civil infrastructure and transport to next generation emergency
                services (NEXES) and cyber security projects.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-crimson-600 mt-2" />
                  <p className="text-slate-600">
                    Decades of experience in complex governmental and commercial
                    mega projects in the UK | USA & Americas | EU | AFRICA
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-crimson-600 mt-2" />
                  <p className="text-slate-600">
                    Extensive network of regional and international partnerships
                    with access to world-class resources and best practice
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-crimson-600 mt-2" />
                  <p className="text-slate-600">
                    Hands-on experience in engineering infrastructure that fosters
                    economic growth, social well-being, and environmental
                    sustainability
                  </p>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-crimson-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-crimson-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                  Strategic Excellence
                </h3>
                <p className="text-slate-600 text-center mb-8">
                  Our expertise spans complex governmental and commercial mega
                  projects across the UK, USA, Americas, EU, and Africa.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-crimson-600 text-white p-6 rounded-2xl text-center">
                    <div className="text-3xl font-bold mb-1">93+</div>
                    <div className="text-crimson-200 text-sm">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="bg-crimson-700 text-white p-6 rounded-2xl text-center">
                    <div className="text-3xl font-bold mb-1">18</div>
                    <div className="text-crimson-200 text-sm">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From our founding to becoming a global leader in intelligent
              infrastructure, explore the key milestones that have shaped Crimson
              Industries&apos; evolution.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-crimson-200 transform md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <div key={index} className="relative mb-12">
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1 md:w-1/2">
                      <div
                        className={`bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ml-12 md:ml-0 ${
                          index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                        }`}
                      >
                        <div className="text-2xl font-bold text-crimson-600 mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-6 w-6 h-6 bg-gradient-to-br from-crimson-400 to-crimson-600 rounded-full border-4 border-white shadow-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Crimson Industries?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our unique approach combines proven methodologies with innovative
              technology to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-crimson-500 to-crimson-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {reason.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-crimson-600 to-crimson-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-crimson-100 mb-8">
            Ready to be part of the future of intelligent infrastructure? Whether
            you&apos;re a client looking for transformative solutions or a
            professional wanting to join our team, we want to hear from you.
          </p>
          <Link href="/contact">
            <button className="bg-white text-crimson-700 hover:bg-crimson-50 px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
