---
title: Sobre as funções personalizadas do repositório
intro: 'Você pode controlar o acesso aos repositórios da sua organização de forma mais granular, com funções de repositório personalizadas.'
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: About custom roles
ms.openlocfilehash: 48c6fe2ee78d2d28d11093d0b50a472c46266959
ms.sourcegitcommit: ca040a1871ab5e929b596686ef955b02c5afa051
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/02/2022
ms.locfileid: '148130988'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## Sobre as funções personalizadas do repositório

Para executar quaisquer ações em {% data variables.product.product_name %}, como criar um pull request em um repositório ou alterar as configurações de cobrança de uma organização, uma pessoa deve ter acesso suficiente à conta ou recurso relevante. Esse acesso é controlado por permissões. Uma permissão é a capacidade de executar uma ação específica. Por exemplo, a capacidade de excluir um problema é uma permissão. Uma função é um conjunto de permissões que você pode atribuir a pessoas ou equipes.

Dentro de uma organização, você pode atribuir funções ao nível da organização, equipe e repositório. Para obter mais informações sobre os diferentes níveis de funções, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Você pode ter um controle mais granular sobre as permissões concedidas no nível do repositório criando até três funções de repositório personalizadas. {% data reusables.organizations.about-custom-repo-roles %} Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).

Depois de criar um cargo personalizado, qualquer pessoa com acesso de administrador a um repositório pode atribuir a função a um indivíduo ou equipe. Para obter mais informações, confira "[Como gerenciar o acesso de uma pessoa a um repositório da organização](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)" e "[Como gerenciar o acesso de uma equipe a um repositório da organização](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".

{% ifversion custom-repo-role-api %}

Você também pode usar a API REST para criar e gerenciar funções de repositório personalizadas. Para obter mais informações, confira "[Funções de repositório personalizadas](/rest/orgs/custom-roles)".

{% else %}

Você também pode usar a API REST para listar as funções de repositório personalizadas disponíveis em sua organização. Para obter mais informações, confira "[API de funções de repositório personalizadas](/rest/orgs/custom-roles)".

{% endif %}

## Sobre a função herdada

Ao criar uma função de repositório personalizado, você começa escolhendo uma função herdada de um conjunto de opções predefinidas. A função herdada determina o conjunto inicial de permissões incluídas na função personalizada. Em seguida, você pode personalizar ainda mais a função escolhendo as permissões adicionais para dar à função. Para ver a lista completa de permissões disponíveis, confira "[Permissões adicionais para funções personalizadas](#additional-permissions-for-custom-roles)".

As suas opções para a função herdada são padronizadas para diferentes tipos de contribuidores do seu repositório.

| Função herdada | Criado para |
|----|----|
| **Leitura** | Contribuidores sem código que querem ver ou discutir seu projeto |
| **Triagem** | Os colaboradores que precisam gerenciar proativamente problemas e pull requests sem acesso de gravação |
| **Gravar** | Integrantes e colaboradores da organização que fazem push ativamente no seu projeto |
| **Manter** | Gerentes de projeto que precisam gerenciar o repositório sem acesso a ações sensíveis ou destrutivas |

## Exemplos de função personalizada

Aqui estão alguns exemplos de funções de repositórios personalizados que você pode configurar.

| Função do repositório personalizado | Resumo | Função herdada | Permissões adicionais |
|----|----|----|----|
| Engenheiro de segurança | Capaz de contribuir com código e manter o pipeline de segurança | **Manter** | Excluir resultados da varredura de código |
| Prestador de serviço | Capaz de desenvolver integrações de webhooks | **Gravar** | Gerenciar webhooks |
| Gerente de comunidade | Capaz de lidar com todas as interações da comunidade sem ser capaz de contribuir com código | **Leitura** | – Marcar um problema como duplicado <br> – Gerenciar as configurações de página do GitHub <br> – Gerenciar as configurações do wiki <br> – Definir a visualização social <br> – Editar os metadados do repositório <br> – Discussões sobre triagem |

## Permissões adicionais para funções personalizadas

Depois de escolher uma função herdada, você poderá selecionar as permissões adicionais para a sua função personalizada.

Você só pode escolher uma permissão adicional se já não estiver incluída na função herdada. Por exemplo, se a função herdada oferecer acesso de **Gravação** em um repositório, a permissão "Fechar uma solicitação de pull" já estará incluída na função herdada.

{% ifversion discussions %}
### Discussões

- **Criar uma categoria de discussão**: capacidade de criar uma categoria de discussão. Para obter mais informações, confira "[Como criar uma categoria de discussão](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions#creating-a-category)".
- **Editar uma categoria de discussão**: capacidade de editar uma categoria de discussão. Para obter mais informações, confira "[Como editar uma categoria de discussão](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions#editing-a-category)".
- **Excluir uma categoria de discussão**: capacidade de excluir uma categoria de discussão. Para obter mais informações, confira "[Como excluir uma categoria de discussão](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions#deleting-a-category)".
- **Marcar ou desmarcar respostas de discussão**: capacidade de marcar respostas de uma discussão, caso a categoria da discussão aceite respostas. Para obter mais informações, confira "[Marcar ou desmarcar comentários como resposta em uma discussão](/discussions/managing-discussions-for-your-community/moderating-discussions#marking-a-comment-as-an-answer)".
- **Ocultar ou reexibir comentários de discussão**: capacidade de ocultar e reexibir comentários de uma discussão.  Para obter mais informações, confira "[Como moderar discussões](/communities/moderating-comments-and-conversations/managing-disruptive-comments#hiding-a-comment)".
- **Converter problemas em discussões**: capacidade de converter um problema em uma discussão.  Para obter mais informações, confira "[Como converter problemas em discussões](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)".
{% endif %}

