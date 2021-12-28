class solution{
    public boolean validPalindrome(String s){
        s = s.replace([^a-zA-Z0-9], "").toLowerCase();

        StringBuilder sb = new StringBuilder(s);
        return s.equals(sb.reverse().toString()); 

    } 
}