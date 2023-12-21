const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "ferdig":
        color = "bg-green-500";
        return color;
      case "under arbeid":
        color = "bg-blue-accent";
        return color;
      case "ikke startet":
        color = "bg-gray-400";
        return color;
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-white ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
