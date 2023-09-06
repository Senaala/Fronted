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

const ifelsecokluornek=()=>{
    let sayi = 6;
    if (sayi==3) {
        console.log('3');      
    }
    else if (sayi==2) {
        console.log('2');
    }
    else {
        console.log('sayı 1 ve 2 dışındadır');
    } 
}
ifelsecokluornek();


const switchmulti=()=>{
    let number=6;
    switch (number) {
        case 1:
            console.log(1);
            break;
        case 2:
            console.log(2);
            break;
        case 3:
            console.log(3);
            break;
        case 4:
            console.log(4);
            break;
            
            default:
                console.log('1ve 4 arasındaki sayılar dışındadır');
            break;
    }
}
switchmulti();

//LOOPS

//for
(()=>{
for (let i = 0; i < 11; i++) {
    document.write(i+'\n');
    
}
document.write('<br>');
})();

//while
(()=>{
    let i=0;
    while (i<15){
        document.write(i+'\n');
        i++;
    }
    document.write('<br>'); 
})();
//do while
(()=>{
    let i=0;
    do {
        document.write(i+'\n');
        i++;
    } while (i<18);
    
})();



// Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ? (prompt)
//console.log(prompt());
// let x,y,sonuc;
// let number1,number,sum=0;
// number1=Number(prompt("Lütfen 1.sayıyı giriniz"));
// number2=Number(prompt("Lütfen 2.sayıyı giriniz"));
// console.log(number1+number2);


