---
title: 关于 CITION 文件
intro: 您可以将 CITATION 文件添加到存储库中，以帮助用户正确引用您的软件。
redirect_from:
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files
versions:
  fpt: '*'
  ghes: '>=3.3'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## 关于 CITION 文件

您可以将 `CITATION.cff` 文件添加到存储库的根目录中，让其他人知道您希望他们如何引用您的工作。 引文文件格式为纯文本，具有人类和机器可读的引文信息。

示例 `CITATION.cff` 文件：

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

存储库上的 GitHub 引文提示将显示以下格式的示例 `CITATION.cff` 内容：

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

请注意，上面的示例生成 _software_ 引文（即，在 BibTeX 中键入 `@software` 而不是 `@article`）。

更多信息请参阅[引文文件格式](https://citation-file-format.github.io/)网站。

当您将 `CITATION.cff` 文件添加到存储库的默认分支时，该文件会自动从存储库登录页面链接。 这使得其他用户可以使用您提供的信息轻松引用您的软件项目。

![存储库登录页上的引文链接](/assets/images/help/repository/citation-link.png)

## 引用软件以外的内容

如果您希望 {% data variables.product.prodname_dotcom %} 引文信息链接到其他资源（如研究文章），则可以在 CFF 中使用 `preferred-citation` 覆盖以下类型。

| 资源          | CFF 类型                                                                                               | BibTeX 类型        | APA 注释  |
| ----------- | ---------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| 期刊文章/论文     | `article`                                                                                            | `@article`       |         |
| 书籍          | `book`                                                                                               | `@book`          |         |
| 小册子（装订但未出版） | `pamphlet`                                                                                           | `@booklet`       |         |
| 会议文章/论文     | `conference-paper`                                                                                   | `@inproceedings` | [会议论文]  |
| 会议论文集       | `conference`, `proceedings`                                                                          | `@proceedings`   |         |
| 数据集         | `data`, `database`                                                                                   | `@misc`          | [数据集]   |
| 杂志文章        | `magazine-article`                                                                                   | `@article`       |         |
| 手册          | `manual`                                                                                             | `@manual`        |         |
| 杂项/通用/其他    | `generic`，任何其他 CFF 类型                                                                                | `@misc`          |         |
| 新闻报道        | `newspaper-article`                                                                                  | `@article`       |         |
| 软件          | `software`, `software-code`, `software-container`, `software-executable`, `software-virtual-machine` | `@software`      | [计算机软件] |
| 报告/技术报告     | `report`                                                                                             | `@techreport`    |         |
| 已取消发布       | `unpublished`                                                                                        | `@unpublished`   |         |

扩展的 CITATION.cff 文件描述了该软件，但链接到研究文章作为首选引用：

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

上面的示例 `CITATION.cff` 文件将在 GitHub 引文提示中产生以下输出：

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

## 引用数据集

如果存储库包含数据集，则可以在 `CITATION.cff` 文件的顶层设置 `type: dataset` ，以便在 {% data variables.product.prodname_dotcom %} 引文提示中生成数据引文字符串输出。

## 其他引文文件

GitHub 引用功能还将检测社区和项目经常使用的少量其他文件，以描述他们希望如何引用他们的工作。

GitHub 将在 _Cite this repository_ 提示中链接到这些文件，但不会尝试将它们解析为其他引文格式。

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

## 引文格式

我们目前支持 APA 和 BibTex 文件格式。

您是否正在寻找其他引文格式？ GitHub 使用 Ruby 库来解析 `CITATION.cff` 文件。 您可以在 [ruby-cff](https://github.com/citation-file-format/ruby-cff) 存储库中请求其他格式，也可以自己贡献它们。
