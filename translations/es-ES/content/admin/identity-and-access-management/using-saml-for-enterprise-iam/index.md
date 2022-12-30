---
title: Uso de SAML para IAM empresarial
shortTitle: SAML for enterprise IAM
intro: 'Puedes administrar de forma centralizada {% ifversion ghes or ghae %}las cuentas y {% endif %}el acceso a {% ifversion ghes %}{% data variables.location.product_location %}{% elsif ghae %}tu empresa{% elsif ghec %} y los recursos de tu empresa{% endif %} con el inicio de sesión único de SAML (SSO){% ifversion ghec or ghae %} y System for Cross-domain Identity Management (SCIM){% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider
  - /enterprise/admin/articles/configuring-saml-authentication
  - /enterprise/admin/articles/about-saml-authentication
  - /enterprise/admin/user-management/using-saml
  - /enterprise/admin/authentication/using-saml
  - /admin/authentication/using-saml
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-saml
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-saml
children:
  - /about-saml-for-enterprise-iam
  - /saml-configuration-reference
  - /configuring-saml-single-sign-on-for-your-enterprise
  - /configuring-user-provisioning-with-scim-for-your-enterprise
  - /managing-team-synchronization-for-organizations-in-your-enterprise
  - /configuring-saml-single-sign-on-for-your-enterprise-using-okta
  - /configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /configuring-authentication-and-provisioning-for-your-enterprise-using-okta
  - /mapping-okta-groups-to-teams
  - /enabling-encrypted-assertions
  - /updating-a-users-saml-nameid
  - /switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /troubleshooting-saml-authentication
ms.openlocfilehash: 2a843afa6f5447b9048ef2efbd03dee9e9b856d8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107017'
---
{% data reusables.enterprise-accounts.emu-saml-note %}
