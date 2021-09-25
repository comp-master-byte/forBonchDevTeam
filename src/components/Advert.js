import React from 'react'
import { motion } from 'framer-motion'

export const Advert = (stata) => {
    return (
        <motion.div
            drag={true}
            dragConstraints={{left:0, right:0, top: 0, bottom:0}}
            className="hit-advert__item">
            <h3>{stata.data.title}</h3>
            <p>{stata.data.text}</p>
            <div className="hit-advert__item-link">
                <a href="">{stata.data.href1}</a><a href="">{stata.data.href2}</a>
            </div>
        </motion.div>
    )
}
