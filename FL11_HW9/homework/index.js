// Task 0
function getNumbers(string) {
	let array = string.split(''),
		numberArray = [];
	array.forEach(function(elem){
		let number = Number(elem);
		if (isFinite(number)) {
			numberArray.push(number);
		}		
	})
	return numberArray
}
// Task 1
function findTypes() {
	let obj = {};
	for (let i=0; i<arguments.length; i++){
		switch(false) {
			case typeof arguments[i] in obj:
				obj[typeof arguments[i]]=1;
				break
			default	:
				obj[typeof arguments[i]]++
		}
	}
	return obj
}
findTypes()
// Task 2
function executeforEach (array, callback){
	for (let i=0; i<array.length; i++) {
		array[i] = callback(array[i])
	}
	return array
}
executeforEach([1,2,3], function(el) { 
	console.log(el) 
})
//Task 3
function mapArray (array, callback) {
	let arr = array;
	arr = executeforEach(array, callback)
	return arr
}
mapArray([2, 5, 8], function(el) { 
	return el + 3 
}) // returns [5, 8, 11]
console.log(mapArray([2, 5, 8], function(el) { 
	return el + 3 
}))
//Task 4
function filterArray (array, callme) {
    let arr = [];
    executeforEach(array, function(arg) {
        if (callme(arg)) {
            arr.push(arg);
        }
    });
    return arr;
}
console.log(filterArray([2, 5, 8], function(el) { 
	return el > 3 
}))

filterArray([2, 5, 8], function(el) { 
	return el > 3 
}) // returns [5, 8]
//Task 5
showFormattedDate(new Date('2019-01-27T01:10:00')) 
function showFormattedDate (date) {
	let formattedData = date.toDateString().split(' ').slice(1).join(' ')
	formattedData.getDay
	return `Date: ${formattedData}`
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')))
// Task 6
function canConvertToDate (datestring) { 
	if (isFinite(Date.parse(datestring))) {
		return true
	} else {
		return false
	}
}
console.log(canConvertToDate('2016-13-18T00:00:00'))
// Task 7
function daysBetween (date1, date2) {
	let days = Math.round((Date.parse(date2)-Date.parse(date1))/(1000*60*60*24))
	return days
}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))
// Task 8
function getAmountOfAdultPeople(people) {
	const dateNow = new Date();
	let years = [];
	for (let i=0; i<people.length; i++) {
		let yearsNow = daysBetween(people[i][" birthday "], dateNow)/365;
		if (yearsNow > 18) {
			years.push(yearsNow)
		}	
	}
	return years.length
}
let data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    " birthday ": '2016-03-18T00:00:00',
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    " birthday ": '1991-02-11T00:00:00',
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    " birthday ": '1984-04-17T00:00:00',
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    " birthday ": '1994-04-17T00:00:00',
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]
getAmountOfAdultPeople(data)
// Task 9
function keys(keys) {
	let keyArr =[]
	for (let key in keys) {
		keyArr.push(key)
	}
	return keyArr
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [“keyOne”, “keyTwo”, “keyThree”]
// Task 10 
function values(obj) {
	let arr = []
	for (let key in obj) {
		arr.push(obj[key])
	}
	return arr
}
values({keyOne: 1, keyTwo: 2, keyThree: 3})
