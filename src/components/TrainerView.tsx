import { useState } from "react";
import Icon from "@/components/ui/icon";

const trainers = [
  {
    id: 1,
    name: "Алексей Воронов",
    title: "Кинолог-профессионал",
    exp: "12 лет",
    rating: 4.9,
    reviews: 87,
    price: "2 500 ₽/час",
    tags: ["Послушание", "Агилити", "ОКД"],
    emoji: "👨‍🏫",
    color: "from-violet-500 to-purple-600",
    available: true,
    desc: "Специалист по коррекции поведения и спортивной дрессировке. Работаю с любыми породами.",
  },
  {
    id: 2,
    name: "Ирина Соколова",
    title: "Кинолог, зоопсихолог",
    exp: "8 лет",
    rating: 4.8,
    reviews: 64,
    price: "2 000 ₽/час",
    tags: ["Щенки", "Страхи", "Социализация"],
    emoji: "👩‍🏫",
    color: "from-pink-500 to-rose-500",
    available: true,
    desc: "Помогаю щенкам и взрослым собакам преодолеть страхи и стать уверенными.",
  },
  {
    id: 3,
    name: "Михаил Орлов",
    title: "Инструктор по защите",
    exp: "15 лет",
    rating: 4.7,
    reviews: 112,
    price: "3 000 ₽/час",
    tags: ["ЗКС", "IPO", "Охрана"],
    emoji: "🧑‍🏫",
    color: "from-amber-500 to-orange-500",
    available: false,
    desc: "Специализация — служебное собаководство и защитно-карательная служба.",
  },
  {
    id: 4,
    name: "Наталья Белова",
    title: "Зоопсихолог",
    exp: "6 лет",
    rating: 4.9,
    reviews: 41,
    price: "1 800 ₽/час",
    tags: ["Агрессия", "Тревога", "Реабилитация"],
    emoji: "👩",
    color: "from-teal-500 to-cyan-500",
    available: true,
    desc: "Работаю с поведенческими проблемами: агрессия, тревожность, деструктивное поведение.",
  },
];

const courses = [
  { icon: "🎓", title: "Базовый курс ОКД", sessions: "8 занятий", price: "14 000 ₽", color: "from-emerald-400 to-teal-500" },
  { icon: "🏃", title: "Агилити для начинающих", sessions: "6 занятий", price: "12 000 ₽", color: "from-blue-400 to-indigo-500" },
  { icon: "🐾", title: "Щенячий старт (3–6 мес)", sessions: "5 занятий", price: "9 000 ₽", color: "from-pink-400 to-rose-500" },
  { icon: "🧠", title: "Коррекция поведения", sessions: "4 занятия", price: "10 000 ₽", color: "from-purple-400 to-violet-500" },
];

export default function TrainerView() {
  const [selected, setSelected] = useState<number | null>(null);
  const [booked, setBooked] = useState<Set<number>>(new Set());

  const handleBook = (id: number) => {
    setBooked(prev => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  return (
    <div className="flex flex-col h-full pb-24">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 animate-fade-in">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Обучение</p>
        <h1 className="text-2xl font-black font-golos text-foreground">Кинологи 🎓</h1>

        {/* Banner */}
        <div className="mt-3 rounded-3xl bg-gradient-to-r from-violet-500 to-indigo-600 p-4 flex items-center gap-3 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10" />
          <div className="text-3xl">🐕‍🦺</div>
          <div className="relative">
            <p className="text-white font-black text-base">Первое занятие</p>
            <p className="text-white/80 text-xs mt-0.5">бесплатная консультация 20 мин</p>
          </div>
          <button className="ml-auto flex-shrink-0 bg-white text-violet-600 font-bold text-xs px-3 py-2 rounded-xl">
            Подробнее
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 space-y-5">
        {/* Курсы */}
        <div className="animate-fade-in delay-100 opacity-0-start">
          <p className="text-sm font-bold text-foreground mb-3">Готовые курсы</p>
          <div className="grid grid-cols-2 gap-2.5">
            {courses.map((c, i) => (
              <button
                key={i}
                className={`rounded-3xl bg-gradient-to-br ${c.color} p-4 text-left hover:scale-[1.03] active:scale-[0.97] transition-all`}
              >
                <p className="text-2xl mb-2">{c.icon}</p>
                <p className="text-white font-bold text-sm leading-snug">{c.title}</p>
                <p className="text-white/75 text-[11px] mt-1">{c.sessions}</p>
                <p className="text-white font-black text-sm mt-2">{c.price}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Кинологи */}
        <div className="animate-fade-in delay-200 opacity-0-start">
          <p className="text-sm font-bold text-foreground mb-3">Специалисты</p>
          <div className="space-y-3">
            {trainers.map((trainer, i) => (
              <div
                key={trainer.id}
                className={`card-glass rounded-3xl overflow-hidden animate-fade-in opacity-0-start delay-${(i + 2) * 100}`}
              >
                {/* Top */}
                <button
                  className="w-full text-left"
                  onClick={() => setSelected(selected === trainer.id ? null : trainer.id)}
                >
                  <div className={`bg-gradient-to-r ${trainer.color} px-4 pt-4 pb-3 flex items-center gap-3`}>
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl flex-shrink-0">
                      {trainer.emoji}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-black text-base leading-tight">{trainer.name}</p>
                      <p className="text-white/80 text-xs mt-0.5">{trainer.title}</p>
                      <p className="text-white/70 text-xs">Опыт: {trainer.exp}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="bg-white/20 rounded-xl px-2.5 py-1.5 text-center">
                        <p className="text-white font-black text-lg leading-none">{trainer.rating}</p>
                        <p className="text-white/70 text-[10px]">★ {trainer.reviews} отз.</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${trainer.available ? "bg-emerald-100 text-emerald-700" : "bg-muted text-muted-foreground"}`}>
                        {trainer.available ? "Доступен" : "Занят"}
                      </span>
                      <span className="text-sm font-black text-foreground">{trainer.price}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-semibold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>

                {/* Expanded */}
                {selected === trainer.id && (
                  <div className="px-4 pb-4 border-t border-border pt-3 animate-fade-in">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{trainer.desc}</p>

                    {/* Слоты */}
                    <p className="text-xs font-bold text-foreground mb-2">Ближайшие слоты</p>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {["Сег. 14:00", "Сег. 17:00", "Завтра 10:00", "Завтра 16:00"].map(slot => (
                        <button key={slot} className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-accent hover:bg-primary hover:text-primary-foreground transition-colors border border-border">
                          {slot}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {booked.has(trainer.id) ? (
                        <div className="col-span-2 bg-emerald-50 border border-emerald-200 rounded-2xl py-3 flex items-center justify-center gap-2 text-emerald-700 font-bold text-sm">
                          <Icon name="CheckCircle" size={16} />
                          Запись отправлена!
                        </div>
                      ) : (
                        <>
                          <button
                            onClick={() => handleBook(trainer.id)}
                            disabled={!trainer.available}
                            className={`py-3 rounded-2xl text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${trainer.available ? "bg-gradient-primary text-white" : "bg-muted text-muted-foreground cursor-not-allowed"}`}
                          >
                            <Icon name="CalendarPlus" size={15} />
                            Записаться
                          </button>
                          <button className="py-3 rounded-2xl text-sm font-bold bg-white border border-border text-foreground flex items-center justify-center gap-1.5 hover:bg-accent transition-colors">
                            <Icon name="MessageCircle" size={15} />
                            Написать
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
