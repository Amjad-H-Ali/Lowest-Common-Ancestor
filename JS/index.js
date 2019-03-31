
console.log("Lowest Common Ancestor!");

const node = arrayToTree([3,11,5,2,6,17,4,7,9,13,21,14,8,19,1]);

/*


                                                      //                  3
	                                                 //            /             \
	                                                //       11                          5
                                                   //     /      \                   /       \
                                                  //   2            6            17            4
                                                 //  /   \        /   \         /  \         /   \
                                                //  7     9     13     21     14     8     19     1 		                            
*/

console.log(node);


let LCA = (root, n1, n2) => {
	if (!root) return null;

	if (root.value === n1 || root.value === n2) return root.value;

	let left  = LCA(root.left, n1, n2);
	let right = LCA(root.right,n1, n2);

	if(left && right) return root.value;

	return left ? left : right;
}

console.log(LCA(node, 19, 21)); // 3

console.log(LCA(node, 2, 9));   // 2

console.log(LCA(node, 14, 8));  // 17

console.log(LCA(node, 6, 2));   // 11

console.log(LCA(node, 3, 5));   // 3 

console.log(LCA(node, 19, 1));  //4


