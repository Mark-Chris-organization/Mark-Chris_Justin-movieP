"use strict";

export const movieToRecordRender = ({title, rating}) => {
    return `<tr data-id="${id}" >
                       // <td>
                       //      <img src="${picture}">
                       // </td>
                       <td data-id="${id}" class="movie-record">${title}. ${rating}</td>
              
                       <td>
                            <button class="delete" value="${id}">X</button>
                            <button class="edit" value="${id}">Edit</button>
                       </td>
                   </tr>`
};