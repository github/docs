---
title: Prepare content for GHES {{ release-number }} release candidate
labels:
  - Enterprise
  - new-release
  - priority-0
  - skip FR board
  - GHES {{ release-number }}
---

## Instructions for triage

- [ ] In the Enterprise project, adjust the "Cycle" field to the cycle **four weeks** before the target date.

## Instructions for assignee

To prepare for a GHES RC, you will:
- monitor for late-breaking content changes
- validate the content being published
- gather and edit release notes
- share release notes with stakeholders

- [Track content work and progress toward final builds](#tracking)
- [Populate the Release Tracker's "GHES Docs" view](#population)
- [Validate docs needs for each of the release's changes](#validation)
- [Correct erroneous versioning](#versioning)
- [Gather and edit release notes](#release-note-preparation)
- [Finalize and share release notes](#release-note-finalization)
- [Complete preparation for the RC and publish the docset](#publication)

<br/>
<a name="tracking">

### [🔁](#tracking) Track content work and progress to final builds

Each day, review [GHES release slack channel][ghes-release-slack-channel-link] on Slack for any potential late-breaking content changes.

- Most conversation is operational and relates to preparation of the release builds, with no docs impact.
- Typically, at this phase, any content changes would relate to content in the "[Enterprise administrators](https://docs.github.com/en/enterprise-server/admin)" docset. If you see discussion about end-user features, investigate further.
- If you're uncertain whether the conversation relates to changes that could affect the docs, ask the following questions.
  - [Which audience](https://github.com/github/docs-content/blob/main/focus-areas/enterprise/writing-for-enterprise/audiences.md) is affected?
  - Is there any change in behavior or functionality that might affect the public docs? For example, is a feature pulled from the release?
  - If the audience needs to do something because of some bug or issue that will ship in the RC, what should they do?
    - Work with the stakeholder to determine whether new [docs for a known issue](https://github.com/github/docs-internal/blob/main/contributing/content-model.md#known-issues), a new [release note](https://github.com/github/docs-internal/blob/main/contributing/content-model.md#release-notes), or both are necessary.

<br/>
<a name="population">

### [🔍](#population) Populate the Release Tracker's "GHES Docs" view

To begin validation of content for the release, populate data in the Release Tracker project for each github/releases issue that comprises the release. You'll use this view as a dashboard as you prepare content.

- [ ] In the Release Tracker project's [GHES Docs][ghes-release-tracker-project-board-link] view, ensure that the label for filtering releases corresponds with the version of GHES that you're preparing content for.

  - Optionally, if the view doesn't already reflect this, update the view and save the changes.

- For each item in the view, complete the following tasks.

  1. Update the item's "Docs Content issue" field with a link to the release's issue in `github/docs-content`.

     - In the issue, confirm the status of docs for the release. Check for a `docs`, `docs - NA`, or `docs - TBD` label.
     - If the issue has a corresponding github/docs-content issue, add the URL to the field. If the issue did not need docs, set the value of the field to "N/A".

  1. Update the item's "Release note source" field with a link to source material for the release note.

     - In the issue, search for a GitHub Blog or Changelog post. Posts originate from PRs in the github/blog repository, so you may be able to locate the PR by searching the issue's page for "blog#".
     - Sometimes the issue's description is adequate source material.
     - If you don't have source material after a few minutes of searching, comment on the issue with a request for a two- to three-sentence explanation of the change with a link to [guidance about release notes in the content style guide](https://github.com/github/docs/blob/main/contributing/content-style-guide.md#release-notes).

  1. Update the item's "GHES docs status" field.

     - If the item required docs, set the field's value to "Researching". 
     - If the item didn't require docs, set the field's value to "No docs".

  1. Update the value of the item's "GHES release notes status" field to "Researching".

     - If you couldn't locate a source for the release note, comment on the github/releases issue to request a release note, linking to the [content style guide](https://github.com/github/docs-internal/blob/main/contributing/content-style-guide.md#release-notes) for guidance. Set the field's value to "Researching".
     - If you located a source for the release note, set the field's value to "Ready for work".

You may want to return to this view daily to update the "GHES release notes status" field, pending a response in the github/releases issue.

<br/>
<a name="validation">

### [🔬](#validation) Validate docs needs for each of the release's changes

Validate the versioning within `github/docs-internal` PRs for the changes shipping with the release.

For each item in the Release Tracker project's [GHES Docs][ghes-release-tracker-project-board-link] view that requires docs, complete the following tasks. If you're collaborating with another writer to validate the content, divide up the sections, or have one writer start at the top of the view and the other at the bottom, working toward the top.

1. In your browser, navigate to the github/docs-content issue.

1. From the issue, navigate to the PR for the issue. Assuming the issue is complete or in progress, the "Fixed by..." or "May be fixed by..." link atop the issue is a fast way to get to the PR.

   - If the PR is merged or in progress, validate the versioning.

     1. In the PR's **Files changed** tab, locate the `data/features/` FBV YAML file.

     1. In the top-right corner of the file, select the `•••` dropdown and click **View file**.

     1. In the top-left corner, select the branch dropdown and click **main**.

     1. Validate that the versioning for GHES is correct.

        - If the PR is active and the versioning is incorrect, leave a comment for the author.
        - If the PR is merged and the versioning is incorrect, copy the link to the FBV YAML file on `main`.

     1. In the Release Tracker project, update the item's "GHES docs status" field.

        - If the docs are done, set the field's value to "Done".
        - If the docs are in progress, set the field's value to "Active".
        - If the PR was merged and the FBV was incorrect, set the field's value to "Needs versioning". Paste the link to the FBV YAML file into the "Docs note" field.
        - If the PR for the docs is yet to be started, set the field's value to "Ready for work".

<br/>
<a name="versioning">

### [🔢](#versioning) Correct erroneous versioning

During [validation](#validation), if you set the "GHES docs status" field for any issues in the Release Tracker project's [GHES Docs][ghes-release-tracker-project-board-link] view to "[Needs versioning][ghes-release-tracker-needs-versioning-query]", create a single PR to correct the versioning.

- Target `main` to get the changes published as soon as possible, particularly if any items slipped from the previous GHES release.
- If a change was supposed to be in a previous release but you needed to update the versioning to reflect that it's in this upcoming release, you may need to relocate the release note for the feature in the prior version into the "[Errata](https://github.com/github/docs-internal/blob/main/contributing/content-style-guide.md#errata)" section and include the release note in the upcoming release.

After you merge the PR, update the status for each item in the Release Tracker project's [GHES Docs][ghes-release-tracker-project-board-link] view with a "GHES docs status" field set to "[Needs versioning][ghes-release-tracker-needs-versioning-query]".

<br/>
<a name="release-note-preparation">

### [🆕](#release-note-preparation) Gather and edit release notes

Create a PR containing the RC's release notes.

1. From the topic branch that you created for the PR to close {{ release-steps-1-url }}, create a new branch named `ghes-VERSION-rc/add-release-notes`. For example, `ghes-3.10-rc/add-release-notes`.

1. Update `data/release-notes/enterprise-server/VERSION/PLACEHOLDER.yml`, where VERSION is the RC's version number with the major and minor versions separated by a hyphen.

   1. Rename the file to `0-rc1.yml`.

   1. Edit the value of `date` on the first line to reflect the RC's release date.

   1. Add, commit, and push the changes.

1. For each item in the Release Tracker project's [GHES Docs][ghes-release-tracker-project-board-link] view with a "GHES release notes status" field set to "[Ready for work][ghes-release-tracker-ready-for-work]", review the link in the "Release notes source" field.

   1. In your text editor of choice, edit the release note. If you would like technical review, contact the owner of the corresponding issue in `github/releases`. For more information about how we write release notes, see [Release notes](https://github.com/github/docs-internal/blob/main/contributing/content-style-guide.md#release-notes) in the GitHub Docs content style guide.

   1. Determine which section to place the note in, and add the edited release note to the section.

       - For brand-new functionality or deprecations, review the value for the item's "Customer Theme" field. (Deprecations are their own "Customer Theme".)
       - Categorize any other changes to the product's behavior in the "Changes" section.

   1. Add, commit, and push the changes.

   1. Set the value for the item's "GHES release notes status" field to "In PR".

1. Prepare release notes for the release's known issues.

   1. Ensure that the GHES Releases PM has triaged existing known issues for the release. Per the [process for known issues](https://thehub.github.com/epd/engineering/products-and-services/ghes/releases/known-issues/), each issue should have a `enterprise-#.#-known-issue` label that reflects the releases with the known issue.

   1. Filter the view with the [existing known issues](https://github.com/orgs/github/projects/7908/views/15) by the `enterprise-#.#-known-issue` label for the release you're drafting release notes for.

   1. For each issue in the filtered view, copy the value of the "Body" field. In `0-rc1.yml`, paste the value as a new entry within the `known_issues` section. Add, commit, and push the change.

1. After you've added all of the release notes, delete any unused sections within `0-rc1.yml`.

<br/>
<a name="release-note-finalization">

### [💅](#release-note-finalization) Finalize and share release notes

At least a week before the ship date for the RC, request review of the PR with the release notes, then incorporate changes.

1. Request review of the PR with the release notes.

   - Request writer review.
   - Request review from the GHES Releases PM.

1. Incorporate any changes.

1. After you've received writer and PM approval, merge the PR into the topic branch that you created for the PR to close {{ release-steps-1-url }}.

1. Link the PR to this issue as well. See "[Linking a pull request to an issue](https://docs.github.com/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#manually-linking-a-pull-request-to-an-issue-using-the-pull-request-sidebar)".

1. To provide other GTM teams like Support Delivery an advance look at changes in the release, share a link to the release notes on the staging deployment and a link to the YAML file in **Files changed** tab within the PR for {{ release-steps-1-url }}.

   - Request that readers provide any feedback in the PR's **Files changed** tab.
   - Share the links in [GHES release issue][ghes-release-issue].
   - Share the links in [GHES release slack channel](ghes-release-slack-channel-link) on Slack.

<br/>
<a name="publication">

### [🚢](#publication) Complete preparation for the RC and publish the docset

To complete preparation and publish the docset, continue the tasks in {{ release-steps-0-url }}. Leave this issue open until you merge the publication PR.

<!--
This section contains the Markdown reference-style links used to populate links in the content above. Uncomment the reference links below and add the URL to the GHES release issue in `github/releases` in between the <> brackets.

For example, the reference link should look like:
[ghes-release-issue]: <https://github.com/github/releases/issues/123>
-->

<!--
[ghes-release-issue]: <>
[ghes-release-slack-channel-link]: <>
[ghes-release-tracker-project-board-link]: <>
[ghes-release-tracker-needs-versioning-query]: <>
[ghes-release-tracker-ready-for-work]: <>
-->