---
title: Secret Scanningのカスタムパターンの定義
shortTitle: カスタムパターンの定義
intro: 'Organization及びプライベートリポジトリ内で{% data variables.product.prodname_secret_scanning %}のカスタムパターンを定義できます。'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  fpt: '*'
  ghes: '>=3.2'
  ghae: next
topics:
  - Repositories
---

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**ノート:** {% data variables.product.prodname_secret_scanning %}のカスタムパターンは現在ベータであり、変更されることがあります。

{% endnote %}
{% endif %}

## {% data variables.product.prodname_secret_scanning %}のカスタムパターンについて

{% data variables.product.company_short %}は、{% ifversion fpt %}パブリック及びプライベート{% endif %}リポジトリ上で{% data variables.product.company_short %}及び{% data variables.product.company_short %}パートナーが提供するシークレットのパターンの{% data variables.product.prodname_secret_scanning %}を行います。 {% data variables.product.prodname_secret_scanning %}パートナープログラムに関する詳しい情報については「<a href="/developers/overview/secret-scanning-partner-program" class="dotcom-only">Secret scanningパートナープログラム</a>」を参照してください。

ただし、{% ifversion fpt %}プライベート{% endif %}リポジトリ中で他のシークレットのパターンをスキャンしたいこともあるでしょう。 たとえば、Organizationの内部的なシークレットのパターンを持っていることもあるかもしれません。 For these situations, you can define custom {% data variables.product.prodname_secret_scanning %} patterns in your enterprise, organization, or {% ifversion fpt %}private{% endif %} repository on {% data variables.product.product_name %}. You can define up to 20 custom patterns for each {% ifversion fpt %}private{% endif %} repository, organization, or enterprise account.

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**ノート:** ベータの間、{% data variables.product.prodname_secret_scanning %}のカスタムパターンの使用には多少の制限があります。

* dry-runの機能はありません。
* 作成後にカスタムパターンを編集することはできません。 パターンを変更するには、削除してから再作成しなければなりません。
* カスタムパターンの作成、編集、削除のためのAPIはありません。 しかし、カスタムパターンに対する結果は[Secret scanningアラートAPI](/rest/reference/secret-scanning)で返されます。

{% endnote %}
{% endif %}

## カスタムパターンの正規表現構文

