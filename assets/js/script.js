
function showSignUp() {
    document.querySelector('.btn-container').style.display = 'none';
    document.getElementById('signUpContainer').style.display = 'flex';
    document.getElementById('signInContainer').style.display = 'none';
    document.getElementById('shareStoryContainer').style.display = 'none';
}

function showSignIn() {
    document.querySelector('.btn-container').style.display = 'none';
    document.getElementById('signInContainer').style.display = 'flex';
    document.getElementById('signUpContainer').style.display = 'none';
    document.getElementById('shareStoryContainer').style.display = 'none';
}

function showShareStory() {
    document.querySelector('.btn-container').style.display = 'none';
    document.getElementById('shareStoryContainer').style.display = 'flex';
    document.getElementById('signUpContainer').style.display = 'none';
    document.getElementById('signInContainer').style.display = 'none';
}
