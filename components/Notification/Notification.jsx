import s from './Notification.module.css';
import {STATUS} from "@/constants";
import ReactDom from "react-dom";

const Notification = (props) => {
  const {title, message, status} = props;

  let statusClasses = '';

  if (status === STATUS.SUCCESS) {
    statusClasses = s.success;
  }

  if (status === STATUS.ERROR) {
    statusClasses = s.error;
  }

  const cssClasses = `${s.notification} ${statusClasses}`;

  return ReactDom.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')
  );
};

export default Notification;
