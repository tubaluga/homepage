import Image from "next/image";
import logo from "../public/developer-logo.png";
import style from "../styles/components/MainSection.module.css";
import Button from "./Button";

export default function MainSection(props) {
    return (
        <div id={props.id} className={style.container}>
            <div className={style.block}>
                <div className={style.header}>Hello! I’m Sergey, A Software Developer.</div>
                <div className={style.email_button}>
                    <Button href="mailto:tubaluga@gmail.com">Email Me</Button>
                </div>
            </div>

            <Image sizes={"100vw"} className={style.image} src={logo} alt="logo" priority={true} />
        </div>
    );
}
