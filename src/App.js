import "./App.css";
import ProgramTugas from "./programTugas"; // Note the import statement with the correct capitalization
const biodata = {
  nama: "Matahari Pradipta",
  NIM: "2110512086",
  programStudi: "S1 Sistem Informasi",
  angkatan: 2021,
};
function App() {
  return (
    <div className="App">
      <div className="header">
        <div>
          <p>
            {biodata.nama} | {biodata.NIM}
          </p>
        </div>
        <div>
          <p className="judul">Batu Gunting Kertas</p>
        </div>
        <div>
          <p>
            {biodata.programStudi} {biodata.angkatan}
          </p>
        </div>
        {/* <ul>
            <li>{biodata.nama} | {biodata.NIM}</li>
            <li>Batu Gunting Kertas</li>
            <li>{biodata.programStudi} {biodata.angkatan}</li>
        </ul> */}
      </div>
      <ProgramTugas /> {}
      <div className="footer">
        <p>Tugas 1 Study Club Web Beginner</p>
      </div>
    </div>
  );
}

export default App;
