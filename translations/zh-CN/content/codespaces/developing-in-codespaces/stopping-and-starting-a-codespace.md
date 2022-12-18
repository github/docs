---
title: 停止和启动 codespace
intro: 可停止和启动 codespace 以保存资源和暂停工作。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Stop a codespace
ms.openlocfilehash: 5c34fd5b7d72f52e203cd8f8fdc1871ff6a2f014
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188246'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## 关于停止和启动 codespace

{% data reusables.codespaces.stopping-a-codespace %}

无论在何处创建或访问 codespace，都可以通过浏览器在 https://github.com/codespaces 中查看和管理它们。 

## 停止代码空间

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
 1. 单击要停止的 codespace 右侧的省略号 (...)。
 1. 单击“停止 codespace”。
   ![用于停止 codespace 的选项的屏幕截图](/assets/images/help/codespaces/stop-codespace-webui.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

 要停止 codespace，请使用 `gh codespace stop` 子命令，然后从显示的列表中选择该 codespace。

 ```shell{:copy}
 gh codespace stop
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. 键入 `stop` 并从选项列表中选择“Codespaces: 停止 Codespace”。
1. 在 codespace 列表中，选择要停止的 codespace。

{% endvscode %}

{% jetbrains %}

可以从“你的 codespace”页面停止 codespace（查看 [Web 浏览器说明](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace?tool=webui#stopping-a-codespace)）或使用 {% data variables.product.prodname_cli %}（查看 [CLI 说明](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace?tool=cli#stopping-a-codespace)）。

{% endjetbrains %}

## 重启 codespace

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
1. 单击要重启的 codespace 的名称。
![已停止的 codespace 的屏幕截图](/assets/images/help/codespaces/restart-codespace-webui.png)

{% endwebui %}

{% cli %}

重启 codespace 时，可选择在 {% data variables.product.prodname_vscode %} 或浏览器中将其打开。 

 - 要重启 codespace 并在 {% data variables.product.prodname_vscode %} 中将其打开，请使用 `gh codespace code` 子命令，然后从显示的列表中选择要重启的 codespace。

 ```shell{:copy} 
 gh codespace code
 ```

 - 要重启 codespace 并在浏览器中将其打开，请使用 `gh codespace open --web` 子命令，然后从显示的列表中选择要重启的 codespace。

 ```shell{:copy}
 gh codespace open --web
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. 键入 `connect` 并从选项列表中选择“Codespaces: 连接到 Codespace”。
1. 在 codespace 列表中，选择要重启的 codespace。

{% endvscode %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}

## 延伸阅读

- [codespace 生命周期](/codespaces/getting-started/the-codespace-lifecycle)
