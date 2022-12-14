---
title: Codespaces 的灾难恢复
intro: 本文描述了当整个地区因重大自然灾害或大范围服务中断而中断时，灾难恢复情景的指导。
versions:
  fpt: '*'
  ghec: '*'
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
shortTitle: Disaster recovery
ms.openlocfilehash: d33c9e5f1af8775ae5f8f097ba3911edd348dd1a
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149346"
---
我们努力确保您始终能够使用 {% data variables.product.prodname_codespaces %}。 但是，超出我们控制范围的力量有时会以导致计划外服务中断的方式影响服务。

虽然灾难恢复情况很少发生，但我们建议您为整个区域出现中断的可能性做好准备。 如果整个区域遇到服务中断，则数据的本地冗余副本将暂时不可用。

以下指南提供了如何处理部署代码空间的整个区域的服务中断的选项。

{% note %}

注意：可以通过频繁推送到远程存储库来减少服务中断的潜在影响。

{% endnote %}

## <a name="option-1-create-a-new-codespace-in-another-region"></a>选项 1：在另一个区域中创建新的代码空间

如果发生区域性断电，我们建议您在未受影响的区域中重新创建代码空间以继续工作。 此新代码将包含您上次推送到 {% data variables.product.prodname_dotcom %} 后的所有更改。 有关手动设置另一个区域的信息，请参阅“[为 Codespaces 设置默认区域](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)”。

你可以通过在项目存储库中配置 `devcontainer.json` 来优化恢复时间，这样可定义工具、运行时间、框架、编辑器设置、扩展以及其他自动恢复开发环境所需的配置。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)”。

## <a name="option-2-wait-for-recovery"></a>选项 2：等待恢复

在此情况下，不需要采取任何操作。 但要知道，我们正在努力还原服务的可用性。 

你可以在[状态仪表板](https://www.githubstatus.com/)上查看当前服务状态。

## <a name="option-3-clone-the-repository-locally-or-edit-in-the-browser"></a>选项 3：本地克隆存储库或在浏览器中编辑

虽然 {% data variables.product.prodname_codespaces %} 具有预配置的开发者环境的优点，但您的源代码应该始终可以通过 {% data variables.product.prodname_dotcom_the_website %} 托管的仓库访问。 如果发生 {% data variables.product.prodname_codespaces %} 中断，您仍然可以本地克隆存储库或在 {% data variables.product.company_short %} 浏览器编辑器中编辑文件。 有关详细信息，请参阅“[编辑文件](/repositories/working-with-files/managing-files/editing-files)”。

虽然此选项没有为您配置开发环境， 但它允许您在等待服务中断解决时根据需要更改源代码。

## <a name="option-4-use-remote-containers-and-docker-for-a-local-containerized-environment"></a>选项 4：对本地容器化环境使用远程容器和 Docker

如果存储库具有 `devcontainer.json`，请考虑在 {% data variables.product.prodname_vscode %} 中使用[远程容器扩展](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume)构建并连接到存储库的本地开发容器。 此选项的设置时间将因您本地规格和开发容器设置的复杂性而异。

{% note %}

注意：在尝试使用此选项之前，请确保本地设置满足[最低要求](https://code.visualstudio.com/docs/remote/containers#_system-requirements)。

{% endnote %}
