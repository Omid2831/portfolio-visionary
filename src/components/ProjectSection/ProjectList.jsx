import CardList from "./CardList";
import NavLinkMore from "./NavLinkMore";

const ProjectList = () => {
    return (
        <div
        className="border-2 px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 mx-auto my-16 max-w-7xl rounded-3xl border-indigo-500/30 bg-neutral-900/50 backdrop-blur-sm">
            <CardList />
            <NavLinkMore />
        </div>
    );
};

export default ProjectList;