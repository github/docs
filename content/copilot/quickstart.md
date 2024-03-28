---
title: Quickstart for GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} can help you work, by offering inline suggestions as you code.'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
---

## Introduction

{% data variables.product.prodname_copilot %} is an AI pair programmer. You can use {% data variables.product.prodname_copilot %} to get suggestions for whole lines or entire functions right inside your editor.

You can use {% data variables.product.prodname_copilot %} either through your personal account, with a {% data variables.product.prodname_copilot_for_individuals %} subscription, or through an organization {% ifversion ghec %}or enterprise{% endif %} account, with a {% data variables.product.prodname_copilot_for_business %} {% ifversion ghec %} or {% data variables.product.prodname_copilot_enterprise %}{% endif %} subscription. To use {% data variables.product.prodname_copilot_short %} through an organization account, you must be assigned a {% data variables.product.prodname_copilot %} seat by your organization.

This guide shows you how to set up a {% data variables.product.prodname_copilot_for_individuals %} subscription for your personal account, install the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vscode %}, and get your first suggestion. For organization owners{% ifversion ghec %} and enterprise owners{% endif %}, this guide also explains how to set up a {% data variables.product.prodname_copilot_for_business %} {% ifversion ghec %} or  {% data variables.product.prodname_copilot_enterprise %}{% endif %} subscription.

For more in-depth information on how to use {% data variables.product.prodname_copilot %} in a variety of environments, see "[AUTOTITLE](/copilot/using-github-copilot/getting-started-with-github-copilot)."

## Signing up for {% data variables.product.prodname_copilot %} for your personal account

Before you can start using {% data variables.product.prodname_copilot %} through your personal account, you will need to set up a free trial or subscription for {% data variables.product.prodname_copilot_for_individuals %}.

{% data reusables.copilot.tp-users-trial-eligibility %}

{% data reusables.copilot.signup-procedure %}

## Installing the {% data variables.product.prodname_copilot %} extension for {% data variables.product.prodname_vscode %}

To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must first install the {% data variables.product.prodname_copilot_short %} extension.

1. In the {% data variables.product.prodname_vscode %} Marketplace, go to the [{% data variables.product.prodname_copilot %} extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) page and click **Install**.
1. A popup will appear, asking to open {% data variables.product.prodname_vscode %}. Click **Open {% data variables.product.prodname_vscode %}**.
1. In the "Extension: {% data variables.product.prodname_copilot %}" tab in {% data variables.product.prodname_vscode %}, click **Install**.
1. If you have not previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, you will be prompted to sign in to {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_vscode %}.

   If you have previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, {% data variables.product.prodname_copilot %} will be automatically authorized.

1. In your browser, {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize {% data variables.product.prodname_vscode %}**.
1. In {% data variables.product.prodname_vscode %}, in the "{% data variables.product.prodname_vscode %}" dialogue box, to confirm the authentication, click **Open**.

## Getting your first suggestion

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} The following samples are in JavaScript, but other languages will work similarly.

