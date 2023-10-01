import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import Style from "../../styles/components/StoreBrands.module.css";
import Link from "next/link";

const StoreItem = ({ href, name, icon }) => {
    return (
        <Link href={href}>
            <div className={Style.store_wrapper}>
                <FontAwesomeIcon icon={icon} style={{ color: "#ffffff", width: 32, height: 32 }} />
                <p className={Style.label}>{name}</p>
            </div>
        </Link>
    );
};

export const GooglePlayStore = ({ href }) => {
    return <StoreItem href={href} icon={faGooglePlay} name={"Google play"} />;
};

export const AppleAppStore = ({ href }) => {
    return <StoreItem href={href} icon={faAppStoreIos} name={"App store"} />;
};

export default StoreItem;
