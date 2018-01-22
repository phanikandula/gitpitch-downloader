Utility to download pdf and zip files for a public repo in Github.

*Current limitation*: This node package works with github.com public repos only. 

However, (gitpitch.com) [https://gitpitch.com] works with more services like gitlab.

# Install
```
npm install --save gitpitch-downloader
```

## Use in code
```
const gitpitch = require('gitpitch-downloader');

//This sample code will download PITCHME.pdf and PITCHME.zip files (into current directory) for presentation in repo:
//https://github.com/gitpitch/kitchen-sink

gitpitch.downloadPDF('gitpitch', 'kitchen-sink');
gitpitch.downloadZIP('gitpitch', 'kitchen-sink');

```

## Options

`downloadPDF(user, repo, branch, theme)` can also take branch and theme name. Defaults are set to master and white respectively.

`downloadZIP(user, repo, branch, theme)` can also take branch and theme name. Defaults are set to master and white respectively.

## Additional methods

`buildPDFUrl(user, repo, branch, theme)` and `buildZIPUrl(user, repo, branch, theme)` can generate urls based on current internal api of the github server. This is useful if you want to download files with a different program like curl or wget instead of using download functions provided with this package.
