var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');

button.addEventListener('click',function(){
    var loc = inputValue.value;
    const getJSON = function(url,callback){
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url,true);
        xhr.responseType = 'json';
        xhr.onload = function(){
            const status = xhr.status;
            if(status === 200){
                callback(null,xhr.response);
            } else {
                callback(status,xhr.response);
            }
        };
        xhr.send();
    };
    
    getJSON('http://api.openweathermap.org/data/2.5/weather?q='+loc+'&appid=9fc2fdb6cce33cceaaeeb368547de7b8&units=metric&lang=kr',
    function(err,data){
        if(err !== null){
            alert(err+"오류가 발생했습니다");
        } else{
            // alert("현재 온도는 "+data.main.temp+"℃ 입니다.");
            weather(data);
        }
    });
    
    function weather(data){
        let location = document.querySelector('.location');
        let temp = document.querySelector('.temp');
        let icon = document.querySelector('.icon');
        let feels_like = document.querySelector('.feels_like');
        let temp_max = document.querySelector('.temp_max');
        let temp_min = document.querySelector('.temp_min');
        let description = document.querySelector('.description');
        let stateIcon = data.weather[0].icon;
        location.append(data.name);
        temp.append(data.main.temp+'℃')
        feels_like.append('체감 온도 '+data.main.feels_like+'℃');
        temp_max.append('최고 '+data.main.temp_max+'℃');
        temp_min.append('최저 '+data.main.temp_min+'℃');
        description.append(data.weather[0].description)
        icon.innerHTML = '<img src="http://openweathermap.org/img/wn/'+stateIcon+'.png">';
    
    }
    


});



// const getJSON = function(url,callback){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET',url,true);
//     xhr.responseType = 'json';
//     xhr.onload = function(){
//         const status = xhr.status;
//         if(status === 200){
//             callback(null,xhr.response);
//         } else {
//             callback(status,xhr.response);
//         }
//     };
//     xhr.send();
// };

// getJSON('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=9fc2fdb6cce33cceaaeeb368547de7b8&units=metric&lang=kr',
// function(err,data){
//     if(err !== null){
//         alert(err+"오류가 발생했습니다");
//     } else{
//         // alert("현재 온도는 "+data.main.temp+"℃ 입니다.");
//         weather(data);
//     }
// });

// function weather(data){
//     let location = document.querySelector('.location');
//     let temp = document.querySelector('.temp');
//     let icon = document.querySelector('.icon');
//     let feels_like = document.querySelector('.feels_like');
//     let temp_max = document.querySelector('.temp_max');
//     let temp_min = document.querySelector('.temp_min');
//     let description = document.querySelector('.description');
//     let stateIcon = data.weather[0].icon;
//     location.append(data.name);
//     temp.append(data.main.temp+'℃')
//     feels_like.append('체감 온도 '+data.main.feels_like+'℃');
//     temp_max.append('최고 '+data.main.temp_max+'℃');
//     temp_min.append('최저 '+data.main.temp_min+'℃');
//     description.append(data.weather[0].description)
//     icon.innerHTML = '<img src="http://openweathermap.org/img/wn/'+stateIcon+'.png">';

// }



