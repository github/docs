---
title: Automatically generated release notes
intro: You can automatically generate release notes for your GitHub releases
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Repositories
shortTitle: Automated release notes
communityRedirect:
  name: Provide GitHub Feedback
  href: 'https://github.com/orgs/community/discussions/categories/general'
---

## About automatically generated release notes

Automatically generated release notes provide an automated alternative to manually writing release notes for your {% data variables.product.prodname_dotcom %} releases. With automatically generated release notes, you can quickly generate an overview of the contents of a release. Automatically generated release notes include a list of merged pull requests, a list of contributors to the release, and a link to a full changelog.

You can also customize your automated release notes, using labels to create custom categories to organize pull requests you want to include, and exclude certain labels and users from appearing in the output.

## Creating automatically generated release notes for a new release

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% data reusables.releases.create-release %}
{% data reusables.releases.previous-release-tag %}
{% data reusables.releases.release-title %}
1. Above the description field, click **Generate release notes**.
1. Check the generated notes to ensure they include all (and only) the information you want to include.
{% data reusables.releases.finish-release %}

## Configuring automatically generated release notes

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field, type `.github/release.yml`. This will create a new file called `release.yml` in the `.github` directory.
1. In the file, using the configuration options below, specify in YAML the pull request labels and authors you want to exclude from this release. You can also create new categories and list the pull request labels to be included in each of them.

### Configuration options

| Parameter | Description |
| :- | :- |
| `changelog.exclude.labels` | A list of labels that exclude a pull request from appearing in release notes. |
| `changelog.exclude.authors` | A list of user or bot login handles whose pull requests are to be excluded from release notes. |
| `changelog.categories[*].title` | **Required.** The title of a category of changes in release notes. |
| `changelog.categories[*].labels`| **Required.** Labels that qualify a pull request for this category. Use `*` as a catch-all for pull requests that didn't match any of the previous categories. |
| `changelog.categories[*].exclude.labels` | A list of labels that exclude a pull request from appearing in this category. |
| `changelog.categories[*].exclude.authors` | A list of user or bot login handles whose pull requests are to be excluded from this category. |

### Example configurations

A configuration for a repository that labels semver releases

{% raw %}

```yaml copy
# .github/release.yml

changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - octocat
  categories:
    - title: Breaking Changes 🛠
      labels:
        - Semver-Major
        - breaking-change
    - title: Exciting New Features 🎉
      labels:
        - Semver-Minor
        - enhancement
    - title: Other Changes
      labels:
        - "*"
```

{% endraw %}

A configuration for a repository that doesn't tag pull requests but where we want to separate out {% data variables.product.prodname_dependabot %} automated pull requests in release notes (`labels: '*'` is required to display a catchall category)

{% raw %}

```yaml copy
# .github/release.yml

changelog:
  categories:
    - title: 🏕 Features
      labels:
        - '*'
      exclude:
        labels:
          - dependencies
    - title: 👒 Dependencies
      labels:
        - dependencies
```

{% endraw %}

## Further reading

* "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels)"
