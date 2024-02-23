---
title: About GitHub Copilot Chat in GitHub.com
shortTitle: About Copilot Chat in GitHub.com
intro: '{% data variables.product.prodname_copilot_chat_dotcom %} can help you by providing answers to coding related questions directly within {% data variables.product.prodname_dotcom_the_website %}.'
product: 'Owners of organizations {% ifversion ghec %}or enterprises {% endif %}with a {% data variables.product.prodname_copilot_enterprise %} subscription can decide whether to grant access to the {% data variables.product.prodname_copilot_enterprise_short %} functionality for an organization. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/enabling-github-copilot-enterprise)."'
versions:
  feature: 'copilot-on-dotcom'
  fpt: '*'
topics:
  - Copilot
type: rai
redirect_from:
  - /copilot/github-copilot-enterprise/copilot-chat-in-github/about-github-copilot-chat
  - /copilot/github-copilot-enterprise/copilot-docset-management/about-copilot-docset-management
---

{% ifversion fpt %}

{% data reusables.rai.copilot.enterprise-fpt-link %}

{% endif %}

## About {% data variables.product.prodname_copilot_chat_dotcom %}

{% data variables.product.prodname_copilot_chat_dotcom %} is a chat interface that lets you interact with {% data variables.product.prodname_copilot %}, to ask and receive answers to coding-related questions within {% data variables.product.prodname_dotcom_the_website %}.

The chat interface provides access to coding information and support without requiring you to navigate documentation or search online forums.

{% note %}

**Note**: {% data variables.product.prodname_copilot_chat_short %} is also avaiable in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, and the JetBrains suite of IDEs. However, features available in these IDEs differ from features available on {% data variables.product.prodname_dotcom_the_website %}.

{% endnote %}

{% data variables.product.prodname_copilot_chat %} can answer a wide range of coding-related questions on topics including syntax, programming concepts, test cases, debugging, and more. {% data variables.product.prodname_copilot_chat %} is not designed to answer non-coding questions or provide general information on topics outside of coding.

{% data variables.product.prodname_copilot_chat %} works by using a combination of natural language processing and machine learning to understand your question and provide you with an answer. This process can be broken down into a number of steps.

{% data reusables.rai.copilot.about-copilot-dotcom-chat %}

## Next steps

For details of how to use {% data variables.product.prodname_copilot_chat_dotcom %}, see:

- "[AUTOTITLE](/enterprise-cloud@latest/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)"{% ifversion fpt %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

## Further reading

- "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-copilot-pre-release-terms)"
- [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center/)
