---
title: Indexing repositories for Copilot Chat
shortTitle: Index repositories
intro: '{% data variables.product.prodname_copilot_chat %} improves responses to questions about code by indexing your repositories.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/customizing-copilot-for-your-organization/indexing-repositories-for-copilot-chat
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/enhancing-copilot-for-your-organization/indexing-repositories-for-copilot-chat
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/indexing-repositories-for-copilot-chat
  - /copilot/customizing-copilot/indexing-repositories-for-copilot-chat
---

## Benefit of indexing repositories

{% data reusables.copilot.semantic-index-info %}

When you start a conversation with {% data variables.product.prodname_copilot_chat_short %} that has a repository context, the repository is automatically indexed to improve answers to your questions about the code in {% data variables.product.github %} and {% data variables.product.prodname_vscode %}.

**{% data variables.product.prodname_copilot_chat_short %} will not use your indexed repository for model training.**

## About index creation and use

Indexing runs in the background and initial indexing can take up to 30 minutes for a large repository. Once a repository has been indexed for the first time, re-indexing is much quicker and the index will typically be automatically updated to include the latest changes within 5 minutes of you starting a new conversation.

Once an index has been created for a repository, {% data variables.product.prodname_copilot_chat_short %} uses it to answer questions asked by any {% data variables.product.prodname_copilot_short %} user in {% data variables.product.github %} and {% data variables.product.prodname_vscode %}.

## Excluding content from {% data variables.product.prodname_copilot_chat_short %} answers

Enterprise or organization owners with a {% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %} plan can define content exclusions to control the behavior of {% data variables.product.prodname_copilot %} for the {% data variables.product.prodname_copilot_short %} seats they manage. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/excluding-content-from-github-copilot).

If a semantic code search index is created for a repository that is included in a content exclusion policy, data is filtered according to the policy before being passed to {% data variables.product.prodname_copilot_chat_short %}.
