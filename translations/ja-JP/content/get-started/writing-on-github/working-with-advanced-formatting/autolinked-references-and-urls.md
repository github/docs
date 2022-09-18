---
title: 自動リンクされた参照と URL
intro: URL、Issue、プルリクエスト、コミットへの参照は、自動的に短縮されてリンクに変換されます。
redirect_from:
  - /articles/autolinked-references-and-urls
  - /github/writing-on-github/autolinked-references-and-urls
  - /github/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Auto linked references
ms.openlocfilehash: 6f6548dbe931a7a6adb809aa4e5616db4358c242
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147419690'
---
## URL

{% data variables.product.product_name %}は自動的に標準的な URL からリンクを生成します。

`Visit https://github.com`

![変換された自動リンク URL](/assets/images/help/writing/url-autolink-rendered.png)

リンクの作成の詳細については、「[基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax/#links)」を参照してください。

## Issue およびプルリクエスト

{% data variables.product.product_name %} 上の会話の中では、Issue やプルリクエストへの参照は自動的に短縮リンクに変換されます。

{% note %}

**メモ:** 自動リンクされた参照は、ウィキやリポジトリ中のファイルでは作成されません。

{% endnote %}

| 参照の種類 | 未処理の参照 | ショート リンク |
| --- | --- | --- |
| イシューまたは pull request の URL | https://github.com/jlord/sheetsee.js/issues/26 | [#26](https://github.com/jlord/sheetsee.js/issues/26)
| `#` と、イシューまたは pull request の番号 | #26 | [#26](https://github.com/jlord/sheetsee.js/issues/26) |
| `GH-` と、イシューまたは pull request の番号 | GH-26 | [GH-26](https://github.com/jlord/sheetsee.js/issues/26) |
| `Username/Repository#` と、イシューまたは pull request の番号 | jlord/sheetsee.js#26 | [jlord/sheetsee.js#26](https://github.com/jlord/sheetsee.js/issues/26)
| `Organization_name/Repository#` と、イシューまたは pull request の番号 | github/linguist#4039 | [github/linguist#4039](https://github.com/github/linguist/pull/4039)

{% ifversion fpt or ghec %} リストで issue、pull request、ディスカッションを参照すると、その参照はタイトルと状態を表示するように展開されます。 タスク リストの詳細については、「[タスク リストについて](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)」を参照してください。
{% endif %}

## ラベル
Markdown でラベルの URL を参照すると、ラベルが自動的にレンダリングされます。 同じリポジトリのラベルのみがレンダリングされ、別のリポジトリのラベルを指す URL は任意の [URL](/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#urls) としてレンダリングされます。

ラベルの URL は、ラベル ページに移動し、ラベルをクリックすることで見つけることができます。 たとえば、パブリック [ドキュメント リポジトリ](https://github.com/github/docs/)内のラベル "enhancement" の URL は次のようになります

```md
https://github.com/github/docs/labels/enhancement
```

## コミット SHA

コミットの SHA ハッシュへの参照は、{% data variables.product.product_name %}上のコミットへの短縮リンクに自動的に変換されます。

| 参照の種類 | 未処理の参照 | ショート リンク |
| --- | --- | --- |
| コミット URL | [`https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| SHA | a5c3785ed8d6a35868bc169f07e40e889087fd2e | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| User@SHA | jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e | [jlord@a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)
| `Username/Repository@SHA` | `jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e` | [`jlord/sheetsee.js@a5c3785`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |

## 外部リソースへのカスタム自動リンク

{% data reusables.repositories.autolink-references %}

## 参考資料

- [Basic writing and formatting syntax (基本的な書き方とフォーマットの構文)](/articles/basic-writing-and-formatting-syntax)
