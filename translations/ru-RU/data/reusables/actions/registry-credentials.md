---
ms.openlocfilehash: 35dfd476fcffeaf23740ff0513b2675390f9a76f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069508"
---
Если реестру контейнеров образа требуется проверка подлинности для извлечения образа, можно использовать `jobs.<job_id>.container.credentials`, чтобы настроить `map` для `username` и `password`. Учетные данные являются теми же значениями, которые будут предоставлены команде [`docker login`](https://docs.docker.com/engine/reference/commandline/login/).
