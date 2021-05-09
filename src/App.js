import './App.css'
import MemoPage from './memo/MemoPage'

function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">Memo App by React</h1>
      <div className="container mt-3">
        <h4 className="my-3">Memo.</h4>
        < MemoPage />
      </div>
    </div>
  )
}

export default App