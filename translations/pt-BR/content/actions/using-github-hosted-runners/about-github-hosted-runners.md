---
title: Sobre executores hospedados no GitHub
shortTitle: About GitHub-hosted runners
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
ms.openlocfilehash: f44c5bcf8c6cc9c48a2910d2a0d371087debd158
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180682'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral dos executores hospedados no {% data variables.product.prodname_dotcom %}

Os executores são as máquinas que fazem as execuções em um fluxo de trabalho {% data variables.product.prodname_actions %}. Por exemplo, um executor pode clonar seu repositório localmente, instalar software de teste e executar comandos que avaliam seu código. 

{% data variables.product.prodname_dotcom %} fornece executores que você pode usar para executar seus trabalhos ou você pode [hospedar seus próprios executores](/actions/hosting-your-own-runners/about-self-hosted-runners). Cada executor hospedado em {% data variables.product.prodname_dotcom %} é uma nova VM (máquina virtual) hospedada por {% data variables.product.prodname_dotcom %} com o aplicativo executor e outras ferramentas pré-instaladas e está disponível com Ubuntu Linux, Sistemas operacionais Windows ou macOS. Ao usar um executor hospedada no {% data variables.product.prodname_dotcom %}, a manutenção e as atualizações da máquina são feitas para você.

{% ifversion not ghes %}

## Como usar um executor hospedado em {% data variables.product.prodname_dotcom %}

Para usar um executor hospedado em {% data variables.product.prodname_dotcom %}, crie uma tarefa e use `runs-on` para especificar o tipo de executor que processará a tarefa, como `ubuntu-latest`, `windows-latest`, ou `macos-latest`. Para ver a lista completa de tipos de corredores, confira "[Executores com suporte e recursos de hardware](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)".

Quando o trabalho começa, {% data variables.product.prodname_dotcom %} provisiona automaticamente uma nova VM para esse trabalho. Todas as etapas da tarefa são executadas na VM, permitindo que as etapas dessa tarefa compartilhem informações usando o sistema de arquivos do executor. Você pode executar fluxos de trabalho diretamente na VM ou em um contêiner do Docker. Quando o trabalho for concluído, a VM será desativada automaticamente.

O diagrama a seguir demonstra como dois trabalhos em um fluxo são executados em dois executores hospedados em {% data variables.product.prodname_dotcom %} diferentes. 

![Dois executores processando trabalhos separados](/assets/images/help/images/overview-github-hosted-runner.png)

O fluxo de trabalho de exemplo a seguir tem dois trabalhos, nomeados `Run-npm-on-Ubuntu` e `Run-PSScriptAnalyzer-on-Windows`. Quando esse fluxo de trabalho é disparado, {% data variables.product.prodname_dotcom %} provisiona uma nova máquina virtual para cada trabalho. 

- O trabalho nomeado `Run-npm-on-Ubuntu` é executado em uma VM Linux, porque o trabalho `runs-on:` especifica `ubuntu-latest`. 
- O trabalho nomeado `Run-PSScriptAnalyzer-on-Windows` é executado em uma VM do Windows, porque o trabalho `runs-on:` especifica `windows-latest`. 

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

Enquanto o trabalho é executado, os logs e a saída podem ser exibidos na interface do usuário {% data variables.product.prodname_dotcom %}:

![Saída de trabalho na interface do usuário de ações](/assets/images/help/repository/actions-runner-output.png)

{% data reusables.actions.runner-app-open-source %}

## Executores e recursos de hardware compatíveis

{% ifversion actions-hosted-runners %}

{% note %}

**Observação**: {% data variables.product.prodname_dotcom %} também oferece {% data variables.actions.hosted_runner %}s, que estão disponíveis em configurações maiores. Para obter mais informações, confira as "[Especificações de máquina para {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners#machine-specs-for-larger-runners)".  

{% endnote %} {% endif %}

Especificação de hardware para máquinas virtuais do Windows e Linux:
- CPU de dois núcleos (x86_64)
- 7 GB de RAM
- 14 GB de espaço de SSD

