---
title: Restringindo o período de tempo limite ocioso
shortTitle: Restringir períodos de tempo limite
intro: Você pode definir um período máximo de tempo limite para quaisquer codespaces pertencentes à sua organização.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage timeout constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## Visão Geral

Por padrão, os códigos vencem após 30 minutos de inatividade. Quando um tempo de um codespace se esgota, ele é interrompido e deixa de se cobrar pelo uso de computação.

As configurações pessoais de um usuário {% data variables.product.prodname_dotcom %} permitem que ele defina seu próprio período de tempo limite para os codespaces que cria. Este período pode ser maior do que o período padrão de 30 minutos. For more information, see "[Setting your timeout period for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)."

Como proprietário da organização, você deve configurar restrições sobre o período máximo de tempo ocioso para codespaces criados para repositórios pertencentes à sua organização. Isso pode ajudar você a limitar os custos associados aos codespaces que ficam em tempo limite após longos períodos de inatividade. É possível definir o tempo limite máximo para os codespaces de todos os repositórios pertencentes à sua organização ou para os codespaces de repositórios específicos.

{% note %}

**Observação**: Máximo de restrições de tempo limite só se aplica a codespaces que pertencem à sua organização.

{% endnote %}

For more information about pricing for {% data variables.product.prodname_github_codespaces %} compute usage, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)."

### Comportamento ao definir uma restrição de tempo limite máximo

Se alguém definir o tempo ocioso padrão como 90 minutos nas suas configurações pessoais e iniciar um codespace para um repositório com uma restrição de tempo limite máximo de 60 minutos o tempo do codespace irá esgotar-se após 60 minutos de inatividade. Após a conclusão da criação do codespace, será exibida uma mensagem com a seguinte explicação:

> O tempo limite de espera para este codespace é definido como 60 minutos, de acordo com a política da sua organização.

### Definindo políticas específicas da organização e do repositório

Ao criar uma política, você define se ela se aplica a todos os repositórios da organização ou apenas a repositórios específicos. Se você criar uma política para toda a organização com restrição de tempo limite, as restrições de tempo limite em todas as políticas direcionadas a repositórios específicos devem estar dentro da restrição configurada para toda a organização. Aplica-se o período de tempo limite mais curto, em uma política para toda a organização, uma política orientada a determinados repositórios ou em configurações pessoais de alguém.

Se você adicionar uma política para toda a organização com uma restrição de tempo limite, você deverá definir o tempo limite como o período de tempo mais longo. Em seguida, é possível adicionar políticas separadas que definam o tempo limite máximo para um período mais curto para repositórios específicos na sua organização.

## Adicionando uma política para definir um período máximo de tempo ocioso

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. Clique **Adicionar restrição** e escolha **Tempo máximo de espera**.

   ![Adicionar restrição ao tempo ocioso](/assets/images/help/codespaces/add-constraint-dropdown-timeout.png)

1. Clique {% octicon "pencil" aria-label="The edit icon" %} para editar a restrição.

   ![Editar a restrição de tempo limite](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Insira o número máximo de minutos que os codespaces podem permanecer inativos antes do tempo limite e, em seguida, clique em **Salvar**.

   ![Defina o tempo limite máximo em minutos](/assets/images/help/codespaces/maximum-minutes-timeout.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Se você quiser adicionar outra restrição à política, clique em **Adicionar restrição** e escolha outra restrição. Para obter informações sobre outras restrições, consulte "[Restringindo o acesso aos tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types), "[Restringindo a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)" e "[Restringindo o período de retenção para os codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".
1. Após terminar de adicionar restrições à sua política, clique em **Salvar**.

A política será aplicada a todos os novos codespaces que forem criados e a codespaces existentes na próxima vez que forem iniciados.

## Editando uma política

Você pode editar uma política existente. Por exemplo, você deve adicionar ou remover restrições de uma política.

1. Exibir a página "Políticas de codespaces". Para obter mais informações, consulte "[Adicionando uma política para definir um período máximo de tempo limite ocioso](#adding-a-policy-to-set-a-maximum-idle-timeout-period)."
1. Clique no nome da política que você deseja editar.
1. Faça as alterações necessárias e, em seguida, clique em **Salvar**.

## Excluindo uma política

1. Exibir a página "Políticas de codespaces". Para obter mais informações, consulte "[Adicionando uma política para definir um período máximo de tempo limite ocioso](#adding-a-policy-to-set-a-maximum-idle-timeout-period)."
1. Clique no botão excluir à direita da política que você deseja excluir.

   ![O botão de excluir uma política](/assets/images/help/codespaces/policy-delete.png)
