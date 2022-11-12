const apps = [
    { name: 'pool', script: 'npm', args:'start'}]
module.exports = {
    apps: apps.map((app) => ({
        ...app })),
};
