---
title: Usando executores maiores
shortTitle: Larger runners
intro: '{% data variables.product.prodname_dotcom %} oferece executores maiores, com mais RAM e mais CPU.'
miniTocMaxHeadingLevel: 3
product: '{% data reusables.gated-features.hosted-runners %}'
versions:
  feature: actions-hosted-runners
ms.openlocfilehash: eca33ee8b427f918a3db5d8b4ca05947b7662896
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/01/2022
ms.locfileid: '148120870'
---
## Visão geral dos {% data variables.actions.hosted_runner %}s

Além dos [executores hospedados {% data variables.product.prodname_dotcom %} padrão](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources), o {% data variables.product.prodname_dotcom %} também oferece aos clientes de planos {% data variables.product.prodname_team %} e {% data variables.product.prodname_ghe_cloud %} um intervalo de {% data variables.actions.hosted_runner %}s com mais RAM e mais CPU. Esses executores são hospedados por {% data variables.product.prodname_dotcom %} e têm o aplicativo executor e outras ferramentas pré-instalados.

Quando {% data variables.actions.hosted_runner %}s são habilitados para a organização, um grupo de executores padrão é criado automaticamente com um conjunto de quatro {% data variables.actions.hosted_runner %} pré-configurados.

Ao adicionar um {% data variables.actions.hosted_runner %} a uma organização, você está definindo um tipo de computador dentre uma seleção de especificações de hardware e imagens de sistema operacional disponíveis. {% data variables.product.prodname_dotcom %} criarão várias instâncias desse executor que são escaladas verticalmente para corresponder às demandas de trabalho da sua organização, com base nos limites de dimensionamento automático definidos.

## Especificações de computador para {% data variables.actions.hosted_runner %}s 

|Tamanho (vCPU) | Memória (GB) | Armazenamento (SSD) |
| ------------- | ------------- | ------------- |
|4 núcleos | 16 de RAM  | 150 GB|
| 8 núcleos | 32 de RAM | 300 GB |
|16 núcleos| 64 de RAM | 600 GB |
|32 núcleos| 128 de RAM| 1.200 GB|
|64 núcleos| 256 de RAM | 2.040 GB|

## Visão geral de arquitetura de {% data variables.actions.hosted_runner %}s

Os {% data variables.actions.hosted_runner %}s são gerenciados no nível da organização, em que são organizados em grupos que podem conter várias instâncias do executor. Eles também podem ser criados no nível da empresa e compartilhados com as organizações na hierarquia. Depois de criar um grupo, você pode adicionar um executor ao grupo e atualizar seus fluxos de trabalho para direcionar o nome do grupo ou o rótulo atribuído a {% data variables.actions.hosted_runner %}. Você também pode controlar quais repositórios têm permissão para enviar trabalhos ao grupo para processamento. Para obter mais informações sobre grupos, confira "[Como controlar o acesso aos {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)".

No diagrama a seguir, uma classe de executor hospedado nomeado `ubuntu-20.04-16core` foi definida com configuração personalizada de hardware e sistema operacional.

![Diagrama explicando {% data variables.actions.hosted_runner %}](/assets/images/hosted-runner.png)

1. As instâncias desse executor são criadas e adicionadas automaticamente a um grupo chamado `grp-ubuntu-20.04-16core`. 
2. Os executores receberam o rótulo `ubuntu-20.04-16core`. 
3. Trabalhos de fluxo de trabalho usam o rótulo `ubuntu-20.04-16core` na chave `runs-on` deles para indicar o tipo de executor necessário para executar o trabalho.
4. {% data variables.product.prodname_actions %} verifica o grupo de executores para ver se o seu repositório está autorizado a enviar trabalhos ao executor.
5. O trabalho é executado na próxima instância disponível do executor `ubuntu-20.04-16core`.

## Autoscaling {% data variables.actions.hosted_runner %}s

