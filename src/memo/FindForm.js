import React, { useState, useEffect, memo } from 'react'
import usePersist from '../Persist'

// ここはmemoを検索するためのコンポーネントじゃ

function FindForm() {
    // ここでは４つのstateを受け取る準備をしている
    const [memo, setMemo] = usePersist("memo", [])
    const [fmemo, setFMemo] = usePersist("findMemo", [])
    const [message, setMessage] = usePersist('')
    const [mode, setMode] = usePersist('mode', 'find')

    const doChange = (e) => {
        setMessage(e.target.value)
    }

    const doAction = (e) => {
        if (message == '') {
            // なにもメッセージが保存されていなかったら、modeをdefaultに戻す処理
            setMode('default')
            return
        }
        let res = memo.filter((item, key) => {
            // includesメソッドは、特定の要素が配列に含まれているかを探すメソッド
            // messageはdoChangeで受けとている。
            return item.message.includes(message)
        })
        setFMemo(res)
        setMode('検索中')
        setMessage('')
    }

    return (
        <form onSubmit={doAction} className="my-2">
            <div className="form-group row">
                <input type="text" onChange={doChange}
                    value={message} className="form-control-sm col bg-white"
                    placeholder="検索： キーワードを入力"
                />
                <input type="submit" value="さがす"
                    className="btn btn-primary btn-sm col-2"
                />
            </div>
        </form>
    )
}

export default FindForm