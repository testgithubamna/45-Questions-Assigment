function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
;
let answer = storeCarInfo("Honda", "Civic", { color: 'black' }, { features: ['navigation', 'Power window'] });
console.log(answer);
export {};
