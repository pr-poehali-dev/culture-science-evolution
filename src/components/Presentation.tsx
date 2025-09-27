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
      "Период глобальных изменений в культуре и науке, вызванных Первой мировой войной",
      "Эпоха между двумя мировыми войнами — время переосмысления ценностей",
      "Революционные открытия в физике: теория относительности, квантовая механика",
      "Культурные трансформации: от традиционных форм к модернизму и авангарду",
      "Формирование новых художественных направлений: кубизм, футуризм, дадаизм",
      "Технологический прогресс: радио, кинематограф, авиация",
      "Социальные изменения: урбанизация, эмансипация женщин, молодежная культура",
      "Философские течения: экзистенциализм, психоанализ, феноменология"
    ],
    image: "/img/fe4ca069-0c67-42e4-af78-bc97b08775b4.jpg"
  },
  {
    id: 2,
    title: "Введение",
    subtitle: "Общий обзор периода 1914-1930",
    content: [
      "Первая мировая война (1914-1918) унесла 15-20 млн жизней и разрушила четыре империи",
      "Революции в России (1917), Германии (1918), Венгрии (1919) изменили политическую карту",
      "Экономическая нестабильность: инфляция в Германии, восстановление экономики",
      "Социальные потрясения: изменение роли женщин, классовых отношений",
      "Новые идеи: психоанализ Фрейда, философия Витгенштейна, социология Вебера",
      "Технологический бум: массовое производство автомобилей, радиовещание",
      "Урбанизация: рост городов, новая архитектура, изменение образа жизни",
      "Культурные центры: Париж, Берлин, Нью-Йорк как центры модернизма"
    ],
    timeline: [
      { year: "1914", event: "Начало Первой мировой войны, убийство эрцгерцога Франца Фердинанда" },
      { year: "1917", event: "Революция в России, вступление США в войну" },
      { year: "1918", event: "Окончание войны, пандемия «испанки» (50-100 млн жертв)" },
      { year: "1919", event: "Версальский мир, основание Лиги Наций" },
      { year: "1920-е", event: "«Золотые двадцатые»: экономический рост и культурный расцвет" },
      { year: "1929", event: "Великая депрессия, крах на Уолл-стрит" }
    ],
    image: "/img/e9f6983a-17b5-4531-8bf6-aec9c943aec6.jpg"
  },
  {
    id: 3,
    title: "Научные достижения",
    subtitle: "1914-1920 годы",
    content: [
      "Общая теория относительности Эйнштейна (1915) — революция в понимании пространства и времени",
      "Квантовая теория Планка и Бора: дискретность энергии, строение атома",
      "Химия: синтез аммиака (процесс Габера-Боша), новые взрывчатые вещества",
      "Медицина: борьба с пандемией гриппа, развитие хирургии военного времени",
      "Технологические инновации: танки, отравляющие газы, авиация",
      "Рентгенология: массовое применение для диагностики ранений",
      "Математика: работы Гильберта, развитие топологии и алгебры",
      "Психология: развитие гештальт-психологии, работы Юнга"
    ],
    timeline: [
      { year: "1915", event: "Общая теория относительности — гравитация как кривизна пространства-времени" },
      { year: "1916", event: "Шварцшильд решает уравнения Эйнштейна, предсказывает черные дыры" },
      { year: "1917", event: "Эйнштейн вводит космологическую постоянную" },
      { year: "1918", event: "Эмми Нётер формулирует теорему о законах сохранения" },
      { year: "1919", event: "Эддингтон подтверждает искривление света при солнечном затмении" },
      { year: "1920", event: "Дебай разрабатывает теорию дипольных моментов" }
    ],
    image: "/img/d2a6fa6e-4caa-43ee-92f5-fd938f46d96b.jpg"
  },
  {
    id: 4,
    title: "Научные открытия",
    subtitle: "1921-1930 годы",
    content: [
      "Открытие пенициллина Флемингом (1928) — начало эры антибиотиков",
      "Радиотехнологии: первые регулярные радиопередачи, развитие связи",
      "Квантовая механика: принципы Гейзенберга (1925), уравнение Шрёдингера (1926)",
      "Атомная физика: эффект Комптона, работы Резерфорда по ядерным реакциям",
      "Авиация: первые трансатлантические полеты, развитие коммерческой авиации",
      "Астрономия: открытие расширения Вселенной Хабблом (1929)",
      "Медицина: открытие инсулина (1922), витаминов группы В",
      "Технологии: массовое производство автомобилей, развитие кинематографа"
    ],
    timeline: [
      { year: "1922", event: "Нобелевская премия Эйнштейну за фотоэффект, открытие инсулина" },
      { year: "1925", event: "Гейзенберг создает матричную механику, Паули — принцип запрета" },
      { year: "1926", event: "Шрёдингер формулирует волновую механику" },
      { year: "1927", event: "Принцип неопределенности Гейзенберга" },
      { year: "1928", event: "Флеминг открывает пенициллин, Дирак предсказывает антиматерию" },
      { year: "1929", event: "Хаббл обнаруживает расширение Вселенной" },
      { year: "1930", event: "Клайд Томбо открывает Плутон, Паули предсказывает нейтрино" }
    ],
    image: "/img/d2a6fa6e-4caa-43ee-92f5-fd938f46d96b.jpg"
  },
  {
    id: 5,
    title: "Изобразительное искусство",
    subtitle: "Революция в визуальных формах",
    content: [
      "Кубизм: Пикассо и Брак разлагают формы на геометрические элементы",
      "Футуризм: Маринетти и Боччони воспевают скорость и технический прогресс",
      "Дадаизм: Дюшан, Цара — отрицание традиционного искусства, ready-made",
      "Супрематизм: Малевич создает беспредметное искусство, «Чёрный квадрат» (1915)",
      "Экспрессионизм: «Мост» и «Синий всадник» выражают внутренние переживания",
      "Конструктивизм: Татлин, Родченко — искусство на службе революции",
      "Сюрреализм: Дали, Магритт исследуют подсознание через живопись",
      "Новые материалы: коллаж, фотомонтаж, промышленные материалы в искусстве"
    ],
    timeline: [
      { year: "1915", event: "Малевич представляет «Чёрный квадрат» на выставке «0,10»" },
      { year: "1916", event: "Первая выставка дада в кабаре «Вольтер», Цюрих" },
      { year: "1917", event: "Дюшан представляет «Фонтан» — революция в понимании искусства" },
      { year: "1919", event: "Основание Баухауса — синтез искусства и ремесла" },
      { year: "1920", event: "Манифест конструктивизма Габо и Певзнера" },
      { year: "1924", event: "Первый манифест сюрреализма Андре Бретона" },
      { year: "1925", event: "Первая групповая выставка сюрреалистов в Париже" }
    ],
    image: "/img/931a09ed-c6ff-4adc-8147-ba1f6f1c41d6.jpg"
  },
  {
    id: 6,
    title: "Архитектура",
    subtitle: "Новые принципы и формы",
    content: [
      "Функционализм: «форма следует функции» — Луис Салливан и чикагская школа",
      "Баухаус (1919-1933): Гропиус объединяет искусство, ремесло и промышленность",
      "Конструктивизм в СССР: Татлин, Мельников — революционная архитектура",
      "Ле Корбюзье: «5 принципов архитектуры», дом как «машина для жилья»",
      "Рационализм: отказ от декора, чистые геометрические формы",
      "Новые материалы: железобетон, стекло, сталь в массовом строительстве",
      "Градостроительство: концепции «города-сада» Говарда",
      "Мис ван дер Роэ: «меньше значит больше», Павильон Барселоны (1929)"
    ],
    timeline: [
      { year: "1919", event: "Вальтер Гропиус основывает Баухаус в Веймаре" },
      { year: "1920", event: "Татлин проектирует Башню III Интернационала" },
      { year: "1922", event: "Ле Корбюзье публикует план «Современный город»" },
      { year: "1923", event: "«К архитектуре» — манифест модернизма Ле Корбюзье" },
      { year: "1925", event: "Баухаус переезжает в Дессау, новое здание Гропиуса" },
      { year: "1927", event: "Вайсенхоф — выставка современной архитектуры в Штутгарте" },
      { year: "1929", event: "Мис ван дер Роэ создает Павильон Барселоны" }
    ],
    image: "/img/5d976bce-5ad7-41fc-bc70-e30a4a93ac39.jpg"
  },
  {
    id: 7,
    title: "Литература и философия",
    subtitle: "Новые идеи и формы выражения",
    content: [
      "Модернизм в литературе: поток сознания у Джойса, время у Пруста",
      "Кафка: абсурд современной жизни, отчуждение, «Превращение» (1915)",
      "Экзистенциализм: Кьеркегор, позднее Сартр — существование предшествует сущности",
      "Психоанализ: Фрейд исследует бессознательное, Юнг — коллективное бессознательное",
      "Логический позитивизм: Венский кружок, Витгенштейн — границы языка и мышления",
      "Феноменология: Гуссерль изучает структуры сознания",
      "Новые техники: внутренний монолог, фрагментарность, символизм",
      "Поэзия: имажизм Паунда, «Бесплодная земля» Элиота (1922)"
    ],
    timeline: [
      { year: "1915", event: "Кафка пишет «Превращение» — символ отчуждения человека" },
      { year: "1918", event: "Шпенглер публикует «Закат Европы»" },
      { year: "1921", event: "Витгенштейн завершает «Логико-философский трактат»" },
      { year: "1922", event: "«Улисс» Джойса — революция в прозе" },
      { year: "1924", event: "Томас Манн публикует «Волшебную гору»" },
      { year: "1925", event: "Кафка (посмертно) «Процесс» — абсурд бюрократии" },
      { year: "1927", event: "Хайдеггер «Бытие и время» — основы экзистенциализма" }
    ],
    image: "/img/bd0595de-9869-4d39-8e85-54808cb2abd6.jpg"
  },
  {
    id: 8,
    title: "Заключение",
    subtitle: "Наследие эпохи 1914-1930",
    content: [
      "Формирование основ современной научной картины мира: квантовая физика, теория относительности",
      "Революция в искусстве: от реализма к абстракции, от подражания к эксперименту",
      "Новые философские направления: экзистенциализм, аналитическая философия, психоанализ",
      "Технологические достижения: радио, кино, авиация заложили основы информационного общества",
      "Архитектурный модернизм: принципы функционализма до сих пор определяют облик городов",
      "Литературные инновации: техники модернизма влияют на современную прозу",
      "Социальные изменения: эмансипация, урбанизация, массовая культура",
      "Период 1914-1930 — мост между традиционным и современным миром"
    ],
    timeline: [
      { year: "1914-1918", event: "Мировая война разрушает старый порядок" },
      { year: "1918-1922", event: "Революции и социальные потрясения" },
      { year: "1922-1929", event: "Культурный и научный расцвет «золотых двадцатых»" },
      { year: "1929-1930", event: "Великая депрессия завершает эпоху оптимизма" }
    ],
    image: "/img/fe4ca069-0c67-42e4-af78-bc97b08775b4.jpg"
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
        <Card className="p-8 mb-8 min-h-[600px] animate-fade-in">
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
                    className="w-full h-72 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium bg-black/50 px-2 py-1 rounded">
                      {slide.title}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Content */}
            <div className={`space-y-3 ${slide.image ? 'lg:col-span-1' : 'lg:col-span-2'}`}>
              {slide.content.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-200 border border-transparent hover:border-accent/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-accent/10 rounded-full p-1 mt-1">
                    <Icon name="ChevronRight" size={14} className="text-accent flex-shrink-0" />
                  </div>
                  <p className="text-foreground leading-relaxed text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* Timeline */}
            {slide.timeline && (
              <div className={`space-y-4 ${slide.image ? 'lg:col-span-1' : 'lg:col-span-1'}`}>
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Icon name="Clock" size={18} className="text-primary" />
                  </div>
                  Хронология событий
                </h3>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {slide.timeline.map((event, index) => (
                    <div
                      key={index}
                      className="flex gap-3 p-3 bg-gradient-to-r from-secondary/30 to-secondary/10 rounded-lg border-l-4 border-accent hover:shadow-md transition-all duration-200"
                      style={{ animationDelay: `${(index + slide.content.length) * 100}ms` }}
                    >
                      <span className="font-bold text-accent min-w-[70px] text-sm bg-accent/10 px-2 py-1 rounded">
                        {event.year}
                      </span>
                      <span className="text-sm leading-relaxed">{event.event}</span>
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