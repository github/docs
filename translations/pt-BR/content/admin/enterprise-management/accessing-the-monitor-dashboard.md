---
title: Acessar o painel de monitoramento
intro: 'O {% data variables.product.prodname_ghe_server %} inclui um painel de monitoramento baseado na web que exibe os dados de histórico do seu appliance do {% data variables.product.prodname_ghe_server %}, como uso de CPU e armazenamento, tempos de resposta de aplicativos e autenticação, e informações gerais sobre a integridade do sistema.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  enterprise-server: '*'
---

### Acessar o painel de monitoramento

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Na parte superior da página, clique em **Monitor** (Monitorar). ![Link para o Painel de monitoramento ](/assets/images/enterprise/management-console/monitor-dash-link.png)

### Resolver problemas comuns de alocação de recursos no appliance

{% note %}

**Observação**: fazer sondagens regularmente na {% data variables.product.product_location_enterprise %} com integração contínua (CI, Continuous Integration) ou criar servidores pode causar um ataque de negação de serviço e gerar problemas. Portanto, recomendamos o uso de webhooks para fazer push das atualizações. Para obter mais informações, consulte "[Sobre webhooks](/enterprise/{{ currentVersion }}/user/articles/about-webhooks/)".

{% endnote %}

Use o painel de monitoramento para se manter a par da integridade dos recursos do seu appliance e decidir como corrigir os problemas de uso excessivo.

| Problema                                  | Possíveis causas                                                          | Recomendações                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Uso excessivo de CPU                      | Contenção da VM por outros serviços ou programas executados no mesmo host | Se possível, reconfigure outros serviços ou programas para usar menos recursos de CPU. Para otimizar todos os recursos de CPU na VM, consulte "[Otimizar os recursos de CPU ou memória](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-cpu-or-memory-resources/)".                                                                                         |
| Uso excessivo de memória                  | Contenção da VM por outros serviços ou programas executados no mesmo host | Se possível, reconfigure outros serviços ou programas para usar menos memória. Para otimizar o uso da memória disponível na VM, consulte "[Otimizar os recursos de CPU ou memória](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-cpu-or-memory-resources/)".                                                                                              |
| Pouco espaço em disco                     | Consumo do espaço em disco por arquivos grandes binários ou de log        | Se possível, hospede os arquivos binários grandes em outro servidor e compacte ou arquive os arquivos de log. Se necessário, aumente o espaço em disco na VM seguindo as etapas da sua plataforma em "[Aumentar a capacidade de armazenamento](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity/)".                                         |
| Tempos de resposta maiores do que o comum | Costuma ser causado por um dos problemas acima                            | Identifique e corrija os problema subjacentes. Se os tempos de resposta continuarem altos, entre em contato com o {% data variables.contact.contact_ent_support %}.                                                                                                                                                                                                      |
| Altos índices de erro                     | Problemas de software                                                     | Entre em contato com o {% data variables.contact.contact_ent_support %} e inclua seu pacote de suporte. Para obter mais informações, consulte "[Enviar dados ao suporte do {% data variables.product.prodname_enterprise %}](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)". |
