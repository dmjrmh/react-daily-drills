import '../App.css'
import Header from '../components/day-1/Header'
import Card from '../components/day-1/Card'
import Footer from '../components/day-1/Footer'

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
