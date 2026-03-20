import { useState } from "react";
import Icon from "@/components/ui/icon";

const upcoming = [
  {
    id: 1,
    title: "Весенняя ярмарка добра",
    date: "29 марта",
    time: "11:00 – 17:00",
    place: "Парк Победы, центральная аллея",
    animals: 34,
    volunteers: 12,
    color: "from-emerald-400 to-teal-500",
    emoji: "🌸",
    desc: "Главная весенняя выставка приюта «Лапы надежды». Познакомьтесь с питомцами и найдите нового друга!",
    tags: ["Собаки", "Кошки", "Семья"],
    registered: 89,
  },
  {
    id: 2,
    title: "День открытых лап",
    date: "5 апреля",
    time: "12:00 – 16:00",
    place: "ТЦ «Радуга», атриум",
    animals: 18,
    volunteers: 8,
    color: "from-pink-400 to-rose-500",
    emoji: "🐾",
    desc: "Выставка-пристройство при поддержке фонда «Хвостатое счастье». Будут щенки и котята!",
    tags: ["Щенки", "Котята", "Фото с питомцами"],
    registered: 53,
  },
  {
    id: 3,
    title: "Хвосты ищут дом",
    date: "19 апреля",
    time: "10:00 – 15:00",
    place: "Набережная, сцена",
    animals: 25,
    volunteers: 15,
    color: "from-amber-400 to-orange-500",
    emoji: "🏡",
    desc: "Ежемесячная выставка приюта. Мастер-классы по уходу за животными, конкурс фотографий.",
    tags: ["Мастер-класс", "Конкурс", "Все породы"],
    registered: 41,
  },
];

const past = [
  { title: "Февральская ярмарка", date: "22 февраля", adopted: 7, emoji: "❄️" },
  { title: "Новогоднее счастье", date: "28 декабря", adopted: 12, emoji: "🎄" },
  { title: "Осенний приют", date: "14 октября", adopted: 9, emoji: "🍂" },
];

const shelters = [
  { name: "Лапы надежды", dogs: 45, cats: 28, color: "from-green-400 to-emerald-500", emoji: "🐕" },
  { name: "Хвостатое счастье", dogs: 31, cats: 42, color: "from-blue-400 to-cyan-500", emoji: "🐈" },
  { name: "Добрый кров", dogs: 22, cats: 17, color: "from-purple-400 to-violet-500", emoji: "🏠" },
];

