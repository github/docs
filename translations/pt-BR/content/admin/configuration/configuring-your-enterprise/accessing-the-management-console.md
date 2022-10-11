---
title: Acessar o console de gerenciamento
intro: '{% data reusables.enterprise_site_admin_settings.about-the-management-console %}'
redirect_from:
  - /enterprise/admin/articles/about-the-management-console/
  - /enterprise/admin/articles/management-console-for-emergency-recovery/
  - /enterprise/admin/articles/web-based-management-console/
  - /enterprise/admin/categories/management-console/
  - /enterprise/admin/articles/accessing-the-management-console/
  - /enterprise/admin/guides/installation/web-based-management-console/
  - /enterprise/admin/installation/accessing-the-management-console
  - /enterprise/admin/configuration/accessing-the-management-console
  - /admin/configuration/accessing-the-management-console
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
---

### Sobre o {% data variables.enterprise.management_console %}

Use o {% data variables.enterprise.management_console %} para atividades administrativas básicas:
- **Configuração inicial**: conheça o processo de configuração inicial ao entrar pela primeira vez na {% data variables.product.product_location %} acessando o endereço IP da {% data variables.product.product_location %} no navegador.
- **Configurações básicas da instância**: configure DNS, nome do host, SSL, autenticação do usuário, e-mail, serviços de monitoramento e encaminhamento de logs na página Settings (Configurações).
- **Agendamento de períodos de manutenção**: deixe {% data variables.product.product_location %} off-line durante a manutenção usando o {% data variables.enterprise.management_console %} ou o shell administrativo.
- **Solução de problemas**: gere um pacote de suporte ou exiba informações de diagnóstico de alto nível.
- **Gerenciamento de licenças**: exiba ou atualize a licença do {% data variables.product.prodname_enterprise %}.

É possível chegar ao {% data variables.enterprise.management_console %} usando o endereço IP da {% data variables.product.product_location %}, mesmo quando a instância estiver em modo de manutenção, ou quando houver uma falha grave de aplicativo ou problema de configuração de SSL.

Para acessar o {% data variables.enterprise.management_console %}, você deve usar a senha de administrador definida na configuração inicial da {% data variables.product.product_location %}. Você também deve poder se conectar ao host da máquina virtual na porta 8443. Se tiver problemas para chegar ao {% data variables.enterprise.management_console %}, verifique as configurações intermediárias de firewall e grupo de segurança.

### Acessar o {% data variables.enterprise.management_console %} como administrador do site

A primeira vez que você acessar o {% data variables.enterprise.management_console %} como administrador do site, você deve enviar seu arquivo de licença do {% data variables.product.prodname_enterprise %} para efetuar a autenticação no aplicativo. Para obter mais informações, consulte "[Gerenciar sua licença do {% data variables.product.prodname_enterprise %}](/enterprise/{{ currentVersion }}/admin/guides/installation/managing-your-github-enterprise-license)".

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}

### Acessar o {% data variables.enterprise.management_console %} como usuário não autenticado

1. Acesse esta URL no navegador substituindo `hostname` pelo nome de host ou endereço IP do {% data variables.product.prodname_ghe_server %}:
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

### Desbloquear o {% data variables.enterprise.management_console %} após tentativas de login com falha

O {% data variables.enterprise.management_console %} trava após dez tentativas de login com falha em um período de dez minutos. Antes de tentar novamente, aguarde o desbloqueio automático da tela de login, que ocorrerá após um período de dez minutos. A contagem é redefinida depois do login bem-sucedido.

Para bloquear o {% data variables.enterprise.management_console %} imediatamente, use o comando `ghe-reactivate-admin-login` pelo shell administrativo. Para obter mais informações, consulte "[Utilitários da linha de comando](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-reactivate-admin-login)" e "[Acessar o shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)".
