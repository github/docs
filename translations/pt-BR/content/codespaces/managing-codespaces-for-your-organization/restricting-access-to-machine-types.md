---
title: Restringindo o acesso aos tipos de máquina
shortTitle: Restrict machine types
intro: Você pode definir restrições sobre os tipos de máquinas que os usuários podem escolher ao criarem os codespaces na sua organização.
permissions: 'To manage access to machine types for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 202a2cf9f28a55514450415230686c0c0e94600f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159154'
---
## Visão geral

Normalmente, ao criar um codespace, você tem uma escolha de especificações para a máquina que executará seu codespace. Você pode escolher o tipo de máquina que melhor se adapte às suas necessidades. Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)". 

Se você pagar por usar o {% data variables.product.prodname_github_codespaces %}, a escolha do tipo de máquina vai afetar a sua cobrança. O custo de computação de um codespace é proporcional ao número de núcleos de processador no tipo de computador escolhido. Por exemplo, o custo de computação de usar um codespace por uma hora em um computador de 16 núcleos é oito vezes maior que em um computador de dois núcleos. Para ver mais informações sobre preços, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

Como proprietário da organização, você deverá configurar restrições sobre os tipos de máquina disponíveis. Por exemplo, se o trabalho na sua organização não exigir energia de computação ou espaço de armazenamento significativo, você poderá remover as máquinas com muitos recursos da lista de opções que as pessoas podem escolher. Faça isso definindo uma ou mais políticas nas configurações dos {% data variables.product.prodname_github_codespaces %} da organização.

### Comportamento quando você define uma restrição de tipo de máquina

Se houver codespaces que não estão mais em conformidade com uma política que você definiu, esses codespaces continuarão operando até que sejam interrompidos ou atinjam o tempo limite. Quando o usuário tentar retomar o codespace, será mostrada uma mensagem informando que o tipo de computador selecionado não é mais permitido nessa organização e solicitando que ele escolha um tipo de computador alternativo.

Se você remover mais tipos de máquina de especificação exigidos pela configuração de {% data variables.product.prodname_github_codespaces %} para um repositório individual na organização, não será possível criar um codespace para esse repositório. Quando alguém tentar criar um codespace, verá uma mensagem dizendo que não há tipos de máquina válidos disponíveis que atendam aos requisitos da configuração de {% data variables.product.prodname_github_codespaces %} do repositório.

{% note %}

**Observação**: qualquer pessoa que possa editar o arquivo de configuração `devcontainer.json` em um repositório pode definir uma especificação mínima para os computadores que podem ser usados para os codespaces desse repositório. Para obter mais informações, confira "[Como configurar uma especificação mínima para os computadores do codespace](/codespaces/setting-up-your-project-for-codespaces/setting-a-minimum-specification-for-codespace-machines)".

{% endnote %}

Se a configuração de uma política para tipos de máquina impedir que as pessoas usem {% data variables.product.prodname_github_codespaces %} para um repositório em particular, há duas opções:

* É possível ajustar suas políticas para remover especificamente as restrições do repositório afetado.
* Qualquer pessoa que tenha um codespace ao qual nao tem mais acesso devido à nova política, pode exportar o seu codespace para um branch. Esta branch conterá todas as alterações feitas no codespace. Será possível abrir um novo codespace nesse branch com um tipo de máquina compatível ou trabalhar localmente neste branch. Para obter mais informações, confira "[Como exportar alterações para um branch](/codespaces/troubleshooting/exporting-changes-to-a-branch)".

### Definindo políticas específicas da organização e do repositório

Ao criar uma política, você define se ela se aplica a todos os repositórios da organização ou apenas a repositórios específicos. Se você definir uma política para toda a organização, todas as políticas que você definir para repositórios individuais devem estar dentro da restrição definida no nível da organização. A adição de políticas torna a escolha de máquinas mais restritiva.

Por exemplo, você poderia criar uma política para toda a organização que restringisse os tipos de máquina a 2 ou 4 núcleos. Em seguida, você pode definir uma política para o Repositório A que o restrinja a apenas máquinas com 2 núcleos. Definir uma política para o Repositório A que o restringiu a máquinas com 2, 4, ou 8 núcleos resultariam em uma escolha de máquinas com apenas 2 ou 4 núcleos, porque a política de toda a organização impede o acesso a máquinas com 8 núcleos.

Se você adicionar uma política para toda a organização, você deverá configurá-la para a maior escolha de tipos de máquina que estarão disponíveis para qualquer repositório na sua organização. Em seguida, você pode adicionar políticas específicas ao repositório para restringir ainda mais a escolha.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Adicionar uma política para limitar os tipos de máquina disponíveis

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Clique em **Adicionar restrição** e escolha **Tipos de computadores**.

   ![Captura de tela do menu suspenso 'Adicionar restrição'](/assets/images/help/codespaces/add-constraint-dropdown.png)

1. Clique em {% octicon "pencil" aria-label="The edit icon" %} para editar a restrição e, em seguida, limpe a seleção de todos os tipos de máquina que você não deseja que estejam disponíveis.

   ![Captura de tela do ícone de lápis para editar a restrição](/assets/images/help/codespaces/edit-machine-constraint.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Para adicionar outra restrição à política, clique em **Adicionar restrição** e escolha outra restrição. Para obter informações sobre outras restrições, confira:
   * "[Como restringir a imagem base para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)"
   * "[Como restringir a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   * "[Como restringir o período de tempo limite ocioso](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
   * "[Como restringir o período de retenção de codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
1. Depois de concluir a adição de restrições à política, clique em **Salvar**.

A política será aplicada a todos os codespaces que podem ser cobrados da sua organização. A restrição de tipo de computador também é aplicada a codespaces existentes quando alguém tenta reiniciar um codespace interrompido ou reconectar-se a um codespace ativo.

## Editando uma política

Você pode excluir ou editar uma política existente. Por exemplo, você talvez queira adicionar restrições a ou removê-las de uma política.

1. Exibir a página "Políticas de codespaces". Para obter mais informações, confira "[Como adicionar uma política para limitar os tipos de computadores disponíveis](#adding-a-policy-to-limit-the-available-machine-types)".
1. Clique no nome da política que você deseja editar.
1. Clique no ícone de lápis ({% octicon "pencil" aria-label="The edit icon" %}) ao lado da restrição "Tipos de computador".
1. Faça as alterações necessárias e clique em **Salvar**.

## Excluindo uma política 

1. Exibir a página "Políticas de codespaces". Para obter mais informações, confira "[Como adicionar uma política para limitar os tipos de computadores disponíveis](#adding-a-policy-to-limit-the-available-machine-types)".
1. Clique no botão excluir à direita da política que você deseja excluir.

   ![Captura de tela do botão excluir de uma política](/assets/images/help/codespaces/policy-delete.png)

## Leitura adicional

- "[Como gerenciar limites de gastos para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)"
