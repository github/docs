---
ms.openlocfilehash: 4c39c079fb88a8a1b86ed9359ebe55be268389bb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145094485"
---
Se você especificar tipos de atividade ou filtros para um evento e seu fluxo de trabalho for acionado em vários eventos, você deverá configurar cada evento separadamente. Você deve acrescentar dois-pontos (`:`) a todos os eventos, incluindo eventos sem configuração.

Por exemplo, um fluxo de trabalho com o seguinte valor `on` será executado quando:

- Uma etiqueta foi criada
- Um push for feito para o branch `main` no repositório
- Um push é feito para um branch habilitado para {% data variables.product.prodname_pages %}

```yaml
on:
  label:
    types:
      - created
  push:
    branches:
      - main
  page_build:
```
