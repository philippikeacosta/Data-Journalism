let lifeExpect = require('../data/clean/life.json');
let election = require('../data/clean/election.json');
let states = require('../data/clean/stateArray.json');

describe('checking data format', () => {
  test("All states have a life expectancy", () =>{
    isRepresented = true;
    lifeExpect.forEach(function(currentValue,index){
      if(lifeExpect[index].avg == ""){
        isRepresented = false;
      }
    });
    expect(isRepresented).toBe(true);
  });

  // test("All votes in election data add up to total US votes", () =>{
  //   isRepresented = true;
  //   addedVotes = 0;
  //   for(let i = 1; i < election.length; i ++){
  //     addedVotes += Float.parseFloat(election[i].Dvotes);
  //     addedVotes += Float.parseFloat(election[i].Rvotes);
  //     addedVotes += Float.parseFloat(election[i].Ovotes);
  //   }
  //   if(addedVotes != (Float.parseFloat(election[0].Dvotes) + Float.parseFloat(election[0].Rvotes) + Float.parseFloat(election[0].Ovotes))){
  //     isRepresented = false;
  //     console.log(addedVotes);
  //   }
  //   expect(isRepresented).toBe(true);
  // });

  test("All % should be represented as decimals (no % sign)", () =>{
    isRepresented = true;
    election.forEach(function(currentValue,index){
      if(election[index].Dpercent.includes("%") || election[index].Rpercent.includes("%") || election[index].Opercent.includes("%")){
        isRepresented = false;
      }
    });
    expect(isRepresented).toBe(true);
  });

  test("All election result data should be represented by a D or R", () =>{
    isRepresented = true;
    election.forEach(function(currentValue,index){
      if(election[index].result != "D" && election[index].result != "R"){
        isRepresented = false;
      }
    });
    expect(isRepresented).toBe(true);
  });

  test("All state names should just be the name of the state", () =>{
    //use array of states
    isRepresented = true;
    for(let i = 1; i < lifeExpect.length; i ++){
      if (states.includes(lifeExpect[i].state) == false){
        isRepresented = false;
      }
    }
    // lifeExpect.forEach(function(currentValue,index){
    //   if (states.includes(lifeExpect[index].state) == false){
    //     isRepresented = false;
    //   }
    // });
    for(let i = 1; i < election.length; i ++){
      if (states.includes(election[i].state) == false){
        isRepresented = false;
      }
    }
    // election.forEach(function(currentValue,index){
    //   if (states.includes(election[index].state) == false){
    //     isRepresented = false;
    //   }
    // });
    expect(isRepresented).toBe(true);
  });

  test("No duplicate states in either data set", () =>{
    //use array of states
    noDuplicates = true;
    newStateArray = [];
    lifeExpect.forEach(function(currentValue,index){
      if (newStateArray.includes(lifeExpect[index].state) == false){
        newStateArray.push(lifeExpect[index].state);
        //console.log(lifeExpect[index].state);
      }
      else{
        noDuplicates = false;
      }
    });
    newStateArray2 = [];
    election.forEach(function(currentValue,index){
      if (newStateArray2.includes(election[index].state) == false){
        newStateArray2.push(election[index].state);
        //console.log(lifeExpect[index].state);
      }
      else{
        noDuplicates = false;
      }
    });
    expect(noDuplicates).toBe(true);
  });
});

describe('checking data completeness', () => { //no places represented that aren't states?
  test("All states (and only states) represented in life expectancy data", () =>{ //the test for this is basically the same as the one above...
    //use array of states
    complete = true;
    newStateArray = [];
    lifeExpect.forEach(function(currentValue,index){
      if (states.includes(lifeExpect[index].state)){
        newStateArray.push(lifeExpect[index].state);
      }
      else{
        complete = false;
      }
    });
    if(newStateArray.length != states.length){
      complete = false;
    }
    expect(complete).toBe(true);
  });

  test("All states (so only states + US total) represented in election data", () =>{
    //use array of states
    complete = true;
    newStateArray = [];
    for(let i = 1; i < election.length; i ++){
      if (states.includes(election[i].state)){
        newStateArray.push(election[i].state);
      }
      else{
        complete = false;
      }
    }
    // election.forEach(function(currentValue,index){
    //   if (states.includes(election[index].state)){
    //     newStateArray.push(election[index].state);
    //   }
    //   else{
    //     complete = false;
    //   }
    // });
    if(newStateArray.length != states.length){
      complete = false;
    }
    expect(complete).toBe(true);
  });

  test("All states should have election result data", () =>{
    complete = true;
    election.forEach(function(currentValue,index){
      if(election[index].result == ""){
        complete = false;
      }
    });
    expect(complete).toBe(true);
  });

  test("All states should have election vote data for democratic, republican, and other", () =>{
    complete = true;
    election.forEach(function(currentValue,index){
      if(election[index].Dvotes == "" || election[index].Rvotes == "" || election[index].Ovotes == ""){
        complete = false;
      }
    });
    expect(complete).toBe(true);
  });

  test("All states should have election percentage data for democratic, republican, and other", () =>{
    complete = true;
    election.forEach(function(currentValue,index){
      if(election[index].Dpercent == "" || election[index].Rpercent == "" || election[index].Opercent == ""){
        complete = false;
      }
    });
    expect(complete).toBe(true);
  });
});
