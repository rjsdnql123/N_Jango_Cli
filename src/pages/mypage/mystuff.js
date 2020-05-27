/* eslint-disable */
import React from "react";
import "./mystuff.css"

function Mystuff({ icon, stuffname, limitday, category_name }) {
    return (
        <div className="stuff-one">
            <img src={icon} className="stuff-image" />
            <div className="stuff-name">{stuffname}</div>
            <div className="stuff-category">{category_name}</div>
            <div className="stuff-limit">{limitday}</div>
        </div>
    )
}

export default Mystuff;