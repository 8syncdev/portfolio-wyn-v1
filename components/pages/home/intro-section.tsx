import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'
import { MY_INFO } from '@/constants'
import { DivMotion, H1Motion, H3Motion, PMotion, SectionMotion, slideIn, staggerContainer } from '@/components/motion'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'

const SocialLink = ({
    href,
    icon: Icon,
    label,
    isHover,
    setIsHover
}: {
    href: string,
    icon?: any,
    label: string,
    isHover: string,
    setIsHover: (value: string) => void
}) => {
    return (
        <Link
            href={href}
            className='group transition-all duration-300 flex items-center gap-2'
            onClick={() => setIsHover(label)}
        >
            <Separator
                className={cn(
                    'w-10 bg-slate-400 group-hover:w-20 group-hover:bg-slate-200 transition-all duration-300',
                    isHover === label ? 'w-20 bg-slate-200' : 'w-10 bg-slate-400'
                )}
            />
            <span
                className={cn(
                    'group-hover:text-slate-200 transition-all duration-300',
                    isHover === label ? 'text-slate-200' : 'text-slate-400'
                )}
            >
                {label.charAt(0).toUpperCase() + label.slice(1)}
            </span>
        </Link>
    )
}




export const IntroSection = () => {
    const [isHover, setIsHover] = useState("about")
    return (
        <>
            <div className={cn(
                'fake-block',
                'md:col-span-1 col-span-2',
            )}>

            </div>
            <SectionMotion
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                exit='exit'
                className={cn(
                    'md:text-start text-center',
                    'py-20',
                    'space-y-10',
                    'h-fit',
                    'md:fixed relative top-0 left-0',
                    'w-full',
                    'md:col-span-1 col-span-2'
                )}
            >

                <div className='container mx-auto max-w-screen-2xl grid grid-cols-2'>
                    <div className='md:col-span-1 col-span-2 space-y-4'>
                        <div className='space-y-4'>
                            <H1Motion
                                variants={slideIn('bottom')}
                                initial='hidden'
                                whileInView='show'
                                exit='exit'
                            >Trang Cá Nhân</H1Motion>
                            <H3Motion
                                variants={slideIn('bottom')}
                                initial='hidden'
                                whileInView='show'
                                exit='exit'
                            >Frontend Developer</H3Motion>
                            <PMotion
                                variants={slideIn('bottom')}
                                initial='hidden'
                                whileInView='show'
                                exit='exit'
                            >Tôi là một Frontend Developer, tôi yêu thích công việc của mình và tôi luôn cố gắng học hỏi và nâng cao kỹ năng của mình.</PMotion>
                        </div>

                        <nav className='md:flex flex-col gap-2 hidden space-y-4 py-20'>
                            <SocialLink
                                href="#about"
                                label="about"
                                isHover={isHover}
                                setIsHover={setIsHover}
                            />
                            <SocialLink
                                href="#experience"
                                label="experience"
                                isHover={isHover}
                                setIsHover={setIsHover}
                            />
                            <SocialLink
                                href="#projects"
                                label="projects"
                                isHover={isHover}
                                setIsHover={setIsHover}
                            />
                        </nav>

                        <SectionMotion
                            variants={slideIn('bottom')}
                            initial='hidden'
                            whileInView='show'
                            exit='exit'
                            className='flex items-center gap-2 md:justify-start justify-center'
                        >
                            <Link href={MY_INFO.social.github} target='_blank'>
                                <GithubIcon className='w-6 h-6' />
                            </Link>
                            <Link href={MY_INFO.social.linkedin} target='_blank'>
                                <LinkedinIcon className='w-6 h-6' />
                            </Link>
                            <Link href={MY_INFO.social.twitter} target='_blank'>
                                <TwitterIcon className='w-6 h-6' />
                            </Link>
                            <Link href={MY_INFO.social.facebook} target='_blank'>
                                <FacebookIcon className='w-6 h-6' />
                            </Link>
                            <Link href={MY_INFO.social.instagram} target='_blank'>
                                <InstagramIcon className='w-6 h-6' />
                            </Link>
                            <Link href={MY_INFO.social.youtube} target='_blank'>
                                <YoutubeIcon className='w-6 h-6' />
                            </Link>
                        </SectionMotion>
                    </div>
                </div>
            </SectionMotion >
        </>
    )
}
