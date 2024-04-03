// Code your solution here
function findMatching(drivers, searchName) {
    const lowerCaseQuery = searchName.toLowerCase();
    const matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase() === lowerCaseQuery);
    console.log(matchingDrivers);
    return matchingDrivers;
}
console.log(findMatching(["edian", "batty", "brejin"], "batty"));

function fuzzyMatch(drivers, nameLetter) {
    const lowerCaseQuery = nameLetter.toLowerCase();
    const matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase().startsWith(lowerCaseQuery));

    return matchingDrivers;
}
console.log(fuzzyMatch(["kevin", "butita", "alias", "adrian", "kobe"], "kobe"));

function matchName(drivers, last) {
    const newDrivers = drivers.filter(driver => driver.name === last);
    return newDrivers;
}
console.log(matchName([{ name: "evans", hometown: "kenya" }, { name: "edian", hometown: 'kenya' }],"e"))