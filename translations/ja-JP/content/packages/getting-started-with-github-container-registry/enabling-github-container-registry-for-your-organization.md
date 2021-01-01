---
title: Organization で GitHub Container Registry を有効化する
intro: 'Organization では、Organization 管理者が Organization メンバーに対して、{% data variables.product.prodname_github_container_registry %} にパブリックまたはプライベートでコンテナイメージを公開することを許可できます。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

Organization のメンバーがコンテナイメージを {% data variables.product.prodname_github_container_registry %} に公開するには、Organization の管理者がパッケージの作成を有効にする必要があります。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Package creation] で、コンテナイメージ作成をパブリックで有効にするか、それともプライベートで有効にするか選択します。
    - Organization のメンバーがパブリックのコンテナイメージを作成できるようにするには、[**Public**] をクリックします。
    - Organization のメンバーに、Organization のメンバーのみが表示できるプライベートコンテナイメージの作成をできるようにするには、[**Private**] をクリックします。 プライベートコンテナイメージの可視性については、さらに細かくカスタマイズできます。 詳しい情報については、「[コンテナイメージにアクセス制御と可視性を設定する](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)」を参照してください。

    ![パブリックまたはプライベートパッケージを有効にするオプション ](/assets/images/help/package-registry/package-creation-org-settings.png)
