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

        $("#create").click(createMovieDisplay);
        $(".read-record").click(readMovieDisplay);
        $(".update").click(updateMovieDisplay);
        $(".delete").click(deleteMovieDisplay);
    })