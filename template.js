// // window.alert('Merhabalar');
// // window.document.writeln('Ekranda göster');
// // window.console.log('Consolda göster');
// // console.log('consoda bidaha göster');
// console.log('consodadfsfsdfds bidaha göster');
// console.error('alarm');
// console.warn('warn');

// // variable

// var globaldegisken='Merhabalar güzel yavrularım';
// var globaldegisken='Merhabalar güzel yavrularım';

// console.log(globaldegisken);

// let binarydegisken='hohohoh';
// binarydegisken='hohohohfsdfsd'; 
// // let binarydegisken='hohohoh';
// console.log(binarydegisken);

// const sabitdegisken='fdsf';

// console.log(typeof sabitdegisken); 
// console.log(20+5);
// console.log(10%2);
// console.log(Math.abs(-30+6));//mutlak değer
// console.log(Math.sqrt(25)); //karekök
// console.log(Math.max(25,60)); 
// console.log(Math.ceil(2.1));//yukarı yuvarlar
// console.log(Math.floor(2.9));//aşagı yuvarlar
// console.log(Math.pow(2,4));//üssünü alır
// console.log(Math.round(2.5));//4 ve aşagısında ise aşagı 5 ve yukarısında ise yukarı yuvarlar
// console.log(Math.round(Math.random()));

// let sayi=55;
// console.log(sayi);
// console.log(typeof sayi);
// let bilimselgosterim=5E+2;
// console.log(bilimselgosterim);


// // // CAST
//  let sayi1=Number('10');
//  console.log(sayi1);

// // let sayi2=String("10");
// // console.log(sayi2+20);
// //let sayi2=number('20');

 
// //STRING
// let kelime='JS öğreniyorum JS ';
// console.log(kelime);
// console.log(kelime.length);
// console.log(kelime.charAt(0));
// console.log(kelime.concat('Harika'));
// console.log(kelime.endsWith('JS'));
// console.log(kelime.startsWith('Jdd'));
// console.log(kelime.indexOf('AB'));
// console.log(kelime.lastIndexOf('JS'));
// console.log(kelime.toLowerCase());
// console.log(kelime.toUpperCase());
// console.log(kelime.substring(1,4));
// //FUNCTION
// function retunsuzParametresiz()
//  {
//     console.log('returnsuz parametresiz fonksiyon1');
        
//   }

//   retunsuzParametresiz();

//   function returnsuzParametreli(isim1)
// {
// console.log(isim1+'MErahba');
// }
// returnsuzParametreli('Sena ');

// function returluParametresiz1(){
//     return "returlu Parametresiz";
// }
// let data3= returluParametresiz1();
// console.log(data3);

// function returnluParametreli(name,surname,language) {
//     return `ADI:${name} SOYADI:${surname} DIL:${language}`;
// }
// let data4=returluParametreli("Sena", "ala", "JS");
// console.log(data4);


// function returluParametreli(name,surname,language){
//     return `ADI: ${name} SOYADI:${surname} DİL: ${language} `;
// }
// let data5= returluParametreli("Hamit","Mızrak","JS");
// console.log(data5);

// function normal1() {
//         console.log('normal');
// }
// normal1();

// let anonymous1= function() {
//     console.log('Anonymous');

// }
// anonymous1();

// let arrowFunction=() => {
//     console.log('Arrow Function');
// }
// arrowFunction();

// //immedia functions

// //()();
// (function normal1() {
//     console.log('immedia normal');
// })();

// (() => {
//     console.log('Immedia Arrow Function');
// })();

// //CONDITIONS karar

// const ifelseornek=()=>{
//     let number=13;
//     if (number>0) {
//         console.log('Pozitif');
        
//     }
//     else {
//         console.log('negatif');
//     }
// }

// ifelseornek();


// // ternary

// const ternaryornek=()=>{
//     let number=13;
//     let result=(number>0)?'Pozitif':'negatif';
//     console.log(result);
// } 


//if else else if

// const ifelsecokluornek=()=>{
//     let sayi = 6;
//     if (sayi==3) {
//         console.log('3');      
//     }
//     else if (sayi==2) {
//         console.log('2');
//     }
//     else {
//         console.log('sayı 1 ve 2 dışındadır');
//     } 
// }
// ifelsecokluornek();


// const switchmulti=()=>{
//     let number=6;
//     switch (number) {
//         case 1:
//             console.log(1);
//             break;
//         case 2:
//             console.log(2);
//             break;
//         case 3:
//             console.log(3);
//             break;
//         case 4:
//             console.log(4);
//             break;
            
//             default:
//                 console.log('1ve 4 arasındaki sayılar dışındadır');
//             break;
//     }
// }
// switchmulti();

// //LOOPS

// //for
// (()=>{
// for (let i = 0; i < 11; i++) {
//     document.write(i+'\n');
    
// }
// document.write('<br>');
// })();

// //while
// (()=>{
//     let i=0;
//     while (i<15){
//         document.write(i+'\n');
//         i++;
//     }
//     document.write('<br>'); 
// })();
// //do while
// (()=>{
//     let i=0;
//     do {
//         document.write(i+'\n');
//         i++;
//     } while (i<18);
    
// })();



// Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ? (prompt)
// 


//Yaptığım Ödev
//  let x,y,sonuc;
//  let number1,number,sum=0;
//  number1=Number(prompt("Lütfen 1.sayıyı giriniz"));
//  number2=Number(prompt("Lütfen 2.sayıyı giriniz"));
//  console.log(number1+number2);


// Örnek-2
/* 
    Kullanıcıdan aldığımız sayıyı dereceden fahrenhayt'a çeviren JS kodu yazınız ?
    Formül: (derece*9/5)+32
    */
