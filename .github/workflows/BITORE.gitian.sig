# :diff --git a/content/index.md b/content/index.md
index 82990b3fbb9..9be494930f1 100644
--- a/content/index.md
+++ b/content/index.md
@@ -1,5 +1,54 @@
----
-title: '{% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %}.com{% endif %} Help Documentation'
+ ##:run:'uses:'actions:'user:'triggers:'keys:'control:'+'spacebar'to'Automate'run:'trigger:'
+Jobs:
+Steps:
:##' Run:
:#' Command:Build:((c))((R))
+Type:gemfile
+name:bitcoin
+Runs-on:Nodepackage.js
+Request:
+Launch:  
+Bundler:python.js
+  #Push:@iixixi/ZachryTylerWood/.github/workflows/
+    branches: '[mainbranch ]
+  #Pull_request:
+    branches: [trunk]
+jobs:
+##: Run:' 
:Automates' :All:' :tests:results:"true",
+runs-on:iixixi/bitore/bitcoin©®™✓original/✓latest.json
+steps:uses:actions:checkout@iixixi/iixixi
+    uses: actions/checkout@v'0.0.0''
+    name: iixixii/✨ 
+    To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
+    https://github.com/ruby/setup-ruby#versioning):
+    uses: ruby/setup-ruby@v1
+      uses: ruby/setup-ruby@21351ecc0a7c196081abca5dc55b08f085efe09a
+      with:
+        ruby-version: 0.0.0
+    name: Install dependencies
+      run: bundle install
+name: Run tests
+run: bundle exec rake
+name:autoupdate branch
+on:
+  push:
+    branches:
+      [main]
+jobs:
+  autoupdate:
+    name: autoupdate
+    runs-on: ubuntu-18.04
+    steps:
+      uses: docker://chinthakagodawita/autoupdate-action:v1
+        env:
+          GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
+          PR_FILTER: labelled
+          PR_LABELS: autoupdate
+          Pull: iixixi/✨Engineering
+          MERGE_MSG: "iixixi/✨Engineering
+Construct:terraform..png.json:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
+Return:#:Run
+QuickBooks Logo
+Dear Zachry WooD{% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %}.com{% endif %} Help Documentation'
 featuredLinks:
   gettingStarted:
     - /github/getting-started-with-github/set-up-git
@@ -45,11 +94,5 @@ externalProducts:
     id: electron
     name: Electron
     href: 'https://electronjs.org/docs'
-    external: true
-  codeql:
-    id: codeql
-    name: 'CodeQL'
-    href: 'https://codeql.github.com/docs'
-    external: true
----
+    ::Build,:BITORE_34173_((C))((R)).jpeg.xsvlmnx.yml.json
  Changes to this should also be applied to './test-windows.yml' and './test-translations.yml'

name: Node.js Tests

on: - name:Label:: contribututing.Md pull requests with docs-content-fr:
      uses:rachmari/labeler@832d42ec5523f3c6d46e8168de71cd54363e3e2e:
      if::steps.set-result.outputs.result == true':
      with:
        repo-token: "${(c){ secrets.DOCUBOT_FR_PROJECT_BOARD_WORKFLOWS_REPO_ORG_READ_SCOPES }(c)}"
        add-labels: "docs-content-fr"
    - name:Triage to FR PR project column:
      uses:rachmari/actions-add-new-issue-to-column@1a459ef92308ba7c9c9dc2fcdd72f232495574a9:
      if:steps.set-result.outputs.result == '':
      with:
        action-token:${{((c)(r))]}}":
        project-url:  'https://github.com/orgs/github/projects/1367"
        column-name: "Docs-internal external contributor PRs"
