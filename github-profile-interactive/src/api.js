const encode = str => new Buffer(str).toString('base64');
const decode = base64 => new Buffer(base64, 'base64').toString('ascii');

const api = {
    baseUrl: `https://api.github.com`,
    get(param) {
        return fetch(this.baseUrl + param)
            .then(res => res.json());
    },
    post(data, token = 'MmQ1ZTcxM2FiOWM5NGYyNWI5YWFhMGU4YWJlNzA5YTZhYTIyYmUwNA==') {
        fetch('https://api.github.com/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `token ${decode(token)}`
            },
            body: JSON.stringify(data)
        });

        console.log(data);
    }
};

export default api;
