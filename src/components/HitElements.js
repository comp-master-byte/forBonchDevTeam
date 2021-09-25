import React from 'react'
import { motion } from 'framer-motion'

import Slider from 'react-slick'

import statistics from '../images/statistics-ico.png'
import heart from '../images/heart-ico.png'

export const HitElements = (arg) => {
    return (
            <motion.div 
            whileHover={{scale: 1.05, backgroundColor: '#1b1b1b', cursor: 'pointer'}}
            transition={{duration: 0.3}}
                className="hit--box">
                <div className="hit--box_image">
                    <img src={arg.data.img} alt="" />
                </div>
                <div className="hit--box_desc">
                    <p>{arg.data.text}</p>
                    <h4>{arg.data.price}</h4>
                    <div className="hit--box_desc-local">
                        <div className="hit--box_desc-local__item">
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
