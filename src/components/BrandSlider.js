import React from 'react'
import { motion } from 'framer-motion'

import statistics from '../images/statistics-ico.png'
import heart from '../images/heart-ico.png'

export const BrandSlider = (info) => {
    return (
        <motion.div  
            whileHover={{scale: 1.05, backgroundColor: '#1b1b1b', cursor: 'pointer'}}
            transition={{duration: 0.3}}
            className="brand-flex-box">
            <div className="brand-flex-box__image">
                <img src={info.data.img} alt="" />
            </div>
            <div className="brand-flex-box__description">
                <p>{info.data.text}</p>
                <h4>{info.data.price}</h4>
                <div className="brand-flex-box__description--local">
                    <div className="brand-flex-box__description--local__item">
                        <img src={statistics}/><img src={heart}/>
                    </div>
                        <motion.button 
                        className="btn btn-enter"
                        whileHover={{scale: 1.1, backgroundColor:'#fe7f2e', color: '#000'}}
                        whileTap={{scale: 0.95}}
                        transition={{duration: 0.3}}
                        >В корзину
                    </motion.button>
                </div>
            </div>
        </motion.div>
    )
}
