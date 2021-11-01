getUser(101)
	.then(userName => getRepository(userName))
	.then(repos => getCommits(repos[0]))
	.catch(error => console.log('Error - ', error));

function getUser(userId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const user = {userId: userId, userName: 'Shobhit'};
			console.log('User - ', user);
			resolve(user);
		}, 2000);
	}); 
}

function getRepository(userName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const repos = ['repo1', 'repo2', 'repo3'];
			console.log('Repository - ', repos);
			resolve(repos);
		}, 2000);
	});
}

function getCommits(repo, callback) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const commits = ['commit1', 'commit2', 'commit3'];
			console.log('Commits - ', commits);
			resolve(commits);
		}, 2000);
	});
}
