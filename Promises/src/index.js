const timeout = maxTimeout => new Promise(
    (_, reject) => setTimeout(
        () => reject(new Error('Timeout')),
        maxTimeout
    )
);

const fetchGithubUser = userName => fetch(`https://api.github.com/users/${userName}`);

const addProperty = (user, element, propertyGet, property = 'innerHtml') => {
    const elem = document.createElement(element);
    elem.property = (user.propertyGet !== '' && user.propertyGet !== undefined && user.propertyGet !== '-')
        ? user.propertyGet : 'null';
    document.body.appendChild(elem);
};

const appendAvatar = user => {
    console.log('User fetched', user);

    addProperty(user, 'img', 'avatar_url', 'src');

    return user;
};

const appendLogin = user => {
    addProperty(user, 'h1', 'login');

    return user;
};

const appendName = user => {
    addProperty(user, 'h2', 'name');

    return user;
};

const appendProperties = user => {
    const h3 = document.createElement('h3');
    h3.innerHTML = "All options:";
    document.body.appendChild(h3);

    for(var key in user) {
        addProperty(user, 'p', key);
    }

    return user;
};

const appendError = err => {
    const el = document.createElement('h2');
    el.style.color = 'red';
    el.innerHTML = err.message;
    document.body.appendChild(el);
};

const checkSuccess = result => (
    result.status >= 400
        ? result
            .json()
            .then(
                err => Promise.reject(
                    new Error(`Fetch error: ${err.message}`)
                )
            )
        : result
);

const showAvatar = (userName, maxTimeout = 100) => Promise
    .race([ timeout(maxTimeout), fetchGithubUser(userName) ])
    .then(checkSuccess)
    .then(res => res.json())
    .then(appendAvatar)
    .then(appendLogin)
    .then(appendName)
    .then(appendProperties)
    .catch(appendError)
;

showAvatar('PetrVakulenko', 1000);
