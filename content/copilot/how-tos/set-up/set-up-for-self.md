---
title: Setting up GitHub Copilot for yourself
shortTitle: Set up for self
intro: Follow these steps to start using Copilot.
permissions: Individuals
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself
  - /copilot/get-started/setting-up-github-copilot/setting-up-github-copilot-for-yourself
  - /copilot/how-tos/set-up/setting-up-github-copilot-for-yourself
contentType: how-tos
category:
  - Configure Copilot
---

## 1. Get access to {% data variables.product.prodname_copilot %}

There are a few ways that you can get access to {% data variables.product.prodname_copilot %}:

* **Use {% data variables.copilot.copilot_free_short %}**. Get a limited experience of {% data variables.product.prodname_copilot_short %} with up to 2,000 inline suggestion requests and 50 premium requests per month-no paid plan required. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/about-github-copilot-free).

* **Sign up for a paid plan**. You can subscribe to either:

  * **{% data variables.copilot.copilot_pro_short %}**, which includes a <a href="https://github.com/github-copilot/signup?ref_product=copilot&ref_type=trial&ref_style=text" target="_blank"><span>one-time 30-day free trial</span></a> and 300 monthly premium requests.
  * **{% data variables.copilot.copilot_pro_plus_short %}**, which includes 1,500 monthly premium requests and full access to all available models. [Subscribe to {% data variables.copilot.copilot_pro_plus_short %}](https://github.com/github-copilot/signup?ref_product=copilot&ref_type=purchase&ref_style=text&ref_plan=pro).

* **Use {% data variables.product.prodname_copilot_short %} through your organization or enterprise**. If you're part of an organization or enterprise with a {% data variables.product.prodname_copilot_short %} plan, you can request access at [https://github.com/settings/copilot](https://github.com/settings/copilot) under "Get {% data variables.product.prodname_copilot_short %} from an organization."

* **Verified students, teachers, or open source maintainers**. You may be eligible to use {% data variables.product.prodname_copilot_short %} for free. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-free-access-to-copilot-as-a-student-teacher-or-maintainer).

## 2. Install the {% data variables.product.prodname_copilot_short %} extension for your IDE

If you want to use {% data variables.product.prodname_copilot_short %} in your IDE, install the {% data variables.product.prodname_copilot_short %} extension for your IDE. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment).

## 3. Install the {% data variables.product.prodname_copilot_short %} extension for the command line

If you want to use {% data variables.product.prodname_copilot_short %} in the command line, install the {% data variables.product.prodname_copilot_short %} extension for the {% data variables.product.prodname_cli %}. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/installing-github-copilot-in-the-cli).

## 4. Use {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_windows_terminal %}

If you want to chat with {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_windows_terminal %}, connect {% data variables.product.prodname_copilot_short %} with Terminal Chat in {% data variables.product.prodname_windows_terminal %} Canary. See [AUTOTITLE](/copilot/quickstart?tool=windowsterminal).

## 5. Set up networking (if necessary)

If you connect through an HTTP proxy server or firewall, ensure that key URLs are added to the allowlist for the proxy server or firewall. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot).

You may also need to install a custom SSL certificate on your machine. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-network-settings-for-github-copilot#installing-custom-certificates).

## 6. Configure settings (optional)

All users can configure {% data variables.product.prodname_copilot_short %} settings in their IDE. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-your-environment).

If you have your own {% data variables.product.prodname_copilot_short %} plan (instead of using your organization or enterprise's plan), you can:

* **Install Model Context Protocol (MCP) servers** to integrate with {% data variables.copilot.copilot_chat_short %}. See [AUTOTITLE](/copilot/how-tos/context/model-context-protocol/extending-copilot-chat-with-mcp).
* **Manage policies**. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber).
* **Enable {% data variables.copilot.copilot_memory %}**, which allows {% data variables.product.prodname_copilot_short %} to generate and store useful information about your repositories. See [AUTOTITLE](/copilot/concepts/agents/copilot-memory).

## 7. Start using {% data variables.product.prodname_copilot_short %}

Start using {% data variables.product.prodname_copilot_short %} to help you write code faster and more efficiently. For all the ways you can use {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/using-github-copilot). {% data variables.product.prodname_copilot_short %} code suggestions, {% data variables.copilot.copilot_chat_dotcom_short %}, and {% data variables.copilot.copilot_chat_short %} in your IDE are a great place to start.

To learn how to best use {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/using-github-copilot/best-practices-for-using-github-copilot) and [AUTOTITLE](/copilot/using-github-copilot/copilot-chat/prompt-engineering-for-copilot-chat).
