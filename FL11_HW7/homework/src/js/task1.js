let user = {
	mortal: {
		email: 'user@gmail.com',
		password: 'UserPass'
	},
	admin: {
		email: 'admin@gmail.com',
		password: 'AdminPass'
	}
}
const email = prompt('Please, enter your email', '');
if (email === null || email === '') {
	alert('Canceled')
} else if (email.length < 6) {
	alert(`I don't know any emails having name length less than 6 symbols`)
} else if (email === user['mortal'].email || email === user['admin'].email) {
	const password = prompt('Please, enter your password', '');
	if (password === null || password === '') {
		alert('Canceled.')
	} else if (email === user['mortal'].email && password === user['mortal'].password || 
		email === user['admin'].email && password === user['admin'].password ) {
		const changePass = confirm('Do you want to change your password?');
		if (changePass === false) {
			alert('You have failed the change.')
		} else if (changePass === true) {
			const oldPassword = prompt('Please, write the old password', '');
			if (oldPassword === null || oldPassword === '') {
			alert('Canceled.');
			} else if (email === user['mortal'].email && oldPassword === user['mortal'].password || 
				email === user['admin'].email && oldPassword === user['admin'].password ) {
				const newPassword = prompt('Please, enter new password', '');
				if (newPassword.length < 5) {
					alert('It’s too short password. Sorry.')
				} else {
					const newPasswordConfirm = prompt('Please, enter new password again', '');
					if ( newPasswordConfirm === newPassword) {
						alert('You have successfully changed your password.')
					} else {
						alert('You wrote the wrong password.')
					}
				} 
			} else { 
				alert('Wrong password') 
			}
		}
	} else { 
		alert('Wrong password') 
	}
} else { 
	alert('I don’t know you') 
}

