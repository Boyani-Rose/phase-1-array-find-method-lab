// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  function superbowlWin(record) {
    const wins = record.find((entry) => entry.result ==='W' )
        return wins?wins.year : undefined
       
  }


console.log (wins)