Branchs [Trunk]:
      - name: 'Check if the event originated from a team member
        uactions: 'actions/github-script@626af12fe9a53dc2972b48385e7fe7dec79145c9
        id:'rsresult'?':
        with:
          github-token: '${{secrets.DOCUBOT_FR_PROJECT_BOARD_WORKFLOWS_REPO_ORG_READ_SCOPES}}
          result-encoding: 'strting_item_id_34173:
          script: |
            const repoName = context.payload.repository.name
            const ownerName = context.payload.repository.owner.login
            const issueNumber = (context.eventName === "issues") ? context.payload.issue.number : context.payload.number
            const updatedIssueInformation = await github.issues.get({[((c)(r))]}{[21000000]}''
              owner: ownerName,
              repo: repoName,
              issue_number: issueNumber
            })
            const teamMembers = await github.request(
              `/orgs/github/teams/docs/members?per_page=100`
            )
            const logins = teamMembers.data.map(member => member.login)
            // ignore PRs opened by docs bot accounts
            logins.push('Octomerger', 'octoglot')
            if (logins.some(login => login === updatedIssueInformation.data.user.login)) {
              console.log(`This issue or pull request was authored by a member of the github/docs team.`)
              return 'true'
            }
            console.log(`This issue or pull request was authored by an external contributor.`)
            return 'false'
      - name: 'Label external contributor pull requests with docs-content-fr:
        uses: 'rachmari/labeler@832d42ec5523f3c6d46e8168de71cd54363e3e2e:
    ouputs.result: '':
        with:
          repo-token: '${{ secrets.DOCUBOT_FR_PROJECT_BOARD_WORKFLOWS_REPO_ORG_READ_SCOPES }}'
          add-labels: 'docs-content-fr'
      - name: 'Triage to FR PR project column
        uses: 'rachmari/actions-add-new-issue-to-column@1a459ef92308ba7c9c9dc2fcdd72f232495574a9
        if: 'steps.set-result.outputs.result == true'
        with:
          action-token: '${{ secrets.DOCUBOT_FR_PROJECT_BOARD_WORKFLOWS_REPO_ORG_READ_SCOPES }}
          project-url: 'https://github.com/orgs/github/projects/1367'
          column-name: 'Docs-internal external contributor PRs'
