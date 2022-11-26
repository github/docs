---
title: Funções em uma organização
intro: 'Os proprietários da organização podem atribuir funções a indivíduos e equipes, dando-lhes diferentes conjuntos de permissões na organização.'
redirect_from:
  - /articles/permission-levels-for-an-organization-early-access-program
  - /articles/permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization
  - /organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Roles in an organization
ms.openlocfilehash: 960f6f701ad524220e9e79ada04fa9e4d30b8e9f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107769'
---
## Sobre as funções
{% data reusables.organizations.about-roles %}

As funções no nível de repositório concedem aos integrantes da organização, colaboradores externos e equipes de pessoas diferentes níveis de acesso aos repositórios. Para obter mais informações, confira "[Funções de repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

As funções no nível da equipe são funções que dão permissões para gerenciar uma equipe. Qualquer integrante individual de uma equipe pode atribuir a função de mantenedor da equipe, o que dá ao integrante uma série de permissões administrativas em uma equipe. Para obter mais informações, confira "[Como atribuir a função de mantenedor da equipe a um membro da equipe](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)".

As funções no nível de organização são conjuntos de permissões que podem ser atribuídas a indivíduos ou equipes para gerenciar uma organização e os repositórios, equipes e configurações da organização. Para obter mais informações sobre todas as funções disponíveis no nível da organização, confira "[Sobre as funções da organização](#about-organization-roles)".

## Sobre as funções da organização

Você pode atribuir indivíduos ou equipes a diversos cargos na organização para controlar o acesso dos seus integrantes à sua organização e seus recursos. Para obter mais detalhes sobre as permissões individuais incluídas em cada função, confira "[Permissões para funções da organização](#permissions-for-organization-roles)".

{% ifversion enterprise-owner-join-org %} Se a organização pertence a uma conta empresarial, os proprietários empresariais podem ingressar na organização com qualquer função. Para obter mais informações, confira "[Como gerenciar sua função em uma organização pertencente à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".
{% endif %}

### Proprietários da organização
Os proprietários da organização têm acesso administrativo completo à sua organização. Essa função deve ser limitada a não menos que duas pessoas na sua organização. Para obter mais informações, confira "[Como manter a continuidade da propriedade para sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)".

### Integrantes da organização
A função não administrativa por padrão para as pessoas de uma organização é o integrante da organização. Por padrão, os integrantes da organização têm várias permissões, incluindo a capacidade de criar repositórios e quadros de projetos.

{% ifversion fpt or ghec %}
### Moderadores da organização
Os moderadores são membros da organização que, além das permissões como membros, têm permissão para bloquear e desbloquear colaboradores não membros, definir limites de interação e ocultar comentários em repositórios públicos pertencentes à organização. Para obter mais informações, confira "[Como gerenciar os moderadores na sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)".

### Gerentes de cobrança
Os gerentes de cobrança são usuários que podem gerenciar as configurações de cobrança para a sua organização, como informações de pagamento. Essa é uma opção útil se os integrantes da sua organização geralmente não têm acesso aos recursos de cobrança. Para obter mais informações, confira "[Como adicionar um gerente de cobrança à sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)".

{% endif %}

{% ifversion security-managers %}
### Gerentes de segurança

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

Se a sua organização tiver uma equipe de segurança, você poderá usar o papel de gerente de segurança para conceder aos integrantes o mínimo de acesso de que precisam para a organização. Para obter mais informações, confira "[Como gerenciar gerentes de segurança na sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)".
{% endif %}
### Gerentes de {% data variables.product.prodname_github_app %}
Por padrão, somente proprietários da organização podem gerenciar as configurações de {% data variables.product.prodname_github_apps %} pertencentes a uma organização. Para permitir que usuários adicionais gerenciem {% data variables.product.prodname_github_apps %} pertencente a uma organização, um proprietário pode conceder a eles permissões de gerentes de {% data variables.product.prodname_github_app %}.

