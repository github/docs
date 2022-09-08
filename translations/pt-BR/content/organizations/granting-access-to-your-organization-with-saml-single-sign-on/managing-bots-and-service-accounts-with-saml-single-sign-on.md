---
title: Gerenciar bots e contas de serviço com logon único SAML
intro: Organizações que habilitaram logon único SAML podem manter o acesso para bots e contas de serviço.
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage bots & service accounts
ms.openlocfilehash: 57f1150929db674a658d52a5cb7e455444cc48de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126515'
---
Para manter o acesso para bots e contas de serviço, os administradores da organização podem [habilitar](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), mas **não** [impor](/articles/enforcing-saml-single-sign-on-for-your-organization) o logon único do SAML para a respectiva organização. Se você precisa executar logon único SAML na organização, é possível criar uma identidade externa para o bot ou conta de serviço com seu provedor de identidade (IdP).

{% warning %}

**Observação:** se você executar o logon único do SAML na sua organização e **não** tiver configurado identidades externas para bots e contas de serviço com o IdP, eles serão removidos da organização.

{% endwarning %}

## Leitura adicional

- "[Sobre o gerenciamento de identidades e acesso com o logon único do SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
