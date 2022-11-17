---
title: Résolution des problèmes d’authentification SAML
shortTitle: Troubleshoot SAML SSO
intro: 'Si vous utilisez l’authentification unique SAML et que les utilisateurs ne parviennent pas à s’authentifier pour accéder à {% data variables.location.product_location %}, vous pouvez résoudre le problème.'
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: d15a3686045a4d570feb60cade2320f939cc0d86
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107252'
---
{% ifversion ghes %}
## À propos des problèmes liés à l’authentification SAML

{% data variables.product.product_name %} journalise les messages d’erreur en cas d’échec d’authentification SAML dans le journal d’authentification à l’emplacement _/var/log/github/auth.log_. Vous pouvez passer en revue les réponses dans ce fichier journal, et vous pouvez également configurer une journalisation plus détaillée.

Pour plus d’informations sur les exigences de réponse SAML, consultez « [Référence de configuration SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-response-requirements) ».

## Configuration du débogage SAML

Vous pouvez configurer {% data variables.product.product_name %} pour écrire des journaux de débogage détaillés dans _/var/log/github/auth.log_ pour chaque tentative d’authentification SAML. Ce sortie supplémentaire vous aidera peut-être à résoudre les tentatives d’authentification avortées.

{% warning %}

**Avertissements** :

- N’activez le débogage SAML que de façon temporaire et désactivez-le de suite après avoir résolu les problèmes. Si vous laissez le débogage activé, la taille de votre journal peut augmenter beaucoup plus vite que la normale, ce qui peut avoir un impact négatif sur le niveau de performance de {% data variables.product.product_name %}.
- Testez les nouveaux paramètres d’authentification pour {% data variables.location.product_location %} dans un environnement de préproduction avant de les appliquer dans votre environnement de production. Pour plus d’informations, consultez « [Configuration d’une instance intermédiaire](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance) ».

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
1. Sous « Débogage SAML », sélectionnez la liste déroulante, puis cliquez sur **Activé**.

   ![Capture d’écran de la liste déroulante permettant d’activer le débogage SAML](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-enabled.png)

1. Essayez de vous connecter à {% data variables.location.product_location %} via votre IdP SAML.

1. Passez en revue la sortie de débogage dans _/var/log/github/auth.log_ sur {% data variables.location.product_location %}.

1. Une fois la résolution des problèmes terminée, sélectionnez la liste déroulante, puis cliquez sur **Désactivé**.

   ![Capture d’écran de la liste déroulante permettant de désactiver le débogage SAML](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-disabled.png)

## Décodage des réponses dans _auth.log_

Certaines sorties dans _auth.log_ peuvent être encodées en Base64. Vous pouvez accéder à l’interpréteur de commandes d’administration et vous servir de l’utilitaire `base64` sur {% data variables.location.product_location %}. pour décoder ces réponses. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh) ».

```shell
$ base64 --decode ENCODED_OUTPUT
```

## Erreur : « Un autre utilisateur est déjà propriétaire du compte »

Quand un utilisateur se connecte à {% data variables.location.product_location %}. pour la première fois avec l’authentification SAML, {% data variables.product.product_name %} crée un compte d’utilisateur sur l’instance et mappe le `NameID` SAML au compte.

Quand l’utilisateur se connecte à nouveau, {% data variables.product.prodname_ghe_server %} compare le mappage du `NameID` du compte à la réponse de l’IdP. Si le `NameID` présent dans la réponse de l’IdP ne correspond plus au `NameID` que {% data variables.product.product_name %} attend pour l’utilisateur, la connexion échoue. L’utilisateur obtient le message suivant.

> Un autre utilisateur est déjà propriétaire du compte. Demandez à votre administrateur de vérifier le journal d’authentification.

Le message indique généralement que le nom d’utilisateur ou l’adresse e-mail de la personne a changé au niveau de l’IdP. Vérifiez que le mappage du `NameID` du compte d’utilisateur sur {% data variables.product.prodname_ghe_server %} correspond au `NameID` de l’utilisateur au niveau de votre IdP. Pour plus d’informations, consultez « [Mise à jour du `NameID` SAML d’un utilisateur](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid) ».

## Erreur : Le destinataire dans la réponse SAML était absent ou non valide

Si le `Recipient` ne correspond pas à l’URL ACS de {% data variables.location.product_location %}, l’un des deux messages d’erreur suivants s’affiche dans le journal d’authentification quand un utilisateur tente de s’authentifier.

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

Veillez à définir la valeur de `Recipient` au niveau de votre IdP sur l’URL ACS complète pour {% data variables.location.product_location %}. Par exemple : `https://ghe.corp.example.com/saml/consume`.

## Erreur : « La réponse SAML n’est pas signée ou a été modifiée »

Si votre IdP ne signe pas la réponse SAML ou que la signature ne correspond pas au contenu, le message d’erreur suivant s’affiche dans le journal d’authentification.

```
SAML Response is not signed or has been modified.
```

Veillez à configurer les assertions signées pour l’application {% data variables.product.product_name %} au niveau de votre IdP.

## Erreur : « L’audience n’est pas valide » ou « Aucune assertion trouvée »

Si la valeur de `Audience` dans la réponse de l’IdP est vide ou incorrecte, le message d’erreur suivant s’affiche dans le journal d’authentification.

```
Audience is invalid. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

Veillez à définir la valeur de `Audience` au niveau de votre IdP sur `EntityId` pour {% data variables.location.product_location %}., qui est l’URL complète de votre instance. Par exemple : `https://ghe.corp.example.com`.
{% endif %}

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% ifversion ghec %} {% data reusables.saml.authentication-loop %} {% endif %}
