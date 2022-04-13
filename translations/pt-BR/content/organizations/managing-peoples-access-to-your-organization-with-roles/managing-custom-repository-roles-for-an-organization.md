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

Você pode ter um controle mais granular sobre as permissões que você concede no nível de repositório, criando até três funções personalizadas de repositório. Uma função de repositório personalizado é um conjunto configurável de permissões com um nome personalizado que você escolheu. Depois de criar um cargo personalizado, qualquer pessoa com acesso de administrador a um repositório pode atribuir a função a um indivíduo ou equipe. Para obter mais informações, consulte "[Gerenciando o acesso de um indivíduo ao repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)" e "[Gerenciando o acesso da equipe ao repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)"

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

| Função do repositório personalizado | Sumário                                                                                     | Função herdada | Permissões adicionais                                                                                                                                                                                                                            |
| ----------------------------------- | ------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Engenheiro de segurança             | Capaz de contribuir com código e manter o pipeline de segurança                             | **Manutenção** | Excluir resultados da varredura de código                                                                                                                                                                                                        |
| Contratado                          | Capaz de desenvolver integrações de webhooks                                                | **Gravação**   | Gerenciar webhooks                                                                                                                                                                                                                               |
| Gerente de comunidade               | Capaz de lidar com todas as interações da comunidade sem ser capaz de contribuir com código | **Leitura**    | - Marcar um problema como duplicado <br> - Gerenciar configurações da Página do GitHub <br> - Gerenciar configurações da wiki <br> - Definir a visualização social <br> - Editar metadados <br> - Triar discussões |

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
- **Reabrir um pull request fechado**
- **Solicitar uma revisão de pull request**: Solicitar uma revisão de um usuário ou equipe.

### Repositório

- **Definir marcos**: Adicionar marcos a um problema ou pull request.
- **Gerenciar configurações de wiki**: Ative wikis para um repositório.
- **Gerenciar configurações do projeto**: Ativando projetos para um repositório.
- **Gerenciar configurações de merge do pull request**: Escolha o tipo de commits de merge permitidos no seu repositório, tais como merge, combinação por squash ou rebase.
- **Gerenciar as configurações de {% data variables.product.prodname_pages %}**: Permitir {% data variables.product.prodname_pages %} para o repositório e selecione o branch que você deseja publicar. Para obter mais informações, consulte "[Configurar uma fonte de publicação para seu site do {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)".
- **Gerenciar webhooks**: Adicione webhooks ao repositório.
- **Gerenciar chaves de implantação**: Adicione chaves de deploy ao repositório.
- **Editar os metadados do repositório**: Atualize a descrição do repositório, bem como os tópicos do repositório.
- **Definir limites de interação**: Restrinja temporariamente certos usuários de comentários, problemas de abertura ou criação de pull requests no seu repositório público para aplicar um período de atividade limitada. Para obter mais informações, consulte "[Restringir interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
- **Defina a visualização social**: Adicione uma imagem de identificação ao repositório que aparece nas plataformas de mídia social quando seu repositório é vinculado. Para obter mais informações, consulte "[Personalizar a exibição das redes sociais do repositório](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)".
- **Faça push commits para branches protegidos**: Faça push para um branch que é marcado como um branch protegido.
- **Crie etiquetas protegidas**: Crie etiquetas que correspondam a uma regra de proteção de tags. Para obter mais informações, consulte "[Configurando regras de proteção de tagsde](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)".
- **Excluir tags protegidas**: Excluir tags que correspondam a uma regra de proteção de tags. Para obter mais informações, consulte "[Configurando regras de proteção de tagsde](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)".

### Segurança

