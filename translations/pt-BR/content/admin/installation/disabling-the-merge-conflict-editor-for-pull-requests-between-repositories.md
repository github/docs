---
title: Desabilitar o editor de conflito de merge para pull requests entre repositórios
intro: 'Você pode exigir que as pessoas resolvam conflitos de merge no local desabilitando o editor de conflito de merge no {% data variables.product.prodname_ghe_server %} para as pull requests quando o branch base e o branch principal estiverem em repositórios diferentes.'
redirect_from:
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
versions:
  enterprise-server: '*'
---

Solicitar que os usuário resolvam conflitos de merge em seus respectivos computadores pode impedir gravações inadvertidas em repositórios upstream a partir de uma bifurcação.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Em "Conflict editor for pull requests between repositories" (Editor de conflitos para pull requests entre repositórios), use o menu suspenso e clique em **Disabled** (Desabilitar). ![Menu suspenso com opção para desabilitar o editor de conflito de merge](/assets/images/enterprise/settings/conflict-editor-settings.png)
