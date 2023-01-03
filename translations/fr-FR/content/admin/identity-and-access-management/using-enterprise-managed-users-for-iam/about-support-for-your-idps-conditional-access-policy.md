---
title: À propos de la prise en charge de la stratégie d’accès conditionnel de votre fournisseur d’identité
shortTitle: Conditional access policy
intro: 'Lorsque votre entreprise utilise l’authentification unique OIDC, {% data variables.product.prodname_dotcom %} peut valider l’accès à votre entreprise et à ses ressources en utilisant la stratégie d’accès conditionnel de votre fournisseur d’identité.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: aed7008bd008ccfd6303ccbb36f4d6f3bd7002ca
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179996'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## À propos de la prise en charge des stratégies d’accès conditionnel

{% data reusables.enterprise-accounts.emu-cap-validates %}

{% data variables.product.product_name %} prend en charge la stratégie d’accès conditionnel pour toutes les {% data variables.enterprise.prodname_emu_enterprise %} où l’authentification unique OIDC est activée. {% data variables.product.product_name %} applique les conditions IP de votre fournisseur d’identité, mais ne peut pas appliquer les conditions de conformité de l’appareil. Les propriétaires d’entreprise peuvent choisir d’utiliser cette configuration de liste d’adresses IP autorisées au lieu de la liste d’adresses IP autorisées de {% data variables.product.product_name %}, et peuvent le faire une fois l’authentification unique OIDC configurée. Pour plus d’informations sur les listes d’adresses IP autorisées, consultez « [Restriction du trafic réseau avec une liste d’adresses IP autorisées](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list) » et « [Gestion des adresses IP autorisées pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) ».


Pour plus d’informations sur l’utilisation d’OIDC avec {% data variables.product.prodname_emus %}, consultez [Configurer OIDC pour les utilisateurs d’entreprise managés](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users) et [Migration de SAML à OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc).

## Considérations relatives aux intégrations et aux automatisations

{% data variables.product.prodname_dotcom %} envoie l’adresse IP d’origine à votre fournisseur d’identité pour validation par rapport à votre stratégie d’autorisation de connexion. Pour vous assurer que les actions et les applications ne sont pas bloquées par la stratégie d’autorisation de connexion de votre fournisseur d’identité, vous devrez apporter des modifications à votre configuration.

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

Les actions qui utilisent un {% data variables.product.pat_generic %} seront probablement bloquées par la stratégie d’accès conditionnel de votre fournisseur d’identité. Nous recommandons que les {% data variables.product.pat_generic %} soient créés par un compte de service qui est ensuite exempté des contrôles d’IP dans la stratégie d’accès conditionnel de votre fournisseur d’identité. 

Si vous ne pouvez pas utiliser un compte de service, une autre option pour débloquer les actions qui utilisent des {% data variables.product.pat_generic %} consiste à autoriser les plages d’IP utilisées par {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez [À propos des adresses IP de GitHub](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).

### {% data variables.product.prodname_github_apps %} et {% data variables.product.prodname_oauth_apps %} 

Lorsque {% data variables.product.prodname_github_apps %} et {% data variables.product.prodname_oauth_apps %} font des demandes au nom d’un membre, {% data variables.product.prodname_dotcom %} enverra l’adresse IP du serveur de l’application à votre fournisseur d’identité pour validation. Si l’adresse IP du serveur de l’application n’est pas validée par la stratégie d’autorisation de connexion de votre fournisseur d’identité, la demande échouera.

Vous pouvez contacter les propriétaires des applications que vous souhaitez utiliser, demander leurs plages d’adresses IP et configurer la stratégie d’autorisation de connexion de votre fournisseur d’identité pour autoriser l’accès à partir de ces plages d’adresses IP. Si vous ne parvenez pas à contacter les propriétaires, vous pouvez consulter les journaux d’ouverture de session de votre fournisseur d’identité pour voir les adresses IP qui ont fait l’objet des demandes, puis les inscrire sur une liste d’autorisation. 

Si vous ne souhaitez pas autoriser toutes les plages d’adresses IP pour toutes les applications de votre entreprise, vous pouvez également exempter les {% data variables.product.prodname_github_apps %} installées et les {% data variables.product.prodname_oauth_apps %} autorisées de la liste d’autorisations du fournisseur d’identité. Si vous le faites, ces applications continueront de fonctionner quelle que soit l’adresse IP d’origine. Pour plus d’informations, consultez « [Application de stratégies pour les paramètres de sécurité dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps) ».
