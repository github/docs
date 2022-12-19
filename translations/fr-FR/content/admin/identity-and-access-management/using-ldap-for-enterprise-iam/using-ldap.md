---
title: Utilisation de LDAP
redirect_from:
  - /enterprise/admin/articles/configuring-ldap-authentication
  - /enterprise/admin/articles/about-ldap-authentication
  - /enterprise/admin/articles/viewing-ldap-users
  - /enterprise/admin/hidden/enabling-ldap-sync
  - /enterprise/admin/hidden/ldap-sync
  - /enterprise/admin/user-management/using-ldap
  - /enterprise/admin/authentication/using-ldap
  - /admin/authentication/using-ldap
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
intro: 'Si vous utilisez le protocole LDAP (Lightweight Directory Access Protocol) pour centraliser l’accès entre les applications, vous pouvez intégrer {% data variables.product.product_name %} en configurant l’authentification LDAP pour votre instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
ms.openlocfilehash: 5d9b6aa9a5d641afa0b24dbe0e0f446ab723c735
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107524'
---
## À propos de l’authentification LDAP pour {% data variables.product.product_name %}

LDAP est un protocole d’application populaire pour l’accès aux services d’information d’annuaire et la gestion de ces derniers ; il s’agit de l’un des protocoles les plus courants utilisés pour intégrer des logiciels tiers aux annuaires d’utilisateurs de grandes entreprises. Pour plus d’informations, consultez « [Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) » sur Wikipédia.

Si vous utilisez un annuaire LDAP pour l’authentification centralisée, vous pouvez configurer l’authentification LDAP pour les personnes qui utilisent {% data variables.location.product_location %}.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Services LDAP pris en charge

{% data variables.product.prodname_ghe_server %} s’intègre à ces services LDAP :

* Active Directory
* FreeIPA
* Oracle Directory Server Enterprise Edition
* OpenLDAP
* Open Directory
* 389-ds

## Considérations relatives aux noms d’utilisateur avec LDAP

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Pour plus d’informations, consultez « [Considérations relatives au nom d’utilisateur pour l’authentification externe](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication) ».

## Configuration de LDAP avec {% data variables.location.product_location %}

Une fois LDAP configuré, les utilisateurs pourront se connecter à votre instance avec leurs informations d’identification LDAP. Au moment de se connecter pour la première fois, le nom de profil, l’adresse e-mail et la clé SSH des utilisateurs sont définis avec les attributs LDAP de votre répertoire.

Quand vous configurez l’accès LDAP pour les utilisateurs via la {% data variables.enterprise.management_console %}, vos licences utilisateur ne sont pas utilisées jusqu’à la première connexion d’un utilisateur à votre instance. Cependant, si vous créez un compte manuellement à l’aide des paramètres d’administrateur de site, la licence utilisateur est immédiatement prise en compte.

{% warning %}

**Avertissement :** Avant de configurer LDAP sur {% data variables.location.product_location %}, vérifiez que votre service LDAP prend en charge les résultats paginés.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. Sous « Authentification », sélectionnez **LDAP**.
![Sélection de LDAP](/assets/images/enterprise/management-console/ldap-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Sélection de la case d’authentification intégrée LDAP](/assets/images/enterprise/management-console/ldap-built-in-authentication.png)
5. Ajoutez vos paramètres de configuration.

## Attribut LDAP
Utilisez ces attributs pour terminer la configuration de LDAP pour {% data variables.location.product_location %}.

