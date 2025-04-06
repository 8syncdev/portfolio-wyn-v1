import { DivMotion, slideIn } from '@/components/motion'
import CardExperience from '@/components/shared/cards/card-experience'
import { experience } from '@/constants/content/experience'
import { cn } from '@/lib/utils'
import React from 'react'

const ShowProjectSection = () => {
    return (
        <section className={cn(
            'min-h-fit',
            'py-20'
        )} id='projects'>
            <h1 className='text-4xl font-bold md:hidden block'>Projects</h1>

            {experience.map((item, index) => (
                <DivMotion
                    variants={slideIn('right', index * 0.25)}
                    initial='hidden'
                    whileInView='show'
                    exit='exit'
                    key={index}
                >
                    <CardExperience key={index} {...item} />
                </DivMotion>
            ))}

        </section>)
}

export default ShowProjectSection