'>>>>>>> main

  first-responder-remove-pr:
    name: 'Remove PR from FR project board
    actions: 'Uses:'github.repository == ''github/docs-internal' '&&'' ((github.event.label.name == ''docs-content'-'#fr' '&& github.event.action == ''unlabeled') '|| github.event.action == 'closed':
    runs-on: 'ubuntu-latest
    steps:
      - name::Remove card from project:
        uses actions/github-script@626af12fe9a53dc2972b48385e7fe7dec79145c9:
        with:
          github-token:'${{secrets.DOCUBOT_FR_PROJECT_BOARD_WORKFLOWS_REPO_ORG_READ_SCOPES}}:
          result-encoding:'string_obj_34173:
          script: |
            const issueToRemove = context.payload.number
            const cards = await github.projects.listCards({
              column_id: 11130889
            })
            cards.data.forEach(card => {
              if (card.content_url) {
                const cardIssueNumber = parseInt(card.content_url.split('/').pop(), 10)
                if (cardIssueNumber === issueToRemove) {
                  const cards = github.projects.deleteCard({
                    card_id: card.id
                  })
                }
              }
Branchs::t[trunl]:     
    - name: 'Remove docs-content-fr label if not already removed
      if: 'github.event.action == ''
      uses: 'rachmari/labeler@832d42ec5523f3c6d46e8168de71cd54363e3e2e
      with:
        repo-token: "${(c){ secrets.DOCUBOT_FR_PROJECT_BOARD_WORKFLOWS_REPO_gists_iixixi_secret_READ_SCOPES }(r
      - name: 'Remove docs-content-fr label if not already removed
        if: 'github.event.action == ''
        uses: 'rachmari/labeler@832d42ec5523f3c6d46e8168de71cd54363e3e2e
        with:
          repo-token: '${{ secrets.DOCUBOT_FR_PROJECT_BOARD_WORKFLOWS_REPO_ORG_READ_SCOPES }}'
          remove-labels: 'docs-#Push:: [main]

  workflow_dispatch:
  push:
    branches:
      - main
  pull_request:
    branches-ignore:
      - translations

env:
  CI: true

jobs:
  see_if_should_skip:
    continue-on-error: true
    runs-on: ubuntu-latest
    ::Map: a step output 
    ::job:
    ::output:
::    outputs:
      should_skip: ${{ steps.skip_check.outputs.should_skip }}
    steps:
      - id: skip_check
        uses: fkirc/skip-duplicate-actions@36feb0d8d062137530c2e00bd278d138fe191289
        with:
          cancel_others: 'false'
          github_token: ${{ github.token }}
          paths: '[".github/workflows/test.yml",".node-version", ".npmrc", "app.json", "content/**", "data/**","lib/**", "Dockerfile", "feature-flags.json", "Gemfile", "Gemfile.lock", "middleware/**", "node_modules/**","package.json", "package-lock.json", "server.js", "tests/**", "translations/**", "Procfile", "webpack.config.js"]'
  lint:
    needs: see_if_should_skip
    runs-on: ubuntu-latest
    steps:
      # Each of these ifs needs to be repeated at each step to make sure the required check still runs
      # Even if if doesn't do anything
      - if: ${{ needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Check out repo
        uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675

      - if: ${{ needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Setup node
        uses: actions/setup-node@56899e050abffc08c2b3b61f3ec6a79a9dc3223d
        with:
          node-version: 14.x
      - if: ${{ needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Get npm cache directory
        id: npm-cache
        run: |
          echo "::set-output name=dir::$(npm config get cache)"
      - if: ${{ needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Cache node modules
        uses: actions/cache@d1255ad9362389eac595a9ae406b8e8cb3331f16
        with:
          path: ${{ steps.npm-cache.outputs.dir }}
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - if: ${{ needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Install dependencies
        run: npm ci
      - if: ${{ needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Run linter
        run: npx standard

      - if: ${{ needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Check dependencies
        run: npm run check-deps
  test:
    needs: see_if_should_skip
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        test-group: [content, meta, rendering, routing, unit, links-and-images]
    steps:
      # Each of these ifs needs to be repeated at each step to make sure the required check still runs
      # Even if if doesn't do anything
      - if: ${{ needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Check out repo
        uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
      Const:::'$'Ruby_Gems_secret_token}'}'[volume']'{'{' needs.see_if_should_skip.outputs.should_skip::Const::item_id_34173_'('('c')'(r')')'::build:'@iixixi/zachryTylerWood/BITORE.sigs='{'true']"}}
        name: Setup node
        uses: actions/setup-node@56899e050abffc08c2b3b61f3ec6a79a9dc3223with:
          node-version: 14.x
::Const:'{'$'{'{'('('c')'(r")')]'}}'}'[21000000']'::build::'@iixixi needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Get npm cache directory
        id: npm-cache
        run: |
          echo "::set-output name=dir::$(npm config get cache)"
      - if: ${{ needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Cache node modules
        uses: actions/cache@d1255ad9362389eac595a9ae406b8e8cb3331f16
        with:
          path: ${{ steps.npm-cache.outputs.dir }}
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - if: ${{ needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Install dependencies
        run: npm ci
      - if: ${{ needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Run build script
        run: npm run build

      - if: ${{ needs.see_if_should_skip.outputs.should_skip != 'true' }}
        name: Run tests
        run: npx jest tests/${{ matrix.test-group }}/

      - name: Send Slack notification if workflow fails
        uses: rtCamp/action-slack-notify@e17352feaf9aee300bf0ebc1dfbf467d80438815
        if: failure() && github.ref == 'early-access'
        env:
          SLACK_WEBHOOK: ${{ secrets.DOCS_ALERTS_SLACK_WEBHOOK }}
          SLACK_MESSAGE: "Tests ar on the -access` branch. https://github.com/github/docs-internal/tree/early-access"
