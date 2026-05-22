
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, Shield, CheckCheck, Cpu, 
  Terminal, ShieldAlert, Network, Wifi, 
  BarChart3, Calendar, ChevronLeft, ChevronRight,
  Maximize2, Minimize2
} from "lucide-react";

const slides = [
  {
    id: 1,
    content: (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-serif font-bold mb-4 text-navy">Внедрение АРМ</h1>
        <p className="text-2xl text-accent font-medium">КГАПОУ "ККОТиП" - 2026</p>
        <div className="mt-16 text-lg opacity-60">
          Экзаменационный проект по ИТ<br />
          Студент: ИСиП 24-01 | Преподаватель: О.А. Тропашко
        </div>
      </motion.div>
    )
  },
  {
    id: 2,
    title: "Актуальность ИКТ",
    content: (
      <div className="grid grid-cols-2 gap-12 w-full px-8">
        {[
          { icon: Cpu, t: "Цифровизация", d: "Переход к модели Цифрового колледжа." },
          { icon: Terminal, t: "Эффективность", d: "Сокращение времени обработки документов на 40%." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="p-10 rounded-[30px] shadow-[10px_10px_20px_#CDCAD3,-10px_-10px_20px_#FFFFFF] text-center"
          >
            <item.icon className="w-14 h-14 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-navy">{item.t}</h3>
            <p className="text-slate-500 leading-relaxed">{item.d}</p>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 3,
    title: "Задачи проекта",
    content: (
      <div className="w-full max-w-2xl space-y-6">
        {[
          "Изучение теоретических основ АРМ",
          "Анализ угроз безопасности",
          "Расчет бюджета в MS Excel",
          "Создание календарного плана",
          "Разработка парольной политики"
        ].map((task, i) => (
          <motion.div 
            key={i}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-5 p-4 rounded-2xl shadow-[4px_4px_10px_#CDCAD3,-4px_-4px_10px_#FFFFFF]"
          >
            <div className="w-10 h-10 rounded-full shadow-[inset_2px_2px_5px_#CDCAD3,inset_-2px_-2px_5px_#FFFFFF] flex items-center justify-center">
               <CheckCheck className="w-5 h-5 text-accent" />
            </div>
            <p className="text-lg font-medium">{task}</p>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 4,
    title: "Структура АРМ",
    content: (
      <div className="grid grid-cols-2 gap-12 w-full px-8 items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <h3 className="text-3xl font-bold text-navy">Hardware & Software</h3>
          <p className="text-slate-500 text-lg">Единый программно-технический комплекс специалиста.</p>
          <div className="p-6 rounded-3xl shadow-[inset_5px_5px_10px_#CDCAD3,inset_-5px_-5px_10px_#FFFFFF] text-accent font-mono text-sm">
             <p>// Спецификация 2026</p>
             <p>const Config = ["Core_i3", "SSD_512GB", "Win_11"];</p>
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="p-10 rounded-[40px] shadow-[15px_15px_30px_#CDCAD3,-15px_-15px_30px_#FFFFFF] flex items-center justify-center"
        >
          <Monitor className="w-40 h-40 text-navy opacity-20" />
        </motion.div>
      </div>
    )
  },
  {
    id: 5,
    title: "Бюджет на 10 АРМ",
    content: (
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="w-full px-8"
      >
        <div className="rounded-[30px] shadow-[10px_10px_20px_#CDCAD3,-10px_-10px_20px_#FFFFFF] overflow-hidden bg-cream">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-5 text-accent uppercase tracking-widest text-xs">Предмет</th>
                <th className="p-5 text-accent uppercase tracking-widest text-xs text-right">Сумма (руб)</th>
              </tr>
            </thead>
            <tbody className="text-navy font-medium">
              <tr className="border-b border-slate-200">
                <td className="p-5">Оборудование (Моноблоки)</td>
                <td className="p-5 text-right">450 000</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-5">Лицензионное ПО</td>
                <td className="p-5 text-right">120 000</td>
              </tr>
              <tr className="bg-slate-100/50">
                <td className="p-5 font-bold">ИТОГО С НДС 20%</td>
                <td className="p-5 text-right font-bold text-accent text-xl">918 000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    )
  },
  {
    id: 6,
    title: "Вопросы?",
    content: (
      <div className="text-center">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="w-32 h-32 rounded-full shadow-[10px_10px_20px_#CDCAD3,-10px_-10px_20px_#FFFFFF] flex items-center justify-center mx-auto mb-8"
        >
          <HelpCircle className="w-16 h-16 text-accent" />
        </motion.div>
        <h2 className="text-5xl font-bold text-navy mb-4">Спасибо за внимание!</h2>
        <p className="text-slate-400 font-mono">КГАПОУ "ККОТиП" | 2026</p>
      </div>
    )
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => { if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1); };
  const prevSlide = () => { if (currentSlide > 0) setCurrentSlide(currentSlide - 1); };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key.toLowerCase() === "f" || e.key.toLowerCase() === "а") toggleFullscreen();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream p-4 font-sans select-none overflow-hidden">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`relative bg-cream flex flex-col items-center justify-center transition-all duration-500 \${
            isFullscreen 
            ? "w-screen h-screen rounded-none p-20" 
            : "w-full max-w-[1100px] h-[650px] rounded-[50px] shadow-[30px_30px_60px_#CDCAD3,-30px_-30px_60px_#FFFFFF] p-16"
          }`}
        >
          {slides[currentSlide].title && (
            <div className="absolute top-12 left-16">
              <h2 className="text-4xl font-serif font-bold text-navy mb-1">{slides[currentSlide].title}</h2>
              <div className="w-16 h-1 bg-accent rounded-full"></div>
            </div>
          )}

          <div className="w-full flex flex-col items-center justify-center flex-grow">
            {slides[currentSlide].content}
          </div>

          <div className="absolute bottom-10 right-16 font-mono text-slate-400 font-bold">
            {currentSlide + 1} / {slides.length}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-8 mt-12 bg-cream px-10 py-4 rounded-full shadow-[8px_8px_16px_#CDCAD3,-8px_-8px_16px_#FFFFFF]">
        <button onClick={prevSlide} disabled={currentSlide === 0} className="text-navy hover:text-accent disabled:opacity-20 transition-all active:scale-90">
          <ChevronLeft className="w-8 h-8" />
        </button>
        
        <div className="w-40 h-2 bg-slate-200 rounded-full overflow-hidden shadow-[inset_2px_2px_5px_#CDCAD3,inset_-2px_-2px_5px_#FFFFFF]">
          <motion.div 
            className="h-full bg-accent"
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="text-navy hover:text-accent disabled:opacity-20 transition-all active:scale-90">
          <ChevronRight className="w-8 h-8" />
        </button>

        <button onClick={toggleFullscreen} className="text-slate-400 hover:text-accent border-l border-slate-300 pl-6 ml-2 transition-all active:scale-90">
          {isFullscreen ? <Minimize2 className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" /> }
        </button>
      </div>
    </div>
  );
}
