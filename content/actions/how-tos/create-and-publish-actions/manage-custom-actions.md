---
title: Managing custom actions
shortTitle: Manage custom actions
intro: 'Learn how to create and manage your own actions, and customize actions shared by the {% data variables.product.prodname_dotcom %} community.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Action development
  - Fundamentals
redirect_from:
  - /actions/how-tos/administering-github-actions/managing-custom-actions
  - /actions/how-tos/creating-and-publishing-actions/managing-custom-actions
---

## Choosing a location for your action

If you're developing an action for other people to use, we recommend keeping the action in its own repository instead of bundling it with other application code. This allows you to version, track, and release the action just like any other software.

{% ifversion fpt or ghec %}
Storing an action in its own repository makes it easier for the {% data variables.product.prodname_dotcom %} community to discover the action, narrows the scope of the code base for developers fixing issues and extending the action, and decouples the action's versioning from the versioning of other application code.
{% endif %}

{% data reusables.actions.internal-actions-summary %}

{% ifversion fpt or ghec %}If you're building an action that you don't plan to make available to others, you {% else %} You{% endif %} can store the action's files in any location in your repository. If you plan to combine action, workflow, and application code in a single repository, we recommend storing actions in the `.github` directory. For example, `.github/actions/action-a` and `.github/actions/action-b`.

## Ensuring compatibility with other platforms

Many people access {% data variables.product.github %} at a domain other than {% data variables.product.prodname_dotcom_the_website %}, such as {% data variables.enterprise.data_residency_site %} or a custom domain for {% data variables.product.prodname_ghe_server %}.

To ensure that your action is compatible with other platforms, do not use any hard-coded references to API URLs such as `https://api.github.com`. Instead, you can:

* Use environment variables (see [AUTOTITLE](/actions/reference/variables-reference#default-environment-variables)):

  * For the REST API, use the `GITHUB_API_URL` environment variable.
  * For GraphQL, use the `GITHUB_GRAPHQL_URL` environment variable.

* Use a toolkit such as [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github), which can automatically set the correct URLs.

## Using release management for actions

This section explains how you can use release management to distribute updates to your actions in a predictable way.

### Good practices for release management

If you're developing an action for other people to use, we recommend using release management to control how you distribute updates. Users can expect an action's patch version to include necessary critical fixes and security patches, while still remaining compatible with their existing workflows. You should consider releasing a new major version whenever your changes affect compatibility.

Under this release management approach, users should not be referencing an action's default branch, as it's likely to contain the latest code and consequently might be unstable. Instead, you can recommend that your users specify a major version when using your action, and only direct them to a more specific version if they encounter issues.

To use a specific action version, users can configure their {% data variables.product.prodname_actions %} workflow to target a tag, a commit's SHA, or a branch named for a release.

### Using tags for release management

We recommend using tags for actions release management. Using this approach, your users can easily distinguish between major and minor versions:

* Create and validate a release on a release branch (such as `release/v1`) before creating the release tag (for example, `v1.0.2`).
* Create a release using semantic versioning. For more information, see [AUTOTITLE](/repositories/releasing-projects-on-github/managing-releases-in-a-repository).
* Move the major version tag (such as `v1`, `v2`) to point to the Git ref of the current release. For more information, see [Git basics - tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging).
* Introduce a new major version tag (`v2`) for changes that will break existing workflows. For example, changing an action's inputs would be a breaking change.
* Major versions can be initially released with a `beta` tag to indicate their status, for example, `v2-beta`. The `-beta` tag can then be removed when ready.

This example demonstrates how a user can reference a major release tag:

```yaml
steps:
    - uses: actions/javascript-action@v1
```

This example demonstrates how a user can reference a specific patch release tag:

```yaml
steps:
    - uses: actions/javascript-action@v1.0.1
```

### Using branches for release management

If you prefer to use branch names for release management, this example demonstrates how to reference a named branch:

```yaml
steps:
    - uses: actions/javascript-action@v1-beta
```

### Using a commit's SHA for release management

Each Git commit receives a calculated SHA value, which is unique and immutable. Your action's users might prefer to rely on a commit's SHA value, as this approach can be more reliable than specifying a tag, which could be deleted or moved. However, this means that users will not receive further updates made to the action. You must use a commit's full SHA value, and not an abbreviated value.

```yaml
steps:
    - uses: actions/javascript-action@a824008085750b8e136effc585c3cd6082bd575f
```

## Creating a README file for your action

We recommend creating a README file to help people learn how to use your action. You can include this information in your `README.md`:

* A detailed description of what the action does
* Required input and output arguments
* Optional input and output arguments
* Secrets the action uses
* Environment variables the action uses
* An example of how to use your action in a workflow
