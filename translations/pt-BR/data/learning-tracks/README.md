# Trilhos de aprendizado (também conhecido como caminhos de aprendizado)

Os trilhos de aprendizado são uma coleção de artigos que ajudam você a dominar um assunto específico. Os caminhos de aprendizado são definidos por produto. Por exemplo, consulte https://docs.github.com/en/actions/guides.

## Como funciona

Os dados do caminho de aprendizagem para um produto são definidos em dois lugares:

1. Uma simples matriz de nomes de faixas de aprendizagem é definida na página inicial do produto na primeira página.

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

2. Dados adicionais para cada faixa são definidos em um arquivo YAML nomeado para o</strong> produto ** no diretório de</code> dados`.</p>

<p spaces-before="4">Por exemplo, em <code>data/learning-tracks/actions.yml`, cada um dos itens da matriz do arquivo de conteúdo `learningTracks` é representado com dados adicionais como `título`, `descrição`e uma matriz de links `guias`.</p>

    Uma faixa de aprendizagem neste YAML **por versão** deve ser designada como uma faixa de aprendizagem "destacada" via `featured_track: true`, que será configurada para aparecer na parte superior da página subinicial do produto. Um teste falhará se esta propriedade estiver ausente.

    A propriedade `featured_track` pode ser um booleano simples (ou seja, `featured_track: true`) ou pode ser uma string que inclua declarações (p. ex., `featured_track: '{% ifversion fpt %}true{% else %}falso{% endif %}'`). Se você usar o versionamento, terá múltiplos `featured_track`s por arquivo YML, mas certifique-se de que apenas uma versão será interpretada em cada versão atualmente suportada. Um teste irá falhar se houver mais ou menos do que um link em destaque para cada versão.</li> </ol>

## Controle de Versão

O versionamento para faixas de aprendizagem é processado na página tempo de interpretação. O código encontra-se em [`lib/learning-tracks.js`](lib/learning-tracks.js), que é chamado por `page.render()`. The processed learning tracks are then rendered by `components/sublanding`.

Condicionais líquidas **não** tem que ser usadas para versionamento no arquivo YAML para guias. Apenas os guias do caminho de aprendizagem que se aplicam à versão atual serão processados automaticamente. Se não houver nenhuma faixa com guias que pertençam à versão atual, a seção de faixas de aprendizado não será interpretada.

versionamento explícito dentro das faixas de aprendizado de um produto YML também é compatível. Por exemplo:
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
Se a propriedade de `versões` não estiver incluída, deduz-se que a faixa está disponível em todas as versões.

## Aplicação de esquema

O esquema para validar a faixa de aprendizado do YAML encontra-se em [`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) e é exercido por [`tests/content/lint-files.js`](tests/content/lint-files.js).
