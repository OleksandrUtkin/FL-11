function reverseNumber(value) {
	var tmp = 0, flag = 0 > value;
	flag && (value *= -1);
	while (value > 0) {
	tmp *= 10;
	tmp += value % 10;
	value = parseInt(value / 10);
	}
	return flag ? -tmp : tmp;
}
reverseNumber(-4654)