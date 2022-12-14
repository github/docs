---
title: シークレット スキャンのカスタム パターンの定義
shortTitle: Define custom patterns
intro: '{% data variables.product.prodname_secret_scanning_GHAS %} を拡張して、既定のパターン以外のシークレットを検出できます。'
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
ms.openlocfilehash: 1c7594329dfdc2843e38c1c2eb7b70e32b89f11b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106518'
---
## {% data variables.product.prodname_secret_scanning %}のカスタムパターンについて

カスタム パターンを定義して、{% data variables.product.prodname_secret_scanning %} でサポートされている既定のパターンで検出されないシークレットを特定できます。 たとえば、Organizationの内部的なシークレットのパターンを持っていることもあるかもしれません。 サポートされているシークレットとサービス プロバイダーの詳細については、「[{% data variables.product.prodname_secret_scanning_caps %} パターン](/code-security/secret-scanning/secret-scanning-patterns)」を参照してください。

Enterprise、Organization、またはリポジトリのカスタム パターンを定義できます。 {% data variables.product.prodname_secret_scanning_caps %} では、Organization または Enterprise アカウントごとに最大 500 個のカスタム パターン、およびリポジトリごとに最大 100 個のカスタム パターンがサポートされます。

## カスタムパターンの正規表現構文

{% data variables.product.prodname_secret_scanning_GHAS %} のカスタム パターンを 1 つまたは複数の正規表現として指定できます。

- **シークレット形式:** シークレット自体の形式を記述する式。
- **シークレットの前:**  シークレットの前にある文字を記述する式。 既定では、これは `\A|[^0-9A-Za-z]` に設定されます。これは、シークレットが行の先頭にあるか、前に英数字以外の文字を付ける必要があることを意味します。
- **シークレットの後:** シークレットの後に来る文字を記述する式。 既定では、これは `\z|[^0-9A-Za-z]` に設定されます。これは、シークレットの後に新しい行または英数字以外の文字が続く必要があることを意味します。
- **追加の一致要件:** シークレット自体が一致しなければならない、または一致してはならない 1 つまたは複数の省略可能な式。

