---
title: READMEについて
intro: 'リポジトリにREADMEファイルを追加して、そのプロジェクトがなぜ有益なのか、そのプロジェクトで何ができるか、そのプロジェクトをどのように使えるかを他者に伝えることができます。'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages/
  - /articles/relative-links-in-readmes/
  - /articles/about-readmes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

A README file, along with {% if currentVersion == "free-pro-team@latest" %}a [repository license](/articles/licensing-a-repository), [contribution guidelines](/articles/setting-guidelines-for-repository-contributors), and a [code of conduct](/articles/adding-a-code-of-conduct-to-your-project){% else %}a [repository license](/articles/licensing-a-repository) and [contribution guidelines](/articles/setting-guidelines-for-repository-contributors){% endif %}, helps you communicate expectations for and manage contributions to your project.

多くの場合、READMEはリポジトリへの訪問者が最初に目にするアイテムです。 通常、README ファイルには以下の情報が含まれています:
- このプロジェクトが行うこと
- このプロジェクトが有益な理由
- このプロジェクトの使い始め方
- このプロジェクトに関するヘルプをどこで得るか
- このプロジェクトのメンテナンス者とコントリビューター

README ファイルをリポジトリのルート、`docs`、または隠れディレクトリ `.github` に置けば、{% data variables.product.product_name %} はそれを認識して自動的に README をリポジトリへの訪問者に提示します。

![github/scientistリポジトリのメインページとそのREADMEファイル](/assets/images/help/repository/repo-with-readme.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% data reusables.profile.profile-readme %}

![ユーザ名/ユーザ名リポジトリの README ファイル](/assets/images/help/repository/username-repo-with-readme.png)

{% endif %}

### READMEファイルのセクションリンクとblobページ

多くのプロジェクトは、README の先頭にある目次を使ってユーザをファイル中のさまざまなセクションへ誘導します。 {% data reusables.repositories.section-links %}

### READMEファイル中の相対リンクと画像パス

{% data reusables.repositories.relative-links %}

### 参考リンク

- [リポジトリへのファイルの追加](/articles/adding-a-file-to-a-repository)
- 18Fの[Making READMEs readable](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)
