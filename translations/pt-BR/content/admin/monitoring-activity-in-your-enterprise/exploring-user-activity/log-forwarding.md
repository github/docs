---
title: Encaminhamento de logs
intro: 'O {% data variables.product.product_name %} usa o `syslog-ng` para encaminhar {% ifversion ghes %}system{% elsif ghae %}Git{% endif %} e logs do aplicativo para o servidor especificado.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
  - /admin/user-management/log-forwarding
  - /admin/user-management/monitoring-activity-in-your-enterprise/log-forwarding
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: 935c8f0221c4541d2801a5e705779efff3d34370
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145094603'
---
## Sobre o encaminhamento de registro

Qualquer sistema de coleta de logs que dê suporte a fluxos de log de estilo Syslog é compatível (por exemplo, o [Logstash](http://logstash.net/) e o [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

Ao habilitar o encaminhamento de registro, você deverá faer o upload de um certificado CA para criptografar as comunicações entre os pontos de extremidade do syslog. O seu dispositivo e o servidor syslog remoto irão executar SSL bidirecional, e cada um fornecerá um certificado para o outro e validando o certificado que será recebido.

## Habilitar o encaminhamento de logs

{% ifversion ghes %}
1. Na página de configurações do {% data variables.enterprise.management_console %}, na barra lateral esquerda, clique em **Monitoramento**.
1. Selecione **Habilitar encaminhamento de log**.
1. No campo **Endereço do servidor**, digite o endereço do servidor para o qual deseja encaminhar os logs. É possível especificar vários endereços em uma lista separada por vírgulas.
1. No menu suspenso Protocol (Protocolo), selecione o protocolo a ser usado para comunicação com o servidor de logs. O protocolo será aplicado a todos os destinos de log especificados.
1. Opcionalmente, selecione **Habilitar o TLS**. Recomendamos habilitar o TLS de acordo com suas políticas de segurança locais, especialmente se houver redes não confiáveis entre o dispositivo e quaisquer servidores de registro remotos. 
1. Para criptografar a comunicação entre pontos de extremidade do Syslog, clique em **Escolher Arquivo** e escolha um certificado de AC para o servidor remoto do Syslog. Você deverá fazer o upload de um pacote CA que contém uma concatenação dos certificados das CAs envolvidos na assinatura do certificado do servidor de registro remoto. Toda a cadeia de certificados será validada e deverá terminar em um certificado raiz. Para obter mais informações, confira [as opções do TLS na documentação do syslog-ng](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599).
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**, clique em **Encaminhamento de log**.
  ![Guia Encaminhamento de log](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. Em "Encaminhamento de log", selecione **Habilitar o encaminhamento de log**.
  ![Caixa de seleção usada para habilitar o encaminhamento de log](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. Em "Endereço do servidor, digite o endereço do servidor para o qual você deseja encaminhar o registro.
  ![Campo de endereço do servidor](/assets/images/enterprise/business-accounts/server-address-field.png)
1. Use o menu suspenso "Protocolo" e selecione um protocolo.
  ![Menu suspenso Protocolo](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. Opcionalmente, para habilitar a comunicação criptografada do TLS entre os pontos de extremidade do Syslog, selecione **Habilitar o TLS**.
  ![Caixa de seleção usada para habilitar o TLS](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. Em "Certificado público", cole o seu certificado x509.
  ![Caixa de texto do certificado público](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. Clique em **Salvar**.
  ![Botão Salvar para o encaminhamento de log](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png) {% endif %}

{% ifversion ghes %}
## Solução de problemas

Se você tiver problemas com o encaminhamento de log, entre em contato com o {% data variables.contact.contact_ent_support %} e anexe o arquivo de saída de `http(s)://[hostname]/setup/diagnostics` ao email.
{% endif %}