export default function ExhibitionView() {
  const [registered, setRegistered] = useState<Set<number>>(new Set());
  const [expanded, setExpanded] = useState<number | null>(1);

  const toggleRegister = (id: number) => {
    setRegistered(prev => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  };

  return (
    <div className="flex flex-col h-full pb-24">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 animate-fade-in">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Помоги найти дом</p>
        <h1 className="text-2xl font-black font-golos text-foreground">Выставки 🐾</h1>

        {/* Hero */}
        <div className="mt-3 rounded-3xl overflow-hidden relative bg-gradient-to-br from-rose-500 via-pink-500 to-orange-400 p-5">
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-4 left-10 w-20 h-20 rounded-full bg-white/10" />
          <div className="relative">
            <p className="text-4xl mb-2 animate-float inline-block">🐶🐱</p>
            <p className="text-white font-black text-xl font-golos leading-tight">
              Каждый заслуживает<br />любящий дом
            </p>
            <p className="text-white/80 text-xs mt-2 leading-relaxed">
              Выставки-пристройства бездомных животных — познакомьтесь, возьмите под опеку
            </p>
            <div className="flex gap-3 mt-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2 text-center">
                <p className="text-white font-black text-xl">127</p>
                <p className="text-white/70 text-[10px]">нашли дом</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2 text-center">
                <p className="text-white font-black text-xl">3</p>
                <p className="text-white/70 text-[10px]">выставки скоро</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2 text-center">
                <p className="text-white font-black text-xl">5</p>
                <p className="text-white/70 text-[10px]">приютов-партнёров</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 space-y-5">

        {/* Upcoming events */}
        <div className="animate-fade-in delay-100 opacity-0-start">
          <p className="text-sm font-bold text-foreground mb-3">Ближайшие выставки</p>
          <div className="space-y-3">
            {upcoming.map((event, i) => (
              <div
                key={event.id}
                className={`card-glass rounded-3xl overflow-hidden animate-fade-in opacity-0-start delay-${(i + 1) * 100}`}
              >
                {/* Top gradient */}
                <button
                  className="w-full text-left"
                  onClick={() => setExpanded(expanded === event.id ? null : event.id)}
                >
                  <div className={`bg-gradient-to-r ${event.color} px-4 pt-4 pb-3`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{event.emoji}</span>
                          <div className="bg-white/25 backdrop-blur-sm rounded-xl px-2.5 py-1">
                            <p className="text-white font-bold text-xs">{event.date} · {event.time}</p>
                          </div>
                        </div>
                        <p className="text-white font-black text-base leading-tight">{event.title}</p>
                      </div>
                      <Icon
                        name={expanded === event.id ? "ChevronUp" : "ChevronDown"}
                        size={18}
                        className="text-white/70 mt-1 flex-shrink-0"
                      />
                    </div>

                    <div className="flex items-center gap-1.5 mt-2">
                      <Icon name="MapPin" size={11} className="text-white/70" />
                      <p className="text-white/80 text-xs">{event.place}</p>
                    </div>

                    <div className="flex gap-3 mt-3">
                      <div className="flex items-center gap-1.5">
                        <Icon name="PawPrint" fallback="Heart" size={13} className="text-white/80" />
                        <p className="text-white text-xs font-semibold">{event.animals} животных</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Icon name="Heart" size={13} className="text-white/80" />
                        <p className="text-white text-xs font-semibold">{event.registered} записались</p>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded body */}
                {expanded === event.id && (
                  <div className="px-4 py-4 animate-fade-in">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{event.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {event.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-semibold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-muted rounded-2xl p-3 text-center">
                        <Icon name="Users" size={16} className="text-muted-foreground mx-auto mb-1" />
                        <p className="text-xs font-bold text-foreground">{event.volunteers} волонтёров</p>
                        <p className="text-[10px] text-muted-foreground">на выставке</p>
                      </div>
                      <div className="bg-muted rounded-2xl p-3 text-center">
                        <Icon name="Camera" size={16} className="text-muted-foreground mx-auto mb-1" />
                        <p className="text-xs font-bold text-foreground">Фотозона</p>
                        <p className="text-[10px] text-muted-foreground">с животными</p>
                      </div>
                    </div>

                    {registered.has(event.id) ? (
                      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl py-3.5 flex items-center justify-center gap-2">
                        <Icon name="CheckCircle" size={16} className="text-emerald-600" />
                        <span className="text-emerald-700 font-bold text-sm">Вы записаны! До встречи 🐾</span>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleRegister(event.id)}
                          className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl py-3 text-sm font-bold flex items-center justify-center gap-2"
                        >
                          <Icon name="CalendarPlus" size={15} />
                          Записаться
                        </button>
                        <button className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center flex-shrink-0">
                          <Icon name="Share2" size={16} className="text-muted-foreground" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Shelters */}
        <div className="animate-fade-in delay-300 opacity-0-start">
          <p className="text-sm font-bold text-foreground mb-3">Приюты-партнёры</p>
          <div className="space-y-2">
            {shelters.map(s => (
              <button key={s.name} className="w-full card-glass rounded-2xl p-3.5 flex items-center gap-3 hover:scale-[1.01] transition-all">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {s.emoji}
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-sm text-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">🐕 {s.dogs} собак · 🐈 {s.cats} кошек</p>
                </div>
                <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* Past events */}
        <div className="animate-fade-in delay-400 opacity-0-start">
          <p className="text-sm font-bold text-foreground mb-3">Прошедшие выставки</p>
          <div className="space-y-2">
            {past.map((p, i) => (
              <div key={i} className="card-glass rounded-2xl p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-muted flex items-center justify-center text-xl flex-shrink-0">
                  {p.emoji}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-foreground">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-emerald-600">{p.adopted}</p>
                  <p className="text-[10px] text-muted-foreground">нашли дом</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA volunteer */}
        <div className="rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-600 p-5 animate-fade-in delay-500 opacity-0-start mb-2">
          <p className="text-2xl mb-2">🙋</p>
          <p className="text-white font-black text-base">Стать волонтёром</p>
          <p className="text-white/75 text-xs mt-1 leading-relaxed">Помогайте организовывать выставки и находить дом для бездомных животных</p>
          <button className="mt-3 bg-white text-violet-600 font-bold text-sm px-4 py-2.5 rounded-2xl">
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
}
