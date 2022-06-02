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

export const createMovieDisplay = () => {
    modal.main.innerHTML = createMovieFormRender();
    modal.foot.innerHTML = createUpdateButtonsRender(0, "create");

    $("button.confirm.create").on('click', createMovieRecord);
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

export const readMovieDisplay = (event) => {
    toggleModal()
    console.log('URL is:',baseURL, 'Target value is:', event.target.data.id)
    fetch(baseURL + '/' + event.target.value, fetchSettings)
        .then(res => res.json())
        .then(res => {
            modal.main.innerHTML = readDisplayMovieRender(res)
            modal.foot.innerHTML = `<button class="close.modal">Close</button>`

            $(".close-modal").on('click', disableModal)
        })
}

export const updateMovieDisplay = (event) => {
    enableModal()

    fetch(baseURL + '/' + event.target.value, fetchSettings)
        .then(res => res.json())
        .then(res => {
            console.log(res.id)
        })


        .then(res => {
            modal.main.innerHTML = updateMovieFormRender(res)
            modal.foot.innerHTML = createUpdateButtonsRender(res.id)
        })
    $("button.confirm.update").on('click', updateMovieRecord)
}


export const updateMovieRecord = (event) => {
    event.preventDefault()

    const form = document.forms.update;

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
        method: "PUT",
        body: JSON.stringify(data)
    }

    fetch(baseURL + '/' + event.target.value, settings)
        .then(res => res.json())
        .then(res => {
            console.log("update movie record:", res)
            disableModal()
        })
}


export const deleteMovieDisplay = (event) => {
    toggleModal()

    modal.head.innerHTML = `<h3>Do you wish to delete this movie?</h3>`
    modal.main.innerHTML = `<p>If you delete this movie it will be gone forever!</p>`
    modal.foot.innerHTML = deleteMovieRender(event.target.value)

    $("button.confirm").on('click', deleteMovieRecord)
}

export const deleteMovieRecord = (event) => {
    event.preventDefault()

    let settings = fetchSettings
    settings.method = "DELETE"

    fetch(baseURL + '/' + event.target.value, settings)
        .then(res => res.json())
        .then(res => {
            console.log("delete movie record res:", res)
            disableModal()
        })
    $("button.confirm.update").on('click', updateMovieRecord)
}

