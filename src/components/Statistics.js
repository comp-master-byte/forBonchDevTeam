import React from 'react'
import {motion} from 'framer-motion'

import statistics from '../images/statistics-ico.png'
import heart from '../images/heart-ico.png'
import bag from '../images/bag-ico.png'
import bell from '../images/bell-ico.png'

export const Statistics = () => {
    return (
        <motion.div 
            className="header-components"
            initial={{opacity: 0, x:-100}}
            animate={{opacity:1, x:0, transition: {duration: 1}}}
        >
            <div className="header-components-logo">DNS</div>
            <div className="header-components-statistics">
                <div className="header-components-statistics__comp">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input 
                        className="header-components-statistics__input" 
                        type="text"
                        placeholder="Поиск по сайту"
                    />
                </div>
                <ul className="header-components-statistics-list">
                    <li className="header-components-statistics-list__item">
                        <div className="data">
                            <img src={statistics} alt="" />
                            <p>Сравнить</p>
                        </div>
                    </li>
                    <li className="header-components-statistics-list__item">
                        <div className="data">
                            <img src={heart} alt="" />
                            <p>Избранное</p>
                        </div>
                    </li>
                    <li className="header-components-statistics-list__item">
                        <div className="data">
                            <img src={bag} alt="" />
                            <p>Корзина</p>
                        </div>
                    </li>
                    <li className="header-components-statistics-list__item">
                        <div className="data">
                            <img src={bell} alt="" />
                        </div>
                    </li>
                </ul>
                <motion.button 
                    className="btn btn-enter"
                    whileHover={{scale: 1.1, backgroundColor:'#fe7f2e', color: '#000'}}
                    whileTap={{scale: 0.95}}
                    transition={{duration: 0.3}}
                >Войти</motion.button>
        </div>
    </motion.div>
    )
}
