import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import Style from "../../styles/components/StoreBrands.module.css";

const StoreItem = ({ href, name, icon }) => {
    return (
        <a href={href}>
            <div className={Style.store_wrapper}>
                <FontAwesomeIcon icon={icon} style={{ color: "#ffffff", width: 48, height: 48 }} />
                <p>{name}</p>
            </div>
        </a>
    );
};

export const GooglePlayStore = ({ href }) => {
    return <StoreItem href={href} icon={faGooglePlay} name={"Google play"} />;
};

export const AppleAppStore = ({ href }) => {
    return <StoreItem href={href} icon={faAppStoreIos} name={"App store"} />;
};

export default StoreItem;
