---
title: Verificações de atualizações automáticas
intro: 'É possível habilitar as verificações de atualizações automáticas para que a {% data variables.product.product_location %} verifique e baixe as versões mais recentes do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
---

Quando um pacote de atualização for baixado automaticamente para a {% data variables.product.product_location %}, você receberá uma mensagem informando que pode atualizar o {% data variables.product.prodname_ghe_server %}. Os pacotes baixados ficam no diretório `/var/lib/ghe-updates` na {% data variables.product.product_location %}. Para obter mais informações, consulte "[Atualizar o {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server)".

Se houver algum hotpatch disponível para atualização, o `.hpkg` fará o download automaticamente. No console de gerenciamento, você pode instalar o hotpatch imediatamente ou agendar a instalação para outro período. Para obter mais informações, consulte "[Atualizar com hotpatch](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch)".

{% tip %}

**Dica:** para habilitar as verificações de atualizações automáticas, a {% data variables.product.product_location %} deve poder se conectar a `https://github-enterprise.s3.amazonaws.com`.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
4. Clique em **Yes, automatically check for updates** (Sim, verificar atualizações automaticamente). ![Botão para habilitar atualizações automáticas](/assets/images/enterprise/management-console/enable_updates_button.png)
{% data reusables.enterprise_management_console.save-settings %}

Para ver se a sua instância está atualizada, verifique o banner na guia Updates (Atualizações).

![Banner indicativo da versão do GitHub Enterprise Server](/assets/images/enterprise/management-console/up-to-date-banner.png)

Em **Logs**, consulte o status da verificação de atualização mais recente.

![Logs para atualização](/assets/images/enterprise/management-console/update-log.png)
