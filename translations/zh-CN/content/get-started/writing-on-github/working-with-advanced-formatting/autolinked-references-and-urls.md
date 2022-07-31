---
title: 自动链接的引用和 URL
intro: 对 URL、议题、拉取请求和提交的引用会自动缩短并转换为链接。
redirect_from:
  - /articles/autolinked-references-and-urls
  - /github/writing-on-github/autolinked-references-and-urls
  - /github/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 自动链接的引用
---

## URL

{% data variables.product.product_name %} 自动从标准 URL 创建链接。

`访问 https://github.com`

![显示的自动链接的 URL](/assets/images/help/writing/url-autolink-rendered.png)

有关创建链接的更多信息，请参阅“[基本撰写和格式语法](/articles/basic-writing-and-formatting-syntax/#links)”。

## 议题和拉取请求

在 {% data variables.product.product_name %} 上的对话中，对议题和拉取请求的引用将自动转换为缩短的链接。

{% note %}

**注：**在仓库的 wiki 或文件中无法创建自动链接的引用。

{% endnote %}

| 引用类型                                       | 源引用                                            | 短链接                                                                    |
| ------------------------------------------ | ---------------------------------------------- | ---------------------------------------------------------------------- |
| 议题或拉取请求 URL                                | https://github.com/jlord/sheetsee.js/issues/26 | [#26](https://github.com/jlord/sheetsee.js/issues/26)                  |
| `#` 和议题或拉取请求编号                             | #26                                            | [#26](https://github.com/jlord/sheetsee.js/issues/26)                  |
| `GH-` 和议题或拉取请求编号                           | GH-26                                          | [GH-26](https://github.com/jlord/sheetsee.js/issues/26)                |
| `Username/Repository#` 和议题或拉取请求编号          | jlord/sheetsee.js#26                           | [jlord/sheetsee.js#26](https://github.com/jlord/sheetsee.js/issues/26) |
| `Organization_name/Repository#` 和议题或拉取请求编号 | github/linguist#4039                           | [github/linguist#4039](https://github.com/github/linguist/pull/4039)   |

{% ifversion fpt or ghec %}
如果您在列表中引用议题、拉取请求或讨论，则引用将展开以显示标题和状态。 有关任务列表的更多信息，请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”。
{% endif %}

## 标签
When referencing the URL of a label in Markdown, the label is automatically rendered. Only labels of the same repository are rendered, URLs pointing to a label from a different repository are rendered as any [URL](/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#urls).

The URL of a label can be found by navigating to the labels page and clicking on a label. For example, the URL of the label "enhancement" in our public [docs repository](https://github.com/github/docs/) is

```md
https://github.com/github/docs/labels/enhancement
```

## 提交 SHA

对提交 SHA 哈希的引用会自动转换为指向 {% data variables.product.product_name %} 上提交的短链接。

| 引用类型                      | 源引用                                                                                                                                                                            | 短链接                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| 提交 URL                    | [`https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)                     |
| SHA                       | a5c3785ed8d6a35868bc169f07e40e889087fd2e                                                                                                                                       | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)                     |
| User@SHA                  | jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e                                                                                                                                 | [jlord@a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)               |
| `Username/Repository@SHA` | `jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e`                                                                                                                   | [`jlord/sheetsee.js@a5c3785`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |

## 自定义外部资源的自动链接

{% data reusables.repositories.autolink-references %}

## 延伸阅读

- "[基本撰写和格式语法](/articles/basic-writing-and-formatting-syntax)"
