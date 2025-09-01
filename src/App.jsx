import "./index.css";
import Day1View from "./views/Day1View";
import Day2View from "./views/Day2View";
import Day3View from "./views/Day3View";
import Day4View from "./views/Day4View";

function App() {
	const day = 4;

	const views = {
		1: <Day1View />,
		2: <Day2View />,
		3: <Day3View />,
		4: <Day4View />,
	};

	return (
		<div className="min-h-screen">
			{views[day] || <p className="text-center mt-10">Day not found 🚫</p>}
		</div>
	);
}

export default App;
