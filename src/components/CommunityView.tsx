import { useState } from "react";
import Icon from "@/components/ui/icon";

const photos = [
  { id: 1, emoji: "🐕", bg: "from-amber-300 to-orange-400", author: "Маша", likes: 34, location: "Парк Победы" },
  { id: 2, emoji: "🐩", bg: "from-pink-300 to-rose-400", author: "Дима", likes: 21, location: "Лесная поляна" },
  { id: 3, emoji: "🐺", bg: "from-blue-300 to-indigo-400", author: "Катя", likes: 57, location: "Набережная" },
  { id: 4, emoji: "🦮", bg: "from-green-300 to-emerald-400", author: "Слава", likes: 18, location: "Сквер Дружбы" },
  { id: 5, emoji: "🐶", bg: "from-yellow-300 to-amber-400", author: "Лена", likes: 42, location: "Парк Победы" },
  { id: 6, emoji: "🐕‍🦺", bg: "from-purple-300 to-violet-400", author: "Олег", likes: 29, location: "Площадка у метро" },
];

const posts = [
  {
    id: 1, author: "Маша К.", avatar: "👩", time: "2 ч назад",
    text: "Сегодня в Парке Победы было столько собак! Барсик познакомился с новыми друзьями 🐾",
    likes: 12, comments: 4, location: "Парк Победы",
  },
  {
    id: 2, author: "Дима Р.", avatar: "👨", time: "5 ч назад",
    text: "Лесная поляна после дождя — просто сказка! Рекомендую утренние прогулки, практически нет людей",
    likes: 28, comments: 11, location: "Лесная поляна",
  },
  {
    id: 3, author: "Катя С.", avatar: "👩‍🦱", time: "Вчера",
    text: "Обнаружила новую площадку на набережной. Там появились новые снаряды для агилити! 🎉",
    likes: 45, comments: 18, location: "Набережная",
  },
];

export default function CommunityView() {
  const [tab, setTab] = useState<"feed" | "gallery">("feed");
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const toggleLike = (id: number) => {
    setLiked(prev => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  };

  return (
    <div className="flex flex-col h-full pb-24">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 animate-fade-in">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Сообщество</p>
        <h1 className="text-2xl font-black font-playfair text-foreground">Собаководы 🐶</h1>

        {/* Tabs */}
        <div className="flex gap-2 p-1 bg-muted rounded-2xl mt-3">
          <button
            onClick={() => setTab("feed")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === "feed" ? "bg-white shadow-sm text-foreground" : "text-muted-foreground"}`}
          >
            📝 Лента
          </button>
          <button
            onClick={() => setTab("gallery")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === "gallery" ? "bg-white shadow-sm text-foreground" : "text-muted-foreground"}`}
          >
            🖼️ Галерея
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5">
        {tab === "feed" && (
          <div className="space-y-4 animate-fade-in">
            {/* Post composer */}
            <div className="card-glass rounded-3xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-primary flex items-center justify-center text-xl">
                  👤
                </div>
                <div className="flex-1 bg-muted rounded-2xl px-4 py-2.5 text-sm text-muted-foreground">
                  Поделитесь впечатлениями...
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent text-accent-foreground text-xs font-semibold">
                  <Icon name="Camera" size={12} />
                  Фото
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent text-accent-foreground text-xs font-semibold">
                  <Icon name="MapPin" size={12} />
                  Место
                </button>
              </div>
            </div>

            {/* Posts */}
            {posts.map((post, i) => (
              <div key={post.id} className={`card-glass rounded-3xl p-4 animate-fade-in opacity-0-start delay-${(i + 1) * 100}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-300 to-teal-400 flex items-center justify-center text-xl">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-foreground">{post.author}</p>
                    <div className="flex items-center gap-1.5">
                      <Icon name="MapPin" size={10} className="text-primary" />
                      <p className="text-[10px] text-muted-foreground">{post.location} · {post.time}</p>
                    </div>
                  </div>
                  <button>
                    <Icon name="MoreHorizontal" size={16} className="text-muted-foreground" />
                  </button>
                </div>

                <p className="text-sm text-foreground leading-relaxed">{post.text}</p>

                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Icon
                      name="Heart"
                      size={16}
                      className={liked.has(post.id) ? "text-rose-500 fill-rose-500" : "text-muted-foreground"}
                    />
                    <span className={liked.has(post.id) ? "text-rose-500" : "text-muted-foreground"}>
                      {liked.has(post.id) ? post.likes + 1 : post.likes}
                    </span>
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <Icon name="MessageCircle" size={16} />
                    {post.comments}
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground ml-auto">
                    <Icon name="Share2" size={16} />
                    Поделиться
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "gallery" && (
          <div className="animate-fade-in">
            <p className="text-sm text-muted-foreground mb-3">Фото питомцев и площадок</p>
            <div className="grid grid-cols-3 gap-2">
              {photos.map((photo, i) => (
                <button
                  key={photo.id}
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${photo.bg} flex flex-col items-center justify-center relative overflow-hidden animate-scale-in opacity-0-start delay-${i * 100} group`}
                >
                  <span className="text-4xl animate-float">{photo.emoji}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-2xl" />
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/50 rounded-lg px-1.5 py-0.5 flex items-center justify-between">
                      <p className="text-white text-[9px] font-medium truncate">{photo.author}</p>
                      <div className="flex items-center gap-0.5">
                        <Icon name="Heart" size={8} className="text-rose-400" />
                        <span className="text-white text-[9px]">{photo.likes}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button className="w-full mt-4 rounded-3xl border-2 border-dashed border-border py-4 flex items-center justify-center gap-2 text-muted-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-colors">
              <Icon name="Upload" size={18} />
              Добавить фото
            </button>
          </div>
        )}
      </div>
    </div>
  );
}