class Solution {
    public static void main(String[] args) {
        int[] nums = {1,5,2,10};

        System.out.println(maximumDifference(nums));
    }
    public static int maximumDifference(int[] nums) {
        int min = Integer.MAX_VALUE;
        int max = 0;

        for(int i =0; i< nums.length; i++){
            if(nums[i] < min){
                min = nums[i];
            }else{
                if(nums[i] - min > max){
                    max = nums[i] - min;
                }

            }
        }
        return max > 0 ? max : -1;
    }
}