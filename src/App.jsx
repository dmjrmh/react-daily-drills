import './index.css'
import Day1View from './views/Day1View'
import Day2View from './views/Day2View'

function App() {

  const day = 2;
  return day === 1 ? <Day1View /> : <Day2View />;
}

export default App
