---
title: READMEについて
intro: リポジトリにREADMEファイルを追加して、そのプロジェクトがなぜ有益なのか、そのプロジェクトで何ができるか、そのプロジェクトをどのように使えるかを他者に伝えることができます。
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages
  - /articles/relative-links-in-readmes
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## READMEについて

README ファイルをリポジトリに追加して、プロジェクトに関する重要な情報を伝えることができます。 A README, along with a repository license{% ifversion fpt or ghes > 3.2 or ghae-issue-4651 or ghec %}, citation file{% endif %}{% ifversion fpt or ghec %}, contribution guidelines, and a code of conduct{% elsif ghes %} and contribution guidelines{% endif %}, communicates expectations for your project and helps you manage contributions.

プロジェクトのガイドラインの提供方法の詳細については、{% ifversion fpt or ghec %}「[プロジェクトに行動規範を追加する](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)」および {% endif %}「[健全なコントリビューションのためのプロジェクトの設定](/communities/setting-up-your-project-for-healthy-contributions)」を参照してください。

多くの場合、READMEはリポジトリへの訪問者が最初に目にするアイテムです。 通常、README ファイルには以下の情報が含まれています:
- このプロジェクトが行うこと
- このプロジェクトが有益な理由
- このプロジェクトの使い始め方
- このプロジェクトに関するヘルプをどこで得るか
- このプロジェクトのメンテナンス者とコントリビューター

If you put your README file in your repository's hidden `.github`, root, or `docs` directory, {% data variables.product.product_name %} will recognize and automatically surface your README to repository visitors.

If a repository contains more than one README file, then the file shown is chosen from locations in the following order: the `.github` directory, then the repository's root directory, and finally the `docs` directory.

![github/scientistリポジトリのメインページとそのREADMEファイル](/assets/images/help/repository/repo-with-readme.png)

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

{% endif %}

![ユーザ名/ユーザ名リポジトリの README ファイル](/assets/images/help/repository/username-repo-with-readme.png)

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}

## Auto-generated table of contents for README files

For the rendered view of any Markdown file in a repository, including README files, {% data variables.product.product_name %} will automatically generate a table of contents based on section headings. You can view the table of contents for a README file by clicking the {% octicon "list-unordered" aria-label="The unordered list icon" %}  menu icon at the top left of the rendered page.

![README with automatically generated TOC](/assets/images/help/repository/readme-automatic-toc.png)

{% endif %}

## READMEファイルのセクションリンクとblobページ

{% data reusables.repositories.section-links %}

## READMEファイル中の相対リンクと画像パス

{% data reusables.repositories.relative-links %}

## Wiki

A README should contain only the necessary information for developers to get started using and contributing to your project. Longer documentation is best suited for wikis. 詳細は「[ウィキについて](/communities/documenting-your-project-with-wikis/about-wikis)」を参照してください。

## 参考リンク

- [リポジトリへのファイルの追加](/articles/adding-a-file-to-a-repository)
- 18Fの[Making READMEs readable](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)
