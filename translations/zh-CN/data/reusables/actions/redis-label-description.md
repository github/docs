---
ms.openlocfilehash: 662ae539ae3cfdb6446d31664da325a9a67e9a26
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065904"
---
工作流用 `redis` 标签配置服务容器。 所有服务必须在容器中运行，因此每项服务都需要指定容器 `image`。 此示例使用 `redis` 容器映像，并包括状态检查选项以确保服务正在运行。 有关详细信息，请参阅 Docker Hub 上的 [redis 映像](https://hub.docker.com/_/redis)。
