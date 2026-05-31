const userPerifyConfig = { serverId: 6703, active: true };

const userPerifyHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6703() {
    return userPerifyConfig.active ? "OK" : "ERR";
}

console.log("Module userPerify loaded successfully.");