import Image from "next/image";
import logo from "../../public/developer-logo.png";
import style from "../../styles/components/MainSection.module.css";
import Button from "./Button";

export default (props) => {
    return (
        <div id={props.id} className={style.container}>
            <div className={style.block}>
                <div className={style.header}>
                    Hello! I’m Sergey, A Software Developer.
                </div>
                <Button href="mailto:tubaluga@gmail.com">Email Me</Button>
            </div>
            <Image src={logo} alt="logo" />
        </div>
    );
};
