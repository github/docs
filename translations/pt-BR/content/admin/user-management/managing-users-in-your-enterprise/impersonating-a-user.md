---
title: Representando um usuário
intro: 'Você pode representar usuários e executar ações em seu nome para solução de problemas, desbloqueio e outras razões legítimas.'
permissions: Enterprise owners can impersonate users within their enterprise.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Impersonate a user
ms.openlocfilehash: df0513c3ca2931378e656f228939540dd5ea5816
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107920'
---
## Sobre a personificação do usuário

Se você precisar assumir temporariamente uma conta de usuário, por exemplo, ao resolver problemas com o usuário, ou quando o usuário estiver indisponível e uma ação urgente for necessária, você pode iniciar uma sessão de representação para agir em seu nome.

Para cada sessão de representação, você deve fornecer um motivo para a representação. Uma sessão é limitada a uma hora, e você terá o mesmo acesso que o usuário que está sendo representado.

As ações que você realiza durante uma sessão de representação são registradas como eventos no log de auditoria corporativo, bem como no log de segurança do usuário representado. A pessoa que está sendo representada recebe uma notificação por e-mail quando começa a sessão de representação. Para obter mais informações, confira "[Auditar eventos de log para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)" e "[Revisar o log de segurança](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)".

## Representando um usuário

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
4. No canto superior esquerdo da página, clique em **Informações do usuário**.

   ![Informação de usuário](/assets/images/enterprise/stafftools/user-info.png)
5. Em "Zona de Perigo", clique em **Entrar no GitHub como @username**

   ![Representar usuário](/assets/images/enterprise/stafftools/impersonate.png)
6. Selecione um motivo na lista suspensa Se você selecionar **Outros**, precisará fornecer contexto adicional na seção **Observações**. Clique em **Iniciar representação** para iniciar a sessão.

   ![Motivo da representação](/assets/images/enterprise/stafftools/impersonation-reason.png)
7. Quando estiver pronto para terminar a sessão de representação, clique na faixa **Voltar à sua vida mundana como nome de usuário** na parte superior da página.

   ![Encerrar representação](/assets/images/enterprise/stafftools/end-impersonation.png)
