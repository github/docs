---
title: Como restringir o período de retenção de codespaces
shortTitle: Restrict the retention period
intro: Você pode definir um período máximo de retenção de cada codespace pertencente à organização.
permissions: 'To manage retention constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 3c114fe41b06176899f9dd11a6dcd51c038c88e5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158978'
---
## Visão geral

Os {% data variables.product.prodname_github_codespaces %} são excluídos automaticamente depois que são parados e ficam inativos por um número definido de dias. O período de retenção de cada codespace é definido quando o codespace é criado e não é alterado. 

Todos que têm acesso a {% data variables.product.prodname_github_codespaces %} podem configurar um período de retenção para os codespaces que criam. A configuração inicial desse período de retenção padrão é de 30 dias. Usuários individuais podem definir esse período no intervalo de 0 a 30 dias. Para obter mais informações, confira "[Como configurar a exclusão automática de codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)". 

Como proprietário da organização, você pode configurar restrições no período máximo de retenção dos codespaces criados para os repositórios pertencentes à organização. Isso ajuda a limitar os custos de armazenamento associados a codespaces que são parados e ficam sem uso até que sejam excluídos automaticamente. Para ver mais informações sobre preços de armazenamento, confira "[Sobre a cobrança de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)". Você pode definir um período máximo de retenção para todos os repositórios ou para alguns específicos pertencentes à organização. 

### Definindo políticas específicas da organização e do repositório

Ao criar uma política, você define se ela se aplica a todos os repositórios da organização, ou apenas a repositórios específicos. Se você criar uma política para toda a organização com uma restrição de retenção de codespace, as restrições de retenção nas políticas direcionadas a repositórios específicos deverão ser menores do que a restrição configurada para toda a organização. Caso contrário elas não terão efeito. É aplicado o menor período de retenção em uma política para toda a organização, em uma política direcionada a repositórios especificados ou nas configurações pessoais de alguém.

Se você adicionar uma política para toda a organização com uma restrição de retenção, defina o período de retenção para o período mais longo aceitável. Depois, você pode adicionar políticas separadas que definam a retenção máxima para um período mais curto em repositórios específicos da organização.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Como adicionar uma política para definir um período máximo de retenção de codespace

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Clique em **Adicionar restrição** e escolha **Período de retenção**.

   ![Captura de tela do menu suspenso 'Adicionar restrição'](/assets/images/help/codespaces/add-constraint-dropdown-retention.png)

1. Clique em {% octicon "pencil" aria-label="The edit icon" %} para editar a restrição.

   ![Captura de tela do ícone de lápis para editar a restrição](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Insira o número máximo de dias em que os codespaces podem ficar parados antes de serem excluídos automaticamente e clique em **Salvar**.

   ![Captura de tela da configuração do período de retenção em dias](/assets/images/help/codespaces/maximum-days-retention.png)

   {% note %}

   **Observações**: 
   * Um dia, nesse contexto, é um período de 24 horas, começando na hora do dia em que o codespace é parado.
   * O intervalo válido é de 0 a 30 dias.
   * A configuração do período como `0` resultará na exclusão imediata dos codespaces quando eles forem parados ou quando o tempo limite deles for atingido devido à inatividade.

   {% endnote %}

{% data reusables.codespaces.codespaces-policy-targets %}
1. Para adicionar outra restrição à política, clique em **Adicionar restrição** e escolha outra restrição. Para obter informações sobre outras restrições, confira:
   * "[Como restringir o acesso a tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
   * "[Como restringir a imagem base para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   * "[Como restringir a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   * "[Como restringir o período de tempo limite ocioso](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
1. Depois de concluir a adição de restrições à política, clique em **Salvar**.

A política será aplicada a todos os codespaces que podem ser cobrados da sua organização. A restrição de período de retenção só é aplicada na criação do codespace.

## Editando uma política

Você pode excluir ou editar uma política existente. Por exemplo, você talvez queira adicionar restrições a ou removê-las de uma política.

A restrição de período de retenção só é aplicada aos codespaces quando eles são criados. A edição de uma política não tem efeito nos codespaces existentes.

1. Exibir a página "Políticas de codespaces". Para obter mais informações, confira "[Como adicionar uma política para definir um período máximo de retenção de codespace](#adding-a-policy-to-set-a-maximum-codespace-retention-period)".
1. Clique no nome da política que você deseja editar.
1. Clique no ícone de lápis ({% octicon "pencil" aria-label="The edit icon" %}) ao lado da restrição "Período de retenção".
1. Faça as alterações necessárias e clique em **Salvar**.

## Excluindo uma política 

Você pode excluir uma política a qualquer momento. A exclusão de uma política não tem efeito nos codespaces existentes.

1. Exibir a página "Políticas de codespaces". Para obter mais informações, confira "[Como adicionar uma política para definir um período máximo de retenção de codespace](#adding-a-policy-to-set-a-maximum-codespace-retention-period)".
1. Clique no botão excluir à direita da política que você deseja excluir.

   ![Captura de tela do botão excluir de uma política](/assets/images/help/codespaces/policy-delete.png)
