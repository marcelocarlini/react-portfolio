import { HiCommandLine, HiComputerDesktop } from "react-icons/hi2";

export function Services() {
  const services = [
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estaticos e dinamicos com React, HTML, CSS, Bootstrap e Tailwind",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
    {
      title: "Sistemas",
      description:
        "Desenvolvimento de sistemas E APIs REST com  PHP, Laravel e MySQL",
      icon: <HiCommandLine className="h-12 w-12" />,
    },
  ];
  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 ">
        <p className="text-sm font-semibold uppercase text-blu-600">
          O que faço de melhor
        </p>
        <h2 className="mb-2 font-bold text-blue-900">
          <span className="mr-2 font-healine text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>
        <p className="text-sm text-gray-600">
          Posso atender uma gama completa de serviços, do front-end ao back-end
          com banco de dados e sistemas.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-2 md:flex-row">
        {services.map((service, index) => (
          <div
            className="basis-1/2 rounded-lg bg-blue-700 p-4 text-white"
            key={`service-${index}`}
          >
            <div className="mb-2">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
