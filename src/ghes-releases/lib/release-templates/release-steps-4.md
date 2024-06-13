---
title: Actions Runner minimum version for GHES {{ release-number }}
labels:
  - Enterprise
  - priority-0
  - skip FR board
---

Docs Content will publish docs for the GHES {{ release-number }} RC soon. Please update the docs to reflect the minimum required version of the Actions Runner application for the new release.

| Field | Value |
| ----- | ----- |
| Target date | {{ release-target-date }} |
| Release issue | [link][release-issue] |

**Note**: We publish docs for each GHES release when the RC ships. The target date reflects a few days prior to the GHES 3.13 RC's release date, while the release issue reflects the GA's release date.

```[tasklist]
### Tasks
- [ ] Find the minimum required Actions Runner version for the upcoming GHES release (see below for help).
- [ ] Create a PR against the release candidate publication branch in github/docs-internal to add the version to the [table in the "GitHub Enterprise Server releases" article](https://github.com/github/docs-internal/blob/main/content/admin/all-releases.md?plain=1#L66).
- [ ] In the same PR, add the version to the [`runner_required_version` variable](https://github.com/github/docs-internal/blob/main/data/variables/product.yml#L140) in product.yml.
- [ ] Once the release notes file for the release has been generated (see https://github.com/github/docs-content/issues/14225), confirm that the {% raw %}`{% data reusables.actions.actions-runner-release-note %}`{% endraw %} reusable is present in the release notes.
```

### Finding the required Actions Runner version for a release

To find the required version of the Runner app for a GHES release, navigate to `https://github.com/github/ghes-actions/blob/enterprise-X.Y-release/config/runners/runners.json`, replacing `X.Y` with a release number such as `{{ release-number }}`.

You can find the minimum required version for the release in the `version` field of any object in the array.

The `runners.json` file is generally available with plenty of time before a release. If you can't find a file at that location, ask in the `#actions` channel on Slack.

<!--
This section contains the Markdown reference-style links used to populate links in the content above. Uncomment the reference links below and add the URL to the GHES release issue in `github/releases` in between the <> brackets.

For example, the reference link should look like:
[ghes-release-issue]: <https://github.com/github/releases/issues/123>
-->

<!--
[release-issue]: <>
-->