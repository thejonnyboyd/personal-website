const API_KEY = CONFIG.YOUTUBE_API_KEY;
const CHANNEL_ID = CONFIG.YOUTUBE_CHANNEL_ID;

const youtubeContainer = document.getElementById("youtube-container");

async function fetchLatestYouTubeVideo() {
  try {
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    const playlistData = await playlistResponse.json();

    if (!playlistData.items || playlistData.items.length === 0) {
      throw new Error("No channel data found.");
    }

    const uploadsPlaylistId =
      playlistData.items[0].contentDetails.relatedPlaylists.uploads;

    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${API_KEY}`
    );
    const videosData = await videosResponse.json();

    if (!videosData.items || videosData.items.length === 0) {
      throw new Error("No videos found in the uploads playlist.");
    }

    const latestVideo = videosData.items[0].snippet;
    const videoId = latestVideo.resourceId.videoId;

    youtubeContainer.innerHTML = `
  <div class="video-wrapper">
    <iframe
      src="https://www.youtube.com/embed/${videoId}"
      title="${latestVideo.title}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
`;
  } catch (error) {
    console.error("Failed to fetch the latest YouTube video:", error);
    youtubeContainer.innerHTML = `<p>Unable to load the latest video. Please try again later.</p>`;
  }
}

fetchLatestYouTubeVideo();
