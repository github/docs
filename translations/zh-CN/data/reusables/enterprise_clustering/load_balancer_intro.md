---
ms.openlocfilehash: b9aa2cbac3e32319aac7d2b7ef53422f53125643
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145097851"
---
负载均衡器设计使用网络设备将 Git 和 HTTP 流量引导至各个 {% data variables.product.prodname_ghe_server %} 设备。 您可以使用负载均衡器限制引导至设备的流量以确保安全，或者在没有 DNS 记录更改的情况下根据需要重定向流量。 我们强烈建议使用支持 PROXY 协议的基于 TCP 负载均衡器。
