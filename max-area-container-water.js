/**
 * 
 * Para definir as paredes, devemos utilizar o maior valor do array (primeira parede)
 * com o segundo maior valor do array (segunda parede);
 * 
 * Porem a (segunda parede) so eh definida a partir do indice mais distante da (primeira parede)
 * 
 * A contagem do indice sera a partir da parede menor
 * 
 * Exemplo.:
 * 
 * [1, 8, 2, 3, 7]
 * 
 *  Primeira parede eh igual 8 com indice 1
 *  Segunda parede eh igual 7 com indice 4
 * 
 *  largura eh igual subtracao dos indices => 4 - 1 = 3
 * 
 *  Area maxima eh igual 8 * 3 = 24
 * 
 *  min(a, b) * (index(b) - index(a))
 * 
 *  1 * (1 - 0) = 1
 *  1 * (2 - 0) = 2
 *  1 * (3 - 0) = 3
 */

/*const maxArea = function(heights) {
    const heightsCopy1 = Array.from(heights)
    const heightsSort = heightsCopy1.sort().reverse()
    const biggerWall = heightsSort[0]
    
    const heightsCopy2 = Array.from(heights)

    let biggerIndex = 0
    let biggerHeight = 0;
    heightsCopy2.sort().forEach((height, index) => {
        if (height !== biggerWall && index > biggerIndex) {
            biggerIndex = index
            biggerHeight = height
        }
    })

    const smallerWall = biggerHeight

    const indexBigger = heights.indexOf(biggerWall)
    const indexSmaller = heights.indexOf(smallerWall)
    let widthIndex = 0
    if (indexSmaller > indexBigger) {
        widthIndex = indexSmaller - indexBigger
    } else {
        widthIndex = indexBigger - indexSmaller
    }   
    const maxArea = smallerWall * widthIndex

    return maxArea
}*/


const maxArea = function(heights) { 
    let maxArea = 0
    for (let indexA = 0; indexA <= heights.length; indexA++) {
        for (let indexB = indexA + 1; indexB < heights.length; indexB++) {
            const a = heights[indexA]
            const b = heights[indexB]
            const area = Math.min(a, b) * (indexB - indexA)
            if (area > maxArea) {
                maxArea = area
            }
        }
    }
    return maxArea
}

const heights = [1, 8, 6, 2, 5, 4, 3, 8, 7]
//const heights = [7, 1, 2, 3, 9]
//const heights = [6, 9, 3, 4, 5, 8]
//const heights = [1,1]
//const heights = []



const ouput = maxArea(heights)

ouput