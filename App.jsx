
import "./App.css"

import Button from "./Button"

function App() {
  const users=["MEGA Yazılım/ Üretken Akademi Yazılım Programı", "Konya Ticaretler Odası Mesleki Eğitim Merkezi Python Programlama Eğitimi", "PHP ile WEB Geliştirme Eğitimi", "Simens Nx ve Catia V5 Tasarım Geliştirme Eğitimi", "İŞKUR İş Kulübü Eğitimi","Başakşehir Living Lab Python Eğitimi","Başakşehir Living Lab Girişimcilik Eğitim ve Uygulama Kampı","C++ Eğitimi","Python Eğitimi","Solidwork Eğitimi","Autocad Eğitimi"]

  

  const isActive=true

  const styles={
    h4Sytle:{backgroundColor:"lightcyan",fontSize:"20px",color:"black"}
  }

  const styless={
    h4Sytle:{backgroundColor:"lightskyblue",fontSize:"20px",color:"black"}
  }

  const Products=[
    {id:1,name:"MEGA Yazılım/ Üretken Akademi Yazılım Programı",iStock:true},
    {id:2,name:"Konya Ticaretler Odası Mesleki Eğitim Merkezi Python Programlama Eğitimi",iStock:false},
    {id:3,name:"PHP ile WEB Geliştirme Eğitimi",iStock:true},
    {id:4,name:"Simens Nx ve Catia V5 Tasarım Geliştirme Eğitimi",iStock:true},
    {id:5,name:"İŞKUR İş Kulübü Eğitimi",iStock:false},
    {id:6,name:"Başakşehir Living Lab Python Eğitimi",iStock:false},
    {id:7,name:"Başakşehir Living Lab Girişimcilik Eğitim ve Uygulama Kampı",iStock:false},
    {id:8,name:"C++ Eğitimi",iStock:false},
    {id:9,name:"Python Eğitimi",iStock:false},
    {id:10,name:"Solidwork Eğitimi",iStock:false},
    {id:11,name:"Autocad Eğitimi",iStock:false},

  ]

  return (
    <>
    
    
     <h1 style={{backgroundColor:`${isActive?"lightblue":"white"}`}}> GÜLENDER EZGİ KUYUCU </h1>
     <img src="https://media.licdn.com/dms/image/D4D03AQH9m-0RjwDG7A/profile-displayphoto-shrink_800_800/0/1692705250912?e=2147483647&v=beta&t=hdwFYKuTFHIA9DSfQiupsRAt1ewY_i9w_Dom_wFixSs" alt="" style={{padding:"1px",margin:0,borderRadius:"8px",
    border:"1px solid #bdc3cc7"}} width="150" height="150"></img>
      <h4 style={styless.h4Sytle}> HAKKINDA</h4>
  
      <div  className="bg-blue">2002 Temmuz 29 da Kayseri’de dünyaya gelmiştir. 5 yaşına kadar Kayseri’de ikamet etmiş ve sonrasında İstanbul’a ailecek taşınmışlardır. İlk okul ve orta okul öğrenimini İstanbul Esenkent Atatürk İlk Okulu/Orta Okulunda sağlamıştır. Lise öğrenimine Bahçeşehir Atatürk Anadolu Lisesi ile başlayıp Özel Uğur Anadolu Lisesi İle devam edip lise öğrenimini tamamlamıştır. Şuan da ise Selçuk Üniversitesinde Mekatronik Mühendisliği bölümünde 4. Sınıf öğrencisi olarak öğrenimine devam etmektedir.</div>
      <br />
      < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3JpPyENA2OzEXnHaCHfP5ewA1JMxB9RA_w&usqp=CAU"></img>
      <h4 style={styless.h4Sytle}> TEKNOFEST</h4>
      <div className="bg-blue">2022 yılında Otonom Sistemler/Binek Otonom Araç kategorisinde Robotaksi projesi gerçekleştirilmek üzere SÜ Kapsül Target Takımı birlikteliğinde Teknofest yarışmasına katılmıştır. Ne yazık ki elemelerde istenilen sonuca ulaşamamışlardır.</div>

      < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJGjxBtgD4rS-seHqbMWj6R1EQT7VVb8TYw&usqp=CAU"></img>
      <h4 style={styless.h4Sytle}> DENER&TAKSAN</h4>
      <div className="bg-blue">2022 yılında Dener&Taksan firmasında stajer Mühendis olarak görev almıştır.</div>
      <br />
      < img src="https://f.invest.gov.tr/en/News/News-from-Turkey/PublishingImages/2020.07.08-TUBITAK.jpg" width="350" height="200"></img>
      <br />
      <h4 style={styless.h4Sytle}> TÜBİTAK</h4>
      <div className="bg-blue">2023 yılında arkadaşı ile birlikte yürüttüğü Akıllı Robot kol projesi, Tübitak 2209 A Proje desteğini kazanmıştır.</div>

      <h4 style={styless.h4Sytle}> KATILDIĞI EĞİTİMLER</h4>
      <ul style={{backgroundColor:"lightcyan"}}>
        {users.map((user,index)=><li key={index}>{user}</li>)}
      </ul>
      <hr />
      
      
      <h4 style={styless.h4Sytle}> DEVAM EDEN EĞİTİMLER</h4>
      <ul style={{backgroundColor:"lightcyan"}}>
        {
        Products
        .filter(item=>item.iStock)
        .map(item=>
         <li key={item.id}>{item.name.toUpperCase()}</li>)
        }
      </ul>
      
      <Button/>
    </>
  )
}



export default App
