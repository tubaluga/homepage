import style from "../styles/components/Container.module.css";

export default function Container(props) {
    return (
        <div className={style.container}>
            <div className={style.container__block}>{props.children}</div>
        </div>
    );
}
