function muteVideo(video) {
  if (!video.muted) {
    video.muted = true;
    console.log('Video muted');
  }
}

function unmuteVideo(video) {
  if (video.muted) {
    video.muted = false;
    console.log('Video unmuted');
  }
}

function checkForAds() {
  const video = document.querySelector('video');
  if (video) {
    // Example condition: You need to update the condition based on each platform's ad indicator
    const isAdPlaying = document.querySelector('.ad-interrupting, .ad-container, .ad-showing');
    if (isAdPlaying) {
      muteVideo(video);
    } else {
      unmuteVideo(video);
    }
  }
}

// Check for ads periodically
setInterval(checkForAds, 3000); // Check every 3 seconds
