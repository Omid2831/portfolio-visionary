import React from 'react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import '../../../styles/card-portfolio.css'
const CardPortfolio = () => {
    return (
        <Card className="card-portfolio flex flex-col items-center p-6 w-64">
            <Avatar className="w-24 h-24 mb-4">
                <AvatarImage id="portfolio-image" src="profile-image.jpg" alt="Omid MHR" />
                <AvatarFallback>OM</AvatarFallback>
            </Avatar>
        </Card>
    )
}

export default CardPortfolio