"use client"

import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion"

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

export const PageWrapper = ({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) => (
    <>
        <AnimatePresence>
            <motion.div

                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.5 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>
)

export const PageWrapperText = ({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) => (
    <>
        <AnimatePresence>
            <motion.div

                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ delay: 0.50 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>
)


export const PageWrapperNav = ({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) => (
    <>
        <AnimatePresence>
            <motion.div

                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.1 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>
)