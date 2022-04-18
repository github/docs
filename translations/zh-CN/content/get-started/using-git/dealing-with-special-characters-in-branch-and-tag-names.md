---
title: 处理分支和标记名称中的特殊字符
intro: 对于在分支和标签名称中允许的字符，Git 的支持非常宽泛。 从命令行 shell 使用 Git 时，可能需要对特殊字符进行转义或引用。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 名称中的特殊字符
---

## 关于分支和标记名称

大多数存储库使用简单的分支名称，例如 `main` 或 `update-icons`。 标记名称通常也遵循基本格式，例如版本号，如 `v1.2.3`。 分支名称和标记名称也可以使用路径分隔符 (`/`) 来构造，例如 `area/item` 或 `level-1/level-2/level-3`。 除了一些例外，例如名称不以斜杠开头或结尾，或者在名称中有连续斜杠，Git 对分支和标记名称中可以使用的字符几乎没有限制。 更多信息请参阅 Git 文档中的“[git-check-ref-format](https://git-scm.com/docs/git-check-ref-format)”。

## 为什么需要对特殊字符进行转义

使用 CLI 时，您可能会遇到分支或标记名称包含对 shell 环境具有特殊含义的特殊字符的情况。 要在 Git 命令中安全地使用这些字符，必须用引号或转义它们，否则该命令可能会产生意外效果。

例如， `$` 字符被许多 shell 用来引用变量。 大多数 shell 会将有效的分支名称（如 `hello-$USER` ）解释为等效于单词“hello”，后跟连字符，后跟 `USER` 变量的当前值，而不是 `hello-$USER` 的文字字符串。 如果分支名称包含 `$` 字符，则必须阻止 shell 将其扩展为变量引用。 类似地，如果分支名称包含分号 (`;`)，大多数 shell 将其解释为命令分隔符，因此需要用引号或转义。

## 如何对分支和标记名称中的特殊字符进行转义

大多数带有特殊字符的分支和标记名称都可以通过在单引号中包含名称来处理，例如 `"hello-$USER"`。

* 在 [Bash](https://www.gnu.org/software/bash/) shell 中，将字符串括在单引号中将保留单引号内字符的文字值。
* [Zsh](https://www.zsh.org/) 的行为与 Bash 类似，但可以使用 `RC_QUOTES` 选项配置此行为。
* [PowerShell](https://microsoft.com/powershell) 在单引号内时也会按字面意思处理字符。

对于这些 shell，主要的例外是分支或标记名称本身包含单个引号。 在这种情况下，您应该查阅 shell 的官方文档：

* [Bash 文档](https://www.gnu.org/software/bash/manual/)
* [Zsh 文档](https://zsh.sourceforge.io/Doc/)
* [Fish 文档](https://fishshell.com/docs/current/)
* [PowerShell 文档](https://docs.microsoft.com/en-gb/powershell/)

## 命名分支和标记

如果可能，请创建不包含特殊字符的分支和标记名称，因为这些字符需要转义。 用于分支名称和标记名称的安全默认字符集为：

* 英文字母（`a` 到 `z` 和 `A` 到 `Z`）
* 数字（`0` 到 `9`）
* 有限的标点字符集：
  * 句点 (`.`)
  * 连字符 (`-`)
  * 下划线 (`_`)
  * 正斜杠 (`/`)

为避免混淆，分支名称应以字母开头。
