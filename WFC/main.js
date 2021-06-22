var input = document.querySelector('.input');
var list = document.querySelector('.list');
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var button2 = document.querySelector('.button2');
var inputValue2 = document.querySelector('.inputValue2');

button.addEventListener('click',function(){
    list.style.margin="0px";
    list.style.textAlign = "initial";
    inputValue.style.height = "36px";
    inputValue.style.width = "87px";
    inputValue.style.fontSize = "14px";
    button.style.height = "36px";
    button.style.width = "87px";
    button.style.fontSize = "14px";
    input.style.margin="0px";
    input.style.textAlign = "initial";
    inputValue2.style.height = "36px";
    inputValue2.style.width = "87px";
    inputValue2.style.fontSize = "14px";
    button2.style.height = "36px";
    button2.style.width = "87px";
    button2.style.fontSize = "14px";
    var loc = inputValue.value;
    var locName = "";

    switch(loc){
        case "seoul": locName = "서울"; break;
        case "busan": locName = "부산"; break;
        case "incheon": locName = "인천"; break;
        case "daegu": locName = "대구"; break;
        case "daejeon": locName = "대전"; break;
        case "gwangju": locName = "광주"; break;
        case "suwon": locName = "수원"; break;
        case "ulsan": locName = "울산"; break;
        case "goyang-si": locName = "고양"; break;
        case "yongin": locName = "용인"; break;
        case "changwon": locName = "창원"; break;
        case "seongnam-si": locName = "성남"; break;
        case "cheongju-si": locName = "청주"; break;
        case "bucheon-si": locName = "부천"; break;
        case "hwaseong-si": locName = "화성"; break;
        case "namyangju": locName = "남양주"; break;
        case "jeonju": locName = "전주"; break;
        case "cheonan": locName = "천안"; break;
        case "ansan-si": locName = "안산"; break;
        case "anyang-si": locName = "안양"; break;
        case "gimhae": locName = "김해"; break;
        case "pyeongtaek": locName = "평택"; break;
        case "pohang": locName = "포항"; break;
        case "jeju": locName = "제주"; break;
        case "yeosu": locName = "여수"; break;
        case "mokpo": locName = "목포"; break;
        case "suncheon": locName = "순천"; break;
        
    }


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
            alert("지역명을 올바르게 입력해 주세요");
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
        
        location.innerHTML="";
        temp.innerHTML="";
        feels_like.innerHTML="";
        temp_max.innerHTML="";
        temp_min.innerHTML="";
        description.innerHTML="";

        location.append(locName);
        temp.append(Math.floor(data.main.temp)+'℃')
        feels_like.append('/ 체감 온도 '+Math.floor(data.main.feels_like)+'℃');
        temp_max.append('최고 '+Math.floor(data.main.temp_max)+'℃');
        temp_min.append('최저 '+Math.floor(data.main.temp_min)+'℃');
        description.append(data.weather[0].description+" ")
        icon.innerHTML = '<img src="http://openweathermap.org/img/wn/'+stateIcon+'.png" style="width: 200px;">';
    
    }
    
});



button2.addEventListener('click',function(){
    var loc = inputValue2.value;
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
            alert("지역명을 올바르게 입력해 주세요");
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
        
        location.innerHTML="";
        temp.innerHTML="";
        feels_like.innerHTML="";
        temp_max.innerHTML="";
        temp_min.innerHTML="";
        description.innerHTML="";

        location.append(data.name);
        temp.append(Math.floor(data.main.temp)+'℃')
        feels_like.append('/ 체감 온도 '+Math.floor(data.main.feels_like)+'℃');
        temp_max.append('최고 '+Math.floor(data.main.temp_max)+'℃');
        temp_min.append('최저 '+Math.floor(data.main.temp_min)+'℃');
        description.append(data.weather[0].description+" ")
        icon.innerHTML = '<img src="http://openweathermap.org/img/wn/'+stateIcon+'.png" style="width: 200px;">';
    
    }
    
});

function chk(a){
    if(a==0){   
        list.style.display = "none";
        input.style.display = "block";
    } else if(a==1){
        input.style.display = "none";
        list.style.display = "block";
    }
}

