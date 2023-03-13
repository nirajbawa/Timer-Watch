
let flag = 0;
let interval;

document.getElementById("sBTN").addEventListener('click', (e)=>{
    e.target.innerHTML = "";
    if(flag == 0)
    {
        let audio = new Audio("start.wav");
        audio.play();
        flag = 1;
        interval = timer_watch(e.target);
    }
    else{
        
        e.target.innerHTML = "Start";
        let audio = new Audio("stop.mp3");
        audio.play();
        clearInterval(interval);
        flag = 0;
    }
  
})


let timer_watch = (obj) =>{
    let s = 00;
    let m = 00;
    let h = 00;
    let interval = setInterval(function x(){
        
        if(s==60)
        {
            m++;
            s = 0;
            if(m==60)
            {
                h++;
                m = 0;
                if(h==24)
                {
                    h = 00;
                    s = 00;
                    m = 00;
                }
            }
        }
        else{
            s++
        }

        obj.innerHTML = `${h} : ${m} : ${s}`;
        
        
    }, 1000);

    return interval;
    
}