---
title: Quickstart for GitHub Discussions
intro: 'Enable {% data variables.product.prodname_discussions %} on an existing repository or organization and start conversations with your community.'
allowTitleToDifferFromFilename: true
versions:
  feature: discussions
shortTitle: Quickstart
---


## Introduction

{% data variables.product.prodname_discussions %} is a collaborative communication forum for the community around an open source or internal project. Discussions are for conversations that need to be transparent and accessible but do not need to be tracked on a project board and are not related to code, unlike {% data variables.product.prodname_github_issues %}. Discussions enable fluid, open conversation in a public forum.

Discussions give a space for more collaborative conversations by connecting and giving a more centralized area to connect and find information.

## Enabling {% data variables.product.prodname_discussions %} on your repository

Repository owners and people with write access can enable {% data variables.product.prodname_discussions %} for a community on their public{% ifversion ghes %}, internal{% endif %} and private repositories. The visibility of a discussion is inherited from the repository the discussion is created in.

When you first enable {% data variables.product.prodname_discussions %}, you will be invited to configure a welcome post.

{% data reusables.repositories.navigate-to-repo %}
1. Under your repository name, click {% octicon "gear" aria-label="The gear icon" %}
**Settings**.

   ![Screenshot of the tabs in a {% data variables.product.company_short %} repository. The "Settings" option is outlined in dark orange.](/assets/images/help/discussions/public-repo-settings.png)

1. Scroll down to the "Features" section and click **Set up discussions**.

   ![Screenshot of the "Discussions" option in the repository's settings. A green button, labeled "Set up discussions", is outlined in dark orange.](/assets/images/help/discussions/setup-discussions-button.png)

1. Under "Start a new discussion," edit the template to align with the resources and tone you want to set for your community.
1. Click **Start discussion**.

## Enabling {% data variables.product.prodname_discussions %} on your organization

Organization owners can enable {% data variables.product.prodname_discussions %} for their organization.

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## Welcoming contributions to your discussions

You can welcome your community and introduce a new way to communicate in a repository or organization by creating a welcome post and pinning the post to your {% data variables.product.prodname_discussions %} page. Pinning and locking discussions helps people know that a post is meant as an announcement. You can use announcements as a way to link people to more resources and offer guidance for opening discussions in your community. For more information about pinning a discussion, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)."

## Setting up community guidelines for contributors

For repository discussions, you can set contributing guidelines to encourage collaborators to have meaningful, useful conversations that are relevant to the repository. You can also update the repository's README to communicate expectations on when collaborators should open an issue or discussion. For more information about providing guidelines for your project, see{% ifversion fpt or ghec %} "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" and{% endif %} "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions)."

For organization discussions, you share information about how to engage with your organization by creating an organization profile README. For more information, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)."

## Creating a new discussion

Any authenticated user who can view the repository can create a discussion in that repository. Similarly, since organization discussions are based on a source repository, any authenticated user who can view the source repository can create a discussion in that organization.

{% data reusables.discussions.starting-a-discussion %}

## Creating a new poll

Any authenticated user who can view a repository can create a poll. Similarly, since organization discussions are based on a source repository, any authenticated user who can view the source repository can create a poll in that organization.

{% data reusables.discussions.starting-a-poll %}

## Organizing discussions

Repository owners and people with write access to the repository can create new categories to keep discussions organized. Similarly, since organization discussions are based on a source repository, repository owners and people with write access to the source repository can create new categories for organization discussions.

Collaborators participating in and creating new discussions can group discussions into the most relevant existing categories. Discussions can also be recategorized after they are created. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)."

{% data reusables.discussions.you-can-label-discussions %}

## Promoting healthy conversations

People with write permissions for the repository, or for the source repository for organization discussions, can help surface important conversations by pinning discussions, deleting discussions that are no longer useful or are damaging to the community, and transferring discussions to more relevant repositories owned by the organization. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/managing-discussions)."

People with triage permissions for the repository, or for the source repository for organization discussions, can help moderate a project's discussions by marking comments as answers, locking discussions that are no longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/moderating-discussions)."

## Next steps

Once there is a clear path to scope work out and move an idea from concept to reality, you can create an issue and start tracking your progress. For more information on creating an issue from a discussion, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/moderating-discussions)."
