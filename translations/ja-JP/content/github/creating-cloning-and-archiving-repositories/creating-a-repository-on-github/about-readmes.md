---
title: READMEについて
intro: リポジトリにREADMEファイルを追加して、そのプロジェクトがなぜ有益なのか、そのプロジェクトで何ができるか、そのプロジェクトをどのように使えるかを他者に伝えることができます。
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages/
  - /articles/relative-links-in-readmes/
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### READMEについて

README ファイルをリポジトリに追加して、プロジェクトに関する重要な情報を伝えることができます。 README は、リポジトリライセンス {% if currentVersion == "free-pro-team@latest" %}、コントリビューションガイドライン、行動規範 {% elsif enterpriseServerVersions contains currentVersion %}、コントリビューションガイドライン {% endif %} とともに、プロジェクトへの要望を伝え、コントリビューションの管理を支援します。

プロジェクトのガイドラインの提供方法の詳細については、{% if currentVersion == "free-pro-team@latest" %}「[プロジェクトに行動規範を追加する](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)」および {% endif %}「[健全なコントリビューションのためのプロジェクトの設定](/communities/setting-up-your-project-for-healthy-contributions)」を参照してください。

多くの場合、READMEはリポジトリへの訪問者が最初に目にするアイテムです。 通常、README ファイルには以下の情報が含まれています:
- このプロジェクトが行うこと
- このプロジェクトが有益な理由
- このプロジェクトの使い始め方
- このプロジェクトに関するヘルプをどこで得るか
- このプロジェクトのメンテナンス者とコントリビューター

README ファイルをリポジトリのルート、`docs`、または隠れディレクトリ `.github` に置けば、{% data variables.product.product_name %} はそれを認識して自動的に README をリポジトリへの訪問者に提示します。

![github/scientistリポジトリのメインページとそのREADMEファイル](/assets/images/help/repository/repo-with-readme.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21"%}

{% data reusables.profile.profile-readme %}

{% endif %}

![ユーザ名/ユーザ名リポジトリの README ファイル](/assets/images/help/repository/username-repo-with-readme.png)

{% endif %}

### Auto-generated table of contents for README files

For the rendered view of any Markdown file in a repository, including README files, {% data variables.product.product_name %} will automatically generate a table of contents based on section headings. You can view the table of contents for a README file by clicking the {% octicon "list-unordered" aria-label="The unordered list icon" %}  menu icon at the top left of the rendered page.

![README with automatically generated TOC](/assets/images/help/repository/readme-automatic-toc.png)

The auto-generated table of contents is enabled by default for all Markdown files in a repository, but you can disable this feature for your repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Features", deselect **Table of contents**. ![Automatic TOC setting for repositories](/assets/images/help/repository/readme-automatic-toc-setting.png)

### READMEファイルのセクションリンクとblobページ

{% data reusables.repositories.section-links %}

### READMEファイル中の相対リンクと画像パス

{% data reusables.repositories.relative-links %}

### 参考リンク

- [リポジトリへのファイルの追加](/articles/adding-a-file-to-a-repository)
- 18Fの[Making READMEs readable](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)
