---
title: Usando runners maiores
intro: '{% data variables.product.prodname_dotcom %} oferece executores maiores, com mais RAM e CPU.'
miniTocMaxHeadingLevel: 3
product: '{% data reusables.gated-features.hosted-runners %}'
versions:
  feature: actions-hosted-runners
shortTitle: 'Usando {% data variables.actions.hosted_runner %}s'
---

## Visão geral de {% data variables.actions.hosted_runner %}s

Além dos [executores auto hospedados de {% data variables.product.prodname_dotcom %} padrão](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources), {% data variables.product.prodname_dotcom %} também oferece aos clientes em {% data variables.product.prodname_team %} e {% data variables.product.prodname_ghe_cloud %} planeja uma gama de {% data variables.actions.hosted_runner %}s com mais RAM e CPU. Estes executores são hospedados pelo {% data variables.product.prodname_dotcom %} e têm o executor, o aplicativo e outras ferramentas pré-instalados.

Ao adicionar um {% data variables.actions.hosted_runner %} a uma organização, você irá definir um tipo de máquina a partir de uma seleção de especificações de hardware disponíveis e imagens do sistema operacional. O {% data variables.product.prodname_dotcom %} criará várias instâncias deste executor que dimensionam para corresponder às demandas de trabalho da sua organização, baseado nos limites de dimensionamento automático que você definiu.

## Visão geral da arquitetura de {% data variables.actions.hosted_runner %}s

Os {% data variables.actions.hosted_runner %} são gerenciados ao nível da organização, onde estão organizados em grupos que podem conter várias instâncias do executor. Também podem ser criados a nível da empresa e partilhados com organizações na hierarquia. Uma vez criado um grupo, você pode adicionar um executor ao grupo e atualizar seus fluxos de trabalho para direcionar a etiqueta atribuída ao {% data variables.actions.hosted_runner %}. Você também pode controlar quais repositórios podem enviar trabalhos para o grupo para processamento. Para obter mais informações sobre os grupos, consulte "[Controlando o acesso a {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)".

No diagrama a seguir, uma classe de executor hospedado denominado `ubuntu-20.04-16core` foi definida com configuração personalizada de hardware e sistema operacional.

![O diagrama que explica {% data variables.actions.hosted_runner %}](/assets/images/hosted-runner.png)

1. As instâncias deste executor são criadas automaticamente e adicionadas a um grupo denominado `ubuntu-20.04-16core`.
2. Os executores foram atribuídos à etiqueta `ubuntu-20.04-16core`.
3. Os trabalhos do fluxo de trabalho usam a etiqueta `ubuntu-20.04-16core` na sua chave `runs-on` para indicar o tipo de executor de que precisam para executar o trabalho.
4. {% data variables.product.prodname_actions %} verifica o grupo de executores para ver se o repositório está autorizado a enviar trabalhos para o executor.
5. O trabalho é executado na próxima instância disponível do executor `ubuntu-20.04-16core`.

## Dimensionando {% data variables.actions.hosted_runner %}s automaticamente

Seus {% data variables.actions.hosted_runner %}s podem ser configurados para dimensionados para atender às suas necessidades automaticamente. Quando os trabalhos são enviados para processamento, é possível que mais máquinas sejam fornecidas automaticamente para executar os trabalhos até que o limite máximo predefinido seja atingido. Cada máquina lida apenas com um trabalho de cada vez, para que essas configurações determinem efetivamente o número de trabalhos que podem ser executados simultaneamente.

Durante o processo de implantação do executor, você pode configurar a opção _Max_, que permite que você controle seus custos definindo o número máximo de máquinas paralelas que são criadas neste conjunto. Um valor mais alto pode ajudar a evitar que fluxos de trabalho sejam bloqueados devido ao paralelismo.

## Rede para {% data variables.actions.hosted_runner %}s

Por padrão, {% data variables.actions.hosted_runner %}s recebem um endereço IP dinâmico que muda para a execução de cada trabalho. Opcionalmente, os clientes de {% data variables.product.prodname_ghe_cloud %} podem configurar seus {% data variables.actions.hosted_runner %}s para receber um endereço IP estático do conjunto de endereços IP de {% data variables.product.prodname_dotcom %}. Quando habilitadas, as instâncias do {% data variables.actions.hosted_runner %} receberão um endereço de um intervalo que é exclusivo para o executor, permitindo que você use este intervalo para configurar uma lista de permissão do firewall. Você pode usar até 10 intervalos estáticos de endereços de IP no total entre todos os seus {% data variables.actions.hosted_runner %}.

{% note %}

**Observação**: Se os executores não são usados por mais de 30 dias, seus intervalos de endereços IP são removidos automaticamente e não podem ser recuperados.

