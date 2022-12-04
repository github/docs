---
title: Restringir o período de tempo limite ocioso
shortTitle: Restrict timeout periods
intro: Você pode definir um período máximo de tempo limite de cada codespace pertencente à organização.
permissions: 'To manage timeout constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: b07d1834078b065eee89acdb84e0e80a2db1e8a6
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158986'
---
## Visão geral

Por padrão, os codespaces atingem o tempo limite após 30 minutos de inatividade. Quando um codespace atinge o tempo limite, ele é interrompido e não incorrerá mais em encargos para uso de computação. 

As configurações pessoais de um usuário {% data variables.product.prodname_dotcom %} permitem que eles definam seu período de tempo limite para os codespaces criados por eles. Isso pode ser maior do que o período padrão de 30 minutos. Para obter mais informações, confira "[Como configurar o período de tempo limite do {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)".

Como proprietário da organização, você pode querer configurar restrições no período máximo de tempo limite ocioso para os codespaces criados para os repositórios pertencentes à organização. Isso poderá ajudar você a limitar os custos associados aos codespaces que atingirão o tempo limite após longos períodos de inatividade. Você pode definir um tempo limite máximo para todos os codespaces pertencentes à sua organização ou para os codespaces de repositórios específicos. 

{% note %}

**Observação**: as restrições de tempo limite máximo ocioso se aplicam apenas a codespaces de propriedade de sua organização.

{% endnote %}

Para obter mais informações sobre os preços de uso de computação do {% data variables.product.prodname_github_codespaces %}, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

### Comportamento ao definir uma restrição máxima de tempo limite ocioso

Se alguém definir o tempo limite ocioso padrão para 90 minutos em suas configurações pessoais e iniciar um espaço de código para um repositório com uma restrição de tempo limite máximo ocioso de 60 minutos, o espaço de código expirará após 60 minutos de inatividade. Quando a criação do codespace for concluída, uma mensagem explicando isso será exibida:

> O tempo limite ocioso para esse codespace é definido como 60 minutos em conformidade com a política da sua organização.

### Definindo políticas específicas da organização e do repositório

Ao criar uma política, você define se ela se aplica a todos os repositórios da organização, ou apenas a repositórios específicos. Se você criar uma política em toda a organização com uma restrição de tempo limite, as restrições de tempo limite em quaisquer políticas direcionadas a repositórios específicos deverão estar dentro da restrição configurada para toda a organização. O período de tempo limite mais curto em uma política de toda a organização, uma política direcionada a repositórios especificados ou nas configurações pessoais de alguém – é aplicado.

Se você adicionar uma política de toda a organização com uma restrição de tempo limite, deverá definir o tempo limite para o período aceitável mais longo. Em seguida, você pode adicionar políticas separadas que definem o tempo limite máximo para um período mais curto para repositórios específicos em sua organização.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Adicionar uma política para definir um período máximo de tempo limite ocioso

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Clique em  **Adicionar restrição** e escolha **Tempo limite máximo de ociosidade**.

   ![Captura de tela do menu suspenso 'Adicionar restrição'](/assets/images/help/codespaces/add-constraint-dropdown-timeout.png)

1. Clique em {% octicon "pencil" aria-label="The edit icon" %} para editar a restrição.

   ![Captura de tela do ícone de lápis para editar a restrição](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Insira o número máximo de minutos em que os codespaces podem permanecer inativos antes de atingirem o tempo limite e clique em **Salvar**.

   ![Captura de tela da configuração do tempo limite máximo em minutos](/assets/images/help/codespaces/maximum-minutes-timeout.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Para adicionar outra restrição à política, clique em **Adicionar restrição** e escolha outra restrição. Para obter informações sobre outras restrições, confira:
   * "[Como restringir o acesso a tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
   * "[Como restringir a imagem base para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   * "[Como restringir a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   * "[Como restringir o período de retenção de codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
1. Depois de concluir a adição de restrições à política, clique em **Salvar**.

A política será aplicada a todos os codespaces que podem ser cobrados da sua organização. A restrição de tempo limite também é aplicada aos codespaces existentes na próxima vez que eles forem iniciados.

## Editando uma política

Você pode excluir ou editar uma política existente. Por exemplo, você talvez queira adicionar restrições a ou removê-las de uma política.

1. Exibir a página "Políticas de codespaces". Para obter mais informações, confira "[Adicionar uma política para definir um período máximo de tempo limite ocioso](#adding-a-policy-to-set-a-maximum-idle-timeout-period)".
1. Clique no nome da política que você deseja editar.
1. Clique no ícone de lápis ({% octicon "pencil" aria-label="The edit icon" %}) ao lado da restrição "Tempo limite ocioso máximo".
1. Faça as alterações necessárias e clique em **Salvar**.

## Excluindo uma política 

1. Exibir a página "Políticas de codespaces". Para obter mais informações, confira "[Adicionar uma política para definir um período máximo de tempo limite ocioso](#adding-a-policy-to-set-a-maximum-idle-timeout-period)".
1. Clique no botão excluir à direita da política que você deseja excluir.

   ![Captura de tela do botão excluir de uma política](/assets/images/help/codespaces/policy-delete.png)
