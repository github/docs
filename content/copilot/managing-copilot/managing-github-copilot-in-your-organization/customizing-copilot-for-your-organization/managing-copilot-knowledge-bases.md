---
title: Managing Copilot knowledge bases
shortTitle: Manage knowledge bases
intro: 'Organization owners can create a knowledge base bringing together Markdown documentation across one or more repositories, and then organization members can use that knowledge base as context for {% data variables.product.prodname_copilot_chat_dotcom_short %}.'
versions:
  ghec: '*'
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/enhancing-copilot-for-your-organization/managing-copilot-knowledge-bases
  - /copilot/github-copilot-enterprise/copilot-docset-management/creating-private-docsets
  - /copilot/github-copilot-enterprise/copilot-docset-management
  - /copilot/github-copilot-enterprise/copilot-chat-in-github/managing-copilot-knowledge-bases
  - /copilot/github-copilot-chat/copilot-chat-in-github/managing-copilot-knowledge-bases
  - /copilot/github-copilot-enterprise/managing-copilot-knowledge-bases
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-copilot-knowledge-bases
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-copilot-knowledge-bases
---

{% ifversion fpt %}

{% data reusables.rai.copilot.enterprise-fpt-link %}

{% endif %}

## About knowledge bases

Organization owners can create knowledge bases, bringing together Markdown documentation across one or more repositories. Organization members can then specify that knowledge base as the context for {% data variables.product.prodname_copilot_chat_dotcom_short %}, {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, and {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %}.

When you ask a question in {% data variables.product.prodname_copilot_chat %} with a knowledge base selected, {% data variables.product.prodname_copilot %} will search the knowledge base for relevant information and synthesize a response.

For more information on how to use knowledge bases in {% data variables.product.prodname_copilot_chat_short %}, see "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom#asking-a-question-about-a-knowledge-base)" and "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide#asking-a-question-about-a-knowledge-base-in-github-copilot-chat)."

## Creating a knowledge base

You can create a knowledge base from a single repository or a selection of repositories. You can create a knowledge base using public, private, and/or internal repositories.

Knowledge bases you create will be accessible by all organization members with a {% data variables.product.prodname_copilot_enterprise %} subscription. When an organization member uses a knowledge base as context in {% data variables.product.prodname_copilot_chat %}, the response will only use data from repositories that the organization member has read access to.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}** then click **Customize**.
1. To the right of "Knowledge", click **Add knowledge base**.
1. In the "Name" field, enter a unique name for the knowledge base. Optionally, in the "Description" field, you can add a description for the knowledge base.

    ![Screenshot of the "Add knowledge base" page.](/assets/images/help/copilot/copilot-create-knowledge-base-page.png)

1. Under "Content", to see a full list of available repositories, click **Select repositories**.

    ![Screenshot of the "Select repositories" page. The "Select repositories" page is highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-select-repositories-button.png)

1. To select a repository or repositories, click the checkbox next to the repository name. When you're finished selecting repositories, click **Apply**.

    ![Screenshot of the "Select repositories" page.](/assets/images/help/copilot/copilot-select-repositories-page.png)

1. Optionally, you can define which paths within the selected repositories to index.

      * Click **Edit file paths**.

      ![Screenshot of the list of selected repositories. The "Edit file paths" link is highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-select-paths-button.png)

      * List the paths you want to include in the knowledge base, one path per line. When you're finished, click **Apply**.

1. Click **Create knowledge base**.

## Updating a knowledge base

Organization owners can update a knowledge base created in their organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}** then click **Customize**.
1. To the right of the knowledge base you want to edit, click {% octicon "pencil" aria-label="The pencil symbol" %}.
1. Make your desired changes to your knowledge base.
1. Click **Update knowledge base**.

## Deleting a knowledge base

Organization owners can delete a knowledge base created in their organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}** then click **Customize**.
1. To the right of the knowledge base you want to delete, click {% octicon "trash" aria-label="The trash symbol" %}.
1. In the "Confirm deletion" dialog box, review the information and click **Delete**.
