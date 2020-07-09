function TreeNode(data, left, right) {
    this.data = data||0;
    this.left = left || undefined;
    this.right = right || undefined;
}

function treesearch_depthfirst(tree) {
    stack = []
    retlist = []
    stack.push(tree);
    while (stack.length > 0) {
        node = stack.pop();

        console.log(node.data);
        retlist.push(node);
        l = node.left;
        r = node.right;
        if (r != undefined) {
            stack.push(r);
        }
        if (l != undefined) {
            stack.push(l);
        }
    }
    return retlist;
}

node1 = new TreeNode(1);
node2 = new TreeNode(2);
node3 = new TreeNode(3);
node4 = new TreeNode(4);
node5 = new TreeNode(5);
node6 = new TreeNode(6);
node7 = new TreeNode(7);

tree = node4;
tree.left = node2;
tree.right = node6;
tree.left.left = node1;
tree.left.right = node3;
tree.right.left = node5;
tree.right.right = node7;

retlist = treesearch_depthfirst(node4);

console.log(retlist);