{% endnote %}

## Planejamento para {% data variables.actions.hosted_runner %}s

### Criar um grupo de executores

Os grupos de executores são usados para coletar conjuntos de máquinas virtuais e criar um limite de segurança em torno delas. Em seguida, você pode decidir quais organizações ou repositórios podem executar trabalhos nesses conjuntos de máquinas. Durante o processo de implantação de {% data variables.actions.hosted_runner %}, o executor pode ser adicionado a um grupo existente, ou então entrará em um grupo padrão. Você pode criar um grupo seguindo os passos em "[Controlando o acesso a {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)".

### Entendendo a cobrança

Comparado com os executores padrão hospedados em {% data variables.product.prodname_dotcom %}, {% data variables.actions.hosted_runner %}s são cobrados de maneira diferente. Para obter mais informações, consulte "[Tarifas por minuto](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)".

## Adicionando um {% data variables.actions.hosted_runner %} a uma empresa

Você pode adicionar {% data variables.actions.hosted_runner %}s a uma empresa, onde podem ser atribuídos a várias organizações. Os administradores da organização podem controlar quais repositórios podem usar os executores. Para adicionar um {% data variables.actions.hosted_runner %} a uma empresa, você deve ser proprietário de uma empresa.

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.add-hosted-runner %}
1. Para permitir que as organizações acessem seus {% data variables.actions.hosted_runner %}, você deve especificar a lista de organizações que podem usá-los. Para obter mais informações, consulte "[Gerenciando o acesso aos seus executores](#managing-access-to-your-runners)".

## Adicionando um {% data variables.actions.hosted_runner %} a uma organização

É possível adicionar um {% data variables.actions.hosted_runner %} a uma organização, onde os administradores da organização podem controlar quais repositórios podem usá-lo.

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% data reusables.actions.add-hosted-runner %}
1. Para permitir que os repositórios acessem seus {% data variables.actions.hosted_runner %}, adicione-os à lista de repositórios que podem usá-lo. Para obter mais informações, consulte "[Gerenciando o acesso aos seus executores](#managing-access-to-your-runners)".

## Executando trabalhos no seu executor

Depois que seu tipo de executor for definido, você poderá atualizar seus fluxos de trabalho para enviar trabalhos para as instâncias do executor para processamento. Neste exemplo, um grupo de executores é preenchido com executores do Ubuntu 16 núcleos, aos quais foi atribuído a etiqueta `ubuntu-20.04-16core`. Se você tem um runner que corresponde a esta etiqueta, o trabalho `check-bats-version` usará a tecla `runs-on` para apontar para esse executor sempre que o trabalho for executado:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses:{% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

## Gerenciando o acesso aos executores

{% note %}

**Observação**: Antes que seus fluxos de trabalho possam enviar trabalhos para {% data variables.actions.hosted_runner %}, você deve primeiro configurar as permissões para o grupo de executores. Veja as seguintes seções para obter mais informações.

{% endnote %}

Grupos de executores são usados para controlar quais repositórios podem executar trabalhos nos seus {% data variables.actions.hosted_runner %}. Você deve conceder acesso ao grupo a cada nível da hierarquia de gerenciamento, dependendo de onde você definiu o {% data variables.actions.hosted_runner %}:

- **Executores no nível da empresa**: Configure o grupo de executores para conceder acesso a todas as organizações necessárias. Além disso, para cada organização, você deve configurar o grupo para especificar quais repositórios podem acessar.
- **Executores no nível da organização**: Configure o grupo de executores especificando quais repositórios têm acesso permitido.

Por exemplo, o diagrama a seguir tem um grupo de executores denominado `grp-ubuntu-20.04-16core` no nível corporativo. Antes que o repositório denominado `octo-repo` possa usar os executores no grupo, você deve primeiro configurar o grupo no nível corporativo para permitir acesso da organização `octo-org`; em seguida, você deve configurar o grupo no nível da organização para permitir o acesso a partir de `octo-repo`:

![Diagrama que explica os grupos de {% data variables.actions.hosted_runner %}](/assets/images/hosted-runner-mgmt.png)

### Permitindo que repositórios acessem um grupo de executores

Este procedimento demonstra como configurar as permissões de grupo nos níveis da empresa e organização:

{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
  - Para grupos de executores em uma empresa: Em **Acesso da organização**, modifique quais organizações podem acessar o grupo de executores.
  - Para grupos de executores em uma organização: em **Acesso do repositório**, modifique quais repositórios podem acessar o grupo de executores.

{% warning %}

**Aviso**:

{% data reusables.actions.hosted-runner-security %}

Para obter mais informações, consulte "[Controlando acesso a {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)".

{% endwarning %}
