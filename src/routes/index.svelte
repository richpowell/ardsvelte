<script>
 
 import { io } from "$lib/realtime";
 import { onMount } from "svelte";
 let pValue =0;

 onMount(() => {
        io.on("arduino", pValue => { // Listen to the message event
            pValue = pValue;
        })
   
    })

io.on('arduino', data=>{
    console.log(data);
    pValue=data;
    // const counter = document.getElementById('counter');
    // counter.innerHTML = data;
    // let nbrdata = parseInt(data);
    // if (nbrdata<=400){
    //     document.getElementById('counter').style.color="green";
    // }else{
    //     document.getElementById('counter').style.color="red";
    // }
});

</script>

<p>The potentiometer value is now <span id="counter"></span></p>
<p>pValue={pValue}</p>
