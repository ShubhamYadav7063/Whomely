import { useState } from "react";

const Section = ({ title, description, isVisibile, setIsVisible }) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>

            {isVisibile ? (
                <button onClick={() => setIsVisible(false)}>hide</button>
            ) : (
                <button onClick={() => setIsVisible(true)}>Show</button>
            )}

            {isVisibile && <p>{description}</p>}
        </div>
    );
};

const Instamart = () => {
    // const [sectionConfig, setSectionConfig] = useState({
    // showAbout: false,
    // showTeam: false,
    // showCareers: false,
    // });

    const [visibleSection, setVisibleSection] = useState("about");
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section
                title={"About Instamart"}
                description={"This is the about section of Instamart"}
                isVisibile={visibleSection === "about"}
                setIsVisible={() => setVisibleSection("about")}
            />

            <Section
                title={"Team Instamart"}
                description={
                    "This is the team section of Instamart. This team has 50 members..."
                }
                isVisibile={visibleSection === "team"}
                setIsVisible={() => setVisibleSection("team")}
            />

            <Section
                title={"Careers Instamart"}
                description={
                    "This is the Careers section of Instamart. Currently no openings."
                }
                isVisibile={visibleSection === "careers"}
                setIsVisible={() => setVisibleSection("careers")}
            />
            {/* <AboutInstaMart />
            <DetailsofInstaMart />
            <TeamInstaMart /> */}
        </div>
    );
};

export default Instamart;
