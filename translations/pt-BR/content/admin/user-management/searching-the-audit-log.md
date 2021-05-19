---
title: Pesquisar no log de auditoria
intro: Os administradores do site podem pesquisar uma extensa lista de ações auditadas sobre a empresa.
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log/
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
---

### Sintaxe de consulta de pesquisa

Crie uma consulta de pesquisa com um ou mais pares chave-valor separados por operadores lógicos AND/OR.

|          Tecla | Valor                                                                                     |
| --------------:| ----------------------------------------------------------------------------------------- |
|     `actor_id` | ID da conta do usuário que iniciou a ação.                                                |
|        `actor` | Nome da conta do usuário que iniciou a ação.                                              |
| `oauth_app_id` | ID do aplicativo OAuth associado à ação.                                                  |
|         `Ação` | Nome da ação auditada                                                                     |
|      `user_id` | ID do usuário afetado pela ação.                                                          |
|      `usuário` | Nome do usuário afetado pela ação.                                                        |
|      `repo_id` | ID do repositório afetado pela ação (se aplicável).                                       |
|         `repo` | Nome do repositório afetado pela ação (se aplicável).                                     |
|     `actor_ip` | Endereço IP do qual a ação foi iniciada.                                                  |
|   `created_at` | Hora em que a ação ocorreu.                                                               |
|         `from` | Exibição da qual a ação foi iniciada.                                                     |
|         `note` | Informações diversas sobre eventos específicos (em texto sem formatação ou formato JSON). |
|          `org` | Nome da organização afetada pela ação (se aplicável).                                     |
|       `org_id` | ID da organização afetada pela ação (se aplicável).                                       |

Por exemplo, para ver todas as ações que afetaram o repositório `octocat/Spoon-Knife` desde o início de 2017:

  `repo:"octocat/Spoon-Knife" AND created_at:[2017-01-01 TO *]`

Para obter uma lista completa de ações, consulte "[Ações auditadas](/admin/user-management/audited-actions)".

### Pesquisar no log de auditoria

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
4. Digite uma consulta de pesquisa.![Consulta de pesquisa](/assets/images/enterprise/site-admin-settings/search-query.png)
