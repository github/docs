---
title: Convidar pessoas para usar sua instância
intro: 'Ao usar a autenticação interna do {% data variables.product.product_name %}, você pode convidar pessoas por endereço de email para criar uma conta de usuário na sua instância.'
versions:
  ghes: '*'
permissions: 'Enterprise owners can invite people to create a user account on a {% data variables.product.product_name %} instance.'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Invite people
ms.openlocfilehash: d7ccb5e06f297a11ba97fa41d8250821909e5e3d
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717794'
---
## Sobre convites para usuários novos

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %}

Você pode desabilitar inscrições não autenticadas e exigir um convite para criar uma conta de usuário em sua instância. Para saber mais, confira "[Desabilitar inscrição não autenticada](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)".

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %} 

## Convidar pessoas para criar uma conta de usuário

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

Se você habilitou o email para notificações em {% data variables.product.product_location %}, sua instância enviará o convite para o endereço de email fornecido. Para obter mais informações, confira "[Como configurar o email para notificações](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)".
