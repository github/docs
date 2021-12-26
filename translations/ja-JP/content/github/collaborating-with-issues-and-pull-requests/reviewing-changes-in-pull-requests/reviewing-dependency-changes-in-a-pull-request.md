---
title: プルリクエスト内の依存関係の変更をレビューする
intro: プルリクエストに依存関係への変更が含まれている場合は、変更内容の概要と、依存関係に既知の脆弱性があるかどうかを確認できます。
versions:
  free-pro-team: '*'
topics:
  - Pull requests
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

{% note %}

**注釈:** 依存関係のレビューは現在ベータであり、変更される可能性があります。

{% endnote %}

### 依存関係のレビューについて

{% data reusables.dependency-review.feature-overview %}

依存関係のレビューでは、「左にシフト」することができます。 提供された予測情報を使用して、本番環境に至る前に脆弱性のある依存関係をキャッチできます。 For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."

### プルリクエスト内の依存関係を確認する

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}

1. プルリクエストに多数のファイルが含まれている場合は、[**File filter**] ドロップダウンメニューを使用して、依存関係を記録しないすべてのファイルを折りたたみます。 これにより、レビューを依存関係の変更に焦点を絞りやすくなります。

   ![ファイルフィルタメニュー](/assets/images/help/pull_requests/file-filter-menu-json.png)

1. マニフェストまたはロックファイルのヘッダの右側で、**リッチ{% octicon "file" aria-label="The rich diff icon" %}** diff ボタンをクリックして依存関係のレビューを表示します。

   ![リッチ diff ボタン](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

  {% note %}

   **注釈:** 依存関係のレビューでは、ソース diff がデフォルトでレンダリングされない大きなロックファイルで何が変更されたかをより明確に確認できます。

   {% endnote %}

1. 依存関係のレビューにリストされている依存関係を確認します。

   ![依存関係のレビューにおける脆弱性の警告](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   脆弱性のある追加または変更された依存関係が最初に一覧表示され、次に重要度、依存関係名の順に並べられます。 これは、最も重要度の高い依存関係が、常に依存関係レビューの最上位に表示されるということです。 その他の依存関係は、依存関係名のアルファベット順に一覧表示されます。

   各依存関係の横にあるアイコンは、このプルリクエストで依存関係が追加された (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>)、更新された (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>)、削除された (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>) ことを示しています。

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
