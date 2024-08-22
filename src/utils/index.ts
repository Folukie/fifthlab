
export const generateActions = (action: string) => {
    action = action.toUpperCase();
    return {
        REQUEST: `${action}_REQUEST`,
        SUCCESS: `${action}_SUCCESS`,
        FAILURE: `${action}_FAILURE`,
    };
};

export const downloadCSV = (headers: any[], data: any[], filename: string) => {
    const csvContent = convertArrayToCSV(headers, data);

    const blob = new Blob([csvContent], { type: "text/csv" });

    const downloadLink = document.createElement("a");
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = filename;

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
};

const convertArrayToCSV = (headers: string[], array: any[]): string => {
    const csvRows = [];

    csvRows.push(headers.join(","));

    array.forEach((item) => {
        const values = headers.map((header) => item[header]);
        csvRows.push(values.join(","));
    });

    return csvRows.join("\n");
};