1. Open {% data variables.product.prodname_vscode %}.
{% data reusables.copilot.create-js-file %}
{% data reusables.copilot.type-function-header %}
   {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text. The exact suggestion may vary.
{% data reusables.copilot.accept-suggestion %}

{% ifversion fpt %}

## Signing up for {% data variables.product.prodname_copilot %} for your organization account

As an organization owner, you can add a {% data variables.product.prodname_copilot_for_business %} subscription to your organization account. This will allow you to assign {% data variables.product.prodname_copilot %} seats to members of your organization.

{% data reusables.copilot.signup-procedure-org %}
{% endif %}

{% ifversion ghec %}

## Signing up for {% data variables.product.prodname_copilot_for_business %} for your enterprise account

As an enterprise owner, you can add a {% data variables.product.prodname_copilot_for_business %} subscription to your enterprise account. Owners of organizations that you have enabled for {% data variables.product.prodname_copilot_short %} will then be able to assign {% data variables.product.prodname_copilot %} seats to members of their organization. For more information, see "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/managing-access-for-copilot-in-your-organization)."

### Customers under a Microsoft Enterprise Agreement

{% data reusables.copilot.signup-procedure-enterprise-msft-ea %}

### Customers under a direct GitHub contract

{% data reusables.copilot.signup-procedure-enterprise %}

## Signing up for {% data variables.product.prodname_copilot_enterprise %} for your enterprise account

As an enterprise owner, you can add a {% data variables.product.prodname_copilot_enterprise %} subscription to your enterprise account. Owners of organizations that you have enabled for {% data variables.product.prodname_copilot_short %} will then be able to assign {% data variables.product.prodname_copilot %} seats to members of their organization. For more information, see "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/managing-access-for-copilot-in-your-organization)."

### Customers under a Microsoft Enterprise Agreement

{% data reusables.copilot.signup-procedure-enterprise-msft-ea %}

### Customers under a direct {% data variables.product.company_short %} contract

The process for signing up for {% data variables.product.prodname_copilot_enterprise %} varies depending on whether your enterprise is new to {% data variables.product.prodname_copilot %}, or you are upgrading from {% data variables.product.prodname_copilot_for_business %}.

#### Signing up for {% data variables.product.prodname_copilot_enterprise %} without {% data variables.product.prodname_copilot_for_business %}

1. In a browser, navigate to [github.com/github-copilot/signup/plans](https://github.com/github-copilot/signup/plans).
1. Select **{% data variables.product.prodname_copilot_enterprise %}**, then click **Enable {% data variables.product.prodname_copilot_enterprise_short %}**.
1. Follow the prompts to complete the sign-up process.

#### Upgrading from {% data variables.product.prodname_copilot_for_business %} to {% data variables.product.prodname_copilot_enterprise %}

When you purchase {% data variables.product.prodname_copilot_enterprise_short %}, all existing {% data variables.product.prodname_copilot_business_short %} seats in your enterprise will be converted to the {% data variables.product.prodname_copilot_enterprise_short %} plan and billed accordingly. You cannot have a combination of {% data variables.product.prodname_copilot_enterprise_short %} and {% data variables.product.prodname_copilot_business_short %} seats within the same enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. In the "Access management" tab, in the section "{% data variables.product.prodname_copilot_business_short %} is active in your enterprise," click **Enable {% data variables.product.prodname_copilot_enterprise_short %}**.
1. In the "Welcome to {% data variables.product.prodname_copilot_enterprise_short %}" popup that's displayed, click **Purchase {% data variables.product.prodname_copilot_enterprise_short %}**.
1. Follow the prompts to complete the sign-up process.

## Enabling {% data variables.product.prodname_copilot %} for your enterprise account

Users can only use {% data variables.product.prodname_copilot %} after they have been granted a {% data variables.product.prodname_copilot_short %} seat by an organization they belong to.

As an enterprise owner, you must decide whether to allow all organizations in your enterprise the ability to grant {% data variables.product.prodname_copilot %} seats to members, or only specific organizations. Initially, after purchasing {% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %}, no organizations have the ability to grant {% data variables.product.prodname_copilot %} seats, so you must enable this for some or all of your organizations.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. In the "Access management" tab, under "Manage organization access to {% data variables.product.prodname_copilot %}," configure the access for your {% data variables.product.prodname_copilot %} subscription.
   - To enable {% data variables.product.prodname_copilot %} for all organizations in your enterprise, both current and future, select **Allow for all organizations**.
   - To enable {% data variables.product.prodname_copilot %} for specific organizations, select **Allow for specific organizations**.
1. If you selected **Allow for specific organizations**, select the organizations you want to enable {% data variables.product.prodname_copilot %} for. Alternatively, you can select the organizations you want to disable {% data variables.product.prodname_copilot %} access for.

   When you enable an organization, the owners of that organization will receive an email with instructions on how to enable {% data variables.product.prodname_copilot %} for members of the organization.

1. Click the **Policies** tab.
1. Under "Suggestions matching public code," click the dropdown menu and select the policy for managing the use of {% data variables.product.prodname_copilot %} suggestions that match public code in your enterprise.
   - To block {% data variables.product.prodname_copilot %} suggestions that match public code, select **Blocked**.
   - To allow {% data variables.product.prodname_copilot %} suggestions that match public code, select **Allowed**.
   - To allow each of your organizations to set their own policy, select **No policy**.
1. If you have a {% data variables.product.prodname_copilot_enterprise %} subscription, under "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}," click the dropdown menu and select the policy for managing the use of {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}.
   - To allow each of your organizations to set their own policy, select **No policy**.
   - To enable {% data variables.product.prodname_copilot_chat_short %} for all organizations in your enterprise, select **Enabled**.
   - To disable {% data variables.product.prodname_copilot_chat_short %} for all organizations in your enterprise, select **Disabled**.

   If you select **Enabled**, use the check boxes that are displayed to specify whether you want to:
   - Allow {% data variables.product.prodname_copilot_chat_short %} to use Bing search when responding to questions on {% data variables.product.prodname_dotcom_the_website %}.
   - Allow {% data variables.product.prodname_dotcom %} to collect user feedback, optionally submitted after using {% data variables.product.prodname_copilot_short %} to generate a pull request summary.

   For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/enabling-github-copilot-enterprise-features#enabling-or-disabling-github-copilot-enterprise-features-for-an-enterprise)."

1. Under "{% data variables.product.prodname_copilot_chat_short %} in the IDE," click the dropdown menu and select the policy for managing the use of {% data variables.product.prodname_copilot_chat_short %} in code editor applications.
   - To allow each of your organizations to set their own policy, select **No policy**.
   - To enable {% data variables.product.prodname_copilot_chat_short %} for all organizations in your enterprise, select **Enabled**.
   - To disable {% data variables.product.prodname_copilot_chat_short %} for all organizations in your enterprise, select **Disabled**.
1. Under "{% data variables.product.prodname_copilot_short %} in the CLI," click the dropdown menu and select the policy for managing the use of {% data variables.product.prodname_copilot_short %} in the terminal.
   - To allow each of your organizations to set their own policy, select **No policy**.
   - To enable {% data variables.product.prodname_copilot_short %} in the CLI for all organizations in your enterprise, select **Enabled**.
   - To disable {% data variables.product.prodname_copilot_short %} in the CLI for all organizations in your enterprise, select **Disabled**.

{% endif %}

## Next steps

{% data reusables.copilot.next-steps %}

- "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/managing-access-for-copilot-in-your-organization)": As an organization owner, learn how to manage access to {% ifversion ghec %}{% data variables.product.prodname_copilot_enterprise_short %} or{% endif %} {% data variables.product.prodname_copilot_business_short %} in your organization.
- "[AUTOTITLE](/copilot/using-github-copilot/getting-started-with-github-copilot)": You've learned how to get your first suggestion in {% data variables.product.prodname_vscode %}. These guides show you how to set up and navigate the various functions of {% data variables.product.prodname_copilot %} across all of the supported environments.
- "[AUTOTITLE](/copilot/github-copilot-chat/using-github-copilot-chat-in-your-ide)"{% ifversion ghec %} and "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)"{% endif %}: Find out how to ask {% data variables.product.prodname_copilot %} for information and assistance.
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/): See practical examples of how {% data variables.product.prodname_copilot %} can help you work.
- "[AUTOTITLE](/copilot/configuring-github-copilot)": These guides provide details on how to configure {% data variables.product.prodname_copilot %} to your personal preferences.

## Further reading

- "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-individual)"
- "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-business)"
- "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/about-github-copilot-enterprise)"{% ifversion ghec %}
- "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/managing-your-github-copilot-enterprise-subscription)"{% endif %}
