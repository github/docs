---
title: リポジトリへのセキュリティ ポリシーの追加
intro: セキュリティポリシーをリポジトリに追加することによって、プロジェクト内のセキュリティ脆弱性を報告する方法の手順を示すことができます。
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Security policies
  - Vulnerabilities
  - Repositories
  - Health
shortTitle: Add a security policy
ms.openlocfilehash: ef4a256c06b9149bd9db8d7afdce974dd1d29f0d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159270'
---
## セキュリティポリシーについて

プロジェクトのセキュリティ脆弱性を報告する手順をユーザーに示すには、{% ifversion fpt or ghes or ghec %} _SECURITY.md_ ファイルを、リポジトリのルート、`docs` フォルダー、または `.github` フォルダーに追加します。{% else %}_SECURITY.md_ ファイルを、リポジトリのルート、または `docs` フォルダーに追加します。{% endif %} だれかがリポジトリに Issue を作成すると、プロジェクトのセキュリティ ポリシーへのリンクが表示されます。

{% ifversion not ghae %}
<!-- no public repos in GHAE -->
所属する Organization または個人アカウントにデフォルトのセキュリティ ポリシーを作成できます。 詳細については、「[既定のコミュニティ正常性ファイルの作成](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。
{% endif %}

{% tip %}

**ヒント:** セキュリティ ポリシーを検索しやすくするには、README ファイルなど、リポジトリ内の他の場所から _SECURITY.md_ にリンクします。 詳細については、「[README について](/articles/about-readmes)」を参照してください。

{% endtip %}

{% ifversion fpt or ghec %} プロジェクトのセキュリティの脆弱性が報告された後は、{% data variables.product.prodname_security_advisories %} を使用して、脆弱性に関する情報を開示、修正、公開できます。 {% data variables.product.prodname_dotcom %} での脆弱性の報告と開示のプロセスに関する詳細については、「[セキュリティ脆弱性の調整された開示について](/code-security/security-advisories/guidance-on-reporting-and-writing/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)」を参照してください。 リポジトリ セキュリティ アドバイザリの詳細については、「[リポジトリ セキュリティ アドバイザリについて](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。

{% data reusables.repositories.github-security-lab %} {% endif %} {% ifversion ghes or ghae %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
セキュリティの報告の指示を明確に利用できる要することで、ユーザがあなたの好むコミュニケーションチャンネルを使ってリポジトリで見つけたセキュリティ脆弱性を報告することを容易にできます。
{% endif %}

## リポジトリへのセキュリティ ポリシーの追加

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
3. 左側のサイドバーで、 **[セキュリティ ポリシー]** をクリックします。
  ![[セキュリティ ポリシー] タブ](/assets/images/help/security/security-policy-tab.png)
4. **[Start setup] (セットアップの開始)** をクリックします。
  ![[セットアップの開始] ボタン](/assets/images/help/security/start-setup-security-policy-button.png)
5. 新しい _SECURITY.md_ ファイルに、サポートされているバージョンのプロジェクトに関する情報と、脆弱性を報告する方法を追加します。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## 参考資料

- 「[リポジトリの保護](/code-security/getting-started/securing-your-repository)」{% ifversion not ghae %}
- 「[健全なコントリビューションを促すプロジェクトをセットアップする](/communities/setting-up-your-project-for-healthy-contributions)」{% endif %}{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}
