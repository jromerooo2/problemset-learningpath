class solution{
    public bool validPalindrome(String s){
        s = s.replace([^a-zA-Z0-9], "").toLowerCase();

        StringByBuilder sb = new StringByBuilder(s);
        return s.equals(sb.reverse().toString());) 

    } 
}