//Given the root of a binary tree, return the preorder traversal of its nodes' values.

//time complexity O(n) cause we are iterating through each node on the tree
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        //recursion
            return dfs(root, new ArrayList());   
    }
    //defining helper function
    private List<Integer> dfs(TreeNode root, List<Integer> list){
            //base case for root only having one node
            if(root == null) return list;
            //adding root to list
            list.add(root.val);
            //recursion with left node
            list = dfs(root.left, list);
            //recursion with right node
            return dfs(root.right, list);
        
    }
}