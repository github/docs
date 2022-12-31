---
title: Automatizar a migração com o Importador do GitHub Actions
intro: 'Use o {% data variables.product.prodname_actions_importer %} para planejar e automatizar sua migração para o {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Migration
  - CI
  - CD
shortTitle: 'Automate migration with {% data variables.product.prodname_actions_importer %}'
ms.openlocfilehash: 391455eb90a3a71ab0e0cb5a1573a0ee48527d8e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159354'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

[Aviso legal](#legal-notice)

{% note %}

**Observação**: o {% data variables.product.prodname_actions_importer %} está disponível atualmente em versão prévia pública. Para solicitar acesso à versão prévia, visite a [página de inscrição](https://github.com/features/actions-importer/signup). Depois que você receber o acesso, será possível usar a extensão da CLI `gh-actions-importer`

{% endnote %}

## Sobre o {% data variables.product.prodname_actions_importer %}

É possível usar o {% data variables.product.prodname_actions_importer %} para planejar e migrar automaticamente pipelines de CI/CD do Azure DevOps, do CircleCI, do GitLab, do Jenkins e do Travis CI para o {% data variables.product.prodname_actions %}.

O {% data variables.product.prodname_actions_importer %} é distribuído como um contêiner do Docker e usa uma extensão da [CLI do {% data variables.product.prodname_dotcom %}](https://cli.github.com) para interagir com o contêiner.

Qualquer fluxo de trabalho convertido pelo {% data variables.product.prodname_actions_importer %} deve ser inspecionado quanto à exatidão antes de ser usado como uma carga de trabalho de produção. A meta é alcançar uma taxa de conversão de 80% para cada fluxo de trabalho, no entanto, a taxa de conversão real dependerá da composição de cada pipeline individual convertido.

## Plataformas de CI com suporte

É possível usar o {% data variables.product.prodname_actions_importer %} para migrar das seguintes plataformas:

- Azure DevOps
- CircleCI
- GitLab
- Jenkins
- Travis CI

Depois que você receber acesso à versão prévia, será possível acessar a documentação de referência adicional de cada uma das plataformas com suporte.

## Pré-requisitos

O {% data variables.product.prodname_actions_importer %} tem os seguintes requisitos:

- É preciso que você tenha recebido acesso à versão prévia pública do {% data variables.product.prodname_actions_importer %}.
{%- ifversion ghes < 3.5 or ghae %}
- Use um {% data variables.product.pat_generic %} com o escopo `read:packages` habilitado.
{%- else %}
- Você deve ter credenciais para autenticar-se no {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}. Para obter mais informações, confira "[Como trabalhar com o Registro de contêiner](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry)".
{% endif %}
- Um ambiente em que seja possível executar contêineres baseados no Linux e instalar as ferramentas necessárias.
  - O Docker está [instalado](https://docs.docker.com/get-docker/) e em execução.
  - A [CLI do {% data variables.product.prodname_dotcom %}](https://cli.github.com) está instalada.

  {% note %}

  **Observação**: a CLI e o contêiner do {% data variables.product.prodname_actions_importer %} não precisam ser instalados no mesmo servidor que a plataforma de CI.

  {% endnote %}

### Instalação da extensão da CLI do {% data variables.product.prodname_actions_importer %}

1. Instale a extensão da CLI do {% data variables.product.prodname_actions_importer %}:

   ```bash
   $ gh extension install github/gh-actions-importer
   ```
1. Verifique se a extensão foi instalada:

   ```bash
   $ gh actions-importer -h
   Options:
     -?, -h, --help  Show help and usage information

   Commands:
     update     Update to the latest version of the GitHub Actions Importer.
     version    Display the version of the GitHub Actions Importer.
     configure  Start an interactive prompt to configure credentials used to authenticate with your CI server(s).
     audit      Plan your CI/CD migration by analyzing your current CI/CD footprint.
     forecast   Forecast GitHub Actions usage from historical pipeline utilization.
     dry-run    Convert a pipeline to a GitHub Actions workflow and output its yaml file.
     migrate    Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.
   ```

### Atualização da CLI do {% data variables.product.prodname_actions_importer %}

Execute regularmente o comando `update` para garantir que você esteja executando a versão mais recente do {% data variables.product.prodname_actions_importer %}:

```bash
$ gh actions-importer update
```

Você deve estar autenticado no {% data variables.product.prodname_container_registry %} para que esse comando seja bem-sucedido. Como alternativa, é possível fornecer credenciais usando os parâmetros `--username` e `--password-stdin`:

```bash
$ echo $GITHUB_TOKEN | gh actions-importer update --username $GITHUB_HANDLE --password-stdin
```

### Autenticação na linha de comando

Você deve configurar credenciais para permitir que o {% data variables.product.prodname_actions_importer %} se comunique com o {% data variables.product.prodname_dotcom %} e com seu servidor de CI atual. É possível configurar essas credenciais usando variáveis de ambiente ou um arquivo `.env.local`. As variáveis de ambiente podem ser configuradas em um prompt interativo executando o seguinte comando:

```bash
$ gh actions-importer configure
```

Depois que você receber acesso à versão prévia, será possível acessar a documentação de referência adicional referente ao uso de variáveis de ambiente.

## Uso da CLI do {% data variables.product.prodname_actions_importer %}

Use os subcomandos de `gh actions-importer` para iniciar a migração para o {% data variables.product.prodname_actions %}, incluindo `audit`, `forecast`, `dry-run` e `migrate`.

### Auditoria de pipelines de CI existentes

O subcomando `audit` pode ser usado para analisar seu volume de CI/CD atual, a fim de ajudar no planejamento da migração de CI/CD. Essa análise pode ser usada no planejamento de uma linha do tempo de migração para o {% data variables.product.prodname_actions %}.

Para executar uma auditoria, use o seguinte comando a fim de determinar as opções disponíveis:

```bash
$ gh actions-importer audit -h
Description:
  Plan your CI/CD migration by analyzing your current CI/CD footprint.

[...]

Commands:
  azure-devops  An audit will output a list of data used in an Azure DevOps instance.
  circle-ci     An audit will output a list of data used in a CircleCI instance.
  gitlab        An audit will output a list of data used in a GitLab instance.
  jenkins       An audit will output a list of data used in a Jenkins instance.
  travis-ci     An audit will output a list of data used in a Travis CI instance.
```

Depois que você receber acesso à versão prévia, será possível acessar a documentação de referência adicional referente à execução de uma auditoria.

### Previsão de uso

O subcomando `forecast` examina o uso histórico de pipelines para criar uma previsão de uso do {% data variables.product.prodname_actions %}.

Para executar uma auditoria, use o seguinte comando a fim de determinar as opções disponíveis:

```bash
$ gh actions-importer forecast -h
Description:
  Forecasts GitHub Actions usage from historical pipeline utilization.

[...]

Commands:
  azure-devops  Forecasts GitHub Actions usage from historical Azure DevOps pipeline utilization.
  jenkins       Forecasts GitHub Actions usage from historical Jenkins pipeline utilization.
  gitlab        Forecasts GitHub Actions usage from historical GitLab pipeline utilization.
  circle-ci     Forecasts GitHub Actions usage from historical CircleCI pipeline utilization.
  travis-ci     Forecasts GitHub Actions usage from historical Travis CI pipeline utilization.
  github        Forecasts GitHub Actions usage from historical GitHub pipeline utilization.
```

Depois que você receber acesso à versão prévia, será possível acessar a documentação de referência adicional referente à execução de uma previsão.

### Teste do processo de migração

O subcomando `dry-run` pode ser usado para converter um pipeline em seu equivalente do {% data variables.product.prodname_actions %} e, em seguida, gravar o fluxo de trabalho no sistema de arquivos local.

Para executar uma simulação, use o seguinte comando a fim de determinar as opções disponíveis:

```bash
$ gh actions-importer dry-run -h
Description:
  Convert a pipeline to a GitHub Actions workflow and output its yaml file.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and output its yaml file.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and output the yaml file(s).
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and output the yaml file.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and output its yaml file.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and output its yaml file.
```

Depois que você receber acesso à versão prévia, será possível acessar a documentação de referência adicional referente à execução de uma simulação.

### Migrar um pipeline para o {% data variables.product.prodname_actions %}

O subcomando `migrate` pode ser usado para converter um pipeline em seu equivalente do GitHub Actions e, em seguida, criar uma solicitação de pull com o conteúdo.

Para executar uma migração, use o seguinte comando a fim de determinar as opções disponíveis:

```bash
$ gh actions-importer migrate -h
Description:
  Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and open a pull request with the changes.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and open a pull request with the changes.
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and open a pull request with the changes.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and open a pull request with the changes.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and and open a pull request with the changes.
```

Depois que você receber acesso à versão prévia, será possível acessar a documentação de referência adicional referente à execução de uma migração.

## Aviso legal

Partes foram adaptadas do https://github.com/github/gh-actions-importer/ de acordo com a licença MIT:

```
MIT License

Copyright (c) 2022 GitHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
