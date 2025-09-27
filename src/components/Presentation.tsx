import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: string[];
  year?: string;
  timeline?: Array<{ year: string; event: string }>;
  image?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Развитие культуры и науки",
    subtitle: "1914–1930 годов",
    content: [
      "Период глобальных изменений в культуре и науке",
      "Эпоха между двумя мировыми войнами",
      "Время революционных открытий и культурных трансформаций",
      "Формирование новых художественных направлений"
    ],
    image: "/img/fe4ca069-0c67-42e4-af78-bc97b08775b4.jpg"
  },
  {
    id: 2,
    title: "Введение",
    subtitle: "Общий обзор периода 1914-1930",
    content: [
      "Первая мировая война (1914-1918) кардинально изменила мир",
      "Революции в России, Германии и других странах",
      "Экономическая нестабильность и социальные потрясения",
      "Новые идеи в философии, искусстве и науке",
      "Технологический прогресс и урбанизация"
    ],
    timeline: [
      { year: "1914", event: "Начало Первой мировой войны" },
      { year: "1917", event: "Революция в России" },
      { year: "1918", event: "Окончание войны, пандемия гриппа" },
      { year: "1920-е", event: "«Золотые двадцатые» на Западе" }
    ],
    image: "/img/fe4ca069-0c67-42e4-af78-bc97b08775b4.jpg"
  },
  {
    id: 3,
    title: "Научные достижения",
    subtitle: "1914-1920 годы",
    content: [
      "Теория относительности Эйнштейна (1915-1916)",
      "Развитие квантовой механики",
      "Открытия в области химии и медицины",
      "Технологические инновации военного времени"
    ],
    timeline: [
      { year: "1915", event: "Общая теория относительности Эйнштейна" },
      { year: "1916", event: "Открытие структуры ДНК" },
      { year: "1918", event: "Разработка новых лекарств" },
      { year: "1919", event: "Подтверждение теории Эйнштейна" }
    ],
    image: "/img/d2a6fa6e-4caa-43ee-92f5-fd938f46d96b.jpg"
  },
  {
    id: 4,
    title: "Научные открытия",
    subtitle: "1921-1930 годы",
    content: [
      "Открытие пенициллина Флемингом (1928)",
      "Развитие радиотехнологий",
      "Исследования атомной структуры",
      "Прогресс в авиации и космических исследованиях"
    ],
    timeline: [
      { year: "1922", event: "Нобелевская премия Эйнштейну" },
      { year: "1925", event: "Квантовая механика Гейзенберга" },
      { year: "1928", event: "Открытие пенициллина" },
      { year: "1930", event: "Открытие Плутона" }
    ],
    image: "/img/d2a6fa6e-4caa-43ee-92f5-fd938f46d96b.jpg"
  },
  {
    id: 5,
    title: "Изобразительное искусство",
    subtitle: "Революция в визуальных формах",
    content: [
      "Авангардные движения: кубизм, футуризм, дадаизм",
      "Пикассо, Брак, Малевич, Кандинский",
      "Новые техники и материалы",
      "Искусство как отражение социальных изменений"
    ],
    timeline: [
      { year: "1915", event: "«Чёрный квадрат» Малевича" },
      { year: "1917", event: "Манифест дадаизма" },
      { year: "1920", event: "Конструктивизм в СССР" },
      { year: "1925", event: "Сюрреализм Дали и Магритта" }
    ],
    image: "/img/931a09ed-c6ff-4adc-8147-ba1f6f1c41d6.jpg"
  },
  {
    id: 6,
    title: "Архитектура",
    subtitle: "Новые принципы и формы",
    content: [
      "Функционализм и рационализм",
      "Баухаус в Германии (1919-1933)",
      "Конструктивизм в СССР",
      "Ле Корбюзье и его концепции"
    ],
    timeline: [
      { year: "1919", event: "Основание школы Баухаус" },
      { year: "1920", event: "Конструктивистские проекты Татлина" },
      { year: "1923", event: "«К архитектуре» Ле Корбюзье" },
      { year: "1929", event: "Павильон Барселоны Мис ван дер Роэ" }
    ]
  },
  {
    id: 7,
    title: "Литература и философия",
    subtitle: "Новые идеи и формы выражения",
    content: [
      "Модернизм: Джойс, Пруст, Кафка",
      "Философия экзистенциализма",
      "Психоанализ Фрейда и Юнга",
      "Новые литературные техники"
    ],
    timeline: [
      { year: "1915", event: "«Превращение» Кафки" },
      { year: "1922", event: "«Улисс» Джойса" },
      { year: "1925", event: "«Процесс» Кафки" },
      { year: "1929", event: "«Волшебная гора» Манна" }
    ]
  },
  {
    id: 8,
    title: "Заключение",
    subtitle: "Наследие эпохи 1914-1930",
    content: [
      "Формирование основ современной культуры",
      "Революционные изменения в науке и искусстве",
      "Влияние на последующие десятилетия",
      "Период как переход к современности"
    ]
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Культура и наука 1914-1930
          </h1>
          <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
            <span>Слайд {currentSlide + 1} из {slides.length}</span>
            <div className="flex gap-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-accent' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </header>

        {/* Main Slide */}
        <Card className="p-8 mb-8 min-h-[500px] animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="text-xl text-muted-foreground">
                {slide.subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Historical Image */}
            {slide.image && (
              <div className="lg:col-span-1">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            )}

            {/* Content */}
            <div className={`space-y-4 ${slide.image ? 'lg:col-span-1' : 'lg:col-span-2'}`}>
              {slide.content.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon name="ChevronRight" size={16} className="text-accent mt-1 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Timeline */}
            {slide.timeline && (
              <div className={`space-y-4 ${slide.image ? 'lg:col-span-1' : 'lg:col-span-1'}`}>
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <Icon name="Clock" size={20} />
                  Хронология событий
                </h3>
                <div className="space-y-3">
                  {slide.timeline.map((event, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-3 bg-secondary/30 rounded-lg"
                      style={{ animationDelay: `${(index + slide.content.length) * 100}ms` }}
                    >
                      <span className="font-bold text-accent min-w-[60px]">
                        {event.year}
                      </span>
                      <span className="text-sm">{event.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={prevSlide}
            variant="outline"
            className="flex items-center gap-2"
            disabled={currentSlide === 0}
          >
            <Icon name="ChevronLeft" size={16} />
            Назад
          </Button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <Button
                key={index}
                onClick={() => goToSlide(index)}
                variant={index === currentSlide ? "default" : "outline"}
                size="sm"
                className="w-10 h-10"
              >
                {index + 1}
              </Button>
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            className="flex items-center gap-2"
            disabled={currentSlide === slides.length - 1}
          >
            Вперёд
            <Icon name="ChevronRight" size={16} />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-secondary rounded-full h-2 overflow-hidden">
          <div
            className="bg-accent h-full transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}