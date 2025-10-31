---
title: Indexing repositories for GitHub Copilot Chat
shortTitle: Repository indexing
intro: '{% data variables.copilot.copilot_chat %} improves responses to questions about code by indexing your repositories.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/customizing-copilot-for-your-organization/indexing-repositories-for-copilot-chat
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/enhancing-copilot-for-your-organization/indexing-repositories-for-copilot-chat
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/indexing-repositories-for-copilot-chat
  - /copilot/customizing-copilot/indexing-repositories-for-copilot-chat
  - /copilot/using-github-copilot/indexing-repositories-for-copilot-chat
  - /copilot/using-github-copilot/copilot-chat/indexing-repositories-for-copilot-chat
  - /copilot/concepts/indexing-repositories-for-copilot-chat
  - /copilot/concepts/repository-indexes
contentType: concepts
category: 
  - Manage Copilot for a team
---

## Benefit of indexing repositories

{% data variables.copilot.copilot_chat_short %}'s ability to answer natural language questions in a repository context is optimized when the semantic code search index for the repository is up to date.

When you start a conversation with {% data variables.copilot.copilot_chat_short %} that has a repository context, the repository is automatically indexed to improve context-enriched answers to your questions about the code's structure and logic in {% data variables.product.github %} and {% data variables.product.prodname_vscode %}. For example, you can ask **“How does this repo manage HTTP requests and responses?”** and {% data variables.copilot.copilot_chat_short %} will reference relevant sections of your code to deliver an informed answer.

**{% data variables.copilot.copilot_chat_short %} will not use your indexed repository for model training.**

For more information on how to ask questions, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-github).

## About index creation and use

Indexing runs in the background and initial indexing can take up to 60 seconds for a large repository. Once a repository has been indexed for the first time, re-indexing is much quicker and the index will typically be automatically updated to include the latest changes within seconds of you starting a new conversation.

Once an index has been created for a repository, {% data variables.copilot.copilot_chat_short %} uses it to answer questions asked by any {% data variables.product.prodname_copilot_short %} user in {% data variables.product.github %} and {% data variables.product.prodname_vscode %}.

> [!TIP] There is no limit to how many repositories you can index.

## Excluding content from {% data variables.copilot.copilot_chat_short %} answers

Enterprise or organization owners with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan can define content exclusions to control the behavior of {% data variables.product.prodname_copilot %} for the {% data variables.product.prodname_copilot_short %} seats they manage. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/excluding-content-from-github-copilot).

If a semantic code search index is created for a repository that is included in a content exclusion policy, data is filtered according to the policy before being passed to {% data variables.copilot.copilot_chat_short %}.
