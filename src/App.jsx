import { useState } from "react";
import GradesTable from "./components/GradesTable";
import TextInput from "./components/TextInput";
import GradeSelection from "./components/GradesRadioButton";
import "./index.css";

function App() {
  const [gradesData, setGradesData] = useState([]); // Initialize gradesData as an empty array
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({ name: "", number: "", units: 0, grade: "" });

  const handleFormInput = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });
  const handleRadio = (e) => setFormData({ ...formData, grade: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setGradesData([...gradesData, formData]);
    setFormData({ name: "", number: "", units: 0, grade: "" }); // Clear form fields after submission
  };

  return (
    <>
      <div className="bg-[#F1B4BB] py-20">
        <div className="py-10 text-center">
        </div>
        <div className="flex md:flex-row flex-col justify-center md:items-start items-center gap-10 p-10">
          <form onSubmit={handleSubmit} className="md:place-self-start md:w-auto w-96 flex flex-col gap-2 p-10 bg-[#1F4172] text-[#ffdb63] rounded-md">
            <TextInput label="Course Number:" id="number" type="text" value={formData.number} onChange={handleFormInput} />
            <TextInput label="Course Name:" id="name" type="text" value={formData.name} onChange={handleFormInput} />
            <TextInput label="Units:" id="units" type="number" value={formData.units} onChange={handleFormInput} />
            <GradeSelection onChange={handleRadio} />
            <button type="submit" className="py-1 px-2 rounded-md w-full bg-[#FDF0F0] hover:bg-[#ff697d] hover:text-[#ffdb63]   text-[#ff697d] font-bold">Submit</button>
          </form>
          <div className="flex flex-col gap-5">
            <input id="search" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} className="px-5 py-2 border-2 border-[#1F4172] rounded-md" />
            <GradesTable grades={gradesData} search={search} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

