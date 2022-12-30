---
title: GitHub がサポートする Subversion プロパティ
intro: '{% data variables.product.product_name %} 上の既存の機能に類似したいくつかの Subversion ワークフローやプロパティがあります。'
redirect_from:
  - /articles/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/subversion-properties-supported-by-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Properties supported by GitHub
ms.openlocfilehash: 48c041509100455f6ffcf02d262fd12eafbbffbc
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145131223'
---
## 実行可能ファイル (`svn:executable`)

Git リポジトリに追加する前に、ファイル モードを直接更新して、`svn:executable` プロパティを変換します。

## MIME の種類 (`svn:mime-type`)

{% data variables.product.product_name %}は、ファイルの MIME タイププロパティ、およびそれを追加したコミットを追跡します。

## バージョンのないアイテムの無視 (`svn:ignore`)

Subversion で無視されるようにファイルとディレクトリを設定している場合、{% data variables.product.product_name %} はそれらを内部的に追跡します。 Subversion のクライアントで無視されたファイルは、 *.gitignore* ファイルのエントリとは全く別です。

## 現在サポートされていないプロパティ

{% data variables.product.product_name %} では現在、`svn:externals`、`svn:global-ignores`、またはカスタム プロパティを含む、上で挙げられていないプロパティはサポートしていません。
