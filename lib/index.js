const request = require('request');
const fs = require('fs');

function buildPDFUrl(user, repo, branch = 'master', theme = 'white') {
    var parts = ['https://gitpitch.com/pitchme/print/github', user, repo, branch, theme, 'PITCHME.pdf'];
    return parts.join('/');
}

function buildZIPUrl(user, repo, branch = 'master', theme = 'white') {
    var parts = ['https://gitpitch.com/pitchme/offline/github', user, repo, branch, theme, 'PITCHME.zip'];
    return parts.join('/');
}
function downloadPDF(user, repo, branch = 'master', theme = 'white') {
    request(buildPDFUrl(user, repo, branch, theme))
        .pipe(fs.createWriteStream('PITCHME.pdf'));

}
function downloadZIP(user, repo, branch = 'master', theme = 'white') {
    request(buildZIPUrl(user, repo, branch, theme))
        .pipe(fs.createWriteStream('PITCHME.zip'));
}

module.exports = {
    buildPDFUrl,
    buildZIPUrl,
    downloadPDF,
    downloadZIP
}
