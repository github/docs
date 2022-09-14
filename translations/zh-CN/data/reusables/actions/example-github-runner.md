---
ms.openlocfilehash: 714bd89ad6e55900871cc7622d922495b8c09a9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145098495"
---
### 在其他操作系统上运行

入门工作流使用 {% data variables.product.prodname_dotcom %} 托管的 `ubuntu-latest` 运行器将作业配置为在 Linux 上运行。 可以更改 `runs-on` 键以在不同的操作系统上运行作业。 例如，您可以使用 {% data variables.product.prodname_dotcom %} 托管的 Windows 运行器。

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

或者，您可以在 {% data variables.product.prodname_dotcom %} 托管的 macOS 运行器上运行。

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

您还可以在 Docker 容器中运行作业，或者提供在自己的基础架构上运行的自托管运行器。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)”。
