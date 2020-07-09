function TreeNode(data, left, right) {
    this.data = data || 0;
    this.left = left || undefined;
    this.right = right || undefined;
}

function treesearch_widthfirst(tree) {
    queue = [];
    retlist = [];
    queue.push(tree);
    while (queue.length > 0) {
        node = queue.shift();
        console.log(node.data);
        retlist.push(node);
        l = node.left;
        r = node.right;
        if (l != undefined) {
            queue.push(l);
        }
        if (r != undefined) {
            queue.push(r);
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

retlist = treesearch_widthfirst(node4);
console.log(retlist);
