// var button = document.querySelector('.button');
// var inputValue = document.querySelector('.inputValue');
// var name = document.querySelector('.name');
// var desc = document.querySelector('.desc');
// var temp = document.querySelector('.temp');

// fetch('api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9fc2fdb6cce33cceaaeeb368547de7b8&units=metric')

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

getJSON('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=9fc2fdb6cce33cceaaeeb368547de7b8&units=metric',
function(err,data){
    if(err !== null){
        alert("오류가 발생했습니다"+err);
    } else{
        alert("현재 온도는 "+data.main.temp+"도 입니다.");
    }
});
