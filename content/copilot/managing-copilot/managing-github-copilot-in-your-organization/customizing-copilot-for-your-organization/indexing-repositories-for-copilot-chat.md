---
title: Indexing repositories for Copilot Chat
shortTitle: Index repositories
intro: 'You can improve the responses {% data variables.product.prodname_copilot_chat %} is able to provide by indexing your repositories.'
permissions: '{% data reusables.copilot.indexing-who-can-do-this %}'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/enhancing-copilot-for-your-organization/indexing-repositories-for-copilot-chat
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/indexing-repositories-for-copilot-chat
---

## About indexing repositories

{% data variables.product.prodname_copilot %}'s ability to answer natural language questions, in the context of a {% data variables.product.prodname_dotcom %} repository, is improved when the repository has been indexed for semantic code search.

Indexing repositories is not a requirement and will not affect responses to questions about information in knowledge bases, pull requests, issues, discussions, or commits. However, indexing can help {% data variables.product.prodname_copilot_chat_short %} answer questions that relate directly to the code within a repository.

The indexing status of a repository is displayed on {% data variables.product.prodname_dotcom_the_website %} when you start a conversation that has a repository context. You can index the repository if it has not been indexed yet.

After you index a repository it is automatically re-indexed every time a change is pushed to the repository.

## Indexing a repository

1. On {% data variables.product.prodname_dotcom_the_website %}, browse to the repository you want to index.
1. On any page, click the **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}** icon in the upper-right corner.

   If the repository has been indexed, this is shown near top of the {% data variables.product.prodname_copilot_short %} Chat panel.

   ![Screenshot showing 'Indexed for improved understanding and accuracy' highlighted with a dark orange outline.](/assets/images/help/copilot/indexed-repo.png)

1. If the repository has not been indexed, an **Index REPOSITORY NAME** button is displayed. Click this button to start the indexing process.

   ![Screenshot showing the 'Index REPOSITORY NAME' button highlighted with a dark orange outline.](/assets/images/help/copilot/index-this-repo.png)

   Initial indexing can take up to 30 minutes for a large repository. Once a repository has been indexed for the first time, re-indexing is much quicker and the index will typically be automatically updated within 5 minutes of each push to the repository.
