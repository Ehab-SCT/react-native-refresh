export const delay = (t: number, v?: any) => {
    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t);
    });
};
