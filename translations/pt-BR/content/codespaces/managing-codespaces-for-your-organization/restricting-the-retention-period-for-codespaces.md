---
title: Restringir o período de retenção para codespaces
shortTitle: Restringir o período de retenção
intro: Você pode definir um período máximo de retenção para quaisquer codespaces pertencentes à sua organização.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage retention constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## Visão Geral

{% data variables.product.prodname_codespaces %} são automaticamente excluídos depois que forem interrompidos e permanecerem inativos por um número definido de dias. O período de retenção para cada codespace é definido quando o código é criado e não muda.

Todos os que têm acesso a {% data variables.product.prodname_github_codespaces %} podem configurar um período de retenção para os codespaces que criam. A configuração inicial para este período de retenção padrão é de 30 dias. Usuários individuais podem definir este período dentro do intervalo de 0 a 30 dias. Para obter mais informações, consulte[Configurando a exclusão automática dos seus codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)".

Como proprietário da organização, você pode querer configurar restrições no período máximo de retenção de codespaces criados para os repositórios pertencentes à sua organização. Isso pode ajudar você a limitar os custos de armazenamento associados aos codespaces que são interrompidos e deixados sem uso até que sejam automaticamente excluídos. For more information about storage charges, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)." É possível definir um período máximo de retenção para todos ou para repositórios específicos pertencentes à sua organização.

### Definindo políticas específicas da organização e do repositório

Ao criar uma política, você define se ela se aplica a todos os repositórios da organização ou apenas a repositórios específicos. Se você criar uma política de toda a organização com uma restrição de retenção de codespace, as restrições de retenção em todas as políticas direcionadas a repositórios específicos devem ser mais curtas do que a restrição configurada para toda a organização ou não terão efeito. Aplica-se o período de retenção mais curto - em uma política de toda a organização, uma política orientada a determinados repositórios, ou o período de retenção padrão em configurações pessoais de alguém.

Se você adicionar uma política para toda a organização com uma restrição de retenção, você deverá definir o período de retenção para o período mais longo aceitável. Em seguida, é possível adicionar políticas separadas que definam o período de retenção máximo para um período mais curto para repositórios específicos na sua organização.

## Adicionando uma política para definir um período máximo de retenção de codespace

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. Clique **Adicionar restrição** e escolha **Período de retenção**.

   ![Adicionar uma restrição por períodos de retenção](/assets/images/help/codespaces/add-constraint-dropdown-retention.png)

1. Clique {% octicon "pencil" aria-label="The edit icon" %} para editar a restrição.

   ![Editar a restrição de tempo limite](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Insira o número máximo de dias que os codespaces podem permanecer parados antes de serem excluídos automaticamente e, em seguida, clique em **Salvar**.

   ![Defina o período de retenção em dias](/assets/images/help/codespaces/maximum-days-retention.png)

   {% note %}

   **Atenção**:
   * Um dia, neste contexto, é um período de 24 horas, que começa no momento do dia em que o codespace foi interrompido.
   * O intervalo válido é de 0 a 30 dias.
   * Definir o período para `0` resultará em codespaces excluídos imediatamente quando forem interrompidos ou quando vencerem devido a inatividade.

   {% endnote %}

{% data reusables.codespaces.codespaces-policy-targets %}
1. Se você quiser adicionar outra restrição à política, clique em **Adicionar restrição** e escolha outra restrição. Para obter informações sobre outras restrições, consulte "[Restringindo o acesso aos tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types), "[Restringindo a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)" e "[Restringindo o período de tempo limite](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)".
1. Após terminar de adicionar restrições à sua política, clique em **Salvar**.

A política será aplicada a todos os novos codespaces que forem criados.

## Editando uma política

Você pode editar uma política existente. Por exemplo, você deve adicionar ou remover restrições de uma política.

A restrição do período de retenção só é aplicada aos codespaces quando são criados. A edição de uma política não tem qualquer efeito sobre os codespaces existentes.

1. Exibir a página "Políticas de codespaces". Para obter mais informações, consulte "[Adicionando uma política para definir um período máximo de retenção de codespace](#adding-a-policy-to-set-a-maximum-codespace-retention-period)".
1. Clique no nome da política que você deseja editar.
1. Faça as alterações necessárias e, em seguida, clique em **Salvar**.

## Excluindo uma política

Você pode excluir uma política a qualquer momento. A exclusão de uma política não tem efeito sobre os codespaces existentes.

1. Exibir a página "Políticas de codespaces". Para obter mais informações, consulte "[Adicionando uma política para definir um período máximo de retenção de codespace](#adding-a-policy-to-set-a-maximum-codespace-retention-period)".
1. Clique no botão excluir à direita da política que você deseja excluir.

   ![O botão de excluir uma política](/assets/images/help/codespaces/policy-delete.png)
