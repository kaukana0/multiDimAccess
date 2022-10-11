import * as multiDimAccess from "./multiDimAccess.mjs"

function testCalcOrdinalValence() {
    const v = multiDimAccess.calcOrdinalValence([2,3,2])
    return v[0] === 6 && v[1] === 2 && v[2] === 1
}

function testGetIndex() {
    const v = multiDimAccess.calcOrdinalValence([2,3,2])
    return multiDimAccess.getIndex(v,[1,2,1]) === 11
}

function testIterate() {
    multiDimAccess.iterate([2,3,2], (i,c)=>console.log(i,c))
    // visual confirmation...
}

export function testSuite() {
    console.log("multiDimAccess test1: ", testCalcOrdinalValence())
    console.log("multiDimAccess test2: ", testGetIndex())
    console.log("multiDimAccess test3: ", testIterate())
}
