"use strict"
  const uiModule = (function () {
  const mainRow = document.querySelector("#mainRow");
  const nextButton = document.getElementById("next");
  const previousButton = document.getElementById("previous");
  const back = document.getElementById("back");

  const renderHomePage = (arr) => {
    nextButton.removeAttribute("id");
    previousButton.removeAttribute("id");
    mainRow.classList.remove("ops")
    mainRow.innerHTML = "";
        //arr.slice(0,6).forEach(element => {
        //     const divCharacter = `<div class=" animation card pt-3 shadow-lg p-3 mb-5 bg-body rounded text-center animate__animated animate__pulse" style="width:18rem;">
        //     <img src=${element.image} class="card-img-top img-thumbnail" alt="...">
        //     <div class="card-body">
        //       <h6 id=${element.id} class="card-title text-primary">${element.name}</h6>
        //     </div>
        //     </div>`
        //     mainRow.innerHTML += divCharacter;
        // });   
    //     previousButton.style.visibility = "hidden";
    //     nextButton.style.visibility = "visible";
    // }
        arr.forEach(element => {
        const divCharacter = `<div id=${element.id} class="animation card pt-3 bg-body rounded text-center animate__animated animate__pulse" style="width:17rem; gap:3rem">
        <img src=${element.image} id=${element.id} class="card-img-top img-thumbnail "alt="...">
        <div class="card-body id=${element.id}">
          <h6 id=${element.id} class="card-title text-primary">${element.name}</h6>
          <button class="like btn btn-outline-primary"><span class="bi bi-heart" style="font-size:1rem; color:crimson"></span> Like</button>
        </div>
      </div>`
      mainRow.innerHTML += divCharacter;
    });
  }

//     const renderSecondPage = (arr) => {
//         mainRow.innerHTML = "";
//         arr.slice(6,12).forEach(element => {
//             const divCharacter = `<div class=" animation card pt-3 shadow-lg p-3 mb-5 bg-body rounded text-center animate__animated animate__pulse" style="width:18rem;">
//             <img src=${element.image} class="card-img-top img-thumbnail" alt="...">
//             <div class="card-body">
//               <h6 id=${element.id} class="card-title text-primary">${element.name}</h6>
//             </div>
//             </div>`
//             mainRow.innerHTML += divCharacter;
//         });
//         previousButton.style.visibility = "visible"
//         nextButton.style.visibility = "visible";
//     }
    
//     const renderThirdPage = (arr) => {
//         mainRow.innerHTML = "";
//         arr.slice(12,20).forEach(element => {
//             const divCharacter = `<div class=" animation card pt-3 shadow-lg p-3 mb-5 bg-body rounded text-center animate__animated animate__pulse" style="width:18rem;">
//             <img src=${element.image} class="card-img-top img-thumbnail" alt="...">
//             <div class="card-body">
//               <h6 id=${element.id} class="card-title text-primary">${element.name}</h6>
//             </div>
//             </div>`
//             mainRow.innerHTML += divCharacter;
//         });
//         nextButton.style.visibility = "hidden"
//     }

//     return {
//         renderFirstPage,
//         renderSecondPage,
//         renderThirdPage
//     }
// })()
    const likeOrUnlike = (event) => {
    const element = event.target;
    if(element.classList.contains("like")){
    element.classList.toggle("btn-primary");
    element.classList.toggle("text-white");
    if(element.classList.contains("btn-primary")) {
      element.innerHTML = "";
      element.innerHTML = `<span class="bi bi-heart"></span> Unlike`;
    } else {
      element.innerHTML = "";
      element.innerHTML = `<span class="bi bi-heart"></span> Like`;
    }
  }
}

    const fillDetailedPage = (c) => {
    mainRow.innerHTML = "";
    back.innerHTML = "Back to page";
    nextButton.setAttribute("id",(c.id+1));
    previousButton.style.display="block";
    nextButton.style.display="block";
    previousButton.setAttribute("id", (c.id-1))
    let colomsForDetails = `
    <h4 class="card-title text-center text-primary pt-3 word-wrap fw-bold">${c.name}</h4>
    <div class="col-md-8 bg-body p-2 rounded">
      <img src=${c.image} class="card-img-top rounded img-thumbnail" alt="..."style="height:100%" style="width:100%;">
    </div>
    <div class="col-md-8 bg-body p-2 rounded mb-5 bg-white">
      <ul class="p-1 word-wrap list-group img-thumbnail list-group-flush text-center rounded" style="width:100%">
        <li class="list-group-item list-group-item-warning">${c.status}</li>`
      if(c.gender === "Male"){colomsForDetails += `<li class="list-group-item list-group-item-primary">${c.gender}</li>`} else if (c.gender === "Female"){colomsForDetails += `<li class="list-group-item list-group-item-danger">${c.gender}</li>`} else {colomsForDetails += `<li class="list-group-item list-group-item-light">${c.gender}</li>`}
      if(c.species === "Alive"){colomsForDetails += `<li class="list-group-item list-group-item-success">${c.species}</li>`} else {colomsForDetails += `<li class="list-group-item list-group-item-dark">${c.species}</li>`}
      colomsForDetails += `<li class="list-group-item list-group-item-info">Number of episodes: ${c.episode}</li>
      </ul></div>`

  mainRow.innerHTML = colomsForDetails;
  mainRow.classList.add("ops");
}

const changeBackButton = () => {
  back.innerHTML = "Rick & Morty Wiki"
}

return {
  renderHomePage,
  likeOrUnlike,
  fillDetailedPage,
  changeBackButton 
}
  
})()