import Greeting from "../components/day-2-props/Greeting";
import Card from "../components/day-2-props/Card";

export default function Day2View() {
  return (
    <main className="p-6 space-y-6">
      <Greeting name="Georgesky"/>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="React Props" description="Making components reusable" image="https://reactjs.org/logo-og.png" />
        <Card title="Components Design" description="Seperate concerns and reuse" image="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </main>
  )
};
