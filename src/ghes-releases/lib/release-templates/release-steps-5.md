---
title: Prepare OpenAPI assets for GHES {{ release-number }} release candidate
labels:
  - Enterprise
  - GHES {{ release-number }}
  - new-release
  - priority-0
  - skip FR board
---

## Instructions for triage

- [ ] In the Enterprise focus area's project, adjust the "Cycle" field for this issue to the cycle four weeks before the target date.

## Instructions for assignee

To incorporate updates to our REST API and webhook documentation into the publication branch you created for {{ release-steps-1-url }}, you must prepare a release configuration in `github/github`, prepare the new assets for publication, coordinate the generation of the new OpenAPI content, then merge the content into your publication branch.

- [Prepare OpenAPI release configuration](#release-configuration-preparation)
- [Prepare PR to publish release](#publication-preparation)
- [Merge OpenAPI changes into publication branch](#merge) 🗓️ **Thursday before release**
- [Complete preparation for the RC and publish the docset](#publication)

<br/>
<a name="release-configuration-preparation">

### [🚀](#release-configuration-preparation) Prepare OpenAPI release configuration

For each GHES release, there's a corresponding OpenAPI configuration. Ensure it's present. The [API team](https://github.com/github/ecosystem-api) often completes these steps before we prepare for a GHES RC, so some of this work may already be complete.

- [ ] In `github/github`, within [`app/api/description/config/releases`](https://github.com/github/github/tree/master/app/api/description/config/releases), check for a `ghes-VERSION.yaml` file, where VERSION is the version we're releasing. (**Note**: These steps were already done when I created this tracking issue.)

  - **If the file exists**, validate its contents.

    - [ ] `published` should be set to `false`.

    - [ ] Any references to a GHES version should reflect the version we're releasing.

    - [ ] Beneath `path: "/info/x-github-api-versions"`, the `value` should be the API's calendar date version for the prior release of GHES from [`release_api_versioning_support.yaml`](https://github.com/github/github/blob/master/app/api/description/config/release_api_versioning_support.yaml).

  - **If the file doesn't exist**, prepare a PR.

    - [ ] Within a codespace in `github/github`, from `master`, create a new branch named `ghes-VERSION-rc/add-release-configuration`. For example, `ghes-3.10-rc/add-release-configuration`.

    - [ ] To copy an existing release configuration into place, run the following command, replacing LATEST-VERSION with the last version we released, and VERSION-TO-RELEASE with the version we're releasing.

       ```shell
       cp app/api/description/config/releases/ghes-LATEST-VERSION.yaml app/api/description/config/releases/ghes-VERSION-TO-RELEASE.yaml
       ```

    - [ ] Edit the `app/api/description/config/releases/ghes-VERSION-TO-RELEASE.yaml` file that you created.

      - [ ] Set `published` to `false`.

      - [ ] Find and replace any occurrences of the prior version with the version that we're releasing. At the time of writing, the following four keys include values that reference the version number.

        - `variables.externalDocsUrl`

        - `variables.ghesVersion`

        - Two keys under `patch` for the paths `/info/x-github-release` and `/externalDocs`

- [ ] Edit [`app/api/description/config/release_api_versioning_support.yaml`](https://github.com/github/github/blob/master/app/api/description/config/release_api_versioning_support.yaml).

  - [ ] Copy the line for the previous release of GHES and the API's calendar-date version on the row beneath it. 

  - [ ] Paste the line beneath the previous version and its API version, and edit the line to reflect the version we're releasing.

- [ ] Create a PR targeting `master` with the changes in your topic branch.

- [ ] Get the necessary reviews, then deploy and merge the PR.

<br/>
<a name="publication-preparation">

### [🆕](#publication-preparation) Prepare PR to publish release

To prepare for publication, create a PR in `github/github` that publishes the schema for the release.

- [ ] In `github/github`, edit `app/api/description/config/releases/ghes-VERSION-TO-RELEASE.yaml`, where VERSION-TO-RELEASE is the version we're releasing.

- [ ] Set `published` to `true`.

- [ ] Create a PR.

- [ ] Get the necessary reviews, but **do not deploy and merge the PR**. You'll merge this PR closer to the RC's release date, while Docs' repositories are frozen.

<br/>
<a name="merge">

### [👯](#merge) Integrate OpenAPI changes into publication branch

To trigger creation of an OpenAPI PR with the updated schema for the RC, merge your publication PR in `github/github`.

- [ ] On the Thursday after you begin the freeze of Docs' repositories per {{ release-steps-0-url }}, merge the publication PR you [prepared in `github/github`](#publication-preparation).

- [ ] In [#ecosystem-api](https://github.slack.com/archives/C1042T6MS) on Slack, update and then post the following message to notify the team of the upcoming release. Replace VERSION with the version we're releasing.

  > 👋 Hi from Docs! We have just marked `published` for the GHES VERSION release configuration to `true`. Please **do not** merge subsequent "Update OpenAPI 3.x Descriptions" PRs [in github/rest-api-description](https://github.com/github/rest-api-description/pulls) until further notice. Thanks!

- [ ] On the Friday during the freeze, locate the latest "Update OpenAPI 3.x Descriptions" PRs [in `github/rest-api-description`](https://github.com/github/rest-api-description/pulls).

- [ ] On each new PR, leave a review that requests changes with the following comment.

  > This PR contains changes for the upcoming GHES RC. Please do not merge this or subsequent PRs until further notice in #ecosystem-api. Thanks!

- [ ] From now until after the freeze, all [existing "Update OpenAPI Description" PRs](https://github.com/github/docs-internal/labels/github-openapi-bot) in `github/docs-internal` can be closed.

To get the latest changes from the latest "Update OpenAPI 3.x Descriptions" PR in the `github/rest-api-description` repository into your PR to close {{ release-steps-1-url }}, you can use one of two methods.

The benefit of the first method is that you don't need to deal with merging two PRs together, you can just make a new commit directly to the GHES release branch with the updated OpenAPI data. If you aren't as comfortable in the terminal, the second method is best.

#### Method 1: Generation of new data locally

- [ ] In a local clone of the `github/docs-internal` repository, clone `github/rest-api-description`.
- [ ] Ensure that your local clone of `github/docs-internal` contains a `rest-api-description` directory with the contents of the `github/rest-api-description` repository.
- [ ] In the [list of PRs for `github/rest-api-description`](https://github.com/github/rest-api-description/pulls), find the latest "Update OpenAPI 3.1 Descriptions" PR. Note the name of the PR's topic branch.
- [ ] In your local clone of `github/docs-internal`, move into the `rest-api-description` directory, then check out the branch from the previous step. Replace NAME-OF-REST-API-DESCRIPTION-BRANCH with the name of the branch.

  ```shell
  cd rest-api-description
  git checkout NAME-OF-REST-API-DESCRIPTION-BRANCH
  ```

- [ ] Move back into the directory with your clone of `github/docs-internal`.
- [ ] Check out the topic branch for the GHES RC. For example, if the branch is `ghes-3.13-rc`, replace NAME-OF-PUBLICATION-BRANCH with ghes-3.13-rc.

  ```shell
  git checkout NAME-OF-PUBLICATION-BRANCH
  ```

- [ ] To ensure the checks pass with the incoming OpenAPI data in isolation from the publication branch, create a new branch. Replace NAME-OF-BRANCH with a name that reflects the change. For example, if you're preparing for GHES 3.13, replace NAME-OF-BRANCH with ghes-3.13-openapi.
- [ ] To update the OpenAPI data, run the following command.

  ```shell
  npm run sync-rest -- --source-repo rest-api-description --output rest github-apps webhooks rest-redirects
  ```

  You may see an error that indicates that "...you must have the GITHUB_TOKEN environment variable set to access the programmatic access and resource files via the GitHub REST API." You can ignore this error.
- [ ] Add and commit the modified files.

  ```shell
  git add .
  git commit -m "Add generated OpenAPI files"
  ```

- [ ] Push your changes.
- [ ] To run the tests and check the data, create a PR for the new branch. During creation of the PR, set the base branch to the publication branch for the RC.
- [ ] Wait for the checks to run in the new PR.
- [ ] After the checks pass, merge the PR. If you need assistance, request support from Docs Engineering.

#### Method 2: Generate automated OpenAPI PR in `github/docs-internal`

- [ ] In the `github/docs-internal` repository, navigate to the [Sync OpenAPI schema](https://github.com/github/docs-internal/actions/workflows/sync-openapi.yml) workflow.
- [ ] To run the workflow, click "Run workflow".
- [ ] Under "Use workflow from," select the branch that contains the new GHES release. This will base the new PR on the GHES release branch and will generate the OpenAPI data for the new GHES release.
- [ ] Under **Branch to pull the dereferenced OpenAPI source files from in the github/rest-api-descriptions repo**, select the branch name of the data you want to consume in `github/rest-api-description`. If the branch in `github/rest-api-description` is not yet merged, select the branch name of the PR in `github/rest-api-description` that contains the new GHES release schema. If the PR that was opened in `github/rest-api-description` was merged to main, leave the second option set to `main`.
- [ ] Click the green "Run workflow" button.
- [ ] Wait for the workflow to finish. It will automatically open a new ["Update OpenAPI Description" PR](https://github.com/github/docs-internal/labels/github-openapi-bot). The workflow output log will include a PR number.
- [ ] In the new PR with OpenAPI changes, change the base branch of the PR from `main` to the branch of the to the publication branch you created for https://github.com/github/docs-content/issues/14225.
- [ ] Link the PR to this issue. For more information, see "[Linking a pull request to an issue](https://docs.github.com/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#manually-linking-a-pull-request-to-an-issue-using-the-pull-request-sidebar)".
- [ ] In the "Update OpenAPI Description" PR, ensure that there are no merge conflicts and that checks pass, paying particular attention to links that were broken due to missing OpenAPI-related content.
- [ ] Merge "Update OpenAPI Description" PR into your publication PR.. **Note:** Don't attempt to resolve conflicts for changes to the `src/rest/data` files. Only accept the incoming files. If you do see conflicts in the `src/rest/data`, `src/webhooks/data`, or `src/github-apps/data` directories, you can checkout the files for those directories that exist in the main branch, which reverts the changes in those directories to the files in the `main` branch (e.g. `git checkout origin/main src/rest/data/*`).

<br/>
<a name="publication">

### [🚢](#publication) Complete preparation for the RC and publish the docset

To complete preparation and publish the docset, continue the tasks in {{ release-steps-0-url }}. Leave this issue open until you merge the publication PR.
