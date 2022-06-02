"use strict";

export const movieToRecordRender = ({title, rating, id}) => {
    return `<tr data-id="${id}" >
                       <td data-id="${id}" class="read-record">${title}</td>
                       <td data-id="${id}" class="read-record">${rating}</td>
                       <td>
                            <button class="delete" value="${id}">X</button>
                            <button class="update" value="${id}">Edit</button>
                       </td>
                   </tr>`
};

export const updateMovieFormRender = (data) => {
    return createFormRender("update", data)
}

export const createMovieFormRender = () => {
    return createFormRender("create")
}

export const createFormRender = (type, data) => {
    if(!data) {
        data = {
            title: "",
            genre: "",
            rating: "",
            director: "",
            plot: "",
            id: ""
        }
    }

    let {title, genre, rating, director, plot, id} = data

    return `
    <form name="${type}">
        <input type="hidden" name="id" value="${id}">
        <label for="field1">Title</label><input type="text" name="title" value="${title}" id="field1">
        <label for="field2">Genre</label><input type="text" name="genre" value="${genre}" id="field2">
        <label for="field3">Rating</label><input type="text" name="rating" value="${rating}" id="field3">
        <label for="field4">Director</label><input type="text" name="director" value="${director}" id="field4">
        <label for="field5">Plot</label><input type="text" name="plot" value="${plot}" id="field5">
    </form>
    `
}

export const readDisplayMovieRender =({title, genre, rating, director, plot, id}) => {

    // handle Z in data for timezone, might need to add back for update

    return `
       <div class="profile">
                <section class="header">
                    <h3 class="profile-header">${title}</h3>
                    <p class="sub-header">${director}</p>
                </section>

                <section class="details">
                    <h4>Details</h4>
                    <div>Rating: <span>${rating}</span></div>
                    <div>Plot: <span>${plot}</span></div>
                    <div>Genre:  <span>${genre}</span></div>
                </section>
       </div>
    `
}

export const createUpdateButtonsRender = (id,  type='update') => {
    return ` <form>
          <button class="confirm ${type}" value="${id}">Confirm</button>
          <button class="cancel">Cancel</button>
            </form>`
}

export const deleteMovieRender = (id) => {
    return `<form>
          <button class="confirm delete" value="${id}">Confirm</button>
          <button class="cancel">Cancel</button>
    </form>
    
    `
}