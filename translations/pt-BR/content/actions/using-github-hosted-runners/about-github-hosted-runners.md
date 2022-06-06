---
title: Sobre executores hospedados no GitHub
intro: 'O {% data variables.product.prodname_dotcom %} oferece máquinas virtuais hospedadas para executar fluxos de trabalho. A máquina virtual tem um ambiente de ferramentas, pacotes e configurações disponíveis para uso no {% data variables.product.prodname_actions %}.'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Executores hospedados no GitHub
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview of {% data variables.product.prodname_dotcom %}-hosted runners

Runners are the machines that execute jobs in a {% data variables.product.prodname_actions %} workflow. For example, a runner can clone your repository locally, install testing software, and then run commands that evaluate your code.

{% data variables.product.prodname_dotcom %} provides runners that you can use to run your jobs, or you can [host your own runners](/actions/hosting-your-own-runners/about-self-hosted-runners). Each {% data variables.product.prodname_dotcom %}-hosted runner is a new virtual machine (VM) hosted by {% data variables.product.prodname_dotcom %} with the runner application and other tools preinstalled, and is available with Ubuntu Linux, Windows, or macOS operating systems. Ao usar um executor hospedada no {% data variables.product.prodname_dotcom %}, a manutenção e as atualizações da máquina são feitas para você.

{% ifversion not ghes %}

## Usando um executor hospedado em {% data variables.product.prodname_dotcom %}

To use a {% data variables.product.prodname_dotcom %}-hosted runner, create a job and use `runs-on` to specify the type of runner that will process the job, such as `ubuntu-latest`, `windows-latest`, or `macos-latest`. For the full list of runner types, see "[Supported runners and hardware resources](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)."

When the job begins, {% data variables.product.prodname_dotcom %} automatically provisions a new VM for that job. All steps in the job execute on the VM, allowing the steps in that job to share information using the runner's filesystem. You can run workflows directly on the VM or in a Docker container. When the job has finished, the VM is automatically decommissioned.

The following diagram demonstrates how two jobs in a workflow are executed on two different {% data variables.product.prodname_dotcom %}-hosted runners.

![Two runners processing separate jobs](/assets/images/help/images/overview-github-hosted-runner.png)

The following example workflow has two jobs, named `Run-npm-on-Ubuntu` and `Run-PSScriptAnalyzer-on-Windows`. When this workflow is triggered, {% data variables.product.prodname_dotcom %} provisions a new virtual machine for each job.

- The job named `Run-npm-on-Ubuntu` is executed on a Linux VM, because the job's `runs-on:` specifies `ubuntu-latest`.
- The job named `Run-PSScriptAnalyzer-on-Windows` is executed on a Windows VM, because the job's `runs-on:` specifies `windows-latest`.

```yaml{:copy}
name: Run commands on different operating systems
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  Run-npm-on-Ubuntu:
    name: Run npm on Ubuntu
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm help

  Run-PSScriptAnalyzer-on-Windows:
    name: Run PSScriptAnalyzer on Windows
    runs-on: windows-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install PSScriptAnalyzer module
        shell: pwsh
        run: |
          Set-PSRepository PSGallery -InstallationPolicy Trusted
          Install-Module PSScriptAnalyzer -ErrorAction Stop
      - name: Get list of rules
        shell: pwsh
        run: |
          Get-ScriptAnalyzerRule
```

While the job runs, the logs and output can be viewed in the {% data variables.product.prodname_dotcom %} UI:

![Job output in the Actions UI](/assets/images/help/repository/actions-runner-output.png)

{% data reusables.actions.runner-app-open-source %}

## Executores e recursos de hardware compatíveis

Especificação de hardware para máquinas virtuais do Windows e Linux:
- CPU dual core
- 7 GB de memória RAM
- 14 GB de espaço de disco SSD

Especificação de hardware para máquinas virtuais do macOS:
- CPU de 3 núcleos
- 14 GB of RAM memory
- 14 GB de espaço de disco SSD

{% data reusables.actions.supported-github-runners %}

Lista de registros de fluxo de trabalho do executor usado para executar um trabalho. Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".

## Software compatível

As ferramentas do software incluídas em executores hospedados em {% data variables.product.prodname_dotcom %} são atualizadas semanalmente. O processo de atualização demora vários dias, e a lista de softwares pré-instalados no branch `principal` é atualizada quando a implementação inteira é finalizada.
### Software pré-instalado

Os registros de fluxo de trabalho incluem um link para as ferramentas pré-instaladas no executor exato. Para encontrar essas informações no fluxo do fluxo de trabalho, expanda a seção `Configurar trabalho`. Nessa seção, expanda a seção `Ambiente virtual`. O link seguinte `Software Incluído` descreverá as ferramentas pré-instaladas no executor que executaram o fluxo de trabalho. ![Installed software link](/assets/images/actions-runner-installed-software-link.png) Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".

Para a lista geral das ferramentas incluídas para cada sistema operacional do executor, consulte os links abaixo:

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-Readme.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1804-Readme.md)
* [Windows Server 2022](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2022-Readme.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2019-Readme.md)
* [macOS 12](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-12-Readme.md)
* [macOS 11](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11-Readme.md)
* [macOS 10.15](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md)

Executores hospedados no {% data variables.product.prodname_dotcom %} incluem as ferramentas integradas padrão do sistema operacional, além dos pacotes listados nas referências acima. Por exemplo, os executores do Ubuntu e do macOS incluem `grep`, `find` e `which`, entre outras ferramentas-padrão.

### Usar software pré-instalado

