  var cl = console.log;
  
  // let digitalClock = document.getElementById("digitalClock");
  
  //hours
 // minutes
 // seconds
  //sessions
  
  // let d = new Date();
  // cl(d);
  
  // let hr = d.getHours();
  // let min = d.getMinutes();
  // let sec = d.getSeconds();
  // let session = "AM";
  
  // if(hr >= 12){
	  // session="PM"
  // }
  
  // if (hr >= 12){
	// hr = hr - 12
  // }
  
  // if( hr < 10){
	// hr = "0" + hr 
  // }
 
 //condition ? "this code will get exicuted if condition is true": this code will get exicuted if condition is false"
 // hr = (hr < 10)? ("0" + hr ): hr;
 // min =(min < 10)? ("0" + min ): min;
 // sec =(sec < 10)? ("0" + sec ): sec;
 
   // hr = setzero(hr);
   // min = setzero(min);
   // sec = setzero(sec);
  
  // let result = `${hr} : ${min} : ${sec} ${session}`
  
  // cl(hr,min,sec);
  
  // digitalClock.innerHTML = result;
  
  
  
  
  
  
  
  
  
  
  
  
  
  function dclclock(){
   let digitalClock = document.getElementById("digitalClock");
   
  let d = new Date();
  
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let millsec = d.getMilliseconds();
  let session = "AM";
  
  if(hr >= 12){
	  session="PM"
  }
  
  if (hr >= 12){
	hr = hr - 12
  }
  
  if( hr < 10){
	hr = "0" + hr 
  }
  
   // hr = setzero(hr);
   // min = setzero(min);
   // sec = setzero(sec);
  
  let result = `${hr} : ${min} : ${sec}: ${millsec} ${session}`
  
  cl(hr,min,sec,millsec);
  
  digitalClock.innerHTML = result;
  
   // it will take 2 parameter
  // 2nd parameter in milliseconds
   setTimeout(dclclock, 1000);

  }
  
   dclclock();

  function setzero(num){
	  return (num < 10 )? ( "0" + num ) : num;
  }
  
  
  
  
  
  
  
  
  