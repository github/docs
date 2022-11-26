---
title: Configurar o cache de ferramentas em executores auto-hospedados sem acesso à internet
intro: 'Para usar as ações `actions/setup` incluídas em executores auto-hospedados sem acesso à Internet, primeiro você precisa popular o cache de ferramenta do executor dos fluxos de trabalho.'
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
  - /admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
  - Networking
  - Storage
shortTitle: Tool cache for offline runners
ms.openlocfilehash: fe1b070880db8353064f1be5a26b0a63a5e92cf5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529293'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre as ações de configuração incluídas e o cache da ferramenta do executor

{% data reusables.actions.enterprise-no-internet-actions %}

A maioria dos dados oficiais criados pelo {% data variables.product.prodname_dotcom %} é empacotada automaticamente com o {% data variables.product.product_name %}. No entanto, os executores auto-hospedados sem acesso à Internet exigem alguma configuração para usar as ações `actions/setup-LANGUAGE` incluídas, como `setup-node`.

As ações `actions/setup-LANGUAGE` normalmente precisam ter acesso à Internet para baixar os binários do ambiente necessários no cache de ferramentas do executor. Os executores auto-hospedados sem acesso à internet não podem fazer o download dos binários. Portanto, você deve preencher manualmente o cache de ferramentas no executor.

Você pode preencher o cache da ferramenta do executor, executando um fluxo de trabalho de {% data variables.product.prodname_actions %} no {% data variables.product.prodname_dotcom_the_website %} que faz o upload de um cache de ferramenta do executor hospedado em {% data variables.product.prodname_dotcom %} como um artefato, que você pode transferir e extrair no seu executor auto-hospedado sem conexão à internet.

{% note %}

**Observação:** só é possível usar um cache de ferramentas do executor hospedado no {% data variables.product.prodname_dotcom %} em um executor auto-hospedado que tenha uma arquitetura e um sistema operacional idênticos. Por exemplo, se você estiver usando um executor `ubuntu-22.04` hospedado no {% data variables.product.prodname_dotcom %} para gerar um cache de ferramentas, o executor auto-hospedado precisará ser um computador Ubuntu 22.04 de 64 bits. Para obter mais informações sobre executores hospedados no {% data variables.product.prodname_dotcom %}, confira "[Sobre executores hospedados {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)".

{% endnote %}

## Pré-requisitos

* Determinar quais ambientes de desenvolvimento seus executores auto-hospedados precisarão. O exemplo a seguir demonstra como preencher um cache de ferramentas para a ação `setup-node` usando o Node.js versões 10 e 12.
* Acesso a um repositório no {% data variables.product.prodname_dotcom_the_website %} que pode ser usado para executar um fluxo de trabalho.
* Acesso ao sistema de arquivos do executor auto-hospedado para preencher a pasta de cache da ferramenta.

## Preencher o cache de ferramentas para um executor auto-hospedado

1. Em {% data variables.product.prodname_dotcom_the_website %}, acesse um repositório que você pode usar para executar um fluxo de trabalho de {% data variables.product.prodname_actions %}.
1. Crie um arquivo de fluxo de trabalho na pasta `.github/workflows` do repositório que carrega um artefato que contém o cache de ferramentas do executor hospedado no {% data variables.product.prodname_dotcom %}.

   O exemplo a seguir demonstra um fluxo de trabalho que carrega o cache de ferramentas para um ambiente Ubuntu 22.04, usando a ação `setup-node` com o Node.js versões 10 e 12.

   ```yaml
   name: Upload Node.js 10 and 12 tool cache
   on: push
   jobs:
     upload_tool_cache:
       runs-on: ubuntu-22.04
       steps:
         - name: Clear any existing tool cache
           run: |
             mv "{% raw %}${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"{% endraw %}
             mkdir -p "{% raw %}${{ runner.tool_cache }}{% endraw %}"
         - name: Setup Node 10
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 10.x
         - name: Setup Node 12
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 12.x
         - name: Archive tool cache
           run: |
             cd "{% raw %}${{ runner.tool_cache }}{% endraw %}"
             tar -czf tool_cache.tar.gz *
         - name: Upload tool cache artifact
           uses: {% data reusables.actions.action-upload-artifact %}
           with:
             path: {% raw %}${{runner.tool_cache}}/tool_cache.tar.gz{% endraw %}
   ```
1. Faça o download do artefato do cache da ferramenta da execução do fluxo de trabalho. Para obter instruções sobre como baixar artefatos, confira "[Como baixar artefatos de fluxo de trabalho](/actions/managing-workflow-runs/downloading-workflow-artifacts)".
1. Transfira o artefato de cache das ferramentas para o seu executor hospedado e extraia-o para o diretório de cache das ferramentas locais. O diretório de cache de ferramenta padrão é `RUNNER_DIR/_work/_tool`. Se o executor ainda não processou nenhum trabalho, talvez seja necessário criar os diretórios `_work/_tool`.

    Após extrair o artefato de cache da ferramenta carregado no exemplo acima, você deve ter uma estrutura de diretório no seu executor auto-hospedado semelhante ao exemplo a seguir:

    ```
    RUNNER_DIR
    ├── ...
    └── _work
        ├── ...
        └── _tool
            └── node
                ├── 10.22.0
                │   └── ...
                └── 12.18.3
                    └── ...
    ```

O executor auto-hospedado sem acesso à Internet já conseguirá usar a ação `setup-node`. Se você tiver problemas, certifique-se de ter preenchido o cache da ferramentas correto para seus fluxos de trabalho. Por exemplo, caso você precise usar a ação `setup-python`, preencha o cache de ferramentas com o ambiente do Python que deseja usar.
