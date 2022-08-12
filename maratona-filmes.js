let duracoes = [1.90, 1.04, 1.25, 2.5, 1.75].sort()
let leftIndex = 0
let rightIndex = duracoes.length - 1
let totalGroups = 0

do {
    if (duracoes[rightIndex] > 1.99) {
        totalGroups++
    }
    else if (duracoes[rightIndex] <= 1.99) {
        if (duracoes[rightIndex] + duracoes[leftIndex] <= 3) {
            leftIndex++
        }
        totalGroups++
    }
    rightIndex--
} while (rightIndex >= leftIndex)