const numsArray = [1, 2, 3];
const targetToFind = 4;

const findTwoSum = function(nums, target) {

    const numsMap = new Map()

    for (index in nums) {
        const chave = target - nums[index]
        if (numsMap.has(chave)) {
            return [numsMap.get(chave), index]
        } else {
            numsMap.set(nums[index], index)
        }
    }
    return null
}

const output = findTwoSum(numsArray, targetToFind)

output

