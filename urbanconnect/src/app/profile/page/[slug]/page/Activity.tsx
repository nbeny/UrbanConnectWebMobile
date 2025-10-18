import { FiCheckCircle, FiAlertCircle, FiClock } from "react-icons/fi";

interface Activity {
  id: string;
  content: string;
  date: string;
  type: "success" | "warning" | "info";
}

const ActivityList = ({ activity }: { activity: Activity[] }) => {
  const getIcon = (type: Activity["type"]) => {
    switch (type) {
      case "success":
        return <FiCheckCircle className="text-green-400" />;
      case "warning":
        return <FiAlertCircle className="text-yellow-400" />;
      case "info":
      default:
        return <FiClock className="text-blue-400" />;
    }
  };

  return (
    <div className="flex flex-col gap-4 text-white bg-gray-900 p-4 rounded-xl shadow-lg">
      {activity.map((a) => (
        <div
          key={a.id}
          className="relative flex items-start gap-3 border-l-2 border-gray-700 pl-4 hover:border-purple-400 transition-colors duration-300"
        >
          {/* Icon flottante */}
          <div className="absolute -left-5 top-1.5 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full shadow-md">
            {getIcon(a.type)}
          </div>

          {/* Contenu */}
          <div className="flex flex-col">
            <p className="text-sm font-medium">{a.content}</p>
            <p className="text-xs text-gray-400 mt-1">{a.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;
