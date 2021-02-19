// This is an AllowList of GitHub Actions that are approved for use in this project.
// If a new or existing workflow file is updated to use an action or action version not listed here,
// CI will fail and the action will need to be audited by the docs engineering team before it
// can be added it this list.

module.exports = [
  'actions/cache@0781355a23dac32fd3bac414512f4b903437991a', //actions/cache@v2.1.3
  'actions/checkout@5a4ac9002d0be2fb38bd78e4b4dbde5606d7042f', //actions/checkout@v2.3.4
  'actions/github-script@626af12fe9a53dc2972b48385e7fe7dec79145c9', //actions/script@v3.0.0
  'actions/labeler@5f867a63be70efff62b767459b009290364495eb', //actions/labeler@v2.2.0
  'actions/setup-node@c46424eee26de4078d34105d3de3cc4992202b1e', //actions/setup-node@v2.1.4
  'ruby/setup-ruby@fdcfbcf14ec9672f6f615cb9589a1bc5dd69d262', //ruby/setup-ruby@vv1.64.1
  'actions/stale@9d6f46564a515a9ea11e7762ab3957ee58ca50da', //actions/stale@v3.0.16
  'crowdin/github-action@fd9429dd63d6c0f8a8cb4b93ad8076990bd6e688',
  'crykn/copy_folder_to_another_repo_action@0282e8b9fef06de92ddcae9fe6cb44df6226646c',
  'cschleiden/actions-linter@0ff16d6ac5103cca6c92e6cbc922b646baaea5be',
  'dawidd6/action-delete-branch@47743101a121ad657031e6704086271ca81b1911',
  'docker://chinthakagodawita/autoupdate-action:v1',
  'fkirc/skip-duplicate-actions@36feb0d8d062137530c2e00bd278d138fe191289',
  'github/codeql-action/analyze@v1',
  'github/codeql-action/init@v1',
  'ianwalter/puppeteer-container@2466ba8ecf689ccf4e5dfadeff3ac2db227b2e17',
  'juliangruber/approve-pull-request-action@c530832d4d346c597332e20e03605aa94fa150a8',
  'juliangruber/find-pull-request-action@2fc55e82a6d5d36fe1e7f1848f7e64fd02d99de9',
  'juliangruber/read-file-action@e0a316da496006ffd19142f0fd594a1783f3b512',
  'lee-dohm/close-matching-issues@22002609b2555fe18f52b8e2e7c07cbf5529e8a8',
  'pascalgn/automerge-action@c9bd1823770819dc8fb8a5db2d11a3a95fbe9b07', //pascalgn/automerge@0.12.0
  'peter-evans/create-issue-from-file@a04ce672e3acedb1f8e416b46716ddfd09905326',
  'peter-evans/create-or-update-comment@5221bf4aa615e5c6e95bb142f9673a9c791be2cd',
  'peter-evans/create-pull-request@8c603dbb04b917a9fc2dd991dc54fef54b640b43',
  'rachmari/actions-add-new-issue-to-column@1a459ef92308ba7c9c9dc2fcdd72f232495574a9',
  'rachmari/labeler@832d42ec5523f3c6d46e8168de71cd54363e3e2e',
  'repo-sync/github-sync@3832fe8e2be32372e1b3970bbae8e7079edeec88',
  'repo-sync/pull-request@65194d8015be7624d231796ddee1cd52a5023cb3', // repo-sync/pull-request@v2.6
  'someimportantcompany/github-actions-slack-message@0b470c14b39da4260ed9e3f9a4f1298a74ccdefd',
  'tjenkinson/gh-action-auto-merge-dependency-updates@4d7756c04d9d999c5968697a621b81c47f533d61',
  'EndBug/add-and-commit@9358097a71ad9fb9e2f9624c6098c89193d83575',
  'dorny/paths-filter@eb75a1edc117d3756a18ef89958ee59f9500ba58'
]
