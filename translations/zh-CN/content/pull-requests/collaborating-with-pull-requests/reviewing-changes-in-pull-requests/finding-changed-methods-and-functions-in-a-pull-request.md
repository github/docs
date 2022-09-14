---
title: 在拉取请求中查找已更改的方法和函数
intro: '可以快速查找拉取请求中提议的对 .go、.js、.ts、.py、.php、和 .rb 文件中的方法或函数的更改。     '
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Methods & functions
ms.openlocfilehash: be891fe01166ee0eccf9ba7c824a1017c9d8fc11
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129990'
---
对仓库有读取权限的任何人都可以查看拉取请求的某些文件中函数和方法更改的摘要列表。

方法和函数的摘要列表是从这些受支持的文件类型创建的：
  - Go
  - JavaScript（包括 Typescript、Flow 及其他类型的 JavaScript）
  - PHP
  - Python
  - Ruby

{% data reusables.repositories.sidebar-pr %}
2. 在拉取请求列表中，单击要在其中查找已更改函数和方法的拉取请求。
{% data reusables.repositories.changed-files %}
4. 要查看已更改函数和方法的摘要列表，请单击“跳转到...”。![“跳转到”下拉菜单](/assets/images/help/pull_requests/jump-to-menu.png)
5. 从下拉菜单中选择已更改的函数或方法。 也可以输入函数或方法的名称以过滤结果。
  ![筛选函数和方法](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 注意：如果没有看到预期的函数或方法，请确认代码已编译且不含错误。 只有在此拉请求中更改的函数和方法以及“.go”、“.js”、“.ts”、“.py”、“.php”和“.rb”文件中的函数和方法才会显示在下拉菜单中     。

 {% endnote %}

6. 您将被重定向到所选函数或方法的第一行。
 ![查看文件中已更改的函数或方法](/assets/images/help/pull_requests/view-selected-function-or-method.png)

## 延伸阅读

- [关于比较拉取请求中的分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)
- [按文件类型筛选拉取请求中的文件](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)
