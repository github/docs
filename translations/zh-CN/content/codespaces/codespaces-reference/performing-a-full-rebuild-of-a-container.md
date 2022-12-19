---
title: 完全重新生成容器
intro: 如果磁盘空间不足，或者想要确保开发容器配置在新 codespace 中正常工作，则可以完全重新生成容器。
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Full rebuilds
ms.openlocfilehash: f844d5f92073adf01c3b1a1100e6fe1912b2d7ad
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180835'
---
## 关于重新生成容器

在 codespace 中操作时，开发环境是在虚拟机上运行的 Docker 容器。 如果你从 codespace 中更改开发容器配置，并且想要将这些更改应用到当前 codespace，则需要重新生成容器。

默认情况下，重新生成容器时，{% data variables.product.prodname_github_codespaces %} 将通过重用先前生成的容器中的缓存映像来加快生成过程。 这通常是实现对开发容器配置的更改的最快方法，原因如下。
- {% data variables.product.prodname_github_codespaces %} 可以重复使用缓存中的映像，而不是从容器注册表中重新拉取。
- 定义容器生成方式的开发容器配置部分（如开发容器功能和 Dockerfile 指令）可能已在缓存的映像层中实现，因此无需等待这些进程再次运行。 （但是，配置中生成容器后运行的命令(如 `onCreateCommand`)将再次运行。）

有时，可能需要完全重新生成容器。 完全重新生成后，{% data variables.product.prodname_github_codespaces %} 会清理缓存中的所有 Docker 容器、映像和卷，然后使用新拉取的映像重新生成容器。 配置中定义的所有设置都将再次运行，生成新的映像层。 在以下情况下，可能需要在多次使用缓存映像重新生成容器之后执行完全重新生成。

- 你需要确保配置中定义的设置不依赖于缓存的映像，并且在有人基于配置创建新的 codespace 时根据需要运行。 例如，依赖关系可能已从基础映像中删除，因为它上次被拉取到 codespace。
- 你希望释放缓存使用的磁盘空间，例如，磁盘空间不足或想要最大程度减少存储费用的情况。 如果多次更改基础映像、对配置进行大量迭代更改或者使用 Docker Compose 运行多个容器，则映像缓存可能会占用大量磁盘空间。

## 执行完全重新生成

可以在 {% data variables.product.prodname_vscode %} 中执行完全重新生成。

{% data reusables.codespaces.command-pallette %}
1. 开始键入“Rebuild”，然后选择“Codespaces: Full Rebuild Container”。

   ![命令面板中“Full Rebuild Container”命令的屏幕截图](/assets/images/help/codespaces/codespaces-rebuild-full.png)

## 在完全重新生成后持久保存数据

codespace 的 `/workspaces` 目录中包含的任何文件和文件夹始终在重新生成后持久保存。 无需更改任何设置或添加任何配置，即可在完全重新生成后保留此目录的内容。

如果要在完全重新生成后保留 `/workspaces` 目录之外的文件，则可以在容器中的所需位置创建指向持久性目录的符号链接 (symlink)。 例如，在 `/workspaces/.devcontainer` 目录中，可以创建在重新生成过程中会保留的 `config` 目录。 然后，可将 `config` 目录及其内容作为 `postCreateCommand` 在 `devcontainer.json` 文件进行符号链接。

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

在下面的示例 `postCreate.sh` 文件中，`config` 目录的内容以符号链接到主目录。

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## 延伸阅读
- [开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)
