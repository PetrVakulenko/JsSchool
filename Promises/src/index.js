const timeout = maxTimeout => new Promise(
    (_, reject) => setTimeout(
        () => reject(new Error('Timeout')),
        maxTimeout
    )
);

const fetchGithubUser = userName => fetch(`https://api.github.com/users/${userName}`);

const addProperty = (user, element, propertyGet, property = 'innerHTML') => {
    const elem = document.createElement(element);

    elem[property] = user[propertyGet] !== undefined && user[propertyGet] !== null && user[propertyGet] !== ''
        ? user[propertyGet]
        : 'null';

    if (element === 'span') {
        const propertyName = document.createElement('span');
        propertyName.innerHTML = propertyGet + ': ';
        propertyName.style.fontWeight = 'bold';
        document.body.appendChild(propertyName);
    }

    document.body.appendChild(elem);

    if (element === 'span') {
        document.body.appendChild(document.createElement('br'));
    }

    return user;
};

const getUserInfo = user => {
    console.log('User fetched', user);

    return user;
};

const appendAvatar = user => {
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
        addProperty(user, 'span', key);
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
    .then(getUserInfo)
    .then(appendAvatar)
    .then(appendLogin)
    .then(appendName)
    .then(appendProperties)
    .catch(appendError)
;

showAvatar('PetrVakulenko', 1000);
