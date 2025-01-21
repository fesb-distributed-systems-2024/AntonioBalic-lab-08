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
    /*
        The idea is to get the emails from the backend as JSON:
        [
            {
                "id": 1,
                "subject": "Email 1",
                "body": "This is a first email",
                "sender": "john@gmail.com",
                "receiver": "mary@gmail.com",
                "timestamp": "13.2.2023 13:30:33"
            },
            {
                "id": 2,
                "subject": "Email 2",
                "body": "This is a second email",
                "sender": "mary@gmail.com",
                "receiver": "john@gmail.com",
                "timestamp": "13.2.2023 13:45:54"
            }
        ]
        And manually create and insert HTML for that data into <table> tag:
        <thead>
            <tr>
                <th>ID</th>
                <th>Subject</th>
                <th>Body</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Timestamp</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Email 1</td>
                <td>This is a first email</td>
                <td>john@gmail.com</td>
                <td>mary@gmail.com</td>
                <td>13.2.2023 13:30:33</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Email 2</td>
                <td>This is a second email</td>
                <td>mary@gmail.com</td>
                <td>john@gmail.com</td>
                <td>13.2.2023 13:45:54</td>
            </tr>  
        </tbody>
    */
    // First create a header row
    let data = `
    <thead>
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
                <td>${e.sportclub}</td>
                <td>${e.trophyname}</td>
                <td>${e.rank}</td>
                <td>${e.year}</td>
                <td>${e.sponsors}</td>
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