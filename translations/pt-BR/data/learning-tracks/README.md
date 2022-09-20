---
ms.openlocfilehash: dcc6cf1e8adf15c4997d4d62cd34bde99f7d37cd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145093229"
---
# Trilhos de aprendizado (também conhecido como caminhos de aprendizado)

Os trilhos de aprendizado são uma coleção de artigos que ajudam você a dominar um assunto específico. Os caminhos de aprendizado são definidos por produto. Por exemplo, veja https://docs.github.com/en/actions/guides.

## Como ele funciona

Os dados do caminho de aprendizagem para um produto são definidos em dois lugares:

1. Uma simples matriz de nomes de faixas de aprendizagem está definida nos guias de indexação da página inicial.

    Por exemplo, em `content/actions/guides/index.md`:
    ```
    learningTracks:
      - getting_started
      - continuous_integration
      - continuous_deployment
      - deploy_to_the_cloud
      - hosting_your_own_runners
      - create_actions
    ```

2. Dados adicionais para cada faixa são definidos em um arquivo YAML nomeado para o **produto** no diretório `data`.

    Por exemplo, em `data/learning-tracks/actions.yml`, cada um dos itens da matriz `learningTracks` do arquivo de conteúdo é representado com alguns dados adicionais, como `title`, `description` e uma matriz de links `guides`.

    Uma faixa de aprendizado neste YAML **por versão** precisa ser designada como uma faixa de aprendizagem "em destaque" por meio de `featured_track: true`, o que a definirá para ser exibida na parte superior da página das guias do produto. Um teste falhará se esta propriedade estiver ausente.

    A propriedade `featured_track` pode ser um booliano simples (ou seja, `featured_track: true`) ou pode ser uma cadeia de caracteres que inclui instruções de controle de versão (por exemplo, `featured_track: '{% ifversion fpt %}true{% else %}false{% endif %}'`). Se você usar o controle de versão, terá várias `featured_track`s por arquivo YML, mas garanta que apenas uma será renderizada em cada versão compatível no momento. Um teste irá falhar se houver mais ou menos do que um link em destaque para cada versão.

## Controle de versão

O versionamento para faixas de aprendizagem é processado na página tempo de interpretação. O código está localizado em [`lib/learning-tracks.js`](lib/learning-tracks.js), que é chamado por `page.render()`. As faixas de aprendizagem processadas são renderizadas por `components/guides`.

Os condicionais do Liquid **não** precisam ser usados para controle de versão no arquivo YAML para guias. Apenas os guias do caminho de aprendizagem que se aplicam à versão atual serão processados automaticamente. Se não houver nenhuma faixa com guias que pertençam à versão atual, a seção de faixas de aprendizado não será interpretada.

versionamento explícito dentro das faixas de aprendizado de um produto YML também é compatível. O formato e os valores permitidos são os mesmos da [propriedade de versões de frontmatter](/content#versions).

Por exemplo:

```
learning_track_name:
  title: 'Learning track title'
  description: 'Learning track description'
  featured_track: true
  versions:
    ghes: '>=3.0'
  guides:
   - /path/to/guide1
   - /path/to/guide2
```

Se a propriedade `versions` não está incluída, supõe-se que a faixa esteja disponível em todas as versões.

## Imposição de esquema

O esquema usado para validar o YAML da faixa de aprendizagem está localizado em [`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) e é exercido por [`tests/content/lint-files.js`](tests/content/lint-files.js).
