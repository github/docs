---
title: Publish GHES {{ release-number }} documentation (parent issue)
labels:
  - Enterprise
  - epic
  - new-release
  - priority-0
  - skip FR board
  - GHES {{ release-number }}
  - ghes-release-automation
  - workflow-generated
---

This issue tracks Docs work for the GA release of GHES {{ release-number }}.

<!-- issue-fields start -->

| Field | Value |
| ----- | ----- |
| Target date | {{ release-target-date }} |
| Release issue | [link][ghes-release-issue] |
| Feature freeze | {{ release-feature-freeze-date }} |
| Code freeze | {{ release-code-freeze-date }} |
| 🚢 RC target date | {{ release-rc-target-date }} |

<!-- issue-fields end -->

## Instructions for triage

* [ ] Add this issue to the [Rhythm of Docs: Operations](https://github.com/orgs/github/projects/20190) project.
* [ ] For assignee: if needed, add this issue to your persona team project for tracking purposes.

<br/>

# Tasks
* [ ] {{ release-steps-1-url }}
* [ ] {{ release-steps-2-url }}
* [ ] {{ release-steps-3-url }}
* [ ] {{ release-steps-4-url }}
* [ ] {{ release-steps-5-url }}
* [ ] **Friday before the release**, notify the Docs Content first responder to not merge OpenAPI PRs until further notice.
* [ ] **On the RC date**, optionally scrape the search indices again (details in [previous step]({{ release-steps-1-url }}).
* [ ] **On the RC date**, to [publish the RC, complete these tasks](https://github.com/github/docs-content/blob/main/focus-areas/enterprise/processes/publishing-ghes-feature-release-docs.md#publish-release-candidate).
* [ ] To close this issue, open a PR to complete [these GA tasks](https://github.com/github/docs-content/blob/main/focus-areas/enterprise/processes/publishing-ghes-feature-release-docs.md#ga-tasks).

## Daily tasks

Complete these tasks every day, up to the release of the release candidate.

* Maintain the megabranch by keeping it up to date with `main`, and fixing check failures
* Monitor the `#ghes-3-1x-release` Slack channel for late-breaking changes
* Monitor the `#tmp-docs-ghes-3-1x` Slack channel for questions and updates


## Key deadlines

Optionally, use and update the following table to keep track of key deadlines.

<details>

| Date | Task | Steps | Done? ✅ |
| ---- | ---- | ---- | ----- |
| By **3 weeks before RC** | Create the release megabranch | [Steps]({{ release-steps-1-url }}) |   |
| By **3 weeks before RC** | Create a `tmp-docs-ghes-{{ release-number }}` Slack channel for docs and the GHES release team to communicate | [Example](https://github-grid.enterprise.slack.com/archives/C08T0NM9XAB) |  |
| By **2 weeks before RC** | Ensure there's an OpenAPI configuration for the release in `github/github`, and create and merge a PR to update `release_api_versioning_support.yaml`. | [Steps]({{ release-steps-5-url }}) |   | 
| By **2 weeks before RC**  | Create, but don't yet merge, a `github/github` PR to publish the {{ release-number }} API schema | [Steps]({{ release-steps-5-url }}) |   |
| By **1 week before RC on {{ release-rc-target-date-minus-7 }}**   | Ensure work in the PR with the release notes is complete, request reviews for release notes, and ask GHES PM to confirm the list of [known issues](https://github.com/orgs/github/projects/7908/views/15) for the release | [Steps]({{ release-steps-2-url }}) |     |
| On **Friday before the RC** | Merge the `github/github` PR to publish the {{ release-number }} API schema, and notify `#eco-system-api` | [Steps]({{ release-steps-5-url }}) |   | 
| On **Friday before the RC** | Notify docs first responder not to merge OpenAPI update PRs | In task list below |    | 
| On **Thursday before the RC** | Merge OpenAPI data into the release [megabranch]({{ release-steps-1-url }}) | [Steps]({{ release-steps-5-url }}) |   | 
| By **the day before the RC on {{ release-rc-target-date-minus-1 }}** | Ensure checks are passing and all assets are in the megabranch, including release notes, docs for the corresponding release work, and work for the [CodeQL]({{ release-steps-3-url }}) and [Actions Runner]({{ release-steps-4-url }}) issues in the task list below | Steps</br>* [CodeQL]({{ release-steps-3-url }}</br>* [Actions Runner]({{ release-steps-4-url }}</br> |   |
| On **{{ release-rc-target-date }}** | When requested, merge the megabranch PR to publish docs for the release candidate | |   | 
| By **1 week before the GA** | Create a PR to GA the {{ release-number }} docs | [Steps]({{ release-steps-0-url }}) | | 
| On **{{ release-target-date }}** | When requested, merge the PR to GA the {{ release-number }} docs | [Steps]({{ release-steps-0-url }}) | | 

</details>

## Resources

* People
  * Docs
    * DRI: `TBD`
    * Engineering support: `TBD`
  * GHES
    * PM: `TBD`
    * Releases PM: `TBD`
    * Releases TPM and Release Manager: `TBD`
    * Engineering DRI: `@{{ release-prp }}`
* Videos
  * `TBD`
* Slides
  * `TBD`
* Docs
  * [Creating a GitHub Enterprise Server instance](https://github.com/github/docs-team/blob/main/contributing-to-docs/docs-work/creating-a-github-enterprise-server-instance.md) in `github/docs-team`
    * [Internal builds](https://github.com/github/docs-team/blob/main/contributing-to-docs/docs-work/creating-a-github-enterprise-server-instance.md#internal-builds), for testing pre-release RC builds
* Slack
  * #tmp-docs-ghes-3-1x
  * [#docs-driver-persona](https://github-grid.enterprise.slack.com/archives/C07KVNQ6AVA)
  * #ghes-3-1x-release
  * [#ghes-releases](https://github-grid.enterprise.slack.com/archives/C0FN5LSLR)
  * [#ghes](https://github-grid.enterprise.slack.com/archives/C02BJ3URF1S) and [#ghes-product](https://github.slack.com/archives/C02FE7F994N)

<!--
This section contains the Markdown reference-style links used to populate links in the content above. Uncomment the reference links below and add the URL to the GHES release issue in `github/releases` in between the <> brackets.

For example, the reference link should look like:
[ghes-release-issue]: <https://github.com/github/releases/issues/123>
-->

<!--
[ghes-release-issue]: <>
-->
