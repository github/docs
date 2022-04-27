---
title: Restringindo a visibilidade das portas encaminhadas
shortTitle: Restrict port visibility
intro: Você pode definir as restrições das opções de visibilidade que os usuários podem escolher quando encaminham portas em codespaces na sua organização.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## Visão Geral

De modo geral, dentro de um codespace, você pode encaminhar portas privadamente (apenas para você mesmo), para integrantes da sua organização ou publicamente (para qualquer pessoa com o URL). Para obter mais informações, consulte "[Encaminhando portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Como proprietário de uma organização, você deverá configurar restrições sobre as opções de visibilidade que os usuários podem definir ao encaminhar portas. Por exemplo, por razões de segurança, você deverá impedir o encaminhamento da porta pública. Faça isso definindo uma ou mais políticas nas configurações de {% data variables.product.prodname_codespaces %} para a sua organização.

### Comportamento quando você define uma restrição de visibilidade da porta

Se houver códigos que não estiverem mais de acordo com uma política que você definiu, estes códigos continuarão a funcionar até que sejam interrompidos ou expirados. Quando o usuário restabelecer o codespace, ele estará sujeito às restrições da política.

{% note %}

**Observação**: Você não pode desabilitar o encaminhamento de porta privada, uma vez que o encaminhamento de portas privadas é exigido por {% data variables.product.prodname_codespaces %} para continuar funcionando como foi concebido, por exemplo, para o encaminhamento de SSH na porta 22.

{% endnote %}

### Definindo políticas específicas da organização e do repositório

Ao criar uma política, você define se ela se aplica a todos os repositórios da organização ou apenas a repositórios específicos. Se você definir uma política para toda a organização, todas as políticas que você definir para repositórios individuais devem estar dentro da restrição definida no nível da organização. A adição de políticas torna mais restritiva a escolha das opções de visibilidade e não menos.

Por exemplo, você poderia criar uma política de toda a organização que restrinja as opções de visibilidade apenas à organização. Em seguida, é possível definir uma política para o repositório A que desabilite a visibilidade pública e organizacional, o que resultaria no fato de que apenas o encaminhamento de porta privada estivesse disponível para este repositório. Definir uma política para o repositório A que permitisse público e organização resultaria apenas na visibilidade organizacional, porque a política de toda a organização não permite a visibilidade pública.

Se você adicionar uma política para toda a organização, você deverá defini-la como a opção de visibilidade mais branda que estará disponível para qualquer repositório na organização. Em seguida, você pode adicionar políticas específicas ao repositório para restringir ainda mais a escolha.

## Adicionando uma política para limitar as opções de visibilidade da porta

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. Clique em **Adicionar restrição** e escolha **Visibilidade da porta**.

   ![Adicionar uma restrição para a visibilidade da porta](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. Clique {% octicon "pencil" aria-label="The edit icon" %} para editar a restrição.

   ![Editar a restrição de visibilidade da porta](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. Limpe a seleção das opções de visibilidade da porta (**Org** ou **Público**) que você não quer que esteja disponível.

   ![Escolha as opções de visibilidade da porta](/assets/images/help/codespaces/choose-port-visibility-options.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. If you want to add another constraint to the policy, click **Add constraint** and choose another constraint. For information about other constraints, see "[Restricting access to machine types](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)" and "[Restricting the idle timeout period](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)."
1. After you have finished adding constraints to your policy, click **Save**.
## Editando uma política

You can edit an existing policy. For example, you may want to add or remove constraints to or from a policy.

1. Exibir a página "Políticas de codespaces". Para obter mais informações, consulte "[Adicionando uma política para limitar as opções de visibilidade da porta](#adding-a-policy-to-limit-the-port-visibility-options)".
1. Clique no nome da política que você deseja editar.
1. Faça as alterações necessárias e, em seguida, clique em **Salvar**.

## Excluindo uma política

1. Exibir a página "Políticas de codespaces". Para obter mais informações, consulte "[Adicionando uma política para limitar as opções de visibilidade da porta](#adding-a-policy-to-limit-the-port-visibility-options)".
1. Clique no botão excluir à direita da política que você deseja excluir.

   ![O botão de excluir uma política](/assets/images/help/codespaces/policy-delete.png)
