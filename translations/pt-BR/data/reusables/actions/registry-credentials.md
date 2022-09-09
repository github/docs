---
ms.openlocfilehash: 35dfd476fcffeaf23740ff0513b2675390f9a76f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065391"
---
Se o registro de contêiner da imagem exigir autenticação para efetuar pull da imagem, use `jobs.<job_id>.container.credentials` para definir um `map` do `username` e da `password`. As credenciais são os mesmos valores que você fornecerá ao comando [`docker login`](https://docs.docker.com/engine/reference/commandline/login/).
