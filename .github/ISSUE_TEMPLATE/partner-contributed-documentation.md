---
name: Partner-owned product documentation
about: Initiate a set of tasks to be completed by a GitHub partner wishing to document how their product works with GitHub
title: ''
labels:
- partner
assignees: ''
---

<!--
Thank you for your interest in contributing to the GitHub documentation.

This issue template is only for use by GitHub's Technology Partners who wish to contribute documentation explaining how the partner's product works with GitHub, making it straightforward for our shared customers to adopt the product into their workflow.

As a general guide, we estimate we have bandwidth for prioritizing and reviewing up to 3 partner contributions per quarter.

Please be sure to complete all items in the checklists that follow, and feel free to comment with any questions. A member of the team will be glad to support you.
-->

## Pre-requisites

- [ ] Prior to submitting documentation, please apply to join the GitHub Technology Partner Program: [partner.github.com/apply](https://partner.github.com/apply?partnershipType=Technology+Partner). Please feel free to proceed once your application is approved.

## What information would you like to add to docs.github.com?
<!-- Please explain what your proposed article is about, what customers it benefits, and any other information that would help us to prioritize this request -->

## Tasks

Please be sure to complete each of the following:

**Third-party product documentation:**

- [ ] MUST follow our [general contributing guidelines](CONTRIBUTING.md) for voice and markup format.
- [ ] MUST emphasize how the third-party product works with GitHub.
- [ ] MUST be written in Markdown format, using [one of the templates provided](contributing/github-partners/README.md#templates)
- [ ] MUST include the name and URL of the GitHub technology partner responsible for maintenance of the documentation being contributed. This should be added via the `contributor.name` and `contributor.URL` properties in the template's YAML frontmatter.
- [ ] MUST be proposed via a pull request to this repo following [the GitHub Flow](https://guides.github.com/introduction/flow/).
- [ ] MUST be located in the root of [the `content` folder](content). Your filename MUST match the GitHub technology partner name, and use the `.md` file extension.

**The `Pull Request`:**

- [ ] MUST reference this issue, e.g. via `closes #<this issue number>`
- [ ] MUST pass the automated CI checks
- [ ] MUST include links to supporting material demonstrating the functionality being documented (this can be a link to a public GitHub repo, _or_ a video / screencast walkthrough)

Once all tasks are completed, please mention `@github/docs-content` for next steps.

/cc @github/partner-engineering for :eyes:
