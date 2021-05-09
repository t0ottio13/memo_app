import React, { useState, useEffect, memo } from 'react'
import usePersist from '../Persist'

function FindForm(props) {
    const [memo, setMemo] = usePersist("memo", [])
    const [fmemo, setFMemo] = usePersist("findMemo", [])
    const [message, setMessage] = usePersist('')
    const [mode, setMode] = usePersist('mode', 'find')

    const doChange = (e) => {
        setMessage(e.target.value)
    }

    const doAction = (e) => {
        if (message == '') {
            setMode('default')
            return
        }
        let res = memo.filter((item, key) => {
            return item.message.includes(message)
        })
        setFMemo(res)
        setMode('find')
        setMessage('')
    }

    return (
        <form onSubmit={doAction} className="my-2">
            <div className="form-group row">
                <input type="text" onChange={doChange}
                    value={message} className="form-control-sm col"
                    placeholder="メモの検索： キーワードを入力"
                />
                <input type="submit" value="Find"
                    className="btn btn-primary btn-sm col-2"
                />
            </div>
        </form>
    )
}

export default FindForm