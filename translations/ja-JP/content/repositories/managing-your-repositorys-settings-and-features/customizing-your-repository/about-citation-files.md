---
title: CITATION ファイルについて
intro: ユーザーがソフトウェアを正しく引用できるように、CITATION ファイルをリポジトリに追加できます。
redirect_from:
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 96e5e7308ba5d1877f231dcb454d7b797a63f221
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108971'
---
## CITATION ファイルについて

リポジトリのルートに `CITATION.cff` ファイルを追加して、作業を引用する方法を他のユーザーに知らせることができます。 引用ファイル形式は、人間と機械で読み取り可能な引用情報を含むプレーンテキストです。

`CITATION.cff` ファイルの例:

```
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
- family-names: "Lisa"
  given-names: "Mona"
  orcid: "https://orcid.org/0000-0000-0000-0000"
- family-names: "Bot"
  given-names: "Hew"
  orcid: "https://orcid.org/0000-0000-0000-0000"
title: "My Research Software"
version: 2.0.4
doi: 10.5281/zenodo.1234
date-released: 2017-12-18
url: "https://github.com/github/linguist"
```

リポジトリの GitHub 引用プロンプトには、次の形式のサンプルの `CITATION.cff` コンテンツが表示されます。

**APA**

```
Lisa, M., & Bot, H. (2017). My Research Software (Version 2.0.4) [Computer software]. https://doi.org/10.5281/zenodo.1234
```

**BibTeX**

{% raw %}
```
@software{Lisa_My_Research_Software_2017,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.5281/zenodo.1234},
  month = {12},
  title = {{My Research Software}},
  url = {https://github.com/github/linguist},
  version = {2.0.4},
  year = {2017}
}
```
{% endraw %}

上記の例では、_ソフトウェア_ 引用 (つまり、`@article` ではなく BibTeX の`@software` 型) が生成されることにご注意ください。

詳しくは、「[引用ファイル形式](https://citation-file-format.github.io/)」 の Web サイトをご覧ください。

リポジトリの既定のブランチに `CITATION.cff` ファイルを追加すると、リポジトリのランディング ページから自動的にリンクされます。 これにより、他のユーザーがあなたのソフトウェア プロジェクトを、あなたが提供した情報を使って簡単に引用できるようになります。

![リポジトリのランディング ページ上の引用リンク](/assets/images/help/repository/citation-link.png)

## ソフトウェア以外のものを引用する

{% data variables.product.prodname_dotcom %} 引用情報を研究記事などの別のリソースにリンクする場合は、CFF の `preferred-citation` オーバーライドを次の種類で使うことができます。

| リソース | CFF 型 | BibTeX 型 | APA 注釈 |
|----------|----------|-------------|----------------|
| ジャーナルの記事、または論文 | `article` | `@article` | |
| Book | `book` | `@book` | |
| 小冊子 (バインドされているが発行されていないもの) | `pamphlet` | `@booklet` | |
| 会議の記事または論文 | `conference-paper` | `@inproceedings` | [会議論文] |
| 会議の議事録 | `conference`, `proceedings` | `@proceedings` | |
| データ セット | `data`, `database` | `@misc` | [データセット] |
| 雑誌の記事 | `magazine-article` | `@article` | |
| マニュアル | `manual` | `@manual` | |
| 混合/汎用/その他 | `generic`、その他の CFF 型 | `@misc` | |
| 新聞記事 | `newspaper-article` | `@article` | |
| ソフトウェア |  `software`, `software-code`, `software-container`, `software-executable`, `software-virtual-machine` | `@software` | [コンピューター ソフトウェア] |
| レポート/技術レポート | `report` | `@techreport` | |
| 未発行 | `unpublished` | `@unpublished` | |

ソフトウェアを記述する拡張 CITATION.cff ファイルですが、優先される引用として研究記事にリンクしています。

```
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
- family-names: "Lisa"
  given-names: "Mona"
  orcid: "https://orcid.org/0000-0000-0000-0000"
- family-names: "Bot"
  given-names: "Hew"
  orcid: "https://orcid.org/0000-0000-0000-0000"
title: "My Research Software"
version: 2.0.4
doi: 10.5281/zenodo.1234
date-released: 2017-12-18
url: "https://github.com/github/linguist"
preferred-citation:
  type: article
  authors:
  - family-names: "Lisa"
    given-names: "Mona"
    orcid: "https://orcid.org/0000-0000-0000-0000"
  - family-names: "Bot"
    given-names: "Hew"
    orcid: "https://orcid.org/0000-0000-0000-0000"
  doi: "10.0000/00000"
  journal: "Journal Title"
  month: 9
  start: 1 # First page number
  end: 10 # Last page number
  title: "My awesome research software"
  issue: 1
  volume: 1
  year: 2021
```

上記の例の `CITATION.cff` ファイルは、GitHub 引用プロンプトで次の出力を生成します。

**APA**

```
Lisa, M., & Bot, H. (2021). My awesome research software. Journal Title, 1(1), 1. https://doi.org/10.0000/00000
```

**BibTeX**

{% raw %}
```
@article{Lisa_My_awesome_research_2021,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.0000/00000},
  journal = {Journal Title},
  month = {9},
  number = {1},
  pages = {1--10},
  title = {{My awesome research software}},
  volume = {1},
  year = {2021}
}
```
{% endraw %}

## データセットの引用

リポジトリにデータセットが含まれている場合は、`CITATION.cff` ファイルの最上位レベルで、{% data variables.product.prodname_dotcom %} 引用プロンプトでデータ引用文字列の出力を生成するように `type: dataset` を設定できます。

## その他の CITATION ファイル

GitHub 引用機能により、コミュニティやプロジェクトで、作業の引用方法を説明するために頻繁に使われる少数の追加ファイルを検出することもできます。

GitHub は、_このリポジトリを引用_ プロンプトでこれらのファイルにリンクしますが、他の引用形式への解析は試みません。

```
# Note these are case-insensitive and must be in the root of the repository
CITATION
CITATIONS
CITATION.bib
CITATIONS.bib
CITATION.md
CITATIONS.md

# CITATION files for R packages are typically found at inst/CITATION
inst/CITATION
```

## 引用形式

現在、APA ファイル形式と BibTex ファイル形式がサポートされています。

その他の引用形式をお探しですか? GitHub では、Ruby ライブラリを使って `CITATION.cff` ファイルを解析します。 [ruby-cff](https://github.com/citation-file-format/ruby-cff) リポジトリで追加の形式を要求することも、ご自分で投稿することもできます。
