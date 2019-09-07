//my solution
function stat(strg) {
if (strg.match(/^[-+]?\d+([Ee][+-]?\d+)?$/i)) { return ''}
   else {
   

   const newStrg = strg.split(',')
                       .map(x => x.split('|')
                       .map(y => y.trim()*1))
    
   const secondsArray = []
      
   let h = newStrg.map(h => h[0] * 3600)
   let m = newStrg.map(m => m[1] * 60)
   let s = newStrg.map(s => s[2])
   
    var number = 0;
        while (number < newStrg.length) { 
          secondsArray.push(h[number] + m[number] + s[number]);       
          number++;           
        }  
   
    let maxValue = Math.max(...secondsArray)
    let minValue = Math.min(...secondsArray)

    let rangeValue = maxValue - minValue
    let averageValue = secondsArray.reduce((a,b) => a + b) / secondsArray.length
    

    let median = (values) => {
                          if(values.length ===0) return 0;

                          values.sort(function(a,b){
                            return a-b;
                          });

                          var half = Math.floor(values.length / 2);

                          if (values.length % 2)
                            return values[half];

                          return (values[half - 1] + values[half]) / 2;
                        }
    let medianValue = median(secondsArray)
   
 
    const toTimeString = function (seconds) {
        var date = new Date(seconds * 1000);
        var hh = date.getUTCHours();
        var mm = date.getUTCMinutes();
        var ss = date.getSeconds();

        if (hh < 10) {hh = "0"+hh;}
        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
      
        var t = hh+"|"+mm+"|"+ss;
        return t;
    }

    const Range = "Range: " + toTimeString(rangeValue)
    const Average = " Average: " + toTimeString(averageValue)
    const Median = " Median: " + toTimeString(medianValue)
    debugger
   return Range + Average + Median
   }
}

//best solutions

function stat(strg) {
   if (strg === '') {
      return strg;
   }
   const teamStats = new teamStatistics(strg);
   return 'Range: ' + teamStats.getRange() + ' Average: ' + teamStats.getAverage() + ' Median: ' + teamStats.getMedian();
}

class teamStatistics {
   constructor(teamScores) {
      this.teamScoresInArray = teamScores.split(', ');
      this.teamTimesInSeconds = [];

      for (let singlePerson of this.teamScoresInArray) {
         const hoursToSeconds = Number(singlePerson.split('|')[0] * 60 * 60);
         const minutesToSeconds = Number(singlePerson.split('|')[1] * 60);
         const seconds = Number(singlePerson.split('|')[2]);
         this.teamTimesInSeconds.push(hoursToSeconds + minutesToSeconds + seconds);
      }
   }

   getFormatedTime(timeInSeconds) {
      const date = new Date(null);
      date.setSeconds(timeInSeconds);

      return date.toISOString().substr(11, 8).replace(/:\s*/g, '|');
   }

   getAverage() {
      let arraySum = 0;
      let average = 0;
      const arrayLength = this.teamTimesInSeconds.length;

      for (let number of this.teamTimesInSeconds) {
         arraySum += number;
      }

      return this.getFormatedTime(arraySum / arrayLength);
   }

   getMedian() {
      this.teamTimesInSeconds.sort(function (a, b) { return a - b; });

      var half = Math.floor(this.teamTimesInSeconds.length / 2);

      if (this.teamTimesInSeconds.length % 2) {
         return this.getFormatedTime(this.teamTimesInSeconds[half]);
      } else {
         return this.getFormatedTime((this.teamTimesInSeconds[half - 1] + this.teamTimesInSeconds[half]) / 2.0);
      }
   }

   getRange() {
      const biggest = Math.max.apply(Math, this.teamTimesInSeconds);
      const smallest = Math.min.apply(Math, this.teamTimesInSeconds);
      return this.getFormatedTime(biggest - smallest);
   }

}

function stat(strg) {
   const addZero = s => ('0' + s).slice(-2);
   const getStr = n => addZero(Math.floor(n / 3600)) + '|' + addZero(Math.floor(n % 3600 / 60)) + '|' + addZero(n % 60);
   if (!strg) return '';
   var arr = strg.split(', ')
      .map(a => a.replace(/(\d+)\|(\d+)\|(\d+)/, function (a, b, c, d) { return b * 3600 + c * 60 + d * 1 })).sort((a, b) => a * 1 - b * 1);
   var len = arr.length;
   var range = arr[len - 1] - arr[0];
   var average = Math.floor(arr.reduce((s, v) => s + v * 1, 0) / len);
   var median = len % 2 === 1 ? arr[(len - 1) / 2] : Math.floor((arr[len / 2] * 1 + arr[len / 2 - 1] * 1) / 2);
   return 'Range: ' + getStr(range) + ' Average: ' + getStr(average) + ' Median: ' + getStr(median);
}