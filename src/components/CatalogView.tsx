import { useState } from "react";
import Icon from "@/components/ui/icon";

const categories = ["Все", "Огороженные", "С водой", "Освещение", "24/7", "Агилити"];

const parks = [
  {
    id: 1, name: "Парк Победы", address: "ул. Ленина, 42", rating: 4.8, reviews: 128,
    distance: "0.3 км", open: true, image: "🌳",
    tags: ["Огорожена", "Освещение", "Вода"],
    gradient: "from-emerald-400 to-teal-500",
    description: "Просторная площадка с разделением на зоны для больших и малых пород",
  },
  {
    id: 2, name: "Сквер Дружбы", address: "пр. Мира, 15", rating: 4.5, reviews: 84,
    distance: "0.7 км", open: true, image: "🌲",
    tags: ["Малые породы", "Тень"],
    gradient: "from-green-400 to-emerald-500",
    description: "Уютный сквер для небольших собак, много зелени и тени",
  },
  {
    id: 3, name: "Площадка у метро", address: "ст. м. Центральная", rating: 4.2, reviews: 56,
    distance: "1.1 км", open: false, image: "🏙️",
    tags: ["24/7", "Освещение"],
    gradient: "from-blue-400 to-cyan-500",
    description: "Удобная локация рядом с метро, работает круглосуточно",
  },
  {
    id: 4, name: "Лесная поляна", address: "Лесной пр., 8", rating: 4.9, reviews: 203,
    distance: "1.4 км", open: true, image: "🌿",
    tags: ["Агилити", "Вода", "Большие"],
    gradient: "from-lime-400 to-green-500",
    description: "Лучшая площадка района — агилити-оборудование и водоём",
  },
  {
    id: 5, name: "Набережная", address: "Речная набережная, 1", rating: 4.6, reviews: 91,
    distance: "1.8 км", open: true, image: "🌊",
    tags: ["Вода", "Панорама"],
    gradient: "from-sky-400 to-blue-500",
    description: "Площадка с видом на реку, идеально для летних прогулок",
  },
];

export default function CatalogView() {
  const [active, setActive] = useState("Все");
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="flex flex-col h-full pb-24">
      {/* Header */}
      <div className="px-5 pt-6 pb-3 animate-fade-in">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Каталог</p>
        <h1 className="text-2xl font-black font-playfair text-foreground">Все площадки 🗺️</h1>
      </div>

      {/* Categories */}
      <div className="px-5 mb-4 animate-fade-in delay-100 opacity-0-start">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-gradient-primary text-white shadow-md"
                  : "bg-white border border-border text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Parks list */}
      <div className="px-5 flex-1 overflow-y-auto space-y-4">
        {parks.map((park, i) => (
          <button
            key={park.id}
            onClick={() => setSelected(selected === park.id ? null : park.id)}
            className={`w-full card-glass rounded-3xl overflow-hidden text-left transition-all hover:scale-[1.01] active:scale-[0.99] animate-fade-in opacity-0-start delay-${(i + 1) * 100}`}
          >
            {/* Card top */}
            <div className={`bg-gradient-to-r ${park.gradient} p-4 flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{park.image}</span>
                <div>
                  <p className="font-black text-white text-base leading-tight">{park.name}</p>
                  <p className="text-white/80 text-xs mt-0.5">{park.address}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-2.5 py-1.5">
                  <p className="text-white font-black text-lg leading-none">{park.rating}</p>
                  <p className="text-white/70 text-[10px]">★ рейтинг</p>
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={13} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{park.distance}</span>
                  <span className="text-muted-foreground">·</span>
                  <Icon name="MessageSquare" size={13} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{park.reviews} отзывов</span>
                </div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${park.open ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'}`}>
                  {park.open ? 'Открыто' : 'Закрыто'}
                </span>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">{park.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {park.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-semibold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {selected === park.id && (
                <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-gradient-primary text-white rounded-2xl py-2.5 text-sm font-bold flex items-center justify-center gap-2">
                      <Icon name="Navigation" size={14} />
                      Маршрут
                    </button>
                    <button className="bg-white border border-border rounded-2xl py-2.5 text-sm font-bold text-foreground flex items-center justify-center gap-2">
                      <Icon name="Heart" size={14} />
                      Избранное
                    </button>
                  </div>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}