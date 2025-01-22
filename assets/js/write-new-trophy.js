// JavaScript file that implement logic for write-new-email.html

import { TrophyAPI } from "/assets/js/trophyAPI.js"

window.onload = (e) => {
    document.getElementById('home-button')?.addEventListener('click', () => { window.location.href = '/index.html' });
    document.getElementById('clear-all-fields-button')?.addEventListener('click', OnClearButtonClick);
    document.getElementById('send-trophy-button')?.addEventListener('click', OnSendTrophyButtonClick);
}

function OnClearButtonClick() {
    document.getElementById('sportclub').value = '';
    document.getElementById('trophyname').value = '';
    document.getElementById('rank').value = '';
    document.getElementById('year').value = '';
    document.getElementById('sponsors').value = '';
}

async function OnSendTrophyButtonClick() {
    let trophy = {};

    const sportclub = document.getElementById('sportclub');
    if(!sportclub) {
        alert('Sportclub field is empty!')
        return;
    }
    trophy.sportclub = sportclub.value;

    const trophyname = document.getElementById('trophyname');
    if(!trophyname) {
        alert('Trophyname field is empty!')
        return;
    }
    trophy.trophyname = trophyname.value;

    const rank = document.getElementById('rank');
    if(!rank) {
        alert('Rank field is empty!')
        return;
    }
    trophy.rank = rank.value;

    const year = document.getElementById('year');
    if(!year) {
        alert('Year field is empty!')
        return;
    }
    trophy.year = year.value;

    // Sponsors can be empty
    const sponsors = document.getElementById('sponsors');
    if(sponsors) {
        trophy.sponsors = sponsors.value;
    }
    
    const success = await TrophyAPI.CreateNewTrophy(trophy);
    if(success) {
        alert('Trophy successfully added!')
        OnClearButtonClick();
    }
    
}