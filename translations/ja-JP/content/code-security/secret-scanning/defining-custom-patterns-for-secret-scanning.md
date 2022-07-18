---
title: Secret Scanningのカスタムパターンの定義
shortTitle: カスタムパターンの定義
intro: '{% data variables.product.prodname_secret_scanning_GHAS %}を拡張して、デフォルトのパターン以上のシークレットを検出させることができます。'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Secret scanning
---

{% ifversion ghes < 3.3 %}
{% note %}

**ノート:** {% data variables.product.prodname_secret_scanning %}のカスタムパターンは現在ベータであり、変更されることがあります。

{% endnote %}
{% endif %}

## {% data variables.product.prodname_secret_scanning %}のカスタムパターンについて

{% data variables.product.prodname_secret_scanning %}がサポートするデフォルトのパターンでは検出されないシークレットを特定するために、カスタムパターンを定義できます。 たとえば、Organizationの内部的なシークレットのパターンを持っていることもあるかもしれません。 サポートされているシークレットとサービスプロバイダーの詳細については「[{% data variables.product.prodname_secret_scanning_caps %}パターン](/code-security/secret-scanning/secret-scanning-patterns)」を参照してください。

カスタムパターンは、Enterprise、Organization、リポジトリで定義できます。 {% data variables.product.prodname_secret_scanning_caps %}は最大で
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-7297 %}各OrganizationもしくはEnterpriseアカウントに対して500のカスタムパターンを、そしてリポジトリごとに最大100のカスタムパターンをサポートします。
{%- elsif ghes = 3.2 %}各OrganizationもしくはEnterpriseアカウントに対して、そしてリポジトリごとに20のカスタムパターンをサポートします。
{%- else %}各OrganizationもしくはEnterpriseアカウントに対して100のカスタムパターンを、そしてリポジトリごとに20のカスタムパターンをサポートします。
{%- endif %}

{% ifversion ghes < 3.3 %}
{% note %}

**ノート:** ベータの間、{% data variables.product.prodname_secret_scanning %}のカスタムパターンの使用には多少の制限があります。

* dry-runの機能はありません。
* 作成後にカスタムパターンを編集することはできません。 パターンを変更するには、削除してから再作成しなければなりません。
* カスタムパターンの作成、編集、削除のためのAPIはありません。 しかし、カスタムパターンに対する結果は[Secret scanningアラートAPI](/rest/reference/secret-scanning)で返されます。

{% endnote %}
{% endif %}

## カスタムパターンの正規表現構文

{% data variables.product.prodname_secret_scanning_GHAS %}のカスタムパターンは、1つ以上の正規表現として指定できます。

- **シークレットフォーマット:** シークレット自体のフォーマットを記述する式。
- **シークレットの前:** シークレットの前に来る文字列を記述する式。 デフォルトでは`\A|[^0-9A-Za-z]`に設定されており、これはシークレットは行頭にあるか、非英数字が先行していなければならないということです。
- **シークレットの後:** シークレットの後に来る文字列を記述する式。 デフォルトでは`\z|[^0-9A-Za-z]`に設定されており、これはシークレットの後は改行か、非英数字が続かなければならないということです。
- **追加のマッチ要件:** シークレット自体がマッチしなければならない、あるいはマッチしてはならない1つ以上のオプションの式。

