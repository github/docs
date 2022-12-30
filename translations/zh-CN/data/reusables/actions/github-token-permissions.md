---
ms.openlocfilehash: dcca3d0170e92663336865f43ddc4e7ac5204702
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147060312"
---
每当工作流中的作业开始时，`GITHUB_TOKEN` 机密都会设置为存储库的访问令牌。 应在工作流文件中设置此访问令牌的权限，以授予 `contents` 范围的读取访问权限，并授予 `packages` 范围的写入访问权限。 有关详细信息，请参阅“[使用 GITHUB_TOKEN 进行身份验证](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)。”
