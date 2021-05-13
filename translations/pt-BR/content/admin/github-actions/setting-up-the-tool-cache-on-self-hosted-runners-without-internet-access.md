---
title: Configurar o cache de ferramentas em executores auto-hospedados sem acesso à internet
intro: 'Para usar as ações `actions/setup` incluídas em executores auto-hospedados sem acesso à internet, você deve primeiro preencher o cache de ferramentas do executor para seus fluxos de trabalho.'
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  enterprise-server: '>=2.22'
  github-ae: next
topics:
  - Enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre as ações de configuração incluídas e o cache da ferramenta do executor

{% data reusables.actions.enterprise-no-internet-actions %}

As maioria das oficiais de autoria de {% data variables.product.prodname_dotcom %}mais são automaticamente agrupadas com {% data variables.product.prodname_ghe_server %}. No entanto, os executores auto-hospedados sem acesso à internet precisarão de alguma configuração antes de poderem usar as ações `actions/setup-LANGUAGE` inclusas como, por exemplo, `setup-node`.

As ações `actions/setup-LANGUAGE` normalmente precisam de acesso à internet para fazer o download os binários do ambiente necessário para o cache de ferramentas do executor. Os executores auto-hospedados sem acesso à internet não podem fazer o download dos binários. Portanto, você deve preencher manualmente o cache de ferramentas no executor.

Você pode preencher o cache da ferramenta do executor, executando um fluxo de trabalho de {% data variables.product.prodname_actions %} no {% data variables.product.prodname_dotcom_the_website %} que faz o upload de um cache de ferramenta do executor hospedado em {% data variables.product.prodname_dotcom %} como um artefato, que você pode transferir e extrair no seu executor auto-hospedado sem conexão à internet.

{% note %}

**Observação:** Você só pode usar um cache de ferramenta do executor hospedado em {% data variables.product.prodname_dotcom %} para um executor auto-hospedado que possua um sistema operacional e arquitetura idênticos. Por exemplo, se você estiver usando uma `ubuntu-18. 4` do executor hospedado em {% data variables.product.prodname_dotcom %} para gerar um cache de ferramentas, seu executor auto-hospedado deverá ser uma máquina Ubuntu 18.04 de 64 bits. Para mais informações sobre executores hospedados no {% data variables.product.prodname_dotcom %}, consulte "<a href="/actions/reference/virtual-environments-for-github-hosted-runners#supported-runners-and-hardware-resources" class="dotcom-only">Ambientes virtuais para executores hospedados no GitHub</a>".

{% endnote %}

### Pré-requisitos

* Determinar quais ambientes de desenvolvimento seus executores auto-hospedados precisarão. O exemplo a seguir demonstra como preencher um cache de ferramentas para a ação `setup-node`, usando as versões 10 e 12 do Node.js.
* Acesso a um repositório no {% data variables.product.prodname_dotcom_the_website %} que pode ser usado para executar um fluxo de trabalho.
* Acesso ao sistema de arquivos do executor auto-hospedado para preencher a pasta de cache da ferramenta.

### Preencher o cache de ferramentas para um executor auto-hospedado

1. Em {% data variables.product.prodname_dotcom_the_website %}, acesse um repositório que você pode usar para executar um fluxo de trabalho de {% data variables.product.prodname_actions %}.
1. Crie um novo arquivo de fluxo de trabalho na pasta `.github/workflows` do repositório que faz o upload de um artefato que contém o cache da ferramenta do executor armazenado em {% data variables.product.prodname_dotcom %}.

   O exemplo a seguir demonstra um fluxo de trabalho que faz o upload do cache da ferramenta para um ambiente do Ubuntu 18.04, usando a ação `setup-node` com as versões 10 e 12 do Node.js.

   {% raw %}
   ```yaml
   name: Upload Node.js 10 and 12 tool cache
   on: push
   jobs:
     upload_tool_cache:
       runs-on: ubuntu-18.04
       steps:
         - name: Clear any existing tool cache
           run: |
             mv "${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"
             mkdir -p "${{ runner.tool_cache }}"
         - name: Setup Node 10
           uses: actions/setup-node@v1
           with:
             node-version: 10.x
         - name: Setup Node 12
           uses: actions/setup-node@v1
           with:
             node-version: 12.x
         - name: Archive tool cache
           run: |
             cd "${{ runner.tool_cache }}"
             tar -czf tool_cache.tar.gz *
         - name: Upload tool cache artifact
           uses: actions/upload-artifact@v2
           with:
             path: ${{runner.tool_cache}}/tool_cache.tar.gz
   ```
   {% endraw %}
1. Faça o download do artefato do cache da ferramenta da execução do fluxo de trabalho. Para obter instruções sobre o download de artefatos, consulte "[Fazer download de artefatos de fluxo de trabalho](/actions/managing-workflow-runs/downloading-workflow-artifacts)".
1. Transfira o artefato de cache das ferramentas para o seu executor hospedado e extraia-o para o diretório de cache das ferramentas locais. O diretório de cache da ferramenta padrão é `RUNNER_DIR/_work/_tool`. Se o executor ainda não processou nenhum trabalho, você pode precisar criar os diretórios `_work/_tool`.

    Após extrair o artefato de cache da ferramenta carregado no exemplo acima, você deve ter uma estrutura de diretório no seu executor auto-hospedado semelhante ao exemplo a seguir:

    ```
    RUNNER_DIR
    ├── ...
    └── _work
        ├── ...
        └── _tool
            └── node
                ├── 10.22.0
                │   └── ...
                └── 12.18.3
                    └── ...
    ```

O seu executor auto-hospedado sem acesso à internet agora deve ser capaz de usar a ação `setup-node`. Se você tiver problemas, certifique-se de ter preenchido o cache da ferramentas correto para seus fluxos de trabalho. Por exemplo, se você precisar usar a ação `setup-python`, você deverá preencher o cache de ferramentas com o ambiente do Python que deseja usar.