シンプルなトークンの場合、通常はシークレットフォーマットだけを指定すればすみます。 他のフィールドは、複雑な正規表現を作成することなくもっと複雑なシークレットを指定できるよう、柔軟性を提供します。  カスタムパターンの例については下記の「[追加要件を使って指定されるカスタムパターンの例](#example-of-a-custom-pattern-specified-using-additional-requirements)」を参照してください。

{% data variables.product.prodname_secret_scanning_caps %}は[Hyperscanライブラリ](https://github.com/intel/hyperscan)を利用し、Hyperscanの正規構造のみをサポートします。これはPCRE構文のサブセットです。 Hyperscanのオプション修飾子はサポートされません。  Hyperscanのパターン構造に関する詳しい情報については、Hyperscanのドキュメンテーションの「[Pattern support](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)」を参照してください。

## リポジトリのカスタムパターンの定義

カスタムパターンを定義する前に、リポジトリで{% data variables.product.prodname_secret_scanning %}が有効化されていることを確認しておかなければなりません。 詳しい情報については「[リポジトリでの{% data variables.product.prodname_secret_scanning %}の設定](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}{% ifversion secret-scanning-custom-enterprise-35 %}
1. 新しいカスタムパターンをテストする準備ができたら、アラートを作成することなくリポジトリ内のマッチを特定するために、**Save and dry run（保存してdry run）**をクリックしてください。
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% endif %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

パターンを作成したら、{% data reusables.secret-scanning.secret-scanning-process %} {% data variables.product.prodname_secret_scanning %}アラートの表示に関する詳しい情報については「[{% data variables.product.prodname_secret_scanning %}からのアラートの管理](/code-security/secret-security/managing-alerts-from-secret-scanning)」を参照してください。

### 追加要件を使って指定されるカスタムパターンの例

ある企業は、5文字の内部トークンを持っています。 その企業では、以下のようなトークンの特定方法を指定するため、様々なフィールドを使います。

| **特徴**             | **フィールドと正規表現**                            |
| ------------------ | ----------------------------------------- |
| 長さが5から10文字         | シークレットフォーマット: `[$#%@AA-Za-z0-9]{5,10}`    |
| `.`で終わらない          | シークレットの後: `[^\.]`                        |
| 数字と大文字を含む          | 追加要件: シークレットは`[A-Z]`と`[0-9]`にマッチしなければならない |
| 1行に複数の小文字を含んではならない | 追加要件: シークレットは`[a-z]{2,}`にマッチしてはならない       |
| `$%@!`のいずれかを含む     | 追加要件: シークレットは`[$%@!]`にマッチしなければならない        |

以下のトークンは、上記のカスタムパターンにマッチします。

```
a9@AAfT!         # マッチするシークレット文字列: a9@AAfT
ee95GG@ZA942@aa  # マッチするシークレット文字列: @ZA942@a
a9@AA!ee9        # マッチするシークレット文字列: a9@AA
```

以下の文字列は、上記のカスタムパターンにマッチしません。

```
a9@AA.!
a@AAAAA
aa9@AA!ee9
aAAAe9
```

## Organizationのカスタムパターンの定義

カスタムパターンを定義する前に、Organizationの中のスキャンしたいリポジトリで{% data variables.product.prodname_secret_scanning %}が有効化されていることを確認しなければなりません。 Organization内のすべてのリポジトリで{% data variables.product.prodname_secret_scanning %}を有効化するには、「[Organizationのセキュリティと分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

{% ifversion ghes < 3.5 or ghae %}
{% note %}

**ノート:** dry-runの機能は無いので、カスタムパターンをOrganization全体で定義する前に、1つのリポジトリ内でテストすることをおすすめします。 そうすれば、過剰な偽陽性の{% data variables.product.prodname_secret_scanning %}アラートを発生させることを防げます。

{% endnote %}
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
{%- ifversion secret-scanning-custom-enterprise-35 %}
1. 新しいカスタムパターンをテストする準備ができたら、アラートを作成することなく選択したリポジトリ内のマッチを特定するために、**Save and dry run（保存してdry run）**をクリックしてください。
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{%- endif %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

パターンを作成すると、{% data variables.product.prodname_secret_scanning %}はすべてのブランチのGit履歴全体を含めて、Organization内のリポジトリでシークレットをスキャンします。 Organizationのオーナーとリポジトリの管理者は、シークレットが見つかるとアラートを受け、シークレットが見つかったリポジトリでアラートをレビューできます。 {% data variables.product.prodname_secret_scanning %}アラートの表示に関する詳しい情報については「[{% data variables.product.prodname_secret_scanning %}空のアラートの管理](/code-security/secret-security/managing-alerts-from-secret-scanning)」を参照してください。

## Enterpriseアカウントでのカスタムパターンの定義

{% ifversion fpt or ghec or ghes %}

カスタムパターンを定義する前に、Enterpriseアカウントでシークレットスキャンニングを有効化しておかなければなりません。 詳しい情報については「[Enterpriseでの{% data variables.product.prodname_GH_advanced_security %}の有効化]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)」を参照してください。

{% endif %}

{% note %}

{% ifversion secret-scanning-custom-enterprise-36 %}
**ノート:**
- Enterpriseレベルでは、カスタムパターンを編集でき、dry runで使えるのはカスタムパターンの作者だけです。
- Enterpriseオーナーは、アクセスできるリポジトリ上でのみdry runを利用できますが、必ずしもEnterprise内のすべてのOrganizationやリポジトリにアクセスできるわけではありません。
{% else %}
**ノート:** dry-runの機能は無いので、カスタムパターンをEnterprise全体で定義する前に、1つのリポジトリ内でテストすることをおすすめします。 そうすれば、過剰な偽陽性の{% data variables.product.prodname_secret_scanning %}アラートを発生させることを防げます。

{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-security-features %}
1. "Secret scanning custom patterns（シークレットスキャンニングのカスタムパターン）"の下で、{% ifversion ghes = 3.2 %}**New custom pattern（新規カスタムパターン）**{% else %}**New pattern（新規パターン）**{% endif %}をクリックしてください。
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
{%- ifversion secret-scanning-custom-enterprise-36 %}
1. 新しいカスタムパターンをテストする準備ができたら、アラートを作成することなくEnterprise内のマッチを特定するために、**Save and dry run（保存してdry run）**をクリックしてください。
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{%- endif %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

パターンを作成すると、{% data variables.product.prodname_secret_scanning %}はすべてのブランチのGit履歴全体を含めて、{% data variables.product.prodname_GH_advanced_security %}が有効化されたEnterpriseのOrganization内のリポジトリでシークレットをスキャンします。 Organizationのオーナーとリポジトリの管理者は、シークレットが見つかるとアラートを受け、シークレットが見つかったリポジトリでアラートをレビューできます。 {% data variables.product.prodname_secret_scanning %}アラートの表示に関する詳しい情報については「[{% data variables.product.prodname_secret_scanning %}空のアラートの管理](/code-security/secret-security/managing-alerts-from-secret-scanning)」を参照してください。

{% ifversion fpt or ghes > 3.2 or ghec or ghae %}
## カスタムパターンの編集

カスタムパターンに変更を保存すると、パターンの以前のバージョンを使って作成されたすべての{% data variables.product.prodname_secret_scanning %}アラートはクローズされます。
1. カスタムパターンが作成された場所にアクセスしてください。 カスタムパターンは、リポジトリ、Organization、Enterpriseアカウントで作成できます。
   * リポジトリあるいはOrganizationの場合は、カスタムパターンが作成されたリポジトリもしくはOrganizationの"Security & analysis（セキュリティと分析）" 設定を表示させてください。 詳しい情報については上の「[リポジトリのカスタムパターンの定義](#defining-a-custom-pattern-for-a-repository)」あるいは「[Organizationのカスタムパターンの定義](#defining-a-custom-pattern-for-an-organization)」を参照してください。
   * Enterpriseの場合は、"Policies（ポリシー）"の下で"Advanced Security（高度なセキュリティ）"を表示させ、**Security features（セキュリティの機能）**をクリックしてください。 詳しい情報については、上記の「[Enterpriseアカウントでのカスタムパターンの定義](#defining-a-custom-pattern-for-an-enterprise-account)」を参照してください。
2. "{% data variables.product.prodname_secret_scanning_caps %}"の下で、編集したいカスタムパターンの右の{% octicon "pencil" aria-label="The edit icon" %}をクリックしてください。
{%- ifversion secret-scanning-custom-enterprise-36 %}
3. 編集された新しいカスタムパターンをテストする準備ができたら、アラートを作成することなくマッチを特定するために、**Save and dry run（保存してdry run）**をクリックしてください。
{%- endif %}
4. 変更をレビューしてテストしたら、**Save changes（変更を保存）**をクリックしてください。
{% endif %}

## カスタムパターンの削除

1. カスタムパターンが作成された場所にアクセスしてください。 カスタムパターンは、リポジトリ、Organization、Enterpriseアカウントで作成できます。

   * リポジトリあるいはOrganizationの場合は、カスタムパターンが作成されたリポジトリもしくはOrganizationの"Security & analysis（セキュリティと分析）" 設定を表示させてください。 詳しい情報については上の「[リポジトリのカスタムパターンの定義](#defining-a-custom-pattern-for-a-repository)」あるいは「[Organizationのカスタムパターンの定義](#defining-a-custom-pattern-for-an-organization)」を参照してください。
   * Enterpriseの場合は、"Policies（ポリシー）"の下で"Advanced Security（高度なセキュリティ）"を表示させ、**Security features（セキュリティの機能）**をクリックしてください。  詳しい情報については、上記の「[Enterpriseアカウントでのカスタムパターンの定義](#defining-a-custom-pattern-for-an-enterprise-account)」を参照してください。
{%- ifversion fpt or ghes > 3.2 or ghae %}
1. 削除したいカスタムパターンの右で{% octicon "trash" aria-label="The trash icon" %}をクリックしてください。
1. 確認したら、そのカスタムパターンに関連するオープンなアラートを処理方法を選択してください。
1. **Yes, delete this pattern（はい、このパターンを削除してください）**をクリックしてください。

   ![カスタムの{% data variables.product.prodname_secret_scanning %}パターンの削除の確認 ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
{%- elsif ghes = 3.2 %}
1. 削除したいカスタムパターンの右で**Remove（削除）**をクリックしてください。
1. 確認したら**Remove custom pattern（カスタムパターンの削除）**をクリックしてください。
{%- endif %}
