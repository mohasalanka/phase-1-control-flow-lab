
  function scuberGreetingForFeet(feet){
  
  
  if ( feet < 400){
    return`This one is on me!`;
  }else if(feet > 2000 ){
    if(feet > 2500){
      return'No can do.'
    }
    return 'I will gladly take your thirty bucks.';
  }
  
}
  



  console.log(ternaryCheckCity('NYC'))

  function ternaryCheckCity(cityName){
    let city;
    return city = cityName === 'NYC' ? ("Ok, sounds good.") : ("No go.") ; 
    
  }
  
  
  ternaryCheckCity('NYC')
  
  function switchOnCharmFromTip(tip){
  
    switch (tip){
      case 'generous' :
        return 'Thank you so much.'
      case 'not as generous':
        return 'Thank you.'
      default :
      return 'Bye.'
    }
}
switchOnCharmFromTip('generous')