| Nom de l’attribut           | Type     | Description |
|--------------------------|----------|-------------|
| `Host`                   | Obligatoire | Hôte LDAP, par exemple `ldap.example.com` ou `10.0.0.30`. Si le nom d’hôte est disponible uniquement sur votre réseau interne, vous devrez peut-être d’abord configurer le DNS de {% data variables.location.product_location %} pour qu’il puisse résoudre le nom d’hôte en utilisant vos serveurs de noms internes. |
| `Port`                   | Obligatoire | Port sur lequel les services LDAP de l’hôte écoutent. Exemple : 389 ou 636 (pour LDAPS). |
| `Encryption`             | Obligatoire | Méthode de chiffrement utilisée pour sécuriser les communications vers le serveur LDAP. Vous pouvez opter pour une méthode brute (aucun chiffrement), SSL/LDAPS (chiffrement dès le début) et StartTLS (chiffrement de la communication dès la connexion établie). |
| `Domain search user`     | Facultatif | Utilisateur LDAP qui recherche d’autres utilisateurs se connectant pour autoriser l’authentification. Il s’agit généralement d’un compte de service spécialement créé pour des intégrations tierces. Utilisez un nom complet tel que `cn=Administrator,cn=Users,dc=Example,dc=com`. Avec Active Directory, vous pouvez aussi utiliser la syntaxe `[DOMAIN]\[USERNAME]` (par exemple `WINDOWS\Administrator`) pour l’utilisateur de la recherche de domaine avec Active Directory. |
| `Domain search password` | Facultatif | Mot de passe de l’utilisateur de la recherche de domaine. |
| `Administrators group`   | Facultatif | Les utilisateurs de ce groupe sont promus administrateurs de site quand ils se connectent à votre appliance. Si vous ne configurez pas de groupe Administrateurs LDAP, le premier compte d’utilisateur LDAP qui se connecte à votre appliance est automatiquement promu administrateur de site. |
| `Domain base`            | Obligatoire | `Distinguished Name` (nom unique) complet d’une sous-arborescence LDAP dans laquelle vous souhaitez rechercher des utilisateurs et des groupes. Vous pouvez en ajouter autant que vous le voulez, mais chaque groupe doit être défini dans la même base de domaine que les utilisateurs qui y appartiennent. Si vous spécifiez des groupes d’utilisateurs restreints, seuls les utilisateurs appartenant à ces groupes se trouveront dans l’étendue. Nous vous recommandons de spécifier le niveau supérieur de votre arborescence d’annuaire LDAP comme base de domaine et d’utiliser des groupes d’utilisateurs restreints pour contrôler l’accès. |
| `Restricted user groups` | Facultatif | Si vous spécifiez cet attribut, seuls les utilisateurs de ces groupes sont autorisés à se connecter. Vous devez uniquement spécifier les noms communs des groupes, et vous pouvez ajouter autant de groupes que vous le souhaitez. Si aucun groupe n’est spécifié, *tous* les utilisateurs de l’étendue de la base de domaine spécifiée peuvent se connecter à votre instance {% data variables.product.prodname_ghe_server %}. |
| `User ID`                | Obligatoire | Attribut LDAP qui identifie l’utilisateur LDAP qui tente l’authentification. Une fois qu’un mappage est établi, les utilisateurs peuvent changer leur nom d’utilisateur {% data variables.product.prodname_ghe_server %}. Ce champ doit être `sAMAccountName` pour la plupart des installations Active Directory, mais il peut s’agir de `uid` pour d’autres solutions LDAP, comme OpenLDAP. La valeur par défaut est `uid`. |
| `Profile name`           | Facultatif | Nom qui figure dans la page de profil {% data variables.product.prodname_ghe_server %} de l’utilisateur. À moins que la synchronisation LDAP soit activée, les utilisateurs peuvent changer leur nom de profil. |
| `Emails`                 | Facultatif | Adresses e-mail du compte {% data variables.product.prodname_ghe_server %} d’un utilisateur. |
| `SSH keys`               | Facultatif | Clés SSH publiques attachées au compte {% data variables.product.prodname_ghe_server %} d’un utilisateur. Ces clés doivent être au format OpenSSH. |
| `GPG keys`               | Facultatif | Clés GPG attachées au compte {% data variables.product.prodname_ghe_server %} d’un utilisateur. |
| `Disable LDAP authentication for Git operations` | Facultatif |Si cette option est sélectionnée, elle [empêche](#disabling-password-authentication-for-git-operations) les utilisateurs d’utiliser des mots de passe LDAP pour authentifier les opérations Git. |
| `Enable LDAP certificate verification` | Facultatif |Si cette option est sélectionnée, elle [permet](#enabling-ldap-certificate-verification) la vérification de certificat LDAP. |
| `Synchronization` | Facultatif |Si cette option est sélectionnée, elle [permet](#enabling-ldap-sync) la synchronisation LDAP. |

### Désactivation de l’authentification par mot de passe pour les opérations Git

Sélectionnez **Désactiver l’authentification par nom d’utilisateur et mot de passe pour les opérations Git** dans vos paramètres LDAP pour appliquer l’utilisation de {% data variables.product.pat_generic %} ou de clés SSH pour l’accès Git, ce qui peut empêcher votre serveur d’être surchargé par les demandes d’authentification LDAP. Nous recommandons ce paramètre, car un serveur LDAP peu réactif est une source fréquente de problèmes de performances et de pannes, qui sont aggravés s’il fait l’objet d’un grand nombre de demandes du fait de l’interrogation.

![Case à cocher Désactiver l’authentification par mot de passe pour Git](/assets/images/enterprise/management-console/ldap-disable-password-auth-for-git.png)

Quand cette option est sélectionnée, si un utilisateur tente d’utiliser un mot de passe pour les opérations Git via la ligne de commande, il reçoit le message d’erreur `Password authentication is not allowed for Git operations. You must use a {% data variables.product.pat_generic %}.`

### Activation de la vérification de certificat LDAP

Sélectionnez **Activer la vérification de certificat LDAP** dans vos paramètres LDAP pour valider le certificat de serveur LDAP que vous utilisez avec TLS.

![Case de vérification de certificat LDAP](/assets/images/enterprise/management-console/ldap-enable-certificate-verification.png)

Quand cette option est sélectionnée, le certificat est validé pour vérifier les points suivants :
- Si le certificat contient au moins un autre nom d’objet (SAN), un de ces noms doit correspondre au nom d’hôte LDAP. Sinon, le nom commun (CN) correspond au nom d’hôte LDAP.
- Le certificat n'a pas expiré.
- Le certificat est signé par une autorité de certification de confiance.

### Activation de la synchronisation LDAP

{% note %}

**Remarque :** Les équipes utilisant la synchronisation LDAP sont limitées à un maximum de 1 499 membres.

{% endnote %}

La synchronisation LDAP vous permet de synchroniser les utilisateurs {% data variables.product.prodname_ghe_server %} et l’appartenance aux équipes par rapport à vos groupes LDAP établis. Cela vous permet d’établir un contrôle d’accès en fonction du rôle pour les utilisateurs de votre serveur LDAP au lieu de le faire manuellement dans {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez « [Création d’équipes](/enterprise/admin/guides/user-management/creating-teams#creating-teams-with-ldap-sync-enabled) ».

Pour activer la synchronisation LDAP, dans vos paramètres LDAP, sélectionnez **Synchroniser les e-mails**, **Synchroniser les clés SSH** ou **Synchroniser les clés GPG**.

![Case à cocher de synchronisation](/assets/images/enterprise/management-console/ldap-synchronize.png)

Après avoir activé la synchronisation LDAP, un travail de synchronisation s’exécute pendant l’intervalle de temps spécifié pour effectuer les opérations suivantes sur chaque compte d’utilisateur :

- Si vous avez autorisé l’authentification intégrée pour les utilisateurs extérieurs à votre fournisseur d’identité et que l’utilisateur utilise l’authentification intégrée, passez à l’utilisateur suivant.
- S’il n’existe pas de mappage LDAP pour l’utilisateur, essayez de mapper l’utilisateur à une entrée LDAP de l’annuaire. Si l’utilisateur ne peut pas être mappé à une entrée LDAP, suspendez-le et passez à l’utilisateur suivant.
- S’il existe un mappage LDAP et que l’entrée LDAP correspondante ne figure pas dans l’annuaire, suspendez l’utilisateur et passez à l’utilisateur suivant.
- Si l’entrée LDAP correspondante a été marquée comme étant désactivée et que l’utilisateur n’est pas déjà suspendu, suspendez-le et passez à l’utilisateur suivant.
- Si l’entrée LDAP correspondante n’est pas marquée comme étant désactivée, que l’utilisateur est suspendu et que _Réactiver les utilisateurs suspendus_ est activé dans le Centre d’administration, rétablissez l’utilisateur.
- Si un ou plusieurs groupes d’utilisateurs restreints sont configurés sur l’instance et que l’entrée LDAP correspondante ne se trouve pas dans l’un de ces groupes, suspendez l’utilisateur.
- Si un ou plusieurs groupes d’utilisateurs restreints sont configurés sur l’instance, que l’entrée LDAP correspondante se trouve dans l’un de ces groupes et que _Réactiver les utilisateurs suspendus_ est activé dans le Centre d’administration, rétablissez l’utilisateur.
- Si l’entrée LDAP correspondante comporte un attribut `name`, mettez à jour le nom du profil de l’utilisateur.
- Si l’entrée LDAP correspondante se trouve dans le groupe Administrateurs, promouvez l’utilisateur en administrateur de site.
- Si l’entrée LDAP correspondante ne se trouve pas dans le groupe Administrateurs, rétrogradez l’utilisateur en compte normal.
- Si un champ Utilisateur LDAP est défini pour les e-mails, synchronisez les paramètres de messagerie de l’utilisateur avec l’entrée LDAP. Définissez la première entrée `mail` LDAP comme e-mail principal.
- Si un champ Utilisateur LDAP est défini pour des clés publiques SSH, synchronisez les clés SSH publiques de l’utilisateur avec l’entrée LDAP.  
- Si un champ Utilisateur LDAP est défini pour des clés GPG, synchronisez les clés GPG de l’utilisateur avec l’entrée LDAP.  

{% note %}

**Remarque** : les entrées LDAP ne peuvent être marquées comme étant désactivées que si vous utilisez Active Directory et que l’attribut `userAccountControl` est présent et marqué `ACCOUNTDISABLE`. Certaines variantes d’Active Directory, telles que AD LDS et ADAM, ne prennent pas en charge l’attribut `userAccountControl`.

{% endnote %}

Un travail de synchronisation s’exécute aussi selon l’intervalle de temps spécifié pour exécuter les opérations suivantes sur chaque équipe qui a été mappée à un groupe LDAP :

- Si le groupe LDAP correspondant d’une équipe a été supprimé, supprimez tous les membres de l’équipe.
- Si les entrées de membres LDAP ont été supprimées du groupe LDAP, supprimez les utilisateurs correspondants de l’équipe. Si l’utilisateur n’est plus membre d’une équipe de l’organisation et qu’il n’est pas propriétaire de l’organisation, supprimez l’utilisateur de l’organisation. Si, par voie de conséquence, l’utilisateur perd l’accès à tous les dépôts, supprimez les duplications (forks) privées de ces dépôts éventuellement détenues par l’utilisateur.

  {% note %}

  **Remarque :** La synchronisation LDAP ne supprime pas un utilisateur d’une organisation si celui-ci est propriétaire de cette organisation. À la place, un autre propriétaire de l’organisation devra supprimer manuellement l’utilisateur.

  {% endnote %}
- Si des entrées de membres LDAP ont été ajoutées au groupe LDAP, ajoutez les utilisateurs correspondants à l’équipe. Si, à la suite de cela, l’utilisateur récupère l’accès à des dépôts, restaurez les duplications (forks) privées des dépôts qui ont été supprimées suite à la perte d’accès de l’utilisateur au cours des 90 derniers jours.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Avertissement de sécurité :**

Quand la synchronisation LDAP est activée, les administrateurs de site et les propriétaires d’organisation peuvent rechercher dans l’annuaire LDAP des groupes auxquels mapper l’équipe.

Cela peut potentiellement entraîner la divulgation d’informations organisationnelles sensibles à des sous-traitants ou à d’autres utilisateurs non privilégiés, notamment :

- Existence de groupes LDAP spécifiques visibles de l’*Utilisateur de la recherche de domaine*.
- Membres du groupe LDAP qui ont des comptes d’utilisateur {% data variables.product.prodname_ghe_server %}, qui sont divulgués lors de la création d’une équipe synchronisée avec ce groupe LDAP.

Si la divulgation de telles informations n’est pas souhaitée, votre entreprise ou votre organisation doit restreindre les autorisations de l’*Utilisateur de la recherche de domaine* configuré dans la console d’administration. S’il n’est pas possible de définir cette restriction, contactez le {% data variables.contact.contact_ent_support %}.

{% endwarning %}

### Classes d’objets de groupe LDAP prises en charge

{% data variables.product.prodname_ghe_server %} prend en charge ces classes d’objets de groupe LDAP. Les groupes peuvent être imbriqués.

- `group`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

## Affichage et création d’utilisateurs LDAP

Vous pouvez afficher la liste complète des utilisateurs LDAP qui ont accès à votre instance et provisionner de nouveaux utilisateurs.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %}
3. Dans la barre latérale de gauche, cliquez sur **Utilisateurs LDAP**.
![Onglet Utilisateurs LDAP](/assets/images/enterprise/site-admin-settings/ldap-users-tab.png)
4. Pour rechercher un utilisateur, tapez un nom d’utilisateur complet ou partiel, puis cliquez sur **Rechercher**. Les utilisateurs existants s’affichent dans les résultats de la recherche. Si un utilisateur n’existe pas, cliquez sur **Créer** pour provisionner le nouveau compte d’utilisateur.
![Recherche LDAP](/assets/images/enterprise/site-admin-settings/ldap-users-search.jpg)

## Mise à jour des comptes LDAP

À moins que la [synchronisation LDAP soit activée](#enabling-ldap-sync), les modifications apportées aux comptes LDAP ne sont pas synchronisées automatiquement avec {% data variables.product.prodname_ghe_server %}.

* Pour utiliser un nouveau groupe d’administration LDAP, les utilisateurs doivent être promus et rétrogradés manuellement sur {% data variables.product.prodname_ghe_server %} pour refléter les modifications apportées à LDAP.
* Pour ajouter ou supprimer des comptes LDAP dans des groupes d’administration LDAP, [promouvez ou rétrogradez les comptes sur {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/user-management/promoting-or-demoting-a-site-administrator).
* Pour supprimer des comptes LDAP, [suspendez les comptes {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users).

### Synchronisation manuelle des comptes LDAP

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Sous « LDAP », cliquez sur **Synchroniser maintenant** pour mettre à jour manuellement le compte avec les données de votre serveur LDAP.
![Bouton Synchroniser maintenant LDAP](/assets/images/enterprise/site-admin-settings/ldap-sync-now-button.png)

Vous pouvez aussi [utiliser l’API pour déclencher une synchronisation manuelle](/enterprise/user/rest/reference/enterprise-admin#ldap).

## Révocation de l’accès à {% data variables.location.product_location %}

Si la [synchronisation LDAP est activée](#enabling-ldap-sync), la suppression des informations d’identification LDAP d’un utilisateur aura pour effet de suspendre son compte une fois la prochaine exécution de la synchronisation effectuée.

Si la synchronisation LDAP **n’est pas** activée, vous devez suspendre manuellement le compte {% data variables.product.prodname_ghe_server %} après avoir supprimé les informations d’identification LDAP. Pour plus d’informations, consultez « [Suspension et rétablissement d’utilisateurs](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) ».
