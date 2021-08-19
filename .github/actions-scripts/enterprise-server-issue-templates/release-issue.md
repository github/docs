**Maintaining this template:** If you notice that any of these steps become out-of-date, open a pull request to update this [issue template](https://github.com/github/docs-internal/blob/main/.github/actions-scripts/enterprise-server-issue-templates/release-issue.md).

## To enable the new version

**Do these steps in a local checkout to create a GHES release branch with passing tests:**

If you aren't comfortable going through the steps alone, sync up with a docs engineer to pair with.

- [ ] Create a new branch from `main` with the name `ghes-<RELEASE>-megabranch`. e.g. `ghes-3.2-megabranch`.
- [ ] In [lib/enterprise-server-releases.js](https://github.com/github/docs-internal/blob/main/lib/enterprise-server-releases.js):
  - [ ] Prepend the new release number to the `supported` array.
  - [ ] Increment the `next` variable above the `supported` array (e.g., new release number + `.1`)
- [ ] Update the GHES dates file:
  - [ ] Make sure you have a `.env` file at the root directory of your local checkout, and that it contains a PAT in the format of `GITHUB_TOKEN=<token>`.
  - [ ] Run the script to update the dates file:

    ```
    script/update-enterprise-dates.js
    ```
- [ ] Create REST files based on previous version:

  ```
  script/enterprise-server-releases/create-rest-files.js --oldVersion <PLAN@RELEASE> --newVersion <PLAN@RELEASE>
  ```
- [ ] Create GraphQL files based on previous version:

  ```
  script/enterprise-server-releases/create-graphql-files.js --oldVersion <PLAN@RELEASE> --newVersion <PLAN@RELEASE>
  ```
- [ ] Create webhook files based on previous version:

  ```
  script/enterprise-server-releases/create-webhook-files.js --oldVersion <PLAN@RELEASE> --newVersion <PLAN@RELEASE>
  ```
- [ ] Create a placeholder release notes file called `data/release-notes/<PRODUCT>/<RELEASE NUMBER>/PLACEHOLDER.yml`. For example `data/release-notes/3-1/PLACEHOLDER.yml`. Add the following placeholder content to the file:

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
- [ ] Create the search indices for the new release:

  ```
  npm run sync-search-ghes-release
  ```

  Check in the updated `lib/search/cached-index-names.json`.
- [ ] (Optional) Add a Release Candidate banner:

  ```
  script/enterprise-server-releases/release-banner.js --action create --version <PLAN@RELEASE>
  ```

### When the `docs-internal` release branch is open

- [ ] Add a label to the PR in this format:

  ```
  sync-english-index-for-<PLAN@RELEASE>
  ```

  ☝️ This will run a workflow **on every push to the PR** that will sync **only** the English index for the new version. This will make the GHES content searchable on staging throughout content creation, and will ensure the search updates go live at the same time the content is published. See [`contributing/search.md`](https://github.com/github/docs-internal/blob/main/contributing/search.md) for details.

- [ ] In `github/github`, to create a new GHES release follow these steps (some of these steps may have already been done):
  - [ ] Copy the previous release's root document to a new root document for this release `cp app/api/description/ghes-<LATEST RELEASE NUMBER>.yaml app/api/description/ghes-<NEXT RELEASE NUMBER>.yaml`.
  - [ ] Update the `externalDocs.url` property in that file to use the new GHES release number.
  - [ ] Copy the previous release's configuration file to a new configuration file for this release `cp app/api/description/config/releases/ghes-<LATEST RELEASE NUMBER>.yaml app/api/description/config/releases/ghes-<NEXT RELEASE NUMBER>.yaml`.
  - [ ] Update the `variables.externalDocsUrl`, `variables.ghesVersion`, and `patch.[].value.url` in that file to use the new GHES release number.
  - [ ] Update `published` in that file to `false`. **Note:** This is important to ensure that changes for the next version of the OpenAPI schema changes are not made public until the new version is released.
  - [ ] Create a second PR based on the PR created ☝️ that toggles `published` to `true` in the `app/api/description/config/releases/ghes-<NEXT RELEASE NUMBER>.yaml` file. When this PR merges it will publish the new release to the `github/rest-api-description` repo and will trigger a pull request in the `github/docs-internal` repo with the schemas for the next GHES release. There is a step in this list to merge that PR in the "Before shipping the release branch" section.

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

- [ ] Add the GHES release notes to `data/release-notes/` and update the versioning frontmatter in `content/admin/release-notes.md` to `enterprise-server: '<=<RELEASE>'`
- [ ] Alert the Neon Squad (formally docs-ecosystem team)  1-2 days before the release to deploy to `github/github`. A PR should already be open in `github/github`, to change `published` to `true` in  `app/api/description/config/releases/ghes-<NEXT RELEASE NUMBER>.yaml`. They will need to:
  - [ ] Get the required approval from `@github/ecosystem-api-reviewers` then deploy the PR to dotcom. This process generally takes 30-90 minutes.
  - [ ] Once the PR merges, make sure that the auto-generated PR titled "Update OpenAPI Descriptions" in doc-internal contains both the derefrenced and decorated JSON files for the new GHES release. If everything looks good, merge the "Update OpenAPI Description" PR into the GHES release megabranch.
  - [ ] Add a blocking review to the auto-generated "Update OpenAPI Descriptions" PR in the public REST API description. (Remove this blocking review once the GHES release ships.)
- [ ] [Freeze the repos](https://github.com/github/docs-content/blob/main/docs-content-docs/docs-content-workflows/freezing.md) at least 1-2 days before the release, and post an announcement in Slack so everybody knows.

### 🚢 🛳️ 🚢 Shipping the release branch

- [ ] Remove `[DO NOT MERGE]` and other meta information from the PR title 😜.
- [ ] The `github/docs-internal` repo is frozen, and the `Repo Freeze Check / Prevent merging during deployment freezes (pull_request_target)` test is expected to fail. Use admin permissions to ship the release branch with this failure.
- [ ] Do any required smoke tests.
- [ ] Once smoke tests have passed, you can [unfreeze the repos](https://github.com/github/docs-content/blob/main/docs-content-docs/docs-content-workflows/freezing.md) and post an announcement in Slack.
