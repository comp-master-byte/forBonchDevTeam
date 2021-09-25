import React from 'react'
import { motion } from 'framer-motion'

export const Data = (stata) => {
    return (
        <motion.div
            whileHover={{scale: 1.1, cursor: 'pointer'}}
            whileTap={{scale: 0.95}}
            transition={{duration: 0.3}}
        >
            <div className="Categories-page--shop-item">
                <img src={stata.data.img} alt="" />
                <b>{stata.data.bold}</b>
                <p>{stata.data.paragraph}</p>
            </div>
        </motion.div>
    )
}