//Benim yaptığım
    // let sonucF , F 
    // F=Number(prompt('Cantigrat derece bilgisini giriniz.'));
    // console.log('Fahrenayt olarak '+ (F*9/5)+32);
// let derece=Number(prompt("Lütfen dereceyi giriniz"));
// console.log('Hava sıcaklığı'+5055(derece*9/5)+32);

// let degree=0,fahranhayt=0;
// degree=Number(prompt("Lütfen Dereceyi giriniz"));
// fahranhayt=(degree*9/5)+32;
// console.log(fahranhayt);


// SORU 1<=userData<=50
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği
// (()=>{
// for (let i = 0; i < 11; i++) {
//     document.write(i+'\n');
    
// }
// document.write('<br>');
// })();
//Benim yaptığım
// (()=>{
//     let i=0,n,toplam=0;
//     n=Number(prompt('lütfen bitiş sayısını giriniz.'));
    
//     for (i;i<n+1;i++)
//     {    
//     toplam=toplam+i;               
//     }
//     document.write(toplam);
//     console.log('<br>');
// })();


// Örnek: 1<=user 1+2+3+...userdatası
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)

// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ?

// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan program ?
//benim yaptığım sonuç doğru çalıştı.
// (()=>{
//      let i=1,n=0, toadet=0, toplam=0,ctoplam=0,ttoplam=0,cadet=0,tadet=0;
//      n=Number(prompt('lütfen bitiş sayısını giriniz.'));
  
//      for (i; i<= n;i++)
//      {   
//         if(n>50)
//         {
//             document.write('50 den büyük sayı girilemez');
//             break;
//         }
//         if(n==44)
//         {
//              document.write('secret key girildi. çıkış');
//              break; 
//         } 
//         if(i==7)
//         {
//             console.log('7 dahil edilmedi');
//             continue;
//         }
//         if(i%2==0)
//         {
//             ctoplam=ctoplam+i;
//             cadet++;
//         }
//         else
//         {
//             ttoplam=ttoplam+i;
//             tadet++;
//         }

//         toadet++;
//        toplam=toplam+i; 
//        document.write(i);               
//      }
//      document.write('Sayı toplamı'+toplam); 
//      document.write('Toplam Sayı adedi'+toadet); 
//      document.write('çift Sayı adedi'+cadet); 
//      document.write('Tek sayı adet'+tadet); 
//      document.write('çift sayı toplam'+ ctoplam); 
//      document.write('Tek sayı toplam'+ttoplam); 
//      console.log(toplam);
//      console.log(ctoplam);
//  })();


// let userdata = () => {
//     const userinput = number(prompt("lütfen bitiş sayısını giriniz"));
//     let commonsum = 0;
//     // tek ve çift için
//     let oddsum = 0, oddcounter = 0, oddallnumber = "";
//     let evensum = 0, evencounter = 0, evenallnumber = "";

//     // loop
//     for (let i = 1; i <= userinput; i++) {
//         //  secret-key 
//         if (commonsum == 44) {
//             console.log("secret-key girildi çıkış yapılıyor.");
//             break;
//         }

//         // en fazla 50'e kadar toplama yapsın.
//         if (i == 50) {
//             console.log("sadece 1<=x<=50 arasındakileri toplayabilirim.");
//             break;
//         }

//         // sayılardan 7 sayıyı varsa dahil etmesin
//         if (i == 7) {
//             console.log("7 sayısı dahil edilmedi !!!");
//             continue;
//         }

//         // çi̇ft
//         if (i % 2 == 0) {
//             evencounter++;
//             evensum += i;
//             evenallnumber = evenallnumber + " " + i;
//         } else { //tek
//             oddcounter++;
//             oddsum += i;
//             oddallnumber = oddallnumber + " " + i;
//         }
//         commonsum = commonsum + i;
//     }

//     console.log("bütün sayı toplamları: " + commonsum);

//     console.log("tek sayılar: " + oddallnumber);
//     console.log("tek sayı adeti: " + oddcounter);
//     console.log("tek sayılar toplamı: " + oddsum);

//     console.log("çift sayılar: " + evenallnumber);
//     console.log("çift sayı adeti: " + evencounter);
//     console.log("çift sayılar toplamı: " + evensum);
// }

// userdata();

////////////////////////////////////////////
// TRY CATCH

(()=>{
    try {
    alertx('HATA');
      
    } catch (error) {

    console.log('hata');
        
    }
    finally{
        console.log("db.close() api.close() port.close()");
    }
    console.log('son satır');

})()
// (() => {
//     try {
//         alertx("deneme");
//     } catch (err) {
//         console.error(err);
//         console.error(err.name+":"+err.message);
//     } finally {
//         console.log("db.close() api.close() port.close()");
//     }
//     console.log("son satır");
// // })();




// Submit Data
const submitData=(e)=>{
    console.log("data");

    // browser sen dur bir şey yapma
    //e.preventDefault();

    //alert("çalıştı")
    let email=document.getElementById("email_id").value;
    let password=document.getElementById("password_id").value;
    //console.log("Email: "+email+" Şifre: "+password);

    let emailLocal= localStorage.setItem("email_unique",email);
    let passwordLocal=localStorage.setItem("password_unique",password);
    console.log(localStorage.getItem("email_unique"));
    console.log(localStorage.getItem("password_unique"));
    alert("Tamamdır");
}


////////////////////////////////////////////
// DOM
// Listener
// LocalStorage

////////////////////////////////////////////
// normal, anonymous, arrow , immedia function
// Callback, Promise, Async-await
// ES5
// ES6

////////////////////////////////////////////

// Kurulum Videosu
// VS code
// Node js
// Android Studio
// React Native

////////////////////////////////////////////