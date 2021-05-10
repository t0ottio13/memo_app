import React, { useState, useEffect } from 'react'

function Item(props) {
    const th = {
        padding: "0 0 0 5px"
    }

    const dateStyle = {
        padding: "0 0 0 5px",
        color:"grey"
    }

    const messageStyle = {
        padding: "2px 0 2px 5px",
        width:"100%"
    }
    let d = new Date(Date.parse(props.value.created))
    let f = d.getMonth() + '/' + d.getDate() + ' '
        + d.getHours() + ':' + d.getMinutes()

    return (
        <tbody className="border p-0">
            <tr className="border-0 ">
                <th className="text-primary bg-white border-0" style={th}>{props.index}.</th>
            </tr>
            <tr className="border-0">
                <td style={messageStyle} className=" bg-white border-0 "><a className="bg-light" href={props.value.url}>{props.value.message}</a></td>
            </tr>
            <tr className="border-0">
                <td className="bg-white border-0" style={dateStyle}>{f}</td>
            </tr>
        </tbody>
    )
}

export default Item