Especificação de hardware para máquinas virtuais do macOS:
- CPU de três núcleos (x86_64)
- 14 GB de RAM
- 14 GB de espaço de SSD

{% data reusables.actions.supported-github-runners %}

Lista de registros de fluxo de trabalho do executor usado para executar um trabalho. Para obter mais informações, confira "[Como ver o histórico de execução do fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".

## Software compatível

As ferramentas do software incluídas em executores hospedados em {% data variables.product.prodname_dotcom %} são atualizadas semanalmente. O processo de atualização leva vários dias, e a lista de programas de software pré-instalados no branch `main` é atualizada após o término de toda a implantação.

### Software pré-instalado

Os registros de fluxo de trabalho incluem um link para as ferramentas pré-instaladas no executor exato. Para encontrar essas informações no log de fluxo de trabalho, expanda a seção `Set up job`. Nessa seção, expanda a seção `Runner Image`. O link depois de `Included Software` descreverá as ferramentas pré-instaladas no executor que executou o fluxo de trabalho.
![Link de programas de software instalado](/assets/images/actions-runner-installed-software-link.png) Para obter mais informações, confira "[Como ver o histórico de execução de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".

Para a lista geral das ferramentas incluídas para cada sistema operacional do executor, consulte os links abaixo:

* [Ubuntu 22.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2204-Readme.md)
* [Ubuntu 20.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2004-Readme.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu1804-Readme.md) (preterido)
* [Windows Server 2022](https://github.com/actions/runner-images/blob/main/images/win/Windows2022-Readme.md)
* [Windows Server 2019](https://github.com/actions/runner-images/blob/main/images/win/Windows2019-Readme.md)
* [macOS 12](https://github.com/actions/runner-images/blob/main/images/macos/macos-12-Readme.md)
* [macOS 11](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md)
* [macOS 10.15](https://github.com/actions/runner-images/blob/main/images/macos/macos-10.15-Readme.md)

Executores hospedados no {% data variables.product.prodname_dotcom %} incluem as ferramentas integradas padrão do sistema operacional, além dos pacotes listados nas referências acima. Por exemplo, os executores do Ubuntu e do macOS incluem `grep`, `find` e `which`, entre outras ferramentas padrão. 

### Usar software pré-instalado

Recomendamos usar ações para interagir com o software instalado nos executores. Essa abordagem tem vários benefícios:
- Normalmente, as ações fornecem funcionalidades mais flexíveis, como seleção de versões, capacidade de passar argumentos e parâmetros
- Ela garante que as versões da ferramenta usadas no seu fluxo de trabalho permaneçam as mesmas independentemente das atualizações do software

Se houver uma ferramenta que você deseja solicitar, abra um problema em [actions/runner-images](https://github.com/actions/runner-images). Este repositório também contém anúncios sobre todas as principais atualizações de software nos executores.

### Instalando software adicional

Você pode instalar um software adicional em executores hospedados em {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como personalizar executores hospedados no GitHub](/actions/using-github-hosted-runners/customizing-github-hosted-runners)".

## Hosts da nuvem usados pelos executores hospedados em {% data variables.product.prodname_dotcom %}

O {% data variables.product.prodname_dotcom %} hospeda executores do Linux e Windows nas máquinas virtuais `Standard_DS2_v2` no Microsoft Azure com o aplicativo do executor {% data variables.product.prodname_actions %} instalado. A o aplicativo do executor hospedado no {% data variables.product.prodname_dotcom %} é uma bifurcação do agente do Azure Pipelines. Os pacotes ICMP de entrada estão bloqueados para todas as máquinas virtuais do Azure. Portanto, é possível que os comandos ping ou traceroute não funcionem. Para ver mais informações sobre os recursos de `Standard_DS2_v2`, confira "[Série Dv2 e DSv2](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series)" na documentação do Microsoft Azure.

{% data variables.product.prodname_dotcom %} hospedas executores do macOS na nuvem do macOS do próprio {% data variables.product.prodname_dotcom %}.

## Continuidade do fluxo de trabalho

{% data reusables.actions.runner-workflow-continuity %}

Além disso, se a execução do fluxo de trabalho entrar na fila com sucesso, mas não foi processado por um executor hospedado em {% data variables.product.prodname_dotcom %} dentro de 45 minutos, a execução do fluxo de trabalho na fila será descartada.

## Privilégios administrativos

As máquinas virtuais do Linux e do macOS são executadas por meio do `sudo` sem senha. Quando precisar executar comandos ou instalar ferramentas que exigem mais privilégios do que o usuário atual, use o `sudo` sem precisar fornecer uma senha. Para obter mais informações, confira o "[Manual do sudo](https://www.sudo.ws/man/1.8.27/sudo.man.html)".

As máquinas virtuais do Windows estão configuradas para ser executadas como administradores com Controle de Conta de Usuário (UAC) desativado. Para obter mais informações, confira "[Como funciona o Controle de Conta de Usuário](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)" na documentação do Windows.

## Endereços IP

{% note %}

**Observação:** se você usar uma lista de permissões de endereço IP para sua conta de organização ou de empresa do {% data variables.product.prodname_dotcom %}, não poderá usar os executores hospedados no {% data variables.product.prodname_dotcom %} e, em vez disso, precisará usar executores auto-hospedados. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".

{% endnote %}

Para obter uma lista de intervalos de endereços IP que {% data variables.product.prodname_actions %} usa para executores hospedados em {% data variables.product.prodname_dotcom %}, você poderá usar a API REST de {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira a chave `actions` na resposta do ponto de extremidade "[Obter metadados do GitHub](/rest/reference/meta#get-github-meta-information)".

Os executores do Windows e Ubuntu são hospedados no Azure e, consequentemente, têm as mesmas faixas de endereços IP que os centros de dados do Azure. Os executores do macOS estão hospedados na própria nuvem do macOS de {% data variables.product.prodname_dotcom %}.

Uma vez que existem tantos intervalos de endereços IP para executores hospedados em {% data variables.product.prodname_dotcom %}, não recomendamos que você os utilize como listas de permissões para os seus recursos internos.

A lista de endereços IP de {% data variables.product.prodname_actions %} retornados pela API é atualizada uma vez por semana. 

## Sistemas de arquivos

O {% data variables.product.prodname_dotcom %} executa ações e comandos de shell em diretórios específicos na máquina virtual. Os caminhos dos arquivos nas máquinas virtuais não são estáticos. Use as variáveis de ambiente fornecidas pelo {% data variables.product.prodname_dotcom %} para construir caminhos de arquivo para os diretórios `home`, `workspace` e `workflow`.

| Diretório | Variável de ambiente | Descrição |
|-----------|----------------------|-------------|
| `home` | `HOME` | Contém dados relacionados ao usuário. Por exemplo, esse diretório pode conter credenciais de uma tentativa de login. |
| `workspace` | `GITHUB_WORKSPACE` | As ações e comandos do shell executados neste diretório. Uma ação pode modificar o conteúdo desse diretório, que fica acessível nas ações subsequentes. |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | A carga `POST` do evento de webhook que disparou o fluxo de trabalho. O {% data variables.product.prodname_dotcom %} o rescreve sempre que uma ação é executada para isolar o conteúdo do arquivo entre as ações.

Para ver uma lista das variáveis de ambiente criadas pelo {% data variables.product.prodname_dotcom %} para cada fluxo de trabalho, confira "[Como usar variáveis de ambiente](/github/automating-your-workflow-with-github-actions/using-environment-variables)".

### Sistema de arquivos do contêiner Docker

As ações executadas em contêineres do Docker têm diretórios estáticos no caminho `/github`. No entanto, é altamente recomendável usar as variáveis de ambiente padrão para elaborar caminhos de arquivos em contêineres do Docker.

O {% data variables.product.prodname_dotcom %} reserva o prefixo de caminho `/github` e cria três diretórios para as ações.

- `/github/home`
- `/github/workspace` – {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

## Leitura adicional
- "[Como gerenciar a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)".
- Você pode usar uma estratégia de matriz para executar seus trabalhos em várias imagens. Para obter mais informações, confira "[Como usar uma matriz para seus trabalhos](/actions/using-jobs/using-a-matrix-for-your-jobs)".

{% endif %}
