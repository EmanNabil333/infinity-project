// Here for api array of Object to append in html

let boxContent = [
    {
      id: 1,
      title: "Phone Number",
      description: "0154748710111",
      icons: `Picture/call.jpg`,
    },
    {
      id: 2,
      title: "Email Address",
      description: "Hr@gmail.com",
      icons: `Picture/inbox.jpg`,
    },
    {
      id: 3,
      title: "Location",
      description: "Al Shawamekh Abu Dhabi The United Arab Emirates.",
      icons: `Picture/location.jpg`,
    },
  ];
  
  const content = () => {
    let appendd = ``;
    for (let i = 0; i < boxContent.length; i++) {
      appendd += `
          <div class="card">
                 <img src="${boxContent[i].icons}" alt="">
                  <div class="paragraph">
                    <h3>${boxContent[i].title}</h3>
                    <p>${boxContent[i].description}</p>
                  </div>
                </div>
          `;
    }
    document.getElementById("box").innerHTML = appendd;
  };
  content();
  
  let prodService = [
    {
      id: 1,
      title: "INNOVATION",
      description: "New Ideas for a new Market",
      info: "With the rapid change of the market of the medical services field, we can proudly say that we are always one step ahead, with top of the line technologies that are constantly getting innovated and developed by the best in the field.",
      icons: `Picture/1.jpg`,
    },
    {
      id: 2,
      title: "RELIABILITY",
      description: "On Top of the World",
      info: "It's really simple, we create an environment that can be relied on, 24/7 Available software and analysis tools, 24/7 customer support and rapid action on orders we are -simply put- the most reliable.",
      icons: `Picture/2.jpg`,
    },
    {
      id: 3,
      title: "EXPERIENCE.",
      description: "We are the veterans",
      info: "With a team that has tens of years of experience in the medical field and others with years of experience in the management field and even others more with years of experience in the development field, we managed to gather the most experienced team that can be found out there, Only at Infinity.      ",
      icons: `Picture/3.jpg`,
    },
    {
      id: 4,
      title: "PERFECTION",
      description: "The Best from Every Directions      ",
      info: "We really can't Stand Imperfection, when we set a goal to create a product, develop a software or offer a service we only opt for the best solutions, with an impeccable attention to every small detail without overlooking the slightest. Just Perfectionists.      ",
      icons: `Picture/4.jpg`,
    },
  ];
  
  const Service = () => {
    let servess = ``;
    for (let i = 0; i < prodService.length; i++) {
      servess += `
        <div class="card">
        <div class="icon">
        <img src="${prodService[i].icons}" alt="">
        </div>
        <div class="paragraph">
          <h1>${prodService[i].title}</h1>
          <p>${prodService[i].description}</p>
          <p>${prodService[i].info}</p>
        </div>
      </div>
            `;
    }
    document.getElementById("cards").innerHTML = servess;
  };
  Service();
  
  let prodOur = [
    {
      id: 1,
      title: "Medical Staffing Assessing ",
      src1: "Doctors & Nurses job description received by the client will be monitored and managed by Infinity      ",
  
    },
    {
      id: 2,
      title: "Wellness Programs",
      src1: "Routine  Medical Check up       .",
      src2: "Pre employment Check up.",
      src3: `Prophylactic Preventive Programs.`,
      src3: `Awareness Sessions.`,
    },
    {
      id: 3,
      title: "Occupational  Programs      ",
      src1: "Check Up Program.",
      src2: "Ergonomics program",
      src3: `Safety occupational programs.`,
    },
    {
      id: 4,
      title: "Medical Policy Analysis      ",
      src1: "Claims analysis for the past years compared to Loss Ratio and market inflation to facilitate the process of premium negotiation and provider selection      ",
  
    },
    {
      id: 5,
      title: "Medical Claims Revision",
      src1: "Claims analysis for the past years compared to Loss Ratio and market inflation to facilitate the process of premium negotiation and provider selection      .",
    },
  ];
  const OurServices = () => {
    let carousaal = ``;
    for (let i = 0; i < prodOur.length; i++) {
      carousaal += `
        <li class="card">
        <h2>${prodOur[i].title}</h2>
        <div class="link">
          <a href="#">${prodOur[i].src1}</a>
          <a href="#">${prodOur[i].src2}</a>
          <a href="#">${prodOur[i].src3}</a>
        </div>
      </li>
            `;
    }
    let x = (document.getElementById("ourServ").innerHTML = carousaal);
    // console.log(x);
  };
  OurServices()
  //
  const container = document.querySelector(".container");
  const carousel = document.querySelector(".carousel");
  const firstCardWidth = carousel.querySelector(".card").offsetWidth;
  const arrowBtns = document.querySelectorAll(".container i");
  const carouselChildrens = [...carousel.children];
  
  let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
  
  // Get the number of cards that can fit in the carousel at once
  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
  
  // Insert copies of the last few cards to beginning of carousel for infinite scrolling
  carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });
  
  // Insert copies of the first few cards to end of carousel for infinite scrolling
  carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });
  
  // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
  carousel.classList.add("no-transition");
  carousel.scrollLeft = carousel.offsetWidth;
  carousel.classList.remove("no-transition");
  
  // Add event listeners for the arrow buttons to scroll the carousel left and right
  arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
  });
  
  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  }
  
  const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  }
  
  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  }
  
  const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
  
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!container.matches(":hover")) autoPlay();
  }
  
  const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
  }
  autoPlay();
  
  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("scroll", infiniteScroll);
  container.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  container.addEventListener("mouseleave", autoPlay);