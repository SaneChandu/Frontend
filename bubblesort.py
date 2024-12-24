def bubblesort(nums):
    n=len(nums)
    for i in range(n):
        for j in range(0,n-i-1):
            if nums[j]>nums[j+1]:
                nums[j],nums[j+1]=nums[j+1],nums[j]
    return nums

nums=[9,5,7,6,2,4]
sorted_nums=bubblesort(nums)
print(sorted_nums)