/**
 * Created by Christopher on 4/4/2016.
 */
"use strict";






function truncate(str, len = 30) {
    if (typeof str !== 'string') {
        throw new TypeError('String Required');
    }
    return str.substring(0, len) + '…';
}




