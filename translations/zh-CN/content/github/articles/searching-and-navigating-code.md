---
title: 搜索和导航代码
intro: 搜索和导航代码是开发工作流程的重要组成部分，GitHub 正不断改进这些领域： 如果您是选择采用代码搜索和导航专用测试版的组织的成员，将可以访问功能强大的新搜索和导航工具。 有关此专用测试版的其他问题，请发送电子邮件至 search-beta@github.com。
hidden: true
redirect_from:
  - /articles/searching-and-navigating-code
versions:
  free-pro-team: '*'
---


### 本文内容

- [文字代码搜索](#literal-code-search)
- [相关性](#relevancy)
- [跳至导航](#jump-to-navigation)

### 文字代码搜索

在此专用测试版之前，从搜索索引中删除了许多符号，这意味着如 `>>` 之类的惯用内容不可搜索。 例如，在仓库中搜索 `>>` 时，将返回零结果。 使用专用测试版时，您可以将符号包含在双引号中，然后便可查看正确的结果。 此功能并非仅限于符号，可让您搜索引号内的完整短语，如 `"return [] unless"`。 此功能适用于所有语言的代码搜索。

### 相关性

对于语言的子集（Go、JavaScript、Python、Ruby 和 TypeScript），代码搜索现在可调节声明的相关性。 方法、函数、类或其他实体的声明将在包含相同搜索词的调用或注释之前返回。

### 跳至导航

对于语言的子集（Go、JavaScript、Python、Ruby 和 TypeScript），GitHub 现在支持单击符号时的其他信息和导航。 此导航包括跳至仓库内资源的定义导航，从而能够更快地导航和提高洞察力。

### 反馈

当前选择采用代码搜索和导航专用测试版的所有用户均可通过进行[此调查](https://www.research.net/r/CodeSearch-Navigation)提供反馈。 有关其他反馈和问题，请发送电子邮件至 search-beta@github.com。

### 延伸阅读
- [关于在 GitHub 上搜索](/articles/about-searching-on-github/)
- [在拉取请求中查找已更改的方法和函数](/articles/finding-changed-methods-and-functions-in-a-pull-request/)
