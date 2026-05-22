import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Monitor, Shield, CheckCheck, Cpu, 
  Terminal, ShieldAlert, Network, Wifi, 
  BarChart3, Calendar, ChevronLeft, ChevronRight,
  Maximize2, Minimize2, HelpCircle, HardDrive, 
  Lock, FileText, AlertTriangle
} from "lucide-react";

const BASE_WIDTH = 1100;
const BASE_HEIGHT = 650;

const slides = [
  {
    id: 1,
    content: (
      <div className="text-center">
        <h1 className="text-5xl font-serif font-bold mb-4 text-navy">Внедрение АРМ в образовательном учреждении</h1>
        <p className="text-xl text-accent font-medium mb-12">КГАПОУ "ККОТиП"</p>
        <div className="text-md opacity-75 font-medium space-y-2">
          <p>Экзаменационный проект по дисциплине "Информационные технологии"</p>
          <p className="pt-4 text-slate-500">Выполнил: Студент группы ИСиП 24-01 Ветров Т. С.</p>
          <p className="text-slate-500">Проверил: Преподаватель Тропашко О.А.</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Введение",
    content: (
      <div className="w-full max-w-3xl space-y-6">
        <div className="p-5 rounded-2xl neumorphic-item">
          <h4 className="text-lg font-bold text-accent mb-1">Актуальность</h4>
          <p className="text-sm text-slate-600">Цифровизация колледжа и радикальное ускорение рутинных операций сотрудников учебной части.</p>
        </div>
        <div className="p-5 rounded-2xl neumorphic-item">
          <h4 className="text-lg font-bold text-navy mb-1">Цель проекта</h4>
          <p className="text-sm text-slate-600">Проектирование и детальный расчет бюджета автоматизированных рабочих мест (АРМ) для учебной части.</p>
        </div>
        <div className="p-5 rounded-2xl neumorphic-item">
          <h4 className="text-lg font-bold text-slate-500 mb-2">Основные задачи</h4>
          <div className="grid grid-cols-4 gap-3 text-xs font-mono text-center">
            <div className="p-3 rounded-xl neumorphic-inset">1. Теория АРМ</div>
            <div className="p-3 rounded-xl neumorphic-inset">2. Бюджет Excel</div>
            <div className="p-3 rounded-xl neumorphic-inset">3. План Ганта</div>
            <div className="p-3 rounded-xl neumorphic-inset">4. Безопасность</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Что такое АРМ? (Глава 1)",
    content: (
      <div className="grid grid-cols-3 gap-6 w-full px-4">
        <div className="p-6 rounded-2xl neumorphic-item flex flex-col justify-between">
          <div>
            <Cpu className="w-8 h-8 text-accent mb-3" />
            <h4 className="font-bold text-base mb-2">Определение</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Индивидуальный программно-технический комплекс, предназначенный для автоматизации профессиональных задач специалиста.</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl neumorphic-item flex flex-col justify-between">
          <div>
            <HardDrive className="w-8 h-8 text-navy mb-3" />
            <h4 className="font-bold text-base mb-2">Состав комплекса</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Системный блок / Моноблок, МФУ для работы с документами, операционная система и офисный пакет софта.</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl neumorphic-item flex flex-col justify-between">
          <div>
            <Terminal className="w-8 h-8 text-slate-400 mb-3" />
            <h4 className="font-bold text-base mb-2">Отличие от ПК</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Обычный ПК универсален, в то время как АРМ жестко конфигурируется и оптимизируется под конкретные обязанности сотрудника.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Информационная безопасность",
    content: (
      <div className="grid grid-cols-2 gap-8 w-full px-4">
        <div className="p-6 rounded-2xl neumorphic-inset space-y-4">
          <h4 className="font-bold text-md text-red-900 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-700" /> Основные угрозы
          </h4>
          <ul className="text-xs space-y-2 text-slate-600 font-medium">
            <li className="flex items-center gap-2">❌ Вирусы-шифровальщики и малварь</li>
            <li className="flex items-center gap-2">❌ Несанкционированный перехват данных</li>
            <li className="flex items-center gap-2">❌ Ошибки и халатность персонала колледжа</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl neumorphic-item space-y-4">
          <h4 className="font-bold text-md text-accent flex items-center gap-2">
            <Shield className="w-5 h-5" /> Методы защиты
          </h4>
          <ul className="text-xs space-y-2 text-slate-600 font-medium">
            <li className="flex items-center gap-2">🛡️ Современное антивирусное ПО</li>
            <li className="flex items-center gap-2">🛡️ Обязательное шифрование трафика</li>
            <li className="flex items-center gap-2">🛡️ Регулярное изолированное резервное копирование</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Практическая часть: Кейс на 10 сотрудников",
    content: (
      <div className="grid grid-cols-5 gap-6 w-full px-4 items-center">
        <div className="col-span-2 p-6 rounded-2xl neumorphic-item space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold">// Объект внедрения</span>
          <h3 className="text-2xl font-bold text-navy">Учебная часть КГАПОУ "ККОТиП"</h3>
          <p className="text-xs text-slate-500 leading-relaxed">Модернизация рабочих мест для обеспечения бесперебойной обработки личных дел, ведомостей и учебных планов 10 сотрудников.</p>
        </div>
        <div className="col-span-3 space-y-3">
          <div className="p-3 rounded-xl neumorphic-inset flex items-center justify-between text-xs">
            <span className="font-bold">Аппаратная часть:</span>
            <span className="text-slate-600 font-mono">Моноблоки Core i3 / SSD 512GB / 16GB RAM</span>
          </div>
          <div className="p-3 rounded-xl neumorphic-inset flex items-center justify-between text-xs">
            <span className="font-bold">Операционная система:</span>
            <span className="text-slate-600 font-mono">Лицензионная Windows 11 Pro</span>
          </div>
          <div className="p-3 rounded-xl neumorphic-inset flex items-center justify-between text-xs">
            <span className="font-bold">Офисный софт:</span>
            <span className="text-slate-600 font-mono">Профессиональный офисный пакет</span>
          </div>
          <div className="p-3 rounded-xl neumorphic-inset flex items-center justify-between text-xs">
            <span className="font-bold">Защита среды:</span>
            <span className="text-slate-600 font-mono">Централизованная антивирусная защита (Год)</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Расчет бюджета (Данные из MS Excel)",
    content: (
      <div className="w-full px-4 space-y-4">
        <div className="rounded-2xl neumorphic-inset overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-300 bg-slate-200/50">
                <th className="p-3 text-navy font-bold uppercase tracking-wider">Наименование спецификации (10 АРМ)</th>
                <th className="p-3 text-navy font-bold uppercase tracking-wider text-right">Стоимость (руб)</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 font-medium font-mono">
              <tr className="border-b border-slate-200/60">
                <td className="p-2 pl-4">Системные блоки и мониторы 24" (Оборудование)</td>
                <td className="p-2 pr-4 text-right">630 000</td>
              </tr>
              <tr className="border-b border-slate-200/60">
                <td className="p-2 pl-4">Периферия (Клавиатуры + мыши)</td>
                <td className="p-2 pr-4 text-right">25 000</td>
              </tr>
              <tr className="border-b border-slate-200/60">
                <td className="p-2 pl-4">Лицензии Windows + Антивирусный пакет</td>
                <td className="p-2 pr-4 text-right">110 000</td>
              </tr>
              <tr className="bg-slate-300/30">
                <td className="p-3 pl-4 font-bold text-navy font-sans">ИТОГО С НДС 20%</td>
                <td className="p-3 pr-4 text-right font-bold text-accent text-base">918 000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-3 text-xs text-amber-900">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span><strong>Вывод аналитики:</strong> Зафиксировано превышение выделенного лимита в 850 000 руб. на величину <strong>68 000 руб.</strong> Требуется последующая оптимизация аппаратной спецификации.</span>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "План внедрения (Диаграмма Ганта)",
    content: (
      <div className="w-full px-4 space-y-4">
        <div className="p-4 rounded-xl neumorphic-inset text-center">
          <span className="text-xs font-mono text-slate-400">Общий срок реализации проекта:</span>
          <div className="text-3xl font-serif font-bold text-accent">12 рабочих дней</div>
        </div>
        <div className="space-y-2">
          {[
            { n: "Закупка и поставка оборудования", d: "3 дня", w: "w-1/4 bg-slate-400" },
            { n: "Установка ОС и прикладного ПО", d: "2 дня", w: "w-1/6 bg-accent" },
            { n: "Монтаж и тонкая настройка сети", d: "2 дня", w: "w-1/6 bg-navy opacity-80" },
            { n: "Обучение сотрудников учебной части", d: "4 дня", w: "w-1/3 bg-accent" },
            { n: "Комплексное тестирование комплекса", d: "1 день", w: "w-12 bg-slate-500" }
          ].map((step, i) => (
            <div key={i} className="flex items-center justify-between text-xs p-2 rounded-lg neumorphic-item">
              <span className="font-medium text-slate-700 w-1/2">{step.n}</span>
              <div className="w-1/3 bg-slate-200/50 h-3 rounded-full overflow-hidden mx-4 neumorphic-inset">
                <div className={"h-full rounded-full " + step.w}></div>
              </div>
              <span className="font-mono font-bold text-slate-500 w-16 text-right">{step.d}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Безопасность: Парольная политика",
    content: (
      <div className="grid grid-cols-2 gap-4 w-full px-4">
        {[
          { t: "Длина пароля", d: "Минимум 8 символов для защиты от брутфорса.", i: ">= 8 chars" },
          { t: "Сложность состава", d: "Обязательное сочетание: заглавные буквы + цифры + спецсимволы.", i: "Ab1$#_!" },
          { t: "Период ротации", d: "Полная принудительная смена паролей каждые 90 календарных дней.", i: "90 дней" },
          { t: "Защита от перебора", d: "Автоматическая блокировка учетной записи после 5 неудачных попыток ввода.", i: "5 попыток" }
        ].map((policy, i) => (
          <div key={i} className="p-4 rounded-xl neumorphic-item flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-navy">{policy.t}</h4>
              <p className="text-xs text-slate-500 leading-tight">{policy.d}</p>
            </div>
            <div className="px-3 py-2 rounded-lg neumorphic-inset text-xs font-mono font-bold text-accent whitespace-nowrap">
              {policy.i}
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 9,
    title: "Заключение",
    content: (
      <div className="text-center space-y-6 max-w-2xl">
        <div className="w-20 h-20 rounded-full neumorphic-item flex items-center justify-center mx-auto">
          <CheckCheck className="w-10 h-10 text-accent" />
        </div>
        <h2 className="text-3xl font-bold text-navy">Итоги проектирования</h2>
        <div className="space-y-3 text-sm text-slate-600 font-medium">
          <p>✓ Все поставленные задачи экзаменационного проекта выполнены в полном объеме.</p>
          <p>✓ Цель по проектированию АРМ для ККОТиП успешно достигнута.</p>
          <p>✓ Проект полностью готов к практической реализации на предприятии сразу после проведения корректировки и оптимизации бюджета.</p>
        </div>
      </div>
    )
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => { if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1); };
  const prevSlide = () => { if (currentSlide > 0) setCurrentSlide(currentSlide - 1); };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {});
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
    }
  };

  useEffect(() => {
    const handleFSChange = () => { setIsFullscreen(!!document.fullscreenElement); };
    document.addEventListener("fullscreenchange", handleFSChange);
    return () => document.removeEventListener("fullscreenchange", handleFSChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key.toLowerCase() === "f" || e.key.toLowerCase() === "а") toggleFullscreen();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const progressPercent = ((currentSlide + 1) / 9) * 100;

  const scaleX = dimensions.width / BASE_WIDTH;
  const scaleY = dimensions.height / BASE_HEIGHT;
  const scaleFactor = isFullscreen ? Math.min(scaleX, scaleY) * 0.95 : 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream p-4 font-sans select-none overflow-hidden">
      
      <div
        className={"relative flex flex-col items-center justify-center transition-all duration-300 neumorphic-card " + 
          (isFullscreen ? "w-screen h-screen rounded-none p-0 overflow-hidden" : "rounded-[50px] p-16")
        }
        style={isFullscreen ? { background: "var(--color-bg)" } : { width: `${BASE_WIDTH}px`, height: `${BASE_HEIGHT}px` }}
      >
        <div 
          className="w-full h-full flex flex-col items-center justify-center relative"
          style={{
            transform: `scale(${scaleFactor})`,
            transformOrigin: "center center",
            width: isFullscreen ? `${BASE_WIDTH}px` : "100%",
            height: isFullscreen ? `${BASE_HEIGHT}px` : "100%",
            flexShrink: 0
          }}
        >
          {slides[currentSlide].title && (
            <div className="absolute top-12 left-16">
              <h2 className="text-3xl font-serif font-bold text-navy mb-1">{slides[currentSlide].title}</h2>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
          )}

          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full flex flex-col items-center justify-center flex-grow"
          >
            {slides[currentSlide].content}
          </motion.div>

          <div className="absolute bottom-10 right-16 font-mono text-slate-400 font-bold text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 mt-8 py-3 px-8 rounded-full neumorphic-item">
        <button onClick={prevSlide} disabled={currentSlide === 0} className="p-3 rounded-full neumorphic-btn text-navy hover:text-accent disabled:opacity-20 cursor-pointer flex items-center justify-center">
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="w-36 h-2 rounded-full overflow-hidden neumorphic-inset relative">
          <div 
            className="h-full bg-accent transition-all duration-300 ease-out"
            style={{ width: progressPercent + "Percent".replace("Percent", "%") }}
          />
        </div>

        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="p-3 rounded-full neumorphic-btn text-navy hover:text-accent disabled:opacity-20 cursor-pointer flex items-center justify-center">
          <ChevronRight className="w-6 h-6" />
        </button>

        <button onClick={toggleFullscreen} className="p-3 ml-2 rounded-full neumorphic-btn text-slate-400 hover:text-accent cursor-pointer flex items-center justify-center">
          {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}