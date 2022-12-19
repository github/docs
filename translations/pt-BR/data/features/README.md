---
ms.openlocfilehash: 3e44864fd82617c799cc4af8a3ab31b9279ed950
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147875695"
---
## Versionamento baseado em funcionalidade

O versionamento baseado em recursos nos permite definir e controlar as versões de um "recurso" nomeado arbitrariamente em um só lugar.

**Observação**: não exclua o `data/features/placeholder.yml` porque ele é usado por testes.

## Como ele funciona

Adicione um novo arquivo YAML com o nome da funcionalidade que deseja usar neste diretório. Para um recurso chamado `meow`, isso seria `data/features/meow.yml`.

Adicione um bloco `versions` ao arquivo YML com os nomes curtos das versões em que o recurso está disponível. Por exemplo:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: '*'
```

O formato e os valores permitidos são os mesmos da [propriedade de versões de frontmatter](/content#versions).

### Condicionais de Liquid

Agora você pode usar o `{% ifversion meow %} ... {% endif %}` em arquivos de conteúdo!

### Frontmatter

Você também pode usar o recurso no frontmatter em arquivos de conteúdo:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: 'meow'
```

Não é possível usar `feature:` para especificar várias versões simultâneas, pois não há suporte para isso. Como alternativa, é possível criar um arquivo de controle de versão baseado em recurso com o controle de versão necessário.

## Imposição de esquema

O esquema para validar o controle de versão do recurso reside no [`tests/helpers/schemas/feature-versions-schema.js`](/tests/helpers/schemas/feature-versions-schema.js) e é exercido por [`tests/linting/lint-versioning.js`](/tests/linting/lint-versioning.js).

## Script para remover tags de recursos

TBD!