### Problemas e Pull Requests

- **Atribuir ou remover um usuário**: atribua um usuário a um problema ou a uma solicitação de pull ou remova um usuário de um problema ou de uma solicitação de pull.
- **Adicionar ou remover um rótulo**: adicione um rótulo a um problema ou a uma solicitação de pull ou remova um rótulo de um problema ou de uma solicitação de pull.

### Problema

- **Fechar um problema**
- **Reabrir um problema fechado**
- **Excluir um problema**
- **Marcar um problema como duplicado**

### Pull Request

- **Fechar uma solicitação de pull**
- **Reabrir uma solicitação de pull fechada**
- **Solicitar uma revisão de solicitação de pull**: solicitar uma revisão de um usuário ou de uma equipe.

### Repositório

- **Definir marcos**: adicione marcos a um problema ou a uma solicitação de pull.
- **Gerenciar as configurações do wiki**: ative wikis para um repositório.
- **Gerenciar as configurações do projeto**: ativação de projetos para um repositório.
- **Gerenciar as configurações de mesclagem da solicitação de pull**: escolha os tipos de commits de mesclagem permitidos no seu repositório, como mesclagem, mesclagem squash ou troca de base.
- **Gerenciar as configurações do {% data variables.product.prodname_pages %}** : habilite o {% data variables.product.prodname_pages %} no repositório e selecione o branch que deseja publicar. Para obter mais informações, confira "[Como configurar uma fonte de publicação para seu site do {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)".
- **Gerenciar webhooks**: adicione webhooks ao repositório.
- **Gerenciar chaves de implantação**: adicione chaves de implantação ao repositório.
- **Editar os metadados do repositório**: atualize a descrição do repositório, bem como os tópicos do repositório.
{%- ifversion ghec %}
- **Definir os limites de interação**: restrinja temporariamente determinados usuários de fazer comentários, abrir problemas ou criar solicitações de pull no repositório público para impor um período de atividade limitada. Para obter mais informações, confira "[Como limitar as interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
{%- endif %}
- **Definir a visualização social**: adicione uma imagem de identificação ao repositório que é exibida nas plataformas de mídia social quando o repositório é vinculado. Para obter mais informações, confira "[Como personalizar a visualização de mídia social do repositório](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)".
- **Efetuar push de commits em branches protegidos**: efetue push em um branch marcado como um branch protegido. As regras de proteção de branch ainda serão aplicadas e podem resultar em uma rejeição por push.
- **Criar marcas protegidas**: crie marcas que correspondam a uma regra de proteção de marca. Para obter mais informações, confira "[Como configurar regras de proteção de marca](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)".
- **Excluir marcas protegidas**: exclua as marcas que correspondam a uma regra de proteção de marca. Para obter mais informações, confira "[Configurar regras de proteção de marca](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)". {% ifversion bypass-branch-protections %}
- **Ignorar proteções de branch**: envie por push para um branch protegido sem a necessidade de cumprir as regras de proteção de branch.{% endif %}

### Segurança

- **Exibir os resultados da {% data variables.product.prodname_code_scanning %}** : capacidade de ver os alertas da {% data variables.product.prodname_code_scanning %}.
- **Ignorar ou reabrir os resultados da {% data variables.product.prodname_code_scanning %}** : capacidade de ignorar ou reabrir os alertas da {% data variables.product.prodname_code_scanning %}.
- **Excluir os resultados da {% data variables.product.prodname_code_scanning %}** : capacidade de excluir os alertas da {% data variables.product.prodname_code_scanning %}.
- **Exibir os {% data variables.product.prodname_dependabot_alerts %}** : capacidade de ver os {% data variables.product.prodname_dependabot_alerts %}.
- **Ignorar ou reabrir os {% data variables.product.prodname_dependabot_alerts %}** : capacidade de ignorar ou reabrir os {% data variables.product.prodname_dependabot_alerts %}.
- **Exibir os resultados da {% data variables.product.prodname_secret_scanning %}** : capacidade de ver os alertas da {% data variables.product.prodname_secret_scanning %}.
- **Ignorar ou reabrir os resultados da {% data variables.product.prodname_secret_scanning %}** : capacidade de ignorar ou reabrir alertas da {% data variables.product.prodname_secret_scanning %}.

## Precedência para diferentes níveis de acesso

Se uma pessoa receber diferentes níveis de acesso por meio de caminhos diferentes como, por exemplo, a associação a uma equipe e as permissões básicas para uma organização, o maior acesso substitui os outros. Por exemplo, se um proprietário da organização dá a um integrante da organização uma função personalizada que use a função de "ler" herdada e, em seguida, o proprietário da organização definir a permissão de base da organização para "gravar", essa função personalizada terá acesso de gravação, junto com quaisquer permissões adicionais incluídas na função personalizada.

{% data reusables.organizations.mixed-roles-warning %}

Para resolver o acesso conflitante, você pode ajustar as permissões básicas da sua organização ou o acesso da equipe ou editar a função personalizada. Para obter mais informações, consulte:
  - "[Como definir as permissões base de uma organização](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization)"
  - "[Como gerenciar o acesso da equipe a um repositório da organização](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)"
  - "[Como editar uma função do repositório](#editing-a-repository-role)"
