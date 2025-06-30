---
title: Prepare OpenAPI assets for GHES {{ release-number }} release candidate
labels:
  - Enterprise
  - GHES {{ release-number }}
  - new-release
  - priority-0
  - skip FR board
  - rhythm of docs operations
  - workflow-generated
---

## Instructions for triage

* [ ] Add this issue to the [Rhythm of Docs: Operations](https://github.com/orgs/github/projects/20190) project.
* [ ] For assignee: if needed, add this issue to your persona team project for tracking purposes.

## Tasks

To incorporate updates to our REST API and webhook documentation into the publication branch you created for {{ release-steps-1-url }}, you must prepare a release configuration in `github/github`, prepare the new assets for publication, coordinate the generation of the new OpenAPI content, then merge the content into your publication branch as described in [Prepare OpenAPI assets for release candidate](https://github.com/github/docs-content/blob/main/focus-areas/enterprise/processes/publishing-ghes-feature-release-docs.md#5-prepare-openapi-assets-for-release-candidate).

* [ ] [🚀 Prepare OpenAPI release configuration](https://github.com/github/docs-content/blob/main/focus-areas/enterprise/processes/publishing-ghes-feature-release-docs.md#51--prepare-openapi-release-configuration)
* [ ] [🆕 Prepare PR to publish release](https://github.com/github/docs-content/blob/main/focus-areas/enterprise/processes/publishing-ghes-feature-release-docs.md#52--prepare-pr-to-publish-release)
* [ ] [👯 Integrate OpenAPI changes into publication branch](https://github.com/github/docs-content/blob/main/focus-areas/enterprise/processes/publishing-ghes-feature-release-docs.md#53--integrate-openapi-changes-into-publication-branch) 🗓️ **2-3 days before release**
* [ ] Continue the tasks in {{ release-steps-0-url }} to complete preparation and publish the docset. Leave this issue open until you merge the publication PR.
