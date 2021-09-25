import React from 'react'

const DeliveryBox = (stata) => {
    return (
        <div className="delivery-stata__item">
            <b>{stata.data.bold}</b>
            <p> {stata.data.text}
            </p>
            <h5>
                {stata.data.deadline}
            </h5>
        </div>
    )
}

export default DeliveryBox
