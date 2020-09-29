---
title: Organizationの作成
redirect_from:
  - /enterprise/admin/articles/creating-organizations/
  - /enterprise/admin/user-management/creating-organizations
intro: 新しいOrganizationをセットアップすることも、既存の個人アカウントをOrganizationに変換することもできます。
versions:
  enterprise-server: '*'
---

Organizationは、リポジトリを所有するユーザアカウントの集合体です。 Organizationは一人以上のオーナーを持ちます。オーナーは、Organizationに対する管理者権限を持ちます。 Organization は、名前空間としても使われます。たとえば `http(s)://[hostname]/[organization name]/` にアクセスすれば {% data variables.product.prodname_ghe_server %} 上の Organization のプロフィールが表示され、`http(s)://[hostname]/[organization name]/[repository name]/` にアクセスすればリポジトリのプロフィールが表示されます。

Organizationを作成した時点では、そのOrganizationに関連づけられているリポジトリはありません。 [オーナーロールをを持つOrganizationのメンバーは、新しいリポジトリの追加](/enterprise/{{ currentVersion }}/user/articles/permission-levels-for-an-organization)や、既存のリポジトリの転送をいつでも行えます。 詳細は「[リポジトリを移譲する](/enterprise/{{ currentVersion }}/user/articles/transferring-a-repository)」を参照してください。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
3. "Organizations"セクションで、**New organization（新規Organization）**をクリックしてください。 ![新規 Organization ボタン](/assets/images/help/settings/new-org-button.png)
4. [Organization name] の下で、Organization に名前を付けます。 ![新規 Organization 名](/assets/images/help/organizations/new-org-name.png)
5. "Contact email（連絡先のメール）"の下で、Organizationに関する詳しい情報のための連絡先となる人物のメールアドレスを入力してください。
6. **Create organization（Organizationの作成）**をクリックしてください。
