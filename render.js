"use strict";

export const movieToRecordRender = ({title, rating, id}) => {
    return `<tr data-id="${id}" >
                       <td data-id="${id}" class="movie-record">${title}</td>
                       <td data-id="${id}" class="movie-record">${rating}</td>
                       <td>
                            <button class="delete" value="${id}">X</button>
                            <button class="edit" value="${id}">Edit</button>
                       </td>
                   </tr>`
};