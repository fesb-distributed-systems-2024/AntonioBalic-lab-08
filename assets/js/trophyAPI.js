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
}
export const TrophyAPI = new _TrophyAPI();