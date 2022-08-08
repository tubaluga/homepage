import Style from "../../styles/components/Button.module.css";

export default function Button(props) {
    return (
        <a className={Style.button} href={props.href}>
            {props.children}
        </a>
    );
}
