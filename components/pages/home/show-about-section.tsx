import { DivMotion, slideIn } from '@/components/motion'
import { about } from '@/constants/content/about'
import { cn } from '@/lib/utils'
import React from 'react'

const ShowAboutSection = () => {
    return (
        <section className={cn(
            'min-h-fit',
            'py-20'
        )} id='about'>
            <DivMotion
                variants={slideIn('right', 0.25, 2)}
                initial='hidden'
                whileInView='show'
                exit='exit'
                className='space-y-4'>
                <h1 className='text-4xl font-bold md:hidden block'>{about.title}</h1>
                <p className='text-lg'>{about.description}</p>
            </DivMotion>

        </section>
    )
}

export default ShowAboutSection