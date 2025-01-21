class _TrophyAPI {
    async GetAllTrophies() {
        const URL = `http://127.0.0.1:5041/api/Trophy/all`;
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(!response.ok) {
            console.error('Could not get trophies from the API!')
            return null;
        }
        return response.json();
    }

        // Returns true if successful and false if failed
        async CreateNewTrophy(trophy) {
            const URL = `http://127.0.0.1:5041/api/Trophy/new`;
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(trophy)
            });
    
            if(!response.ok) {
                console.error('Could not create new trophy.')
                if(response.status === 400) { /* Bad Request */
                    alert(await response.text())
                }
                return false;
            }
    
            return true;
        }
}
export const TrophyAPI = new _TrophyAPI();