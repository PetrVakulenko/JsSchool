//import { hello } from './consts';

import consts from './consts';

window.addEventListener('load', () => {
    document.body.innerHTML = `<h1>${consts.hello}</h1>`;
});
