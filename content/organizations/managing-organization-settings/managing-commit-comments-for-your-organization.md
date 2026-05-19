---
title: Managing commit comments for your organization
intro: 'Organization owners can allow or disallow commit comments by default for repositories in their organization.'
permissions: Organization owners
versions:
  fpt: '*'
  ghes: '>= 3.22'
  ghec: '*'
shortTitle: Manage commit comments
category:
  - Set repository policies
---

## About commit comments

Commit comments are comments people add directly to a commit outside of a pull request. Disallowing commit comments can help organizations reduce noise and maintain cleaner commit histories, especially if commit comments are not part of your development workflow.

It is possible to allow or disallow commit comments at a repository level. Organization owners can configure the default setting for commit comments for all repositories in an organization.

## What happens when commit comments are disabled?

When you disable commit comments for your organization:

* People cannot create new commit comments.
* Existing commit comments remain visible.
* Repository administrators can override the setting in their repository's settings.

## Managing the default setting for commit comments in your organization's repositories

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, select **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Repository**, then click **General**.
1. Under "Commits", select or deselect **Allow comments on individual commits**.


## Further reading

* [AUTOTITLE](/communities/moderating-comments-and-conversations/managing-disruptive-comments)
