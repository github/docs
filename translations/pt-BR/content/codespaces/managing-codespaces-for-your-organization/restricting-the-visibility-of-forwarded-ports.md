---
title: Como restringir a visibilidade das portas encaminhadas
shortTitle: Restrict port visibility
intro: Você pode definir restrições nas opções de visibilidade que os usuários podem escolher ao encaminhar portas de codespaces em sua organização.
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: ad670b43e0ac2a80e43048ffa61e0c83a8d12130
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158970'
---
## Visão geral

Normalmente, em um codespace, você pode encaminhar as portas de modo privado (somente para si mesmo), para membros da sua organização ou publicamente (para qualquer pessoa com a URL). Para obter mais informações, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Como proprietário de uma organização, o ideal é configurar restrições nas opções de visibilidade que os usuários podem definir ao encaminhar portas. Por exemplo, por motivos de segurança, o ideal é não permitir o encaminhamento de porta pública. Faça isso definindo uma ou mais políticas nas configurações dos {% data variables.product.prodname_github_codespaces %} da organização.

### Comportamento após a definição de uma restrição de visibilidade de porta

Se houver codespaces que não estão mais em conformidade com uma política que você definiu, esses codespaces continuarão operando até que sejam interrompidos ou atinjam o tempo limite. Quando o usuário retomar o codespace, ele estará sujeito às restrições de política.

{% note %}

**Observação**: não é possível desabilitar o encaminhamento de porta privada, pois o encaminhamento de porta privada é obrigatório para que os {% data variables.product.prodname_github_codespaces %} continue funcionando conforme projetados, por exemplo, para encaminhar o SSH na porta 22.

{% endnote %}

### Definindo políticas específicas da organização e do repositório

Ao criar uma política, você define se ela se aplica a todos os repositórios da organização ou apenas a repositórios específicos. Se você definir uma política para toda a organização, todas as políticas que você definir para repositórios individuais devem estar dentro da restrição definida no nível da organização. A adição de políticas torna a escolha das opções de visibilidade mais, não menos, restritiva.

Por exemplo, você pode criar uma política de toda a organização que restrinja as opções de visibilidade somente à organização. Em seguida, você pode definir uma política para o Repositório A que não permite a visibilidade pública e organizacional, o que resultará apenas na disponibilidade de encaminhamento de porta privada para esse repositório. A definição de uma política para o Repositório A que permite a visibilidade pública e da organização resultará apenas na visibilidade da organização, pois a política de toda a organização não permite a visibilidade pública.

Se você adicionar uma política de toda a organização, deverá defini-la como a opção de visibilidade mais branda que estará disponível para qualquer repositório na sua organização. Em seguida, você pode adicionar políticas específicas ao repositório para restringir ainda mais a escolha.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Adicionar uma política para limitar as opções de visibilidade da porta

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Clique em **Adicionar restrição** e escolha **Visibilidade da porta**.

   ![Captura de tela do menu suspenso 'Adicionar restrição'](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. Clique em {% octicon "pencil" aria-label="The edit icon" %} para editar a restrição.

   ![Captura de tela do ícone de lápis para editar a restrição](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. Desmarque a seleção das opções de visibilidade da porta (**Organização** ou **Pública**) que você não deseja deixar disponível.

   ![Captura de tela da limpeza de uma opção de visibilidade da porta](/assets/images/help/codespaces/choose-port-visibility-options.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Para adicionar outra restrição à política, clique em **Adicionar restrição** e escolha outra restrição. Para obter informações sobre outras restrições, confira:
   * "[Como restringir o acesso a tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
   * "[Como restringir a imagem base dos codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   * "[Como restringir o período de tempo limite ocioso](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
   * "[Como restringir o período de retenção dos codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
1. Depois de concluir a adição de restrições à política, clique em **Salvar**.

A política será aplicada a todos os novos codespaces faturáveis para a organização. A restrição de visibilidade de porta também será aplicada aos codespaces existentes na próxima vez em que eles forem iniciados.

## Editando uma política

Você pode excluir ou editar uma política existente. Por exemplo, você talvez queira adicionar restrições a ou removê-las de uma política.

1. Exibir a página "Políticas de codespaces". Para obter mais informações, confira "[Como adicionar uma política para limitar as opções de visibilidade da porta](#adding-a-policy-to-limit-the-port-visibility-options)".
1. Clique no nome da política que você deseja editar.
1. Clique no ícone de lápis ({% octicon "pencil" aria-label="The edit icon" %}) ao lado da restrição "Período de retenção".
1. Faça as alterações necessárias e clique em **Salvar**.

## Excluindo uma política 

1. Exibir a página "Políticas de codespaces". Para obter mais informações, confira "[Como adicionar uma política para limitar as opções de visibilidade da porta](#adding-a-policy-to-limit-the-port-visibility-options)".
1. Clique no botão excluir à direita da política que você deseja excluir.

   ![Captura de tela do botão Excluir de uma política](/assets/images/help/codespaces/policy-delete.png)
