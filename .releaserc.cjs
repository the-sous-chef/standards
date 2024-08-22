module.exports = {
    branches: [
        { name: 'main' },
        { name: 'alpha', channel: 'alpha', prerelease: true },
        { name: 'beta', channel: 'beta', prerelease: true },
    ],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
                parserOpts: {
                    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
                },
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
                parserOpts: {
                    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
                },
                writerOpts: {
                    commitsSort: ['subject', 'scope'],
                },
            },
        ],
        ['@semantic-release/npm'],
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md',
            },
        ],
        [
            '@semantic-release/git',
            {
                assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
                message:
                    'chore(<%= branch.prerelease ? "prerelease" : "release" %>): ${nextRelease.version} [ci skip]\n\n${nextRelease.notes}',
            },
        ],
    ],
};
