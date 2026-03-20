import { useState } from "react";
import Icon from "@/components/ui/icon";
import MapView from "@/components/MapView";
import CatalogView from "@/components/CatalogView";
import ProfileView from "@/components/ProfileView";
import CommunityView from "@/components/CommunityView";
import ReviewsView from "@/components/ReviewsView";
import SupportView from "@/components/SupportView";
import TrainerView from "@/components/TrainerView";

type Tab = "map" | "catalog" | "trainer" | "reviews" | "community" | "profile" | "support";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "map", label: "Карта", icon: "Map" },
  { id: "catalog", label: "Каталог", icon: "LayoutGrid" },
  { id: "trainer", label: "Кинолог", icon: "GraduationCap" },
  { id: "reviews", label: "Отзывы", icon: "Star" },
  { id: "community", label: "Клуб", icon: "Users" },
  { id: "profile", label: "Я", icon: "User" },
  { id: "support", label: "Помощь", icon: "LifeBuoy" },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState<Tab>("map");

  const renderContent = () => {
    switch (activeTab) {
      case "map": return <MapView />;
      case "catalog": return <CatalogView />;
      case "trainer": return <TrainerView />;
      case "reviews": return <ReviewsView />;
      case "community": return <CommunityView />;
      case "profile": return <ProfileView />;
      case "support": return <SupportView />;
    }
  };

  return (
    <div className="mobile-container bg-background">
      {/* Content */}
      <div className="h-full overflow-hidden">
        {renderContent()}
      </div>

      {/* Bottom tab bar */}
      <nav className="tab-bar">
        <div className="flex items-stretch px-1 py-2 gap-0.5">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            const isWarm = tab.id === "support";
            const isViolet = tab.id === "trainer";
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center justify-center py-2 rounded-2xl transition-all duration-200 gap-0.5 ${
                  isActive
                    ? isWarm
                      ? "bg-gradient-warm shadow-md scale-105"
                      : isViolet
                        ? "bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md scale-105"
                        : "bg-gradient-primary shadow-md scale-105"
                    : "hover:bg-accent"
                }`}
              >
                <Icon
                  name={tab.icon}
                  size={isActive ? 18 : 17}
                  className={isActive ? "text-white" : "text-muted-foreground"}
                />
                <span className={`text-[8px] font-bold leading-none ${isActive ? "text-white" : "text-muted-foreground"}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
