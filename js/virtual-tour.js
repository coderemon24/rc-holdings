// Step 1: Extract all data-src URLs from the page
    const dataSrcElements = document.querySelectorAll('[data-src]');
    const imageUrls = Array.from(dataSrcElements).map(el => el.getAttribute('data-src')).filter(Boolean);

    if(imageUrls.length === 0){
      document.getElementById('panorama').innerHTML = '<p class="text-white text-center mt-10">No panorama images found (data-src attributes missing)</p>';
      throw new Error("No images found in data-src attributes.");
    }

    // Step 2: Build scenes object dynamically
    let scenes = {};
    imageUrls.forEach((url, index) => {
      const sceneKey = "scene" + (index + 1);
      const nextIndex = (index + 1) % imageUrls.length;
      const prevIndex = (index - 1 + imageUrls.length) % imageUrls.length;

      scenes[sceneKey] = {
        type: "equirectangular",
        panorama: url,
        hotSpots: [
          {
            pitch: 10,
            yaw: 100,
            type: "custom",
            createTooltipFunc: hotspotArrow,
            createTooltipArgs: { direction: "right", targetScene: "scene" + (nextIndex + 1) },
          },
          {
            pitch: 10,
            yaw: -100,
            type: "custom",
            createTooltipFunc: hotspotArrow,
            createTooltipArgs: { direction: "left", targetScene: "scene" + (prevIndex + 1) },
          },
        ],
      };
    });

    // Step 3: Initialize pannellum viewer with dynamic scenes
    const viewer = pannellum.viewer("panorama", {
      default: {
        firstScene: "scene1",
        sceneFadeDuration: 1000,
        autoLoad: true,
      },
      scenes: scenes,
    });

    // Step 4: Custom hotspot arrow function using TailwindCSS
    function hotspotArrow(hotSpotDiv, args) {
      hotSpotDiv.classList.add(
        "flex", "items-center", "justify-center",
        "w-12", "h-12", "rounded-full",
        "bg-white/70", "hover:bg-white",
        "cursor-pointer", "transition"
      );

      // Create SVG arrow icon
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("class", "w-6 h-6 text-black");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "3");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("xmlns", svgNS);

      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");

      if (args.direction === "right") {
        path.setAttribute("d", "M9 5l7 7-7 7");
      } else {
        path.setAttribute("d", "M15 19l-7-7 7-7");
      }

      svg.appendChild(path);
      hotSpotDiv.appendChild(svg);

      hotSpotDiv.addEventListener("click", () => {
        viewer.loadScene(args.targetScene);
      });
    }
    
    
    
    

let tour = document.querySelector('.tour');
let tourOverlay = document.querySelector('.tour-overlay');
let closeTour = document.getElementById('close-tour');
let tourModal = document.querySelector('.tour-modal');

tour.addEventListener('click', function() {
  tourOverlay.classList.remove('hidden');
  tourModal.classList.remove('scale-0');
});

closeTour.addEventListener('click', function() {
  tourOverlay.classList.add('hidden');
  tourModal.classList.add('scale-0');
});

