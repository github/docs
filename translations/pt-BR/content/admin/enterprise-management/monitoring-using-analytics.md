---
title: Monitoramento com análise
intro: 'Você pode habilitar ferramentas de análise da web para acompanhar e analisar o tráfego para sua instância de {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/enterprise-management/monitoring-using-analytics
versions:
  enterprise-server: '>2.21'
---

### Configurar o Google Analytics

Para configurar o Google Analytics, você deve ter um [ID do Google Analytics](https://analytics.google.com/) e efetuar a autenticação na sua instância do {% data variables.product.prodname_ghe_server %} com SSH. Para obter mais informações, consulte "[Acessar o shell administrativo (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)".

```shell
$ ghe-config website-analytics.enabled true
$ ghe-config website-analytics.google-analytics-id <em>GOOGLE-ANALYTICS-ID</em>
$ ghe-config-apply
```
