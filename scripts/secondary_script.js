let set = new Set();

function input(str){
    let arr = [];
    let arr_str = str.split(' ');
    for(el of arr_str){
        if(set.has(el)){
            arr.push(el);
        }
        set.add(el);
    }
    if(arr.length !== 0){
        console.log(arr.toString());
        return true;
    }
    return true;
}