{% data variables.product.prodname_secret_scanning %}のカスタムパターンは、正規表現として指定されます。 {% data variables.product.prodname_secret_scanning_caps %}は[Hyperscanライブラリ](https://github.com/intel/hyperscan)を利用し、Hyperscanの正規構造のみをサポートします。これはPCRE構文のサブセットです。 Hyperscanのオプション修飾子はサポートされません。  Hyperscanのパターン構造に関する詳しい情報については、Hyperscanのドキュメンテーションの「[Pattern support](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)」を参照してください。

## リポジトリのカスタムパターンの定義

カスタムパターンを定義する前に、リポジトリで{% data variables.product.prodname_secret_scanning %}が有効化されていることを確認しておかなければなりません。 詳しい情報については「[リポジトリでの{% data variables.product.prodname_secret_scanning %}の設定](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

パターンを作成したら、{% data reusables.secret-scanning.secret-scanning-process %} {% data variables.product.prodname_secret_scanning %}アラートの表示に関する詳しい情報については「[{% data variables.product.prodname_secret_scanning %}からのアラートの管理](/code-security/secret-security/managing-alerts-from-secret-scanning)」を参照してください。

## Organizationのカスタムパターンの定義

カスタムパターンを定義する前に、Organizationの中のスキャンしたい{% ifversion fpt %}プライベート{% endif %}リポジトリで{% data variables.product.prodname_secret_scanning %}が有効化されていることを確認しなければなりません。 Organization内のすべての{% ifversion fpt %}プライベート{% endif %}リポジトリで{% data variables.product.prodname_secret_scanning %}を有効化するには、「[Organizationのセキュリティと分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

{% note %}

**Note:** As there is no dry-run functionality, we recommend that you test your custom patterns in a repository before defining them for your entire organization. That way, you can avoid creating excess false-positive {% data variables.product.prodname_secret_scanning %} alerts.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

パターンを作成すると、{% data variables.product.prodname_secret_scanning %}はすべてのブランチのGit履歴全体を含めて、Organization内の{% ifversion fpt %}プライベート{% endif %}リポジトリでシークレットをスキャンします。 Organizationのオーナーとリポジトリの管理者は、シークレットが見つかるとアラートを受け、シークレットが見つかったリポジトリでアラートをレビューできます。 {% data variables.product.prodname_secret_scanning %}アラートの表示に関する詳しい情報については「[{% data variables.product.prodname_secret_scanning %}空のアラートの管理](/code-security/secret-security/managing-alerts-from-secret-scanning)」を参照してください。

## Defining a custom pattern for an enterprise account

Before defining a custom pattern, you must ensure that you enable secret scanning for your enterprise account. For more information, see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)."

{% note %}

**Note:** As there is no dry-run functionality, we recommend that you test your custom patterns in a repository before defining them for your entire enterprise. That way, you can avoid creating excess false-positive {% data variables.product.prodname_secret_scanning %} alerts.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-security-features %}
1. Under "Secret scanning custom patterns", click {% ifversion fpt or ghes > 3.2 or ghae-next %}**New pattern**{% elsif ghes = 3.2 %}**New custom pattern**{% endif %}.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in {% ifversion fpt %}private{% endif %} repositories within your enterprise's organizations with {% data variables.product.prodname_GH_advanced_security %} enabled, including their entire Git history on all branches. Organizationのオーナーとリポジトリの管理者は、シークレットが見つかるとアラートを受け、シークレットが見つかったリポジトリでアラートをレビューできます。 {% data variables.product.prodname_secret_scanning %}アラートの表示に関する詳しい情報については「[{% data variables.product.prodname_secret_scanning %}空のアラートの管理](/code-security/secret-security/managing-alerts-from-secret-scanning)」を参照してください。

{% ifversion fpt or ghes > 3.2 %}
## Editing a custom pattern

When you save a change to a custom pattern, this closes all the {% data variables.product.prodname_secret_scanning %} alerts that were created using the previous version of the pattern.
1. Navigate to where the custom pattern was created. A custom pattern can be created in a repository, organization, or enterprise account.
   * For a repository or organization, display the "Security & analysis" settings for the repository or organization where the custom pattern was created. 詳しい情報については上の「[リポジトリのカスタムパターンの定義](#defining-a-custom-pattern-for-a-repository)」あるいは「[Organizationのカスタムパターンの定義](#defining-a-custom-pattern-for-an-organization)」を参照してください。
   * For an enterprise, under "Policies" display the "Advanced Security" area, and then click **Security features**. For more information, see "[Defining a custom pattern for an enterprise account](#defining-a-custom-pattern-for-an-enterprise-account)" above.
2. Under "{% data variables.product.prodname_secret_scanning_caps %}", to the right of the custom pattern you want to edit, click {% octicon "pencil" aria-label="The edit icon" %}.
3. When you have reviewed and tested your changes, click **Save changes**.
{% endif %}

## カスタムパターンの削除

1. Navigate to where the custom pattern was created. A custom pattern can be created in a repository, organization, or enterprise account.

   * For a repository or organization, display the "Security & analysis" settings for the repository or organization where the custom pattern was created. 詳しい情報については上の「[リポジトリのカスタムパターンの定義](#defining-a-custom-pattern-for-a-repository)」あるいは「[Organizationのカスタムパターンの定義](#defining-a-custom-pattern-for-an-organization)」を参照してください。
   * For an enterprise, under "Policies" display the "Advanced Security" area, and then click **Security features**.  For more information, see "[Defining a custom pattern for an enterprise account](#defining-a-custom-pattern-for-an-enterprise-account)" above.
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
1. To the right of the custom pattern you want to remove, click {% octicon "trash" aria-label="The trash icon" %}.
1. Review the confirmation, and select a method for dealing with any open alerts relating to the custom pattern.
1. Click **Yes, delete this pattern**.

   ![Confirming deletion of a custom {% data variables.product.prodname_secret_scanning %} pattern ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
{%- elsif ghes = 3.2 %}
1. To the right of the custom pattern you want to remove, click **Remove**.
1. Review the confirmation, and click **Remove custom pattern**.
{%- endif %}
