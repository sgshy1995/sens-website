module.exports = {
    apps: [
        {
            name: 'website',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
