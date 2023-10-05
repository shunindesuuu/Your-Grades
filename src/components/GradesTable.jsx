/* eslint-disable react/prop-types */

const computeQPI = (items) => {
  let sum = 0;
  let totalUnits = 0;

  for (let i of items) {
    let u = parseFloat(i.units);
    totalUnits += u;
    switch (i.grade) {
      case "A":
        sum += 4 * u;
        break;
      case "B+":
        sum += 3.5 * u;
        break;
      case "B":
        sum += 3 * u;
        break;
      case "C+":
        sum += 2.5 * u;
        break;
      case "C":
        sum += 2 * u;
        break;
      case "D":
        sum += 1 * u;
        break;
      case "F":
        sum += 0;
        break;
    }
  }
  //   return sum / totalUnits;
  const qpi = Number(Math.round(sum / totalUnits + "e2") + "e-2").toFixed(2);
  return qpi;
};

export default function GradesTable({ grades, search }) {
  return (
    <>
        <div className="border-2 bg-[#FDF0F0] border-[#1F4172] rounded-md overflow-hidden">
        <table>
          <tbody className="rounded-md">
            <tr>
              <th className="border bg-[#FDF0F0] border-[#1F4172] py-3 px-11">
                Course No.
              </th>
              <th className="border bg-[#FDF0F0] border-[#1F4172] py-3 px-11">Course Name</th>
              <th className="border bg-[#FDF0F0] border-[#1F4172] py-3 px-11">Units</th>
              <th className="border bg-[#FDF0F0] border-[#1F4172] py-3 px-11">Grade</th>
            </tr>
            {grades
              .filter(
                (grade) =>
                  grade.number.toLowerCase().includes(search.toLowerCase()) ||
                  grade.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((grade, index) => (
                <tr key={index}>
                  <td className="border bg-[#FDF0F0] border-[#1F4172] py-3 px-11">
                    {grade.number}
                  </td>
                  <td className="border bg-[#FDF0F0] border-[#1F4172] py-3 px-11">
                    {grade.name}
                  </td>
                  <td className="border bg-[#FDF0F0] border-[#1F4172] py-3 px-11 text-center">
                    {grade.units}
                  </td>
                  <td className="border bg-[#FDF0F0] border-[#1F4172] py-3 px-11 text-center">
                    {grade.grade}
                  </td>
                </tr>
              ))}
            <tr>
              <th
                colSpan={3}
                className="border bg-[#FDF0F0] border-[#1F4172] py-3 px-11 text-right"
              >
                Total QPI:
              </th>
              <th className="border bg-[#FDF0F0] border-[#1F4172] py-3 px-11 text-center">
                {computeQPI(grades)}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
