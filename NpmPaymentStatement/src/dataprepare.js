import {filedata} from "./filedata";

export const dataprepare = () => {
    const lines = filedata.split("\n").map((elem) => {
        return elem.trim()
    });
    const headers = lines.shift().split(',');

    for (var key in lines) {
        if (lines[key] === '') {
            lines.splice(key);
        }
    }

    return lines.map((elem) => {
        const obj = {};

        const elemValues = elem.split(',');

        for (var index in elemValues) {
            obj[headers[index].toLocaleLowerCase()] = elemValues[index];
        }

        return obj;
    });
};
