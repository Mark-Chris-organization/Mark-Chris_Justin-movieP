"use strict";
import { movieToRecordRender } from "./render.js";

// import {handleDisplayUpdate, handleDeleteView, toggleModal, modal, handleDisplayProfile, handleCreateUserView} from "./handlers.js";

import {baseURL, fetchSettings} from "./constants.js";

fetch(baseURL)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        // mapUserToRecord()
        document.getElementById('id').innerHTML +=
            res.data.map(movieToRecordRender).join('')

        // $('.delete').on('click', handleDeleteView)
        // $('.edit').on('click', handleDisplayUpdate)
        // $('.user-record').on('click', handleDisplayProfile)
        // $('#create').on('click', handleCreateUserView)
    })