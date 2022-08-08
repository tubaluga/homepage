import styles from "../../styles/components/Header.module.css";

const header_menu_items = [
    {
        name: "Home",
        link: "#section1",
    },
    {
        name: "Work",
        link: "#section2",
    },
    {
        name: "About",
        link: "#section3",
    },
];

export default function Header() {
    return (
        <div className={styles.header}>
            {header_menu_items.map((item, index) => {
                return (
                    <a
                        key={`menu-$index`}
                        className={styles.header__item}
                        href={item.link}
                    >
                        {item.name}
                    </a>
                );
            })}
        </div>
    );
}
