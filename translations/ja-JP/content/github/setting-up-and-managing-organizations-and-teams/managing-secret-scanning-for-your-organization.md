---
title: Organization のシークレットスキャンの管理
intro: 'Organization のどのリポジトリで {% data variables.product.product_name %} がシークレットをスキャンするかを制御することができます。'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'Organization のオーナーは、Organization のリポジトリに対する {% data variables.product.prodname_secret_scanning %} を管理できます。'
versions:
  free-pro-team: '*'
---
 
{% data reusables.secret-scanning.beta %}

### {% data variables.product.prodname_secret_scanning %} の管理について

{% data variables.product.prodname_secret_scanning_caps %} を使用すると、Organization のリポジトリでシークレットが漏洩したときにその影響を軽減することができます。 詳しい情報については、「[{% data variables.product.prodname_secret_scanning %} について](/github/administering-a-repository/about-secret-scanning)」を参照してください。

Organization の既存のリポジトリで {% data variables.product.prodname_dotcom %} がどのようにシークレットをスキャンするかを管理できます。 Organization でメンバーが作成する新規のリポジトリに対して、{% data variables.product.prodname_secret_scanning %} をデフォルトで有効または無効にすることもできます。

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% note %}

**注釈**: Organization のパブリックリポジトリについては、{% data variables.product.prodname_secret_scanning_caps %} はデフォルトで有効であり、これを無効にすることはできません。 詳しい情報については、「[パブリックリポジトリのシークレットスキャンについて](/github/administering-a-repository/about-secret-scanning#about-secret-scanning-for-public-repositories)」を参照してください。

{% endnote %}

### 既存のプライベートリポジトリに対して {% data variables.product.prodname_secret_scanning %} を有効または無効にする

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. [Secret scanning] の右側で、[**Disable all**] または [**Enable all**] をクリックします。 ![シークレットスキャンの [;Enable all] または [Disable all] ボタン](/assets/images/help/organizations/security-and-analysis-disable-or-enable-secret-scanning.png)
6. オプションで、Organization の新規のプライベートリポジトリに対して {% data variables.product.prodname_secret_scanning %} をデフォルトで有効にすることもできます。 ![新規のリポジトリの [Enable by default] オプション](/assets/images/help/organizations/security-and-analysis-secret-scanning-enable-by-default.png)
7. Organization のすべてのリポジトリに対してこの機能を無効または有効にするには、[**Disable secret scanning**] または [**Enable secret scanning**] をクリックします。 ![{% data variables.product.prodname_secret_scanning %} を無効または有効にするボタン ](/assets/images/help/organizations/security-and-analysis-enable-secret-scanning.png)

### 新規のプライベートリポジトリに対して {% data variables.product.prodname_secret_scanning %} を有効または無効にする

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. [Secret scanning] の右側で、Organization の新規のプライベートリポジトリに対してこの機能をデフォルトで有効または無効にします。 ![新規のリポジトリに対して機能を有効または無効にするチェックボックス](/assets/images/help/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox.png)
