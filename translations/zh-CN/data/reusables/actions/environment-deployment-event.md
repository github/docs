---
ms.openlocfilehash: 5a6618e9b13483c7d3c647a8cb5d635225e59280
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098497"
---
当引用环境的工作流作业运行时，它将创建一个部署对象并将 `environment` 属性设置为环境名称。 随着工作流的进行，它还将创建部署状态对象，并将 `environment` 属性设置为环境名称，将 `environment_url` 属性设置为环境的 URL（如果在工作流中指定），以及将 `state` 属性设置为作业的状态。
