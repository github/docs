// This is an AllowList of GitHub Actions that are approved for use in this project.
// If a new or existing workflow file is updated to use an action or action version not listed here,
// CI will fail and the action will need to be audited by the docs engineering team before it
// can be added it this list.

module.exports = [
  'actions/cache@70655ec8323daeeaa7ef06d7c56e1b9191396cbe',
  'actions/cache@d1255ad9362389eac595a9ae406b8e8cb3331f16',
  'actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675',
  'actions/github-script@5d03ada4b0a753e9460b312e61cc4f8fdeacf163',
  'actions/github-script@6e5ee1dc1cb3740e5e5e76ad668e3f526edbfe45',
  'actions/github-script@44b873bc975058192f5279ebe7579496381f575d',
  'actions/github-script@626af12fe9a53dc2972b48385e7fe7dec79145c9',
  'actions/labeler@5f867a63be70efff62b767459b009290364495eb',
  'actions/setup-node@56899e050abffc08c2b3b61f3ec6a79a9dc3223d',
  'actions/setup-ruby@5f29a1cd8dfebf420691c4c9a0e832e2fae5a526',
  'actions/stale@44f9eae0adddf72dbf3eedfacc999f70afcec1a8',
  'crowdin/github-action@fd9429dd63d6c0f8a8cb4b93ad8076990bd6e688',
  'dawidd6/action-delete-branch@47743101a121ad657031e6704086271ca81b1911',
  'docker://chinthakagodawita/autoupdate-action:v1',
  'fkirc/skip-duplicate-actions@36feb0d8d062137530c2e00bd278d138fe191289',
  'github/codeql-action/analyze@v1',
  'github/codeql-action/init@v1',
  'ianwalter/puppeteer@12728ddef82390d1ecd4732fb543f62177392fbb',
  'juliangruber/approve-pull-request-action@c530832d4d346c597332e20e03605aa94fa150a8',
  'juliangruber/find-pull-request-action@64d55773c959748ad30a4184f4dc102af1669f7b',
  'juliangruber/read-file-action@e0a316da496006ffd19142f0fd594a1783f3b512',
  'pascalgn/automerge-action@c9bd182',
  'peter-evans/create-issue-from-file@35e304e2a12caac08c568247a2cb46ecd0c3ecc5',
  'peter-evans/create-pull-request@938e6aea6f8dbdaced2064e948cb806c77fe87b8',
  'rachmari/actions-add-new-issue-to-column@1a459ef92308ba7c9c9dc2fcdd72f232495574a9',
  'rachmari/labeler@832d42ec5523f3c6d46e8168de71cd54363e3e2e',
  'repo-sync/github-sync@3832fe8e2be32372e1b3970bbae8e7079edeec88',
  'repo-sync/pull-request@ea6773388b83b337e4da9a223293309f2c3670e7',
  'rtCamp/action-slack-notify@e17352feaf9aee300bf0ebc1dfbf467d80438815',
  'tjenkinson/gh-action-auto-merge-dependency-updates@cee2ac0'
]
