---
title: 排查 GitHub Codespaces 的 GPG 验证问题
shortTitle: GPG verification
intro: 本文提供在 codespace 中对提交进行签名的相关错误的故障排除建议。
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: f3a6537d1ee9087803054347689591c2b217e42e
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167111'
---
如果启用 GPG 验证，{% data variables.product.prodname_github_codespaces %} 会自动在从所选存储库创建的 codespace 中对提交进行签名。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的 GPG 验证](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)”。

{% data reusables.codespaces.gpg-in-active-codespaces %}

如果 {% data variables.product.prodname_github_codespaces %} 未能对提交进行签名，你可能会看到如下所示的错误。

```Shell
$ git commit -m 'Initial commit'
error: gpg failed to sign the data
fatal: failed to write commit object
```

在以下情况下，你可能会遇到此错误： 

- 你已禁用 GPG 验证，并且正在尝试在现有 codespace 中进行常规的未签名提交。
- 你已启用 GPG 验证，但重写了 {% data variables.product.prodname_github_codespaces %} 对提交进行签名所需的 Git 配置，例如，将 {% data variables.product.prodname_github_codespaces %} 链接到包含 Git 配置文件的点文件存储库。

## 禁用 GPG 验证后的错误

启用 GPG 验证后，{% data variables.product.prodname_github_codespaces %} 默认对你在 codespace 中所做的所有提交进行签名。 它执行此操作的方法是将 `commit.gpgsign` Git 配置值设置为 `true`。

如果已禁用 GPG 验证，并且正在使用现有 codespace，则此值仍将设置为 `true`。 这意味着 {% data variables.product.prodname_github_codespaces %} 将尝试对提交进行签名，但无法这样做，因为你已禁用 GPG 验证设置。

要在 codespace 中继续进行常规的未签名提交，请在终端中输入以下命令将 `commit.gpgsign` 重置为默认值 `false`。

```Shell{:copy}
git config --unset commit.gpgsign
```

要检查是否已从配置中正确删除该值，可输入 `git config --list`。 列表中不应出现 `commit.gpgsign` 的值。

## 冲突的配置引发的错误

要自动对提交进行签名，{% data variables.product.prodname_github_codespaces %} 会在 codespace 中设置某些 Git 配置值。 如果重写 {% data variables.product.prodname_github_codespaces %} 设置的值，则可能无法对提交进行签名。 

如果已将 {% data variables.product.prodname_github_codespaces %} 链接到包含 Git 配置文件的点文件存储库，则可能无意中重写了这些值。 有关将点文件与 {% data variables.product.prodname_github_codespaces %} 配合使用的详细信息，请参阅“[为帐户设置个性化的 {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)”。

### 检查是否存在冲突的配置

要使用 GPG 对提交进行签名，{% data variables.product.prodname_github_codespaces %} 会自动在系统级别设置以下 Git 配置值。

| 配置设置 | 所需的值 |
| --------------------- | -------------- |
| `user.name` | 必须与 {% data variables.product.prodname_dotcom %} 配置文件上设置的全名匹配 |
| `credential.helper` | 必须设置为 `/.codespaces/bin/gitcredential_github.sh` |
| `gpg.program` | 必须设置为 `/.codespaces/bin/gh-gpgsign` |

要检查是否在 codespace 中正确设置了这些值，可使用 `git config --list --show-origin` 命令。 由于 {% data variables.product.prodname_github_codespaces %} 在系统级别设置此配置，因此所需的配置设置应来自 `/usr/local/etc/gitconfig`。

```Shell
$ git config --list --show-origin
file:/usr/local/etc/gitconfig   credential.helper=/.codespaces/bin/gitcredential_github.sh
file:/usr/local/etc/gitconfig   user.name=Mona Lisa
file:/usr/local/etc/gitconfig   gpg.program=/.codespaces/bin/gh-gpgsign
```

除了上面列出的值之外，如果 codespace 中使用的点文件包含以下任何值，你可能会遇到错误。

- `user.signingkey` Git 配置值
- `commit.gpgsign` Git 配置值
- 手动设置的 `GITHUB_TOKEN`

### 删除冲突的配置

如果要为 {% data variables.product.prodname_github_codespaces %} 启用自动 GPG 验证，则需要从 codespace 中使用的点文件中删除所有冲突的配置。

例如，如果本地计算机上的全局 `.gitconfig` 文件包含 `gpg.program` 值，并且你已将此文件推送到与 {% data variables.product.prodname_github_codespaces %} 链接的点文件存储库，则可能需要从此文件中删除 `gpg.program`，并改为在本地计算机上的系统级别对其进行设置。

{% note %}

注意：对点文件存储库所做的任何更改都将应用于你创建的新 codespace，但不会应用于现有的 codespace。

{% endnote %}

1. 在本地计算机上打开终端。
2. 要从 `~/.gitconfig` (Mac/Linux) 或 `C:\Users\YOUR-USER\.gitconfig` (Windows) 中删除冲突的值，请使用 `git config --global --unset` 命令。

   ```Shell
   $ git config --global --unset gpg.program
   ```
3. 将更改推送到 {% data variables.product.prodname_dotcom %} 上的点文件存储库。
4. （可选）要保留本地配置，可以在 Git 配置文件中再次设置该值，但不将此设置推送到点文件存储库。 

   例如，可使用 `--system` 标志在 `PATH/etc/gitconfig` 中的系统级文件中设置配置，其中 `PATH` 是在系统上安装 Git 的目录。
   
   ```Shell
   $ git config --system gpg.program gpg2
   ```

或者，如果点文件存储库在识别的文件（如 `install.sh`）中包含安装脚本，你可使用 `$CODESPACES` 环境变量添加条件逻辑，例如仅当你不在 codespace 中时设置 `gpg.program`。 在下面的示例中，如果你不在 codespace 中，`-z "$CODESPACES"` 返回 `true`。

```Shell{:copy}
if [ -z "$CODESPACES" ]; then
  git config --global gpg.program gpg2
fi
```

## 延伸阅读
- “[关于提交签名验证](/authentication/managing-commit-signature-verification/about-commit-signature-verification)”
- 官方 Git 文档中的 [`git config`](https://git-scm.com/docs/git-config)
