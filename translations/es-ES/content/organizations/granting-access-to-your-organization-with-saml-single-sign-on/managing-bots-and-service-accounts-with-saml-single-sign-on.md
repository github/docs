---
title: Administrar bot y cuentas de servicio con inicio de sesión único de SAML
intro: Las organizaciones que han habilitado el inicio de sesión único de SAML pueden conservar el acceso para los bot y las cuentas de servicio.
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145135175'
---
Para conservar el acceso a cuentas de bots y servicios, los administradores de la organización pueden [habilitar](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), pero **no** [forzar](/articles/enforcing-saml-single-sign-on-for-your-organization) el inicio de sesión único de SAML en su organización. Si debes implementar el inicio de sesión único de SAML para tu organización, puedes crear una identidad externa para el bot o la cuenta de servicio con tu proveedor de identidad (IdP).

{% warning %}

**Nota:** Si implementa el inicio de sesión único de SAML en su organización y **no** tiene identidades externas configuradas para cuentas de bot y servicios con su IdP, estas se eliminarán de la organización.

{% endwarning %}

## Información adicional

- "[Acerca de la administración de acceso e identidad con el inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
