import { SocialLinksData } from '@/shared/data/social-links'
import React from 'react'
import { Button } from '../ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import '../../styles/social-links.css'



// Social Links Icon Components
const iconMap = {
  Github: <Github />,
  Linkedin: <Linkedin />,
  Mail: <Mail />
};


const SocialLinks = () => {
  
  // map icons to their respective social links
  const linksWithIcons = SocialLinksData.map(url => ({
    ...url,
    icon: iconMap[url.name]
  }));

  // check if the link is the mail link
  const checkMail = (sl) => sl.name === "Mail";

  return (
    <div className='flex flex-row justify-evenly gap-3 px-2 py-4'>
      {linksWithIcons.map((sl) => {
        const isMail = checkMail(sl);
        return (
          <Button key={sl.name}
          className={'link-social-links'}>
            <a
              href={isMail ? `mailto:${sl.url}` : sl.url}
              target={isMail ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={sl.name}
              className='text-2xl'
            >
              {sl.icon}
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialLinks;
