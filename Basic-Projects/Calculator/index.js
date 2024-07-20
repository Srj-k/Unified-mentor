const txtBox= document.getElementById('display');
const btn= document.querySelectorAll('button');
var operators =['%','=','+','*','/','-','.'];
var output='';

console.log(txtBox,btn)
const calculate = (value)=>{
    console.log(value)
    if(value==='=' && output!== '' ){
        output=eval(output.replace('%','/100'));
    }
    else if(value==="AC"){
        output='';
    }
    else if(value==="DEL"){
        output=output.toString().slice(0,-1);
    } 
    else{
        if(output===""&& operators.includes(value)) return;
        output+=value;
    }
    txtBox.value=output;
}

btn.forEach((button)=>{
button.addEventListener("click",(e)=>{
    calculate(e.target.dataset.value)
})
})