---
title: ウィキについて
intro: リポジトリのドキュメンテーションをウィキでホストして、他者が利用してプロジェクトにコントリビュートすることを可能にできます。
redirect_from:
  - /articles/about-github-wikis/
  - /articles/about-wikis
  - /github/building-a-strong-community/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - コミュニティ
---
すべての {% data variables.product.product_name %} リポジトリには、ウィキと呼ばれる、ドキュメンテーションをホストするセクションが付属しています。 リポジトリのウィキは、プロジェクトの利用方法、設計方法、中核的な原理など、プロジェクトに関する長いコンテンツを共有するために利用できます。 README ファイルは、プロジェクトができることを手短に述べますが、ウィキを使えば追加のドキュメンテーションを提供できます。 詳細は「[README について](/articles/about-readmes)」を参照してください。

ウィキでは、{% data variables.product.product_name %} のあらゆる他の場所と同じようにコンテンツを書くことができます。 詳細は「[{% data variables.product.prodname_dotcom %} で書き、フォーマットしてみる](/articles/getting-started-with-writing-and-formatting-on-github)」を参照してください。 私たちは、さまざまなフォーマットを HTML に変更するのに[私たちのオープンソースマークアップライブラリ](https://github.com/github/markup)を使っているので、Markdown あるいはその他任意のサポートされているフォーマットで書くことができます。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}パブリックリポジトリにenterprise を作成すると、{% if enterpriseServerVersions contains currentVersion %}{% data variables.product.product_location %} にアクセスできるユーザ{% else %}なら誰でもそのenterprise を利用できます{% endif %}。 {% endif %}内部またはプライベートリポジトリにenterprise を作成すると、リポジトリにアクセスできる{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}ユーザ{% elsif currentVersion == "github-ae@latest" %}Enterprise メンバー{% endif %}もenterprise にアクセスできます。 詳細は「[リポジトリの可視性を設定する](/articles/setting-repository-visibility)」を参照してください。

ウィキは、{% data variables.product.product_name %} 上で直接編集することも、ウィキのファイルをローカルで編集することもできます。 デフォルトでは、リポジトリへの書き込みアクセス権を持つユーザのみがウィキに変更を加えることができますが、{% data variables.product.product_location %} の全員が{% if currentVersion == "github-ae@latest" %}内部{% else %}パブリック{% endif %}リポジトリのウィキに貢献できるようにすることができます。 詳細は「[ウィキへのアクセス権限を変更する](/articles/changing-access-permissions-for-wikis)」を参照してください。

### 参考リンク

- 「[ウィキページを追加または編集する](/articles/adding-or-editing-wiki-pages)」
- 「[ウィキにフッタやサイドバーを作成する](/articles/creating-a-footer-or-sidebar-for-your-wiki)」
- 「[ウィキのコンテンツを編集する](/articles/editing-wiki-content)」
- [Wkiの変更履歴の表示](/articles/viewing-a-wiki-s-history-of-changes)
- [Wikiの検索](/articles/searching-wikis)
