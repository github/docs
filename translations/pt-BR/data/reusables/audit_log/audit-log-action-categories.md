---
ms.openlocfilehash: 1dd9305ca2b7cb3e8d25d697de8ae3a83e0c46bb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/28/2022
ms.locfileid: "148183977"
---
| Nome da categoria | Descrição
|------------------|-------------------
{%- ifversion fpt or ghec %} | `account` | Contém atividades relacionadas a uma conta da organização.
| `advisory_credit`   | Contém atividades relacionadas ao crédito de um colaborador de uma consultoria de segurança no {% data variables.product.prodname_advisory_database %}. Para obter mais informações, confira "[Sobre os avisos de segurança do {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
{%- endif %} | `artifact` | Contém atividades relacionadas aos artefatos de execução de fluxo de trabalho do {% data variables.product.prodname_actions %}.
{%- ifversion audit-log-streaming %} | `audit_log_streaming` | Contém atividades relacionadas aos logs de auditoria de streaming para organizações em uma conta corporativa.
{%- endif %} {%- ifversion fpt or ghec %} | `billing` | Contém atividades relacionadas à cobrança de uma organização.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `business` | Contém atividades relacionadas às configurações corporativas de uma empresa.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_advanced_security` | Contém as atividades relacionadas ao {% data variables.product.prodname_GH_advanced_security %} em uma empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning` | Contém as atividades relacionadas a {% data variables.product.prodname_secret_scanning %} em uma empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `business_secret_scanning_custom_pattern` | Contém atividades relacionadas aos padrões de {% data variables.product.prodname_secret_scanning %} em uma empresa.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_secret_scanning_push_protection` | Contém as atividades relacionadas ao recurso de proteção contra push do {% data variables.product.prodname_secret_scanning %} em uma empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning_push_protection_custom_message` | Contém as atividades relacionadas à mensagem personalizada exibida quando a proteção contra push é disparada em uma empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
{%- endif %} | `checks` | Contém atividades relacionadas aos pacotes de verificação e às execuções.
{%- ifversion fpt or ghec %} | `codespaces` | Contém atividades relacionadas aos codespaces de uma organização.
{%- endif %} | `commit_comment` | Contém atividades relacionadas à atualização ou à exclusão de comentários de commit.
{%- ifversion ghes %} | `config_entry` |  Contém atividades relacionadas a definições de configuração. Esses eventos só ficam visíveis no log de auditoria do administrador do site.
{%- endif %} | `dependabot_alerts`  | Contém as atividades de configuração no nível da organização para {% data variables.product.prodname_dependabot_alerts %} em repositórios existentes. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)".
| `dependabot_alerts_new_repos`   | Contém atividades de configuração no nível da organização para {% data variables.product.prodname_dependabot_alerts %} em novos repositórios criados na organização.
| `dependabot_repository_access` | Contém atividades relacionadas aos repositórios privados de uma organização que o {% data variables.product.prodname_dependabot %} tem permissão para acessar.
{%- ifversion fpt or ghec or ghes %} | `dependabot_security_updates`   | Contém as atividades de configuração no nível da organização para {% data variables.product.prodname_dependabot_security_updates %} nos repositórios existentes. Para obter mais informações, confira "[Como configurar {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)".
| `dependabot_security_updates_new_repos` | Contém atividades de configuração de nível da organização nas {% data variables.product.prodname_dependabot_security_updates %} para os repositórios criados na organização.
{%- endif %} | `dependency_graph` | Contém atividades de configuração no nível da organização dos grafos de dependências nos repositórios. Para obter mais informações, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
| `dependency_graph_new_repos`  | Contém atividades de configuração no nível da organização para novos repositórios criados na organização.
{%- ifversion fpt or ghec %} | `discussion` | Contém atividades relacionadas às discussões da equipe.
| `discussion_comment` | Contém atividades relacionadas aos comentários postados em discussões em uma página da equipe.
| `discussion_post`   | Contém atividades relacionadas às discussões postadas em uma página da equipe.
| `discussion_post_reply`   | Contém atividades relacionadas às respostas de discussões postadas em uma página da equipe.
{%- endif %} {%- ifversion ghec or ghes %} | `dotcom_connection` | Contém atividades relacionadas ao {% data variables.product.prodname_github_connect %}.
| `enterprise` | Contém atividades relacionadas às configurações da empresa.
{%- endif %} {%- ifversion ghec %} | `enterprise_domain` | Contém atividades relacionadas aos domínios corporativos verificados.
| `enterprise_installation` | Contém atividades relacionadas aos {% data variables.product.prodname_github_app %}s associados a uma conexão corporativa do {% data variables.product.prodname_github_connect %}.
{%- endif %} {%- ifversion fpt or ghec %} | `environment` | Contém atividades relacionadas a ambientes do {% data variables.product.prodname_actions %}.
{%- endif %} {%- ifversion ghae %} | `external_group` | Contém atividades relacionadas aos grupos do Okta.
| `external_identity` | Contém atividades relacionadas a um usuário em um grupo do Okta.
{%- endif %} | `gist` | Contém atividades relacionadas ao Gists.
| `hook` | Contém atividades relacionadas a webhooks.
| `integration` | Contém atividades relacionadas às integrações de uma conta.
| `integration_installation` | Contém atividades relacionadas às integrações instaladas em uma conta.
| `integration_installation_request`  | Contém atividades relacionadas às solicitações de membros da organização para proprietários aprovarem integrações para uso na organização.
{%- ifversion ghec or ghae %} | `ip_allow_list`   | Contém atividades relacionadas à habilitação ou à desabilitação da lista de permissões de IP para uma organização.
| `ip_allow_list_entry`   | Contém atividades relacionadas à criação, à exclusão e à edição de uma entrada na lista de permissões de IP para uma organização.
{%- endif %} | `issue` | Contém atividades relacionadas à fixação, à transferência ou à exclusão de um problema em um repositório.
| `issue_comment` | Contém atividades relacionadas à fixação, à transferência ou à exclusão de comentários em um problema.
| `issues` | Contém atividades relacionadas à habilitação ou à desabilitação da criação de problemas para uma organização.
{%- ifversion fpt or ghec %} | `marketplace_agreement_signature` | Contém atividades relacionadas à assinatura do Contrato de Desenvolvedor do {% data variables.product.prodname_marketplace %}.
| `marketplace_listing` | Contém atividades relacionadas aos aplicativos de listagem do {% data variables.product.prodname_marketplace %}.
{%- endif %} | `members_can_create_pages`   | Contém atividades relacionadas ao gerenciamento da publicação de sites do {% data variables.product.prodname_pages %} para repositórios na organização. Para obter mais informações, confira "[Como gerenciar a publicação de sites do {% data variables.product.prodname_pages %} para sua organização](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
| `members_can_create_private_pages` | Contém atividades relacionadas ao gerenciamento da publicação de sites privados do {% data variables.product.prodname_pages %} para repositórios na organização.
| `members_can_create_public_pages` | Contém atividades relacionadas ao gerenciamento da publicação de sites públicos do {% data variables.product.prodname_pages %} para repositórios na organização.
{%- ifversion ghec or ghes or ghae %} | `members_can_delete_repos` | Contém atividades relacionadas à habilitação ou à desabilitação da criação de repositórios para uma organização.
{%- endif %} {%- ifversion fpt or ghec %} | `members_can_view_dependency_insights` | Contém atividades de configuração no nível da organização que permitem que os membros da organização vejam insights de dependência.
| `migration` | Contém atividades relacionadas à transferência de dados de um local de *origem* (como uma organização do {% data variables.product.prodname_dotcom_the_website %} ou uma instância do {% data variables.product.prodname_ghe_server %}) para uma instância de *destino* do {% data variables.product.prodname_ghe_server %}.
{%- endif %} | `oauth_access` | Contém atividades relacionadas aos tokens de acesso OAuth.
| `oauth_application` | Contém atividades relacionadas aos Aplicativos OAuth.
{%- ifversion fpt or ghec %} | `oauth_authorization` | Contém atividades relacionadas à autorização de Aplicativos OAuth.
{%- endif %} | `org`   | Contém atividades relacionadas à associação a uma organização.
{%- ifversion ghec or ghes or ghae %} | `org_credential_authorization` | Contém atividades relacionadas à autorização de credenciais para uso com o logon único do SAML.
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org_secret_scanning_custom_pattern` | Contém atividades relacionadas aos padrões personalizados para a verificação de segredos em uma organização. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)".
| `org.secret_scanning_push_protection` | Contém atividades relacionadas aos padrões personalizados de verificação de segredos em uma organização. Para obter mais informações, confira "[Como proteger os pushes com a verificação de segredos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
{%- endif %} | `organization_default_label` | Contém atividades relacionadas aos rótulos padrão em uma organização.
{%- ifversion fpt or ghec or ghes %} | `organization_domain` |Contém atividades relacionadas aos domínios da organização verificados.
| `organization_projects_change` | Contém atividades relacionadas aos quadros de projetos de toda a organização em uma empresa.
{%- endif %} {%- ifversion fpt or ghec %} | `pages_protected_domain` | Contém atividades relacionadas aos domínios personalizados verificados do {% data variables.product.prodname_pages %}.
| `payment_method` | Contém atividades relacionadas à forma de pagamento do {% data variables.product.prodname_dotcom %} de uma organização.
| `prebuild_configuration` | Contém atividades relacionadas às configurações de pré-build do {% data variables.product.prodname_github_codespaces %}.
{%- endif %} {%- ifversion ghes %} | `pre_receive_environment` | Contém atividades relacionadas aos ambientes de gancho de pré-recebimento.
| `pre_receive_hook` | Contém atividades relacionadas aos ganchos de pré-recebimento.
{%- endif %} {%- ifversion ghes %} | `private_instance_encryption` | Contém atividades relacionadas à habilitação do modo privado para uma empresa.
{%- endif %} | `private_repository_forking` | Contém atividades relacionadas à permissão de forks de repositórios privados e internos para um repositório, uma organização ou uma empresa.
{%- ifversion fpt or ghec %} | `profile_picture` | Contém atividades relacionadas à imagem de perfil de uma organização.
{%- endif %} | `project` | Contém atividades relacionadas aos quadros de projetos.
| `project_field` | Contém atividades relacionadas à criação e à exclusão de campos em um quadro de projetos.
| `project_view` | Contém atividades relacionadas à criação e à exclusão de exibições em um quadro de projetos.
| `protected_branch` | Contém atividades relacionadas aos branches protegidos.
| `public_key` | Contém atividades relacionadas às chaves SSH e às chaves de implantação.
| `pull_request` | Contém atividades relacionadas às solicitação de pull.
| `pull_request_review` | Contém atividades relacionadas às revisões de solicitação de pull.
| `pull_request_review_comment` | Contém atividades relacionadas aos comentários de revisão de solicitação de pull.
| `repo` | Contém atividades relacionadas aos repositórios pertencentes a uma organização.
{%- ifversion fpt or ghec %} | `repository_advisory` | Contém atividades de nível do repositório relacionadas às consultorias de segurança no {% data variables.product.prodname_advisory_database %}.  Para obter mais informações, confira "[Sobre os avisos de segurança do {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
| `repository_content_analysis` | Contém atividades relacionadas [à habilitação ou à desabilitação do uso de dados em um repositório privado](/articles/about-github-s-use-of-your-data).
| `repository_dependency_graph` | Contém atividades de nível do repositório relacionadas à habilitação ou à desabilitação do grafo de dependência em um repositório {% ifversion fpt or ghec %}privado {% endif %}. Para obter mais informações, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
{%- endif %} | `repository_image` | Contém atividades relacionadas a imagens para um repositório.
| `repository_invitation` | Contém atividades relacionadas a convites para ingresso em um repositório.
| `repository_projects_change` | Contém atividades relacionadas à habilitação de projetos em um repositório ou em todos os repositórios de uma organização.
{%- ifversion ghec or ghes or ghae %} | `repository_secret_scanning` | Contém atividades de nível do repositório relacionadas à verificação de segredos. Para obter mais informações, confira "[Sobre a verificação de segredos](/github/administering-a-repository/about-secret-scanning)".
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_custom_pattern` | Contém atividades relacionadas a padrões personalizados da verificação de segredos em um repositório. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)". {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_push_protection` | Contém atividades relacionadas a padrões personalizados da verificação de segredos em um repositório. Para obter mais informações, confira "[Como proteger os pushes com a verificação de segredos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
{%- endif %} {%- ifversion fpt or ghec %} | `repository_visibility_change` | Contém atividades relacionadas à permissão de que os membros da organização alterem a visibilidade do repositório para a organização.
{%- endif %} | `repository_vulnerability_alert`   | Contém atividades relacionadas a [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
{%- ifversion fpt or ghec %} | `repository_vulnerability_alerts` | Contém atividades de configuração no nível do repositório em relação a {% data variables.product.prodname_dependabot_alerts %}.
| `required_status_check` | Contém atividades relacionadas às verificações de status obrigatórias em branches protegidos.
{%- endif %} {%- ifversion ghec or ghes %} | `restrict_notification_delivery` | Contém atividades relacionadas à restrição de notificações por email para domínios aprovados ou verificados em uma empresa.
{%- endif %} {%- ifversion custom-repository-roles %} | `role` | Contém atividades relacionadas a [funções de repositório personalizadas](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `secret_scanning`   | Contém atividades de configuração de nível da organização para a verificação de segredos em repositórios existentes. Para obter mais informações, confira "[Sobre a verificação de segredos](/github/administering-a-repository/about-secret-scanning)".
| `secret_scanning_new_repos` | Contém atividades de configuração de nível da organização para verificação de segredos para os repositórios criados na organização.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `security_key` | Contém atividades relacionadas ao registro e à remoção de chaves de segurança.
{%- endif %} {%- ifversion fpt or ghec %} | `sponsors`  | Contém eventos relacionados a botões de patrocinador (confira "[Como exibir um botão de patrocinador no seu repositório](/articles/displaying-a-sponsor-button-in-your-repository)").
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `ssh_certificate_authority` | Contém atividades relacionadas a uma autoridade de certificação SSH em uma organização ou uma empresa.
| `ssh_certificate_requirement` | Contém atividades relacionadas ao requisito de que os membros usem certificados SSH para acessar recursos da organização.
{%- endif %} {% ifversion sso-redirect %} | `sso_redirect` | Contém atividades relacionadas ao redirecionamento automático de usuários para entrar (confira "[Como aplicar políticas para configurações de segurança em sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)"). {% endif %} | `staff` | Contém atividades relacionadas a um administrador do site que executa uma ação.
| `team` | Contém atividades relacionadas às equipes em uma organização.
| `team_discussions` | Contém atividades relacionadas ao gerenciamento de discussões em equipe em uma organização.
{%- ifversion ghec %} | `team_sync_tenant` | Contém atividades relacionadas à sincronização de equipe com um IdP para uma empresa ou uma organização.
{%- endif %} {%- ifversion fpt or ghes %} | `two_factor_authentication` | Contém atividades relacionadas à autenticação de dois fatores.
{%- endif %} | `user` | Contém atividades relacionadas aos usuários em uma empresa ou organização.
{%- ifversion ghec or ghes %} | `user_license` | Contém atividades relacionadas a um usuário que ocupa uma estação licenciada e que é membro de uma empresa.
{%- endif %} | `workflows`   | Contém atividades relacionadas a fluxos de trabalho do {% data variables.product.prodname_actions %}.
