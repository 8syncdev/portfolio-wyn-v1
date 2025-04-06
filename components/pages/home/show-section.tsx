import { cn } from '@/lib/utils'
import React from 'react'
import ShowAboutSection from './show-about-section'
import ShowExperienceSection from './show-experience-section'
import ShowProjectSection from './show-project-section'
import { SectionMotion, staggerContainer } from '@/components/motion'

export const ShowSection = () => {
    return (
        <SectionMotion
            variants={staggerContainer()}
            initial='hidden'
            whileInView={'show'}
            className={cn(
                'h-full py-20',
                'md:col-span-1 col-span-2',
                'relative',
                'z-10'
            )}>
            <ShowAboutSection />
            <ShowExperienceSection />
            <ShowProjectSection />
        </SectionMotion>
    )
}
