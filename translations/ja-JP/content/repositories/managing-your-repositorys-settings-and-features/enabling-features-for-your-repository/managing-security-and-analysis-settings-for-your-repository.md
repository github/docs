---
title: リポジトリのセキュリティと分析設定を管理する
intro: '{% data variables.product.prodname_dotcom %} 上のプロジェクトのコードをセキュリティ保護し分析する機能を管理できます。'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Security & analysis
ms.openlocfilehash: 4373c92b6b4e12f56bb26869090955824662b841
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109659'
---
{% ifversion fpt or ghec %}
## パブリックリポジトリのセキュリティおよび分析機能を有効または無効にする

パブリックリポジトリのセキュリティおよび分析機能の、サブセットを管理できます。 依存関係グラフやシークレットスキャニングなど、その他の機能は常時有効になっています。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. [コードのセキュリティと分析] の下で、機能の右にある **[無効]** または **[有効]** をクリックします。
  ![パブリック リポジトリの [セキュリティと分析の構成] 機能の [有効] または [無効] ボタン](/assets/images/help/repository/security-and-analysis-disable-or-enable-public.png) {% endif %}

## {% ifversion fpt or ghec %} プライベートリポジトリの{% endif %} セキュリティおよび分析機能を有効または無効にする

{% ifversion fpt or ghec %} プライベートおよび内部 {% endif %} リポジトリのセキュリティ機能と分析機能を管理できます。{% ifversion ghes or ghec %} 組織が {% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ企業に所属している場合は、追加のオプションを使用できます。 {% data reusables.advanced-security.more-info-ghas %}{% elsif fpt %}{% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_advanced_security %} を使用する組織であれば、追加のオプションを使用できます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories)を参照してください。
{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% ifversion fpt or ghes or ghec %}
4. [コードのセキュリティと分析] の下で、機能の右にある **[無効]** または **[有効]** をクリックします。 {% ifversion not fpt %}"{% data variables.product.prodname_GH_advanced_security %}" のコントロールは、Enterprise に {% data variables.product.prodname_advanced_security %} の使用可能なライセンスがない場合は無効になります。{% endif %}{% ifversion fpt %} ![[セキュリティと分析の構成] 機能の [有効] または [無効] ボタンのスクリーンショット](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png) {% elsif ghec %} ![[セキュリティと分析の構成] 機能の [有効] または [無効] ボタンのスクリーンショット](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available-->
  ![[セキュリティと分析の構成] 機能の [有効] または [無効] ボタンのスクリーンショット](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}
  
  {% ifversion not fpt %} {% note %}

  **注:** {% data variables.product.prodname_GH_advanced_security %} を無効にした場合、{% ifversion ghec %} 依存関係レビュー、{% endif %}{% data variables.product.prodname_secret_scanning %}、および {% data variables.product.prodname_code_scanning %} が無効になります。 あらゆるワークフロー、SARIF のアップロード、{% data variables.product.prodname_code_scanning %} への API の呼び出しが失敗することになります。
  {% endnote %}{% endif %}

  {% endif %}

  {% ifversion ghae %}
4. [コードのセキュリティと分析] の下で、機能の右にある **[無効]** または **[有効]** をクリックします。 「{% data variables.product.prodname_secret_scanning %}」をリポジトリに対して有効化する前に、{% data variables.product.prodname_GH_advanced_security %} を有効化する必要があります。
   ![リポジトリに対して {% data variables.product.prodname_GH_advanced_security %} または {% data variables.product.prodname_secret_scanning %} を有効化または無効化する](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png) {% endif %}

## セキュリティ アラートへのアクセス権の付与

リポジトリのセキュリティ アラートは、リポジトリへの管理者アクセス権を持つユーザー、および組織所有のリポジトリである場合は組織の所有者に表示されます。 追加の Team とユーザーにアラートへのアクセスを付与することができます。

{% note %}

Organizationのオーナーとリポジトリ管理者は、リポジトリへの書き込みアクセスを持つユーザまたは Team に対して、{% data variables.product.prodname_secret_scanning %} アラートなどのセキュリティアラートを表示する権限のみを付与できます。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. [Access to alerts] の検索フィールドで、検索するユーザまたは Team 名の入力を開始し、リストから一致する名前をクリックします。
   {% ifversion fpt or ghec or ghes %} ![ユーザーまたはチームにセキュリティ アラートへのアクセスを許可するための検索フィールド](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png) {% endif %}
   
   {% ifversion ghae %} ![ユーザーまたはチームにセキュリティ アラートへのアクセスを許可するための検索フィールド](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png) {% endif %}
   
5. **[変更を保存]** をクリックします。
   {% ifversion fpt or ghes or ghec %} ![セキュリティ アラート設定への変更の [変更を保存] ボタン](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png) {% endif %}
   
   {% ifversion ghae %} ![セキュリティ アラート設定への変更の [変更を保存] ボタン](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png) {% endif %}

## セキュリティアラートへのアクセスを削除する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. [アラートへのアクセス] で、アクセスを削除するユーザーまたは Team の右側にある {% octicon "x" aria-label="X symbol" %} をクリックします。
   {% ifversion fpt or ghec or ghes %}  
   ![リポジトリのセキュリティ アラートへの他のユーザーのアクセス権を削除する [x] ボタン](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png) {% endif %}
   
   {% ifversion ghae %} ![リポジトリのセキュリティ アラートへの他のユーザーのアクセス権を削除する [x] ボタン](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png) {% endif %}
  5. **[変更を保存]** をクリックします。

## 参考資料

- 「[リポジトリの保護](/code-security/getting-started/securing-your-repository)」
- [Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)
