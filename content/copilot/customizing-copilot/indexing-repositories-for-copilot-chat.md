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
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/customizing-copilot-for-your-organization/indexing-repositories-for-copilot-chat
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/enhancing-copilot-for-your-organization/indexing-repositories-for-copilot-chat
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/indexing-repositories-for-copilot-chat
---

## About indexing repositories

{% data variables.product.prodname_copilot %}'s ability to answer natural language questions, in the context of a {% data variables.product.prodname_dotcom %} repository, is improved when the repository has been indexed for semantic code search.

Indexing repositories for {% data variables.product.prodname_copilot_chat_short %} is not a requirement and will not affect responses to questions about information in knowledge bases, pull requests, issues, discussions, or commits. However, indexing is for search purposes and can help {% data variables.product.prodname_copilot_chat_short %} answer questions that relate directly to the code within a repository. **{% data variables.product.prodname_copilot_chat_short %} will not use your indexed repository for model training.**

The indexing status of a repository is displayed on {% data variables.product.github %} when you start a conversation that has a repository context. You can index the repository if it has not been indexed yet.

After you index a repository it is automatically re-indexed every time a change is pushed to the repository.

## Indexing limits

Your {% data variables.product.prodname_copilot %} subscription plan determines your indexing limits.

{% rowheaders %}

|                  | {% data variables.product.prodname_copilot_individuals_short %} | {% data variables.product.prodname_copilot_business_short %} | {% data variables.product.prodname_copilot_enterprise_short %} |
|------------------|-----------------------------------------------------------------|--------------------------------------------------------------|----------------------------------------------------------------|
| Repository limit | 5                                                               | 50                                                           | Unlimited                                                      |

{% endrowheaders %}

{% ifversion ghec %}
If you have a seat on the {% data variables.product.prodname_copilot_enterprise_short %} (CE) plan, you do not have a limit on the number of repositories you can index. You can index repositories from any organization you have access to, regardless of whether the organization is subject to an indexing limit.
{% endif %}

{% ifversion ghec or fpt %}
If you have a seat on the {% data variables.product.prodname_copilot_business_short %} (CB) plan, you are subject to the indexing limit for your organization. Additionally, you can only index repositories that belong to the GitHub organization that assigned your Copilot seat. You cannot index additional repositories once your organization reaches the repository limit, but you can still benefit from the indexes created by other users.
{% endif %}

{% ifversion fpt %}
If you have a {% data variables.product.prodname_copilot_individuals_short %} (CI) plan, you are subject to an indexing limit and can index any repository that you have access to. However, you can still benefit from the indexes created by other users without affecting your limit.
{% endif %}

Both CE and CB plans can apply content exclusions to control the behavior of {% data variables.product.prodname_copilot %} for the {% data variables.product.prodname_copilot_short %} seats they manage. For more information, see "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/excluding-content-from-github-copilot)." However, CI users can still index any repository they have access to, regardless of the content exclusion policies set by the organization.

> [!WARNING] Indexing is permanent for each repository unless the repository itself is deleted. Use caution when selecting a repository to index. Repository indexing cannot be canceled once it starts.

## Indexing a repository

1. On {% data variables.product.github %}, browse to the repository you want to index.
1. On any page, click the **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}** icon in the bottom right corner.

   If the repository has been indexed, this is shown near top of the {% data variables.product.prodname_copilot_short %} Chat panel.

   ![Screenshot showing 'Indexed for improved understanding and accuracy' highlighted with a dark orange outline.](/assets/images/help/copilot/indexed-repo.png)

1. If the repository has not been indexed, an **Index REPOSITORY NAME** button is displayed. Click this button to start the indexing process.

   ![Screenshot showing the 'Index REPOSITORY NAME' button highlighted with a dark orange outline.](/assets/images/help/copilot/index-this-repo.png)

   Initial indexing can take up to 30 minutes for a large repository. Once a repository has been indexed for the first time, re-indexing is much quicker and the index will typically be automatically updated within 5 minutes of each push to the repository.
