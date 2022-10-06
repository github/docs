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
shortTitle: Access the management console
ms.openlocfilehash: 3ddf8deb75c72679fc3e446127fc43ae6f5de4d3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332373'
---
## Sobre o {% data variables.enterprise.management_console %}

Use o {% data variables.enterprise.management_console %} para atividades administrativas básicas:
- **Configuração inicial**: siga o processo de instalação inicial ao iniciar o {% data variables.product.product_location %} acessando o endereço IP do {% data variables.product.product_location %} no navegador.
- **Definição das configurações básicas da sua instância**: configure o DNS, o nome do host, o SSL, a autenticação do usuário, o email, os serviços de monitoramento e o encaminhamento de log na página Configurações.
- **Agendamento das janelas de manutenção**: coloque o {% data variables.product.product_location %} offline ao executar a manutenção usando o {% data variables.enterprise.management_console %} ou o shell administrativo.
- **Solução de problemas**: gere um pacote de suporte ou veja informações de diagnóstico de alto nível.
- **Gerenciamento de licenças**: veja ou atualize sua licença do {% data variables.product.prodname_enterprise %}.

Você sempre pode acessar o {% data variables.enterprise.management_console %} usando o endereço IP do {% data variables.product.product_location %}, mesmo quando a instância está no modo de manutenção ou há uma falha de aplicativo crítica ou um erro no nome do host ou na configuração do SSL.

Para acessar o {% data variables.enterprise.management_console %}, você precisa usar a senha de administrador estabelecida durante a instalação inicial do {% data variables.product.product_location %}. Você também deve poder se conectar ao host da máquina virtual na porta 8443. Se tiver problemas para chegar ao {% data variables.enterprise.management_console %}, verifique as configurações intermediárias de firewall e grupo de segurança.

O hash de senha do {% data variables.enterprise.management_console %} é armazenado em `/data/user/common/secrets.conf`, e esse arquivo é sincronizado automaticamente do dispositivo primário com todas as réplicas de alta disponibilidade. Qualquer alteração na senha principal será automaticamente replicada em réplicas de alta disponibilidade. Para obter mais informações sobre alta disponibilidade, confira "[Sobre a configuração de alta disponibilidade](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)".

## Acessar o {% data variables.enterprise.management_console %} como administrador do site

A primeira vez que você acessar o {% data variables.enterprise.management_console %} como administrador do site, você deve enviar seu arquivo de licença do {% data variables.product.prodname_enterprise %} para efetuar a autenticação no aplicativo. Para obter mais informações, confira "[Como gerenciar sua licença do {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)".

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}

## Acessar o {% data variables.enterprise.management_console %} como usuário não autenticado

1. Acesse essa URL no navegador, substituindo `hostname` pelo nome do host ou pelo endereço IP real do {% data variables.product.prodname_ghe_server %}:
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

## Desbloquear o {% data variables.enterprise.management_console %} após tentativas de login com falha

O {% data variables.enterprise.management_console %} trava após dez tentativas de login com falha em um período de dez minutos. Antes de tentar novamente, aguarde o desbloqueio automático da tela de login, que ocorrerá após um período de dez minutos. A contagem é redefinida depois do login bem-sucedido.

Para desbloquear imediatamente o {% data variables.enterprise.management_console %}, use o comando `ghe-reactivate-admin-login` por meio do shell administrativo. Para obter mais informações, confira "[Utilitários de linha de comando](/enterprise/admin/guides/installation/command-line-utilities#ghe-reactivate-admin-login)" e "[Como acessar o shell administrativo (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)".

## Solução de problemas de conexões com falha no {% data variables.enterprise.management_console %}

Se você não puder se conectar ao {% data variables.enterprise.management_console %} no {% data variables.product.product_location %}, examine as informações a seguir para solucionar o problema.

### Erro: "Sua sessão expirou" de conexões por meio de um balanceador de carga

Se você acessar o {% data variables.product.product_location %} por meio de um balanceador de carga e as conexões com o {% data variables.enterprise.management_console %} falharem com uma mensagem de que a sessão expirou, talvez seja necessário reconfigurar o balanceador de carga. Para obter mais informações, confira "[Como usar o {% data variables.product.product_name %} com um balanceador de carga](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)".
