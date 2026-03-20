import { useState } from "react";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1, park: "Парк Победы", author: "Мария К.", avatar: "👩", rating: 5, time: "2 дня назад",
    text: "Отличная площадка! Очень чисто, есть разделение на зоны. Барсик в восторге, уже второй раз ходим.",
    likes: 14, helpful: true,
  },
  {
    id: 2, park: "Лесная поляна", author: "Антон Р.", avatar: "👨‍🦲", rating: 5, time: "4 дня назад",
    text: "Лучшая площадка в городе! Агилити-оборудование в идеальном состоянии. Приходим каждое утро.",
    likes: 31, helpful: false,
  },
  {
    id: 3, park: "Площадка у метро", author: "Света М.", avatar: "👩‍🦰", rating: 3, time: "1 нед. назад",
    text: "Неплохое место, но тесновато. Зато удобно добираться, рядом с метро. Для небольших прогулок подойдет.",
    likes: 7, helpful: false,
  },
  {
    id: 4, park: "Набережная", author: "Игорь Д.", avatar: "🧔", rating: 4, time: "2 нед. назад",
    text: "Красивое место, отличный вид на реку. Летом просто рай, зимой бывает ветрено. Снежок любит туда бегать!",
    likes: 22, helpful: true,
  },
];

const topParks = [
  { name: "Лесная поляна", rating: 4.9, count: 203 },
  { name: "Парк Победы", rating: 4.8, count: 128 },
  { name: "Набережная", rating: 4.6, count: 91 },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star} className={`text-sm ${star <= rating ? "star-filled" : "text-muted"}`}>★</span>
      ))}
    </div>
  );
}

export default function ReviewsView() {
  const [helpful, setHelpful] = useState<Set<number>>(new Set());

  const toggleHelpful = (id: number) => {
    setHelpful(prev => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  };

  return (
    <div className="flex flex-col h-full pb-24">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 animate-fade-in">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Мнения</p>
        <h1 className="text-2xl font-black font-golos text-foreground">Отзывы ⭐</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 space-y-4">
        {/* Top parks */}
        <div className="card-glass rounded-3xl p-4 animate-fade-in delay-100 opacity-0-start">
          <p className="font-bold text-sm text-foreground mb-3">🏆 Топ площадок</p>
          <div className="space-y-2">
            {topParks.map((park, i) => (
              <div key={park.name} className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-sm font-black text-white flex-shrink-0 ${
                  i === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                  i === 1 ? 'bg-gradient-to-br from-slate-400 to-slate-500' :
                  'bg-gradient-to-br from-amber-600 to-amber-700'
                }`}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{park.name}</p>
                  <p className="text-[10px] text-muted-foreground">{park.count} отзывов</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="star-filled text-sm">★</span>
                  <span className="font-black text-sm text-foreground">{park.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating bar */}
        <div className="card-glass rounded-3xl p-4 animate-fade-in delay-200 opacity-0-start">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-5xl font-black text-gradient-green">4.7</p>
              <StarRating rating={5} />
              <p className="text-[10px] text-muted-foreground mt-1">518 отзывов</p>
            </div>
            <div className="flex-1 space-y-1.5">
              {[5, 4, 3, 2, 1].map(star => {
                const pct = star === 5 ? 62 : star === 4 ? 24 : star === 3 ? 9 : star === 2 ? 3 : 2;
                return (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground w-2">{star}</span>
                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-primary rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-[10px] text-muted-foreground w-6">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Write review */}
        <button className="w-full bg-gradient-primary rounded-3xl py-4 flex items-center justify-center gap-2 text-white font-bold text-sm animate-fade-in delay-300 opacity-0-start">
          <Icon name="PenLine" size={16} />
          Написать отзыв
        </button>

        {/* Reviews list */}
        {reviews.map((review, i) => (
          <div key={review.id} className={`card-glass rounded-3xl p-4 animate-fade-in opacity-0-start delay-${(i + 3) * 100}`}>
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-200 to-teal-300 flex items-center justify-center text-xl flex-shrink-0">
                {review.avatar}
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm text-foreground">{review.author}</p>
                <div className="flex items-center gap-2">
                  <StarRating rating={review.rating} />
                  <span className="text-[10px] text-muted-foreground">{review.time}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mb-2">
              <Icon name="MapPin" size={11} className="text-primary" />
              <p className="text-[11px] font-semibold text-primary">{review.park}</p>
            </div>

            <p className="text-sm text-foreground leading-relaxed">{review.text}</p>

            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border">
              <button
                onClick={() => toggleHelpful(review.id)}
                className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${helpful.has(review.id) ? "text-primary" : "text-muted-foreground"}`}
              >
                <Icon name="ThumbsUp" size={14} />
                Полезно ({helpful.has(review.id) ? review.likes + 1 : review.likes})
              </button>
              <button className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground ml-auto">
                <Icon name="MessageCircle" size={14} />
                Ответить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
