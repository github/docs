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
  'crowdin/github-action@1.0.10',
  'dawidd6/action-delete-branch@v3',
  'docker://chinthakagodawita/autoupdate-action:v1',
  'fkirc/skip-duplicate-actions@a12175f6209d4805b5a163d723270be2a0dc7b36',
  'github/codeql-action/analyze@v1',
  'github/codeql-action/init@v1',
  'ianwalter/puppeteer@3.0.0',
  'juliangruber/approve-pull-request-action@v1',
  'juliangruber/find-pull-request-action@v1',
  'juliangruber/read-file-action@v1',
  'pascalgn/automerge-action@c9bd182',
  'peter-evans/create-issue-from-file@v2',
  'peter-evans/create-pull-request@v2',
  'rachmari/actions-add-new-issue-to-column@v1.1.1',
  'rachmari/labeler@v1.0.4',
  'repo-sync/github-sync@v2',
  'repo-sync/pull-request@v2',
  'rtCamp/action-slack-notify@master',
  'rtCamp/action-slack-notify@v2.1.0',
  'tjenkinson/gh-action-auto-merge-dependency-updates@cee2ac0'
]
