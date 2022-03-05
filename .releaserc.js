// in ".releaserc.js" or "release.config.js"

const dateFormat = require('dateformat')
const { readFileSync } = require('fs');

const TEMPLATE_DIR = path.join(__dirname, '.github', 'templates')

// Given a `const` variable `TEMPLATE_DIR` which points to "<semantic-release-gitmoji>/lib/assets/templates"

// the *.hbs template and partials should be passed as strings of contents
const template = readFileSync(path.join(TEMPLATE_DIR, 'default-template.hbs'))

module.exports = {
    plugins: [
        [
            'semantic-release-gitmoji', {
                releaseRules: {
                    major: [':boom:'],
                    minor: [':sparkles:'],
                    patch: [
                        ':bug:',
                        ':ambulance:',
                        ':lock:',
                        ':lipstick:',
                        ':zap:',
                        ':globe_with_meridians:',
                        ':alien:',
                        ':wheelchair:',
                        ':loud_sound:',
                        ':mute:',
                        ':children_crossing:',
                        ':speech_balloon:',
                        ':iphone:',
                        ':pencil2:',
                        ':bento:',
                        ':green_apple:'
                    ]
                },
                releaseNotes: {
                    template,
                    helpers: {
                        datetime: function(format = 'UTC:yyyy-mm-dd') {
                            return dateFormat(new Date(), format)
                        }
                    },
                }
            }
        ],
        '@semantic-release/github',
        '@semantic-release/npm'
    ]
}