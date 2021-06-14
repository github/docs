---
title: Recriar dados de contribuições
intro: Talvez você precise recriar os dados das contribuições para vincular os commits existentes a uma conta de usuário.
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data/
  - /enterprise/admin/user-management/rebuilding-contributions-data
  - /admin/user-management/rebuilding-contributions-data
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Repositories
  - User account
---

Sempre que é enviado para o {% data variables.product.prodname_enterprise %}, o commit é vinculado a uma conta de usuário caso ambos estejam associados ao mesmo endereço de e-mail. No entanto, os commits *não* são vinculados retroativamente quando um usuário registra um endereço de e-mail ou cria uma conta.

1. Acesse a página de perfil do usuário.
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. À esquerda na página, clique em **Admin** (Administrador). ![Guia Admin (Administrador)](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. Em **Contributions data** (Dados de contribuição), clique em **Rebuild** (Recompilar). ![Botão Rebuild (Recompilar)](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} will now start background jobs to re-link commits with that user's account.
  ![Trabalhos recompilados em fila](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
