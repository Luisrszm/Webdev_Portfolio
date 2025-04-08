import Project from "../components/Project";

const projects = ['MagicE_Manager','Webdev_Portfolio', 'READMEGen', 'TeachersCheck']

export default function Portfolio() {
    return (
        <div className="centreo">
            <Project projects={projects} />
        </div>
    )
}