---
title: Acessar o console de gerenciamento
intro: '{% data reusables.enterprise_site_admin_settings.about-the-management-console %}'
redirect_from:
  - /enterprise/admin/articles/about-the-management-console
  - /enterprise/admin/articles/management-console-for-emergency-recovery
  - /enterprise/admin/articles/web-based-management-console
  - /enterprise/admin/categories/management-console
  - /enterprise/admin/articles/accessing-the-management-console
  - /enterprise/admin/guides/installation/web-based-management-console
  - /enterprise/admin/installation/accessing-the-management-console
  - /enterprise/admin/configuration/accessing-the-management-console
  - /admin/configuration/accessing-the-management-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Acessar o console de gerenciamento
---

## Sobre o {% data variables.enterprise.management_console %}

Use o {% data variables.enterprise.management_console %} para atividades administrativas básicas:
- **Configuração inicial**: conheça o processo de configuração inicial ao entrar pela primeira vez na {% data variables.product.product_location %} acessando o endereço IP da {% data variables.product.product_location %} no navegador.
- **Configurações básicas da instância**: configure DNS, nome do host, SSL, autenticação do usuário, e-mail, serviços de monitoramento e encaminhamento de logs na página Settings (Configurações).
- **Agendamento de períodos de manutenção**: deixe {% data variables.product.product_location %} off-line durante a manutenção usando o {% data variables.enterprise.management_console %} ou o shell administrativo.
- **Solução de problemas**: gere um pacote de suporte ou exiba informações de diagnóstico de alto nível.
- **Gerenciamento de licenças**: exiba ou atualize a licença do {% data variables.product.prodname_enterprise %}.

É possível chegar ao {% data variables.enterprise.management_console %} usando o endereço IP da {% data variables.product.product_location %}, mesmo quando a instância estiver em modo de manutenção, ou quando houver uma falha grave de aplicativo ou problema de configuração de SSL.

Para acessar o {% data variables.enterprise.management_console %}, você deve usar a senha de administrador definida na configuração inicial da {% data variables.product.product_location %}. Você também deve poder se conectar ao host da máquina virtual na porta 8443. Se tiver problemas para chegar ao {% data variables.enterprise.management_console %}, verifique as configurações intermediárias de firewall e grupo de segurança.

O hash da senha de {% data variables.enterprise.management_console %} é armazenado em `/data/user/common/secrets.conf` e esse arquivo é automaticamente sincronizado no dispositivo principal para qualquer réplica de alta disponibilidade. Qualquer alteração na senha principal será automaticamente replicada em réplicas de alta disponibilidade. Para obter mais informações sobre alta disponibilidade, consulte "[Sobre configuração de alta disponibilidade](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)".

## Acessar o {% data variables.enterprise.management_console %} como administrador do site

A primeira vez que você acessar o {% data variables.enterprise.management_console %} como administrador do site, você deve enviar seu arquivo de licença do {% data variables.product.prodname_enterprise %} para efetuar a autenticação no aplicativo. Para obter mais informações, consulte "[Gerenciar a sua licença para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}

## Acessar o {% data variables.enterprise.management_console %} como usuário não autenticado

1. Acesse esta URL no navegador substituindo `hostname` pelo nome de host ou endereço IP do {% data variables.product.prodname_ghe_server %}:
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

## Desbloquear o {% data variables.enterprise.management_console %} após tentativas de login com falha

O {% data variables.enterprise.management_console %} trava após dez tentativas de login com falha em um período de dez minutos. Antes de tentar novamente, aguarde o desbloqueio automático da tela de login, que ocorrerá após um período de dez minutos. A contagem é redefinida depois do login bem-sucedido.

Para bloquear o {% data variables.enterprise.management_console %} imediatamente, use o comando `ghe-reactivate-admin-login` pelo shell administrativo. Para obter mais informações, consulte "[Utilitários da linha de comando](/enterprise/admin/guides/installation/command-line-utilities#ghe-reactivate-admin-login)" e "[Acessar o shell administrativo (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)".

## Solucionando problemas de conexões com falha para {% data variables.enterprise.management_console %}

Se você não conseguir se conectar ao {% data variables.enterprise.management_console %} em {% data variables.product.product_location %}, você poderé revisar as seguintes informações para solucionar o problema.

### Erro: "Sua sessão expirou" para conexões através de um balanceador de carga

Se você acessar {% data variables.product.product_location %} através de um balanceador de carga e ocorrer uma falha nas conexões para o {% data variables.enterprise.management_console %} com uma mensagem de que a sua sessão expirou, talvez você precise reconfigurar seu balanceamento de carga. Para obter mais informações, consulte "[Usar o {% data variables.product.product_name %} com balanceador de carga](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)".
