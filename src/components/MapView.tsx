import Icon from "@/components/ui/icon";

const parks = [
  { id: 1, x: 28, y: 35, name: "Парк Победы", rating: 4.8, distance: "0.3 км", type: "green" },
  { id: 2, x: 60, y: 22, name: "Сквер Дружбы", rating: 4.5, distance: "0.7 км", type: "green" },
  { id: 3, x: 75, y: 58, name: "Площадка у метро", rating: 4.2, distance: "1.1 км", type: "orange" },
  { id: 4, x: 40, y: 68, name: "Лесная поляна", rating: 4.9, distance: "1.4 км", type: "green" },
  { id: 5, x: 15, y: 72, name: "Набережная", rating: 4.6, distance: "1.8 км", type: "orange" },
];

const nearbyList = [
  { id: 1, name: "Парк Победы", distance: "0.3 км", rating: 4.8, open: true, dogs: 12, tags: ["Большие собаки", "Вода"] },
  { id: 2, name: "Сквер Дружбы", distance: "0.7 км", rating: 4.5, open: true, dogs: 5, tags: ["Огорожена"] },
  { id: 3, name: "Площадка у метро", distance: "1.1 км", rating: 4.2, open: false, dogs: 0, tags: ["24/7", "Малые породы"] },
];

export default function MapView() {
  return (
    <div className="flex flex-col h-full pb-24">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 animate-fade-in">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/9bbef214-6211-4ea8-b61b-81dc6f25c80f/files/4ea18f57-217b-4716-a6c1-906d5425dfef.jpg"
              alt="ПёсПарк"
              className="w-11 h-11 rounded-2xl object-cover shadow-sm"
            />
            <div>
              <h1 className="text-xl font-black font-playfair leading-tight" style={{background: 'linear-gradient(135deg, #f97316, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>ПёсПарк</h1>
              <p className="text-xs font-medium text-muted-foreground leading-tight">Рядом с тобой</p>
            </div>
          </div>
          <button className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-border flex items-center justify-center">
            <Icon name="SlidersHorizontal" size={18} className="text-foreground" />
          </button>
        </div>

        {/* Search */}
        <div className="relative mt-3">
          <Icon name="Search" size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Поиск площадки..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-border text-sm focus:outline-none focus:ring-2 focus:ring-neon-green/30 focus:border-neon-green transition-all"
          />
        </div>
      </div>

      {/* Map */}
      <div className="mx-5 rounded-3xl overflow-hidden relative shadow-lg animate-fade-in delay-100 opacity-0-start" style={{ height: '220px' }}>
        <img
          src="https://cdn.poehali.dev/projects/9bbef214-6211-4ea8-b61b-81dc6f25c80f/files/a1f7a421-1005-491e-a683-798fe7c47bc2.jpg"
          alt="Карта"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Map dots */}
        {parks.map(park => (
          <button
            key={park.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${park.x}%`, top: `${park.y}%` }}
          >
            <div className={`relative ${park.type === 'green' ? 'map-dot' : 'map-dot-orange'} animate-pulse-dot cursor-pointer`}>
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-xl px-2.5 py-1.5 shadow-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {park.name}
              <div className="flex items-center gap-1 mt-0.5">
                <span className="star-filled">★</span>
                <span className="text-muted-foreground">{park.rating}</span>
                <span className="text-muted-foreground">· {park.distance}</span>
              </div>
            </div>
          </button>
        ))}

        {/* My location */}
        <div className="absolute bottom-4 right-4">
          <button className="w-9 h-9 rounded-xl bg-white shadow-md flex items-center justify-center">
            <Icon name="Navigation" size={16} className="text-neon-green" />
          </button>
        </div>

        {/* Label */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5">
          <p className="text-xs font-bold text-foreground">{parks.length} площадок рядом</p>
        </div>
      </div>

      {/* Nearby parks list */}
      <div className="px-5 mt-5 flex-1 overflow-y-auto">
        <p className="text-sm font-bold text-foreground mb-3 animate-fade-in delay-200 opacity-0-start">Ближайшие</p>

        <div className="space-y-3">
          {nearbyList.map((park, i) => (
            <button
              key={park.id}
              className={`w-full card-glass rounded-3xl p-4 text-left transition-all hover:scale-[1.02] active:scale-[0.98] animate-fade-in opacity-0-start delay-${(i + 2) * 100}`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${park.open ? 'bg-gradient-primary' : 'bg-muted'}`}>
                  <span className="text-xl">🐕</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-foreground text-sm">{park.name}</p>
                    <div className="flex items-center gap-0.5">
                      <span className="star-filled text-xs">★</span>
                      <span className="text-xs font-semibold text-foreground">{park.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">{park.distance}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className={`text-xs font-semibold ${park.open ? 'text-neon-green' : 'text-destructive'}`}>
                      {park.open ? `Открыто · ${park.dogs} собак` : 'Закрыто'}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {park.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}