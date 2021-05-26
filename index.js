function findMatching(array, name){
    return (array.filter(function(cb){return cb === name || cb === name.toLowerCase()}))
}

function fuzzyMatch(array, letters){
    return (array.filter(function(cb){return cb.startsWith(letters, 0)}))
}

function matchName(obj, nameElement){
    return (obj.filter(function(cb){return cb === nameElement}))
}

function matchName(obj, nameElement){
    return obj.filter(element => element.name === nameElement)
}