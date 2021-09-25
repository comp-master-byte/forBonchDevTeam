import React from 'react'
import { motion } from 'framer-motion'

export const Boxtech = (arg) => {
    console.log(arg)
    return (
        <>
            <motion.div 
                className="categories-box__item"
                whileHover={{scale: 1.1, backgroundColor: '#1b1b1b', cursor:'pointer'}}
                whileTap={{scale: 0.95}}
                transition={{duration: 0.3}}
                >   
                <img src={arg.data.img} alt="" />
                <p>{arg.data.text}</p>
            </motion.div>
        </>
    )
}
