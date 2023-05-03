const videoElement = document.querySelector('.video');
const btn = document.querySelector('.btn');

// Prompt to select a media stream, pass to video element, then play
const selectMediaStream = async function () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;

    // When that video has loaded its metadata, it's going to call a function that is going to play video
    videoElement.addEventListener('loadedmetadata', event => {
      console.log(event);
      videoElement.play();
    });
  } catch (error) {
    console.log('Error: ', error);
  }
};

btn.addEventListener('click', async () => {
  // Disable button
  btn.disable = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset button
  btn.disable = false;
});

// On Load
selectMediaStream();
