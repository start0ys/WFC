var foods = document.querySelector('.foods');
var input = document.querySelector('.input');
var list = document.querySelector('.list');
var buttons = document.querySelector('.buttons');
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var button2 = document.querySelector('.button2');
var inputValue2 = document.querySelector('.inputValue2');

button.addEventListener('click',function(){
    buttons.style.display="block";
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
function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
  }
function food(){
    foods.style.display = "block";
    let exfood = document.querySelector('.exfood');
    let explanation = document.querySelector('.explanation');
    exfood.innerHTML="";
    explanation.innerHTML="";
    var amfoods = new Array("떡볶이","라면","초밥","볶음밥","햄버거","짜장면","짬뽕","돈까스","카레","샌드위치");
    var pmfoods = new Array("치킨","삼겹살","피자","양꼬치","막창","대창","회","육회","쭈꾸미","목살","갈비");
    var ex = {
        물냉면:'뜨거운 여름에 시원한 물냉면 어떠신가요?',비빔냉면:'여름에 시원하고 맛있는 비빔냉면 어떠신가요?',
        삼계탕:'무더운 여름에 몸보신을 위한 삼계탕 어떠신가요?',대하:'가을에는 무조건 먹어야하는 대하! 오늘 어떠신가요?',
        방어회:'겨울에는 무조건 먹어야하는 방어! 오늘 어떠신가요?',수육국밥:'뜨끈하고 든든한 수육국밥은 어떠신가요?',
        돼지국밥:'뜨끈하고 든든한 돼지국밥은 어떠신가요?',순대국밥:'뜨끈하고 든든한 순대국밥은 어떠신가요?',
        김치찌개:'한국인이라면 다들 좋아하는 김치찌개 어떠신가요?',부대찌개:'햄이 가득한 밥 도둑 부대찌개는 어떠신가요?',
        떡볶이:'스트레스받는 요즘 매콤한 떡볶이는 어떠신가요?',라면:'언제 먹어도 맛이있는 라면 어떠신가요?',
        초밥:'한입 크키로 맛있게 먹을수있는 초밥은 어떠신가요?',볶음밥:'오늘 같은 날은  맛있는 볶음밥 어떠신가요?',
        햄버거:'콜라와 감자튀김까지 포함한 맛있는 햄버거세트는 어떠신가요?',짜장면:'중화요리의 대표 짜장면은 어떠신가요?',
        짬뽕:'시원한 국물과 쫄깃한 면발의 짬뽕은 어떠신가요?',돈까스:'겉바속촉! 바삭한 돈까스는 어떠신가요?',
        카레:'오늘 하루 맛있는 카레는 어떠신가요?',샌드위치:'간단하면서도 맛있는 샌드위치는 어떠신가요?',
        치킨:'언제 먹어도 맛이있는 치킨! 오늘 어떠신가요?',삼겹살:"기분이 저기압일때는 고기앞으로 가라! 삼겹살은 어떠신가요?",
        피자:'치즈와 토마토소스의 조합 맛있는 피자는 어떠신가요?',양꼬치:'칭따오와 고량주의 환상조합 양꼬치는 어떠신가요?',
        막창:'고소하고 쫄깃한 막창은 어떡신가요?',대창:'고소하고 쫄긴한 대창은 어떠신가요?',
        회:'신선하고 쫄긴한 회는 어떠신가요?',육회:'고소한 노른자와 비벼먹는 맛있는 육회는 어떠신가요?',
        쭈꾸미:'스트레스 풀리는 매콤함! 쭈꾸미는 어떠신가요?',목살:'기분이 저기압일때는 고기앞으로 가라! 목살은 어떠신가요?',
        갈비:'기분이 저기압일때는 고기앞으로 가라! 갈비는 어떠신가요?',파전:'비가오늘 오늘같은 날에는 파전 어떠신가요?',
        김치전:'비가오늘 오늘같은 날에는 김치전 어떠신가요?',해물파전:'비가오늘 오늘같은 날에는 해물파전 어떠신가요?',
        보쌈:'매일먹어도 맛있는 고기 오늘은 보쌈으로 어떠신가요?' 
    };
  
    var time = new Date().getHours();
    var date = new Date().getMonth() + 1;
    var description = document.querySelector('.description').innerText;
    if (6 < time <= 15) {  //점심식사
        if(date == 7 || date || 8) {
            amfoods.push('물냉면','비빔냉면','삼계탕');
        }
        if(description.indexOf('구름') !== -1 || description.indexOf('흐림') !== -1){
            amfoods.push('수육국밥','돼지국밥','순대국밥','김치찌개','부대찌개');
        }
        var a = randomItem(amfoods);
        var b = ex[a];
        exfood.append(a);
        explanation.append(b);
    }
    else{           //저녁식사
        if(date ==9 || date == 10){
            pmfoods.push('대하');
        }
        if(date ==12 || date == 1){
            pmfoods.push('방어회');
        }
        if(description.indexOf('비') !== -1 || description.indexOf('소나기') !== -1){
            pmfoods.push('파전','김치전','보쌈','해물파전');
        }

        var a = randomItem(pmfoods);
        var b = ex[a];
        exfood.append(a);
        explanation.append(b);
    } 
}
function clothes(){
    // var temp = document.querySelector('.temp').innerText.split("℃")[0];
    // const spring = temp >= 1 && temp >2;
    // const summer = temp >23;
    // const fall = temp > 14 && temp < 23;
    // const winter = temp < 4;
}
