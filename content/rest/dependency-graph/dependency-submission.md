---
title: Dependency submission
intro: 'The Dependency submission API allows you to submit dependencies for projects that resolve dependencies when the project is built or compiled.'
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
---

## About the Dependency submission API

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

Dependencies are submitted to the dependency submission API in the form of a snapshot. A snapshot is a set of dependencies associated with a commit SHA and other metadata, that reflects the current state of your repository for a commit.  You can choose to use pre-made actions or create your own actions to submit your dependencies to the dependency submission API in the required format each time your project is built. For more information about using the Dependency submission API, see the [Using the Dependency submission API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).
