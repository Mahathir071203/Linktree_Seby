const shareButtons = document.querySelectorAll('.tile-share-button');

async function copyText(e) {
    e.preventDefault();
    const link = this.getAttribute('link');

    try {
        await navigator.clipboard.writeText(link);
        this.classList.add('copied'); // Add a temporary "copied" class
        setTimeout(() => { 
            this.classList.remove('copied');
        }, 1000); // Remove after 1 second
        alert("Copied the text: " + link);
    } catch (err) {
        console.error(err);
    }
}

shareButtons. forEach(shareButton => 
    shareButton.addEventListener('click', copyText));