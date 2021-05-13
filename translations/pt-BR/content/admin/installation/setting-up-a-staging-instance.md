---
title: Configurar uma instância de preparo
intro: 'É possível usar uma *instância de preparo* para testar as modificações antes de aplicá-las à {% data variables.product.product_location %}. Por exemplo, você pode usar uma instância de teste para avaliar novas atualizações do {% data variables.product.prodname_ghe_server %} ou praticar a importação de dados de migração.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% tip %}

**Dica:** talvez seja interessante reutilizar seu arquivo de licença do {% data variables.product.prodname_enterprise %}, desde que a instância de preparo não seja usada na produção.

{% endtip %}

Para fazer um teste completo em todo o appliance do {% data variables.product.prodname_ghe_server %}, você terá que englobar os sistemas externos que interagem com ele. Veja alguns fatores a serem considerados:

  - Autenticação, principalmente se você estiver usando um provedor de autenticação externo;
  - Integração com um sistema externo de geração de tíquetes;
  - Integração com um servidor de integração contínua;
  - Software ou scripts externos que usam a {% data variables.product.prodname_enterprise_api %};
  - Servidor externo SMTP para notificações de e-mail.

1. Faça backup da sua instância de produção usando o {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, consulte a seção "Sobre o {% data variables.product.prodname_enterprise_backup_utilities %}" em "[Configurar backups no appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)".
2. Configure uma nova instância para funcionar como ambiente de preparo. Você pode usar os mesmos guias para provisionar e instalar sua instância de preparo, assim como fez na instância de produção. Para obter mais informações, consulte "[Configurar instância do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)".
3. Restaure o backup na sua instância de preparo. Para obter mais informações, consulte a seção "Restaurar backup" em "[Configurar backups no appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)".

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Leia mais

- "[Sobre atualizações para novas versões](/admin/overview/about-upgrades-to-new-releases)"
{% endif %}
