---
ms.openlocfilehash: 99be41c3a31f1602c08160b3c552e2686820974d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145093684"
---
| Porta | Serviço | Descrição                                                |
|------|---------|------------------------------------------------------------|
| 22   | SSH     | Git sobre acesso via SSH. Clone, buscar e fazer push de operações para repositórios público/privado suportados. |
| 25   | SMTP    | Suporte a SMTP com criptografia (STARTTLS). |
| 80   | HTTP    | Acesso ao aplicativo web. *Todas as solicitações são redirecionadas para a porta HTTPS quando o SSL está habilitado.* |
| 122  | SSH     | Exemplo de acesso a shell. *A porta SSH padrão (22) é dedicada ao tráfego de rede entre o Git e o SSH do aplicativo.* |
| 161/UDP | SNMP | Obrigatória para operações de protocolo de monitoramento de rede. |
| 443  | HTTPS   | Aplicativo web e Git sobre acesso HTTPS. |
| 1194/UDP | VPN | Túnel de rede de réplica segura na configuração de alta disponibilidade. |
| 8080 | HTTP    | Baseado em web de texto simples {% data variables.enterprise.management_console %}. *Não obrigatória, a menos que o SSL seja desabilitado manualmente.* |
| 8443 | HTTPS   | Base segura na web {% data variables.enterprise.management_console %}. *Obrigatória para instalação e configuração básicas.* |
| 9418 | Git     | Porta de protocolo Simples Git. Clonar e buscar somente as operações para repositórios públicos. *Comunicação de rede não criptografada.* {% data reusables.enterprise_installation.when-9418-necessary %}  |