Ao nomear um usuário como um gerente de {% data variables.product.prodname_github_app %} na sua organização, você pode conceder a eles acesso para gerenciar as configurações de alguns ou todos os {% data variables.product.prodname_github_apps %} pertencentes à organização. Para obter mais informações, consulte:

- "[Como adicionar gerentes de Aplicativo do GitHub à sua organização](/articles/adding-github-app-managers-in-your-organization)"
- "[Como remover gerentes de Aplicativo do GitHub da sua organização](/articles/removing-github-app-managers-from-your-organization)"

### Colaboradores externos
Para manter os dados da sua organização seguros e permitir acesso aos repositórios, você pode adicionar *colaboradores externos*. {% data reusables.organizations.outside_collaborators_description %}

## Permissões para as funções da organização

{% ifversion fpt %} Alguns dos recursos listados abaixo estão limitados às organizações que usam o {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghec %}
<!-- Free/Pro/Team and GHEC versions have extra columns for Moderators and Billing managers-->

| Permissão da organização | Proprietários | Membros | Moderadores | Gerentes de cobrança | Gerentes de segurança |
|:------------------------|:------:|:-------:|:----------:|:----------------:|:-----------------:|
| Criar repositórios (confira "[Como restringir a criação de repositórios na sua organização](/articles/restricting-repository-creation-in-your-organization)") | **X** | **X** | **X** |  | **X**  |
| Visualizar e editar informações de cobrança | **X** |  |  | **X** |  |
| Convidar pessoas para integrar a organização | **X** |  |  |  |  |
| Editar e cancelar convites para integrar a organização | **X** |  |  |  |  |
| Remover integrantes da organização | **X** |  |  |  |  |
| Restabelecer ex-integrantes da organização | **X** |  |  |  |  |
| Adicionar e remover pessoas de **todas as equipes** | **X** |  |  |  |  |
| Promover membros da organização a *mantenedor da equipe* | **X** |  |  |  |  |
| Configurar atribuições de revisão de código (confira "[Como gerenciar a atribuição de revisão de código para sua equipe](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)") | **X** |  |  |  |  |
| Definir lembretes agendados (confira "[Como gerenciar lembretes agendados para solicitações de pull](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)") | **X** |  |  |  |  |
| Adicionar colaboradores a **todos os repositórios** | **X** |  |  |  |  |
| Acessar o log de auditoria da organização | **X** |  |  |  |  |
| Editar a página de perfil da organização (confira "[Sobre o perfil da sua organização](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)") | **X** |  |  |  |  |{% ifversion ghec %}
| Verificar os domínios da organização (confira "[Como verificar o domínio da sua organização](/articles/verifying-your-organization-s-domain)") | **X** |  |  |  |  |
| Restringir as notificações por email aos domínios verificados ou aprovados (confira "[Como restringir notificações por email para sua organização](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)") | **X** |  |  |  |  |{% endif %}
| Excluir **todas as equipes** | **X** |  |  |  |  |
| Excluir a conta da organização, inclusive todos os repositórios | **X** |  |  |  |  |
| Criar equipes (confira "[Como configurar permissões de criação de equipes na sua organização](/articles/setting-team-creation-permissions-in-your-organization)") | **X** | **X** | **X** |  | **X**  |
| [Mover equipes na hierarquia de uma organização](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** |  |  |  |  |
| Criar quadros de projetos (confira "[Permissões de quadros de projetos de uma organização](/articles/project-board-permissions-for-an-organization)") | **X** | **X** | **X** |  | **X**  |
| Ver todos os integrantes e equipes da organização | **X** | **X** | **X** |  | **X**  |
| @mention qualquer equipe visível | **X** | **X** | **X** |  | **X**  |
| Pode se tornar um *mantenedor da equipe* | **X** | **X** | **X** |  | **X** |{% ifversion ghec %}
| Ver insights da organização (confira "[Como ver insights da sua organização](/articles/viewing-insights-for-your-organization)") | **X** | **X** | **X** |  | **X**  |{% endif %}
| Ver e postar discussões em equipe públicas para **todas as equipes** (confira "[Sobre as discussões em equipe](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** | **X** | **X** |  | **X**  |
| Ver e postar discussões em equipe privadas para **todas as equipes** (confira "[Sobre as discussões em equipe](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** |  |  |  |  |
| Editar e excluir discussões em equipe em **todas as equipes** (confira "[Como gerenciar comentários impróprios](/communities/moderating-comments-and-conversations/managing-disruptive-comments)") | **X** |  |  |  |  |
| Desabilitar as discussões em equipe para uma organização (confira "[Como desabilitar discussões em equipe para sua organização](/articles/disabling-team-discussions-for-your-organization)") | **X** |  |  |  |  |
| Ocultar comentários em commits, solicitações de pull e problemas graváveis (confira "[Como gerenciar comentários impróprios](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)") | **X** | **X** | **X** |  | **X** |
| Ocultar comentários em _todos_ os commits, solicitações de pull e problemas (confira "[Como gerenciar comentários impróprios](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)") | **X** |  | **X** |  | **X** |
| Bloquear e desbloquear colaboradores não membros (confira "[Como bloquear um usuário da sua organização](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)") | **X** |  | **X** |  |  |
| Limitar as interações a determinados usuários em repositórios públicos (confira "[Como limitar interações na sua organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)") | **X** |  | **X** |  |  |{% ifversion ghec %}
| Gerenciar a exibição de insights de dependência da organização (confira "[Como alterar a visibilidade dos insights de dependência da sua organização](/articles/changing-the-visibility-of-your-organizations-dependency-insights)") | **X** |  |  |  |  |{% endif %}
| Definir uma imagem de perfil da equipe em **todas as equipes** (confira "[Como configurar a imagem de perfil da sua equipe](/articles/setting-your-team-s-profile-picture)") | **X** |  |  |  |  |
| Patrocinar contas e gerenciar os patrocínios da organização (confira "[Como patrocinar colaboradores de código aberto](/sponsors/sponsoring-open-source-contributors)") | **X** |  |  | **X** | **X**  |
| Gerenciar atualizações de email das contas patrocinadas (confira "[Como gerenciar atualizações de contas dos patrocinadores da sua organização](/organizations/managing-organization-settings/managing-updates-from-accounts-your-organization-sponsors)") | **X** |  |  |  |  |
| Atribuir seus patrocínios a outra organização (confira "[Como atribuir patrocínios à sua organização](/sponsors/sponsoring-open-source-contributors/attributing-sponsorships-to-your-organization)" para obter detalhes) | **X** |  |  |  |  |
| Gerenciar a publicação de sites do {% data variables.product.prodname_pages %} em repositórios na organização (confira "[Como gerenciar a publicação de sites do {% data variables.product.prodname_pages %} para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)") | **X** |  |  |  |  |
| Gerenciar configurações de segurança e análise (confira "[Como gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)") | **X** |  |  |  | **X** |
| Ter a visão geral de segurança da organização (confira "[Sobre a visão geral de segurança](/code-security/security-overview/about-the-security-overview)") | **X** |  |  |  | **X** |{% ifversion ghec %}
| Habilitar e impor o [logon único do SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on) | **X** |  |  |  |  |
| [Gerenciar o acesso do SAML de um usuário à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) | **X** |  |  |  |  |
| Gerenciar as autoridades de certificação SSH de uma organização (confira "[Como gerenciar as autoridades de certificação SSH da sua organização](/articles/managing-your-organizations-ssh-certificate-authorities)") | **X** |  |  |  |  |{% endif %}
| Transferir repósitórios | **X** |  |  |   |  |
| Comprar, instalar, gerenciar cobranças e cancelar aplicativos do {% data variables.product.prodname_marketplace %} | **X** |  |  |  |  |
| Listar aplicativos no {% data variables.product.prodname_marketplace %} | **X** |  |  |  |  |
| Receber [{% data variables.product.prodname_dependabot_alerts %} sobre dependências vulneráveis](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) em todos os repositórios de uma organização | **X** |  |  |  | **X** |
| Gerenciar {% data variables.product.prodname_dependabot_security_updates %} (confira "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)") | **X** |  |  |  | **X** |
| [Gerenciar a política de criação de forks](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) | **X** |  |  |  |  |
| [Limitar a atividade em repositórios públicos em uma organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) | **X** |  |  |  |  |
| Efetuar pull (leitura) *de todos os repositórios* na organização | **X** |  |  |  | **X** |
| Efetuar push (gravação) de *todos os repositórios* e cloná-los (cópia) na organização | **X** |  |  |  |  |
| Converter membros da organização em [colaboradores externos](#outside-collaborators) | **X** |  |  |  |  |
| [Ver as pessoas com acesso a um repositório da organização](/articles/viewing-people-with-access-to-your-repository) | **X** |  |  |  |  |{% ifversion ghec %}
| [Exportar uma lista das pessoas com acesso a um repositório da organização](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** |  |  |  |  |{% endif %}
| Gerenciar o nome do branch padrão (confira "[Como gerenciar o nome do branch padrão de repositórios na sua organização](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)") | **X** |  |  |  |  |
| Gerenciar rótulos padrão (confira "[Como gerenciar rótulos padrão para repositórios na sua organização](/articles/managing-default-labels-for-repositories-in-your-organization)") | **X** |  |  |  |  |{% ifversion ghec %}
| Habilitar a sincronização da equipe (confira "[Como gerenciar a sincronização da equipe para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)") | **X** |  |  |  |  |{% endif %}
| Gerenciar revisões de solicitação de pull na organização (confira "[Como gerenciar revisões de solicitação de pull na sua organização](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)") | **X** |  |  |  |  |

{% elsif ghes or ghae %}
<!-- GHES 3.3+ and eventual GHAE release don't have the extra columns for Moderators and Billing managers. -->

| Ação da organização | Proprietários | Membros | Gerentes de segurança |
|:--------------------|:------:|:-------:|:-------:|
| Convidar pessoas para integrar a organização | **X** |  |  |
| Editar e cancelar convites para integrar a organização | **X** |  |  |
| Remover integrantes da organização | **X** | | |  |
| Restabelecer ex-integrantes da organização | **X** | | |  |
| Adicionar e remover pessoas de **todas as equipes** | **X** |  |  |
| Promover membros da organização a *mantenedor da equipe* | **X** |  |  |
| Configurar atribuições de revisão de código (confira "[Como gerenciar a atribuição de revisão de código para sua equipe](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)") | **X** |  |  |
| Adicionar colaboradores a **todos os repositórios** | **X** |  |  |
| Acessar o log de auditoria da organização | **X** |  |  |
| Editar a página de perfil da organização (confira "[Sobre o perfil da sua organização](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)") | **X** |  |  |{% ifversion ghes %}
| Verificar os domínios da organização (confira "[Como verificar o domínio da sua organização](/articles/verifying-your-organization-s-domain)") | **X** |  |  |
| Restringir as notificações por email aos domínios verificados ou aprovados (confira "[Como restringir notificações por email para sua organização](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)") | **X** |  |  |{% endif %}
| Excluir **todas as equipes** | **X** |  |  |
| Excluir a conta da organização, inclusive todos os repositórios | **X** |  |  |
| Criar equipes (confira "[Como configurar permissões de criação de equipes na sua organização](/articles/setting-team-creation-permissions-in-your-organization)") | **X** | **X** | **X**  |
| Ver todos os integrantes e equipes da organização | **X** | **X** | **X**  |
| @mention qualquer equipe visível | **X** | **X** | **X**  |
| Pode se tornar um *mantenedor da equipe* | **X** | **X** | **X**  |
| Transferir repósitórios | **X** | |  |
| Gerenciar configurações de segurança e análise (confira "[Como gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)") | **X** | | **X** |{% ifversion ghes %}
| Ter a visão geral de segurança da organização (confira "[Sobre a visão geral de segurança](/code-security/security-overview/about-the-security-overview)") | **X** | | **X** |{% endif %}{% ifversion ghes %}
| Gerenciar {% data variables.product.prodname_dependabot_security_updates %} (confira "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)") | **X** | | **X** |{% endif %}
| Gerenciar as autoridades de certificação SSH de uma organização (confira "[Como gerenciar as autoridades de certificação SSH da sua organização](/articles/managing-your-organizations-ssh-certificate-authorities)") | **X** |  |  |
| Criar quadros de projetos (confira "[Permissões de quadros de projetos de uma organização](/articles/project-board-permissions-for-an-organization)") | **X** | **X** | **X** |
| Ver e postar discussões em equipe públicas para **todas as equipes** (confira "[Sobre as discussões em equipe](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** | **X** | **X**  |
| Ver e postar discussões em equipe privadas para **todas as equipes** (confira "[Sobre as discussões em equipe](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** |  |  |
| Editar e excluir discussões em equipe em **todas as equipes** (para obter mais informações, confira "[Como gerenciar comentários impróprios](/communities/moderating-comments-and-conversations/managing-disruptive-comments)") | **X** |  |  |  |
| Ocultar comentários sobre commits, solicitações de pull e problemas (confira "[Como gerenciar comentários impróprios](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)") | **X** | **X** | **X**  |
| Desabilitar as discussões em equipe para uma organização (confira "[Como desabilitar discussões em equipe para sua organização](/articles/disabling-team-discussions-for-your-organization)") | **X** |  |  |
| Definir uma imagem de perfil da equipe em **todas as equipes** (confira "[Como configurar a imagem de perfil da sua equipe](/articles/setting-your-team-s-profile-picture)") | **X** |  |  |{% ifversion ghes %}
| Gerenciar a publicação de sites do {% data variables.product.prodname_pages %} em repositórios na organização (confira "[Como gerenciar a publicação de sites do {% data variables.product.prodname_pages %} para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)") | **X** | |  |{% endif %}
| [Mover equipes na hierarquia de uma organização](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Efetuar pull (leitura) *de todos os repositórios* na organização | **X** | | **X** |
| Efetuar push (gravação) de *todos os repositórios* e cloná-los (cópia) na organização | **X** | |  |
| Converter membros da organização em [colaboradores externos](#outside-collaborators) | **X** | |  |
| [Ver as pessoas com acesso a um repositório da organização](/articles/viewing-people-with-access-to-your-repository) | **X** | |  |
| [Exportar uma lista das pessoas com acesso a um repositório da organização](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |  |
| Gerenciar rótulos padrão (confira "[Como gerenciar rótulos padrão para repositórios na sua organização](/articles/managing-default-labels-for-repositories-in-your-organization)") | **X** | |  |{% ifversion pull-request-approval-limit %}
| Gerenciar revisões de solicitação de pull na organização (confira "[Como gerenciar revisões de solicitação de pull na sua organização](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)") | **X** |  | |  |{% endif %}
{% ifversion ghae %}| Gerenciar listas de permissões de IP (confira "[Como restringir o tráfego de rede para sua empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise)") | **X** | |  |{% endif %}

{% else %}
<!-- GHES and GHAE older versions don't have columns for Moderators, Billing managers or Security managers. -->

| Ação da organização | Proprietários | Membros |
|:--------------------|:------:|:-------:|
| Convidar pessoas para integrar a organização | **X** |  |
| Editar e cancelar convites para integrar a organização | **X** |  |
| Remover integrantes da organização | **X** | | |
| Restabelecer ex-integrantes da organização | **X** | | |
| Adicionar e remover pessoas de **todas as equipes** | **X** |  |  
| Promover membros da organização a *mantenedor da equipe* | **X** |  |
| Configurar atribuições de revisão de código (confira "[Como gerenciar as configurações de revisão de código para sua equipe](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)") | **X** |  |
| Adicionar colaboradores a **todos os repositórios** | **X** |  |
| Acessar o log de auditoria da organização | **X** |  |
| Editar a página de perfil da organização (confira "[Sobre o perfil da sua organização](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)") | **X** |  |  |{% ifversion ghes %}
| Verificar os domínios da organização (confira "[Como verificar o domínio da sua organização](/articles/verifying-your-organization-s-domain)") | **X** |  |
| Restringir as notificações por email aos domínios verificados ou aprovados (confira "[Como restringir notificações por email para sua organização](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)") | **X** |  |{% endif %}
| Excluir **todas as equipes** | **X** |  |
| Excluir a conta da organização, inclusive todos os repositórios | **X** |  |
| Criar equipes (confira "[Como configurar permissões de criação de equipes na sua organização](/articles/setting-team-creation-permissions-in-your-organization)") | **X** | **X** |
| Ver todos os integrantes e equipes da organização | **X** | **X** |
| @mention qualquer equipe visível | **X** | **X** |
| Pode se tornar um *mantenedor da equipe* | **X** | **X** |
| Transferir repósitórios | **X** | |
| Gerenciar as autoridades de certificação SSH de uma organização (confira "[Como gerenciar as autoridades de certificação SSH da sua organização](/articles/managing-your-organizations-ssh-certificate-authorities)") | **X** |  |
| Criar quadros de projetos (confira "[Permissões de quadros de projetos de uma organização](/articles/project-board-permissions-for-an-organization)") | **X** | **X** | |
| Ver e postar discussões em equipe públicas para **todas as equipes** (confira "[Sobre as discussões em equipe](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** | **X** |  |
| Ver e postar discussões em equipe privadas para **todas as equipes** (confira "[Sobre as discussões em equipe](/organizations/collaborating-with-your-team/about-team-discussions)") | **X** |  |  |
| Editar e excluir discussões em equipe em **todas as equipes** (para obter mais informações, confira "[Como gerenciar comentários impróprios](/communities/moderating-comments-and-conversations/managing-disruptive-comments)") | **X** |  |  |
| Ocultar comentários sobre commits, solicitações de pull e problemas (confira "[Como gerenciar comentários impróprios](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)") | **X** | **X** | **X** |
| Desabilitar as discussões em equipe para uma organização (confira "[Como desabilitar discussões em equipe para sua organização](/articles/disabling-team-discussions-for-your-organization)") | **X** |  |  |
| Definir uma imagem de perfil da equipe em **todas as equipes** (confira "[Como configurar a imagem de perfil da sua equipe](/articles/setting-your-team-s-profile-picture)") | **X** |  |  |{% ifversion ghes %}
| Gerenciar a publicação de sites do {% data variables.product.prodname_pages %} em repositórios na organização (confira "[Como gerenciar a publicação de sites do {% data variables.product.prodname_pages %} para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)") | **X** | |{% endif %}
| [Mover equipes na hierarquia de uma organização](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Efetuar pull (leitura), efetuar push (gravação) e clonar (cópia) em *todos os repositórios* da organização | **X** | |
| Converter membros da organização em [colaboradores externos](#outside-collaborators) | **X** | |
| [Ver as pessoas com acesso a um repositório da organização](/articles/viewing-people-with-access-to-your-repository) | **X** | |
| [Exportar uma lista das pessoas com acesso a um repositório da organização](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |
| Gerenciar rótulos padrão (confira "[Como gerenciar rótulos padrão para repositórios na sua organização](/articles/managing-default-labels-for-repositories-in-your-organization)") | **X** | |
{% ifversion ghae %}| Gerenciar listas de permissões de IP (confira "[Como restringir o tráfego de rede para sua empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise)") | **X** | |{% endif %}

{% endif %}

## Leitura adicional

- "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Permissões de quadro de projetos para uma organização](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)"
