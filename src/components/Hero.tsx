import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Школа <span className="text-yellow-300">Эрудит</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Онлайн-образование нового поколения. Развивайте свои таланты с
            лучшими преподавателями России
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg"
          >
            <Icon name="Play" className="mr-2" size={20} />
            Начать обучение
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg"
          >
            <Icon name="BookOpen" className="mr-2" size={20} />
            Попробовать бесплатно
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <Icon name="Users" size={32} />
            </div>
            <div className="text-2xl font-bold">15,000+</div>
            <div className="text-purple-200">Выпускников</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <Icon name="Award" size={32} />
            </div>
            <div className="text-2xl font-bold">98%</div>
            <div className="text-purple-200">Успешность</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <Icon name="Clock" size={32} />
            </div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-purple-200">Поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
