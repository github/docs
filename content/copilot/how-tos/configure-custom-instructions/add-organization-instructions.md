---
title: Adding organization custom instructions for GitHub Copilot
shortTitle: Add organization instructions
intro: 'Customize {% data variables.product.prodname_copilot_short %} responses for members of your organization.'
permissions: Organization owners
product: 'Organizations with a {% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %} plan'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/customizing-copilot/adding-organization-custom-instructions-for-github-copilot
  - /copilot/how-tos/custom-instructions/adding-organization-custom-instructions-for-github-copilot
  - /copilot/how-tos/custom-instructions/add-organization-instructions
contentType: how-tos
---

> [!NOTE]
> This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.
>
> **Support:** Organization custom instructions are currently only supported for {% data variables.copilot.copilot_chat_short %} on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.copilot.copilot_code-review_short %} on {% data variables.product.prodname_dotcom_the_website %}.

For an overview of the methods you can use to customize {% data variables.copilot.copilot_chat %} responses, see [AUTOTITLE](/copilot/concepts/about-customizing-github-copilot-chat-responses?tool=webui).

## About organization custom instructions for {% data variables.product.prodname_copilot_short %}

Organization owners can add instructions for {% data variables.product.prodname_copilot_short %}, to tailor responses to the needs and preferences of your organization. For example, you can choose to always have {% data variables.copilot.copilot_chat_short %} respond in your company's language of choice or with a particular style.

Custom instructions defined in an organization's {% data variables.product.prodname_copilot_short %} settings are used for all members of the organization, irrespective of whether they receive their {% data variables.product.prodname_copilot_short %} subscription from that organization.

Some examples of instructions you could add are:
* `Always respond in Spanish.`
* `Do not generate code blocks in responses.`
* `For questions related to security, use the Security Docs Knowledge Base.`

> [!NOTE]
> * {% data reusables.copilot.custom-instructions-chat-precedence %}
> * For {% data variables.copilot.copilot_code-review_short %}, the order of precedence is: instructions in any applicable `.github/instructions/**/NAME.instructions.md` file, then the instructions in the `.github/copilot-instructions.md` file, then the organization-level custom instructions.
> * {% data reusables.copilot.custom-instructions-conflict %}

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
