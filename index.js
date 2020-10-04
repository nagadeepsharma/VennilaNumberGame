var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

var list=document.querySelectorAll('li')
function set(){
    shuffle(arr)
    function shuffle (arr) {
        var i = 0,j = 0,temp = null
      
        for (i = arr.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            
        }

    }
    for(var j=0;j<50;j++){
        list[j].innerHTML=arr[j]
        list[j].setAttribute('id',list[j].innerHTML)
    }
}


var start=50
function done(idd){
    if(begin){
        id=parseInt(idd)
        if(id===start){
            start=start-1
            var rem=document.getElementById(id)
            rem.innerHTML=""
            if(id===1){
                alert(`Completed in ${i} Seconds`)
                window.location.reload()
            }
        }
    }
    
}
var i;
var begin=true
function beg(){
    var appear=document.querySelectorAll('li')
    console.log(appear);
    appear.forEach((one)=>{
        one.style.backgroundColor='#779ecb'

    })
    set()
     i=1
    function timer(){
        document.querySelector('button').disabled=true
        document.querySelector('button').innerHTML=i
        i++
        
    }
    setInterval(timer,1000)
    
}   
document.querySelector('.restart').addEventListener('click',()=>{
    window.location.reload()
})