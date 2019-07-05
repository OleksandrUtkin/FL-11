const a = +prompt('Please, enter value of triangle side a', '');
const b = +prompt('Please, enter value of triangle side b', '');
const c = +prompt('Please, enter value of triangle side c', '');
if (!isFinite(a) || !isFinite(b) || !isFinite(c) ) {
	alert('Please, enter only numeric value')
} else if (a+b < c || a+c < b || c+b < a || a<=0 || b<=0 || c<=0) {
	console.log('Triangle doesn’t exist')
} else if (a===b && b===c) {
	console.log('type of triangle: equivalent')
} else if (a===b || b===c || c===a) {
	console.log('type of triangle: isosceles')
} else { 
	console.log('type of triangle: normal')
}