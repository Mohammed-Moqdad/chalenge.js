function findMajority(arr)
{   
    let n = arr.length;
    let bool= true;
    let bool2= false;
    for (let i = 0; i < array.length; i++) {
        if ((-1000000000) <= arr[i] <= 1000000000) {
            continue;
        }else{
            bool=false;
            break;
        }  
    }
    if(bool && 1 <= n <= 5*10000){
        for(let j = 0; j < n; j++) 
        {
            let count = 0;
            for(let k = 0; k < n; k++) 
                {
                if (arr[j] === arr[k]){
                    count++;
                }
                if (count>n/2) {
                    console.log("the majority elemen is"+arr[j]);
                    bool2=false;
                    break;
                }
            }
            if (bool2) {
                break;
            }
        }
    }else{
        console.log("doesn't meet the recourment")
    }
}
  
