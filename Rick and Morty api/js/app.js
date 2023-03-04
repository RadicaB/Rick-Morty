"use strict";
(function (data,ui) {
    const nextButton = document.getElementById("next");
    const previousButton = document.getElementById("previous");
    const mainRow = document.querySelector("#mainRow");
    const home = document.getElementById("home");
    const back = document.getElementById("back")

    
    // const fillFirstPage = () => {
    //      data.getAllCharacters()
    //      .then(res => {
    //         ui.renderFirstPage(res);
    //     });
    
    //     }

    const fillFirstPage = () => {
        data.getCharactersPerPage()
         .then(res => ui.renderHomePage(res));
        let c = data.state.currentPage;
        if(c === "https://rickandmortyapi.com/api/character?page=1") {
        previousButton.style.display="none";}
    }
    fillFirstPage();

    // const fillSecondPage = () => {
    //     data.getAllCharacters()
    //       .then(res => {
    //         ui.renderSecondPage(res)
    //         data.state.currentPage = 2;
          
    // });
    // }
    // const fillThirdPage = () => {
    //         data.getAllCharacters()
    //        .then(res => {
    //         data.state.currentPage = 3;
    //         ui.renderThirdPage(res)})
    // }

    const showNextPage = () => {
        if(!(nextButton.hasAttribute("id"))){
            let p = data.state.next;
            data.getCharactersPerPage(p).then (res => ui.renderHomePage(res));
            let c = p;
            data.state.currentPage = c;
            if( c === "https://rickandmortyapi.com/api/character?page=2" ){previousButton.style.display = "block"};
            if( c === "https://rickandmortyapi.com/api/character?page=42"){nextButton.style.display = "none";}
        }
    }

    const showNextCharacter =(event) => {
        const element = event.target;
        if(parseInt(element.id)){
        const id = element.id;
        data.getSingleCharacter(id).then(res => ui.fillDetailedPage(res))
        }
    }

    // const showPreviousPage = () => {
    //     if(!(previousButton.hasAttribute("id"))){
    //         let p = data.state.prev;
    //         data.getCharactersPerPage(p).then (res => ui.renderHomePage(res));
    //         let c = p;
    //         data.state.currentPage = c;
    //         if(c === "https://rickandmortyapi.com/api/character?page=41") {
    //         nextButton.style.display = "block";};
    //         if(c === "https://rickandmortyapi.com/api/character?page=1") {
    //         previousButton.style.display = "none";
    //     };}
    // }


    const showPreviousPage = () => {
        if(!(previousButton.hasAttribute("id"))){
            let p = data.state.prev;
            data.getCharactersPerPage(p).then (res => ui.renderHomePage(res));
            let c = p;
            data.state.currentPage = c;
            if(c === "https://rickandmortyapi.com/api/character?page=41") {
            nextButton.style.display = "block";};
            if(c === "https://rickandmortyapi.com/api/character?page=1") {
            previousButton.style.display = "none";
        };}
    }
    
    const showPreviousCharacter = (event) => {
        const element = event.target;
        if(parseInt(element.id)){
        const id = element.id;
        data.getSingleCharacter(id).then(res => ui.fillDetailedPage(res))
    }}
    

    const showDetailedPage = (event) => {
        const element = event.target;
        if(parseInt(element.id)){
        const id = element.id;
        data.getSingleCharacter(id).then(res => ui.fillDetailedPage(res))
        }
    }

    const goOnLastPage = () => {
        if(!(mainRow.classList.contains("ops"))) {
        nextButton.style.display = "none";
        previousButton.style.display = "block";
        let p = data.state.lastPage;
        data.getCharactersPerPage(p).then(res=> {ui.renderHomePage(res)})
        data.state.currentPage = p;
        } else if(mainRow.classList.contains("ops")) {
            ui.changeBackButton();
            let c = data.state.currentPage;
            data.getCharactersPerPage(c).then(res=> {ui.renderHomePage(res)})
            if(c === "https://rickandmortyapi.com/api/character?page=1") {
            previousButton.style.display = "none";}
        }
    }


    // nextButton.addEventListener("click", () => {
    //     if(data.state.currentPage === 1) {
    //         fillSecondPage();
    //     } else if(data.state.currentPage === 2){
    //         fillThirdPage()
    //     }
    // })

    // previousButton.addEventListener("click", () => {
    //     if(data.state.currentPage === 3) {
    //         fillSecondPage();
    //     } else if (data.state.currentPage === 2) {
    //         fillFirstPage();
    //         data.state.currentPage = 1;
    //     }
    // })
        
    mainRow.addEventListener("click", ui.likeOrUnlike)
    nextButton.addEventListener("click", showNextPage);
    previousButton.addEventListener("click", showPreviousPage);
    mainRow.addEventListener("click", showDetailedPage);
    nextButton.addEventListener("click", showNextCharacter);
    previousButton.addEventListener("click", showPreviousCharacter);
    back.addEventListener("click", goOnLastPage);
    home.addEventListener("click", () => {
        data.state.currentPage = "https://rickandmortyapi.com/api/character?page=1";
        let p = data.state.currentPage;
        data.getCharactersPerPage(p).then(res => {
            ui.renderHomePage(res);
            ui.changeBackButton();
        })
        previousButton.style.display = "none";
        nextButton.style.display = "block";
    })

})(dataModule,uiModule)
    