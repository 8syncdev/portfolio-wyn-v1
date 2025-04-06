import { DivMotion, slideIn, staggerContainer } from '@/components/motion'
import CardExperience from '@/components/shared/cards/card-experience'
import { experience } from '@/constants/content/experience'
import { cn } from '@/lib/utils'
import React from 'react'

const ShowExperienceSection = () => {
    return (
        <section className={cn(
            'min-h-fit',
            'py-20',
            'space-y-4'
        )} id='experience'>
            <h1 className='text-4xl font-bold md:hidden block'>
                Experience
            </h1>

            {experience.map((item, index) => (
                <DivMotion
                    variants={slideIn('right', index * 0.25)}
                    initial='hidden'
                    whileInView='show'
                    exit='exit'
                    key={index}>
                    <CardExperience {...item} />
                </DivMotion>
            ))}

        </section>
    )
}

export default ShowExperienceSection