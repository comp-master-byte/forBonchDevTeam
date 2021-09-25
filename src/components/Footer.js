import React from 'react'
import { FooterElement } from './FooterElement'

import insta from '../icons/Insta.png'
import facebook from '../icons/facebook.png'
import twitter from '../icons/twitter.png'
import phone from '../icons/telephone-2.png'

const elements = [
    {   bold:'Компания', 
        text1: 'Корпоративные продажи',
        text2: 'Обратная связь',
        text3: 'Вакансии',
        text4: 'Новости',
        text5: 'Правила продаж',
        text6: 'Персональные данные',
        text7: 'Партнёрам',
    },
    {   bold:'Покупателям', 
        text1: 'Бонусная программа',
        text2: 'Подарочные карты',
        text3: 'Проверка оплаты счёта',
        text4: 'Кредиты',
        text5: 'Доставка',
        text6: 'Сервисные центры',
        text7: 'Статус оборудования СЦ',
    },
    {   bold:'Помощь', 
        text1: 'Как оформить заказ',
        text2: 'Способы оплаты',
        text3: 'Обмен, возврат, гарантия',
        text4: 'Информация для юр. лиц',
        text5: 'Статусы заказов',
    },
]

const Footer = () => {
    return (
        <>
            <div className="line">
                
            </div>
            <footer className="footer">
                <h1>DNS</h1>
                <div className="footer-grid">
                    {elements.map((stata, index) => {
                        return <FooterElement data={stata} key={index}/>
                    })}
                    <div className="footer-grid__item">
                        <b>Оставайтесь на связи</b>
                        <div className="footer-grid__item-local">
                            <img src={insta} alt="" />
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                        </div>

                        <div className="footer-grid__item-call">
                            <img src={phone} alt="" />
                            <p>8-800-77-07-999</p>
                            <p>(c 3:00 до 22:00)</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
