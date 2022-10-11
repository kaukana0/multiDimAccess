// see docu.md


export function calcOrdinalValence(maximals) {
    let c = 1   // the rightmost number alternates with every single tick
    let retVal = [c]
    for(let i=maximals.length-1; i>0; i--) {
        c*=maximals[i]
        retVal.push(c)
    }
    retVal.reverse()
    return retVal
}


export function getIndex(valence, coeff) {
    console.assert(valence.length === coeff.length)
    let retVal=0
    for(let i=0;i<coeff.length;i++) {
        retVal+=valence[i]*coeff[i]
    }
    return retVal
}


// disaggregate given number according to given valencies
export function getCoefficients(valence, number) {
    let retVal = Array.from({length: valence.length}, () => 0)
    let n=number
    let i=0
    while(true) {
        if(n-valence[i] >= 0) {
            n-=valence[i]
            retVal[i]+=1
        } else {
            if(i>valence.length) {break}
            i++
        }
    }
    return retVal
}


export function cartesianProduct(someNumericArray) {
    return someNumericArray.reduce((a,b) => a*b)
}


export function iterate(maximals, callback) {
    console.assert(callback)
    const valence = calcOrdinalValence(maximals)
    const len = cartesianProduct(maximals)
    for(let i=0; i<len; i++) {
        callback(i, getCoefficients(valence,i))
    }
}
