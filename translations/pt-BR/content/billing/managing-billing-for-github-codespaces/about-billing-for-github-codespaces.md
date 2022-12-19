---
title: Sobre o faturamento do GitHub Codespaces
shortTitle: About billing
intro: 'Saiba mais sobre os custos para usar {% data variables.product.prodname_github_codespaces %} e as cotas de uso mensal incluídas com as contas pessoais de {% data variables.product.prodname_dotcom %}.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/about-billing-for-codespaces
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-github-codespaces.md
ms.openlocfilehash: 24410721878cd77d2528a4d9e8c91633725ce661
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179545'
---
## Preços do {% data variables.product.prodname_github_codespaces %}

{% data reusables.codespaces.codespaces-free-for-personal-intro %}

Os encargos são cobrados para uma organização ou empresa quando todos os seguintes são verdadeiros:

- O repositório do qual um codespace é iniciado (ou o repositório pai, no caso de um repositório bifurcado) pertence a uma organização.
- A organização está configurada para ser cobrada por codespaces criados a partir do repositório ou forks do repositório.
- O usuário que cria o codespace pertence à organização ou é um colaborador externo afiliado à organização, e a organização optou por pagar pelo uso de codespaces de propriedade da organização por esse usuário.

Caso contrário, o uso de {% data variables.product.prodname_github_codespaces %} aplica-se à conta pessoal da pessoa que criou o codespace e consome parte do uso incluído mensalmente para essa conta pessoal, ou tal conta é cobrada de acordo com o uso da pessoa acima das cotas incluídas para ela. 

Para obter informações sobre como configurar uma organização a ser cobrada pelo uso do codespace, confira "[Como habilitar {% data variables.product.prodname_github_codespaces %} para sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)". Os planos Gratuito, Equipe e Enterprise para contas corporativas e organizacionais não incluem nenhum uso gratuito de {% data variables.product.prodname_github_codespaces %}. 

### Armazenamento incluído mensalmente e horas de núcleo para contas pessoais

As seguintes horas de uso de núcleo e de armazenamento são incluídas, gratuitamente, para contas pessoais:

| Plano de conta | Armazenamento por mês | Horas de núcleo por mês |
| ------------ | ----------------- | -------------------- |
| {% data variables.product.prodname_dotcom %} Gratuito para contas pessoais | 15 GB/mês | 120 |
| {% data variables.product.prodname_dotcom %} Pro                        | 20 GB/mês | 180 |

{% note %}

**Observações**:
- A unidade de armazenamento de GB/mês é uma medida baseada em tempo, 1 GB/mês sendo 1 GB de uso de armazenamento por um mês inteiro. O espaço em disco usado por todos os seus codespaces e pré-compilações é avaliado uma vez por hora e o uso atual de GB/mês é recalculado. Portanto, embora você tenha codespaces e pré-compilações, seu uso de GB/mês aumentará ao longo do mês. Por exemplo, se o armazenamento totalizar 15 GB e permanecer inalterado durante todo o ciclo de cobrança mensal, você terá usado 7,5 GB na metade do mês e 15 GB no final do mês. Para obter mais informações, confira "[Cobrança para uso de armazenamento](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage)" abaixo.
- Uma "hora de núcleo" é uma medida usada para uso de computação incluído. Para calcular as horas de núcleo, multiplique o número de horas para as quais um codespace foi ativo pelo multiplicador na tabela de preços abaixo. Para os tipos básicos de computador, o multiplicador é o número de núcleos de processador no computador que hospeda o codespace. Por exemplo, se você usar um computador de dois núcleos para seu codespace e ele estiver ativo por uma hora, você usará duas horas de núcleo. Se você usar um computador de oito núcleos por uma hora, você usou oito horas de núcleo. Se você usar um computador de oito núcleos por duas horas, você usou 16 horas de núcleo.

{% endnote %}

