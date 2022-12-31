---
title: Bonnes pratiques pour sécuriser les comptes
shortTitle: Securing accounts
allowTitleToDifferFromFilename: true
intro: Aide sur la façon de protéger les comptes ayant accès à votre chaîne d’approvisionnement logicielle.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - SSH
  - Security
  - Accounts
ms.openlocfilehash: 4225b80d139462fd64e440947c1eba9adb817294
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883408'
---
## À propos de ce guide

Ce guide décrit les modifications les plus importantes que vous pouvez apporter pour augmenter la sécurité des comptes. Chaque section décrit une modification que vous pouvez apporter à vos processus pour améliorer la sécurité. Les modifications les plus importantes sont listées en premier.

## Quel est le risque ?

La sécurité des comptes est fondamentale pour la sécurité de votre chaîne d’approvisionnement. Si un attaquant peut prendre le contrôle de votre compte sur {% data variables.product.product_name %}, il peut apporter des modifications malveillantes à votre code ou processus de génération. Ainsi, votre premier objectif doit être de rendre difficile pour quelqu’un de prendre le contrôle de votre compte et des comptes des autres {% ifversion ghes %}utilisateurs{% else %}membres{% endif %} de {% ifversion fpt %}votre organisation{% elsif ghec or ghae %}votre organisation ou entreprise{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.

{% ifversion ghec or ghes %}
## Centraliser l’authentification
{% endif %}

{% ifversion ghec %} Si vous êtes propriétaire d’une entreprise ou d’une organisation, vous pouvez configurer l’authentification centralisée avec SAML. Même si vous pouvez ajouter ou supprimer des membres manuellement, il est plus simple et plus sécurisé de configurer l’authentification unique (SSO) et SCIM entre {% data variables.product.product_name %} et votre fournisseur d’identité SAML (IdP). Cela simplifie également le processus d’authentification pour tous les membres de votre entreprise.

Vous pouvez configurer l’authentification SAML pour un compte d’entreprise ou d’organisation. Avec SAML, vous pouvez accorder l’accès aux comptes personnels des membres de votre entreprise ou organisation sur {% data variables.product.product_location %} via votre fournisseur d’identité, ou vous pouvez créer et contrôler les comptes appartenant à votre entreprise en utilisant {% data variables.product.prodname_emus %}. Pour plus d’informations, consultez « [À propos de l’authentification pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise) ».

Une fois que vous avez configuré l’authentification SAML, quand des membres demandent l’accès à vos ressources, ils sont dirigés vers votre flux d’authentification unique afin qu’il soit vérifié qu’ils sont toujours reconnus par votre fournisseur d’identité. S’ils ne sont pas reconnus, leur demande est refusée.

Certains fournisseurs d’identité prennent en charge un protocole appelé SCIM, qui peut provisionner ou déprovisionner automatiquement l’accès sur {% data variables.product.product_name %} quand vous apportez des modifications sur votre fournisseur d’identité. Avec SCIM, vous pouvez simplifier l’administration à mesure que votre équipe croît et vous pouvez révoquer rapidement l’accès aux comptes. SCIM est disponible pour les organisations individuelles sur {% data variables.product.product_name %} ou pour les entreprises qui utilisent {% data variables.product.prodname_emus %}. Pour plus d’informations, consultez « [À propos de SCIM pour les organisations](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations) ».
{% endif %}

{% ifversion ghes %} vous êtes l’administrateur de site pour {% data variables.product.product_location %}, vous pouvez simplifier l’expérience de connexion des utilisateurs en choisissant une méthode d’authentification qui se connecte avec votre fournisseur d’identité (IdP) existant, comme CAS, SAML ou LDAP. Cela signifie qu’ils n’ont plus besoin de mémoriser un mot de passe supplémentaire pour {% data variables.product.prodname_dotcom %}.

Certaines méthodes d’authentification prennent également en charge la communication d’informations supplémentaires à {% data variables.product.product_name %}, par exemple, les groupes dont l’utilisateur est membre ou la synchronisation des clés de chiffrement pour l’utilisateur. Il s’agit d’un excellent moyen de simplifier votre administration au fur et à mesure que votre organisation croît.

Pour plus d’informations sur les méthodes d’authentification disponibles pour {% data variables.product.product_name %}, consultez « [À propos de l’authentification pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise) ».
{% endif %}

## Configurer l’authentification à 2 facteurs

La meilleure façon d’améliorer la sécurité de {% ifversion fpt %}votre compte personnel{% elsif ghes %}votre compte personnel ou {% data variables.product.product_location %}{% elsif ghec %}vos comptes{% elsif ghae %}votre entreprise sur {% data variables.product.product_name %}{% endif %} consiste à configurer l’authentification à 2 facteurs{% ifversion ghae %} sur votre fournisseur d’identité SAML (IdP){% endif %}. Les mots de passe eux-mêmes peuvent être compromis en étant devinables, en étant réutilisés sur un autre site compromis ou par l’ingénierie sociale, comme le hameçonnage. L’authentification à 2 facteurs rend beaucoup plus difficile la compromission de vos comptes, même si un attaquant a votre mot de passe.

{% ifversion not ghae %}

{% ifversion ghec %} Si vous êtes propriétaire d’entreprise, vous pouvez éventuellement configurer une stratégie afin d’exiger l’authentification à 2 facteurs pour toutes les organisations appartenant à votre entreprise.
{% endif %}

{% ifversion ghes %} Si vous êtes l’administrateur de site pour {% data variables.product.product_location %}, vous pouvez éventuellement configurer l’authentification à 2 facteurs pour tous les utilisateurs de votre instance. La disponibilité de l’authentification à 2 facteurs sur {% data variables.product.product_name %} dépend de la méthode d’authentification que vous utilisez. Pour plus [d’informations, consultez « Centraliser l’authentification utilisateur](#centralize-user-authentication) ».
{% endif %}

Si vous êtes propriétaire d’une organisation, vous {% ifversion fpt %}pouvez{% else %}pouvez éventuellement{% endif %} exiger que tous les membres de l’organisation activent l’authentification à 2 facteurs.

{% ifversion ghec or ghes %}

### Configurer votre compte d’entreprise

Les propriétaires d’entreprise peuvent éventuellement exiger l’authentification à 2 facteurs pour tous les {% ifversion ghes %}utilisateurs sur{% elsif ghec %}membres de{% endif %} l’{% ifversion ghes %}instance{% elsif ghec %}entreprise{% endif %}. La disponibilité des stratégies d’authentification à 2 facteurs sur {% data variables.product.product_name %} dépend de la façon dont les {% ifversion ghes %}utilisateurs{% else %}membres{% endif %} s’authentifient pour accéder {% ifversion ghes %}à votre instance{% elsif ghec %}aux ressources de votre entreprise{% endif %}.

{% ifversion ghes %}
- Si vous vous connectez à {% data variables.product.product_location %} via un fournisseur d’identité externe en utilisant l’authentification unique CAS ou SAML, vous {% elsif ghec %} Si votre entreprise utilise {% data variables.product.prodname_emus %} ou que l’authentification SAML est appliquée pour votre entreprise, vous {%- endif %} ne pouvez pas configurer l’authentification à 2 facteurs sur {% data variables.product.product_name %}. Une personne disposant d’un accès administratif à votre fournisseur d’identité doit configurer l’authentification à 2 facteurs pour le fournisseur d’identité.

{% ifversion ghes %}

- Si vous vous connectez à {% data variables.product.product_location %} via un annuaire LDAP externe, vous pouvez exiger l’authentification à 2 facteurs pour votre entreprise sur {% data variables.product.product_name %}. Si vous autorisez l’authentification intégrée pour les utilisateurs en dehors de votre annuaire, les utilisateurs individuels peuvent activer l’authentification à 2 facteurs, mais vous ne pouvez pas exiger l’authentification à 2 facteurs pour votre entreprise.

{% endif %}

Pour plus d’informations, consultez {% ifversion ghec %}« [À propos de la gestion des identités et des accès pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise) » et {% endif %}« [Application de stratégies pour les paramètres de sécurité dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#requiring-two-factor-authentication-for-organizations-in-your-enterprise) ».

{% endif %}

### Configurer votre compte personnel

{% ifversion ghec or ghes %} {% note %}

**Remarque** : Selon la méthode d’authentification qu’{% ifversion ghec %}un propriétaire d’entreprise{% elsif ghes %}un administrateur de site{% endif %} a configurée pour {% ifversion ghec %}votre entreprise sur {% endif %}{% data variables.product.product_location %}, vous pouvez ne pas être en mesure d’activer l’authentification à 2 facteurs pour votre compte personnel.

{% endnote %} {% endif %}

{% data variables.product.product_name %} prend en charge plusieurs options pour l’authentification à 2 facteurs, et même si aucune ne se détache véritablement, l’option la plus sécurisée est WebAuthn. WebAuthn nécessite une clé de sécurité matérielle ou un appareil qui la prend en charge via des technologies telles que Windows Hello ou Mac TouchID. Il est possible, bien que difficile, d’hameçonner d’autres formes d’authentification à 2 facteurs (par exemple, quelqu’un vous demandant de lui lire votre mot de passe à 6 chiffres unique). Toutefois, il est impossible d’hameçonner WebAuthn, car l’étendue du domaine est intégrée au protocole, ce qui empêche les informations d’identification d’un site web imitant une page de connexion d’être utilisées sur {% data variables.product.product_name %}.

Quand vous configurez l’authentification à 2 facteurs, vous devez toujours télécharger les codes de récupération et configurer plusieurs facteurs. Cela garantit que l’accès à votre compte ne dépend pas d’un seul appareil. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) », « [Configuration de méthodes de récupération pour l’authentification à 2 facteurs](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods) » et [Clés de sécurité matérielles de marque GitHub](https://thegithubshop.com/products/github-branded-yubikey) dans le magasin GitHub.

### Configurer votre compte d’entreprise

{% ifversion ghec or ghes %} {% note %}

**Remarque** : Selon la méthode d’authentification qu’{% ifversion ghec %}un propriétaire d’entreprise{% elsif ghes %}un administrateur de site{% endif %} a configurée pour {% ifversion ghec %}votre entreprise sur {% endif %}{% data variables.product.product_location %}, vous pouvez ne pas être en mesure d’exiger l’authentification à 2 facteurs pour votre organisation.

{% endnote %} {% endif %}

Si vous êtes propriétaire d’une organisation, vous pouvez voir quels utilisateurs n’ont pas l’authentification à 2 facteurs activée, les aider à la configurer, puis exiger l’authentification à 2 facteurs pour votre organisation. Pour vous guider dans ce processus, consultez :

1. « [Voir si l’authentification à 2 facteurs est activée pour des utilisateurs de votre organisation](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled) »
2. « [Se préparer pour exiger l’authentification à 2 facteurs dans votre organisation](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/preparing-to-require-two-factor-authentication-in-your-organization) »
3. « [Exiger l’authentification à 2 facteurs dans votre organisation](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) »

{% endif %}

## Se connecter à {% data variables.product.product_name %} avec des clés SSH

Il existe d’autres façons d’interagir avec {% data variables.product.product_name %} au-delà de la connexion au site web{% ifversion ghae %} via votre IdP{% endif %}. De nombreuses personnes autorisent le code qu’elles poussent (push) vers {% data variables.product.prodname_dotcom %} avec une clé privée SSH. Pour plus d’informations, consultez « [À propos de SSH](/authentication/connecting-to-github-with-ssh/about-ssh) ».

Tout comme le mot de passe{% ifversion ghae %} de votre compte IdP{% else %}le mot de passe de votre compte{% endif %}, si un attaquant pouvait obtenir votre clé privée SSH, il pourrait emprunter votre identité et pousser du code malveillant vers n’importe quel référentiel auquel vous disposez d’un accès en écriture. Si vous stockez votre clé privée SSH sur un lecteur de disque, il est judicieux de la protéger avec une phrase secrète. Pour plus d’informations, consultez « [Utilisation de phrases secrètes de clé SSH](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases) ».

Une autre option consiste à générer des clés SSH sur une clé de sécurité matérielle. Vous pouvez utiliser la même clé que celle que vous utilisez pour l’authentification à 2 facteurs. Les clés de sécurité matérielles sont très difficiles à compromettre à distance, car la clé SSH privée reste sur le matériel et n’est pas directement accessible à partir d’un logiciel. Pour plus d’informations, consultez « [Génération d’une nouvelle clé SSH pour une clé de sécurité matérielle](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key) ».

{% ifversion ghec or ghes or ghae %} Les clés SSH matérielles sont assez sécurisées, mais la configuration matérielle requise peut ne pas fonctionner pour certaines organisations. Une autre approche consiste à utiliser des clés SSH qui ne sont valides que pendant une courte période, de sorte que même si la clé privée est compromise, elle ne peut pas être exploitée pendant très longtemps. C’est le concept sur lequel repose l’exécution de votre propre autorité de certification SSH. Même si cette approche vous donne beaucoup de contrôle sur la façon dont les utilisateurs s’authentifient, elle vous impose de gérer vous-même une autorité de certification SSH. Pour plus d’informations, consultez « [À propos des autorités de certification SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities) ».
{% endif %}

## Étapes suivantes

- « [Sécurisation de votre chaîne d’approvisionnement de bout en bout](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview) »

- « [Bonnes pratiques pour sécuriser le code dans votre chaîne d’approvisionnement](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code) »

- « [Bonnes pratiques pour sécuriser votre système de génération](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds) »
