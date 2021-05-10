import './App.css'
import MemoPage from './memo/MemoPage'

function App() {
  return (
    <div>
      <h1 className="bg-info text-white display-4 p-3 m-1 rounded"> URL Memo </h1>
      <div className="container mt-3">
        <h4 className="my-3"></h4>
        {/* メモのメイン全体画面を読み込んでいる */}
        < MemoPage />
      </div>
    </div>
  )
}

export default App