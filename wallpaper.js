console.log("working");
var r=1.0,g=0,b=0,stage=0;
const d=0.005;
function hovered(p){
    if(p.target.classList.contains("changing")){
        p.target.classList.add("abort");
    }
    let te =20;
    let ir=r,ig=g,ib=b;
    tick();
    console.log(r +","+g+","+b);
    p.target.classList.add("changing");
    //p.target.style.borderColor = "rgb(120,20,20)";
    //p.target.style.backgroundColor = "rgb(200,30,30)";
    var tem = setInterval(function fade(){
        //p.target.style.borderColor = "rgb(" + te*6 + "," + te + "," + te + ")";
        //p.target.style.backgroundColor = "rgb(" + te*10 + "," + te*1.5 + "," + te*1.5 + ")";
        p.target.style.borderColor = "rgb(" + te*(ir*5+1) + "," + te*(ig*5+1) + "," + te*(ib*5+1) + ")";
        p.target.style.backgroundColor = "rgb(" + te*(ir*8.5+1.5) + "," + te*(ig*8.5+1.5) + "," + te*(ib*8.5+1.5) + ")";
        if(p.target.classList.contains("abort")){
            p.target.classList.remove("abort");
            clearInterval(tem);
        }
        else if(te==0){
            p.target.classList.remove("changing");
            clearInterval(tem);
        }
        else{
            te-=1;
        }
    }, 50);
    
}
function tick(){
    //console.log("tick()");
    switch(stage){
        case 0: //r>>g
            if(r!=0){
                g=parseFloat(g);
                r-=d;
                g+=d;
                r=r.toFixed(3);
            }
            else{
                stage=1;
            }
            break;
        case 1: //g>>b
            if(g!=0){
                b=parseFloat(b);
                g-=d;
                b+=d;
                g=g.toFixed(3);
            }
            else{
                stage=2;
            }
            break;
        case 2: //b>>r
            if(b!=0){
                r=parseFloat(r);
                b-=d;
                r+=d;
                b=b.toFixed(3);
            }
            else{
                stage=0;
            }
            break;
    }
}
setInterval(function a(){
    tick();
},20);
for(let j=0;j<18;j+=1){
    for(let i=0;i<32;i+=1){
        let t = document.createElement("div");
        t.className = "block";
        t.style.left = i*60 + "px";
        t.style.top = j*60 + "px";
        t.addEventListener("mouseenter",hovered);
        document.getElementById("main").appendChild(t);
    }
}

