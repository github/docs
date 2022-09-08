---
ms.openlocfilehash: 6f16454fbe327c50b0f9666022d3f822ec285d88
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146332238"
---
1. 若要将失败的节点标记为脱机，请在任何节点上修改相关节点部分中的[群集配置文件](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file) (`cluster.conf`)，使其包含文本 `offline = true`。

  例如，此修改的 `cluster.conf` 将 `ghe-data-node-3` 节点标记为脱机：

    <pre>
    [cluster "ghe-data-node-3"]
    hostname = ghe-data-node-3
    <em>offline = true</em>
    ipv4 = 192.168.0.6
    # ipv6 = fd12:3456:789a:1::6
    </pre>
