import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { processing } from "../utils/processing";

const data = {
  "26-07-2022/11:35": 0,
  "26-07-2022/11:36": 10,
  "26-07-2022/11:37": 5,
  "26-07-2022/11:38": 2,
  "26-07-2022/11:39": 1,
  "26-07-2022/11:40": 2,
  "26-07-2022/11:41": 0,
  "26-07-2022/11:42": 10,
  "26-07-2022/11:43": 5,
  "26-07-2022/11:44": 2,
  "26-07-2022/11:45": 1,
  "26-07-2022/11:46": 2,
  "26-07-2022/11:47": 2,
  "26-07-2022/11:48": 1,
  "26-07-2022/11:49": 2,
};

export default function CounterSelector() {
  return (
    <div className="counter-selector">
      <Chart type="line" data={processing(data)} />
    </div>
  );
}
