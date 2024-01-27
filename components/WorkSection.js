"use client";

import style from "../styles/components/WorkSection.module.css";
import n_puzle_logo from "../public/n-puzle-sm.png";
import ps_logo from "../public/ps-logo-sm.png";
import brutto_logo from "../public/brutto-logo-sm.png";
import fary_tales_logo from "../public/fary-tales-sm.png";
import the_machine_landing_image from "../public/the-machine-landing.jpg";
import the_machine_android_image from "../public/the-machine-android.png";
import car_sold_web_image from "../public/car-sold-web.png";
import tm_tver_landing_page_image from "../public/tm-tver-landing.jpg";
import Link from "next/link";
import { AppleAppStore, GooglePlayStore } from "./StoreBrands";
import Image from "next/image";

function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.card__row}>
                <div className={style.card__block}>
                    <h3 className={style.card__header}>{props.project.name}</h3>
                    <p className={style.card__description}>{props.project.description}</p>
                    {props.project.app_store_link || props.project.g_play_link ? (
                        <div className={style.app_store__container}>
                            {!!props.project.app_store_link ? (
                                <AppleAppStore href={props.project.app_store_link} />
                            ) : null}
                            {!!props.project.g_play_link ? <GooglePlayStore href={props.project.g_play_link} /> : null}
                        </div>
                    ) : null}
                    {!!props.project.link ? (
                        <div className={style.app_store__container}>
                            <Link href={props.project.link}>
                                <p>View project →</p>
                            </Link>
                        </div>
                    ) : null}
                </div>

                <div className={style.card__image}>
                    <Image className={style.image} priority={true} src={props.project.image} alt="project logo" />
                </div>
            </div>
        </div>
    );
}

const project_data_model = [
    {
        name: "Transmission",
        description: "Landing page for a transport company.",

        image: tm_tver_landing_page_image,
        link: "https://tm-tver.freeman-dev.ru",
    },
    {
        name: "CarSold",
        description: "It's a web app for pawn car sales.",

        image: car_sold_web_image,
        link: "https://carsold.ru",
    },
    {
        name: "The Machine",
        description: "This is a mobile application for people involved in the purchase and further sale of cars.",

        image: the_machine_android_image,
        g_play_link: "https://play.google.com/store/apps/details?id=com.bazyl.carsdealer",
        app_store_link: "https://apps.apple.com/ru/app/the-machine-перепродажа-авто/id6444110847",
    },

    {
        name: "The Machine",
        description: 'Promo site for the mobile application "The Machine".',
        image: the_machine_landing_image,
        link: "http://the-machine.ru",
    },

    {
        name: "Fairy Tales",
        description: "A simple library of books at your fingertips.",
        image: fary_tales_logo,
    },
    {
        name: "15 Puzzle game",
        description: "It is the simple 15 Puzzle game. Order the tiles 1 to 15 by sliding them in the empty space.",
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

    /*   {
           name: "Bouy",
           description: "Desktop application for processing measurements of seas and oceans.",
           image: bouy_logo,
       },*/
];

export default function WorkSection() {
    return (
        <div id="section2" className={style.container}>
            <div className={style.container__item}>
                <div className={style.header}>My Recent Works</div>
            </div>
            {project_data_model.map((project, index) => {
                return (
                    <div key={`job-${index}`} className={style.container__item}>
                        <Card project={project} />
                    </div>
                );
            })}
        </div>
    );
}
