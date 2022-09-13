---
title: 配置 Git 处理行结束符
intro: 为避免差异中出现问题，可配置 Git 正常处理行标题。
redirect_from:
  - /dealing-with-lineendings
  - /line-endings
  - /articles/dealing-with-line-endings
  - /articles/configuring-git-to-handle-line-endings
  - /github/using-git/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/getting-started-with-git/configuring-git-to-handle-line-endings
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Handle line endings
ms.openlocfilehash: 4aa89f244e45da6905d6d5348c84faf8d5e6418c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884203'
---
## 关于行结尾
每次按键盘上的 return 时，会插入一个称为行结束符的不可见字符<kbd></kbd>。 不同的操作系统处理行结束符的方式不同。

在使用 Git 和 {% data variables.product.product_name %} 协作处理项目时，Git 可能产生意外结果，例如，您在 Windows 计算机上操作，而您的协作者是在 macOS 中做的更改。

您可以将 Git 配置为自动处理行结束符，以便与使用不同操作系统的人员有效地协作。

## 行结束符的全局设置

`git config core.autocrlf` 命令用于更改 Git 处理行尾的方式。 它将采用单一参数。

{% mac %}

在 macOS 上，只需将 `input` 传递给配置即可。 例如：

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for macOS
```

{% endmac %}

{% windows %}

在 Windows 上，只需将 `true` 传递给配置即可。 例如：

```shell
$ git config --global core.autocrlf true
# Configure Git to ensure line endings in files you checkout are correct for Windows.
# For compatibility, line endings are converted to Unix style when you commit files.
```

{% endwindows %}

{% linux %}

在 Linux 上，只需将 `input` 传递给配置即可。 例如：

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for Linux
```

{% endlinux %}

## 按仓库设置

你可以选择配置“.gitattribute”文件来管理 Git 读取特定存储库中的行结束符的方式。 将此文件提交到存储库时，它将覆盖所有存储库贡献者的 `core.autocrlf` 设置。 这可确保所有用户的行为一致，而不管其 Git 设置和环境如何。

“.gitattributes”文件必须在存储库的根目录下创建，且像任何其他文件一样提交。

“.gitattributes”文件看上去像一个两列表格：

* 左侧是 Git 要匹配的文件名。
* 右侧是 Git 应对这些文件使用的行结束符配置。

### 示例

下面是一个“.gitattributes”示例文件。 您可以将其用作仓库的模板：

```
# Set the default behavior, in case people don't have core.autocrlf set.
* text=auto

# Explicitly declare text files you want to always be normalized and converted
# to native line endings on checkout.
*.c text
*.h text

# Declare files that will always have CRLF line endings on checkout.
*.sln text eol=crlf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```

你会注意到，文件是匹配的，即 `*.c`、`*.sln`、`*.png`（用空格分隔），然后给定一个设置，即 `text`、`text eol=crlf`、`binary`。 我们将在下面介绍一些可能的设置。

- `text=auto` Git 将以其认为的最佳方式处理文件。 这是一个合适的默认选项。

- 在检出时 `text eol=crlf` Git 将始终把行结束符转换为 `CRLF`。 你应将其用于必须保持 `CRLF` 结束符的文件，即使在 OSX 或 Linux 上。

- 在检出时 `text eol=lf` Git 将始终把行结束符转换为 `LF`。 您应将其用于必须保持 LF 结束符的文件，即使在 Windows 上。

- `binary` Git 会理解指定文件不是文本，并且不应尝试更改这些文件。 该 `binary` 设置也是 `-text -diff` 的别名。

## 在更改行结束符后刷新仓库

设置 `core.autocrlf` 选项或提交“.gitattributes”文件后，你可能会发现 Git 会报告未修改的文件发生更改。 Git 更改了行结束符，以匹配您的新配置。

为确保存储库中的所有行结束符与新配置匹配，请使用 Git 备份文件，删除存储库中的所有文件（`.git` 目录除外），然后一次性恢复所有文件。

1. 在 Git 中保存当前文件，以便不会丢失任何工作。
  ```shell
  $ git add . -u
  $ git commit -m "Saving files before refreshing line endings"
  ```
2. 添加回所有已更改的文件，然后标准化行结束符。
  ```shell
  $ git add --renormalize .
  ```
3. 显示已重写的标准化文件。
  ```shell
  $ git status
  ```
4. 将更改提交到仓库。
  ```shell
  $ git commit -m "Normalize all the line endings"
  ```

## 延伸阅读

- Pro Git 书籍中的[自定义 Git - Git 属性](https://git-scm.com/book/en/Customizing-Git-Git-Attributes)
- Git 的手册页中的 [git-config](https://git-scm.com/docs/git-config)
- Pro Git 书籍中的[入门 - 首次 Git 设置](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup)
- 由 [Tim Clem](https://github.com/tclem) 编写的[注意行结尾](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/)
