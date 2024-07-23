function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an API call
        const success = true; // This is just for demonstration purposes
        if (success) {
            resolve("API call successful");
        } else {
            reject("API call failed");
        }
    });
}

export default getResponseFromAPI;
