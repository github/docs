---
title: Prepararse para aplicar el inicio de sesión único SAML en tu organización
intro: 'Antes de aplicar el inicio de sesión único de SAML en tu organización, deberías verificar la membresía de tu organización y configurar las configuraciones de conexión para tu proveedor de identidad.'
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare to enforce SAML SSO
ms.openlocfilehash: 6457b44f5a5debd005b8878b2f31f81c4341ab15
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126192'
---
{% data reusables.saml.ghec-only %}

{% data reusables.saml.when-you-enforce %} Antes de requerir el SSO de SAML en tu organización, debes revisar la membrecía de la misma, habilitar el SSO de SAML y revisar el acceso de SAML de los miembros de esta. Para obtener más información, vea lo siguiente.

| Tarea | Más información |
| :- | :- |
| Agregar o eliminar miembros de tu organización | <ul><li>"[Invitar a los usuarios a unirse a su organización](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"</li><li>"[Eliminar a un miembro de la organización](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)"</li></ul> |
| Conecta tu IdP a tu organización habilitando el SSO de SAML | <ul><li>"[Conexión del proveedor de identidades con la organización](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)"</li><li>"[Habilitar y probar el inicio de sesión único de SAML para su organización](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)"</li></ul> |
| Asegúrese de que los miembros de su organización se hayan registrado y hayan vinculado sus cuentas con el proveedor de identidades | <ul><li>"[Visualización y administración del acceso SAML de un miembro a la organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"</li></ul> |

Después de que termines con estas tareas, puedes requerir el SSO de SAML en tu organización. Para obtener más información, consulte "[Aplicación del inicio de sesión único de SAML para la organización](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)".

{% data reusables.saml.outside-collaborators-exemption %}
