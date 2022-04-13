**Maintaining this template:** If you notice that any of these steps become out-of-date, open a pull request to update this [issue template](https://github.com/github/docs-internal/blob/main/.github/actions-scripts/enterprise-server-issue-templates/release-issue.md).

## To enable the new version

**Do these steps in a local checkout to create a GHES release branch with passing tests:**

If you aren't comfortable going through the steps alone, sync up with a docs engineer to pair with.

- [ ] Create a new branch from `main` with the name `ghes-<RELEASE>-megabranch`. e.g. `ghes-3.2-megabranch`.
- [ ] In [lib/enterprise-server-releases.js](https://github.com/github/docs-internal/blob/main/lib/enterprise-server-releases.js):
  - [ ] Prepend the new release number to the `supported` array.
  - [ ] Increment the `next` variable above the `supported` array (e.g., new release number + `.1`).
  - [ ] Increment the `nextNext` variable above the `supported` array (e.g., new release number + `.2`).
- [ ] Update the GHES dates file:
  - [ ] Make sure you have a `.env` file at the root directory of your local checkout, and that it contains a PAT in the format of `GITHUB_TOKEN=<token>` with `repo` scope. Ensure the PAT is SSO-enabled for the `github` org.
  - [ ] Run the script to update the dates file:

    ```
    script/update-enterprise-dates.js
    ```
- [ ] Create REST files based on previous version. Copy the latest GHES version of the dereferenced file from `lib/rest/static/dereferenced` to a new file in the same directory for the new GHES release. Ex, `cp lib/rest/static/dereferenced/ghes-3.4.deref.json lib/rest/static/dereferenced/ghes-3.5.deref.json`. Then run `script/rest/updated-files.js --decorate-only` and check in the resulting files.

- [ ] Create GraphQL files based on previous version:

  ```
  script/enterprise-server-releases/create-graphql-files.js --oldVersion <PLAN@RELEASE> --newVersion <PLAN@RELEASE>
  ```
- [ ] Create webhook files based on previous version:

  ```
  script/enterprise-server-releases/create-webhook-files.js --oldVersion <PLAN@RELEASE> --newVersion <PLAN@RELEASE>
  ```
- [ ] Create a placeholder release notes file called `data/release-notes/<PRODUCT>/<RELEASE NUMBER>/PLACEHOLDER.yml`. For example `data/release-notes/enterprise-server/3-1/PLACEHOLDER.yml`. Add the following placeholder content to the file:

  ```
  date: '2021-05-04'
  release_candidate: true
  deprecated: false
  intro: PLACEHOLDER
  sections:
    bugs:
      - PLACEHOLDER
    known_issues:
      - PLACEHOLDER
  ```

  **Note:** All of the content in this file will be updated when the release notes are created in the megabranch including the filename `PLACEHOLDER.yml`. You can update the date or leave it as-is and wait to update it when the release notes are finalized.

- [ ] If this is a release candidate release, add a Release Candidate banner:

  ```
  script/enterprise-server-releases/release-banner.js --action create --version <PLAN@RELEASE>
  ```

- [ ] Create a PR with the above changes. This PR is used to track all docs changes and smoke tests associated with the release. For example https://github.com/github/docs-internal/pull/22286.

### When the `docs-internal` release branch is open

- [ ] Add a label to the PR in this format:

  ```
  sync-english-index-for-<PLAN@RELEASE>
  ```

  ☝️ This will run a workflow **on every push to the PR** that will sync **only** the English index for the new version. This will make the GHES content searchable on staging throughout content creation, and will ensure the search updates go live at the same time the content is published. See [`contributing/search.md`](https://github.com/github/docs-internal/blob/main/contributing/search.md) for details.
- [ ] Get the megabranch green with passing tests as soon as possible. This typically involves fixing broken links and working with engineering to address other unexpected test failures.
- [ ] In `github/github`, to create a new GHES release follow these steps (some of these steps may have already been done):
  - [ ] Copy the previous release's root document to a new root document for this release `cp app/api/description/ghes-<LATEST RELEASE NUMBER>.yaml app/api/description/ghes-<NEXT RELEASE NUMBER>.yaml`.
  - [ ] Update the `externalDocs.url` property in that file to use the new GHES release number.
  - [ ] Copy the previous release's configuration file to a new configuration file for this release `cp app/api/description/config/releases/ghes-<LATEST RELEASE NUMBER>.yaml app/api/description/config/releases/ghes-<NEXT RELEASE NUMBER>.yaml`.
  - [ ] Update the `variables.externalDocsUrl`, `variables.ghesVersion`, and `patch.[].value.url` in that file to use the new GHES release number.
  - [ ] Update `published` in that file to `false`. **Note:** This is important to ensure that changes for the next version of the OpenAPI schema changes are not made public until the new version is released.
  - [ ] Create a second PR based on the PR created ☝️ that toggles `published` to `true` in the `app/api/description/config/releases/ghes-<NEXT RELEASE NUMBER>.yaml` file. When this PR merges it will publish the new release to the `github/rest-api-description` repo and will trigger a pull request in the `github/docs-internal` repo with the schemas for the next GHES release. There is a step in this list to merge that PR in the "Before shipping the release branch" section.
- [ ] At least once a day until release, merge `main` into the megabranch and resolve any conflicts or failing tests.

### Troubleshooting

#### `OpenAPI dev mode check / check-schema-versions` failures

If the `OpenAPI dev mode check / check-schema-versions` check fails with the following message:

>  :construction::warning: Your decorated and dereferenced schema files don't match. Ensure you're using decorated and dereferenced schemas from the automatically created pull requests by the 'github-openapi-bot' user. For more information, see 'script/rest/README.md'

- run `git checkout origin/main lib/rest/static/*`
- run `script/enterprise-server-releases/create-rest-files.js --oldVersion enterprise-server@<LATEST PUBLIC RELEASE NUMBER> --newVersion enterprise-server@<NEW RELEASE NUMBER>`
- push the resulting changes

#### `Node.js tests / test content` failures

If the `Node.js tests / test content` check fails with the following message, the `lib/enterprise-dates.json` file is not up-to-date:

> FAIL tests/content/search.js ● search › has remote indexNames in every language for every supported GHE version

This file should be automatically updated, but you can also run `script/update-enterprise-dates.js` to update it. **Note:** If the test is still failing after running this script, look at the dates for this release. If the date is still inaccurate, it may be an issue with the source at https://github.com/github/enterprise-releases/blob/master/docs/supported-versions.md#release-lifecycle-dates. If that is the case, manually update the dates in the `lib/enterprise-dates.json` file.

### Before shipping the release branch

- [ ] Add the GHES release notes to `data/release-notes/`.
- [ ] Add any required smoke tests to the opening post in the megabranch PR.

  Usually, we should smoke test any new GHES admin guides, any large features landing in this GHES version for the first time, and the REST and GraphQL API references.
- [ ] A few days before shipping, check for broken links. Run `script/check-english-links.js` in a local copy of the megabranch.
- [ ] [Freeze the repos](https://github.com/github/docs-content/blob/main/docs-content-docs/docs-content-workflows/freezing.md) at least 1-2 days before the release, and post an announcement in Slack so everybody knows. It's helpful to freeze the repos before doing the OpenAPI merges to avoid changes to the megabranch while preparing and deploying.
- [ ] Alert the Neon Squad (formally docs-ecosystem team)  1-2 days before the release to deploy to `github/github`. A PR should already be open in `github/github`, to change the OpenAPI schema config `published` to `true` in `app/api/description/config/releases/ghes-<NEXT RELEASE NUMBER>.yaml`. They will need to:
  - [ ] Get the required approval from `@github/ecosystem-api-reviewers` then deploy the PR to dotcom. This process generally takes 30-90 minutes.
  - [ ] Once the PR merges, make sure that the auto-generated PR titled "Update OpenAPI Descriptions" in doc-internal contains both the dereferenced and decorated JSON files for the new GHES release. If everything looks good, merge the "Update OpenAPI Description" PR into the GHES release megabranch. **Note:** Be careful about resolving the conflicts correctly—you may wish to delete the existing OpenAPI files for the release version from the megabranch (that is, delete the GHES release version `lib/rest/static` decorated and dereferenced JSON files), so there are no conflicts to resolve and to ensure that the incoming artifacts are the correct ones.
- [ ] Alert the Ecosystem-API team in #ecosystem-api about the pending release freeze and incoming blocking review of OpenAPI updates in the public REST API description (the `rest-api-descriptions` repo). They'll need to block any future "Update OpenAPI Descriptions" PRs in the public REST API description until after the ship.
  - [ ] Add a blocking review to the auto-generated "Update OpenAPI Descriptions" PR in the public REST API description. (You or they will remove this blocking review once the GHES release ships.)


### 🚢 🛳️ 🚢 Shipping the release branch

- [ ] Remove `[DO NOT MERGE]` and other meta information from the PR title 😜.
- [ ] The `github/docs-internal` repo is frozen, and the `Repo Freeze Check / Prevent merging during deployment freezes (pull_request_target)` test is expected to fail.

  Use admin permissions to ship the release branch with this failure. Make sure that the merge's commit title does not include anything like `[DO NOT MERGE]`, and remove all the branch's commit details from the merge's commit message except for the co-author list.
- [ ] Do any required smoke tests listed in the opening post in the megabranch PR. You can monitor and check when the production deploy completed by viewing the [`docs-internal` deployments page](https://github.com/github/docs-internal/deployments).
- [ ] Once smoke tests have passed, you can [unfreeze the repos](https://github.com/github/docs-content/blob/main/docs-content-docs/docs-content-workflows/freezing.md) and post an announcement in Slack.
- [ ] After unfreezing, the megabranch creator should push the search index LFS objects for the public `github/docs` repo. The LFS objects were already pushed for the internal repo after the `sync-english-index-for-<PLAN@RELEASE>` was added to the megabranch. To push the LFS objects to the public repo:
  1. First navigate to the [sync search indices workflow](https://github.com/github/docs-internal/actions/workflows/sync-search-indices.yml). 
  2. Then, to run the workflow with parameters, click on `Run workflow` button. 
  3. A modal will pop up where you will set the following inputs:
     - Branch: The new version megabranch you're working on
     - Version: `enterprise-server@<RELEASE>`
     - Language: `en`
  4. Run the job. The workflow job may fail on the first run—so retry the failed job if needed.
- [ ] After unfreezing, alert the Ecosystem-API team in #ecosystem-api the docs freeze is finished/thawed and the release has shipped. 
  - [ ] You (or they) can now remove your blocking review on the auto-generated "Update OpenAPI Descriptions" PR in public REST API description (the `rest-api-descriptions` repo). (although it's likely newer PRs have been created since yours with the blocking review, in which case the Ecosystem-API team will close your PR and perform the next step on the most recent PR).
  - [ ] The Ecosystem-API team will merge the latest auto-generated "Update OpenAPI Descriptions" PR (which will contain the OpenAPI schema config that changed `published` to `true` for the release).
- [ ] After unfreezing, if there were significant or highlighted GraphQL changes in the release, consider manually running the [GraphQL update workflow](https://github.com/github/docs-internal/actions/workflows/update-graphql-files.yml) to update our GraphQL schemas. By default this workflow only runs once every 24 hours.
- [ ] After the release, in the `docs-content` repo, add the now live version number to the "Specific GHES version(s)" section in the following files: [`.github/ISSUE_TEMPLATE/release-tier-1-or-2-tracking.yml`](https://github.com/github/docs-content/blob/main/.github/ISSUE_TEMPLATE/release-tier-1-or-2-tracking.yml) and [`.github/ISSUE_TEMPLATE/release-tier-3-or-tier-4.yml`](https://github.com/github/docs-content/blob/main/.github/ISSUE_TEMPLATE/release-tier-3-or-tier-4.yml). When the PR is approved, merge it in. 
