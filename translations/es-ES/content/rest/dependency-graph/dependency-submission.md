---
title: Dependency submission
intro: 'The Dependency submission API allows you to submit dependencies for projects, such as the dependencies resolved when a project is built or compiled.'
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
---

## About the Dependency submission API

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

Dependencies are submitted to the dependency submission API in the form of a snapshot. A snapshot is a set of dependencies associated with a commit SHA and other metadata, that reflects the current state of your repository for a commit.  You can choose to use pre-made actions or create your own actions to submit your dependencies to the dependency submission API in the required format each time your project is built. For more information about using the Dependency submission API, see "[Using the Dependency submission API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)."

You can submit multiple sets of dependencies to the Dependency submission API to be included in your dependency graph. The API uses the `job.correlator` property and the `detector.name` category of the snapshot to ensure the latest submissions for each workflow get shown. The `correlator` property itself is the primary field you will use to keep independent submissions distinct. An example `correlator` could be a simple combination of two variables available in actions runs: `<GITHUB_WORKFLOW> <GITHUB_JOB>`.
