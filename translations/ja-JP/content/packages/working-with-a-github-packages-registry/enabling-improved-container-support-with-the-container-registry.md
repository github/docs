---
title: コンテナレジストリでの改善されたコンテナサポートの有効化
intro: '{% data variables.product.prodname_container_registry %}を使うには、ユーザもしくはOrganizationアカウントで有効化しなければなりません。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/container-guides-for-github-packages/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  free-pro-team: '*'
---

{% note %}

**注釈:** {% data variables.product.prodname_container_registry %} は現在パブリックベータであり、変更されることがあります。 ベータ期間中は、ストレージおよび帯域幅の制限はありません。 詳しい情報については、「[{% data variables.product.prodname_registry %} の紹介](/packages/learn-github-packages/introduction-to-github-packages)」を参照してください。

{% endnote %}

{% data reusables.package_registry.docker-vs-container-registry %}

### 個人アカウントでの{% data variables.product.prodname_container_registry %}の有効化

個人ユーザアカウントで{% data variables.product.prodname_container_registry %}を有効化すると、自分のユーザアカウントが所有する{% data variables.product.prodname_container_registry %}にコンテナを公開できます。

Organization内で{% data variables.product.prodname_container_registry %}を使うには、Organizationのオーナーがこの機能をOrganizationのメンバーに対して有効化しなければなりません。

{% data reusables.feature-preview.feature-preview-setting  %}
2. 左側にある [Improved container support] を選択し、[**Enable**] をクリックします。 ![改善されたコンテナサポート](/assets/images/help/settings/improved-container-support.png)

### Organizationアカウントでの{% data variables.product.prodname_container_registry %}の有効化

Organizationのオーナーもしくはメンバーがコンテナイメージを{% data variables.product.prodname_container_registry %}に公開できるようにするには、Organizationのオーナーがこの機能のプレビューをOrganizationに対して有効化しなければなりません。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. 左側にある [**Packages**] をクリックします。
5. [Improved container support] の下で、[Enable improved container support] を選択し、[**Save**] をクリックします。 ![[Enable container registry support option] と [Save] ボタン](/assets/images/help/package-registry/enable-improved-container-support-for-orgs.png)
6. "Container creation（コンテナ作成）"の下で、パブリック、プライベート、インターナルのコンテナイメージの作成を有効化するかを選択してください。
    - Organizationのメンバーがパブリックなコンテナイメージを作成できるようにするには、**Public（パブリック）**を選択してください。
    - Organizationのメンバーが、他のOrganizationのメンバーにだけ見えるプライベートのコンテナイメージを作成できるようにするには、**Private（プライベート）**を選択してください。 プライベートコンテナイメージの可視性については、さらに細かくカスタマイズできます。 詳しい情報については「[パッケージのアクセス制御と可視性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」を参照してください。
    - **{% data variables.product.prodname_ghe_cloud %}のみ:** Organizationメンバーが、他のOrganizationのメンバーにだけ見えるインターナルコンテナイメージを作成できるようにするには、**Internal（インターナル）**を選択してください。 ![Organizationのメンバーが公開するコンテナイメージの可視性オプション](/assets/images/help/package-registry/container-creation-org-settings.png)
