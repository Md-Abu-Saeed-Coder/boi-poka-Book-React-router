const getstoredReadList=()=>{
    const storedListStr =localStorage.getItem('read-list')
    if(storedListStr){
        const storedList=JSON.parse(storedListStr);
        return storedList
    }else{
        return[]
    }
}
const addToredReadList=()=>{
    const storedList=getstoredReadList()
    if(storedList.includes(id)){
        console.log(id,'already exists')
    }else{
        storedList.push(id)
        const storedListStr=JSON.stringify(storedList)
        localStorage.setItem("read-list",storedListStr)
    }

}

export {addToredReadList}