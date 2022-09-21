---
ms.openlocfilehash: 35dfd476fcffeaf23740ff0513b2675390f9a76f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065901"
---
如果映像的容器注册表需要身份验证才能拉取映像，可以使用 `jobs.<job_id>.container.credentials` 设置 `username` 和 `password` 的 `map`。 凭据是你将提供给 [`docker login`](https://docs.docker.com/engine/reference/commandline/login/) 命令的相同值。
