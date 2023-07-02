---
title: Required workflows
shortTitle: Required workflows
intro: You can specify which workflows will run as required status checks in all repositories or selected repositories in your organization.
versions:
  feature: required-workflows
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.workflows.required-workflow-beta %}

## Overview

You can configure a workflow that must run in repositories in an organization for all pull requests opened against {% ifversion actions-required-workflow-improvements %}any target branch{% else %}the default branch{% endif %}. Required workflows allow you to implement organization-wide CI/CD policies that apply to current and future repositories. A required workflow is triggered by {% ifversion actions-required-workflow-improvements %}`pull_request` and `pull_request_target` default events{% else %}pull request events{% endif %} and appears as a required status check, which blocks the ability to merge the pull request until the required workflow succeeds.

Required workflows are not the same as reusable workflows. Reusable workflows can be called by another workflow. Required workflows are enforced on repositories by an organization owner.

## Prerequisites

Before configuring a required workflow, note the following prerequisites:

{% data reusables.actions.workflows.required-workflow-prerequisites %}

## Restrictions and behaviors for the source repository

Note the following restrictions and behaviors for the source repository and workflow:

{% data reusables.actions.workflows.required-workflow-source-notes %}

## Restrictions and behaviors for the target repository

Note the following restrictions and behaviors for the target repositories:

{% data reusables.actions.workflows.required-workflow-target-notes %}

## Viewing workflow runs for required workflows

After a required workflow has run at least once in a repository, you can view its workflow runs in that repository's "Actions" tab. To make changes to what workflows are configured as required in an organization, you must contact an organization owner. To make changes to a required workflow itself, anyone with write permissions for the repository that contains the required workflow can make changes to it.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, you can view workflow runs for required workflows under "Required workflows."

   ![Screenshot of the sidebar on the "Actions" page. A subsection, labeled "Required workflows", contains an entry called "Test required workflow" and is outlined in dark orange.](/assets/images/help/settings/view-required-workflows.png)

## Adding a required workflow to an organization

Organization owners can configure required workflows in their organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#adding-a-required-workflow-to-an-organization)."