Você será notificado por email quando tiver usado 75%, 90% e 100% de suas cotas incluídas. As notificações também são exibidas em uma mensagem "notificação" no {% data variables.product.prodname_vscode_shortname %} e no cliente Web do {% data variables.product.prodname_vscode_shortname %}. Você pode desativar as notificações por email, se necessário. Para obter mais informações, confira "[Como gerenciar seu limite de gastos do GitHub Codespaces](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-usage-and-spending-limit-email-notifications)".

Quando uma conta pessoal tiver usado todo o armazenamento incluído ou o uso de computação (o que for atingido primeiro) e não tiver nenhum limite de gastos configurado, o uso de {% data variables.product.prodname_github_codespaces %} será bloqueado. Você precisa configurar uma forma de pagamento e um limite de gastos para continuar usando {% data variables.product.prodname_github_codespaces %} durante o mês de cobrança atual. No início do próximo ciclo de cobrança mensal, o uso incluído é redefinido. O armazenamento não será cobrado enquanto o uso de {% data variables.product.prodname_github_codespaces %} estiver bloqueado. 

Você pode exibir detalhes de seu uso para o mês atual a qualquer momento. Para obter mais informações, confira "[Como exibir o uso do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

Se você estiver impedido de retomar um codespace e quiser continuar trabalhando nas alterações feitas no seu codespace, poderá fazer qualquer um dos seguintes procedimentos:

- Adicionar uma forma de pagamento e um limite de gastos maior que US$ 0.
- Exportar as alterações do codespace para um branch. Para obter mais informações, confira "[Como exportar alterações para um branch](/codespaces/troubleshooting/exporting-changes-to-a-branch)".
- Aguarde até que o uso incluído mensalmente seja redefinido no início do próximo ciclo de cobrança mensal. 

Se você tiver usado todo o uso de armazenamento incluído ou o uso de computação incluído e tiver configurado uma forma de pagamento e um limite de gastos, qualquer uso adicional de codespaces pertencentes à sua conta pessoal incorrerá em encargos para qualquer tipo de uso que não tenha cota incluída restante. Você não será cobrado pelo outro tipo de uso até que também tenha usado toda a cota incluída.

### Preços para uso pago

Uma instância do {% data variables.product.prodname_github_codespaces %} (um "codespace") incorre em encargos por tempo de computação, enquanto está ativa e pela quantidade de espaço em disco que o codespace ocupa, enquanto ela existe. O custo de computação é proporcional ao número de núcleos de processador no tipo de computador escolhido para o codespace, conforme mostrado na tabela abaixo. Por exemplo, o custo de computação de usar um codespace por uma hora em um computador de 16 núcleos é oito vezes maior que em um computador de dois núcleos.

| Componente           | Tipo de computador | Unidade de medida | Multiplicador de uso incluído | Preço |
| ------------------- | ------------ | --------------- | ------------------------- | ----- |
| Computação de codespaces  |  Dois núcleos      | 1 hora          | 2                         | $ 0,18 |
|                     |  Quatro núcleos      | 1 hora          | 4                         | $ 0,36 |
|                     |  Oito núcleos      | 1 hora          | 8                         | $ 0,72 |
|                     |  16 núcleos     | 1 hora          | 16                        | $ 1,44 |
|                     |  32 núcleos     | 1 hora          | 32                        | $ 2,88 |
| Armazenamento de codespaces  |  Armazenamento     | 1 GB/mês<sup>*</sup> | N/D                | US$ 0,07 |

<sup>*</sup> Confira "[Cobrança para uso de armazenamento](#billing-for-storage-usage)" abaixo para obter detalhes da unidade de medida de GB/mês.

Se você habilitar a pré-criação de códigos, isso acarretará custos adicionais. Para obter mais informações, confira "[Cobrança de pré-compilações do {% data variables.product.prodname_codespaces %}](#billing-for-codespaces-prebuilds)".

## Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}

O {% data variables.product.prodname_github_codespaces %} é cobrado em dólares americanos (USD) de acordo com a quantidade de tempo de computação e espaço de armazenamento que seus codespaces usam. {% data reusables.codespaces.codespaces-monthly-billing %}

