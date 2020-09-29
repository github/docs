---
title: Sobre webhooks globais
intro: Os webhooks globais enviam notificações sobre eventos no nível da instância.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
versions:
  enterprise-server: '*'
---

Você pode usar webhooks globais para monitorar, responder ou impor regras automaticamente para o gerenciamento de usuários e de organizações na sua instância. Por exemplo, você pode configurar os webhooks para serem executados sempre que:
- Uma conta de usuário for criada ou excluída;
- Uma organização for criada ou excluída;
- Um colaborador for adicionado ou removido de um repositório;
- Um repositório tiver bifurcação.

![Lista de webhooks globais](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

Para obter mais informações sobre como configurar webhooks, consulte "[Gerenciar webhooks globais](/enterprise/{{ currentVersion }}/admin/guides/user-management/managing-global-webhooks)".

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}
