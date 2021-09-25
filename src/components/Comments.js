import React from 'react'

import miniStar from '../icons/star-img-1.png'

export const Comments = (stata) => {
    return (
        <div className="Categories-page-flexible__item">
            <p>{stata.data.name}</p>
            <div className="Categories-page-flexible__item-local">
                <img src={miniStar} alt="" />
                <img src={miniStar} alt="" />
                <img src={miniStar} alt="" />
                <img src={miniStar} alt="" />
                <img src={miniStar} alt="" />
                <h5>{stata.data.comm}</h5>
            </div>
            <b>Комментариий:</b>
            <h3>  {stata.data.text}
            </h3>

            <label>{stata.data.date}</label>
        </div>
    )
}
