---
title: 新しい Organization をゼロから作成
intro: Organization を作成して、リポジトリへの細かなアクセス許可を適用します。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
redirect_from:
  - /articles/creating-a-new-organization-from-scratch
  - /admin/user-management/creating-organizations
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch
topics:
  - organizations
  - teams
---
ゼロから作成されたばかりの新しい Organization には、何のリポジトリも関連付けられていません。 自分の Organization へのリポジトリ追加に関する詳しい情報については、「[新しいリポジトリを作成する](/articles/creating-a-new-repository)」と「[リポジトリを移譲する](/articles/transferring-a-repository)」を参照してください。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
4. プロンプトに従って Organization を作成します。 {% if currentVersion == "free-pro-team@latest" %}Team で利用できるプランに関する詳しい情報については、「[{% data variables.product.prodname_dotcom %} の製品](/articles/githubs-products)」を参照してください。{% endif %}

### 参考リンク

{% if currentVersion == "free-pro-team@latest" %}
- [支払い請求先メールアドレスを設定する](/articles/setting-your-billing-email){% endif %}
- [Organization について](/articles/about-organizations)
