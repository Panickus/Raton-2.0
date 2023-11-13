// Agrega los IDs de los videos de YouTube que quieras mostrar
const videoIds = [
  "B1DGKaZRDMA",
  "6ukEy6FOxZE",
  "k5Su_ZHAShs",
  "aSWLJUIQMvA",
  "M_k-RQA7lBE",
  "_bipJ2xFNoY",
  "yOpyR86jY5g",
  "27qRUdE8BSI",
  "ed8THRArIBI",
  "XmKUak37jLU",
];

// Obtén referencias a los contenedores en tu HTML
const currentVideoContainer = document.getElementById("current-video");
const videoListContainer = document.getElementById("video-list");

// Función para mostrar el video actual
function showCurrentVideo(videoId) {
  // Crea el iframe con la URL del video de YouTube
  currentVideoContainer.innerHTML = `
    <iframe width="100%" height="100%" 
      src="https://www.youtube.com/embed/${videoId}" 
      frameborder="0" allowfullscreen>
    </iframe>
  `;
}

// Función para mostrar la lista de videos
function showVideoList() {
  // Recorre cada ID en el array y crea un elemento para cada video
  videoIds.forEach((videoId) => {
    const videoItem = document.createElement("div");
    // Crea el iframe con la URL del video de YouTube
    videoItem.innerHTML = `
      <iframe width="100%" height="100%" 
        src="https://www.youtube.com/embed/${videoId}" 
        frameborder="0" allowfullscreen>
      </iframe>
    `;
    // Agrega el nuevo video a la lista
    videoListContainer.appendChild(videoItem);

    // Agrega un evento clic para cambiar el video actual cuando se hace clic en un video de la lista
    videoItem.addEventListener("click", () => showCurrentVideo(videoId));
  });
}

// Inicializa la galería llamando a las funciones de mostrar
function initializeGallery() {
  // Elige el primer video del array para mostrar inicialmente
  const initialVideoId = videoIds[0];
  // Muestra el video actual y la lista de videos
  showCurrentVideo(initialVideoId);
  showVideoList();
}

// ¡Iniciamos la galería cuando la página se carga!
initializeGallery();
