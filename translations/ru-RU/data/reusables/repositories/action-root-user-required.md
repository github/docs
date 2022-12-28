---
ms.openlocfilehash: 81695036af856b526d3d9483e36b36a06a85b7ee
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145118392"
---
**Примечание**. {% data variables.product.prodname_actions %} должен выполнять пользователь Docker по умолчанию (root). Убедитесь, что в файле Dockerfile не задана инструкция `USER`, иначе вы не сможете получить доступ к `GITHUB_WORKSPACE`.
