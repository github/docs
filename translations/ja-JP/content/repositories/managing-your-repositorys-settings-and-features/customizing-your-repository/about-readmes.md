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
ms.openlocfilehash: 4a6ea66a42a6267ec4306d6ee5cff3fef739f8a6
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147783064'
---
## READMEについて

README ファイルをリポジトリに追加して、プロジェクトに関する重要な情報を伝えることができます。 README は、リポジトリライセンス {% ifversion fpt or ghes > 3.2 or ghae-issue-4651 or ghec %}、引用ファイル{% endif %}{% ifversion fpt or ghec %}、コントリビューションガイドライン、行動規範 {% elsif ghes %}、コントリビューションガイドライン {% endif %} とともに、プロジェクトへの要望を伝え、コントリビューションの管理を支援します。

プロジェクトのガイドラインを提供する方法について詳しくは、{% ifversion fpt or ghec %}「[プロジェクトへの行動規範の追加](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)」および{% endif %}「[健全なコントリビューションを促すプロジェクトをセットアップする](/communities/setting-up-your-project-for-healthy-contributions)」を参照してください。

多くの場合、READMEはリポジトリへの訪問者が最初に目にするアイテムです。 通常、README ファイルには以下の情報が含まれています:
- このプロジェクトが行うこと
- このプロジェクトが有益な理由
- このプロジェクトの使い始め方
- このプロジェクトに関するヘルプをどこで得るか
- このプロジェクトのメンテナンス者とコントリビューター

README ファイルをリポジトリの隠れ `.github` ルートまたは `docs` ディレクトリに置けば、{% data variables.product.product_name %} はそれを認識して自動的に README をリポジトリへの訪問者に提示します。

リポジトリに複数の README ファイルが含まれている場合、表示されるファイルは、`.github` ディレクトリ、リポジトリのルート ディレクトリ、最後に `docs` ディレクトリの順に選択されます。

![github/scientistリポジトリのメインページとそのREADMEファイル](/assets/images/help/repository/repo-with-readme.png)

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

{% endif %}

![ユーザ名/ユーザ名リポジトリの README ファイル](/assets/images/help/repository/username-repo-with-readme.png)

## README ファイルの自動生成された目次

README ファイルなど、リポジトリの Markdown ファイルをレンダリングすると、{% data variables.product.product_name %} によって、セクション見出しに基づいて目次が自動的に生成されます。 レンダリングされたページの左上にある {% octicon "list-unordered" aria-label="The unordered list icon" %} メニューアイコンをクリックすると、README ファイルの目次を表示できます。

![自動的に生成された TOC を含む README](/assets/images/help/repository/readme-automatic-toc.png)

## READMEファイルのセクションリンクとblobページ

{% data reusables.repositories.section-links %}

## READMEファイル中の相対リンクと画像パス

{% data reusables.repositories.relative-links %}

## Wiki

README には、開発者がプロジェクトを使用し、プロジェクトに貢献するために必要な情報のみを含めてください。 長いドキュメントは Wiki に最適です。 詳しくは、「[Wiki について](/communities/documenting-your-project-with-wikis/about-wikis)」を参照してください。

## 参考資料

- "[ファイルをリポジトリに追加する](/articles/adding-a-file-to-a-repository)"
- 18F の「[README を読み取り可能にする](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)」{%- ifversion fpt or ghec %} 
- 「[[GitHub Codespaces で開く] バッジを追加する](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)」{%- endif %}   
