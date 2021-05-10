import React, { useState, useEffect, memo } from 'react'
import usePersist from '../Persist'
// ここは保存された値を削除するためのコンポーネントじゃ

function DelForm() {
    // 保存されたmemoの値を[]に書き換えることで削除している。
    const [memo, setMemo] = usePersist("memo", [])
    const [num, setNum] = useState(0)

    const doChange = (e) => {
        setNum(e.target.value)
    }

    const doAction = (e) => {
        // filterメソッド
        let res = memo.filter((item, key) => {
            // key以外を取り除いた配列が作られる
            return key != num
        })
        // 作成、編集された配列をsetMemoする
        setMemo(res)
        // 選択項目の番号を０に戻す
        setNum(0)
    }

    let items = memo.map((value, key) =>(
        <option key={key} value={key}>
            {value.message.substring(0,10)}
        </option>
    ))

    return (
        <form onSubmit={doAction} className="my-2">
            <div className="form-group row">
                <select onChange={doChange}
                    className="form-control-sm col bg-white"
                    // 選択欄の一番上が０になるように
                    defaultValue="-1"
                >
                    {items}
                </select>
                <input type="submit" value="削除"
                    className="btn btn-primary btn-sm col-2"
                />
            </div>
        </form>
    )
}

export default DelForm