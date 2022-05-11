import Image from "next/image";
import style from "../../styles/components/Footer.module.css";
import Button from "./Button";
import github_logo from "../../public/GitHub-Mark-Light-32px.png";

const social_media_model = [
    {
        image: github_logo,
        name: "GitHub",
        link: "https://github.com/tubaluga",
    },
];

export default (props) => {
    return (
        <div id={props.id} className={style.container}>
            <div>
                <Button href="mailto:tubaluga@gmail.com">Contact Me</Button>
            </div>
            <div className={style.social_logo_row}>
                {social_media_model.map((element, index) => {
                    return (
                        <a
                            key={`social-$index`}
                            target="_blank"
                            href={element.link}
                        >
                            <Image
                                src={element.image}
                                layout="fixed"
                                alt={element.name}
                                className={style.social_logo_row__item}
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
