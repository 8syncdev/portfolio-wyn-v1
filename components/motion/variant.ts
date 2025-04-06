
export const slideIn = (direction: 'left' | 'right' | 'top' | 'bottom', delay: number = 0.25, duration: number = 1.2) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'top' ? '-100%' : direction === 'bottom' ? '100%' : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: duration,
            delay: delay,
        }
    },
    exit: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'top' ? '-100%' : direction === 'bottom' ? '100%' : 0,
        transition: {
            type: 'spring',
            duration: duration,
            delay: delay,
        },
        opacity: 0
    }
})


export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0.25) => ({
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: delayChildren,
            staggerChildren: staggerChildren,
        }
    }
})
