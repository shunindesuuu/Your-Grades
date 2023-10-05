const letterGrades = ["A", "B+", "B", "C+", "C", "D", "F"];

// eslint-disable-next-line react/prop-types
export default function GradeSelection({ onChange }) {
  return (
    <div>
      <p className="font-bold">Grade:</p>
      <div className="grid">
        {letterGrades.map((grade, index) => (
          <div key={index}>
            <input type="radio" name="grade_selection" id={grade} value={grade} onChange={onChange} />
            <label htmlFor={grade} className="pl-1">{grade}</label>
          </div>
        ))} 
      </div>
    </div>
  );
}
