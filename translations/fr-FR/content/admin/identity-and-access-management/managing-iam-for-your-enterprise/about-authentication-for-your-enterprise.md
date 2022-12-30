---
title: À propos de l’authentification pour votre entreprise
shortTitle: About authentication
intro: 'Vous {% ifversion ghae %}devez configurer l’authentification unique (SSO) SAML pour que les personnes puissent{% else %}pouvez choisir comment les personnes peuvent{% endif %} s’authentifier pour accéder aux ressources de {% ifversion ghec %}votre entreprise sur {% data variables.product.product_name %}{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %}votre entreprise sur {% data variables.product.product_name %}{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 16b5bdd98e37db2eef6fe7e4e02da1a4ce8fd406
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164371'
---
## À propos de l’authentification pour votre entreprise

{% ifversion ghec %}

Les propriétaires d’entreprise sur {% data variables.product.product_name %} peuvent contrôler les exigences en matière d’authentification et d’accès aux ressources de l’entreprise. 

{% data reusables.enterprise.ghec-authentication-options %}

Après en avoir appris plus sur ces options, pour déterminer la méthode la mieux adaptée à votre entreprise, consultez « [Identification de la meilleure méthode d’authentification pour votre entreprise](#identifying-the-best-authentication-method-for-your-enterprise) ».

## Méthodes d’authentification pour {% data variables.product.product_name %}

Les options suivantes sont disponibles pour la gestion des comptes et l’authentification sur {% data variables.product.product_name %}.

- [Authentification via {% data variables.location.product_location %}](#authentication-through-githubcom)
- [Authentification via {% data variables.location.product_location %} avec une restriction d’accès SAML supplémentaire](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [Authentication avec {% data variables.product.prodname_emus %} et la fédération](#authentication-with-enterprise-managed-users-and-federation)

### Authentification via {% data variables.location.product_location %}

Par défaut, chaque membre doit créer un compte personnel sur {% data variables.location.product_location %}. Vous accordez l’accès à votre entreprise, et le membre peut accéder aux ressources de votre entreprise après la connexion au compte sur {% data variables.location.product_location %}. Le membre gère le compte et peut contribuer à d’autres entreprises, organisations et dépôts sur {% data variables.location.product_location %}.

### Authentification via {% data variables.location.product_location %} avec une restriction d’accès SAML supplémentaire

Si vous configurez une restriction d’accès SAML supplémentaire, chaque membre doit créer et gérer un compte personnel sur {% data variables.location.product_location %}. Vous accordez l’accès à votre entreprise, et le membre peut accéder aux ressources de votre entreprise après la connexion au compte sur {% data variables.location.product_location %} et s’authentifier avec succès auprès de votre fournisseur d’identité SAML. Le membre peut contribuer à d’autres entreprises, organisations et dépôts sur {% data variables.location.product_location %} à l’aide de son compte personnel. Pour plus d’informations sur la nécessité d’une authentification SAML pour tous les accès aux ressources de votre entreprise, consultez « [À propos de SAML pour la gestion des identités et des accès d’entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam) ».

Si vous utilisez une organisation autonome avec {% data variables.product.product_name %}, ou si vous ne souhaitez pas utiliser l’authentification SAML pour chaque organisation de votre entreprise, vous pouvez configurer SAML pour une organisation individuelle. Pour plus d’informations, consultez « [À propos de la gestion des identités et des accès avec l’authentification unique SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on) ».

### Authentication avec {% data variables.product.prodname_emus %} et la fédération

Si vous avez besoin de contrôler davantage les comptes de vos membres d’entreprise sur {% data variables.location.product_location %}, vous pouvez utiliser {% data variables.product.prodname_emus %}. Avec {% data variables.product.prodname_emus %}, vous provisionnez et gérez les comptes pour vos membres d’entreprise sur {% data variables.location.product_location %} à l’aide de votre fournisseur d’identité. Chaque membre se connecte à un compte que vous créez, et votre entreprise gère le compte. Les contributions au reste de {% data variables.product.prodname_dotcom_the_website %} sont limitées. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users) ».

## Identification de la meilleure méthode d’authentification pour votre entreprise

L’authentification unique SAML et {% data variables.product.prodname_emus %} renforcent tous deux la sécurité des ressources de votre entreprise. {% data variables.product.prodname_emus %} vous permet en outre de contrôler les comptes d’utilisateur des membres de votre entreprise et de restreindre ce que ces comptes peuvent faire. Toutefois, ces restrictions peuvent être inacceptables pour votre entreprise si elles obstruent les workflows de vos développeurs.

Pour déterminer si votre entreprise bénéficierait davantage de l’authentification unique SAML ou de {% data variables.product.prodname_emus %}, posez-vous les questions suivantes.

- [Voulez-vous contrôler les comptes de vos utilisateurs ?](#do-you-want-to-control-the-user-accounts-for-your-users)
- [Quel fournisseur d’identité votre entreprise utilise-t-elle ?](#which-identity-provider-does-your-enterprise-use)
- [Vos développeurs travaillent-ils dans des référentiels publics, des gists ou des sites {% data variables.product.prodname_pages %} ?](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [Vos développeurs s’appuient-ils sur la collaboration en dehors de votre entreprise ?](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [Votre entreprise s’appuie-t-elle sur des collaborateurs externes ?](#does-your-enterprise-rely-on-outside-collaborators)
- [Votre entreprise peut-elle tolérer les coûts de migration ?](#can-your-enterprise-tolerate-migration-costs)

### Voulez-vous contrôler les comptes de vos utilisateurs ?

{% data variables.product.prodname_emus %} peut convenir à votre entreprise si vous ne voulez pas que les membres de l’entreprise utilisent leurs comptes personnels sur {% data variables.product.prodname_dotcom_the_website %} pour accéder aux ressources de votre entreprise. 

Avec l’authentification unique SAML, les développeurs créent et gèrent leurs propres comptes personnels, et chaque compte est lié à une identité SAML dans votre fournisseur d’identité. {% data variables.product.prodname_emus %} fonctionne davantage comme d’autres solutions d’authentification unique familières, puisque vous approvisionnerez les comptes de vos utilisateurs. Vous pouvez également vous assurer que les comptes d’utilisateur sont conformes à l’identité de votre entreprise, en contrôlant les noms d’utilisateur et les adresses e-mail associées aux comptes. 

Si vous demandez actuellement à vos utilisateurs de créer un nouveau compte sur {% data variables.product.prodname_dotcom_the_website %} pour l’utiliser uniquement avec votre entreprise, {% data variables.product.prodname_emus %} pourrait vous convenir. Toutefois, l’authentification unique SAML peut être une meilleure option si l’utilisation de votre fournisseur d’identité comme source de vérité pour votre utilisateur et la gestion des accès ajouterait trop de complexité. Par exemple, votre entreprise n’a peut-être pas de processus établi pour l’intégration de nouveaux utilisateurs dans votre fournisseur d’identité.

### Quel fournisseur d’identité votre entreprise utilise-t-elle ?

{% data variables.product.prodname_emus %} est pris en charge par un nombre limité de fournisseurs d’identité, tandis que l’authentification unique SAML offre une prise en charge complète pour un plus grand nombre de fournisseurs d’identité, ainsi qu’une prise en charge limitée pour tous les fournisseurs d’identité qui mettent en œuvre la norme SAML 2.0. Pour obtenir la liste des fournisseurs d’identité pris en charge pour chaque option, voir « [À propos d’{% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support) » et « [À propos de SAML pour la gestion des identités et des accès d’entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps). »

Vous pouvez utiliser {% data variables.product.prodname_emus %} avec un fournisseur d’identité non pris en charge uniquement si vous fédérez le fournisseur d’identité non pris en charge sur un fournisseur d’identité pris en charge à utiliser comme point d’intégration. Si vous souhaitez éviter cette complexité supplémentaire, l’authentification unique SAML peut être une meilleure solution pour vous.

### Vos développeurs travaillent-ils dans des référentiels publics, des gists ou des sites {% data variables.product.prodname_pages %} ?

Pour éviter que les membres de l’entreprise divulguent accidentellement au public du contenu appartenant à l’entreprise sur {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_emus %} impose de fortes restrictions sur ce que les utilisateurs peuvent faire. Par exemple, les {% data variables.enterprise.prodname_managed_users %} ne peuvent pas créer de dépôts publics, de gists d’aucune visibilité, ou de sites {% data variables.product.prodname_pages %} visibles en dehors de l’entreprise. Pour une liste complète des restrictions, consultez « [Capacités et restrictions des {% data variables.enterprise.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users) ».

Ces restrictions sont inacceptables pour certaines entreprises. Pour déterminer si {% data variables.product.prodname_emus %} vous conviendra, examinez les restrictions avec vos développeurs et confirmez si l’une d’entre elles entravera vos workflows existants. Dans ce cas, l’authentification unique SAML peut être un meilleur choix pour votre entreprise.

### Vos développeurs s’appuient-ils sur la collaboration en dehors de votre entreprise ?

Les {% data variables.enterprise.prodname_managed_users_caps %} peuvent seulement contribuer aux dépôts de votre entreprise. Si vos développeurs doivent contribuer aux dépôts à la fois à l’intérieur ou à l’extérieur de votre entreprise, ce qui inclut les dépôts privés, {% data variables.product.prodname_emus %} peut ne pas être approprié pour votre entreprise. L’authentification unique SAML peut être une meilleure solution.

Certaines entreprises gèrent les dépôts au sein d’une entreprise existante à l’aide de l’authentification unique SAML sur {% data variables.location.product_location %}, et créent également une {% data variables.enterprise.prodname_emu_enterprise %}. Les développeurs qui contribuent à des dépôts appartenant aux deux entreprises à partir d’une seule station de travail doivent basculer d’un compte à l’autre sur {% data variables.location.product_location %} dans un seul et même navigateur, ou utiliser un navigateur différent pour chaque compte. Le développeur peut également avoir besoin de personnaliser la configuration Git de la station de travail pour prendre en charge les deux comptes. La complexité de ce workflow peut augmenter le risque de fuite de code interne vers le public.

Si vous décidez de créer une {% data variables.enterprise.prodname_emu_enterprise %} mais que vous demandez aux développeurs de contribuer aux ressources en dehors de l’entreprise à partir d’une seule et même station de travail, vous pouvez fournir une prise en charge du changement de compte dans la configuration Git locale d’un développeur. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#supporting-developers-with-multiple-user-accounts-on-githubcom) ».

### Votre entreprise s’appuie-t-elle sur des collaborateurs externes ?

Avec l’authentification unique SAML, vous pouvez accorder l’accès à des référentiels spécifiques aux personnes qui ne sont pas membres de l’annuaire de votre fournisseur d’identité, à l’aide du rôle de collaborateur externe. Cela peut être particulièrement utile pour les collaborateurs externes à votre entreprise, comme les entrepreneurs. Pour plus d’informations, consultez « [Ajout de collaborateurs externes aux dépôts dans votre organisation](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization) ».

Avec {% data variables.product.prodname_emus %}, le rôle de collaborateur extérieur n’existe pas. Les ressources de votre entreprise ne sont accessibles qu’aux {% data variables.enterprise.prodname_managed_users %}, qui sont toujours provisionnés par votre fournisseur d’identité. Pour permettre aux collaborateurs externes d’accéder à votre entreprise, vous devez utiliser des comptes invités dans votre fournisseur d’identité. Si {% data variables.product.prodname_emus %} vous intéresse, vérifiez auprès de vos développeurs si cela entrave leurs workflows existants. Dans ce cas, l’authentification unique SAML peut être une meilleure solution.

### Votre entreprise peut-elle tolérer les coûts de migration ?

Si votre entreprise n’a jamais utilisé {% data variables.product.prodname_dotcom_the_website %}, l’authentification unique SAML et {% data variables.product.prodname_emus %} sont tout aussi faciles à adopter l’un que l’autre.

Si vous utilisez déjà {% data variables.product.prodname_dotcom_the_website %} avec des développeurs gérant leurs propres comptes d’utilisateurs, l’adoption de {% data variables.product.prodname_emus %} nécessite une migration vers un nouveau compte d’entreprise. Pour plus d’informations, consultez « [À propos de {% data variables.enterprise.prodname_managed_users %} pour les entreprises](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users) ».

Bien que {% data variables.product.prodname_emus %} soit gratuit, le processus de migration peut nécessiter du temps ou des frais pour votre équipe. Vérifiez que ce processus de migration est acceptable pour votre entreprise et vos développeurs. Si ce n’est pas le cas, l’authentification unique SAML peut être le meilleur choix pour vous.

{% elsif ghes %}

Les administrateurs de site peuvent décider de la façon dont les utilisateurs s’authentifient pour accéder à une instance {% data variables.product.product_name %}. Vous pouvez utiliser {% data variables.product.product_name %}, ou, si vous souhaitez centraliser la gestion des identités et des accès pour les applications web utilisées par votre équipe, configurer une méthode d’authentification externe.

## Méthodes d’authentification pour {% data variables.product.product_name %}

Les méthodes d’authentification suivantes sont disponibles pour {% data variables.product.product_name %}.

- [Authentification intégrée](#built-in-authentication)
- [Authentification externe](#external-authentication)

### Authentification intégrée

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} Pour accéder à votre instance, les utilisateurs s’authentifient avec les informations d’identification du compte. Pour plus d’informations, consultez « [Configurer l’authentification intégrée](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication) ».

### Authentification externe

Si vous utilisez un annuaire externe ou un fournisseur d’identité pour centraliser l’accès à plusieurs applications web, vous pouvez configurer l’authentification externe pour {% data variables.location.product_location %}. Pour plus d'informations, consultez les articles suivants.

- « [Utilisation du site d’administration centrale pour la gestion des identités et des accès d’entreprise](/admin/identity-and-access-management/using-cas-for-enterprise-iam) »
- « [Utilisation du protocole LDAP pour la gestion des identités et des accès d’entreprise](/admin/identity-and-access-management/using-ldap-for-enterprise-iam) »
- « [Utilisation de SAML pour la gestion des identités et des accès d’entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam) »

Si vous choisissez d’utiliser l’authentification externe, vous pouvez également configurer l’authentification de secours pour les personnes qui n’ont pas de compte sur votre fournisseur d’authentification externe. Par exemple, vous pouvez accorder l’accès à un entrepreneur ou à un utilisateur de machine. Pour plus d’informations, consultez « [Autorisation de l’authentification intégrée pour les utilisateurs en dehors de votre fournisseur](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider) ».

{% ifversion scim-for-ghes %}

Si vous utilisez l’authentification unique SAML pour l’authentification, vous pouvez également provisionner des utilisateurs et mapper des groupes d’idP aux équipes à l’aide de SCIM. Pour plus d’informations, consultez « [Configuration du provisionnement d’utilisateurs avec SCIM pour votre entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise) ».

{% endif %}

{% elsif ghae %}

{% data variables.product.product_name %} utilise l’authentification unique SAML pour l’authentification. Les propriétaires d’entreprise doivent configurer l’authentification unique SAML avec un fournisseur d’identité (IdP) SAML lors de l’initialisation. Pour plus d’informations, consultez « [À propos de SAML pour la gestion des identités et des accès d’entreprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam) ».

{% endif %}

## Pour aller plus loin

- « [Types de comptes {% data variables.product.company_short %}](/get-started/learning-about-github/types-of-github-accounts) »
- « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) » {%- ifversion ghec %}
- « [Puis-je créer des comptes pour des personnes de mon organisation ?](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization) »
{% endif %}
