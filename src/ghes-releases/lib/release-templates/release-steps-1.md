---
title: Enable GHES {{ release-number }} release candidate docs
labels:
  - Enterprise
  - new-release
  - priority-0
  - skip FR board
  - GHES {{ release-number }}
---

## Instructions for triage

- [ ] In the Enterprise focus area's project, adjust the "Cycle" field for this issue to the cycle containing the target date.

## Instructions for assignee

- [Prerequisites](#prerequisites)
- [Create publication branch for a new version of GHES](#creation)
- [Resolve check failures](#check-failures)
- [Maintain the publication branch](#maintenance)
- [Complete preparation for the RC and publish the docset](#publication)

<br/>
<a name="prerequisites">

### [👀](#prerequisites) Prerequisites

- To simplify creation of the publication PR, install the GitHub CLI, then authenticate.

  - For more information about installation, see [README.md](https://github.com/cli/cli#installation) in the cli/cli repository.
  - To authenticate, run the `gh auth login` command. For more information about authentication, see [gh auth login](https://cli.github.com/manual/gh_auth_login) in the GitHub CLI manual.

    - You can use either the HTTPS or SSH protocol.
    - Authenticate Git with your GitHub credentials.
    - You can use the interactive flow and sign in with a web browser.

<br/>
<a name="creation">

### [🆕](#creation) Create the publication branch for a new version of GHES

To enable a new version of GHES on GitHub Docs, you must update the site's supported versions, create placeholder data, and add a banner for the release candidate (RC).

- [ ] In `github/docs-internal`, from `main`, create a new branch named <code>ghes-VERSION-rc</code>. For example, `ghes-3.10-rc`.

- To enable the new release, update the following variables defined in [`lib/enterprise-server-releases.js`](https://github.com/github/docs-internal/blob/main/src/versions/lib/enterprise-server-releases.js). The lines begin with `export const`.

  - [ ] For `next`, iterate the value by one minor version. For example, if the value is 3.10, iterate to 3.11.

  - [ ] For `nextNext`, iterate the value by one minor version. For example, if the version is 3.11, iterate to 3.12.

  - [ ] For `supported`, prepend the new version. For example, if the array contains 3.9, 3.8, 3.7, and 3.6, add 3.10:

     ```js
     export const supported = ['3.10', '3.9', '3.8', '3.7', '3.6']
     ```

  - [ ] For `releaseCandidate`, change the variable definition from `null` to the version we're releasing. For example, if the release version is 3.10:

     ```js
     export const releaseCandidate = '3.10'
     ```

  - [ ] Add and commit the changes.

- Create placeholder data files for release notes and content from automated pipelines.
  
  - [ ] Run the following script.
  
    ```shell
    src/ghes-releases/scripts/sync-automated-pipeline-data.js
    ```

  - [ ] Add and commit the changes.

- [ ] Optionally, on your workstation, run the local development environment for GitHub Docs and verify that the new GHES version is enabled. For more information, see "[About versions of GitHub Docs](https://docs.github.com/get-started/learning-about-github/about-versions-of-github-docs)".

- [ ] Push your changes.

- [ ] Create a PR for your branch. For the body, copy the contents of the body comment for the [previous release](https://github.com/github/docs-internal/pull/44684), modifying it to reflect this release.

- [ ] Link your PR to this issue. For more information, see "[Linking a pull request to an issue](https://docs.github.com/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#manually-linking-a-pull-request-to-an-issue-using-the-pull-request-sidebar)".

<br/>
<a name="check-failures">

### [🚨](#check-failures) Resolve check failures

After you create the publication PR, ensure that the PR's checks pass as soon as possible. If you experience a check failure that does not appear below, contact Docs Engineering for support.

#### Link Checker: On PR / check-links (pull_request)

If this check fails, you generally must fix broken links.

Our link checker validates links the site. If links are broken immediately after creation of your publication PR, the broken link was missed upon introduction because it's within content that did not yet render anywhere on the site. There are two common reasons for these failures.

- We've mentioned GitHub.com-only features within GHES articles that are also versioned for FPT or GHEC. For more information, see [Enterprise products](https://github.com/github/docs-content/blob/main/focus-areas/enterprise/writing-for-enterprise/products.md#feature-availability) in the Enterprise focus area docs.
- We've linked from content outside of the API or webhooks docs to API or webhook docs that we haven't yet generated and published from the OpenAPI schema in github/github.

If you're unfamiliar with the content with the broken link, consult the DRI for the content's focus area. For more information, see the [README](https://github.com/github/docs-content/blob/main/focus-areas/README.md) in `github/docs-content`.

For links that are broken due to in-progress work elsewhere in the docs, you can comment out problematic versioning temporarily using {% raw %}`{% comment %}`{% endraw %} tags in Liquid or by prepending `#` in YAML front matter. If you comment out any versioning, leave a comment on the **Files changed** tab with an explanation of the temporary change and tracking the necessary updates in the PR's body. After the necessary changes are in `main`, uncomment the versioned content.

For content from the OpenAPI schema, note the affected content with broken links in the PR's body.

<a name="rest-pull-request">

<br/>
<a name="maintenance">

### [🔁](#maintenance) Maintain the publication branch

After your publication PR's are passing, complete the following maintenance **daily**.

1. On your workstation, in your clone of `github/docs-internal`, ensure the environment is clean and there are no pending changes.

1. Check out `main`, then pull the latest changes.

1. Check out your publication branch,  <code>ghes-VERSION-rc</code>, then merge changes from `main`.

1. Push the changes.

1. If any new check failures arise, refer to "Addressing check failures" above.

1. If any merge conflicts arise, resolve them. If you're not sure how to resolve the conflict, consult the DRI for the content's focus area. For more information, see the [README](https://github.com/github/docs-content/blob/main/focus-areas/README.md) in `github/docs-content`.

<br/>
<a name="publication">

### [🚢](#publication) Complete preparation for the RC and publish the docset

To complete preparation and publish the docset, continue the tasks in {{ release-steps-0-url }}. Leave this issue open until you merge the publication PR.
