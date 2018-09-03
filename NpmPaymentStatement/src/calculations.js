import { dataprepare } from "./dataprepare";

const data = dataprepare();

export const totalSum = () => {
    return data.reduce(
        (result, elem) => {
            result += parseFloat(elem.amount);
            return result
        }, 0
    );
};

const defObject = {
    amount: 0,
    count: 0
};

export const groupByDepartment = () => {
    const groupByDepartment = data.reduce(
        (result, elem) => {
            if (result[elem.department.toString()] === undefined) {
                result[elem.department.toString()] = { ...defObject };
            }
            result[elem.department.toString()].amount += parseFloat(elem.amount);
            result[elem.department.toString()].count++;

            return result;
        }, {}
    );

    const groupByDepartmentResult = [];
    for (const elem in groupByDepartment) {
        groupByDepartmentResult.push({
            key: elem,
            value: groupByDepartment[elem].amount/groupByDepartment[elem].count
        });
    }

    return groupByDepartmentResult;
};

export const groupByMonth = () => {
    const groupByMonth = data.reduce(
        (result, elem) => {
            if (result[elem.month.toString()] === undefined) {
                result[elem.month.toString()] = { ...defObject };
            }
            result[elem.month.toString()].amount += parseFloat(elem.amount);
            result[elem.month.toString()].count++;

            return result;
        }, {}
    );

    const groupByMonthResult = [];
    for (const elem in groupByMonth) {
        groupByMonthResult.push({
            key: elem,
            value: groupByMonth[elem].amount/groupByMonth[elem].count
        });
    }

    return groupByMonthResult;
};

export default {
    totalSum,
    groupByDepartment,
    groupByMonth,
};
