---
title: Restricting the visibility of forwarded ports
shortTitle: Restricting port visibility
intro: You can set constraints on the visibility options users can choose when they forward ports from codespaces in your organization.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## Visão Geral

Typically, within a codespace you are able to forward ports privately (only to yourself), to members of your organization, or publicly (to anyone with the URL). Para obter mais informações, consulte "[Encaminhando portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

As an organization owner, you may want to configure constraints on the visibility options users can set when forwarding ports. For example, for security reasons, you may want to disallow public port forwarding. Faça isso definindo uma ou mais políticas nas configurações de {% data variables.product.prodname_codespaces %} para a sua organização.

### Behavior when you set a port visibility constraint

If there are existing codespaces that no longer conform to a policy you have defined, these codespaces will continue to operate until they are stopped or time out. When the user resumes the codespace, it will be subject to the policy constraints.

{% note %}

**Note**: You can't disable private port forwarding, as private port forwarding is required by {% data variables.product.prodname_codespaces %} to continue working as designed, for example to forward SSH on port 22.

{% endnote %}

### Definindo políticas específicas da organização e do repositório

Ao criar uma política, você define se ela se aplica a todos os repositórios da organização ou apenas a repositórios específicos. Se você definir uma política para toda a organização, todas as políticas que você definir para repositórios individuais devem estar dentro da restrição definida no nível da organização. Adding policies makes the choice of visibility options more, not less, restrictive.

For example, you could create an organization-wide policy that restricts the visibility options to organization only. You can then set a policy for Repository A that disallows both public and organization visibility, which would result in only private port forwarding being available for this repository. Setting a policy for Repository A that allowed both public and organization would result in only organization visibility, because the organization-wide policy does not allow public visibility.

If you add an organization-wide policy, you should set it to the most lenient visibility option that will be available for any repository in your organization. Em seguida, você pode adicionar políticas específicas ao repositório para restringir ainda mais a escolha.

## Adding a policy to limit the port visibility options

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, select **{% octicon "codespaces" aria-label="The codespaces icon" %} {% data variables.product.prodname_codespaces %}** then click **Policies**.
1. Na página "Políticas do codespace", clique em **Criar política**.
1. Insira um nome para sua nova política.
1. Click **Add constraint** and choose **Port visibility**.

   ![Add a constraint for port visibility](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. Click {% octicon "pencil" aria-label="The edit icon" %} to edit the constraint

   ![Edit the port visibility constraint](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. Clear the selection of the port visibility options (**Org** or **Public**) that you don't want to be available.

   ![Choose the port visibility options](/assets/images/help/codespaces/choose-port-visibility-options.png)

1. Na área "Alterar destino da política", clique no botão suspenso.
1. Selecione **Todos os repositórios** ou **Repositórios selecionados** para determinar em quais repositórios esta política será aplicada.
1. Se você escolheu **repositórios selecionados**:
   1. Clique em {% octicon "gear" aria-label="The settings icon" %}.

      ![Editar as configurações da política](/assets/images/help/codespaces/policy-edit.png)

   2. Selecione os repositórios aos quais você quer que esta política seja aplicada.
   3. Na parte inferior da lista de repositórios, clique em **Selecionar repositórios**.

      ![Selecionar repositórios para esta política](/assets/images/help/codespaces/policy-select-repos.png)

1. Clique em **Salvar**.

## Editando uma política

1. Exibir a página "Políticas de codespaces". For more information, see "[Adding a policy to limit the port visibility options](#adding-a-policy-to-limit-the-port-visibility-options)."
1. Clique no nome da política que você deseja editar.
1. Faça as alterações necessárias e, em seguida, clique em **Salvar**.

## Excluindo uma política

1. Exibir a página "Políticas de codespaces". For more information, see "[Adding a policy to limit the port visibility options](#adding-a-policy-to-limit-the-port-visibility-options)."
1. Clique no botão excluir à direita da política que você deseja excluir.

   ![O botão de excluir uma política](/assets/images/help/codespaces/policy-delete.png)
