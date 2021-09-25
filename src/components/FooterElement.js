import React from 'react'

export const FooterElement = (stata) => {
    return (
        <div className="footer-grid__item">
            <b> {stata.data.bold} </b>
            <ul>
                <li> <a href="">{stata.data.text1}</a></li>
                <li><a href="">{stata.data.text2}</a></li>
                <li><a href="">{stata.data.text3}</a></li>
                <li><a href="">{stata.data.text4}</a></li>
                <li> <a href="">{stata.data.text5}</a></li>
                <li><a href="">{stata.data.text6}</a></li>
                <li><a href="">{stata.data.text7}</a></li>
            </ul>
        </div>
    )
}
