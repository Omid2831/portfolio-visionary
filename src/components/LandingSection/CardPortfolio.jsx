import React from 'react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import '../../styles/card-portfolio.css'
import SocialLinks from './SocialLinks'


const CardPortfolio = () => {
    return (
        <section className='card-portfolio-section'>
            <header className='card-portfolio-header'>
                <h2 className='head-line'>Hello, I'm Omid Mehrabi</h2>
                <p className='sup-head-line'>Frontend Engineer</p>
            </header>
            <Card className="card-portfolio">
                <Avatar className="card-portfolio-avatar">
                    <AvatarImage id="portfolio-image" src="profile-image.jpg" alt="Omid MHR" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
            </Card>
            <SocialLinks />
        </section>
    )
}

export default CardPortfolio