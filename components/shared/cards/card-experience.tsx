import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface CardExperienceProps {
    duration: string
    title: string
    company: string
    description: string
    technologies: string[]
    image: string
    imageAlt: string
    linkProject: string
}


const CardExperience = ({
    duration,
    title,
    company,
    description,
    technologies,
    image,
    imageAlt,
    linkProject,
}: CardExperienceProps) => {
    return (
        <>
            <Link href={linkProject} target='_blank'>
                <Card className={cn(
                    'flex',
                    'items-center',
                    'bg-transparent border-none p-5',
                    'text-slate-400 font-medium',
                    'transition-all duration-300 hover:bg-slate-400/5',
                    'group'
                )}>
                    <CardContent className='flex flex-col items-center justify-center gap-2'>
                        <Image
                            src={image}
                            alt={imageAlt}
                            width={100}
                            height={100}
                            className='w-full h-full object-cover rounded-md group-hover:scale-110 transition-all duration-300'
                        />
                        {duration}
                    </CardContent>
                    <CardContent className='space-y-4'>
                        <CardTitle className='text-slate-300 group-hover:text-primary flex items-center'>
                            {title}
                            <ExternalLinkIcon className='w-4 h-4 ml-2 text-slate-400 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                        </CardTitle>
                        <CardDescription className='text-slate-400'>{description}</CardDescription>
                        <div className='flex flex-wrap gap-2'>
                            {technologies.map((technology, index) => (
                                <Badge
                                    key={index}
                                    className='bg-primary/10 text-primary hover:bg-primary/40'>{technology}</Badge>
                            ))}
                        </div>
                    </CardContent>

                </Card>
            </Link>
        </>
    )
}

export default CardExperience