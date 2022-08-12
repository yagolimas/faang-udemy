const maxArea = function(heights) { 
    let maxArea = 0, indexA = 0, indexB = heights.length - 1
    while (indexA < indexB) {
        const height = Math.min(heights[indexA], heights[indexB])
        const width = (indexB - indexA)
        const area = height * width
        if (area > maxArea) {
            maxArea = area
        }
        if (heights[indexA] <= heights[indexB]) {
            indexA++
        } else {
            indexB--
        }
    }
    return maxArea
}

const heights = [ 1, 8, 100, 2, 100, 4, 8, 3, 7 ]
//const heights = [2, 3, 4, 5, 18, 17, 6]
//const heights = [1, 8, 6, 2, 5, 4, 3, 8, 7]
//const heights = [7, 1, 2, 3, 9]
//const heights = [6, 9, 3, 4, 5, 8]
//const heights = [1,1]
//const heights = []



const output = maxArea(heights)

output