- **Ver resultados de {% data variables.product.prodname_code_scanning %}**: Habilidade de ver alertas de {% data variables.product.prodname_code_scanning %}.
- **Ignorar ou reabrir {% data variables.product.prodname_code_scanning %} resultados**: Habilidade de ignorar ou reabrir alertas de {% data variables.product.prodname_code_scanning %}.
- **Excluir {% data variables.product.prodname_code_scanning %} resultados**: Habilidade de excluir alertas de {% data variables.product.prodname_code_scanning %}.
- **Visualizar {% data variables.product.prodname_dependabot_alerts %}**: Habilidade de visualizar {% data variables.product.prodname_dependabot_alerts %}.
- **Ignorarou reabrir {% data variables.product.prodname_dependabot_alerts %}**: Habilidade de ignorar ou reabrir {% data variables.product.prodname_dependabot_alerts %}.
- **Visualizar {% data variables.product.prodname_secret_scanning %} resultados**: Habilidade de visualizar alertas de {% data variables.product.prodname_secret_scanning %}.
- **Ignorar ou reabrir {% data variables.product.prodname_secret_scanning %} resultados**: Habilidade de ignorar ou reabrir alertas de {% data variables.product.prodname_secret_scanning %}.

## Precedência para diferentes níveis de acesso

Se uma pessoa receber diferentes níveis de acesso por meio de caminhos diferentes como, por exemplo, a associação a uma equipe e as permissões básicas para uma organização, o maior acesso substitui os outros. Por exemplo, se um proprietário da organização dá a um integrante da organização uma função personalizada que use a função de "ler" herdada e, em seguida, o proprietário da organização definir a permissão de base da organização para "gravar", essa função personalizada terá acesso de gravação, junto com quaisquer permissões adicionais incluídas na função personalizada.

{% data reusables.organizations.mixed-roles-warning %}

Para resolver o acesso conflitante, você pode ajustar as permissões básicas da sua organização ou o acesso da equipe ou editar a função personalizada. Para obter mais informações, consulte:
  - "[Configurando permissões de base para uma organização](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization)"
  - "[Gerenciar o acesso da equipe a um repositório da organização](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)"
  - "[Editando uma função do repositório](#editing-a-repository-role)"

## Criando a função de um repositório

Para criar uma nova função do repositório, você deve adicionar permissões a uma função herdada e dar um nome à função personalizada.

{% ifversion ghec %}
{% note %}

**Nota:** Somente organizações que usam {% data variables.product.prodname_ghe_cloud %} podem criar funções de repositório personalizadas. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
5. Clique **Criar uma função**. ![Captura de tela do botão "Criar uma função"](/assets/images/help/organizations/repository-role-create-role.png)
4. Em "Nome", digite o nome da função do seu repositório. ![Campo para digitar um nome para a função de um repositório](/assets/images/help/organizations/repository-role-name.png)
5. Em "Descrição", digite uma descrição da função do repositório. ![Campo para digitar uma descrição para o papel do repositório](/assets/images/help/organizations/repository-role-description.png)
6. Em "Escolha uma função para herdar", selecione a função que deseja herdar. ![Selecionando a opção da função de base do repositório](/assets/images/help/organizations/repository-role-base-role-option.png)
7. Em "Adicionar permissões", use o menu suspenso para selecionar as permissões que você deseja que a sua função personalizada inclua. ![Selecionando níveis de permissão da função a partir do menu suspenso da função do repositório](/assets/images/help/organizations/repository-role-drop-down.png)
7. Clique em **Criar função**. ![Confirmar a criação de função de repositório](/assets/images/help/organizations/repository-role-creation-confirm.png)

## Editando a função de um repositório

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
3. À direita da função que você deseja editar, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e, em seguida, clique em **Editar**. ![Editar opção no menu suspenso para funções de repositório](/assets/images/help/organizations/repository-role-edit-setting.png)
4. Edite e, em seguida, clique em **Atualizar função**. ![Editar campos e atualizar funções do repositório](/assets/images/help/organizations/repository-role-update.png)

## Excluindo a função de um repositório

Se você excluir a função de um repositório existente, todos os convites pendentes, equipes e usuários com a função personalizada serão reatribuidos às permissões básicas da organização.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
3. À direita da função que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e, em seguida, clique em **Excluir**. ![Editar opção no menu suspenso para funções de repositório](/assets/images/help/organizations/repository-role-delete-setting.png)
4. Revise as alterações para a função que você deseja remover e, em seguida, clique em **Excluir função**. ![Confirme a exclusão de uma função do repositório](/assets/images/help/organizations/repository-role-delete-confirm.png)
