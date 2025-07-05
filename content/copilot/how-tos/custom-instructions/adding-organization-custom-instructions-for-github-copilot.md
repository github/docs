---
title: Adding organization custom instructions for GitHub Copilot
shortTitle: Organization custom instructions
intro: 'Customize {% data variables.copilot.copilot_chat %} responses for members of your organization.'
permissions: Organization owners
product: 'Organizations with a {% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %} plan'
versions:
  feature: copilot-org-instructions
topics:
  - Copilot
redirect_from:
  - /copilot/customizing-copilot/adding-organization-custom-instructions-for-github-copilot
---

{% data reusables.copilot.organization-instructions-note %}

For an overview of the methods you can use to customize {% data variables.copilot.copilot_chat %} responses, see [AUTOTITLE](/copilot/customizing-copilot/about-customizing-github-copilot-chat-responses?tool=webui).

## About organization custom instructions for {% data variables.copilot.copilot_chat %}

Organization owners can add instructions for {% data variables.copilot.copilot_chat %} in order to tailor chat responses to the needs and preferences of your organization. For example, you can choose to always have {% data variables.copilot.copilot_chat_short %} respond in your company's language of choice or with a particular style. Some examples of instructions you could add are:
* `Always respond in Spanish.`
* `Do not generate code blocks in responses.`
* `For questions related to security, use the Security Docs Knowledge Base.`

{% data reusables.copilot.custom-instructions-interactions-note %}

## Adding organization custom instructions

You can add organization custom instructions via your organization settings.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}** then click **Custom instructions**.
1. Under "Preferences and instructions", add natural language instructions to the text box.

   You can write your instructions in any format you prefer. For example, you can write them as a single block of text, each on a new line, or separated by blank lines.
1. Click **Save changes**. Your instructions are now active, and will stay active until you change or remove them.

To see your instructions in action, go to [https://github.com/copilot](https://github.com/copilot) and start a conversation.

{% note %}

Did you successfully add custom instructions for your organization?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}
