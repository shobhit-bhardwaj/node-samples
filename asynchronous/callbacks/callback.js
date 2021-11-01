console.log('Start Program');

getUser(101, (user) => {
	console.log('User - ', user);
	getRepository(user.userName, (repos) => {
		console.log('Repos - ', repos);
		getCommits(repos[0], (commits) => {
			console.log('Commits - ', commits);
		});
	});
});
//	Callback Hells - Nested Callback Functions or Christmas Tree Problem.

function getUser(userId, callback) {
	setTimeout(() => {
		console.log('Reading User from Database.');
		callback({userId: userId, userName: 'Shobhit'});
	}, 2000);
}

function getRepository(userName, callback) {
	setTimeout(() => {
		console.log('Calling Github for Repository.');
		callback(['repo1', 'repo2', 'repo3']);
	}, 2000);
}

function getCommits(repo, callback) {
	setTimeout(() => {
		console.log('Calling Github for Commits.');
		callback(['commit1', 'commit2', 'commit3']);
	}, 2000);
}

console.log('End Program');
