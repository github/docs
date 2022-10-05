---
title: GitHub Importer について
intro: Subversion、Mercurial、Team Foundation バージョン管理 (TFVC)、または別の Git リポジトリにソース コードがある場合は、GitHub Importer を使って GitHub に移動できます。
redirect_from:
  - /articles/about-github-importer
  - /github/importing-your-projects-to-github/about-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 86fa3129982afcdf99da7879792881c522d4a6fc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131259'
---
GitHub Importerは、コミットやリビジョン履歴を含めてソースコードリポジトリを素早くインポートしてくれます。

![リポジトリのインポートのgif](/assets/images/help/importer/github-importer.gif)

インポートの間、インポート元のバージョン管理システムによって、リモートリポジトリでの認証、コミット作者の属性の更新、大きなファイルを持つリポジトリのインポート（あるいはGit Large File Storageを使いたくない場合は大きなファイルの削除）が行えます。

| インポートのアクション | Subversion | Mercurial | TFVC | Git |
|:--------------|:----------:|:---------:|:----------------------:|:---:|
| リモートリポジトリでの認証 | **X** | **X** | **X** | **X** |
| [コミット作者の属性の更新](/articles/updating-commit-author-attribution-with-github-importer) | **X** | **X** | **X** | |
| 大きなファイルを [Git Large File Storage](/articles/about-git-large-file-storage) に移動する | **X** | **X** | **X** | |
| リポジトリからの大きなファイルの削除 | **X** | **X** | **X** | |

## 参考資料

- 「[GitHub Importer でリポジトリをインポートする](/articles/importing-a-repository-with-github-importer)」
- 「[GitHub Importer でコミット作者属性を更新する](/articles/updating-commit-author-attribution-with-github-importer)」
- 「[コマンド ラインを使った Git リポジトリのインポート](/articles/importing-a-git-repository-using-the-command-line)」
- 「[ソース コード移行ツール](/articles/source-code-migration-tools)」