単純なトークンの場合、通常はシークレット形式のみを指定する必要があります。 他のフィールドでは柔軟性が提供されるため、複雑な正規表現を作成せずに、より複雑なシークレットを指定できます。  カスタム パターンの例については、以下の「[追加の要件を使用して指定されたカスタム パターンの例](#example-of-a-custom-pattern-specified-using-additional-requirements)」を参照してください。

{% data variables.product.prodname_secret_scanning_caps %} では [ Hyperscan ライブラリ](https://github.com/intel/hyperscan)が使用され、PCRE 構文のサブセットである Hyperscan の正規コンストラクトのみがサポートされます。 Hyperscanのオプション修飾子はサポートされません。  Hyperscan パターン コンストラクトの詳細については、Hyperscan ドキュメントの「[パターンのサポート](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)」を参照してください。

## リポジトリのカスタムパターンの定義

カスタムパターンを定義する前に、リポジトリで{% data variables.product.prodname_secret_scanning %}が有効化されていることを確認しておかなければなりません。 詳細については、「[リポジトリの {% data variables.product.prodname_secret_scanning %} の構成](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}{% ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. 新しいカスタム パターンをテストする準備ができたら、アラートを作成せずにリポジトリで一致するものを特定するために、 **[保存してドライ ラン]** をクリックします。
{% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {% endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

パターンが作成された後、{% data reusables.secret-scanning.secret-scanning-process %} {% data variables.product.prodname_secret_scanning %} アラートの表示について詳しくは、「[{% data variables.product.prodname_secret_scanning %} からのアラートの管理](/code-security/secret-security/managing-alerts-from-secret-scanning)」を参照してください。

### 追加の要件を使用して指定されたカスタム パターンの例

ある会社には、5 つの特性を持つ内部トークンがあります。 さまざまなフィールドを使用して、トークンを特定する方法を次のように指定します。

| **特徴** | **フィールドと正規表現** |
|----------------|------------------------------|
| 5 から 10 文字の長さ | シークレット形式: `[$#%@AA-Za-z0-9]{5,10}` |
| `.` で終わらない | シークレットの後: `[^\.]` |
| 数字と大文字を含む | 追加の要件: シークレットは `[A-Z]` および `[0-9]` と一致する必要がある |
| 1 行に複数の小文字を含まない | 追加の要件: シークレットは `[a-z]{2,}` と一致してはならない |
| `$%@!` のいずれかを含む | 追加の要件: シークレットは `[$%@!]` と一致する必要がある |

これらのトークンは、上記のカスタム パターンと一致します。

```
a9@AAfT!         # Secret string match: a9@AAfT
ee95GG@ZA942@aa  # Secret string match: @ZA942@a
a9@AA!ee9        # Secret string match: a9@AA
```

これらの文字列は、上記のカスタム パターンと一致しません。

```
a9@AA.!
a@AAAAA
aa9@AA!ee9
aAAAe9
```

## Organizationのカスタムパターンの定義

カスタム パターンを定義する前に、Organization 内でスキャンするリポジトリに対して {% data variables.product.prodname_secret_scanning %} を有効にしていることを確かめる必要があります。 Organization 内のすべてのリポジトリで {% data variables.product.prodname_secret_scanning %} を有効にする場合は、「[Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

{% ifversion ghes < 3.5 or ghae %} {% note %}

**注:** ドライラン機能がないため、Organization 全体に対して定義する前に、リポジトリでカスタム パターンをテストすることをお勧めします。 そうすることで、過剰な誤検知 {% data variables.product.prodname_secret_scanning %} アラートを作成しないようにすることができます。

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. 新しいカスタム パターンをテストする準備ができたら、アラートを作成せずにリポジトリの選択で一致するものを特定するために、 **[保存してドライ ラン]** をクリックします。
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

パターンが作成された後、{% data variables.product.prodname_secret_scanning %} により、すべてのブランチの Git 履歴全体を含め、Organization 内のリポジトリですべてのシークレットがスキャンされます。 Organization のオーナーとリポジトリの管理者は、シークレットが見つかるとアラートを受け、シークレットが見つかったリポジトリでアラートをレビューできます。 {% data variables.product.prodname_secret_scanning %} アラートの表示について詳しくは、「[{% data variables.product.prodname_secret_scanning %} からのアラートの管理](/code-security/secret-security/managing-alerts-from-secret-scanning)」を参照してください。

## Enterprise アカウントのカスタム パターンの定義

{% ifversion fpt or ghec or ghes %}

カスタム パターンを定義する前に、Enterprise アカウントのシークレット スキャンを必ず有効にする必要があります。 詳細については、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} の有効化]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)」を参照してください。

{% endif %}

{% note %}

{% ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %} **注:**
- エンタープライズ レベルでは、カスタム パターンの作成者のみがパターンを編集し、ドライ ランで使用できます。 
- Enterprise 所有者は、アクセスできるリポジトリ上でのみドライ ランを利用できます。また、Enterprise 所有者は、Enterprise 内のすべての Organization またはリポジトリに必ずしもアクセスできるとは限りません。
{% else %} **注:** ドライラン機能がないため、Enterprise 全体に対してカスタム パターンを定義する前に、リポジトリでテストすることをお勧めします。 そうすることで、過剰な誤検知 {% data variables.product.prodname_secret_scanning %} アラートを作成しないようにすることができます。

{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}{% ifversion security-feature-enablement-policies %} {% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. [コードのセキュリティと分析] で、 **[セキュリティ機能]** をクリックします。{% else %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-security-features %}{% endif %}
1. [シークレット スキャン カスタム パターン] で、 **[新しいパターン]** をクリックします。
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %}
1. 新しいカスタム パターンをテストする準備ができたら、アラートを作成せずに Enterprise で一致するものを特定するため、 **[保存してドライ ラン]** をクリックします。
{% data reusables.advanced-security.secret-scanning-dry-run-select-enterprise-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-36 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

パターンが作成された後、{% data variables.product.prodname_secret_scanning %}により、すべてのブランチの Git 履歴全体を含め、{% data variables.product.prodname_GH_advanced_security %} が有効になっている Enterprise の Organization 内のリポジトリですべてのシークレットがスキャンされます。 Organizationのオーナーとリポジトリの管理者は、シークレットが見つかるとアラートを受け、シークレットが見つかったリポジトリでアラートをレビューできます。 {% data variables.product.prodname_secret_scanning %} アラートの表示について詳しくは、「[{% data variables.product.prodname_secret_scanning %} からのアラートの管理](/code-security/secret-security/managing-alerts-from-secret-scanning)」を参照してください。

## カスタム パターンの編集

カスタム パターンへの変更を保存すると、以前のバージョンのパターンを使用して作成されたすべての {% data variables.product.prodname_secret_scanning %} アラートが閉じられます。
1. カスタム パターンが作成された場所に移動します。 カスタム パターンは、リポジトリ、Organization または Enterprise アカウントに作成できます。
   * リポジトリまたは Organization の場合、カスタム パターンが作成されたリポジトリまたは Organization の [セキュリティと分析] 設定を表示します。 詳細については、上記の「[リポジトリのカスタム パターンの定義](#defining-a-custom-pattern-for-a-repository)」または「[Organization のカスタム パターンの定義](#defining-a-custom-pattern-for-an-organization)」を参照してください。
   * Enterprise の場合、[ポリシー] の下にある [高度なセキュリティ] 領域を表示してから、 **[セキュリティ機能]** をクリックします。 詳細については、上記の「[Enterprise アカウントのカスタム パターンの定義](#defining-a-custom-pattern-for-an-enterprise-account)」を参照してください。
2. [{% data variables.product.prodname_secret_scanning_caps %}] で、編集するカスタム パターンの右側にある {% octicon "pencil" aria-label="The edit icon" %} をクリックします。
{%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga  %}
3. 編集したカスタム パターンをテストする準備ができたら、アラートを作成せずに一致するものを特定するため、 **[保存してドライ ラン]** をクリックします。
{%- endif %}
4. 変更をレビューしてテストしたら、 **[変更の保存]** をクリックします。

## カスタムパターンの削除

1. カスタム パターンが作成された場所に移動します。 カスタム パターンは、リポジトリ、Organization または Enterprise アカウントに作成できます。

   * リポジトリまたは Organization の場合、カスタム パターンが作成されたリポジトリまたは Organization の [セキュリティと分析] 設定を表示します。 詳細については、上記の「[リポジトリのカスタム パターンの定義](#defining-a-custom-pattern-for-a-repository)」または「[Organization のカスタム パターンの定義](#defining-a-custom-pattern-for-an-organization)」を参照してください。
   * Enterprise の場合、[ポリシー] の下にある [高度なセキュリティ] 領域を表示してから、 **[セキュリティ機能]** をクリックします。  詳細については、上記の「[Enterprise アカウントのカスタム パターンの定義](#defining-a-custom-pattern-for-an-enterprise-account)」を参照してください。
1. 削除するカスタム パターンの右側にある {% octicon "trash" aria-label="The trash icon" %} をクリックします。
1. 確認をレビューし、カスタム パターンに関連する開いているアラートを処理する方法を選択します。
1. **[はい、このパターンを削除します]** をクリックします。

   ![カスタム {% data variables.product.prodname_secret_scanning %} パターンの削除を確認する ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
