const ax = +prompt('Please, input numeric value ax', '');
const ay = +prompt('Please, input numeric value ay', '');
const bx = +prompt('Please, input numeric value bx', '');
const by = +prompt('Please, input numeric value by', '');
const cx = +prompt('Please, input numeric value cx', '');
const cy = +prompt('Please, input numeric value cy', '');
let xc = (ax+bx)/2 ;
let yc = (ay+by)/2 ;
if (xc===cx && yc===cy) {
	console.log(true) 
} else {
	console.log(false)
}
