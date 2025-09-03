
export default ()=>{
    const seed = parseInt(random(0,10));
    const arr = new Array(seed);
    const final = arr.reduce((ar,current,idx)=>{
        ar.push({
            title: "Title"
        })
    },[])
    return arr;
}