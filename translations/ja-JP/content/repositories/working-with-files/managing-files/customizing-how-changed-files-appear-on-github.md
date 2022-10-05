---
title: 変更したファイルの GitHub での表示方法をカスタマイズする
intro: 特定のファイルを既定で diff に表示しない、またはリポジトリの言語として考えないようにするために、 *.gitattributes* ファイルで `linguist-generated` 属性を使ってマークできます。
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/managing-repository-settings/customizing-how-changed-files-appear-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: How changed files appear
ms.openlocfilehash: 2ba6dc8286cab0ef493289d8ae39283209dae8b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131989'
---
*.gitattributes* ファイルを使って、指定した属性を持ち、特定の "パターン" と一致するファイルをマークします。 *.gitattributes* ファイルでは、 _.gitignore_ ファイルと同じ照合ルールが使われます。 詳しくは、Git のドキュメントの「[PATTERN FORMAT](https://www.git-scm.com/docs/gitignore#_pattern_format)」をご覧ください。

1. *.gitattributes* ファイルが存在しない場合は、リポジトリのルートに *.gitattributes* ファイルを作成します。
2. `linguist-generated` 属性を使って、リポジトリの言語統計で無視し、既定で差分に表示しないパスを、マークまたはマーク解除します。

  たとえば、`search/index.json` を生成されたファイルとしてマークするには、 *.gitattributes* に次の行を追加します。

  ```
search/index.json linguist-generated=true
  ```

## 参考資料
- [生成されたコード](https://github.com/github/linguist/blob/master/docs/overrides.md#generated-code) (Linguist ドキュメント)
- [新しいファイルの作成](/articles/creating-new-files/)
