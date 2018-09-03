import { createTable } from "./tablebuild";

import { totalSum, groupByMonth, groupByDepartment } from "./calculations";

createTable(
    {total: "Total"},
    {resultData: [{total: totalSum()}]}
);

createTable(
    {department: "Department", amount: "Average"},
    {resultData: groupByDepartment()}
);

createTable(
    {department: "Month", amount: "Average"},
    {resultData: groupByMonth()}
);
