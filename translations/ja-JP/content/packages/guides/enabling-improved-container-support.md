---
title: 改善されたコンテナサポートを有効化する
intro: '{% data variables.product.prodname_github_container_registry %}を使用するには、{% data variables.product.prodname_github_container_registry %}をユーザアカウントまたはOrganizationアカウントで有効化する必要があります。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
versions:
  free-pro-team: '*'
---

{% note %}

**注釈:** {% data variables.product.prodname_github_container_registry %} は現在パブリックベータであり、変更されることがあります。 ベータ期間中は、ストレージおよび帯域幅の制限はありません。 詳しい情報については「[{% data variables.product.prodname_github_container_registry %}について](/packages/getting-started-with-github-container-registry/about-github-container-registry)」を参照してください。

{% endnote %}

### 個人アカウントで{% data variables.product.prodname_github_container_registry %}を有効化する

{% data variables.product.prodname_github_container_registry %} を個人ユーザアカウントで有効化すると、ユーザアカウントが所用する {% data variables.product.prodname_github_container_registry %} にコンテナを公開できます。

Organization 内で {% data variables.product.prodname_github_container_registry %} を使用するには、Organization のオーナーが Organization のメンバーに対してこの機能を有効化する必要があります。

{% data reusables.feature-preview.feature-preview-setting  %}
2. 左側にある [Improved container support] を選択し、[**Enable**] をクリックします。 ![改善されたコンテナサポート](/assets/images/help/settings/improved-container-support.png)

### Organizationアカウントで{% data variables.product.prodname_github_container_registry %}を有効化する

Organization のオーナーまたはメンバーがコンテナイメージを {% data variables.product.prodname_github_container_registry %} に公開するには、Organization のオーナーが Organization に対してこの機能プレビューを有効化する必要があります。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. 左側にある [**Packages**] をクリックします。
5. [Improved container support] の下で、[Enable improved container support] を選択し、[**Save**] をクリックします。 ![[Enable container registry support option] と [Save] ボタン](/assets/images/help/package-registry/enable-improved-container-support-for-orgs.png)
6. Under "Container creation", choose whether you want to enable the creation of public, private, or internal container images.
    - Organization のメンバーがパブリックのコンテナイメージを作成できるようにするには、[**Public**] をクリックします。
    - Organization のメンバーに、Organization のメンバーのみが表示できるプライベートコンテナイメージの作成ができるようにするには、[**Private**] をクリックします。 プライベートコンテナイメージの可視性については、さらに細かくカスタマイズできます。 詳しい情報については、「[コンテナイメージにアクセス制御と可視性を設定する](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)」を参照してください。
    - **For {% data variables.product.prodname_ghe_cloud %} only:** To enable organization members to create internal container images that are only visible to other organization members, click **Internal**. ![Visibility options for container images published by organization members](/assets/images/help/package-registry/container-creation-org-settings.png)
