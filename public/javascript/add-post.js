const addPostBtn = document.querySelector('#addPost-btn');
const createPostContainer = document.querySelector('#createPostContainer');
const newPostForm = document.querySelector('.new-post-form')

function toggleHide() {
    createPostContainer.classList.remove('hide');
    addPostBtn.classList.add('hide');
};

async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-content"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

newPostForm.addEventListener('submit', newFormHandler);
addPostBtn.addEventListener('click', toggleHide);