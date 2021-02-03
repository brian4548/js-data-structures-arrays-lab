// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function appendDriver(name){
    let append = [...drivers, name]
    return append
}

function prependDriver(name){
    let prepend = [name, ...drivers]
    return prepend
}

function removeLastDriver(){
    let newD = drivers.slice(0, drivers.length - 1)
    return newD
}

function removeFirstDriver(){
    let newA = drivers.slice(1)
    return newA
}