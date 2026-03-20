import { useState } from "react";
import Icon from "@/components/ui/icon";

const pets = [
  { id: 1, name: "Барсик", breed: "Лабрадор", age: "3 года", emoji: "🐕", color: "from-amber-400 to-orange-500" },
  { id: 2, name: "Снежок", breed: "Хаски", age: "5 лет", emoji: "🐺", color: "from-blue-400 to-indigo-500" },
];

const history = [
  { park: "Парк Победы", date: "Сегодня, 09:30", duration: "45 мин", dog: "Барсик" },
  { park: "Лесная поляна", date: "Вчера, 17:15", duration: "1 ч 10 мин", dog: "Снежок" },
  { park: "Сквер Дружбы", date: "18 марта", duration: "30 мин", dog: "Барсик" },
  { park: "Набережная", date: "15 марта", duration: "55 мин", dog: "Снежок" },
];

const stats = [
  { label: "Прогулок", value: "47", icon: "Footprints" },
  { label: "Площадок", value: "8", icon: "MapPin" },
  { label: "Часов", value: "38", icon: "Clock" },
];

export default function ProfileView() {
  const [tab, setTab] = useState<"pets" | "history">("pets");

  return (
    <div className="flex flex-col h-full pb-24 overflow-y-auto">
      {/* Header card */}
      <div className="bg-gradient-primary px-5 pt-10 pb-8 relative overflow-hidden animate-fade-in">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/10" />

        <div className="relative flex items-center gap-4">
          <div className="w-18 h-18 rounded-3xl bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-4xl w-20 h-20">
            👤
          </div>
          <div>
            <p className="text-white/80 text-xs font-medium">Добро пожаловать!</p>
            <h1 className="text-2xl font-black text-white font-golos">Александр</h1>
            <p className="text-white/70 text-xs mt-0.5">Участник с марта 2024</p>
          </div>
          <button className="ml-auto w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
            <Icon name="Settings" size={16} className="text-white" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          {stats.map(s => (
            <div key={s.label} className="bg-white/15 backdrop-blur-sm rounded-2xl p-3 text-center">
              <p className="text-white font-black text-xl">{s.value}</p>
              <p className="text-white/70 text-[10px] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 mt-5">
        {/* Tabs */}
        <div className="flex gap-2 p-1 bg-muted rounded-2xl mb-4">
          <button
            onClick={() => setTab("pets")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === "pets" ? "bg-white shadow-sm text-foreground" : "text-muted-foreground"}`}
          >
            🐾 Питомцы
          </button>
          <button
            onClick={() => setTab("history")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === "history" ? "bg-white shadow-sm text-foreground" : "text-muted-foreground"}`}
          >
            📍 История
          </button>
        </div>

        {tab === "pets" && (
          <div className="space-y-3 animate-fade-in">
            {pets.map(pet => (
              <div key={pet.id} className="card-glass rounded-3xl overflow-hidden">
                <div className={`bg-gradient-to-r ${pet.color} p-4 flex items-center gap-4`}>
                  <span className="text-4xl">{pet.emoji}</span>
                  <div>
                    <p className="text-white font-black text-lg">{pet.name}</p>
                    <p className="text-white/80 text-sm">{pet.breed}</p>
                  </div>
                  <div className="ml-auto bg-white/20 rounded-xl px-3 py-1.5">
                    <p className="text-white text-xs font-semibold">{pet.age}</p>
                  </div>
                </div>
                <div className="p-4 flex gap-3">
                  <button className="flex-1 py-2 rounded-xl bg-accent text-accent-foreground text-xs font-semibold">
                    Паспорт
                  </button>
                  <button className="flex-1 py-2 rounded-xl bg-accent text-accent-foreground text-xs font-semibold">
                    История прогулок
                  </button>
                </div>
              </div>
            ))}

            <button className="w-full rounded-3xl border-2 border-dashed border-border py-4 flex items-center justify-center gap-2 text-muted-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-colors">
              <Icon name="Plus" size={18} />
              Добавить питомца
            </button>
          </div>
        )}

        {tab === "history" && (
          <div className="space-y-3 animate-fade-in">
            {history.map((item, i) => (
              <div key={i} className="card-glass rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-foreground">{item.park}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.date} · {item.dog}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-foreground">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
