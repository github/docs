---
title: CodeQL CLI latest supported version for GHES {{ release-number }}
labels: 
  - CodeQL
  - new-release
  - priority-0
  - GHES {{ release-number }}
---

Docs Content will publish docs for the GHES {{ release-number }} RC soon. Please draft a release note for the latest supported version of the CodeQL CLI, and update the docs to reflect the latest supported version.

```[tasklist]
### Draft a release note
- [ ] Draft a consolidated release note that summarizes the most important updates to the CodeQL CLI since the supported version for the previous GHES release. See the [docs style guide section for release notes](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide#features).
- [ ] Add the draft as a comment in this issue, and ping the `@github/docs-content-enterprise` team for review.
```

```[tasklist]
### Update the docs
- [ ] In a PR in github/docs-internal, add the latest supported CodeQL CLI version to the `codeql_cli_ghes_recommended_version` variable in [`product.yml`](https://github.com/github/docs-internal/blob/main/data/variables/product.yml)
- [ ] In the same PR, add the latest supported CodeQL CLI version to the [table in the "GitHub Enterprise Server releases" article](https://github.com/github/docs-internal/blob/main/content/admin/all-releases.md?plain=1#L53).
```

| Field | Value |
| ----- | ----- |
| Target date | {{ release-target-date }} |
| Release issue | [link][release-issue] |

**Note**: We publish docs for each GHES release when the RC ships. The target date reflects a few days prior to the GHES 3.13 RC's release date, while the release issue reflects the GA's release date.

<!--
This section contains the Markdown reference-style links used to populate links in the content above. Uncomment the reference links below and add the URL to the GHES release issue in `github/releases` in between the <> brackets.

For example, the reference link should look like:
[ghes-release-issue]: <https://github.com/github/releases/issues/123>
-->

<!--
[release-issue]: <>
-->