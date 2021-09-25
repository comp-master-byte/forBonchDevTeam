import React from 'react'
import location from '../images/location-image-1.png'
import phone from '../images/telephone-image-2.png'
import { Statistics } from './Statistics'
import {motion} from 'framer-motion'

import {Link} from 'react-router-dom'

export const Navigation = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <motion.ul 
                    className="header-nav-list"
                    initial={{opacity: 0, x:-100}}
                    animate={{opacity:1, x:0, transition: {duration: 1}}} 
                >
                    <li className="header-nav-list__item">
                        <a className="loc-link" href="https://www.google.com/search?sxsrf=AOaemvKLvqsmOhQUDcKYsNFfMWt1Q4uA5A:1631640469756&q=%D0%BA%D0%B0%D1%80%D1%82%D0%B0+dns+%D1%81%D0%B0%D0%BD%D0%BA%D1%82+%D0%BF%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3&npsic=0&rflfq=1&rldoc=1&rllag=59918194,30375461,6599&tbm=lcl&sxsrf=AOaemvKLvqsmOhQUDcKYsNFfMWt1Q4uA5A:1631640469756&sa=X&ved=2ahUKEwjE5ua0_v7yAhXP66QKHT7oCQcQtgN6BAgJEAM#rlfi=hd:;si:;mv:[[60.08216489999999,30.523419599999997],[59.8131864,30.1878004]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:4"><img src={location} alt="" /></a>
                        <Link to="/">Санкт-Петербург</Link>
                    </li>
                    <li className="header-nav-list__item"><Link to="/categories">Категории</Link></li>
                    <li className="header-nav-list__item"><Link to="/hits">Хиты продаж</Link></li>
                    <li className="header-nav-list__item"><Link to="/news">Новинки и Брэнды</Link></li>
                    <li className="header-nav-list__item"><Link to="/delivery">Доставка</Link></li>
                </motion.ul>

                <motion.div 
                    className="header-nav-contacts"
                    initial={{opacity: 0, x:100}}
                    animate={{opacity:1, x:0, transition: {duration: 1}}}
                >
                    <img src={phone} alt="" />
                    <p>8-800-77-07-999 (c 3:00 до 22:00)</p>
                </motion.div>
            </nav>

            <Statistics/>
        </header>
    )
}
