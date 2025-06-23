import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Courses = () => {
  const courses = [
    {
      title: "Программирование с нуля",
      description:
        "Изучите основы Python, создайте первые проекты и начните карьеру в IT",
      duration: "6 месяцев",
      level: "Начинающий",
      price: "45,000 ₽",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      popular: true,
    },
    {
      title: "Дизайн интерфейсов",
      description:
        "Освойте UI/UX дизайн, Figma и создание пользовательских интерфейсов",
      duration: "4 месяца",
      level: "Средний",
      price: "38,000 ₽",
      image:
        "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=250&fit=crop",
    },
    {
      title: "Цифровой маркетинг",
      description:
        "Изучите SMM, таргетинг, аналитику и построение воронок продаж",
      duration: "3 месяца",
      level: "Начинающий",
      price: "32,000 ₽",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Популярные курсы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите направление, которое изменит вашу жизнь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
            >
              {course.popular && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Хит продаж
                </div>
              )}

              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              />

              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {course.title}
                </CardTitle>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="BarChart" size={16} className="mr-1" />
                    {course.level}
                  </div>
                </div>

                <div className="text-2xl font-bold text-purple-600 mb-4">
                  {course.price}
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Записаться на курс
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
          >
            <Icon name="Grid3X3" className="mr-2" size={20} />
            Посмотреть все курсы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
