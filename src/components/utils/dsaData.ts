import { CategoryTypeEnum, DifficultyTypeEnum } from "@/enum";

export interface IDSADataType {
  id: number;
  name: string;
  category: CategoryTypeEnum;
  videoLink: string;
  leetcodeLink: string;
  solution: string;
  notes: string;
  difficulty: DifficultyTypeEnum;
}

export const headerNameList: string[] = [
  "Id",
  "Name",
  "Category",
  "VideoLink",
  "LeetcodeLink",
  "Difficulty",
  "Solutions",
  "Notes",
];

export const dsaData: IDSADataType[] = [
  {
    id: 1,
    name: "Two Sum",
    category: CategoryTypeEnum.ARRAYS,
    videoLink: "https://youtu.be/KLlXCFG5TnA",
    leetcodeLink: "https://leetcode.com/problems/two-sum/",
    solution: `
    //time = O(n)
    //space = O(n)
    const twoSum = (nums, target) => {
        // Input: nums = [2,7,11,15], target = 9
        const mapObject = new Map();
        for (let i = 0; i < nums.length; i++) {
            temp = target - nums[i];
            if(mapObject.has(temp)){
                return [mapObject.get(temp),i];
           }
           mapObject.set(nums[i],i);
        }
    }
        `,
    notes:
      "use hash map to instantly check for difference value, map will add index of last occurrence of a num, don’t use same element twice",
    difficulty: DifficultyTypeEnum.EASY,
  },
  {
    id: 2,
    name: "Best Time to Buy and Sell Stock",
    category: CategoryTypeEnum.ARRAYS,
    videoLink: "https://youtu.be/1pkOgXD63yU",
    leetcodeLink:
      "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    solution: `
      //time = O(n)
      //space = O(1)
      const bestTimeToBuySell = (nums) => {
          // prices = [7,1,5,3,6,4]
          maximumProfit = 0;
          minPrice = 99999999999
          for (let i = 0; i < prices.length; i++) {
              minPrice = Math.min(minPrice, prices[i]);
              maximumProfit = Math.max(maximumProfit, (prices[i] - minPrice));
          }
          return maximumProfit;
      }
        `,
    notes: "find local min and search for local max, sliding window",
    difficulty: DifficultyTypeEnum.EASY,
  },
  {
    id: 3,
    name: "Contains Duplicate",
    category: CategoryTypeEnum.ARRAYS,
    videoLink: "https://youtu.be/3OamzN90kPg",
    leetcodeLink: "https://leetcode.com/problems/contains-duplicate/",
    notes:
      "hashset to get unique values in array, to check for duplicates easily",
    solution: `
//time = O(n)
//space = O(1)
const ContainsDuplicate = (nums) => {
    // Input: nums = [1,2,3,1]
    const mapObject = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mapObject.has(nums[i])) {
            return true;
        }
        mapObject.set(nums[i],i);
    }
    return false;
}
        `,
    difficulty: DifficultyTypeEnum.EASY,
  },
  {
    id: 4,
    name: "Product of Array Except Self",
    category: CategoryTypeEnum.ARRAYS,
    videoLink: "https://youtu.be/bNvIQI2wAjk",
    leetcodeLink: "https://leetcode.com/problems/product-of-array-except-self/",
    solution: `
    const ProductOfArrayExceptSelf = (nums) => {
      // Input: nums = [1,2,3,4]
      // Output: [24,12,8,6]
      const prefix = []; //[1,2,6,24]
      const postfix = []; //[24,24,12,4] 
      const output = [];
      for (let i = 0; i < nums.length; i++) {
          if (i === 0) {
              prefix.push(nums[i]);
          }
          else {
              prefix.push(prefix[i - 1] * nums[i]);
          }
      }
      for (let j = nums.length - 1; j >= 0; j--) { //3,2,1,0,-1
          if (j === nums.length - 1) {
              postfix.push(nums[j]);
          }
          else {
              postfix.unshift(nums[j] * postfix[0]); //[24,24,12,4]
          }
      }
      for (let k = 0; k < nums.length; k++) {
          if (k === 0) {
              output.push(postfix[k + 1])
              continue;
          }
          if (k === nums.length - 1) {
              output.push(prefix[k - 1])
              continue
          }
          else {
              output.push(prefix[k - 1] * postfix[k + 1]);
          }
  
      }
      return output;
  }
  
      `,
    notes:
      "make two passes, first in-order, second in-reverse, to compute products",
    difficulty: DifficultyTypeEnum.MEDIUM,
  },
  {
    id: 5,
    name: "Maximum Subarray",
    category: CategoryTypeEnum.ARRAYS,
    videoLink: "https://youtu.be/5WZl3MMT0Eg",
    leetcodeLink: "https://leetcode.com/problems/maximum-subarray/",
    solution: `Not Uploaded Yet`,
    notes:
      "pattern: prev subarray cant be negative, dynamic programming: compute max sum for each prefix",
    difficulty: DifficultyTypeEnum.MEDIUM,
  },
  {
    id: 6,
    name: "Maximum Product Subarray",
    category: CategoryTypeEnum.ARRAYS,
    videoLink: "https://youtu.be/lXVy6YWFcRM",
    leetcodeLink: "https://leetcode.com/problems/maximum-product-subarray/",
    solution: `Not Uploaded Yet`,
    notes: "dp: compute max and max-abs-val for each prefix subarr;",
    difficulty: DifficultyTypeEnum.MEDIUM,
  },
  {
    id: 7,
    name: "Find Minimum in Rotated Sorted Array",
    category: CategoryTypeEnum.ARRAYS,
    videoLink: "https://youtu.be/nIVW4P8b1VA",
    leetcodeLink:
      "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    solution: `Not Uploaded Yet`,
    notes:
      "check if half of array is sorted in order to find pivot, arr is guaranteed to be in at most two sorted subarrays",
    difficulty: DifficultyTypeEnum.MEDIUM,
  },
  {
    id: 8,
    name: "Search in Rotated Sorted Array",
    category: CategoryTypeEnum.ARRAYS,
    videoLink: "https://youtu.be/U8XENwh8Oy8",
    leetcodeLink:
      "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    solution: `Not Uploaded Yet`,
    notes:
      "at most two sorted halfs, mid will be apart of left sorted or right sorted, if target is in range of sorted portion then search it, otherwise search other half",
    difficulty: DifficultyTypeEnum.MEDIUM,
  },
  // {
  //   id: 9,
  //   name: "3Sum",
  //   category: CategoryTypeEnum.ARRAYS,
  //   videoLink: "https://youtu.be/jzZsG8n2R9A",
  //   leetcodeLink: "https://leetcode.com/problems/3sum/",
  //   notes:
  //     "sort input, for each first element, find next two where -a = b+c, if a=prevA, skip a, if b=prevB skip b to elim duplicates; to find b,c use two pointers, left/right on remaining list;",
  //   difficulty: DifficultyTypeEnum.MEDIUM,
  // },
  // {
  //   id: 10,
  //   name: "Container With Most Water",
  //   category: CategoryTypeEnum.ARRAYS,
  //   videoLink: "https://youtu.be/UuiTKBwPgAo",
  //   leetcodeLink: "https://leetcode.com/problems/container-with-most-water/",
  //   notes:
  //     "shrinking window, left/right initially at endpoints, shift the pointer with min height;",
  //   difficulty: DifficultyTypeEnum.MEDIUM,
  // },
];
