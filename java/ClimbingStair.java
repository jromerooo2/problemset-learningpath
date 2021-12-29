import java.util.*;

class Solution {
    public static void main(String[] args) {
        int n = 6;

        System.out.println(climbStairs(n));
    }
    public static int climbStairs(int n) {
        int res = 0;
        if(n == 1 || n == 2 || n == 0){
            return n;
        }

        int a = 1;
        int b = 2;
        for(int i = 2; i < n; i++){
            res = a + b;
            a = b;
            b = res;
        }

        return res;
    }
}