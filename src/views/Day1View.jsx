import '../App.css'
import Header from '../components/day-1-intro-jsx/Header'
import Card from '../components/day-1-intro-jsx/Card'
import Footer from '../components/day-1-intro-jsx/Footer'

function Day1View() {

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

export default Day1View
