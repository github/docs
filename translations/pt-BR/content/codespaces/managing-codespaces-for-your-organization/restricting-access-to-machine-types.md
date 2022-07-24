---
title: Restringindo o acesso aos tipos de máquina
shortTitle: Restringir tipos de máquinas
intro: Você pode definir restrições sobre os tipos de máquinas que os usuários podem escolher ao criarem os codespaces na sua organização.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access to machine types for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## Visão Geral

Normalmente, ao criar um codespace, você tem uma escolha de especificações para a máquina que executará seu codespace. Você pode escolher o tipo de máquina que melhor se adapte às suas necessidades. Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)". Se você pagar por usar o {% data variables.product.prodname_github_codespaces %}, a escolha do tipo de máquina vai afetar a sua cobrança. For more information about pricing, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

Como proprietário da organização, você deverá configurar restrições sobre os tipos de máquina disponíveis. Por exemplo, se o trabalho na sua organização não exigir energia de computação ou espaço de armazenamento significativo, você poderá remover as máquinas com muitos recursos da lista de opções que as pessoas podem escolher. Faça isso definindo uma ou mais políticas nas configurações de {% data variables.product.prodname_codespaces %} para a sua organização.

### Comportamento quando você define uma restrição de tipo de máquina

Se houver códigos que não estiverem mais de acordo com uma política que você definiu, estes códigos continuarão a funcionar até que sejam interrompidos ou expirados. Quando o usuário tenta restabelecer o codespace, é exibida uma mensagem que diz que o tipo de máquina selecionada não é mais permitido para esta organização e o incentiva a escolher um tipo de máquina alternativo.

Se você remover mais tipos de máquina de especificação exigidos pela configuração de {% data variables.product.prodname_codespaces %} para um repositório individual na organização, não será possível criar um codespace para esse repositório. Quando alguém tentar criar um codespace, verá uma mensagem dizendo que não há tipos de máquina válidos disponíveis que atendam aos requisitos da configuração de {% data variables.product.prodname_codespaces %} do repositório.

{% note %}

**Observação**: Qualquer pessoa que possa editar o arquivo de configuração `devcontainer.json` em um repositório poderá definir uma especificação mínima para máquinas que podem ser usadas em codespaces para esse repositório. Para obter mais informações, consulte "[Definindo a especificação mínima para máquinas de codespaces](/codespaces/setting-up-your-project-for-codespaces/setting-a-minimum-specification-for-codespace-machines)".

{% endnote %}

Se a configuração de uma política para tipos de máquina impedir que as pessoas usem {% data variables.product.prodname_codespaces %} para um repositório em particular, há duas opções:

* É possível ajustar suas políticas para remover especificamente as restrições do repositório afetado.
* Qualquer pessoa que tenha um codespace ao qual nao tem mais acesso devido à nova política, pode exportar o seu codespace para um branch. Esta branch conterá todas as alterações feitas no codespace. Será possível abrir um novo codespace nesse branch com um tipo de máquina compatível ou trabalhar localmente neste branch. Para obter mais informações, consulte "[ Exportando alterações para um branch](/codespaces/troubleshooting/exporting-changes-to-a-branch)."

### Definindo políticas específicas da organização e do repositório

Ao criar uma política, você define se ela se aplica a todos os repositórios da organização ou apenas a repositórios específicos. Se você definir uma política para toda a organização, todas as políticas que você definir para repositórios individuais devem estar dentro da restrição definida no nível da organização. A adição de políticas torna a escolha de máquinas mais restritiva.

Por exemplo, você poderia criar uma política para toda a organização que restringisse os tipos de máquina a 2 ou 4 núcleos. Em seguida, você pode definir uma política para o Repositório A que o restrinja a apenas máquinas com 2 núcleos. Definir uma política para o Repositório A que o restringiu a máquinas com 2, 4, ou 8 núcleos resultariam em uma escolha de máquinas com apenas 2 ou 4 núcleos, porque a política de toda a organização impede o acesso a máquinas com 8 núcleos.

Se você adicionar uma política para toda a organização, você deverá configurá-la para a maior escolha de tipos de máquina que estarão disponíveis para qualquer repositório na sua organização. Em seguida, você pode adicionar políticas específicas ao repositório para restringir ainda mais a escolha.

## Adicionar uma política para limitar os tipos de máquina disponíveis

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. Clique **Adicionar restrição** e escolha **Tipos de máquina**.

   ![Adicionar uma restrição para os tipos de máquina](/assets/images/help/codespaces/add-constraint-dropdown.png)

1. Clique em {% octicon "pencil" aria-label="The edit icon" %} para editar a restrição e, em seguida, limpe a seleção de todos os tipos de máquina que você não deseja que estejam disponíveis.

   ![Editar a restrição de tipo de máquina](/assets/images/help/codespaces/edit-machine-constraint.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Se você quiser adicionar outra restrição à política, clique em **Adicionar restrição** e escolha outra restrição. Para obter informações sobre outras restrições, consulte "[Restringindo a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports), "[Restringir o período de tempo limite ocioso](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)e "[Restringindo o período de retenção para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".
1. Após terminar de adicionar restrições à sua política, clique em **Salvar**.
## Editando uma política

Você pode editar uma política existente. Por exemplo, você deve adicionar ou remover restrições de uma política.

1. Exibir a página "Políticas de codespaces". Para obter mais informações, consulte "[Adicionar uma política para limitar os tipos de máquina disponíveis](#adding-a-policy-to-limit-the-available-machine-types)".
1. Clique no nome da política que você deseja editar.
1. Faça as alterações necessárias e, em seguida, clique em **Salvar**.

## Excluindo uma política

1. Exibir a página "Políticas de codespaces". Para obter mais informações, consulte "[Adicionar uma política para limitar os tipos de máquina disponíveis](#adding-a-policy-to-limit-the-available-machine-types)".
1. Clique no botão excluir à direita da política que você deseja excluir.

   ![O botão de excluir uma política](/assets/images/help/codespaces/policy-delete.png)

## Leia mais

- "[Managing spending limits for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)"
