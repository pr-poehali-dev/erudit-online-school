import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (495) 123-45-67",
      subtitle: "Звоните с 9:00 до 21:00",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "info@erudit-school.ru",
      subtitle: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      content: "Москва, ул. Тверская, 15",
      subtitle: "Приходите на консультацию",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Начните обучение прямо сейчас
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Получите бесплатную консультацию и выберите идеальный курс для ваших
            целей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <h3 className="text-2xl font-bold mb-2">
                  Записаться на консультацию
                </h3>
                <p className="text-gray-300">
                  Узнайте, какой курс подходит именно вам
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться бесплатно
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Написать в WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-full flex-shrink-0">
                  <Icon name={info.icon as any} size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                  <p className="text-xl text-white mb-1">{info.content}</p>
                  <p className="text-gray-400 text-sm">{info.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2024 Школа Эрудит. Все права защищены.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
