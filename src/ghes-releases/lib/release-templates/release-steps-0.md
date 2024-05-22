---
title: Publish GHES {{ release-number }} documentation (parent issue)
labels:
  - Enterprise
  - epic
  - new-release
  - priority-0
  - skip FR board
  - GHES {{ release-number }}
---

This issue tracks Docs Content's work for the GA release of a new version of GHES.

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

- [ ] In the Enterprise focus area's project, adjust the "Cycle" field for this issue to the cycle containing the target date.

<br/>

```[tasklist]
# Tasks
- [ ] {{ release-steps-1-url }}
- [ ] {{ release-steps-2-url }}
- [ ] {{ release-steps-3-url }}
- [ ] {{ release-steps-4-url }}
- [ ] {{ release-steps-5-url }}
- [ ] **Friday before the release**, notify the Docs Content first responders to not merge OpenAPI PRs until further notice.
- [ ] **On the RC date**, merge PR for RC when instructed by the GHES Releases team.
- [ ] After merging PR for RC, notify the API team in [#ecosystem-api](https://github.slack.com/archives/C1042T6MS) on Slack that they can now merge "Update OpenAPI 3.x Descriptions" PRs in [`github/rest-api-description`](https://github.com/github/rest-api-description/pulls), which you blocked as part of the issue for preparing OpenAPI assets.
- [ ] Notify the Docs Content first responder (`@TBD`) that they can now merge OpenAPI PRs.
- [ ] Create a PR to complete [these steps](https://github.com/github/docs-content/issues/12972#issuecomment-1947981671) to close the consolidated `github/releases` issue, https://github.com/github/releases/issues/3925.
```

## Resources

- People
  - Docs
    - DRI: `TBD`
    - Engineering support: `TBD`
  - GHES
    - PM: `TBD`
    - Releases PM: `TBD`
    - Releases TPM and Release Manager: `TBD`
    - Engineering DRI: `@{{ release-prp }}`
- Videos
  - `TBD`
- Slides
  - `TBD`
- Docs
  - [Creating a GitHub Enterprise Server instance](https://github.com/github/docs-team/blob/main/contributing-to-docs/creating-a-github-enterprise-server-instance.md) in `github/docs-team`
    - [Internal builds](https://github.com/github/docs-team/blob/main/contributing-to-docs/creating-a-github-enterprise-server-instance.md#internal-builds), for testing pre-release RC builds
- Slack
  - [#docs-content-enterprise](https://github.slack.com/archives/C02FQKNEN69)
  - [#ghes-3-14-release](`TBD`)
  - [#ghes-releases](https://github-grid.enterprise.slack.com/archives/C0FN5LSLR)
  - [#ghes-product](https://github.slack.com/archives/C02FE7F994N)

<!--
This section contains the Markdown reference-style links used to populate links in the content above. Uncomment the reference links below and add the URL to the GHES release issue in `github/releases` in between the <> brackets.

For example, the reference link should look like:
[ghes-release-issue]: <https://github.com/github/releases/issues/123>
-->

<!--
[ghes-release-issue]: <>
-->