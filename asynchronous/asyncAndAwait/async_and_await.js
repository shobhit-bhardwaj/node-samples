console.log('Start Program');

async function displayCommits() {
	try {
		const user = await getUser(101);
		console.log('User - ', user);

		const repos = await getRepository(user.userName);
		console.log('Repository - ', repos);

		const commits = await getCommits(repos[0]);
		console.log('Commits - ', commits);
	} catch (error) {
		console.log('Error Occurred - ', error)
	}
}

displayCommits();

function getUser(userId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Retrieving User');
			resolve({userId: userId, userName: 'Shobhit'});
		}, 2000);
	}); 
}

function getRepository(userName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Getting Github Repository');
			resolve(['repo1', 'repo2', 'repo3']);
		}, 2000);
	});
}

function getCommits(repo, callback) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Getting Repository Commits');
			resolve(['commit1', 'commit2', 'commit3']);
		}, 2000);
	});
}

console.log('End Program');
