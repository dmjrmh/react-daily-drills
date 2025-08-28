import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Card title="Day 1 - JSX" description="Learning JSX & creating basic components."/>
        <Card title="Day 1 - Props" description="Passing data into components"/>
      </main>
      <Footer />
    </>
  )
}

export default App
