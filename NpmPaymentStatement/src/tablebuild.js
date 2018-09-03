export const createTable = (headers, array) => {
    var table = document.body.appendChild(document.createElement('table'));

    var th = table.appendChild(document.createElement('thead'));
    for(var head in headers) {
        var td = th.appendChild(document.createElement('td'));
        td.innerHTML = headers[head];
    }

    for(var elem in array.resultData) {
        var tr = table.appendChild(document.createElement('tr'));
        for (var val in array.resultData[elem]) {
            var td = tr.appendChild(document.createElement('td'));
            td.innerHTML = array.resultData[elem][val];
        }
    }

    return table;
};
