---
title: Gerenciando as funções de repositórios personalizados para uma organização
intro: 'Você pode controlar o acesso aos repositórios da sua organização de forma mais granular, criando funções de repositório personalizadas.'
permissions: Organization owners can manage custom repository roles.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Funções de repositório personalizadas
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
---

{% data reusables.pre-release-program.custom-roles-public-beta %}

## Sobre as funções personalizadas do repositório

Para executar quaisquer ações em {% data variables.product.product_name %}, como criar um pull request em um repositório ou alterar as configurações de cobrança de uma organização, uma pessoa deve ter acesso suficiente à conta ou recurso relevante. This access is controlled by permissions. A permission is the ability to perform a specific action. For example, the ability to delete an issue is a permission. A role is a set of permissions you can assign to individuals or teams.

Dentro de uma organização, você pode atribuir funções ao nível da organização, equipe e repositório. Para obter mais informações sobre os diferentes níveis de funções, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Se a sua organização usar {% data variables.product.prodname_ghe_cloud %}, você poderá ter um controle mais granular sobre as permissões que você concede no nível de repositório, criando até três funções personalizadas no repositório. Uma função de repositório personalizado é um conjunto configurável de permissões com um nome personalizado que você escolheu. Depois de criar um cargo personalizado, qualquer pessoa com acesso de administrador a um repositório pode atribuir a função a um indivíduo ou equipe. Para obter mais informações, consulte "[Gerenciando o acesso de um indivíduo ao repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)" e "[Gerenciando o acesso da equipe ao repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)"

{% data reusables.enterprise.link-to-ghec-trial %}

## Sobre a função herdada

Ao criar uma função de repositório personalizado, você começa escolhendo uma função herdada de um conjunto de opções predefinidas. A função herdada determina o conjunto inicial de permissões incluídas na função personalizada. Em seguida, você pode personalizar ainda mais a função escolhendo as permissões adicionais para dar à função. Para obter a lista completa das permissões disponíveis, consulte "[Permissões adicionais para as funções personalizadas](#additional-permissions-for-custom-roles). "

As suas opções para a função herdada são padronizadas para diferentes tipos de contribuidores do seu repositório.

| Função herdada | Projetada para                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| **Leitura**    | Contribuidores sem código que querem ver ou discutir seu projeto.                                       |
| **Triagem**    | Os colaboradores que precisam gerenciar proativamente problemas e pull requests sem acesso de gravação. |
| **Gravação**   | Integrantes e colaboradores da organização que fazem push ativamente no seu projeto.                    |
| **Manutenção** | Gerentes de projeto que precisam gerenciar o repositório sem acesso a ações sensíveis ou destrutivas.   |

## Exemplos de funções personalizadas

Aqui estão alguns exemplos de funções de repositórios personalizados que você pode configurar.

| Função do repositório personalizado | Sumário                                                                                     | Função herdada | Permissões adicionais                                                                                                                                                                                             |
| ----------------------------------- | ------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Engenheiro de segurança             | Capaz de contribuir com código e manter o pipeline de segurança                             | **Manutenção** | Excluir resultados da varredura de código                                                                                                                                                                         |
| Contratado                          | Capaz de desenvolver integrações de webhooks                                                | **Gravação**   | Gerenciar webhooks                                                                                                                                                                                                |
| Gerente de comunidade               | Capaz de lidar com todas as interações da comunidade sem ser capaz de contribuir com código | **Leitura**    | - Mark an issue as duplicate <br> - Manage GitHub Page settings <br> - Manage wiki settings <br> - Set the social preview <br> - Edit repository metadata <br> - Triage discussions |

## Permissões adicionais para funções personalizadas

Depois de escolher uma função herdada, você poderá selecionar as permissões adicionais para a sua função personalizada.

Você só pode escolher uma permissão adicional se já não estiver incluída na função herdada. Por exemplo, se a função herdada oferece acesso de **Gravação** a um repositório, a permissão "Fechar uma pull request" já estará incluída na função herdada.

### Problemas e Pull Requests

- **Atribuir ou remover um usuário**: Atribua um usuário a um problema ou pull request ou remova um usuário de um problema ou pull request.
- **Adicionar ou remover um rótulo**: Adicione uma etiqueta a um problema ou um pull request ou remova uma etiqueta de um problema ou pull request.

### Problema

- **Feche um problema**
- **Reabra um problema fechado**
- **Exclua um problema**
- **Marque um problema como duplicado**

### Pull Request

- **Feche um pull request**
- **Reopen a closed pull request**
- **Request a pull request review**: Request a review from a user or team.

### Repositório

