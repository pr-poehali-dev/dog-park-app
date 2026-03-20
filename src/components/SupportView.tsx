import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  { q: "Как добавить новую площадку?", a: "Откройте карту, нажмите кнопку «+» и укажите местоположение. Наш модератор проверит заявку в течение 24 часов." },
  { q: "Как изменить информацию о питомце?", a: "Перейдите в раздел «Профиль», нажмите на карточку питомца и выберите «Редактировать»." },
  { q: "Как оставить отзыв о площадке?", a: "Зайдите в каталог или раздел «Отзывы», выберите площадку и нажмите «Написать отзыв»." },
  { q: "Можно ли отметить площадку как временно закрытую?", a: "Да, в карточке площадки есть кнопка «Сообщить о проблеме». Укажите причину и срок закрытия." },
];

const contacts = [
  { label: "Telegram", icon: "Send", desc: "@pespark_support", color: "from-blue-400 to-cyan-500" },
  { label: "Email", icon: "Mail", desc: "help@pespark.ru", color: "from-purple-400 to-violet-500" },
  { label: "ВКонтакте", icon: "Users", desc: "vk.com/pespark", color: "from-blue-500 to-blue-600" },
];

export default function SupportView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col h-full pb-24">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 animate-fade-in">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Помощь</p>
        <h1 className="text-2xl font-black font-playfair text-foreground">Поддержка 💬</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 space-y-4">
        {/* Hero card */}
        <div className="bg-gradient-primary rounded-3xl p-5 relative overflow-hidden animate-fade-in delay-100 opacity-0-start">
          <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/10" />
          <div className="relative">
            <p className="text-3xl mb-2">🐾</p>
            <p className="text-white font-black text-xl font-playfair">Мы рядом!</p>
            <p className="text-white/80 text-sm mt-1">Среднее время ответа — 15 минут</p>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-2 h-2 rounded-full bg-neon-lime animate-pulse-dot" />
              <p className="text-white/90 text-xs font-semibold">Поддержка онлайн</p>
            </div>
          </div>
        </div>

        {/* Send message */}
        <div className="card-glass rounded-3xl p-4 animate-fade-in delay-200 opacity-0-start">
          <p className="font-bold text-sm text-foreground mb-3">✍️ Написать в поддержку</p>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Опишите вашу проблему или задайте вопрос..."
            className="w-full rounded-2xl border border-border bg-muted/50 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            rows={3}
          />
          <button className="w-full mt-3 bg-gradient-primary rounded-2xl py-3 text-white font-bold text-sm flex items-center justify-center gap-2">
            <Icon name="Send" size={15} />
            Отправить сообщение
          </button>
        </div>

        {/* Contacts */}
        <div className="card-glass rounded-3xl p-4 animate-fade-in delay-300 opacity-0-start">
          <p className="font-bold text-sm text-foreground mb-3">📲 Связаться с нами</p>
          <div className="space-y-2">
            {contacts.map(c => (
              <button key={c.label} className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-accent transition-colors">
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={c.icon} fallback="MessageCircle" size={17} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm text-foreground">{c.label}</p>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
                <Icon name="ChevronRight" size={16} className="text-muted-foreground ml-auto" />
              </button>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="card-glass rounded-3xl p-4 animate-fade-in delay-400 opacity-0-start">
          <p className="font-bold text-sm text-foreground mb-3">❓ Частые вопросы</p>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-3.5 text-left bg-white hover:bg-accent/50 transition-colors"
                >
                  <p className="text-sm font-semibold text-foreground pr-2">{faq.q}</p>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={16}
                    className="text-muted-foreground flex-shrink-0"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-3.5 pb-3.5 bg-accent/30 animate-fade-in">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* App version */}
        <div className="text-center pb-2">
          <p className="text-xs text-muted-foreground">ПёсПарк v1.0.0 · Сделано с ❤️</p>
        </div>
      </div>
    </div>
  );
}