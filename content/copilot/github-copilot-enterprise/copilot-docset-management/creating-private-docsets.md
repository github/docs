---
title: Creating private docsets
shortTitle: Creating private docsets
intro: 'You can generate a private docset from a repository in your organization and then set it as the context for {% data variables.product.prodname_copilot_chat_dotcom_short %}.'
versions:
  feature: copilot-private-docsets
topics:
  - Copilot
product: '{% data reusables.gated-features.copilot-enterprise-beta %}'
---

## About creating private docsets

Organization owners can create and index a private docset from a repository in their organization. Organization members can then specify that docset as the context for {% data variables.product.prodname_copilot_chat_dotcom_short %}. When you ask a question in {% data variables.product.prodname_copilot_chat_dotcom_short %}, {% data variables.product.prodname_copilot %} will search the docset for relevant information and synthesize a response. For more information on how to use {% data variables.product.prodname_copilot_chat_dotcom_short %}, see "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github)."

To learn more about {% data variables.product.prodname_copilot_for_docs %} and how to use the feature most effectively, see "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-docset-management/about-copilot-docset-management)."

## Creating a private docset

You can create a private docset from a single repository or a selection of repositories in your organization. You can create a docset from public or private repositories. Organization users will only have access to results from repositories they have read access to.

{% data reusables.copilot.click-copilot-icon %}
{% data reusables.copilot.copilot-immersive-mode %}
1. At the bottom of the "Chat with {% data variables.product.prodname_copilot_short %}" page, click **Create a new docset**.

    ![Screenshot of the "Create a new docset" button at the bottom of the "Chat with Copilot" page. The button is highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-create-docset-button.png)

1. In the "Owner" dropdown menu, select the organization that owns the repository or repositories you want to index, and in the "Docset name" field, enter a unique name for the docset. Optionally, in the "Description" field, you can add a description for the docset.

    ![Screenshot of the "Create a new docset" page. The "Owner" dropdown menu and "Docset name" field are highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-create-docset-page.png)

1. Under "Docset scope", to see a full list of available repositories, click **Select repositories**.

    ![Screenshot of the "Select repositories" page. The "Select repositories" page is highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-select-repositories-button.png)

1. To select a repository or repositories, click the checkbox next to the repository name. When you're finished selecting repositories, click **Apply**.

    ![Screenshot of the "Select repositories" page.](/assets/images/help/copilot/copilot-select-repositories-page.png)

1. Optionally, you can define which paths within the selected repositories to index.

      - Click **Edit file paths**.

      ![Screenshot of the list of selected repositories. The "Edit file paths" link is highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-select-paths-button.png)

      - List the paths you want to include in the docset, one path per line. When you're finished, click **Apply**.

1. Click **Save**.

## Deleting a private docset

Organization owners can delete a docset created from a repository in their organization.

{% data reusables.copilot.click-copilot-icon %}
{% data reusables.copilot.copilot-immersive-mode %}
1. On the "Chat with {% data variables.product.prodname_copilot_short %}" page, select the docset you want to delete.
1. In the top right corner of the docset, click {% octicon "trash" aria-label="The trash symbol" %}.
1. Review the information in the "Confirm deletion" dialog box, and click **Delete docset**.

## Searching private docsets

You can use {% data variables.product.prodname_copilot_chat_dotcom_short %} to search private docsets created from repositories in your organization. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom#asking-a-question-with-a-specific-context)."
