import {useState, useEffect} from 'react';
let nameUser1 =""
console.log("atas")
if(nameUser1===""){
    const inputName = prompt("Input Nama Anda")
    if(inputName===""){
        nameUser1="User"
    }else if(inputName){
        nameUser1=inputName;
    }
    
}
const ProgramTugas = () =>{
    const biodata = {
        nama: "Ma",
        NIM: "2110512086",
        programStudi:"S1 Sistem Informasi",
        angkatan: 2021
    }
   // const [nameUser1, setNameUser1] = useState("User");
    const [imageUser1, setImageUser1] = useState("logo192.png");
    const [imageUser2, setImageUser2] = useState("logo192.png");

    

    const handleBatu = (user) =>{
        
        if(user===1)
        {setImageUser1("batu.jpg") ;}
        else if(user ===2)
        {setImageUser2("batu.jpg");}
        else
        console.log("error")
    }
    const handleKertas = (user) =>{
        if(user===1)
        {setImageUser1("kertas.jpg") ;}
        else if(user ===2)
        {setImageUser2("kertas.jpg");}
        else
        console.log("error")
    }
    const handleGunting = (user) =>{
        if(user===1)
        {setImageUser1("gunting.jpg") ;}
        else if(user ===2)
        {setImageUser2("gunting.jpg");}
        else
        console.log("error")
    }
    // const changeUser1Name = () =>{
    //     input("Siapa namamu?");
    // }
    return(
        <>
        <div className="header">
        <ul>
            <li>{biodata.nama} | {biodata.NIM}</li>
            <li>{biodata.programStudi} {biodata.angkatan}</li>
        </ul>
        </div>
        <h1>Batu Gunting Kertas</h1>
        <div className="isi">
        <div className="user">
            <p >{nameUser1}</p>
            <img src={imageUser1} alt="gambar"/>
            <div className="tombol">
            <button onClick={() => handleBatu(1)}>Batu</button>
            <button onClick={() => handleGunting(1)}>Gunting</button>
            <button onClick={() => handleKertas(1)}>Kertas</button>
            </div>   
        </div>
        <div>
            <p>User2</p>
            <img src={imageUser2} alt="gambar2"/>    
            <div className="tombol">
            <button onClick={() => handleBatu(2)}>Batu</button>
            <button onClick={() => handleGunting(2)}>Gunting</button>
            <button onClick={() => handleKertas(2)}>Kertas</button>
            </div>
        </div>
        </div>
        
        </>
    )
}


export default ProgramTugas ;