Seus {% data variables.actions.hosted_runner %}s podem ser configurados para escalar automaticamente a fim de atender às suas necessidades. Quando os trabalhos são enviados para processamento, mais computadores podem ser provisionados automaticamente para executar os trabalhos até atingir um limite máximo predefinido. Cada computador gerencia apenas um trabalho por vez, portanto, essas configurações determinam efetivamente o número de trabalhos que podem ser executados simultaneamente. 

Durante o processo de implantação do executor, você pode configurar a opção _Max_, que permite controlar seus custos definindo o número máximo de computadores paralelos criados neste conjunto. Um valor mais alto aqui pode ajudar a evitar que os fluxos de trabalho sejam bloqueados devido ao paralelismo.

## Networking for {% data variables.actions.hosted_runner %}s

Por padrão, os {% data variables.actions.hosted_runner %}s recebem um endereço IP dinâmico que é alterado para cada trabalho executado. Opcionalmente, os clientes de {% data variables.product.prodname_ghe_cloud %} podem configurar os {% data variables.actions.hosted_runner %}s deles para receber um endereço IP estático do pool de endereços IP do {% data variables.product.prodname_dotcom %}. Quando habilitadas, as instâncias de {% data variables.actions.hosted_runner %} receberão um endereço de um intervalo exclusivo para o executor, permitindo que você use esse intervalo para configurar uma lista de permissões de firewall. {% ifversion fpt %}Você pode usar até dez intervalos de endereços IP estáticos no total em todos os {% data variables.actions.hosted_runner %}s{% endif %}{% ifversion ghec %}Você pode usar até dez intervalos de endereços IP estáticos para os {% data variables.actions.hosted_runner %}s criados no nível da empresa. Além disso, você pode usar até dez intervalos de endereços IP estáticos para os {% data variables.actions.hosted_runner %}s criados no nível da organização, para cada organização na empresa{% endif %}.

{% note %}

**Observação**: se os executores não forem usados por mais de 30 dias, os intervalos de endereços IP deles serão removidos automaticamente e não poderão ser recuperados.

{% endnote %}

## Planejamento para {% data variables.actions.hosted_runner %}s

### Criar um grupo de executores

Os grupos de executores são usados para coletar conjuntos de máquinas virtuais e criar um limite de segurança ao redor delas. Em seguida, você pode decidir quais organizações ou repositórios têm permissão para executar trabalhos nesses conjuntos de computadores. Durante o processo de implantação de {% data variables.actions.hosted_runner %}, o executor pode ser adicionado a um grupo existente ou, caso contrário, ele ingressará em um grupo padrão. Você pode criar um grupo seguindo as etapas em "[Como controlar o acesso aos {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)".

### Noções básicas sobre cobrança

{% note %}

**Observação**: os {% data variables.actions.hosted_runner %}s não usam minutos de direito incluídos e não são gratuitos para repositórios públicos.

{% endnote %}

Em comparação com os executores hospedados {% data variables.product.prodname_dotcom %} padrão, os {% data variables.actions.hosted_runner %}s são cobrados de maneira diferente. Para obter mais informações, confira "[Taxas por minuto](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)".

## Como adicionar um {% data variables.actions.hosted_runner %} a uma empresa

Você pode adicionar os {% data variables.actions.hosted_runner %}s a uma empresa, em que eles podem ser atribuídos a várias organizações. Então, os administradores da organização poderão controlar quais repositórios podem usar os executores. Para adicionar um {% data variables.actions.hosted_runner %} a uma empresa, você deve ser o proprietário da empresa.

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.add-hosted-runner %}
1. Para permitir que as organizações acessem seus {% data variables.actions.hosted_runner %}s, especifique a lista de organizações que podem usá-los. Para obter mais informações, confira "[Como gerenciar o acesso aos seus executores](#managing-access-to-your-runners)".

## Como adicionar um {% data variables.actions.hosted_runner %} a uma organização

