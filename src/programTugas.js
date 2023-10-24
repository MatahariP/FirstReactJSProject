import {useState} from 'react';

let playCount=0;
const resetGame = () =>{
alert("Terima kasih sudah bermain!");
        Object.keys(dataUser1).map((key)=>{
            if(typeof dataUser1[key]==='number'){
                dataUser1[key]=0
            }else if(typeof dataUser1[key]==='string'){
                dataUser1[key]=""
            }
        })
        Object.keys(dataUser2).map((key)=>{
        if(typeof dataUser2[key]==='number'){
            dataUser2[key]=0
        }  
        })
        console.log(dataUser1)
        console.log(dataUser2)
        alert("Halaman akan reload")
            window.location.reload();
        
}
const countSet = () =>{
    playCount = prompt("Berapa kali set untuk menang")
    if(playCount==0){
        const validasi = window.confirm("apakah anda tidak mau bermain lagi?")
        if(validasi==true){
            resetGame()
        }else{
            countSet()
        }
    }else{
        playCount++;
    }
}
const playAgain = () =>{
    
    if(playCount===0){
        let play = window.confirm("apakah ingin bermain lagi?")
        if(play){
            countSet()
            let victoryCount=0;
            dataUser1 = {...dataUser1, victoryCount }
            dataUser2 = {...dataUser2, victoryCount }
            
            if(dataUser1.scoreUser1>dataUser2.scoreUser2){
                dataUser1.victoryCount = 1
            }else{
                dataUser2.victoryCount = 1
            }
            dataUser1.scoreUser1 = 0
            dataUser2.scoreUser2 = 0
            
            console.log(dataUser1)
            console.log(dataUser2)
    
            
        }else{
            resetGame()
        }
    }else{
        
        if(dataUser1.scoreUser1>dataUser2.scoreUser2){
            dataUser1.victoryCount++
        }else if(dataUser1.scoreUser1<dataUser2.scoreUser2){
            dataUser2.victoryCount++
        }
        if(playCount==dataUser1.victoryCount){
            alert(`Selamat ${dataUser1.namaUser1} Menang`)
            playCount=0;
            playAgain()
        }else if(playCount==dataUser2.victoryCount){
            alert(`yahhh ${dataUser2.namaUser2} Menang`)
            playCount=0;
            playAgain()
        }
        dataUser1.scoreUser1 = 0
        dataUser2.scoreUser2 = 0
        console.log(playCount)
        console.log(dataUser1)
        console.log(dataUser2)
    }
}
const  pilihAngkaRandom=() => {
    return Math.floor(Math.random() * 3) + 1;
}
let inputMaxScore=0;
const startGame=()=>{

    while(dataUser1.namaUser1===""){
        const inputName = prompt("Input Nama Anda")
        if(inputName){
            dataUser1.namaUser1=inputName;
            while(inputMaxScore===0){
    
                inputMaxScore = prompt("Berapa score untuk menang")
            }
            break;
        }  
    }  
}
let dataUser1 = {
    namaUser1: "",
    pilihanUser1: "",
    scoreUser1: 0
}
let dataUser2 ={
    namaUser2:"CPU",
    pilihanUser2:"",
    scoreUser2: 0
}
const cekScore = () =>{
    if(dataUser1.scoreUser1==inputMaxScore){
        alert(`${dataUser1.namaUser1} Menang!!`)
        playAgain()
    }else if(dataUser2.scoreUser2==inputMaxScore){
        alert(`${dataUser2.namaUser2} Menang!!`)
        playAgain()
    }
}

const tambahScore = () =>{
    if(dataUser1.pilihanUser1=== dataUser2.pilihanUser2){
            alert("Seri")
        }else 
        if(dataUser1.pilihanUser1==="batu"){
            if(dataUser2.pilihanUser2==="kertas"){
                dataUser2.scoreUser2++
            }else if(dataUser2.pilihanUser2==="gunting"){
                dataUser1.scoreUser1++
            }
        }else if(dataUser1.pilihanUser1==="kertas"){
            if(dataUser2.pilihanUser2==="gunting"){
                dataUser2.scoreUser2++
            }else if(dataUser2.pilihanUser2==="batu"){
                dataUser1.scoreUser1++
            }
        }else if(dataUser1.pilihanUser1==="gunting"){
            if(dataUser2.pilihanUser2==="batu"){
                dataUser2.scoreUser2++
                
            }else if(dataUser2.pilihanUser2==="kertas"){
                
                dataUser1.scoreUser1++
            }
        }
        setTimeout(() => {
            cekScore()
        }, 500);
}


