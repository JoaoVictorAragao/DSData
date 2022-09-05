import icon from '../../assets/img/notification-icon.svg';

import './style.css';

function NotificarionButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificarionButton;
