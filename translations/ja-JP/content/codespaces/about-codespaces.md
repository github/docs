---
title: codespace について
intro: '{% data variables.product.prodname_codespaces %} is a configurable online development environment, hosted by {% data variables.product.prodname_dotcom %} and powered by {% data variables.product.prodname_vscode %}, that allows you to develop entirely in the cloud.'
redirect_from:
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
versions:
  free-pro-team: '*'
type: overview
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### {% data variables.product.prodname_codespaces %} について

{% data variables.product.prodname_codespaces %} is a configurable cloud development environment available in your browser on {% data variables.product.prodname_dotcom %} or through {% data variables.product.prodname_vscode %}.

![codespace（オープン）](/assets/images/help/codespaces/codespace-overview.png)

A codespace includes everything developers need to develop for a specific repository, including the {% data variables.product.prodname_vscode %} editing experience and common languages, tools, and utilities. {% data variables.product.prodname_codespaces %} is completely configurable, allowing you to create a customized development environment for your project, and allowing developers to personalize their experience with extensions and dotfile settings.

Codespaces offers many benefits to teams by allowing for a consistent environment across your entire team, fast onboarding, and creating a secure space for development.

### A consistent environment

You can create a single codespace configuration that defines the environment (or _dev container_) of every new codespace that anyone creates for your repository. Once you've made a configuration, developers don’t have to worry about installing the right tools to comment, review, or contribute. A standardized environment is already available for them as soon as they create a codespace from the repository. 詳しい情報については、「[プロジェクトの {% data variables.product.prodname_codespaces %} を設定する](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)」を参照してください。

For help getting started with configurations for specific languages, see the [Getting Started](/codespaces/getting-started-with-codespaces) tutorials.

While every codespace created from your repository has a consistent development environment, developers can use {% data variables.product.prodname_codespaces %} wherever they need it – on {% data variables.product.prodname_dotcom %} or through {% data variables.product.prodname_vscode %}.

### Fast and personal onboarding

With a [dev container](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#about-dev-containers) configured in your repository, any new developer can quickly onboard with the correct development environment for your project by using the {% octicon "download" aria-label="The download icon" %} **Code** drop-down menu, and selecting **Open with Codespaces**.

![[Open with Codespaces] ボタン](/assets/images/help/codespaces/open-with-codespaces-button.png)

As a result of standardizing on a repeatable developer environment, developers can get started with a new codespace without doing any manual configuration and do not need to do continued maintenance of their developer environment. A new codespace can be created when starting a new feature.

Developers can also personalize aspects of their codespace environment by using a [dotfiles](https://dotfiles.github.io/tutorials/) repository and [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync). Personalization can include shell preferences, additional tools, editor settings, and extensions, such as Live Share. Personal customizations are stored on a per-user basis, so every codespace a developer opens has their environment ready to go. For more information, see "[Personalizing {% data variables.product.prodname_codespaces %} for your account](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)."

Because {% data variables.product.prodname_codespaces %} can be accessed in the browser, developers can work on multiple projects by switching between tabs.

### A secure environment

{% data variables.product.prodname_codespaces %} allows developers to develop in the cloud instead of locally. This creates one single, trackable, source of truth. 開発者は、タブレットや Chromebook など、あらゆるマシンでどこからでも貢献でき、知的財産のローカルコピーを保持する必要はありません。 Developers always have to be logged in and provided with access to both {% data variables.product.prodname_codespaces %} and specific repositories. These permissions can be revoked at any time. As soon as you revoke access, those developers will lose all access to protected resources. In addition, authenticated developers create audit trails so you know who is doing what. For more information on access and security, see "[Managing access and security for your organization's codespaces](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)."

Using {% data variables.product.prodname_codespaces %} is the most secure when all members of your team are using it. It means that there is no need to clone the repository onto a local machine and that developers don't need to install locally as `root`.

Developers and organization administrators can also configure settings to add encrypted secrets and enable GPG verification. For more information, see "[Managing encrypted secrets for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)", "[Managing GPG verification for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)".

### {% data variables.product.prodname_codespaces %}の支払いについて

{% data reusables.codespaces.about-billing-for-codespaces %} 詳細は「[{% data variables.product.prodname_codespaces %} の支払いについて](/github/developing-online-with-codespaces/about-billing-for-codespaces)」を参照してください。

### ベータに参加する

限られたユーザのみがベータ参加のために招待されます。 To join the waitlist, see [Sign up for the Codespaces beta](https://github.com/features/codespaces/signup).

### {% data variables.product.prodname_codespaces %} について問い合わせる

{% data variables.product.prodname_codespaces %} の使用時に問題が発生した場合は、「[codespace のトラブルシューティング](/github/developing-online-with-codespaces/troubleshooting-your-codespace)」を参照してください。

さらにサポートをご希望の場合、または {% data variables.product.prodname_codespaces %} に関するフィードバックがある場合は、[Codespaces Feedback](https://github.com/github/feedback/discussions/categories/codespaces-feedback) ディスカッションをご利用ください。
