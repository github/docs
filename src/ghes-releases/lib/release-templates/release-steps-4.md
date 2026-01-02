---
title: Actions Runner minimum version for GHES {{ release-number }}
labels:
  - Enterprise
  - priority-0
  - skip FR board
  - workflow-generated
---

Docs Content will publish docs for the GHES {{ release-number }} RC soon. Please update the docs to reflect the [minimum required version of the Actions Runner application](https://github.com/github/docs-content/blob/main/focus-areas/enterprise/processes/publishing-ghes-feature-release-docs.md#actions-runner) for the new release.

| Field | Value |
| ----- | ----- |
| Target date | {{ release-target-date }} |
| Release issue | [link][release-issue] |

**Note**: We publish docs for each GHES release when the RC ships. The target date reflects a few days prior to the GHES {{ release-number }} RC's release date, while the release issue reflects the GA's release date.

# Tasks
* [ ] Find the minimum required Actions Runner version for the upcoming GHES release (see below for help).
* [ ] Create a PR against the release candidate publication branch in github/docs-internal to add the version to the [table in the "GitHub Enterprise Server releases" article](https://github.com/github/docs-internal/blob/main/content/admin/all-releases.md?plain=1#L66).
* [ ] In the same PR, add the version to the [`runner_required_version` variable](https://github.com/github/docs-internal/blob/main/data/variables/product.yml#L140) in product.yml.
* [ ] Once the release notes file for the release has been generated, confirm that the {% raw %}`{% data reusables.actions.actions-runner-release-note %}`{% endraw %} reusable is present in the release notes.

<!--
This section contains the Markdown reference-style links used to populate links in the content above. Uncomment the reference links below and add the URL to the GHES release issue in `github/releases` in between the <> brackets.

For example, the reference link should look like:
[ghes-release-issue]: <https://github.com/github/releases/issues/123>
-->

<!--
[release-issue]: <>
-->
