import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Lightbulb",
      title: "Индивидуальный подход",
      description:
        "Персональные программы обучения, адаптированные под ваши цели и темп",
    },
    {
      icon: "Users",
      title: "Экспертные преподаватели",
      description:
        "Команда профессионалов с многолетним опытом и международными сертификатами",
    },
    {
      icon: "Smartphone",
      title: "Современная платформа",
      description: "Удобное обучение с любого устройства в любое время",
    },
    {
      icon: "Trophy",
      title: "Гарантия результата",
      description: "Возврат средств, если не достигнете поставленных целей",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создали уникальную образовательную экосистему, где каждый студент
            может раскрыть свой потенциал
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-purple-100 group-hover:bg-purple-200 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center transition-colors">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-purple-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
