
import React, { useState, useEffect } from "react";
import { 
  Monitor, Shield, CheckCheck, Cpu, 
  Terminal, ShieldAlert, Network, Wifi, 
  BarChart3, Calendar, ChevronLeft, ChevronRight 
} from "lucide-react";

const slides = [
  {
    id: 1,
    type: "dark",
    content: (
      <div className="text-center">
        <h1 className="text-5xl font-serif font-bold mb-4">Внедрение АРМ</h1>
        <p className="text-xl text-accent font-medium">КГАПОУ "ККОТиП" - 2026</p>
        <div className="mt-16 text-lg opacity-70">
          Экзаменационный проект по дисциплине "Информационные технологии"<br />
          Студент: ИСиП 24-01 | Преподаватель: О.А. Тропашко
        </div>
      </div>
    )
  },
  {
    id: 2,
    type: "light",
    title: "Актуальность ИКТ в 2026 году",
    content: (
      <div className="grid grid-cols-2 gap-8 w-full px-8">
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
          <Cpu className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-navy">Цифровизация</h3>
          <p className="text-slate-600">Переход к модели "Цифрового колледжа" требует полной автоматизации рутинных процессов учебной части и приемной комиссии.</p>
        </div>
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
          <Terminal className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-navy">Эффективность</h3>
          <p className="text-slate-600">АРМ позволяют сократить время обработки документов на 40% и исключить ошибки, связанные с человеческим фактором.</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    type: "light",
    title: "Цели и задачи проекта",
    content: (
      <div className="w-full max-w-3xl text-left space-y-4 font-sans">
        <div className="flex items-start gap-4">
          <CheckCheck className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
          <p className="text-lg"><strong>Основная цель:</strong> Проектирование и economic обоснование внедрения 10 АРМ для сотрудников ККОТиП.</p>
        </div>
        <div className="flex items-start gap-4">
          <Monitor className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
          <p className="text-lg">Изучение теоретических основы и состава современного рабочего места специалиста.</p>
        </div>
        <div className="flex items-start gap-4">
          <Shield className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
          <p className="text-lg">Анализ угроз информационной безопасности и разработка мер защиты данных.</p>
        </div>
        <div className="flex items-start gap-4">
          <BarChart3 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
          <p className="text-lg">Расчет бюджета и оценка экономической эффективности внедрения ИКТ-средств.</p>
        </div>
        <div className="flex items-start gap-4">
          <Calendar className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
          <p className="text-lg">Формирование календарного плана-графика реализации этапов проекта.</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    type: "dark",
    content: (
      <div className="text-center">
        <h2 className="text-5xl font-serif font-bold mb-6">Теоретические основы</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-xl opacity-80">Глава 1: Понятие и структура АРМ</p>
      </div>
    )
  },
  {
    id: 5,
    type: "light",
    title: "Структура и состав АРМ",
    content: (
      <div className="grid grid-cols-2 gap-8 w-full px-8 items-center">
        <div className="text-left space-y-4">
          <h3 className="text-2xl font-serif font-bold text-navy">Комплексный подход</h3>
          <p className="text-slate-600 text-lg">АРМ - это не просто computer, а единый программно-технический комплекс специалиста:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Hardware:</strong> Моноблоки Pro, SSD, периферия (МФУ).</li>
            <li><strong>Software:</strong> Системная ОС, Офисные пакеты, ИС "1С:Колледж".</li>
            <li><strong>Network:</strong> Стабильный доступ к локальной сети колледжа.</li>
          </ul>
        </div>
        <div className="bg-navy p-6 rounded-xl text-accent font-mono text-sm border border-slate-700 shadow-inner">
          <p className="text-slate-400">// Архитектурная связка</p>
          <p>const ARM_Unit = &#123;</p>
          <p className="pl-4">hardware: "MonoBlock_24",</p>
          <p className="pl-4">os: "Windows_10_Pro",</p>
          <p className="pl-4">security: "AntiVirus_Enterprise",</p>
          <p className="pl-4">network: "Ethernet_1Gbps"</p>
          <p>&#125;;</p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    type: "light",
    title: "Угрозы безопасности",
    content: (
      <div className="grid grid-cols-3 gap-6 w-full px-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
          <ShieldAlert className="w-10 h-10 text-accent mx-auto mb-4" />
          <h4 className="font-bold text-navy mb-2">Вредоносное ПО</h4>
          <p className="text-sm text-slate-600">Проникновение вирусов-шифровальщиков через почту или внешние носители.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
          <ShieldAlert className="w-10 h-10 text-accent mx-auto mb-4" />
          <h4 className="font-bold text-navy mb-2">Сетевые атаки</h4>
          <p className="text-sm text-slate-600">Перехват трафика учетных записей внутри незащищенных сегментов сети.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
          <ShieldAlert className="w-10 h-10 text-accent mx-auto mb-4" />
          <h4 className="font-bold text-navy mb-2">Человеческий фактор</h4>
          <p className="text-sm text-slate-600">Непреднамеренное удаление файлов или компрометация паролей.</p>
        </div>
      </div>
    )
  },
  {
    id: 7,
    type: "dark",
    content: (
      <div className="text-center">
        <h2 className="text-5xl font-serif font-bold mb-6">Проектирование в ККОТиП</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-xl opacity-80">Глава 2: Практическая реализация</p>
      </div>
    )
  },
  {
    id: 8,
    type: "light",
    title: "Спецификация и Бюджет проекта",
    content: (
      <div className="w-full px-8 overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-4">Наименование</th>
              <th className="p-4 text-center">Кол-во</th>
              <th className="p-4 text-right">Цена (руб)</th>
              <th className="p-4 text-right">Стоимость (руб)</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            <tr className="border-b border-slate-100"><td className="p-4">Моноблок Pro 24"</td><td className="p-4 text-center">10</td><td className="p-4 text-right">45 000</td><td className="p-4 text-right">450 000</td></tr>
            <tr className="border-b border-slate-100"><td className="p-4">Лицензия Windows + Office</td><td className="p-4 text-center">10</td><td className="p-4 text-right">12 000</td><td className="p-4 text-right">120 000</td></tr>
            <tr className="border-b border-slate-100"><td className="p-4">Антивирусная защита</td><td className="p-4 text-center">10</td><td className="p-4 text-right">3 000</td><td className="p-4 text-right">30 000</td></tr>
            <tr className="bg-slate-50 font-bold text-navy">
              <td className="p-4" colSpan="3">ВСЕГО с НДС 20%</td>
              <td className="p-4 text-right">918 000</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: 9,
    type: "light",
    title: "Сетевая инфраструктура",
    content: (
      <div className="grid grid-cols-2 gap-8 w-full px-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
          <Network className="w-12 h-12 text-navy mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-navy">Проводной Ethernet</h3>
          <p className="text-slate-600 text-sm">Максимальная стабильность, высокая скорость передачи данных и гарантированная защита от перехвата информации из радиоэфира.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
          <Wifi className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-navy">Беспроводной Wi-Fi</h3>
          <p className="text-slate-600 text-sm">Мобильность рабочих мест, однако присутствуют риски затухания сигнала в старых перекрытиях здания и перегрузки точек доступа.</p>
        </div>
      </div>
    )
  },
  {
    id: 10,
    type: "light",
    title: "Календарный план внедрения",
    content: (
      <div className="w-full px-4 relative flex justify-between items-center mt-12">
        <div className="absolute left-0 right-0 h-1 bg-navy z-0 top-1/2 transform -translate-y-1/2"></div>
        <div className="bg-white p-4 rounded-lg border-2 border-accent z-10 text-center w-1/5 shadow-sm">
          <h4 className="font-bold text-accent">Закупка</h4>
          <p className="text-xs text-slate-500">Этап 1 (Дни 0-3)</p>
        </div>
        <div className="bg-white p-4 rounded-lg border-2 border-accent z-10 text-center w-1/5 shadow-sm">
          <h4 className="font-bold text-accent">Сеть</h4>
          <p className="text-xs text-slate-500">Этап 2 (Дни 3-5)</p>
        </div>
        <div className="bg-white p-4 rounded-lg border-2 border-accent z-10 text-center w-1/5 shadow-sm">
          <h4 className="font-bold text-accent">Инсталляция</h4>
          <p className="text-xs text-slate-500">Этап 3 (Дни 5-7)</p>
        </div>
        <div className="bg-white p-4 rounded-lg border-2 border-accent z-10 text-center w-1/5 shadow-sm">
          <h4 className="font-bold text-accent">Приемка</h4>
          <p className="text-xs text-slate-500">Этап 4 (Дни 7-12)</p>
        </div>
      </div>
    )
  },
  {
    id: 11,
    type: "light",
    title: "Корпоративная парольная политика",
    content: (
      <div className="w-full max-w-2xl text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 text-slate-700">
        <p>1. Минимальная длина пароля учетной записи - <strong>не менее 8 символов</strong>.</p>
        <p>2. Обязательно наличие заглавных букв, цифр и спецсимволов (@, #, $, %).</p>
        <p>3. Смена пароля производится в принудительном порядке <strong>каждые 90 дней</strong>.</p>
        <p>4. Автоматическая блокировка сессии при неактивности пользователя более 5 минут.</p>
        <p>5. Блокировка учетной записи на 30 минут после 5 неверных попыток ввода подряд.</p>
      </div>
    )
  },
  {
    id: 12,
    type: "dark",
    content: (
      <div className="text-center">
        <h2 className="text-6xl font-serif font-bold text-accent mb-4">Вопросы?</h2>
        <p className="text-2xl opacity-90">Благодарю за внимание!</p>
        <div className="mt-12 pt-6 border-t border-slate-700 text-slate-400 text-sm">
          КГАПОУ "ККОТиП" <br /> Экзаменационный проект по ИКТ, 2026
        </div>
      </div>
    )
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 p-4 font-sans select-none">
      <div className={`relative w-full max-w-[1100px] h-[620px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 flex flex-col items-center justify-center p-12 ${
        slide.type === "dark" ? "bg-slate-900 text-slate-100" : "bg-cream text-slate-900"
      }`}>
        
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-700/30">
          <div 
            className="h-full bg-accent transition-all duration-300" 
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {slide.title && (
          <h2 className={`absolute top-10 left-12 text-3xl font-serif font-bold pb-2 border-b-2 border-accent ${
            slide.type === "dark" ? "text-white" : "text-navy"
          }`}>
            {slide.title}
          </h2>
        )}

        <div className="w-full flex flex-col items-center justify-center flex-grow mt-6">
          {slide.content}
        </div>

        <div className="absolute bottom-6 right-12 text-sm font-mono opacity-50">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      <div className="flex items-center gap-6 mt-6 bg-slate-900/80 backdrop-blur px-6 py-3 rounded-full border border-slate-700">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className="text-white hover:text-accent disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-slate-400 font-mono text-sm">
          Слайд {currentSlide + 1}
        </span>
        <button 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          className="text-white hover:text-accent disabled:opacity-30 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
