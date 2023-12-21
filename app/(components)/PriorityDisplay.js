import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="grid grid-flow-row text-sm">
      <div className="flex justify-start align-baseline">
        <FontAwesomeIcon
          icon={faCircle}
          className={`pr-1 ${
            priority > 0 ? "text-blue-accent" : "text-slate-400"
          }`}
        />
        <FontAwesomeIcon
          icon={faCircle}
          className={`pr-1 ${
            priority > 1 ? "text-blue-accent" : "text-slate-400"
          }`}
        />
        <FontAwesomeIcon
          icon={faCircle}
          className={`pr-1 ${
            priority > 2 ? "text-blue-accent" : "text-slate-400"
          }`}
        />
        <FontAwesomeIcon
          icon={faCircle}
          className={`pr-1 ${
            priority > 3 ? "text-blue-accent" : "text-slate-400"
          }`}
        />
        <FontAwesomeIcon
          icon={faCircle}
          className={`pr-1 ${
            priority > 4 ? "text-blue-accent" : "text-slate-400"
          }`}
        />
      </div>
    </div>
  );
};

export default PriorityDisplay;
