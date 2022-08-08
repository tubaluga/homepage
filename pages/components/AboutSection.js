import style from "../../styles/components/AboutSection.module.css";

export default function AboutSection(props) {
    return (
        <div id={props.id} className={style.container}>
            <div className={style.header}>A Little Bit About Me</div>
            <p className={style.about}>
                Hi! I’m Sergey Bazylev, and I’m a developer who has passion for
                building clean applications with intuitive functionality. I
                enjoy the process of turning ideas into reality using creative
                solutions. I’m always curious about learning new skills, tools,
                and concepts. In addition to working on various solo full stack
                projects, I have worked with creative teams, which involves
                daily stand-ups and communications, source control, and project
                management.
            </p>
        </div>
    );
}
