---
title: リポジトリのシークレット スキャンの構成
intro: '高度なセキュリティ パターンに一致するシークレットを探すためにリポジトリをスキャンする方法を {% data variables.product.prodname_dotcom %} で構成することができます。'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning_GHAS %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
  - /code-security/secret-security/configuring-secret-scanning-for-your-repositories
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
shortTitle: Configure secret scans
ms.openlocfilehash: 7739cca195f46043945f39f48aad8bf88aa97fed
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192938'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## {% data variables.product.prodname_secret_scanning_GHAS %}の有効化

{% data variables.product.prodname_secret_scanning_GHAS %}は、組織が所有する任意のリポジトリで有効化できます。 有効にすると、{% data reusables.secret-scanning.secret-scanning-process %} {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}

{% note %}

**注:** Issue の説明とコメントの {% data variables.product.prodname_secret_scanning_caps %} はパブリック ベータ版であり、変更される可能性があります。

{% endnote %} {% endif %}

{% ifversion secret-scanning-enterprise-level %} {% note %}

**注:** 組織がエンタープライズ アカウントの所有になっている場合、エンタープライズ所有者はエンタープライズ レベルで {% data variables.product.prodname_secret_scanning %} を有効にすることもできます。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. {% data variables.product.prodname_advanced_security %} がまだリポジトリで有効化されていなければ、[{% data variables.product.prodname_GH_advanced_security %}] の右側で **[有効化]** をクリックしてください。
   {% ifversion fpt or ghec %}![リポジトリで {% data variables.product.prodname_GH_advanced_security %} を有効にする](/assets/images/help/repository/enable-ghas-dotcom.png) {% elsif ghes or ghae %}![リポジトリで {% data variables.product.prodname_GH_advanced_security %} を有効にする](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
2. {% data variables.product.prodname_advanced_security %}の有効化の影響をレビューしてから、 **[このリポジトリで {% data variables.product.prodname_GH_advanced_security %} を有効化]** をクリックしてください。
3. {% data variables.product.prodname_advanced_security %}を有効化すると、Organizationの設定によってはリポジトリで{% data variables.product.prodname_secret_scanning %}が自動的に有効化されることがあります。 "{% data variables.product.prodname_secret_scanning_caps %}" が **[有効]** ボタンと共に表示されている場合でも、 **[有効]** をクリックして{% data variables.product.prodname_secret_scanning %}を有効にする必要があります。 **[無効]** ボタンが表示された場合、{% data variables.product.prodname_secret_scanning %}は既に有効になっています。 
   ![リポジトリで {% data variables.product.prodname_secret_scanning %}を有効にする](/assets/images/help/repository/enable-secret-scanning-dotcom.png) {% ifversion secret-scanning-push-protection %}
1. 必要に応じて、プッシュ保護を有効にする場合は、[プッシュ保護] の右側にある **[有効]** をクリックします。 {% data reusables.secret-scanning.push-protection-overview %} 詳細については、「[ {% data variables.product.prodname_secret_scanning %}を使用したプッシュの保護](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。
   ![リポジトリのプッシュ保護を有効にする](/assets/images/help/repository/secret-scanning-enable-push-protection.png) {% endif %} {% ifversion ghae %}
1. {% data variables.product.prodname_secret_scanning %} を有効化する前に、まず {% data variables.product.prodname_GH_advanced_security %} を有効化する必要があります。 [{% data variables.product.prodname_GH_advanced_security %}] の右側にある **[有効]** をクリックします。
   ![リポジトリで {% data variables.product.prodname_GH_advanced_security %} を有効化する](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. **[このリポジトリで {% data variables.product.prodname_GH_advanced_security %} を有効化する]** をクリックしてアクションを確認します。
   ![リポジトリで {% data variables.product.prodname_GH_advanced_security %} の有効化を確認する](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. [{% data variables.product.prodname_secret_scanning_caps %}] の横にある **[有効]** をクリックします。
   ![リポジトリで {% data variables.product.prodname_secret_scanning %}を有効化する](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png) {% endif %}

## {% data variables.product.prodname_secret_scanning_GHAS %}からディレクトリを除外する

*secret_scanning.yml* ファイルを使用して、{% data variables.product.prodname_secret_scanning %}からディレクトリを除外できます。 たとえば、テストまたはランダムに生成されたコンテンツを含むディレクトリを除外できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. ファイル名フィールドに「 *.github/secret_scanning.yml*」と入力します。
4. **[新しいファイルの編集]** で、`paths-ignore:` と入力してから、{% data variables.product.prodname_secret_scanning %}から除外するパスを入力します。
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```
    
    `*` などの特殊文字を使用して、パスをフィルター処理することができます。 フィルター パターンの詳細については、「[GitHub Actions のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

    {% note %}
    
    **注:**
    - `paths-ignore` に 1,000 を超えるエントリがある場合、{% data variables.product.prodname_secret_scanning %}では、最初の 1,000 個のディレクトリのみがスキャンから除外されます。
    - *secret_scanning.yml* が 1 MB を超える場合、{% data variables.product.prodname_secret_scanning %}ではファイル全体を無視します。
    
    {% endnote %}

{% data variables.product.prodname_secret_scanning %} からの個々のアラートを無視することもできます。 詳細については、「[{% data variables.product.prodname_secret_scanning %}からのアラートの管理](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts)」を参照してください。

## 参考資料

- [Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)
- 「[{% data variables.product.prodname_secret_scanning %} のカスタム パターンの定義](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)」
