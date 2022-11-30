---
ms.openlocfilehash: 35dfd476fcffeaf23740ff0513b2675390f9a76f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065391"
---
Se o registro de contêiner da imagem exigir autenticação para efetuar pull da imagem, use `jobs.<job_id>.container.credentials` para definir um `map` do `username` e da `password`. As credenciais são os mesmos valores que você fornecerá ao comando [`docker login`](https://docs.docker.com/engine/reference/commandline/login/).
