// function deleteNth(arr,n){
//   // ...
//   let counter = 0
//   let newArr = []
  
//   for (let i = 0; i < arr.length; i++)
//     {
//       for (let j = 0; j < arr.length; j++)
//         {
//           if (arr[i] == arr[j] && counter < n && newArr.indexOf(arr[i]) == -1)
//             {
//               newArr.push(arr[j])
//               counter++
//             }
//           counter = 0
//         } 
//     }
//   return newArr
// }


// deleteNth([20,37,20,21], 1)

// function sumIntervals(intervals) {
  
// let intSrt = intervals.sort(function(a, b){return a[0] - b[0]});
//   console.log(intSrt)
//   let total = 0
//   for (let i = 0; i < intSrt.length - 1; i++){
//       if (intSrt[i][1] >= intSrt[i+1][0] && intSrt[i][1] <= intSrt[i+1][1]){
//           intSrt[i][1] = intSrt[i+1][1];
//         console.log("updated")
//           intSrt.splice(i+1, 1);
//         i--
//         }
  //     else if (intSrt[i][0] <= intSrt[i+1][0] && intSrt[i][1] >= intSrt[i+1][1]){
  //       console.log("useless")
  //         intSrt.splice(i+1, 1)
  //       i--
  //       }
  //   }
  // for (let j = 0; j < intSrt.length; j++){
  //     total += intSrt[j][1] - intSrt[j][0]
  //   }
  // console.log(intSrt)
  // console.log(total)

//   let inter = 0;
//   if (intervals.length == 1)
//       return intervals[0][1] - intervals[0][0];
  
//   for (i = 0; i <= intervals.length; i++){
//       let intervals2 = hokyPoky(intervals);
//       intervals = intervals2;
//     }
//   for (let j = 0; j < intervals.length; j++)
//       inter += intervals[j][1] - intervals[j][0];
//   return inter;
// }

// function hokyPoky(interval)
// {
//     for (let i = 1; i < interval.length; i++){
//         if (interval[i][0] < interval[0][0] && interval[i][1] > interval[0][0])
//             interval[0][0] = interval[i][0];
        
//         else if (interval[i][1] > interval[0][1] && interval[i][0] < interval[0][1])
//             interval[0][1] = interval[i][1];
//       }
//   for (let j = 0; j <= interval.length; j++){
//       for (let k = 1; k < interval.length; k++){
//           if (interval[0][0] <= interval[k][0] && interval[0][1] >= interval[k][1])
//             interval.splice(k, 1);
//         }
// //     let holder = interval[0];
// //     interval[0] = interval[interval.length-1]
// //     interval.push(holder)
//       interval.push(interval.shift());
//     }
//   return interval;
 // }
    
// sumIntervals([[1,12],[7, 12],[7, 13],[3, 5],[1, 4],[-444, -44], [-123, -54],[12, 22]])

// function movie_times(open, close, length) {
//   let showTimes = [[open, 0]]
//   let timeBuilder = [open, 0]
//   if (close < open){
//     close = close + 24
//   }
//   while (showTimes[showTimes.length-1][0] < close){
//     console.log(showTimes)
//     console.log(timeBuilder)
//     timeBuilder[1] += length + 15
//     while (timeBuilder[1] > 59) {
//       timeBuilder[1] -= 60
//       timeBuilder[0]++
//     }
//     if (timeBuilder[0] > 23){
//       timeBuilder[0] -= 24
//     }
//     if (timeBuilder[0] >= close)
//       console.log(showTimes)
//     else 
//       showTimes.push(timeBuilder)
//   } 
//   console.log(showTimes)
// }

// movie_times(12, 23, 60)

function onlyDigit(val)
{
  let valObj = val.toString().split('')
  console.log(valObj)
  for (let i = 0; i < valObj.length; i++)
  {
    console.log("First WTF")
    let count = 0
    for (let j = 0; j < valObj.length; j++)
    {
      console.log('WTF')
      if (valObj[i] == valObj[j])
      {
        count++
        console.log(count)
      }
    }
    if (count > 1)
    {
      console.log(false)
    }
  }
  console.log(true)
}
onlyDigit(11345)