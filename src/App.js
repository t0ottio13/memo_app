import './App.css'
import MemoPage from './memo/MemoPage'

function App() {
  return (
    <div>
      <h1 className="bg-info text-white display-4"> README.md用 Memo </h1>
      <div className="container mt-3">
        <h4 className="my-3"></h4>
        {/* メモのメイン全体画面を読み込んでいる */}
        < MemoPage />
      </div>
    </div>
  )
}

export default App