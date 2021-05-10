import React, { useState } from 'react'
// ここではキーの名前を示す定数Keyの他に、valueとsetValueという二つの関数を用意している。


function usePersist(ky, initVal) {
    // keyにhooks:~となるよう値をセット。
    const key = "hooks:" + ky
    const value = () => {
        // try~catch文は試す処理を定義し、例外が怒った時の挙動を指定する
        try {
            // itemにローカルストレージのkeyに対応するデータを渡す。
            const item = window.localStorage.getItem(key)
            // ？はif文の短縮形 trueを返したら、その後の処理をする
            // ここでは、ローカルストレージにitemデータがあればJSON形式を元に戻して返す。
            return item ? JSON.parse(item) : initVal
        } catch (error) {
            console.log(error)
            return initVal;
        }
    }

    // 引数valの値をJSON形式のテキストに変換してローカルストレージに保管
    const setValue = (val) => {
        try {
            // setSavedValueは、この後のsavedValueステートに値を設定するためのもの。
            setSavedValue(val)
            window.localStorage.setItem(key, JSON.stringify(val))
        }catch (error) {
            console.log(error)
        }
    }

    // saveValueは保管する値を保持するためのステート
    // useState(value)では、valueを使って値が取り出されるようになっている。
    const [savedValue, setSavedValue] = useState(value)

    return [savedValue, setValue]
}

export default usePersist