A cobrança de {% data variables.product.prodname_github_codespaces %} compartilha a data de cobrança, forma de pagamento e o recibo existentes em sua conta. Para obter mais informações, confira "[Como exibir suas assinaturas e data de cobrança](/articles/viewing-your-subscriptions-and-billing-date)".

{% ifversion ghec %} Se você comprou o {% data variables.product.prodname_enterprise %} por meio de um Contrato Enterprise da Microsoft, conecte sua ID de Assinatura do Azure à sua conta corporativa para habilitar e pagar pelo uso do {% data variables.product.prodname_github_codespaces %}. Para obter mais informações, confira "[Como conectar uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

### Cobrança para uso de computação
O uso de computação de um codespace é o período de tempo para o qual esse codespace está ativo multiplicado pelo multiplicador na tabela de preços para o tipo de computador do codespace. O uso total de computação é calculado somando o tempo usado por todos os codespaces que podem ser cobrados de uma conta específica. Esses totais são relatados ao serviço de cobrança a cada hora e são cobrados mensalmente.

Por exemplo, se um codespace estiver ativo por uma hora e 15 minutos, o custo de computação será o custo por hora do codespace, conforme determinado por seu tipo de computador, multiplicado por 1,25.

Você pode controlar o uso de computação interrompendo seus codespaces. Para obter mais informações, confira "[Como parar e iniciar um codespace"](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace). Os codespaces são interrompidos automaticamente após um período configurável de inatividade. O período de tempo limite pode ser configurado pelo usuário ou no nível da organização. Para obter mais informações, confira "[Como configurar o período de tempo limite do {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)" e "[Como restringir o período de tempo limite ocioso](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)."

### Cobrança para uso de armazenamento
Para fins de cobrança do {% data variables.product.prodname_github_codespaces %}, o armazenamento inclui o espaço em disco usado por todos os codespaces e as pré-compilações na conta. Isso inclui todos os arquivos que você usa em um codespace, como repositórios clonados, arquivos de configuração, dados carregados no codespace (por exemplo, como entrada ou saída do software em execução no repositório) e extensões, entre outros. O armazenamento é cobrado por todos os seus codespaces existentes, independentemente de estarem ativos ou inativos, com exceção do uso bloqueado devido ao esgotamento da cota de uso incluída ou ao atingimento do limite de gastos. A cobrança de armazenamento de um codespace termina quando ele é excluído.

{% note %}

**Observações**: 

- Quando você usa a configuração de contêiner de desenvolvimento padrão (confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)"), não contamos o contêiner padrão como armazenamento usado. Quando você cria um contêiner personalizado usando uma configuração de contêiner de desenvolvimento com uma imagem base diferente, contamos o contêiner como armazenamento usado.
- Quando você recompila o contêiner da imagem padrão, não contamos o contêiner base como armazenamento usado. Para outras imagens base, todo o armazenamento consumido pelo codespace, incluindo o contêiner base, é contado como armazenamento usado.

{% endnote %}

O armazenamento de codespace é relatado em GB/mês. Seu mês de cobrança é executado de um dia fixo em um mês até o mesmo dia no mês seguinte. Na maioria dos casos, o dia do mês é determinado pelo dia em que você iniciou seu plano atual de {% data variables.product.prodname_dotcom %}. O armazenamento de GB/mês é calculado conforme mostrado a seguir. Uma vez a cada hora, o armazenamento usado por todos os codespaces atualmente ativos e interrompidos é avaliado. Esse número é dividido pelo número de horas no mês de cobrança atual: `total storage size / hours this month`. O resultado é adicionado ao total em execução para o armazenamento de codespace do mês.

Por exemplo, se você tiver um codespace que usa 100 GB de armazenamento e existiu por uma hora, você terá usado `100 / (24 * 30) = 0.1388` GB/mês de armazenamento em um mês de 30 dias. Se o uso de {% data variables.product.prodname_github_codespaces %} durante um mês de 30 dias consistir em dois codespaces de 100 GB que existiram por três dias completos, haverá `24 * 3` relatórios por hora para o armazenamento desses codespaces, dando um total de `(24 * 3) * 200 / (24 * 30) = 20` GB/mês.

