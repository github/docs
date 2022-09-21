---
title: Acceso a la cuenta de empresa si el proveedor de identidades no está disponible
shortTitle: Access your enterprise account
intro: 'Puedes iniciar sesión en {% data variables.product.product_name %} incluso si tu proveedor de identidad no está disponible si omites el inicio de sesión único (SSO) con un código de recuperación.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
ms.openlocfilehash: d13a4cd336e67ab62087530b00cad8fd6939d64b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578808'
---
Puedes usar un código de recuperación para acceder a tu cuenta de empresa si un error de configuración de autenticación o una incidencia con el proveedor de identidades (IdP) te impide usar el SSO. 

Para acceder a la cuenta de empresa de esta manera, debe haber descargado y almacenado previamente los códigos de recuperación para la empresa. Para obtener más información, consulta "[Descarga de los códigos de recuperación de inicio de sesión único de la cuenta de empresa](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)".

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**Nota:** Si en la empresa se usa {% data variables.product.prodname_emus %}, debe iniciar sesión como usuario de configuración para usar un código de recuperación.

{% endnote %}

{% data reusables.saml.recovery-code-access %}
