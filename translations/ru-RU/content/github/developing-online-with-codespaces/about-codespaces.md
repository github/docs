---
title: About Codespaces
intro: '{% data variables.product.prodname_codespaces %} is an online development environment, hosted by {% data variables.product.prodname_dotcom %} and powered by {% data variables.product.prodname_vscode %}, that allows you to develop entirely in the cloud.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/about-github-codespaces
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% note %}

**Note:** {% data variables.product.prodname_codespaces %} is currently in limited public beta and subject to change. During the beta period, {% data variables.product.prodname_dotcom %} does not make any guarantees about the availability of {% data variables.product.prodname_codespaces %}. For more information about joining the beta, see "[Joining the beta](/github/developing-online-with-codespaces/about-codespaces#joining-the-beta)."

{% endnote %}

### About {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} is a cloud development environment available in your browser. A codespace includes everything you need to develop for a specific repository, including a text editor with syntax highlighting and autocomplete, a terminal, debugging tools, and Git commands, all within {% data variables.product.prodname_dotcom %}. You can also install {% data variables.product.prodname_vscode %} extensions in your codespace to add more functionality.

{% data variables.product.prodname_codespaces %} makes it easier for developers to onboard to a new company or start contributing to an open-source project. Project maintainers can configure a repository so that, when you create a codespace for the repository, the project's dependencies are included automatically. You can start coding faster by reducing time spent configuring your environment.

{% data variables.product.prodname_codespaces %} allows you to develop in the cloud instead of locally. Developers can contribute from anywhere, on any machine, including tablets or Chromebooks, and there is no need to maintain local copies of intellectual property.

![An open codespace](/assets/images/help/codespaces/codespace-overview.png)

### Using {% data variables.product.prodname_codespaces %}

Each developer can create one or more codespace for any public repository, or for any private repository owned by their user account. {% data reusables.codespaces.unsupported-repos %} {% data reusables.codespaces.codespaces-are-personal %}

{% data reusables.codespaces.codespaces-are-per-branch %} {% data reusables.codespaces.concurrent-codespace-limit %} For more information, see "[Deleting a codespace](/github/developing-online-with-codespaces/deleting-a-codespace)."

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.about-configuration %} For more information, see "[Configuring {% data variables.product.prodname_codespaces %} for your project](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)."

{% data reusables.codespaces.about-personalization %} For more information, see "[Personalizing {% data variables.product.prodname_codespaces %} for your account](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)."

You can configure settings to add encrypted secrets, enable GPG verification, and allow codespaces to access other repositories. For more information, see "[Managing encrypted secrets for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)", "[Managing GPG verification for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)", and "[Managing access and security for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)."

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.beta-functionality-limited %}

### About billing for {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.about-billing-for-codespaces %} For more information, see "[About billing for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-billing-for-codespaces)."

### Joining the beta

A limited number of people will be invited to join the beta. To join the waitlist, see [Sign up for Codespaces beta](https://github.com/features/codespaces/signup).

### Contacting us about {% data variables.product.prodname_codespaces %}

If you encounter problems using {% data variables.product.prodname_codespaces %}, see "[Troubleshooting your codespace](/github/developing-online-with-codespaces/troubleshooting-your-codespace)."

If you still need help or have feedback about {% data variables.product.prodname_codespaces %}, use the [Codespaces Feedback](https://github.com/github/feedback/discussions/categories/codespaces-feedback) discussion.
