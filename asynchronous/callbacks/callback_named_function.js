console.log('Start Program');

getUser(101, displayUser);

function displayUser(userId) {
	displayUser(userId, displayRepository);
}

function displayRepository(repos) {
	displayRepository(repos, displayCommits);
}

function displayCommits(commits) {
	console.log('Commits - ', commits);
}

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
