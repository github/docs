---
title: GitHub でファイルを検索する
intro: 'ファイルファインダーを使ってリポジトリにあるファイルを検索できます。 {% data variables.product.product_name %} の複数のリポジトリ内のファイルを検索するには、[`filename` コード検索修飾子](/search-github/searching-on-github/searching-code#search-by-filename)を使用します。'
redirect_from:
  - /articles/finding-files-on-github
  - /github/searching-for-information-on-github/finding-files-on-github
  - /github/searching-for-information-on-github/searching-on-github/finding-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 7cecdfd58ecf56cac251bd77af3a4e1a7fcfd607
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880197'
---
{% tip %}

**ヒント:**

- ファイル ファインダーの既定の結果では、`build`、`log`、`tmp`、`vendor` などの一部のディレクトリが除外されます。 これらのディレクトリ内のファイルを検索するには、[`filename` コード検索修飾子](/search-github/searching-on-github/searching-code#search-by-filename)を使います。{% ifversion file-finder-exclusion-controls %}または、[`.gitattributes` ファイルを使って](#customizing-excluded-files)、既定で除外するディレクトリをカスタマイズできます。{% endif %}
- キーボードの `t` キーを押してファイル ファインダーを開くこともできます。 詳細については、「[Keyboard shortcuts](/articles/keyboard-shortcuts)」 (キーボード ショートカット) を参照してください。

{% endtip %}

## ファイル ファインダーを使用する

{% data reusables.repositories.navigate-to-repo %}
2. ファイルのリストの上の **[ファイルに移動]** をクリックします。
![[ファイル検索] ボタン](/assets/images/help/search/find-file-button.png)
3. 検索フィールドで、検索したいファイル名を入力します。
![ファイル検索の検索フィールド](/assets/images/help/search/find-file-search-field.png)
4. 結果のリストで、目的のファイルをクリックします。

{% ifversion file-finder-exclusion-controls %}

## 除外されるファイルをカスタマイズする

次のディレクトリがリポジトリ ルートに存在する場合、それらの中にあるファイルはファイル ファインダーの既定の結果に含まれません。

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `build`
 - `dot_git`
 - `log`
 - `tmp`
 - `vendor`

`.gitattributes` ファイルを使うことで、これらの既定の除外をオーバーライドできます。

これを行うには、リポジトリ ルートで `.gitattributes` という名前のファイルを作成または更新し、ファイル ファインダーの結果に含める必要がある各ディレクトリについて、[`linguist-generated`](https://github.com/github/linguist/blob/master/docs/overrides.md) 属性を `false` に設定します。

たとえば、次のような `.gitattributes` ファイルを使うと、`build/` ディレクトリ内のファイルをファイル ファインダーで使用できるようになります。

```
build/** linguist-generated=false
```

このオーバーライドには、再帰 glob パターン (`**`) を使う必要があることに注意してください。 詳しくは、Git のドキュメントの「[パターン形式](https://git-scm.com/docs/gitignore#_pattern_format)」をご覧ください。 既定で除外されるディレクトリ内のサブディレクトリのさらに複雑なオーバーライドはサポートされていません。

{% endif %}

## 参考資料

- [GitHub での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github){% ifversion file-finder-exclusion-controls %}
- [変更したファイルの GitHub での表示方法をカスタマイズする](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)
- Git ドキュメントの [`.gitattributes`](https://git-scm.com/docs/gitattributes){% endif %}
