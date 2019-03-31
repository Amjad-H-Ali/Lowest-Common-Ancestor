// Function converts array to tree using reccursion

const arrayToTree = (array, indx = 0) => {

	// If indx is out of range
	if(indx > array.length) return;

	// Indices for left and right children nodes
	const left  = (indx * 2) + 1,
		  right = left + 1;
		   
	// Using reccursion, returns object with values in tree form
	return {
		value: array[indx],

		left: arrayToTree(array, left),

		right: arrayToTree(array, right)
	}	  

}