- **Set milestones**: Add milestones to an issue or pull request.
- **Manage wiki settings**: Turn on wikis for a repository.
- **Manage project settings**: Turning on projects for a repository.
- **Manage pull request merging settings**: Choose the type of merge commits that are allowed in your repository, such as merge, squash, or rebase.
- **Manage {% data variables.product.prodname_pages %} settings**: Enable {% data variables.product.prodname_pages %} for the repository, and select the branch you want to publish. Para obter mais informações, consulte "[Configurar uma fonte de publicação para seu site do {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)".
- **Manage webhooks**: Add webhooks to the repository.
- **Manage deploy keys**: Add deploy keys to the repository.
- **Edit repository metadata**: Update the repository description as well as the repository topics.
- **Set interaction limits**: Temporarily restrict certain users from commenting, opening issues, or creating pull requests in your public repository to enforce a period of limited activity. For more information, see "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."
- **Set the social preview**: Add an identifying image to your repository that appears on social media platforms when your repository is linked. Para obter mais informações, consulte "[Personalizar a exibição das redes sociais do repositório](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)".
- **Push commits to protected branches**: Push to a branch that is marked as a protected branch.

### Segurança

- **View {% data variables.product.prodname_code_scanning %} results**: Ability to view {% data variables.product.prodname_code_scanning %} alerts.
- **Dismiss or reopen {% data variables.product.prodname_code_scanning %} results**: Ability to dismiss or reopen {% data variables.product.prodname_code_scanning %} alerts.
- **Delete {% data variables.product.prodname_code_scanning %} results**: Ability to delete {% data variables.product.prodname_code_scanning %} alerts.
- **View {% data variables.product.prodname_secret_scanning %} results**: Ability to view {% data variables.product.prodname_secret_scanning %} alerts.
- **Dismiss or reopen {% data variables.product.prodname_secret_scanning %} results**: Ability to dismiss or reopen {% data variables.product.prodname_secret_scanning %} alerts.

## Precedence for different levels of access

If a person is given different levels of access through different avenues, such as team membership and the base permissions for an organization, the highest access overrides the others. For example, if an organization owner gives an organization member a custom role that uses the "Read" inherited role, and then an organization owner sets the organization's base permission to "Write", then this custom role will have write access, along with any additional permissions included in the custom role.

If a person has been given conflicting access, you'll see a warning on the repository access page. The warning appears with "{% octicon "alert" aria-label="The alert icon" %} Mixed roles" next to the person with the conflicting access. To see the source of the conflicting access, hover over the warning icon or click **Mixed roles**.

To resolve conflicting access, you can adjust your organization's base permissions or the team's access, or edit the custom role. Para obter mais informações, consulte:
  - "[Configurando permissões de base para uma organização](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization)"
  - "[Gerenciar o acesso da equipe a um repositório da organização](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)"
  - "[Editing a repository role](#editing-a-repository-role)"

## Creating a repository role

To create a new repository role, you add permissions to an inherited role and give the custom role a name.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
5. Click **Create a Role**. ![Screenshot of "Create a Role" button](/assets/images/help/organizations/repository-role-create-role.png)
4. Under "Name", type the name of your repository role. ![Field to type a name for the repository role](/assets/images/help/organizations/repository-role-name.png)
5. Under "Description", type a description of your repository role. ![Field to type a description for the repository role](/assets/images/help/organizations/repository-role-description.png)
6. Under "Choose a role to inherit", select the role you want to inherit. ![Selecting repository role base role option](/assets/images/help/organizations/repository-role-base-role-option.png)
7. Under "Add Permissions", use the drop-down menu to select the permissions you want your custom role to include. ![Selecting permission levels from repository role drop-down](/assets/images/help/organizations/repository-role-drop-down.png)
7. Click **Create role**. ![Confirm creating a repository role](/assets/images/help/organizations/repository-role-creation-confirm.png)

## Editing a repository role

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
3. To the right of the role you want to edit, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Edit**. ![Edit option in drop-down menu for repository roles](/assets/images/help/organizations/repository-role-edit-setting.png)
4. Edit, then click **Update role**. ![Edit fields and update repository roles](/assets/images/help/organizations/repository-role-update.png)

## Deleting a repository role

If you delete an existing repository role, all pending invitations, teams, and users with the custom role will be reassigned to the organization's base permissions.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
3. To the right of the role you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete**. ![Edit option in drop-down menu for repository roles](/assets/images/help/organizations/repository-role-delete-setting.png)
4. Revise as alterações para a função que você deseja remover e, em seguida, clique em **Excluir função**. ![Confirme a exclusão de uma função do repositório](/assets/images/help/organizations/repository-role-delete-confirm.png)
