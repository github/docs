---
ms.openlocfilehash: 35dfd476fcffeaf23740ff0513b2675390f9a76f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065901"
---
如果映像的容器注册表需要身份验证才能拉取映像，可以使用 `jobs.<job_id>.container.credentials` 设置 `username` 和 `password` 的 `map`。 凭据是你将提供给 [`docker login`](https://docs.docker.com/engine/reference/commandline/login/) 命令的相同值。
