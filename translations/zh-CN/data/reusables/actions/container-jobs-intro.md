---
ms.openlocfilehash: 8acbacc0b39b108fdd05473ceb85e65bfe0e92d0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145099146"
---
配置要在容器中运行的作业可简化作业与服务容器之间的网络配置。 同一用户定义的桥接网络上的 Docker 容器互相显示所有端口，因此您无需将任何服务容器端口映射到 Docker 主机。 您可以使用工作流程中配置的标签从作业容器访问服务容器。
