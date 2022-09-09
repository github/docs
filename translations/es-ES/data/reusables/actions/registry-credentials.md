---
ms.openlocfilehash: 35dfd476fcffeaf23740ff0513b2675390f9a76f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145069507"
---
Si el registro de contenedor de la imagen necesita la autenticación para extraer la imagen, puede usar `jobs.<job_id>.container.credentials` para establecer un valor `map` de `username` y `password`. Las credenciales son los mismos valores que se proporcionarían al comando [`docker login`](https://docs.docker.com/engine/reference/commandline/login/).
