---
title: Sobre a configuração corporativa
intro: 'Você pode usar o painel de administração do site{% ifversion ghes %}, {% data variables.enterprise.management_console %} e o shell administrativo (SSH) {% elsif ghae %} e configurações corporativas ou entrar em contato com o suporte{% endif %} para gerenciar seu empreendimento.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - SSH
redirect_from:
  - /admin/configuration/about-enterprise-configuration
shortTitle: About configuration
ms.openlocfilehash: 86012c1fc7b56367d171fd271c5f3d12125cf461
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145094021'
---
{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} Para obter mais informações, confira "[Painel de administração do site](/admin/configuration/site-admin-dashboard)".

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} Para obter mais informações, confira "[Como acessar o console de gerenciamento](/admin/configuration/accessing-the-management-console)".

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
{% endif %}

{% ifversion ghae %} Para começar a usar o {% data variables.product.product_name %}, primeiro, você precisa implantar o {% data variables.product.product_name %}. Para obter mais informações, confira "[Como implantar o {% data variables.product.product_name %}](/admin/configuration/configuring-your-enterprise/deploying-github-ae)".

Na primeira vez que você acessar a sua empresa, você realizará uma configuração inicial para preparar {% data variables.product.product_name %} para ser usado. A configuração inicial inclui conectar a sua empresa a um provedor de identidade (IdP), efetuando a autenticação com SAML SSO, configurando políticas para repositórios e organizações na sua empresa e configurando SMTP para e-mails de saída. Para obter mais informações, confira "[Como inicializar o {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

Posteriormente, você poderá usar o painel de administração do site e as configurações corporativas para configurar ainda mais sua empresa, gerenciar usuários, organizações e repositórios e definir políticas que reduzem o risco e aumentam a qualidade. 

Todas as empresas estão configuradas com isolamento de subdomínio e suporte para TLS 1.2 e posterior apenas para tráfego criptografado.
{% endif %}

## Leitura adicional

- "[Como gerenciar usuários, organizações e repositórios](/admin/user-management)"
- "[Como definir políticas para sua empresa](/admin/policies)"
