---
title: Recursos essenciais do GitHub Actions
shortTitle: Recursos essenciais
intro: '{% data variables.product.prodname_actions %} foram projetados para ajudar você a construir automações robustas e dinâmicas. Este guia irá mostrar como criar fluxos de trabalho de {% data variables.product.prodname_actions %} que incluem variáveis de ambiente, scripts personalizados e muito mais.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Visão Geral

{% data variables.product.prodname_actions %} permite que você personalize seus fluxos de trabalho para atender às necessidades únicas de seu aplicativo e equipe. Neste guia, discutiremos algumas das técnicas de personalização essenciais, como o uso de variáveis, a execução de scripts e o compartilhamento de dados e artefatos entre trabalhos.

### Usar variáveis em seus fluxos de trabalho

{% data variables.product.prodname_actions %} incluem variáveis de ambiente-padrão para cada execução de fluxo de trabalho. Se precisar usar variáveis de ambiente personalizadas, você pode defini-las no seu arquivo de fluxo de trabalho YAML. Este exemplo demonstra como criar variáveis personalizadas denominadas `POSTGRES_HOST` e `POSTGRES_PORT`. Essas variáveis estão disponíveis para o script do `node client.js`.

```yaml
jobs:
  example-job:
      steps:
        - name: Connect to PostgreSQL
          run: node client.js
          env:
            POSTGRES_HOST: postgres
            POSTGRES_PORT: 5432
```

Para obter mais informações, consulte "[Usando variáveis de ambiente](/actions/configuring-and-managing-workflows/using-environment-variables)".

### Adicionar scripts ao seu fluxo de trabalho

Você pode usar ações para executar scripts e comandos de shell, que são executados no executor atribuído. Este exemplo demonstra como uma ação pode usar a palavra-chave `executar` para executar `npm instalar -g morcegos` no executor.

```yaml
jobs:
  example-job:
    steps:
      - run: npm install -g bats
```

Por exemplo, para executar um script como uma ação, você pode armazenar o script no repositório e fornecer o tipo do caminho e do shell.

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

### Compartilhar dados entre trabalhos

Se o seu trabalho gera arquivos que você deseja compartilhar com outro trabalho no mesmo fluxo de trabalho, ou se você quiser salvar os arquivos para referência posterior, você pode armazená-los em {% data variables.product.prodname_dotcom %} como _artefatos_. Artefatos são os arquivos que surgem quando você compila e testa seu código. Por exemplo, os artefatos podem incluir arquivos binários ou de pacotes, resultados de testes, capturas de tela ou arquivos de log. Os artefatos estão associados à execução do fluxo de trabalho em que foram criados e podem ser usados por outro trabalho.

Por exemplo, você pode criar um arquivo e, em seguida, carregá-lo como um artefato.

```yaml
jobs:
  example-job:
    name: Save output
    steps:
      - shell: bash
        run: |
          expr 1 + 1 > output.log
      - name: Upload output file
        uses: actions/upload-artifact@v2
        with:
          name: output-log-file
          path: output.log
```

Para fazer o download de um artefato de uma execução de fluxo de trabalho separado, você pode usar a ação `actions/download-artefact`. Por exemplo, você pode fazer o download do artefato denominado `log-file`.

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: actions/download-artifact@v2
        with:
          name: output-log-file
```

Para obter mais informações sobre artefatos, consulte "[Persistir dados de fluxo de trabalho usando artefatos](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)".

### Próximas etapas

Para continuar aprendendo sobre {% data variables.product.prodname_actions %}, consulte "[Gerenciar fluxos de trabalho complexos](/actions/learn-github-actions/managing-complex-workflows)".
