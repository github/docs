---
title: ソースコード移行ツール
intro: 外部ツールを使って、プロジェクトを GitHub に移動できます。
redirect_from:
  - /articles/importing-from-subversion
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
  - /github/importing-your-projects-to-github/importing-source-code-to-github/source-code-migration-tools
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Code migration tools
ms.openlocfilehash: 7877d435e7971f669d9d49a70d2d2450371b5159
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882168'
---
{% ifversion fpt or ghec %}

Subversion、Mercurial、TTeam Foundation バージョン管理 (TFVC) や他の Git リポジトリからプロジェクトをインポートする場合は、[GitHub Importer](/articles/about-github-importer) を使用することをお勧めします。 これらの外部ツールを使って、プロジェクトを Git に変換することもできます。

{% endif %}

## Subversion からインポートする

一般的な Subversion の環境では、複数のプロジェクトが単一のルートリポジトリに保管されます。 GitHub では、一般的に、それぞれのプロジェクトは個人アカウントや Organization の別々の Git リポジトリにマップされます。 次の場合、Subversion リポジトリのそれぞれの部分を別々の GitHub リポジトリにインポートすることをおすすめします。

* コラボレーターが、他の部分とは別のプロジェクトの部分をチェックアウトまたはコミットする必要がある場合
* それぞれの部分にアクセス許可を設定したい場合

Subversion リポジトリを Git にコンバートするには、これらのツールをおすすめします:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

## Mercurial からインポートする

Mercurial リポジトリを Git に変換する場合は、[hg-fast-export](https://github.com/frej/fast-export) をお勧めします。

## TFVC からのインポート

TFVC と Git の間で変更を移動する場合は、[git-tfs](https://github.com/git-tfs/git-tfs) をお勧めします。

TFVC (一元化されたバージョン管理システム) から Git への移行の詳細については、Microsoft ドキュメント サイトの「[Git への移行を計画する](https://docs.microsoft.com/devops/develop/git/centralized-to-git)」を参照してください。

{% tip %}

**ヒント:** Git へのプロジェクトの変換が完了したら、[{% data variables.product.prodname_dotcom %} にプッシュ](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)できます。

{% endtip %}

{% ifversion fpt or ghec %}

## 参考資料

- 「[GitHub Importer について](/articles/about-github-importer)」
- 「[GitHub Importer でリポジトリをインポートする](/articles/importing-a-repository-with-github-importer)」
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
