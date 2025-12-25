import { Github } from "lucide-react"

const NavLinkMore = () => {
    return (
        <nav className="w-full flex justify-center py-12">
            <a
                href="https://github.com/omid2831"
                target="_blank"
                rel="noopener noreferrer"
                className="
          inline-flex items-center gap-3
          text-sm font-medium text-neutral-400
          transition-colors duration-200
          hover:text-white
        "
            >
                <Github />

                <span>More projects on GitHub</span>

                <span className="text-neutral-600">→</span>
            </a>
        </nav>
    );
};

export default NavLinkMore;
