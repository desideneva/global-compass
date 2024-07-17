function goToNav(idElem) {
    document.getElementById(idElem).style.display = 'flex';
    if (idElem === "home") {
        window.location.href = "/";
    } else {
        window.location.href = "/" + idElem;
    }
}

function handleButtonClick(page) {
    document.querySelectorAll('.body-container').forEach(container => {
        container.style.display = 'none';
    });

    if (page === 'story') {
        document.getElementById('shareStoryContainer').style.display = 'flex';
    } else if (page === 'browseStories') {
        window.location.href = '/browseStories';
    } else {
        window.location.href = '/' + page;
    }
}

function fetchStories() {
    fetch('/getStories')
        .then(response => response.json())
        .then(data => {
            const storiesContainer = document.getElementById('storiesCards');
            storiesContainer.innerHTML = ''; // Clear existing stories
            data.stories.forEach(story => {
                const storyCard = document.createElement('div');
                storyCard.className = 'story-card';
                storyCard.innerHTML = `
                    <h3>${story.countryVisited}</h3>
                    <p>${story.storyText}</p>
                `;
                storiesContainer.appendChild(storyCard);
            });
        })
        .catch(error => console.error('Error fetching stories:', error));
}

function submitStory() {
    const countryVisited = document.getElementById('countryVisited').value;
    const storyText = document.getElementById('storyText').value;

    const storyData = {
        countryVisited: countryVisited,
        storyText: storyText
    };

    fetch('/submitStory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(storyData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Clear the form fields
            document.getElementById('countryVisited').value = '';
            document.getElementById('storyText').value = '';
            // Navigate to browse stories page
            handleButtonClick('browseStories');
        } else {
            alert('Failed to share your story. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
 
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === '/browseStories') {
        fetchStories();
    }
});

function fetchStories() {
    fetch('/getStories')
        .then(response => response.json())
        .then(data => {
            const storiesContainer = document.getElementById('storiesGrid');
            storiesContainer.innerHTML = ''; // Clear existing stories
            data.stories.forEach(story => {
                const storyCard = document.createElement('div');
                storyCard.className = 'col';
                storyCard.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${story.countryVisited}</h5>
                            <p class="card-text">${story.storyText}</p>
                        </div>
                    </div>
                `;
                storiesContainer.appendChild(storyCard);
            });
        })
        .catch(error => console.error('Error fetching stories:', error));
}







