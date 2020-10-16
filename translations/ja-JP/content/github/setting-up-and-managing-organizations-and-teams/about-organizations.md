---
title: Organizationについて
intro: Organizationは、企業やオープンソースプロジェクトが多くのプロジェクトにわたって一度にコラボレーションできる共有アカウントです。 オーナーと管理者は、Organizationのデータとプロジェクトへのメンバーのアクセスを、洗練されたセキュリティ及び管理機能で管理できます。
redirect_from:
  - /articles/about-organizations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}
### Organization と Enterprise アカウント

Enterprise アカウントは、複数の {% data variables.product.prodname_dotcom_the_website %} Organization のポリシーと支払いを集中管理するために利用できます。

enterprise アカウントに属する Organization では、支払いは enterprise アカウントのレベルで管理され、Organization のレベルでは支払い設定は利用できません。 Enterprise のオーナーは、Enterprise アカウントですべての Organization に対するポリシーを設定することも、Organization のオーナーに Organization のレベルでポリシーを設定することを許可することもできます。 Organization のオーナーは、Enterprise アカウントのレベルで Organization に強制された設定を変更することはできません。 Organization のポリシーや設定について質問がある場合は Enterprise アカウントのオーナーに問い合わせてください。

{% data reusables.gated-features.enterprise-accounts %}

{% data reusables.organizations.org-ownership-recommendation %}詳細は、「[Organization の所有権の継続性を管理する](/github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization)」を参照してください。

### Organization の利用規約とデータ保護

会社、非営利団体、グループなどは、Organization として標準の利用規約あるいは企業向け利用規約に合意できます。 詳細は「[企業向け利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」を参照してください。

{% endif %}
