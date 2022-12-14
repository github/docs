---
title: プルリクエスト内の依存関係の変更をレビューする
intro: プルリクエストに依存関係への変更が含まれている場合は、変更内容の概要と、依存関係に既知の脆弱性があるかどうかを確認できます。
product: '{% data reusables.gated-features.dependency-review %}'
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Pull requests
  - Dependency review
  - Advanced Security
  - Vulnerabilities
  - Dependencies
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
shortTitle: Review dependency changes
ms.openlocfilehash: 34cefbae8b7ccfd32773a47de2509a6eccc7a799
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106606'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

## 依存関係の確認について

{% data reusables.dependency-review.feature-overview %}

{% ifversion ghec %} プライベート リポジトリで依存関係レビューを使うには、依存関係グラフを有効にする必要があります。 詳しい情報については、「[リポジトリの依存関係を調べる](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)」を参照してください。{% endif %}

{% ifversion ghes %}プライベート リポジトリで依存関係レビューを使うには、依存関係グラフを有効にして、{% data variables.location.product_location %} を {% data variables.product.prodname_dotcom_the_website %} に接続する必要があります。 詳しい情報については、[{% data variables.product.prodname_ghe_server %} 上の脆弱な依存関係に対するアラートの有効化](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)に関するページを参照してください。{% endif %}

依存関係のレビューでは、「左にシフト」することができます。 提供された予測情報を使用して、本番環境に至る前に脆弱性のある依存関係をキャッチできます。 詳細については、「[依存関係レビューについて](/code-security/supply-chain-security/about-dependency-review)」を参照してください。

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}

{% data variables.product.prodname_dependency_review_action %} を使って、リポジトリ内の pull request に依存関係レビューを適用できます。 {% data reusables.dependency-review.dependency-review-action-overview %}

{% ifversion dependency-review-action-configuration %}キャッチする依存関係の脆弱性の種類を指定することで、ニーズに合わせて {% data variables.product.prodname_dependency_review_action %} を構成できます。 詳細については、「[依存関係レビューの構成](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action)」を参照してください。 {% endif %}

{% endif %}
## プルリクエスト内の依存関係を確認する

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}

1. pull request に多くのファイルが含まれている場合は、 **[ファイル フィルター]** ドロップダウン メニューを使って、依存関係を記録していないファイルをすべて折りたたみます。 これにより、レビューを依存関係の変更に焦点を絞りやすくなります。

   ![[ファイル フィルター] メニュー](/assets/images/help/pull_requests/file-filter-menu-json.png) 依存関係レビューを使うと、既定でソース diff がレンダリングされる大きなロックファイルで、どのような変更が加えられているかがよくわかります。

  {% note %}

   **注:** 依存関係レビュー リッチ diff は、`jquery.js` のような、コミットされた静的 JavaScript ファイルでは使用できません。

   {% endnote %}

1. マニフェストまたはロック ファイルのヘッダーの右側で、 **[{% octicon "file" aria-label="The rich diff icon" %}]** リッチ diff ボタンをクリックして、依存関係レビューを表示します。

   ![リッチ diff ボタン](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

2. 依存関係のレビューにリストされている依存関係を確認します。

   ![依存関係のレビューにおける脆弱性の警告](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   脆弱性のある追加または変更された依存関係が最初に一覧表示され、次に重要度、依存関係名の順に並べられます。 これは、最も重要度の高い依存関係が、常に依存関係レビューの最上位に表示されるということです。 その他の依存関係は、依存関係名のアルファベット順に一覧表示されます。

   各依存関係の横にあるアイコンは、この pull request 内で、依存関係が追加 (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>)、更新 (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>)、または削除 (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>) されているかどうかを示します。

   その他の情報は次のとおりです。

   * 新規、更新、または削除された依存関係のバージョンまたはバージョン範囲。
   * 依存関係の特定のバージョンの場合:
      * 依存関係のリリース時期。
      * このソフトウェアに依存しているプロジェクトの数。 この情報は、依存関係グラフから取得されます。 依存関係の数を確認すると、誤って間違った依存関係を追加することを防ぐことができます。
      * この依存関係で使用されるライセンス（この情報が利用可能な場合）。 これは、プロジェクトで特定のライセンスが使用されているコードを避ける必要がある場合に役立ちます。

   依存関係に既知の脆弱性がある場合、警告メッセージには次のものが含まれます。

   * 脆弱性の簡単な説明。
   * Common Vulnerabilities and Exposures (CVE) または {% data variables.product.prodname_security_advisories %} (GHSA) 識別番号。 この ID をクリックすると、脆弱性の詳細を確認できます。
   * 脆弱性の重要度。
   * 脆弱性が修正された依存関係のバージョン。 誰かのプルリクエストを確認している場合は、パッチを適用したバージョンまたはそれ以降のリリースに依存関係を更新するようにコントリビューターに依頼することができます。

{% data reusables.repositories.return-to-source-diff %}
