"use strict";
import {baseURL, fetchSettings} from "./constants.js";
import {
    createUpdateButtonsRender,
    createMovieFormRender,
    deleteMovieRender,
    updateMovieFormRender,
    readDisplayMovieRender
} from "./render.js";

export const modal = {
    all: document.querySelector("#modal"),
    main: document.querySelector("#modal > main"),
    head: document.querySelector("#modal > header"),
    foot: document.querySelector("#modal > footer"),
    container: document.querySelector("#modal-container") // represents the background
}

export const toggleModal = () => {
    // show hide modal logic
    modal.container.classList.toggle("hide")
    modal.all.classList.toggle("hide");
}

export const enableModal = () => {
    modal.container.classList.remove("hide")
    modal.all.classList.remove("hide");
}

export const disableModal = () => {
    modal.container.classList.add("hide")
    modal.all.classList.add("hide");
}

export const createMovieDisplay = (event) => {
    modal.main.innerHTML = updateMovieFormRender();
    modal.foot.innerHTML = createUpdateButtonsRender(0, "create");
    
    $("button.confirm.create").click(createMovieRecord);
    enableModal()
}


export const createMovieRecord = (event) => {
    event.preventDefault()
    
    const form = document.forms.create
    
    let data = {
        title: form.title.value,
        genre: form.genre.value,
        rating: form.rating.value,
        director: form.director.value,
        plot: form.plot.value,
        id: form.id.value 
    }
    
    let settings = {
        ...fetchSettings,
        method: "POST",
        body: JSON.stringify(data)
    }
    
    fetch(baseURL, settings)
        .then(res => res.json())
        .then(res => {
            console.log("create movie record:", res)
        })
}
/**
settings = POST
fetch


export const readMovieDisplay
toggleModal
fetch
via
id
readDisplayMovieRender
disableModal

export const updateMovieDisplay
enableModal
fetch
updateMovieFormRender
createUpdateButtonsRender
updateMovieRecord

export const updateMovieRecord
event.preventDefault
settings = PUT
fetch
disableModal

export const deleteMovieDisplay
toggleModal
deleteMovieRender
deleteMovieRecord

export const deleteMovieRecord
event.preventDefault
settings = DELETE
fetch
disableModal

