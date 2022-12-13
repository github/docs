---
title: Funções de repositório para uma organização
intro: É possível personalizar o acesso a cada repositório na sua organização atribuindo funções granulares, dando às pessoas acesso aos recursos e tarefas de que precisam.
miniTocMaxHeadingLevel: 3
redirect_from:
- /articles/repository-permission-levels-for-an-organization-early-access-program
- /articles/repository-permission-levels-for-an-organization
- /github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization
- /organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Repository roles
ms.openlocfilehash: dbb5075dfc57e01e0658138b65d6231fb12f1071
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147526699"
---
## Funções de repositório para organizações

Você pode conceder aos integrantes da organização, colaboradores externos, e equipes de pessoas de diferentes níveis de acesso a repositórios pertencentes a uma organização, atribuindo-lhes funções. Escolha a função mais adequado para a função de cada pessoa ou equipe do projeto, sem dar aos usuários um acesso mais abrangente do que o necessário.

De menor acesso à maioria do acesso, as funções para o repositório de uma organização são:
- **Leitura**: recomendado para colaboradores que não modificam o código e que desejam ver ou discutir o projeto
- **Triagem**: recomendado para colaboradores que precisam gerenciar problemas e solicitações de pull de maneira proativa, sem acesso de gravação
- **Gravação**: recomendado para colaboradores que efetuam push ativamente para o projeto
- **Manutenção**: recomendado para gerentes de projetos que precisam gerenciar o repositório sem acesso a ações confidenciais ou destrutivas
- **Administrador**: recomendado para aqueles que precisam ter acesso completo ao projeto, incluindo ações confidenciais e destrutivas como gerenciar a segurança ou excluir um repositório

{% ifversion fpt %} Se a sua organização usar o {% data variables.product.prodname_ghe_cloud %}, você poderá criar funções de repositórios personalizadas. Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas para uma organização](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)" na documentação do {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec or ghes > 3.4 or ghae-issue-6271 %} Você pode criar funções de repositório personalizadas. Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas de uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
{% endif %}

Os proprietários da organização podem definir permissões básicas que se aplicam a todos os integrantes da organização ao acessar qualquer um dos repositórios da organização. Para obter mais informações, confira "[Como definir permissões base para uma organização](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)".

Os proprietários da organização também podem optar por limitar ainda mais o acesso a configurações e ações específicas na organização. Para obter mais informações sobre as opções para configurações específicas, confira "[Como gerenciar as configurações da organização](/articles/managing-organization-settings)".

Além de gerenciar as configurações de nível de organização, os proprietários da organização têm acesso de administrador a todos os repositórios pertencentes à organização. Para obter mais informações, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% warning %}

**Aviso:** quando alguém adiciona uma chave de implantação a um repositório, qualquer usuário com a chave privada pode fazer leituras e gravações no repositório (dependendo das configurações da chave), mesmo que ele seja removido posteriormente da organização.

{% endwarning %}

## Permissões para cada função

{% ifversion fpt %} Alguns dos recursos listados abaixo estão limitados às organizações que usam o {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghes or ghec %} {% note %}

**Observação:** as funções necessárias para usar recursos de segurança estão listadas em "[Requisitos de acesso para recursos de segurança](#access-requirements-for-security-features)" abaixo.

{% endnote %} {% endif %}

