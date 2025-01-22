// JavaScript file that implement logic for list-all-emails.html
import { TrophyAPI } from "/assets/js/trophyAPI.js"
window.onload = (e) => {
    document.getElementById('get-all-trophies-button')?.addEventListener('click', OnGetAllTrophiesButtonClick);
    document.getElementById('clear-all-trophies-button')?.addEventListener('click', OnClearAllTrophiesButtonClick);
    document.getElementById('home-button')?.addEventListener('click', () => { window.location.href = '/index.html' });
}
async function OnGetAllTrophiesButtonClick() {
    const trophies = await TrophyAPI.GetAllTrophies();
    if(!trophies) {
        console.error('Could not load trophies.')
        return;
    }
    const table = document.getElementById('trophy-table');
    if(!table) {
        console.error('Could not find trophy table.')
        return;
    }
    // Construct table rows for email data

    // First create a header row
    let data = `
    <thead class="thead-dark">
        <tr>
            <th>ID</th>
            <th>Sportclub</th>
            <th>Trophyname</th>
            <th>Rank</th>
            <th>Year</th>
            <th>Sponsors</th>
        </tr>
    </thead>
    `;
    data += '<tbody>'
    // Add each row manually
    trophies.forEach(e => {
        data = data + `
            <tr>
                <td>${e.id}</td>
                <td class="text-break">${e.sportclub}</td>
                <td class="text-break">${e.trophyname}</td>
                <td>${e.rank}</td>
                <td>${e.year}</td>
                <td class="text-break">${e.sponsors}</td>
            </tr>
        `
    });
    data += '</tbody>'
    // Append new HTML into <table>
    table.innerHTML = data;
}
function OnClearAllTrophiesButtonClick() {
    const table = document.getElementById('trophy-table');
    if(!table) {
        console.error('Could not find trophy table.')
        return;
    }
    table.innerHTML = '';
} 