Recomendamos usar ações para interagir com o software instalado nos executores. Esta abordagem tem vários benefícios:
- Normalmente, as ações fornecem funcionalidades mais flexíveis, como seleção de versões, capacidade de passar argumentos e parâmetros
- Ela garante que as versões da ferramenta usadas no seu fluxo de trabalho permaneçam as mesmas independentemente das atualizações do software

Se houver uma ferramenta que você queira solicitar, abra um problema em [actions/virtual-environments](https://github.com/actions/virtual-environments). Este repositório também contém anúncios sobre todas as principais atualizações de software nos executores.

### Instalando software adicional

Você pode instalar um software adicional em executores hospedados em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Personalizar executores hospedados no GitHub](/actions/using-github-hosted-runners/customizing-github-hosted-runners)".

## Cloud hosts used by {% data variables.product.prodname_dotcom %}-hosted runners

{% data variables.product.prodname_dotcom %} hosts Linux and Windows runners on `Standard_DS2_v2` virtual machines in Microsoft Azure with the {% data variables.product.prodname_actions %} runner application installed. A o aplicativo do executor hospedado no {% data variables.product.prodname_dotcom %} é uma bifurcação do agente do Azure Pipelines. Os pacotes ICMP de entrada estão bloqueados para todas as máquinas virtuais do Azure. Portanto, é possível que os comandos ping ou traceroute não funcionem. For more information about the `Standard_DS2_v2` resources, see "[Dv2 and DSv2-series](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series)" in the Microsoft Azure documentation.

{% data variables.product.prodname_dotcom %} hospedas executores do macOS na nuvem do macOS do próprio {% data variables.product.prodname_dotcom %}.

## Workflow continuity

{% data reusables.actions.runner-workflow-continuity %}

Além disso, se a execução do fluxo de trabalho entrar na fila com sucesso, mas não foi processado por um executor hospedado em {% data variables.product.prodname_dotcom %} dentro de 45 minutos, a execução do fluxo de trabalho na fila será descartada.

## Administrative privileges

As máquinas virtuais Linux e macOS executam usando autenticação sem senha `sudo`. Quando precisar executar comandos ou instalar ferramentas que exigem mais permissões que o usuário atual possui, você pode usar `sudo` sem a necessidade de fornecer uma senha. Para obter mais informações, consulte o "[Manual do Sudo](https://www.sudo.ws/man/1.8.27/sudo.man.html)".

As máquinas virtuais do Windows estão configuradas para ser executadas como administradores com Controle de Conta de Usuário (UAC) desativado. For more information, see "[How User Account Control works](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)" in the Windows documentation.

## Endereços IP

{% note %}

**Observação:** Se você usar uma lista de permissões de endereço IP para a sua organização ou conta corporativa de {% data variables.product.prodname_dotcom %}, você não poderá usar executores hospedados em {% data variables.product.prodname_dotcom %}. Em vez disso, deverá usar executores auto-hospedados. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% endnote %}

Para obter uma lista de intervalos de endereços IP que {% data variables.product.prodname_actions %} usa para executores hospedados em {% data variables.product.prodname_dotcom %}, você poderá usar a API REST de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte a chave de `ações` na resposta do ponto de extremidade "[Obtenha as metainformações do GitHub](/rest/reference/meta#get-github-meta-information)".

Os executores do Windows e Ubuntu são hospedados no Azure e, consequentemente, têm as mesmas faixas de endereços IP que os centros de dados do Azure. Os executores do macOS estão hospedados na própria nuvem do macOS de {% data variables.product.prodname_dotcom %}.

Uma vez que existem tantos intervalos de endereços IP para executores hospedados em {% data variables.product.prodname_dotcom %}, não recomendamos que você os utilize como listas de permissões para os seus recursos internos.

A lista de endereços IP de {% data variables.product.prodname_actions %} retornados pela API é atualizada uma vez por semana.

## Sistemas de arquivos

O {% data variables.product.prodname_dotcom %} executa ações e comandos de shell em diretórios específicos na máquina virtual. Os caminhos dos arquivos nas máquinas virtuais não são estáticos. Use as variáveis de ambiente que {% data variables.product.prodname_dotcom %} fornece para construir caminhos de arquivos para os diretórios `home`, `workspace` e `workflow`.

| Diretório             | Variável de ambiente | Descrição                                                                                                                                                                                                          |
| --------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `casa`                | `HOME`               | Contém dados relacionados ao usuário. Por exemplo, esse diretório pode conter credenciais de uma tentativa de login.                                                                                               |
| `workspace`           | `GITHUB_WORKSPACE`   | As ações e comandos do shell executados neste diretório. Uma ação pode modificar o conteúdo desse diretório, que fica acessível nas ações subsequentes.                                                            |
| `workflow/event.json` | `GITHUB_EVENT_PATH`  | O payload do `POST` do evento webhook que acionou o fluxo de trabalho. O {% data variables.product.prodname_dotcom %} o rescreve sempre que uma ação é executada para isolar o conteúdo do arquivo entre as ações. |

Para obter uma lista das variáveis de ambiente que {% data variables.product.prodname_dotcom %} cria para cada fluxo de trabalho, consulte "[Usar variáveis de ambiente](/github/automating-your-workflow-with-github-actions/using-environment-variables)".

### Sistema de arquivos do contêiner Docker

Ações executadas em contêineres Docker têm diretórios estáticos no caminho `/github`. No entanto, é altamente recomendável usar as variáveis de ambiente padrão para elaborar caminhos de arquivos em contêineres do Docker.

O {% data variables.product.prodname_dotcom %} reserva o prefixo de caminho `/github` e cria três diretórios para ações.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

{% ifversion fpt or ghec %}

## Leia mais
- "[Gerenciando cobrança para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)"

{% endif %}

{% endif %}
