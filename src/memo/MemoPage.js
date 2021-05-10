import usePersist from '../Persist'
import Memo from './Memo';
import AddForm from './AddForm';
import FindForm from './FindForm';
import DelForm from './DelForm';

function MemoPage() {
    const [mode, setMode] = usePersist('mode', 'default')

    return (
        <div className="memoPageBackground">
            <h5 className="my-3">{ mode }</h5>
            <div className="alert alert-info pb-0">
                {/* 追加フォームとボタン */}
                <AddForm />
                {/* 探すフォームとボタン */}
                <FindForm />
                {/* 削除フォームとボタン */}
                <DelForm/>
            </div>
            {/* 登録したメモが出てくるところ */}
            <Memo/>
        </div>
    )
}

export default MemoPage