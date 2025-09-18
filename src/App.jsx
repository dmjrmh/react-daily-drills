import "./index.css";
import Day1View from "./views/Day1View";
import Day2View from "./views/Day2View";
import Day3View from "./views/Day3View";
import Day4View from "./views/Day4View";
import Day5View from "./views/Day5View";
import Day6View from "./views/Day6View";
import Day7View from "./views/Day7View";

function App() {
	const day = 7;

	const views = {
		1: <Day1View />,
		2: <Day2View />,
		3: <Day3View />,
		4: <Day4View />,
		5: <Day5View />,
		6: <Day6View />,
		7: <Day7View />,
	};

	return (
		<div className="max-h-screen">
			{views[day] || <p className="text-center mt-10">Day not found 🚫</p>}
		</div>
	);
}

export default App;
