class Solution {
    public int fib(int n) {
        // only two variables for storing f(n-2),f(n-1)
        //c = a+b
        int a= 0; int b=1, num=0;
        for(int i = 0; i<n; i++){
            a =b;
            b=num;
            num=a+b;
        }
        return num;
    }
}