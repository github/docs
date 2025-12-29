---
title: Adding an open source project
intro: How to add your nonprofit to For Good First Issue
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
shortTitle: For Good First Issue
redirect_from:
  - /nonprofit/contributing-to-open-source-for-good/for-good-first-issue
---

## Introduction

[For Good First Issue](https://forgoodfirstissue.github.com/) curates social impact and civic tech open source projects that are looking for contributors and lists issues on those projects that are tagged with `help wanted` or `good first issue`.

Open-source maintainers are always looking to get more people involved, but it can be challenging to become a contributor. For Good First Issue lowers the barrier for future contributions to social and civic good projects - and this is why it exists.

## Add an open source project to find contributors

To maintain the quality of projects in For Good First Issue, please make sure the GitHub repository you want to add meets the following criteria:

* It is a social impact or civic tech project and contributes to any of the Sustainable Development Goals.
* Ideally, it tags its issues with a `help wanted` or `good first issue` label.
* In the repository description it lists the Sustainable Development Goals it is working on.
* It contains a `README.md` with detailed setup instructions for the project, and a `CONTRIBUTING.md` with guidelines for new contributors.
* It is actively maintained (last update less than 1 month ago).

1. Open the [`happycommits.json` file](https://github.com/github/forgoodfirstissue/blob/main/happycommits.json) in the [For Good First Issue repository](https://github.com/github/forgoodfirstissue).
1. Add your repository's path (in the format owner/name and lexicographic order) to `happycommits.json`.
1. Create a new pull request. Please add the link to the issues page of the repository in the pull request description. Once the pull request is merged, the changes will be live on the site.
