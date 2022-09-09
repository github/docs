---
ms.openlocfilehash: 67ef84929e93a9f0fa1acc99e2035b2d62cb1574
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065911"
---
工作流用 `postgres` 标签配置服务容器。 所有服务必须在容器中运行，因此每项服务都需要指定容器 `image`。 此示例使用 `postgres` 容器映像，提供默认的 PostgreSQL 密码，并包括状态检查选项以确保服务正在运行。 有关详细信息，请参阅 Docker Hub 上的 [postgres 映像](https://hub.docker.com/_/postgres)。
