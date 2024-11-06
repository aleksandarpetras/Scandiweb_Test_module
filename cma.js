/** @type {import('@scandipwa/magento-scripts').CMAConfiguration} */
module.exports = {
    magento: {
        first_name: 'Scandiweb',
        last_name: 'Developer',
        email: 'developer@scandipwa.com',
        user: 'admin',
        password: 'scandipwa123',
        adminuri: 'admin',
        mode: 'developer',
        edition: 'community'
    },
    configuration: {
        elasticsearch: {
            image: 'elasticsearch:7.13.1',
            env: {
                ES_JAVA_OPTS: '-Xms512m -Xmx4096m'
            }
        }
    }
}
