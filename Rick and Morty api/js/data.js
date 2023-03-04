"use strict";
const dataModule = (function () {
    const state = {
        //currentPage: 1,
        //allCharacters: []
        currentPage:"https://rickandmortyapi.com/api/character?page=1",
        next :"https://rickandmortyapi.com/api/character?page=2",
        prev: null,
        lastPage: "https://rickandmortyapi.com/api/character?page=42"
    };

    class Character {
        constructor(id, name, image, status, species, gender, episode) {
           this.id = id,
           this.name = name,
           this.image = image,
           this.species = species,
           this.status = status,
           this.gender = gender,
           this.episode = episode
        }
    }

    
    // const getAllCharacters = () => {
    //   return fetch("https://rickandmortyapi.com/api/character")
    //     .then(res => res.json())
    //     .then(res => {
    //         const allCharacters = [];
    //         res.results.map(character => {
    //             const createdCharacter = new Character(character.id, character.name, character.image);
    //             allCharacters.push(createdCharacter)});
    //             return allCharacters
    //         })
    //     }
    
    const getCharactersPerPage = (input = state.currentPage) => {
        return fetch(input).then(res => res.json())
        .then(res => {
           state.next = res.info.next;
           state.prev = res.info.prev;
            const allCharacters = [];
            res.results.map(character => {
                const createdCharacter = new Character(character.id, character.name, character.image);
                allCharacters.push(createdCharacter)});
                return allCharacters 
       })
   }

   const getSingleCharacter = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then (res => {
        const createdCharacter = new Character(res.id, res.name, res.image, res.species, res.status, res.gender, res.episode.length);
        return createdCharacter;
    })
}

    return {
       state,
       //getAllCharacters
       getCharactersPerPage,
       getSingleCharacter,
    }
    
})()

