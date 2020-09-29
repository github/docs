---
title: Persistir dados de fluxo de trabalho usando artefatos
intro: Artefatos permitem que você compartilhe dados entre trabalhos em um fluxo e armazene dados quando o fluxo de trabalho estiver concluído.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/persisting-workflow-data-using-artifacts
  - /github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre artefatos de fluxos de trabalho

Os artefatos permitem que você persista com os dados após um trabalho ter sido concluído e compartilhe os dados com outro trabalho no mesmo fluxo de trabalho. Um artefato é um arquivo ou uma coleção de arquivos produzidos durante a execução de um fluxo de trabalho. Por exemplo, você pode usar artefatos para salvar a sua criação e testar a saída após uma conclusão da execução do fluxo de trabalho. Para pushes e pull requestes, {% data variables.product.product_name %} armazena artefatos por 90 dias. O período de retenção para um pull request é reiniciado cada vez que alguém faz o push de um novo commit para o pull request.

Esses são alguns dos artefatos comuns cujo upload você pode fazer:

- Arquivos de log e descartes de memória;
- Resultados de testes, falhas e capturas de tela;
- Arquivos binários ou comprimidos
- Resultados de teste de estresse e resultados de cobertura do código.

{% if currentVersion == "free-pro-team@latest" %}

Armazenar artefatos consome espaço de armazenamento em {% data variables.product.product_name %}. {% data reusables.github-actions.actions-billing %} Para mais informações, consulte "[Gerenciando cobrança para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

{% else %}

Os artefatos expiram automaticamente após 90 dias, mas você pode recuperar armazenamento utilizado {% data variables.product.prodname_actions %}, excluindo os artefatos antes de expirarem em {% data variables.product.product_name %}.

{% endif %}

Faz-se o upload dos artefatos durante a execução de um fluxo de trabalho e você pode visualizar o nome e o tamanho do artefato na UI. Quando se faz o download de um artefato usando a UI {% data variables.product.product_name %}, todos os arquivos cujo upload foi feito individualmente como parte do get do artefato zipado em um arquivo único. Isso significa que a cobrança é calculada com base no tamanho do artefato subido e não com base no tamanho do arquivo zip.

