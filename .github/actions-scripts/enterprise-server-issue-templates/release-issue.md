## To enable the new version

**Do these steps in a local checkout to create a GHES release branch with passing tests:**

- [ ] In [lib/enterprise-server-releases.js](https://github.com/github/docs-internal/blob/main/lib/enterprise-server-releases.js):
      - [ ] Prepend the new release number to the `supported` array.
      - [ ] Increment the `next` variable above the `supported` array (e.g., new release number + `.1`)
- [ ] Update the GHES dates file (requires a PAT in a local `.env` file):
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
    script/enterprise-server-release/create-webhook-files.js --oldVersion <PLAN@RELEASE> --newVersion <PLAN@RELEASE>
    ```
- [ ] (Optional) Add a Release Candidate banner:
    ```
    script/enterprise-server-releases/release-banner.js --action create --version <PLAN@RELEASE>
    ```

### When the `docs-internal` release branch is open

- [ ] Add a label to the PR in this format:
    ```
    sync-english-index-for-<PLAN@RELEASE>
    ```
    ☝️ This will run a workflow **on every push to the PR** that will sync **only** the English index for the new version to Algolia. This will make the GHES content searchable on staging throughout content creation, and will ensure the search updates go live at the same time the content is published. See [`contributing/search.md`](https://github.com/github/docs-internal/blob/main/contributing/search.md) for details.

- [ ] In `github/github`, to create a new GHES release follow these steps:
  - [ ] Copy the previous release's root document to a new root document for this release `cp app/api/description/ghes-<LATEST RELEASE NUMBER>.yaml app/api/description/ghes-<NEXT RELEASE NUMBER>.yaml`.
  - [ ] Update the `externalDocs.url` property in that file to use the new GHES release number.
  - [ ] Copy the previous release's configuration file to a new configuration file for this release `cp app/api/description/config/releases/ghes-<LATEST RELEASE NUMBER>.yaml app/api/description/config/releases/ghes-<NEXT RELEASE NUMBER>.yaml`.
  - [ ] Update the `variables.externalDocsUrl`, `variables.ghesVersion`, and `patch.[].value.url` in that file to use the new GHES release number.
  - [ ] Update `published` in that file to `false`. **Note:** This is important to ensure that 3.1 OpenAPI changes are not made public until 3.1 is released.

#### Troubleshooting

If the `OpenAPI dev mode check / check-schema-versions` check fails on the release branch, in your local checkout of the mega branch:

- run `git checkout origin/main lib/rest/static/*`
- run `script/rest/update-files.js --decorate-only`
- push the resulting changes

### Before shipping the release branch

- [ ] Add the GHES release notes to `data/release-notes/` and update the versioning frontmatter in `content/admin/release-notes.md` to `enterprise-server: '<=<RELEASE>'`
- [ ] In `github/github`, open a PR to change `published` to `true` in  `app/api/description/config/releases/ghes-<NEXT RELEASE NUMBER>.yaml`. Get the required approval from `@github/ecosystem-api-reviewers` then deploy to dotcom. This process generally takes 30-90 minutes. Ask in `#docs-ecosystem` if you need help with this.