Você pode adicionar um {% data variables.actions.hosted_runner %} a uma organização em que os administradores poderão controlar quais repositórios podem usá-lo. 

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.add-hosted-runner %}
1. Para permitir que os repositórios acessem seus {% data variables.actions.hosted_runner %}s, adicione-os à lista de repositórios que podem usá-los. Para obter mais informações, confira "[Como gerenciar o acesso aos seus executores](#managing-access-to-your-runners)".

## Como executar trabalhos em seu executor

Depois que o tipo de executor for definido, você poderá atualizar os arquivos YAML de fluxo de trabalho para enviar trabalhos às instâncias de executor recém-criadas para processamento. Você pode usar grupos de executores ou rótulos para definir onde seus trabalhos são executados. 

Somente contas de proprietário ou administrador podem ver as configurações do executor. Usuários não administrativos podem entrar em contato com o administrador da organização para descobrir quais executores estão habilitados. O administrador da sua organização pode criar novos executores e grupos de executores, bem como configurar permissões para especificar quais repositórios podem acessar um grupo de executores.

### Usar grupos para controlar onde os trabalhos são executados

{% data reusables.actions.jobs.example-runs-on-groups %}

### Usar rótulos para controlar onde os trabalhos são executados

Neste exemplo, um grupo de executores é preenchido com executores Ubuntu de 16 núcleos, que também receberam o rótulo `ubuntu-20.04-16core`. A chave `runs-on` envia o trabalho para qualquer executor disponível com um rótulo correspondente:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      labels: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

### Usar rótulos e grupos para controlar onde os trabalhos são executados

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

### Usar vários rótulos

Você pode especificar vários rótulos que precisam ser correspondidos para que um trabalho seja executado em um executor. Um executor precisará corresponder a todos os rótulos para ser qualificado para executar o trabalho.

Neste exemplo, um executor precisará corresponder a todos os três rótulos para executar o trabalho:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      labels: [ ubuntu-20.04-16core, gpu, qa ]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

## Como gerenciar o acesso aos seus executores

{% note %}

**Observação**: antes que seus fluxos de trabalho possam enviar trabalhos para os {% data variables.actions.hosted_runner %}s, primeiro você deve configurar permissões para o grupo de executores. Confira as seções a seguir para obter mais informações.

{% endnote %}

Os grupos de executores são usados para controlar quais repositórios podem executar trabalhos em seus {% data variables.actions.hosted_runner %}s. Você deve conceder acesso ao grupo de cada nível da hierarquia de gerenciamento, dependendo de onde definiu os {% data variables.actions.hosted_runner %}:

- **Executores no nível da empresa**: configure o grupo de executores para conceder acesso a todas as organizações necessárias. Além disso, para cada organização, você deve configurar o grupo para especificar quais repositórios têm acesso permitido.
- **Executores no nível da organização**: configure o grupo de executores especificando quais repositórios têm acesso permitido.

Por exemplo, o diagrama a seguir tem um grupo de executores chamado `grp-ubuntu-20.04-16core` no nível da empresa. Antes que o repositório chamado `octo-repo` possa usar os executores do grupo, primeiro você deve configurar o grupo no nível da empresa para permitir o acesso da organização `octo-org`; em seguida, você deve configurar o grupo no nível da organização para permitir o acesso de `octo-repo`:

![Diagrama explicando os grupos de {% data variables.actions.hosted_runner %}](/assets/images/hosted-runner-mgmt.png)

### Como permitir que os repositórios acessem um grupo de executores

Este procedimento demonstra como configurar permissões de grupo nos níveis da empresa e da organização:

{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
  - Para os grupos de executores de uma empresa: em **Acesso da organização**, modifique quais organizações podem acessar o grupo de executores.
  - Para os grupos de executores de uma organização: em **Acesso do repositório**, modifique quais repositórios podem acessar o grupo de executores.

{% warning %}

**Aviso**:

{% data reusables.actions.hosted-runner-security %}

Para obter mais informações, confira "[Como controlar o acesso aos {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)".

{% endwarning %}
