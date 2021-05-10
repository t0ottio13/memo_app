import React, { useState, useEffect } from 'react'
import usePersist from '../Persist'

// ここはメモを追加するコンポーネントじゃ

function AddForm(props) {
    const [memo, setMemo] = usePersist("memo", [])
    const [url, setUrl] = usePersist('')
    const [message, setMessage] = useState('')

    // 記入すると呼び出される
    // メッセージをステートにセットしてる
    const doChange = (e) => {
        // targetはここではメモのテキスト内容
        setMessage(e.target.value)
    }
    const doChangeUrl = (e) => {
        // targetはここではメモのテキスト内容
        setUrl(e.target.value)
    }

    // 送信時に呼び出される
    const doAction = (e) => {
        const data = {
            url: url,
            message: message,
            created: new Date()
            // 配列に加えるものを定義
            // ここでは、メッセージと制作日
        }
        // メモに配列を加えている,
        // unshift は 配列に値を追加するJSメソッド
        memo.unshift(data)
        // メモステートを更新している
        setMemo(memo)
        // 送信後、メモ内のテキストを空にする
        setMessage('')
        setUrl('')
    }

    return (
        <form onSubmit={doAction} action="" className="mb-2 ">
            <div className="from-group row">
                <input type="text" className="form-control-sm col bg-white"
                    placeholder="タイトルをつける"
                    onChange={doChange} value={message} required
                />
                <input type="url" className="form-control-sm col bg-white"
                    placeholder="URLを記入"
                    onChange={doChangeUrl} value={url} required
                />
                <input type="submit" value="追加"
                    className="btn btn-primary btn-sm col-2 "
                />
            </div>
        </form>
    )
}

export default AddForm