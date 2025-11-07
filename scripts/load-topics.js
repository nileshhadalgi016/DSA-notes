// This script loads the list of topics from config.json
async function loadTopics() {
    try {
        const response = await fetch('config.json');
        const config = await response.json();

        const container = document.getElementById('topics-container');
        container.innerHTML = '';

        const mergedTopics = [
            ...(Array.isArray(config.topics) ? config.topics : []),
            ...(Array.isArray(config.extraTopics) ? config.extraTopics : [])
        ];

        if (mergedTopics.length > 0) {
            mergedTopics.forEach(topic => {
                const card = document.createElement('a');
                card.href = `${topic.folder}/index.html`;
                card.className = 'topic-card';
                
                card.innerHTML = `
                    <h3>${topic.day}: ${topic.title}</h3>
                    <p>${topic.description || 'Click to view notes'}</p>
                `;
                
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p class="loading">No topics available yet. Start adding your daily notes!</p>';
        }
    } catch (error) {
        console.error('Error loading topics:', error);
        document.getElementById('topics-container').innerHTML = 
            '<p class="loading">Error loading topics. Please check console for details.</p>';
    }
}

// Load topics when page loads
document.addEventListener('DOMContentLoaded', loadTopics);
