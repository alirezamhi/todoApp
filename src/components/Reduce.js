import React, { useState } from 'react';

const Reduce = (state,action) => {
    switch (action.type) {
        case "add":
            return [...state,action.text]
        case "remove":
            return ( state = state.filter((node)=>node.id!==action.id))
        case "edit":
            return()
        default:
            break;
    }
};

export default Reduce;