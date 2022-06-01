"use strict";
import {movieToRecordRender} from "./render.js";
import {createMovieDisplay, readMovieDisplay, updateMovieDisplay, deleteMovieDisplay} from "./actions.js";
import {baseURL, fetchSettings} from "./constants.js";

fetch(baseURL, fetchSettings)
    .then(res => res.json())
    .then(res => {
        console.log(res)

        document.getElementById('movie_id').innerHTML +=
            res.map(movieToRecordRender).join('')

        $("#create").on('click', createMovieDisplay);
        $(".read-record").on('click', readMovieDisplay);
        $(".update").on('click', updateMovieDisplay);
        $(".delete").on('click', deleteMovieDisplay);
    })