Para relatórios realizados a cada hora, o uso de armazenamento da hora anterior é calculado em segundos. Como resultado, você não será cobrado por uma hora inteira de armazenamento se um codespace não existir durante os 60 minutos completos. No final do mês, {% data variables.product.prodname_dotcom %} arredonda seu armazenamento para o MB mais próximo.

Os proprietários da organização podem:
- Listar os codespaces atualmente ativos ou interrompidos para sua organização. Para obter mais informações, confira "[Como listar os codespaces em sua organização](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)". Além do custo desses codespaces, o custo de {% data variables.product.prodname_github_codespaces %} para o mês atual pode incluir custos de codespaces anteriores ao mês atual, mas que já foram excluídos. 
- Confira o uso total de computação e armazenamento de {% data variables.product.prodname_github_codespaces %} para sua organização para o mês atual até a data de hoje. Para obter mais informações, confira "[Como exibir o uso do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".
- Defina as configurações da sua organização para gerenciar o custo de {% data variables.product.prodname_github_codespaces %}. Para obter mais informações, confira "[Como gerenciar o custo do {% data variables.product.prodname_github_codespaces %} em sua organização](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)".

Para estimar os custos dos serviços mensurados, use a [calculadora de preços](https://github.com/pricing/calculator?feature=codespaces) do {% data variables.product.prodname_dotcom %}.

### Cobrnça para pré-compilações de {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.prebuilds-definition %} Para obter mais informações, confira "[Sobre as pré-compilações de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)".

#### Custos de {% data variables.product.prodname_actions %} para pré-compilações

As pré-compilações são criadas e atualizadas executando um fluxo de trabalho de {% data variables.product.prodname_actions %} em um executor hospedado em {% data variables.product.prodname_dotcom %}. Você pode configurar como deseja que as atualizações de pré-compilação sejam disparadas automaticamente. Para obter mais informações, confira "[Como configurar pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

Assim como acontece com outros fluxos de trabalho, enquanto os fluxos de trabalho de pré-compilação estiverem em execução, eles consumirão alguns dos minutos do {% data variables.product.prodname_actions %} incluídos na sua conta, se houver, ou vão gerar custos de minutos no {% data variables.product.prodname_actions %}. Para obter mais informações sobre os preços de minutos do {% data variables.product.prodname_actions %}, confira "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)". Não há nenhum custo de computação de {% data variables.product.prodname_codespaces %} associado para criar ou atualizar pré-compilações.

Você pode acompanhar o uso de armazenamento e fluxos de trabalho de pré-compilação baixando um relatório de uso da sua conta. Para obter mais informações, confira "[Como exibir o uso do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

#### Custos de armazenamento para pré-compilações

Juntamente com os minutos do {% data variables.product.prodname_actions %}, também serão incorridas cobranças pelo armazenamento de pré-compilações associadas a cada configuração de pré-compilação para um determinado repositório e região. O armazenamento de pré-compilações é cobrado na mesma taxa que o armazenamento de codespaces.

O custo de armazenamento de uma pré-compilação em apenas uma região será semelhante ao custo de armazenamento que será incorrido para armazenar apenas um codespace criado a partir dessa pré-compilação. O custo de armazenamento para o codespace gerado poderá ser maior do que o custo da pré-compilação se, por exemplo, os comandos `updateContentCommand` e `postCreateCommand` forem usados durante a criação do codespace para baixar mais arquivos no contêiner de desenvolvimento.

Os custos totais de armazenamento associados a uma configuração de pré-compilação dependerão dos fatores a seguir.

- O preço do armazenamento por GB. Confira a tabela acima.
- O tamanho da pré-compilação gerada em GB.
- O número de regiões em que a pré-compilação está disponível (porque uma cópia da pré-compilação é armazenada em cada região).
- O número de versões mais antigas da pré-compilação que são mantidas.

O custo de armazenamento para as pré-compilações geradas por uma configuração de pré-compilação é, portanto, calculado como: `price per GB * size (GB) * regions * versions`.

#### Como controlar o custo das pré-compilações

Para reduzir o consumo de minutos do Actions, você pode definir que uma pré-compilação seja atualizada somente quando fizer uma alteração nos arquivos de configuração do contêiner de desenvolvimento ou apenas com um agendamento personalizado. Você também pode gerenciar seu uso de armazenamento ajustando o número de versões anteriores de cada pré-compilação que são retidas. Para obter mais informações, confira "[Como configurar pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".

Para limitar os custos de armazenamento associados a pré-compilações, você pode optar por criar pré-compilações somente em regiões selecionadas e especificar o número de versões mais antigas de pré-compilações que serão mantidas. Para obter mais informações, confira "[Como configurar pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".

{% note %}

**Observação**: as pré-compilações podem ser atualizadas várias vezes durante um mês de cobrança. As versões mais recentes de uma pré-compilação podem ser maiores ou menores do que as versões anteriores. Isso afetará os encargos de armazenamento. Para obter detalhes de como o armazenamento é calculado durante um mês de cobrança, confira "[Cobrança pelo uso do armazenamento](#billing-for-storage-usage)" acima.

{% endnote %}

#### Custo de codespaces criados com base em pré-compilações

O uso de codespaces criados usando pré-criações é cobrado na mesma frequência que os codespaces regulares.

## Definindo um limite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, confira "[Como gerenciar seu limite de gastos do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)".

{% data reusables.codespaces.exporting-changes %}

## Limitando os tipos de computador para codespaces de propriedade da organização

Por padrão, o tipo de computador com os recursos válidos mais baixos é usado quando um codespace é criado. No entanto, os usuários podem escolher um tipo de computador com mais recursos. Eles podem fazer isso ao criar um codespace ou podem alterar o tipo de computador de um codespace existente. Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)" e "[Como alterar o tipo de computador do seu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)".

