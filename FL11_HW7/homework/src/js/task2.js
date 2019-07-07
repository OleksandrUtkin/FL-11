let totalPrize = 0,
	possiblePrize = 100,
	randomTo = 8,
	attempts = 3,
	magicnumber2 =2,
	magicnumber3 =3,
	magicnumber4 =4,
	magicnumber8 =8,
	magicnumber100 =100,
	letsPlay = confirm('Do you want to play a game?');
	if (letsPlay === false) {
		alert('You did not become a billionaire, but can.')
	}
while (letsPlay === true) {
	let randomFrom = 0,
		random = Math.floor(Math.random() * (randomTo - randomFrom + 1)) + randomFrom,
		yourNumber = +prompt(`Choose a roulette pocket number from 0 to ${randomTo} 
		Attempts left: ${attempts} 
		Total prize:  ${totalPrize}$ 
		Possible prize on current attempt: ${possiblePrize}$`)
		if (yourNumber === random) {
			attempts = magicnumber3;
			totalPrize += possiblePrize;
			randomTo +=magicnumber4;
			letsPlay = confirm(`Congratulation, you won!   
			Your prize is: ${possiblePrize}$. Do you want to continue?`);
			possiblePrize *=magicnumber2;
			if (letsPlay === false) {
				alert(`Thank you for your participation. Your prize is: ${totalPrize}$`)
				letsPlay = confirm('Want to play again?')
				if(letsPlay === true) {
					totalPrize = 0,
					possiblePrize = magicnumber100,
					randomTo = magicnumber8,
					attempts = magicnumber3
				}
			}
		} else {
			let possiblePrize2 = possiblePrize;
			while(yourNumber !== random) {
				possiblePrize2 /=magicnumber2;	
				attempts--; 
				if (attempts === 0) {
					letsPlay = confirm('You lose, want to play again?');
					totalPrize = 0,
					possiblePrize = magicnumber100,
					randomTo = magicnumber8,
					attempts = magicnumber3
					break
				} else {
					yourNumber = +prompt(`Choose a roulette pocket number from 0 to ${randomTo} 
					Attempts left: ${attempts} 
					Total prize:  ${totalPrize}$ 
					Possible prize on current attempt: ${possiblePrize2}$`) 
				}
			}
			if (yourNumber === random) {
				attempts = magicnumber3;
				totalPrize += possiblePrize2;
				randomTo +=magicnumber4;
				letsPlay = confirm(`Congratulation, you won!   
				Your prize is: ${possiblePrize2}$. Do you want to continue?`);
				possiblePrize *=magicnumber2;
				if (letsPlay === false) {
					alert(`Thank you for your participation. Your prize is: ${totalPrize}$`)
					letsPlay = confirm('Want to play again?')
					if(letsPlay === true) {
						totalPrize = 0,
						possiblePrize = magicnumber100,
						randomTo = magicnumber8,
						attempts = magicnumber3
					}
				}
			}
		}
} 

	

