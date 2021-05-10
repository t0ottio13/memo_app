import React, { useState, useEffect } from 'react'
import usePersist from '../Persist'
import Item from './Item'

// やってることはデータをテーブルに書き出している。

function Memo() {
    // memoというステートにkey:memoと初期値を渡している。
    const [memo, setMemo] = usePersist("memo", [])
    const [fmemo, setFMemo] = usePersist("findMemo", [])
    const [mode, setMode] = usePersist("mode", 'default')

    let data = []

    // switchをしているのは、追加や検索、それぞれのモードに応じてメモを表示させるため。
    switch (mode) {
        // 追加と削除の時は'default'モード
        case 'default':
            // mapメソッドを使って、配列から要素を取り出して、ステートに渡している。
            data = memo.map((value, key)=>(
                <Item key={value.message} value={value} index={key + 1} />
            ))
            // deafult => defaultにすると無限ループ発生
            setMode('')
            break

        // 検索の時は、'find'モード
        case '検索中':
            data = fmemo.map((value, key) => (
                // Itemにステートを渡している。
                <Item key={value.message} value={value} index={key + 1}/>
            ))
            break

        default:
            data = memo.map((value, key) => (
                <Item key={value.message} value={value} index={key + 1}/>
            ))
    }

    return (
        <table className="table mt-4">
            <tbody>{ data }</tbody>
        </table>
    )
}

export default Memo

