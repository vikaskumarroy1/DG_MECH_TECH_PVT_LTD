function toggleDetails(id) {
    const container = document.getElementById(`container${id}`);
    const extraDetails = document.getElementById(`extraDetails${id}`);
  
    // Toggle extra details visibility
        // Toggle extra details visibility
        if (extraDetails.style.display === 'none' || extraDetails.style.display === '') {
          extraDetails.style.display = 'block'; // Show extra details
          container.style.width = '100vw'; // Increase container size
          container.style.height = 'auto'; // Adjust height
      } else {
          extraDetails.style.display = 'none'; // Hide extra details
          container.style.width = '90vw'; // Reset container size
          container.style.height = 'auto'; // Reset height
      }
  }
  
  
  
  
  
  // script.js
  
  // Initial images
  const images = [
    "https://spooltech.com/wp-content/uploads/2020/09/DNV-Spool-and-Cradle-for-Cable-Spooltech-600x400.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2024/3/397583341/YY/FA/IQ/7523194/double-layer-metal-spool-500x500.png",
    "https://media.istockphoto.com/id/1312378244/photo/production-of-copper-wire-cable-in-reels-at-factory-cable-factory.jpg?s=612x612&w=0&k=20&c=WmS-tJQanxOlOy5Mx-v7zkHU7x9Qtz96WeFKn7-hSRI=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyKCz3aAX5R8pVLYQJKzppCMuxXZdBDFQSQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyKCu3aAX5R8pVLYQJK3ppCMuxXZdBDFQSQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyKCu3aAY5R8pVLYQJKzppCMuxXZdBDFQSQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyKCu3aAX5Y8pVLYQJKzppCMuxXZdBDFQSQ&s",
  ];
  
  // State to track visible images
  let currentStartIndex = 0;
  const visibleImagesCount = 2; // Number of images to show at a time
  
  // Function to render images in the spare-parts container
  function renderImages() {
    const sparePartsContainer = document.querySelector(".spare-parts");
    sparePartsContainer.innerHTML = ""; // Clear existing images
  
    // Render visible images based on the current start index
    for (let i = currentStartIndex; i < currentStartIndex + visibleImagesCount && i < images.length; i++) {
        const img = document.createElement("img");
        img.src = images[i];
        img.alt = `Spare Part ${i + 1}`;
        sparePartsContainer.appendChild(img);
    }
  }
  
  // Function to handle the Next button click
  function nextImage() {
    // Move to the next set of images if not at the end
    if (currentStartIndex + visibleImagesCount < images.length) {
        currentStartIndex += visibleImagesCount;
        renderImages();
    }
  }
  
  // Function to handle the Prev button click
  function prevImage() {
    // Move to the previous set of images if not at the beginning
    if (currentStartIndex - visibleImagesCount >= 0) {
        currentStartIndex -= visibleImagesCount;
        renderImages();
    }
  }
  
  // Attach click event listeners to the Next and Prev buttons
  document.querySelector(".next-btn").addEventListener("click", nextImage);
  document.querySelector(".prev-btn").addEventListener("click", prevImage);
  
  // Initial render of images
  renderImages();
  
  
  










