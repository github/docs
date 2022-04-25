---
title: Configurar uma instância de preparo
intro: 'You can set up a {% data variables.product.product_name %} instance in a separate, isolated environment, and use the instance to validate and test changes.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: Configurar uma instância de teste
---

## About staging instances

{% data variables.product.company_short %} recommends that you set up a separate environment to test backups, updates, or changes to the configuration for {% data variables.product.product_location %}. This environment, which you should isolate from your production systems, is called a staging environment.

For example, to protect against loss of data, you can regularly validate the backup of your production instance. You can regularly restore the backup of your production data to a separate {% data variables.product.product_name %} instance in a staging environment. On this staging instance, you could also test the upgrade to the latest feature release of {% data variables.product.product_name %}.

{% tip %}

**Tip:** You may reuse your existing {% data variables.product.prodname_enterprise %} license file as long as the staging instance is not used in a production capacity.

{% endtip %}

## Considerations for a staging environment

To thoroughly test {% data variables.product.product_name %} and recreate an environment that's as similar to your production environment as possible, consider the external systems that interact with your instance. For example, you may want to test the following in your staging environment.

- Authentication, especially if you use an external authentication provider like SAML
- Integração com um sistema externo de geração de tíquetes;
- Integração com um servidor de integração contínua;
- Software ou scripts externos que usam a {% data variables.product.prodname_enterprise_api %};
- Servidor externo SMTP para notificações de e-mail.

## Configurar uma instância de preparo

1. Faça backup da sua instância de produção usando o {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, consulte a seção "Sobre o {% data variables.product.prodname_enterprise_backup_utilities %}" em "[Configurar backups no appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)".
2. Configure uma nova instância para funcionar como ambiente de preparo. Você pode usar os mesmos guias para provisionar e instalar sua instância de preparo, assim como fez na instância de produção. Para obter mais informações, consulte "[Configurar instância do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)".
3. Optionally, if you plan to test {% data variables.product.prodname_actions %} functionality in your test environment, review the considerations for your logs and storage. For more information, see "[Using a staging environment](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)."
4. Restaure o backup na sua instância de preparo. Para obter mais informações, consulte a seção "Restaurar backup" em "[Configurar backups no appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)".

## Leia mais

- "[Sobre atualizações para novas versões](/admin/overview/about-upgrades-to-new-releases)"
