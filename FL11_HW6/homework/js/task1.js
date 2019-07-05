const ax = +prompt('Please, input numeric value ax', '');
const ay = +prompt('Please, input numeric value ay', '');
const bx = +prompt('Please, input numeric value bx', '');
const by = +prompt('Please, input numeric value by', '');
const cx = +prompt('Please, input numeric value cx', '');
const cy = +prompt('Please, input numeric value cy', '');
if (ax===bx && ay===by) {
	console.log('A(ax,ay) with B(bx,by) not a line, please, try again')
} else if (!isFinite(ax) || !isFinite(ay) || !isFinite(bx) || !isFinite(by) || !isFinite(cx) || !isFinite(cy) ) {
	console.log('please, try again with numbers')
} else {
	const magicNumber = 2;
	let xc = (ax+bx)/magicNumber;
	let yc = (ay+by)/magicNumber;
	console.log (xc===cx && yc===cy)
}


