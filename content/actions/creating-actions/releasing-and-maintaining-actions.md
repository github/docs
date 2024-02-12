---
title: Releasing and maintaining actions
shortTitle: Release and maintain actions
intro: You can leverage automation and open source best practices to release and maintain actions.
type: tutorial
topics:
  - Action development
  - Actions
  - Community
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

After you create an action, you'll want to continue releasing new features while working with community contributions. This tutorial describes an example process you can follow to release and maintain actions in open source. The example:

- Leverages {% data variables.product.prodname_actions %} for continuous integration, dependency updates, release management, and task automation.
- Provides confidence through automated tests and build badges.
- Indicates how the action can be used, ideally as part of a broader workflow.
- Signal what type of community contributions you welcome. (For example, issues, pull requests, or vulnerability reports.)

For an applied example of this process, see [github-developer/javascript-action](https://github.com/github-developer/javascript-action).

## Developing and releasing actions

In this section, we discuss an example process for developing and releasing actions and show how to use {% data variables.product.prodname_actions %} to automate the process.

### About JavaScript actions

JavaScript actions are Node.js repositories with metadata. However, JavaScript actions have additional properties compared to traditional Node.js projects:

- Dependent packages are committed alongside the code, typically in a compiled and minified form. This means that automated builds and secure community contributions are important.

{% ifversion fpt or ghec %}

- Tagged releases can be published directly to {% data variables.product.prodname_marketplace %} and consumed by workflows across {% data variables.product.prodname_dotcom %}.

{% endif %}

- Many actions make use of {% data variables.product.prodname_dotcom %}'s APIs and third party APIs, so we encourage robust end-to-end testing.

### Setting up {% data variables.product.prodname_actions %} workflows

To support the developer process in the next section, add two {% data variables.product.prodname_actions %} workflows to your repository:

1. Add a workflow that triggers when a commit is pushed to a feature branch or to `main` or when a pull request is created. Configure the workflow to run your unit and integration tests. For an example, see [this workflow](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/test.yml).
1. Add a workflow that triggers when a release is published or edited. Configure the workflow to ensure semantic tags are in place. You can use an action like [JasonEtco/build-and-tag-action](https://github.com/JasonEtco/build-and-tag-action) to compile and bundle the JavaScript and metadata file and force push semantic major, minor, and patch tags. For an example, see [this workflow](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/publish.yml). For more information about semantic tags, see "[About semantic versioning](https://docs.npmjs.com/about-semantic-versioning)."

### Example developer process

Here is an example process that you can follow to automatically run tests, create a release{% ifversion fpt or ghec%} and publish to {% data variables.product.prodname_marketplace %}{% endif %}, and publish your action.

1. Do feature work in branches per GitHub flow. For more information, see "[AUTOTITLE](/get-started/quickstart/github-flow)."
   - Whenever a commit is pushed to the feature branch, your testing workflow will automatically run the tests.

1. Create pull requests to the `main` branch to initiate discussion and review, merging when ready.

   - When a pull request is opened, either from a branch or a fork, your testing workflow will again run the tests, this time with the merge commit.

   - **Note:** for security reasons, workflows triggered by `pull_request` from forks have restricted `GITHUB_TOKEN` permissions and do not have access to secrets. If your tests or other workflows triggered upon pull request require access to secrets, consider using a different event like a [manual trigger](/actions/using-workflows/events-that-trigger-workflows#manual-events) or a [`pull_request_target`](/actions/using-workflows/events-that-trigger-workflows#pull_request_target). For more information, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#pull-request-events-for-forked-repositories)."

1. Create a semantically tagged release. {% ifversion fpt or ghec %} You may also publish to {% data variables.product.prodname_marketplace %} with a simple checkbox. {% endif %} For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)"{% ifversion fpt or ghec %} and "[AUTOTITLE](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)"{% endif %}.

   - When a release is published or edited, your release workflow will automatically take care of compilation and adjusting tags.

   - We recommend creating releases using semantically versioned tags – for example, `v1.1.3` – and keeping major (`v1`) and minor (`v1.1`) tags current to the latest appropriate commit. For more information, see "[AUTOTITLE](/actions/creating-actions/about-custom-actions#using-release-management-for-actions)" and "[About semantic versioning](https://docs.npmjs.com/about-semantic-versioning).

### Results

Unlike some other automated release management strategies, this process intentionally does not commit dependencies to the `main` branch, only to the tagged release commits. By doing so, you encourage users of your action to reference named tags or `sha`s, and you help ensure the security of third party pull requests by doing the build yourself during a release.

Using semantic releases means that the users of your actions can pin their workflows to a version and know that they might continue to receive the latest stable, non-breaking features, depending on their comfort level:

## Working with the community

{% data variables.product.product_name %} provides tools and guides to help you work with the open source community. Here are a few tools we recommend setting up for healthy bidirectional communication. By providing the following signals to the community, you encourage others to use, modify, and contribute to your action:

- Maintain a `README` with plenty of usage examples and guidance. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)."
- Include a workflow status badge in your `README` file. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)." Also visit [shields.io](https://shields.io/) to learn about other badges that you can add.{% ifversion fpt or ghec %}
- Add community health files like `CODE_OF_CONDUCT`, `CONTRIBUTING`, and `SECURITY`. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file#supported-file-types)."{% endif %}
- Keep issues current by utilizing actions like [actions/stale](https://github.com/actions/stale).

## Further reading

Examples where similar patterns are employed include:

- [github/super-linter](https://github.com/github/super-linter)
- [octokit/request-action](https://github.com/octokit/request-action)
- [github-developer/javascript-action](https://github.com/github-developer/javascript-action)