| Ação no repositório | Ler | Triagem | Gravar | Manter | Admin |
|:---|:---:|:---:|:---:|:---:|:---:|
| Gerenciar o acesso [individual](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository), [de equipe](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository) e [de colaborador externo](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization) no repositório | | | | | **✔️** |
| Fazer pull nos repositórios atribuídos ao usuário ou à equipe | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Bifurcar os repositórios atribuídos ao usuário ou à equipe | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Editar e excluir seus próprios comentários | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Criar problemas | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Fechar os problemas que eles criaram | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Reabrir problemas que eles fecharam | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Ter um problema atribuído a eles | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Enviar pull requests de bifurcações dos repositórios atribuídos à equipe | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Enviar revisões em pull requests | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Exibir as versões publicadas | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Ver as [execuções de fluxo de trabalho do GitHub Actions](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| Editar wikis em repositórios públicos | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Editar wikis em repositórios privados | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [Denunciar conteúdo ofensivo ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| Aplicar/ignorar etiquetas | | **✔️** | **✔️** | **✔️** | **✔️** |
| Criar, editar, excluir etiquetas | | | **✔️** | **✔️** | **✔️** |
| Fechar, reabrir e atribuir todos os problemas e pull requests | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Habilitar e desabilitar a mesclagem automática em uma solicitação de pull](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) | | | **✔️** | **✔️** | **✔️** |
| Aplicar marcos |  | **✔️** | **✔️** | **✔️** | **✔️** |
| Marcar [solicitações de pull e problemas duplicados](/articles/about-duplicate-issues-and-pull-requests)| | **✔️** | **✔️** | **✔️** | **✔️** |
| Solicitar [revisões de solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) | | **✔️** | **✔️** | **✔️** | **✔️** |
| Mesclar uma [solicitação de pull](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) | | | **✔️** | **✔️** | **✔️** |
| Fazer push (gravar) nos repositórios atribuídos ao usuário ou à equipe | | | **✔️** | **✔️** | **✔️** |
| Editar e excluir comentários de qualquer usuário em commits, pull request e problemas | | | **✔️** | **✔️** | **✔️** |
| [Ocultar os comentários de qualquer usuário](/communities/moderating-comments-and-conversations/managing-disruptive-comments) | | | **✔️** | **✔️** | **✔️** |
| [Bloquear conversas](/communities/moderating-comments-and-conversations/locking-conversations) | | | **✔️** | **✔️** | **✔️** |
| Transferir problemas (confira "[Como transferir um problema para outro repositório](/articles/transferring-an-issue-to-another-repository)" para obter detalhes) |  | | **✔️** | **✔️** | **✔️** |
| [Atuar como proprietário do código designado em um repositório](/articles/about-code-owners) | | | **✔️** | **✔️** | **✔️** |
| [Marcar uma solicitação de pull de rascunho como pronta para revisão](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| [Converter uma solicitação de pull em um rascunho](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| Enviar revisões que afetam a capacidade de merge de uma pull request | | | **✔️** | **✔️** | **✔️** |
| [Aplicar as alterações sugeridas](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) em solicitações de pull | | | **✔️** | **✔️** | **✔️** |
| Criar [verificações de status](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Criar, editar, executar, executar novamente e cancelar [fluxos de trabalho do GitHub Actions](/actions/automating-your-workflow-with-github-actions/) | | | **✔️** | **✔️** | **✔️** |{% endif %}
| Criar e editar versões | | | **✔️** | **✔️** | **✔️** |
| Exibir versões de rascunho | | | **✔️** | **✔️** | **✔️** |
| Editar a descrição de um repositório | | | | **✔️** | **✔️** |{% ifversion fpt or ghae or ghec %}
| [Ver e instalar pacotes](/packages/publishing-and-managing-packages) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Publicar pacotes](/packages/publishing-and-managing-packages/publishing-a-package) | | | **✔️** | **✔️** | **✔️** |
| [Excluir e restaurar pacotes](/packages/learn-github-packages/deleting-and-restoring-a-package) | | |  |  | **✔️** | {% endif %}
| Gerenciar [tópicos](/articles/classifying-your-repository-with-topics) | | | | **✔️** | **✔️** |
| Habilitar wikis e restringir editores de wiki | | | | **✔️** | **✔️** |
| Habilitar quadros de projeto | | | | **✔️** | **✔️** |
| Configurar [mesclagens de solicitação de pull](/articles/configuring-pull-request-merges) | | | | **✔️** | **✔️** |
| Configurar [uma fonte de publicação para o {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-github-pages) | | | | **✔️** | **✔️** |
| [Gerenciar regras de proteção de branch](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) | | | | | **✔️** |
| [Efetuar push em branches protegidos](/articles/about-protected-branches) | | | | **✔️** | **✔️** |
| Fazer merge de pull requests em branches protegidos, mesmo sem revisões de aprovação | | | | | **✔️** |{% ifversion fpt or ghes > 3.4 or ghae-issue-6337 or ghec %}
| Criar marcas que correspondem a uma [regra de proteção de marca](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) | | | | **✔️** | **✔️** |
| Excluir marcas que correspondem a uma [regra de proteção de marca](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) | | | | | **✔️** |{% endif %}
| [Criar e editar cartões sociais do repositório](/articles/customizing-your-repositorys-social-media-preview) | | | | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Limitar [as interações em um repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)| | | | **✔️** | **✔️** |{% endif %}
| Excluir um problema (confira "[Como excluir um problema](/articles/deleting-an-issue)") | | | | | **✔️** |
| [Definir os proprietários do código de um repositório](/articles/about-code-owners) | | | | | **✔️** |
| Adicionar um repositório a uma equipe (confira "[Como gerenciar o acesso da equipe a um repositório da organização](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#giving-a-team-access-to-a-repository)" para obter detalhes) | | | | | **✔️** |
| [Gerenciar o acesso dos colaboradores externos em um repositório](/articles/adding-outside-collaborators-to-repositories-in-your-organization) | | | | | **✔️** |
| [Alterar a visibilidade de um repositório](/articles/restricting-repository-visibility-changes-in-your-organization) | | | | | **✔️** |
| Tornar um repositório um modelo (confira "[Como criar um modelo de repositório](/articles/creating-a-template-repository)") | | | | | **✔️** |
| Alterar as configurações do repositório | | | | | **✔️** |
| Gerenciar o acesso de equipe e de colaborador ao repositório | | | | | **✔️** |
| Editar o branch padrão do repositório | | | | | **✔️** |
| Renomear o branch padrão do repositório (confira "[Como renomear um branch](/github/administering-a-repository/renaming-a-branch)") | | | | | **✔️** |
| Renomear um branch diferente do branch padrão do repositório (confira "[Como renomear um branch](/github/administering-a-repository/renaming-a-branch)") | | | **✔️** | **✔️** | **✔️** |
| Gerenciar webhooks e chaves de implantação | | | | | **✔️** |{% ifversion fpt or ghec %}
| [Gerenciar as configurações do uso de dados do seu repositório privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) | | | | | **✔️** |{% endif %}
| [Gerenciar a política de criação de forks de um repositório](/github/administering-a-repository/managing-the-forking-policy-for-your-repository) | | | | | **✔️** |
| [Transferir repositórios na organização](/articles/restricting-repository-creation-in-your-organization) | | | | | **✔️** |
| [Excluir ou transferir repositórios fora da organização](/articles/setting-permissions-for-deleting-or-transferring-repositories) | | | | | **✔️** |
| [Arquivar repositórios](/articles/about-archiving-repositories) | | | | | **✔️** |{% ifversion fpt or ghec %}
| Exibir um botão de patrocinador (confira "[Como exibir um botão de patrocinador no seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)") | | | | | **✔️** |{% endif %}
| Criar referências de link automático para recursos externos, como o Jira ou o Zendesk (confira "[Como configurar links automáticos para referenciar recursos externos](/articles/configuring-autolinks-to-reference-external-resources)") | | | | | **✔️** |{% ifversion discussions %}
| [Habilitar as {% data variables.product.prodname_discussions %}](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) em um repositório | | | | **✔️** | **✔️** |
| [Criar e editar categorias](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) para as {% data variables.product.prodname_discussions %} | | | | **✔️** | **✔️** |
| [Mover uma discussão para outra categoria](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Transferir uma discussão](/discussions/managing-discussions-for-your-community/managing-discussions) para um novo repositório| | | **✔️** | **✔️** | **✔️** |
| [Gerenciar discussões fixadas](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Converter problemas em discussões em massa](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Bloquear e desbloquear discussões](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Converter individualmente problemas em discussões](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Criar discussões e adicionar comentários às discussões existentes](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Excluir uma discussão](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion) | | **✔️** | | **✔️** | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| Criar [codespaces](/codespaces/about-codespaces) | | | **✔️** | **✔️** | **✔️** |{% endif %}

### Requisitos de acesso para funcionalidades de segurança

Nesta seção, você pode encontrar o acesso necessário para as funcionalidades de segurança, como as funcionalidades de {% data variables.product.prodname_advanced_security %}.

| Ação no repositório | Ler | Triagem | Gravar | Manter | Admin |
|:---|:---:|:---:|:---:|:---:|:---:| 
| Receber [{% data variables.product.prodname_dependabot_alerts %} sobre dependências não seguras](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) em um repositório | | | | | **✔️** |
| [Ignorar {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository) | | | | | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [Designar outras pessoas ou equipes para receber alertas de segurança](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| Criar [avisos de segurança](/code-security/security-advisories/about-github-security-advisories) | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %} <!--Not available for FPT-->
| Gerenciar o acesso aos recursos do {% data variables.product.prodname_GH_advanced_security %} (confira "[Como gerenciar as configurações de segurança e análise da organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)") | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}<!--Set at site-level for GHES and GHAE-->
| [Habilitar o grafo de dependência](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository) para um repositório privado | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [Exibir as revisões de dependências](/code-security/supply-chain-security/about-dependency-review) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| [Exibir alertas de {% data variables.product.prodname_code_scanning %} em solicitações de pull](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Listar, ignorar e excluir alertas de {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository) | | | **✔️** | **✔️** | **✔️** |
| [Exibir os alertas de {% data variables.product.prodname_secret_scanning %} em um repositório](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [Resolver, revogar ou reabrir alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [Designar outras pessoas ou equipes para receber alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) em repositórios | | | | | **✔️** |{% endif %}

[1] Os autores e mantenedores do repositório só podem ver informações de alertas sobre seus próprios commits.

## Leitura adicional

- "[Como gerenciar o acesso aos repositórios da sua organização](/articles/managing-access-to-your-organization-s-repositories)"
- "[Como adicionar colaboradores externos a repositórios na sua organização](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Permissões de quadro de projetos para uma organização](/articles/project-board-permissions-for-an-organization)"
