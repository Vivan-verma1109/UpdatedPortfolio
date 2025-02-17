import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { fetchLeetCodeData } from "./leetcode";
import styles from "./chart.module.css";

const COLORS = ["#41d3bd", "#ffcc00", "#ff5e5b", "#4a4a4a"]; 

export default function LeetCodeChart() {
  const [data, setData] = useState([]);
  const [totals, setTotals] = useState({ easy: 0, medium: 0, hard: 0, all: 0 });
  const [solvedTotal, setSolvedTotal] = useState(0);

  useEffect(() => {
    async function getData() {
      const leetCodeData = await fetchLeetCodeData();
      if (leetCodeData) {
        const { problemsSolved, totalQuestions } = leetCodeData;

        const easyTotal = totalQuestions?.easy || 1;
        const mediumTotal = totalQuestions?.medium || 1;
        const hardTotal = totalQuestions?.hard || 1;
        const allTotal = totalQuestions?.all || easyTotal + mediumTotal + hardTotal;

        setTotals({ easy: easyTotal, medium: mediumTotal, hard: hardTotal, all: allTotal });

        const totalSolved = problemsSolved.easy + problemsSolved.medium + problemsSolved.hard;
        setSolvedTotal(totalSolved);

        setData([
          { name: "Easy", value: problemsSolved.easy, color: COLORS[0] },
          { name: "Medium", value: problemsSolved.medium, color: COLORS[1] },
          { name: "Hard", value: problemsSolved.hard, color: COLORS[2] },
          { name: "Unsolved", value: allTotal - totalSolved, color: COLORS[3] }
        ]);
      }
    }
    getData();
  }, []);

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartCenterText}>
        <p className={styles.chartTitle}>All</p>
        <p className={styles.chartSolved}>{solvedTotal}</p>
        <hr className={styles.chartSeparator} />
        <p className={styles.chartTotal}>{totals.all}</p>
      </div>
      <ResponsiveContainer width={300} height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={90} 
            endAngle={-270}
            innerRadius={80}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