const ProgramTugas = () =>{
    startGame()
    const biodata = {
        nama: "Ma",
        NIM: "2110512086",
        programStudi:"S1 Sistem Informasi",
        angkatan: 2021
    }
   
    const [imageUser1, setImageUser1] = useState("logo192.png");
    const [imageUser2, setImageUser2] = useState("logo192.png");

    const handleCPU = () =>{
        const angkaRandom = pilihAngkaRandom();
      
        if(angkaRandom===1){
            setImageUser2("batu.jpg");
            dataUser2.pilihanUser2="batu"
        }else if(angkaRandom===2){
            setImageUser2("kertas.jpg");
            dataUser2.pilihanUser2="kertas"
        }else if(angkaRandom===3){
            setImageUser2("gunting.jpg");
            dataUser2.pilihanUser2="gunting"
        }else{
            console.log("gagal:(")
            handleCPU();
        }
            tambahScore();
        
    }

    const handleBatu = (user) =>{
        if(user===1){
            setImageUser1("batu.jpg") ;
            dataUser1.pilihanUser1="batu"
            handleCPU();
        }
        else if(user ===2){
            setImageUser2("batu.jpg");
        }
        else
        console.log("error")
    }
    const handleKertas = (user) =>{
        if(user===1){
            setImageUser1("kertas.jpg") ;
            dataUser1.pilihanUser1="kertas"
            handleCPU();
        }
        else if(user ===2){
            setImageUser2("kertas.jpg");
        }
        else
        console.log("error")
    }
    const handleGunting = (user) =>{
        if(user===1){
            setImageUser1("gunting.jpg") ;
            dataUser1.pilihanUser1="gunting"
            handleCPU();
        }
        else if(user ===2){
            setImageUser2("gunting.jpg");}
        else
        console.log("error")
    }

    return(
        <>
       <div className="header">
        <div>
        <p>{biodata.nama} | {biodata.NIM}</p>
        </div>
        <div>
        <p className="judul">Batu Gunting Kertas</p>
        </div>
        <div>
        <p>{biodata.programStudi} {biodata.angkatan}</p>
        </div>
        {/* <ul>
            <li>{biodata.nama} | {biodata.NIM}</li>
            <li>Batu Gunting Kertas</li>
            <li>{biodata.programStudi} {biodata.angkatan}</li>
        </ul> */}
        </div>
        {/* <h1>Batu Gunting Kertas</h1> */}
        <div className="isi">
            <div>
                <p>{dataUser1.victoryCount}</p>
            </div>
            <div>
                <p>{dataUser2.victoryCount}</p>
            </div>
        </div>
        <div className="isi">
            <div className="user">
                <p >{dataUser1.namaUser1}</p>
                <img src={imageUser1} alt="gambar"/>
                <div className="tombol">
                    <div>
                        <p>Score : {dataUser1.scoreUser1}</p>
                        
                    </div>   
                    <button onClick={() => handleBatu(1)}>Batu</button>
                    <button onClick={() => handleGunting(1)}>Gunting</button>
                    <button onClick={() => handleKertas(1)}>Kertas</button>
                </div>
            </div>
            <div>
                <p>{dataUser2.namaUser2}</p>
                <img src={imageUser2} alt="gambar2"/>    
                {/* <div className="tombol">
                <button onClick={() => handleBatu(2)}>Batu</button>
                <button onClick={() => handleGunting(2)}>Gunting</button>
                <button onClick={() => handleKertas(2)}>Kertas</button>
                </div> */}
                <div>
                    <p>Score : {dataUser2.scoreUser2}</p>
                </div> 
            </div>
        </div>
        <div className="footer">
        <p >Tugas 1 Stucy Club Web Beginner</p>
        </div>
        
        </>
    )
}


export default ProgramTugas ;