Se um tipo de computador com mais recursos for escolhido, isso afetará a cobrança por hora desse codespace, conforme mostrado acima. 

Os proprietários da organização podem criar uma política para limitar a escolha de tipos de computador disponíveis aos usuários para codespaces que são cobrados para uma organização ou conta corporativa. Para obter mais informações, confira "[Como restringir o acesso aos tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

## Como a cobrança é administrada para repositórios bifurcados

O uso de codespaces criados a partir de um repositório bifurcado será cobrado em sua conta pessoal, a menos que o repositório upstream (ou pai) esteja em uma organização que permitiu que você, como membro ou colaborador externo da organização, usasse codespaces às custas da organização.

Por exemplo, considere que um membro ou colaborador externo de uma organização permitiu a cobrança de codespaces para esse usuário. Se o usuário tiver permissão para bifurcar um repositório privado de propriedade da organização, ele poderá criar e usar posteriormente um codespace para o novo repositório às custas da organização. Isso ocorre porque a organização é a proprietária do repositório pai. Observe que o proprietário da organização pode remover o acesso do usuário ao repositório privado, ao repositório bifurcado e, portanto, também ao codespace. O proprietário da organização também pode excluir o repositório pai, o que também excluirá o repositório bifurcado. Para obter mais informações, confira "[Como gerenciar a política de criação de forks para seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)".

{% data reusables.codespaces.codespaces-disabling-org-billing %}

## Como o faturamento é administrado quando um repositório é transferido para outra organização

O uso é calculado a cada hora. Uma organização paga pelo uso de codespaces criados de qualquer repositório pertencente à organização, em que as configurações da organização permitem que a organização seja cobrada. Para obter mais informações, confira "[Como habilitar {% data variables.product.prodname_github_codespaces %} para sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)". Quando um repositório é transferido para fora da sua organização, a propriedade e a responsabilidade de cobrança por codespaces associados a esse repositório são alterados adequadamente.

## O que acontece quando os usuários são removidos

Se um usuário for removido de uma organização ou repositório, seus codespaces serão automaticamente excluídos. 
