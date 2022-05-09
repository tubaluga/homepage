import Image from "next/image";
import style from "../../styles/components/WorkSection.module.css";
import project_logo from "../../public/project-template.png";
import n_puzle_logo from "../../public/n-puzle.png";
import ps_logo from "../../public/ps-logo.png";
import bouy_logo from "../../public/bouy-screen.png";
import brutto_logo from "../../public/brutto-logo.png";

function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.card__row}>
                <div className={style.card__block}>
                    <h3 className={style.card__header}>{props.project.name}</h3>
                    <p className={style.card__description}>
                        {props.project.description}
                    </p>
                    {!!props.project.g_play_link ? (
                        <div className={style.appstore_wrapper}>
                            <a href={props.project.g_play_link}>
                                <img
                                    className={style.gplay_logo}
                                    alt="Get it on Google Play"
                                    src="/google-play-badge.png"
                                    /*                                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"*/
                                />
                            </a>
                        </div>
                    ) : null}
                </div>
                <div className={style.card__image}>
                    <Image src={props.project.image} alt="project logo" />
                </div>
            </div>
        </div>
    );
}

const project_data_model = [
    {
        name: "Fairy Tales",
        description: "A simple library of books at your fingertips.",
        image: project_logo,
    },
    {
        name: "15 Puzzle game",
        description:
            "It is the simple 15 Puzzle game. Order the tiles 1 to 15 by sliding them in the empty space.",
        image: n_puzle_logo,
        g_play_link:
            "https://play.google.com/store/apps/details?id=com.horizon.games.npuzzle&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
    },
    {
        name: "Proximity sensor",
        description: "A quick way to check the proximity sensor.",
        image: ps_logo,
        g_play_link:
            "https://play.google.com/store/apps/details?id=com.bzart.proximitysensor&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
    },
    {
        name: "Brutto",
        description: "Qt-based application for weighing station automation.",
        image: brutto_logo,
    },

    {
        name: "Bouy",
        description:
            "Desktop application for processing measurements of seas and oceans.",
        image: bouy_logo,
    },
];

export default () => {
    return (
        <div id="section2" className={style.container}>
            <div className={style.container__item}>
                <div className={style.header}>My Recent Works</div>
            </div>
            {project_data_model.map((project) => {
                return (
                    <div className={style.container__item}>
                        <Card project={project} />
                    </div>
                );
            })}
        </div>
    );
};
