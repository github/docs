---
title: Configurar uma instância de preparo
intro: 'Você pode configurar uma instância de {% data variables.product.product_name %} em um ambiente separado e isolado e usar a instância para validar e testar alterações.'
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

## Sobre instâncias de preparo

{% data variables.product.company_short %} recomenda que você configure um ambiente separado para testar backups, atualizações ou alterações na configuração para {% data variables.product.product_location %}. Este ambiente, que você deve isolar dos seus sistemas de produção, é chamado de ambiente de preparo.

Por exemplo, para se proteger contra a perda de dados, você pode validar regularmente o backup da sua instância de produção. Você pode restaurar regularmente o backup dos seus dados de produção em uma instância separada de {% data variables.product.product_name %} em um ambiente de preparo. Nesta instância de preparo, você também pode testar a atualização para a versão de recurso mais recente de {% data variables.product.product_name %}.

{% tip %}

**Dica:** talvez seja interessante reutilizar seu arquivo de licença do {% data variables.product.prodname_enterprise %}, desde que a instância de preparo não seja usada em uma capacidade de produção.

{% endtip %}

## Considerações sobre um ambiente de preparo

Para testar minuciosamente {% data variables.product.product_name %} e recriar um ambiente tão semelhante ao seu ambiente de produção quanto possível, considere os sistemas externos que interagem com sua instância. Por exemplo, você deverá testar o seguinte em seu ambiente de preparo.

- Autenticação, especialmente se você usa um provedor de autenticação externo como o SAML
- Integração com um sistema externo de geração de tíquetes;
- Integração com um servidor de integração contínua;
- Software ou scripts externos que usam a {% data variables.product.prodname_enterprise_api %};
- Servidor externo SMTP para notificações de e-mail.

## Configurar uma instância de preparo

1. Faça backup da sua instância de produção usando o {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, consulte a seção "Sobre o {% data variables.product.prodname_enterprise_backup_utilities %}" em "[Configurar backups no appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)".
2. Configure uma nova instância para funcionar como ambiente de preparo. Você pode usar os mesmos guias para provisionar e instalar sua instância de preparo, assim como fez na instância de produção. Para obter mais informações, consulte "[Configurar instância do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)".
3. Opcionalmente, se você planeja testar a funcionalidade de {% data variables.product.prodname_actions %} em seu ambiente de teste, revise as considerações para seus logs e armazenamento. Para obter mais informações, consulte "[Usando um ambiente de teste](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)".
4. Restaure o backup na sua instância de preparo. Para obter mais informações, consulte a seção "Restaurar backup" em "[Configurar backups no appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)".

## Leia mais

- "[Sobre atualizações para novas versões](/admin/overview/about-upgrades-to-new-releases)"
