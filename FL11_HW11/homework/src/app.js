let rootNode = document.getElementById('root');
const addAction = document.querySelector('.btn_add_action'),
	sectionTasks = document.querySelector('.section_tasks');
function addNewTask (){
	if (document.querySelectorAll('.task_div').length < 10) {
		if (document.querySelector('.input_add_action').value !== '') {
			const addToTaskDiv = document.createElement('div');
			addToTaskDiv.className = 'task_div'
			sectionTasks.insertBefore(addToTaskDiv, sectionTasks.firstChild);
			const addTaskDelEditDiv = document.createElement('div');
			addTaskDelEditDiv.className = 'task_del_edit_div';
			document.querySelector('.task_div').insertBefore(addTaskDelEditDiv, 
				document.querySelector('.task_div').firstChild);
			const addEditTask = document.createElement('div');
			addEditTask.className = 'edit_task';
			document.querySelector('.task_del_edit_div').insertBefore(addEditTask, 
				document.querySelector('.task_del_edit_div').firstChild)
			const addInputCheckTask = document.createElement('input');
			addInputCheckTask.className = 'input_check_task';
			addInputCheckTask.type = 'checkbox';
			document.querySelector('.edit_task').insertBefore(addInputCheckTask, 
				document.querySelector('.edit_task').firstChild);
			const addTaskValue = document.createElement('p');
			addTaskValue.className = 'task_value';
			addTaskValue.innerHTML = document.querySelector('.input_add_action').value;
			document.querySelector('.edit_task').appendChild(addTaskValue);
			const addEditTaskBtn = document.createElement('button');
			addEditTaskBtn.className = 'edit_task_btn';
			document.querySelector('.edit_task').appendChild(addEditTaskBtn);
			const addMaterialIcons = document.createElement('i');
			addMaterialIcons.className = 'material-icons';
			addMaterialIcons.innerHTML = 'create';
			document.querySelector('.edit_task_btn').insertBefore(addMaterialIcons, 
				document.querySelector('.edit_task_btn').firstChild);
			const addDelTask = document.createElement('button');
			addDelTask.className = 'del_task';
			document.querySelector('.task_del_edit_div').appendChild(addDelTask);
			const addDelMaterialIcons = document.createElement('i');
			addDelMaterialIcons.className = 'material-icons';
			addDelMaterialIcons.innerHTML = 'delete';
			document.querySelector('.del_task').appendChild(addDelMaterialIcons);
			document.querySelector('.input_add_action').value = '';
			document.querySelector('.input_add_action').focus()
		}
	} else {
		const addToMuchTasks = document.createElement('h2');
		addToMuchTasks.className = 'to_much_tasks';
		addToMuchTasks.innerHTML = 'Maximum item per list are created';
		document.querySelector('header').insertBefore(addToMuchTasks, document.querySelector('header').firstChild )
	}	
}
addAction.addEventListener('click', addNewTask)
function editFunc(event) {
	if ( event.target.parentNode.className === 'edit_task_btn' && 
	event.target.closest('.task_div').querySelectorAll('.edit_input').length < 1) {
		const addTaskEditedSaveDiv = document.createElement('div')
		addTaskEditedSaveDiv.className = 'task_edited_save_div';
		this.firstChild.appendChild(addTaskEditedSaveDiv)
		const editInput = document.createElement('input')
		editInput.className = 'edit_input';
		editInput.type = 'text';
		editInput.value = event.target.closest('.edit_task').querySelector('.task_value').innerHTML
		const taskEditedSaveDiv = event.target.closest('.task_div').querySelector('.task_edited_save_div')
		taskEditedSaveDiv.appendChild(editInput, taskEditedSaveDiv.firstChild)
		editInput.focus()
		const editSaveBtn = document.createElement('button')
		editSaveBtn.className = 'edit_save_btn';
		editSaveBtn.type = 'submit'
		taskEditedSaveDiv.appendChild(editSaveBtn)
		const editMaterialIcons = document.createElement('i')
		editMaterialIcons.className = 'material-icons'
		editMaterialIcons.innerHTML = 'save'
		taskEditedSaveDiv.querySelector('.edit_save_btn').appendChild(editMaterialIcons)
	}
}
sectionTasks.addEventListener('click', editFunc)
function saveEditTask (event) {
	if (event.target.parentNode.className === 'edit_save_btn') {
		const TaskDiv = event.target.closest('.task_div');
		TaskDiv.querySelector('.task_value').innerHTML = TaskDiv.querySelector('.edit_input').value;
		TaskDiv.querySelector('.task_edited_save_div').remove()
	}
}
sectionTasks.addEventListener('click', saveEditTask)
function delTask (event) {
	if (event.target.parentNode.className === 'del_task') {
		event.target.closest('.task_div').remove()
	}
}
sectionTasks.addEventListener('click', delTask)
function disabledChbox (event) {
	const inputCheckTask = document.querySelector('.input_check_task');
	if (event.target === inputCheckTask) {
		if (event.target.checked) {
			event.target.setAttribute('disabled', 'disabled')
		}
	}
}
sectionTasks.addEventListener('click', disabledChbox)