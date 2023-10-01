import Image from "next/image";
import style from "../styles/components/Footer.module.css";
import Button from "./Button";
import github_logo from "../public/GitHub-Mark-Light-32px.png";
import Link from "next/link";

const social_media_model = [
    {
        image: github_logo,
        name: "GitHub",
        link: "https://github.com/tubaluga",
    },
];

export default function Footer(props) {
    return (
        <div id={props.id} className={style.container}>
            <div>
                <Button href="mailto:tubaluga@gmail.com">Contact Me</Button>
            </div>
            <div className={style.social_logo_row}>
                {social_media_model.map((element, index) => {
                    return (
                        <Link key={`social-${index}`} target="_blank" href={element.link} rel="noreferrer">
                            <Image src={element.image} alt={element.name} className={style.social_logo_row__item} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
