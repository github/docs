---
title: Configurar a visibilidade dos integrantes da organização
intro: Você pode definir a visibilidade dos novos integrantes da organização em toda a instância como "pública" ou "privada". Também é possível impedir que os integrantes alterem a visibilidade padrão.
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
versions:
  enterprise-server: '*'
---

Além disso, você pode impor a sua configuração padrão para todos os integrantes da organização na instância usando um utilitário de linha de comando. Por exemplo, se quiser que a visibilidade de todos os integrantes da organização seja pública, você pode definir o padrão como "pública" e aplicá-lo para todos os novos integrantes nas configurações de administrador, e depois usar o utilitário de linha de comando para aplicar a configuração "pública" a todos os outros integrantes.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
3. No menu suspenso em "Default organization membership visibility" (Visibilidade padrão dos integrantes da organização), clique em **Private** (Privada) ou **Public** (Pública). ![Menu suspenso com a opção de configurar a visibilidade padrão dos integrantes da organização como pública ou privada](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. Para impedir que os integrantes alterem a visibilidade padrão, selecione **Enforce on organization members** (Aplicar aos integrantes da organização). ![Caixa de seleção para aplicar a configuração padrão a todos os integrantes](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png)
5. Se você quiser aplicar a nova configuração de visibilidade a todos os integrantes, use o utilitário da linha de comando `ghe-org-membership-update`. Para obter mais informações, consulte "[Utilitários da linha de comando](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-membership-update)".