O {% data variables.product.product_name %} fornece duas ações que você pode usar para fazer upload e baixar artefatos de compilação. Para obter mais informações, consulte [ações/fazer upload de artefatos](https://github.com/actions/upload-artifact) e [ações/fazer download de artefatos](https://github.com/actions/download-artifact).

Para compartilhar dados entre trabalhos:

* **Fazendo o upload dos arquivos**: Fornece ao arquivo subido um nome e faz o upload dos dados antes da conclusão do trabalho.
* **Fazendo o download dos arquivos**: Você pode apenas fazer o download dos artefatos que foram subidos durante a mesma execução do fluxo de trabalho. Ao fazer o download de um arquivo, você pode fazer referenciá-lo pelo nome.

As etapas de um trabalho compartilham o mesmo ambiente na máquina executora, mas são executados em seus próprios processos individuais. Para transmitir dados entre etapas de um trabalho, você pode usar entradas e saídas. Para obter mais informações sobre entradas e saídas, consulte "[Sintaxe de metadados para o {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions)".

### Transmitir dados entre trabalhos em um fluxo

Você pode usar as ações `upload-artifact` e `download-artifact` para compartilhar os dados entre os trabalhos em um fluxo de trabalho. Este exemplo de fluxo de trabalho ilustra como transmitir dados entre trabalhos em um mesmo fluxo. Para obter mais informações, consulte [ações/fazer upload de artefatos](https://github.com/actions/upload-artifact) e [ações/fazer download de artefatos](https://github.com/actions/download-artifact).

Os trabalhos que são dependentes de artefatos de um trabalho anterior devem aguardar a finalização do trabalho dependente. Esse fluxo de trabalho usa a palavra-chave `needs` para garantir que `job_1`, `job_2` e `job_3` sejam executados sequencialmente. Por exemplo, `job_2` requer `job_1` usando a sintaxe `needs: job_1`.

O Job 1 (Trabalho 1) executa estas etapas:
- Realiza um cálculo de correspondência e salva o resultado em um arquivo de texto denominado `math-homework.txt`.
- Usa a ação `upload-artifact` para fazer upload do arquivo `math-homework.txt` com o nome `homework`. A ação coloca o arquivo em um diretório denominado `homework`.

O Job 2 (Trabalho 2) usa o resultado do trabalho anterior:
- Baixa o artefato `homework` carregado no trabalho anterior. Por padrão, a ação `download-artifact` baixa artefatos no diretório da área de trabalho no qual a etapa está sendo executada. Você pode usar o parâmetro da entrada do `caminho` para especificar um diretório diferente para o download.
- Lê o valor no arquivo `homework/math-homework.txt`, efetua um cálculo matemático e salva o resultado em `math-homework.txt`.
- Faz upload do arquivo `math-homework.txt`. Esse upload sobrescreve o upload anterior, pois ambos compartilham o mesmo nome.

O Job 3 (Trabalho 3) mostra o resultado carregado no trabalho anterior:
- Baixa o artefato `homework`.
- Imprime o resultado da operação matemática no log.

A operação matemática completa executada nesse fluxo de trabalho é `(3 + 7) x 9 = 90`.

```yaml
name: Share data between jobs

on: [push]

jobs:
  job_1:
    name: Add 3 and 7
    runs-on: ubuntu-latest
    steps:
      - shell: bash
        run: |
          expr 3 + 7 > math-homework.txt
      - name: Upload math result for job 1
        uses: actions/upload-artifact@v2
        with:
          name: homework
          path: math-homework.txt

  job_2:
    name: Multiply by 9
    needs: job_1
    runs-on: windows-latest
    steps:
      - name: Download math result for job 1
        uses: actions/download-artifact@v2
        with:
          name: homework
      - shell: bash
        run: |
          value=`cat math-homework.txt`
          expr $value \* 9 > math-homework.txt
      - name: Upload math result for job 2
        uses: actions/upload-artifact@v2
        with:
          name: homework
          path: math-homework.txt

  job_3:
    name: Display results
    needs: job_2
    runs-on: macOS-latest
    steps:
      - name: Download math result for job 2
        uses: actions/download-artifact@v2
        with:
          name: homework
      - name: Print the final result
        shell: bash
        run: |
          value=`cat math-homework.txt`
          echo The result is $value
```

![Fluxo de trabalho que transmite dados entre trabalhos para executar cálculos matemáticos](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow.png)

### Compartilhar dados entre execuções de fluxo de trabalho

Após a conclusão do fluxo de trabalho, você pode fazer o download de um arquivo comprimido do artefato {% data variables.product.product_name %}, encontrando a execução do fluxo de trabalho na subido na aba **Ações**. Você também pode usar o API REST {% data variables.product.prodname_dotcom %} para fazer o download dos artefatos. Para obter mais informações, consulte "[Artefatos](/v3/actions/artifacts/)".

O {% data variables.product.product_name %} fornece duas ações que você pode usar para fazer upload e baixar artefatos de compilação. Para obter mais informações, consulte [ações/fazer upload de artefatos](https://github.com/actions/upload-artifact) e [ações/fazer download de artefatos](https://github.com/actions/download-artifact).

### Fazer upload da compilação e testar artefatos

Você pode criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu código. Para obter mais informações sobre o uso do {% data variables.product.prodname_actions %} para executar CI, consulte "[Sobre integração contínua](/articles/about-continuous-integration)."

A saída da compilação e teste de seu código muitas vezes produz arquivos que podem ser usados para depurar falhas em testes e códigos de produção que você pode implantar. É possível configurar um fluxo de trabalho para compilar e testar o código com push no repositório e relatar um status de sucesso ou falha. Você pode fazer upload da saída de compilação e teste para usar em implantações, para depurar falhas e testes com falhas e visualizar a cobertura do conjunto de teste.

Você pode usar a ação `upload-artifact` para fazer o upload dos artefatos. Ao fazer o upload de um artefato, você pode especificar um arquivo ou diretório único, ou vários arquivos ou diretórios. Você também pode excluir certos arquivos ou diretórios e usar padrões coringa. Recomendamos que você forneça um nome para um artefato, mas se nenhum nome for fornecido, `artefato` será usado como nome-padrão. Para obter mais informações sobre a sintaxe, consulte a ação [actions/upload-artifact](https://github.com/actions/upload-artifact).

#### Exemplo

Por exemplo, o seu repositório ou um aplicativo web pode conter arquivos SASS e TypeScript que você deve converter para CSS e JavaScript. Pressupondo que sua configuração de compilação envia os arquivos compilados para o diretório `dist`, você implementaria os arquivos no diretório `dist` no seu servidor de aplicativo web, se todos os testes foram concluídos com sucesso.

```
|-- hello-world (repository)
|   └── dist
|   └── tests
|   └── src
|       └── sass/app.scss
|       └── app.ts
|   └── output
|       └── test
|   
```

Esse exemplo mostra como criar um fluxo de trabalho para um projeto Node.js que `builds` (compila) o código no diretório `src` e executa os testes no diretório `tests`. Você pode partir do princípio que executar `npm test` produz um relatório de cobertura de código denominado `code-coverage.html`, armazenado no diretório `output/test/`.

O fluxo de trabalho faz o upload dos artefatos de produção no diretório `dist`, mas exclui todos os arquivos de markdown. Ele também e faz o upload do relatório de `code-coverage.html` como outro artefato.

```yaml
name: Node CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: actions/upload-artifact@v2
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: actions/upload-artifact@v2
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
```

![Imagem de execução de fluxo de trabalho de artefato carregado em fluxo de trabalho](/assets/images/help/repository/upload-build-test-artifact.png)

### Fazer o download ou excluir artefatos

Durante a execução de um fluxo de trabalho, você pode baixar artefatos que foram previamente carregados na mesma execução do fluxo de trabalho. Após a conclusão da execução de um fluxo de trabalho, você poderá fazer o download ou excluir artefatos no GitHub usando o histórico de execução de fluxo de trabalho.

#### Fazer o download dos artefatos durante a execução de um fluxo de trabalho

A ação [actions/download-artefact](https://github.com/actions/download-artifact) pode ser usada para fazer o download de artefatos carregados anteriormente durante a execução de um fluxo de trabalho.

{% note %}

**Observação:** Você só pode baixar artefatos em um fluxo de trabalho que foram carregados durante a mesma execução do fluxo de trabalho.

{% endnote %}

Especifique o nome de um artefato para fazer o download de um artefato individual. Se você fez o upload de um artefato sem especificar um nome, o nome-padrão será `artefato`.

```yaml
- name: Download a single artifact
  uses: actions/download-artifact@v2
  with:
    name: my-artifact
```

Você também pode baixar todos os artefatos em uma execução de fluxo de trabalho sem especificar um nome. Isso pode ser útil se você estiver trabalhando com muitos artefatos.

```yaml
- name: Download all workflow run artifacts
  uses: actions/download-artifact@v2
```

Se você fizer o download de todos os artefatos da execução de um fluxo de trabalho, será criado um diretório para cada artefato usando seu nome.

Para obter mais informações sobre a sintaxe, consulte as ações {% if currentVersion == "free-pro-team@latest" %}[/download-artefato](https://github.com/actions/download-artifact) ação{% else %} `ações/download-artefato` ação em {% data variables.product.product_location %}{% endif %}.

#### O download e a exclusão dos artefatos após a execução de um fluxo de trabalho foi concluído

Os artefatos expiram automaticamente após 90 dias, mas você pode recuperar armazenamento utilizado {% data variables.product.prodname_actions %}, excluindo os artefatos antes de expirarem em {% data variables.product.product_name %}.

{% warning %}

**Aviso:** Após a exclusão de um artefato, este não poderá ser restaurado.

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Para baixar artefatos, use o menu suspenso **Artifacts** (Artefatos) e selecione o artefato que você pretende baixar. ![Menu suspenso do para fazer download do artefato](/assets/images/help/repository/artifact-drop-down.png)
1. Para excluir artefatos, use o menu suspenso **Artefatos** e clique em {% octicon "trashcan" aria-label="The trashcan icon" %}. ![Menu suspenso para excluir o artefato](/assets/images/help/repository/actions-delete-artifact.png)

{% if currentVersion == "free-pro-team@latest" %}

### Leia mais

- "[Gerenciando cobrança para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

{% endif %}
