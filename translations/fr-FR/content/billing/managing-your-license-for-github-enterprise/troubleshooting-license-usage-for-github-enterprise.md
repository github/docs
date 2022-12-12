---
title: Résolution des problèmes d’utilisation des licences pour GitHub Enterprise
intro: Vous pouvez résoudre les problèmes d’utilisation des licences pour votre entreprise en auditant les rapports des licences.
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Troubleshoot license usage
ms.openlocfilehash: 8595aaad929e534ebbd474270f3e01f87113b5ec
ms.sourcegitcommit: aded2711e14a0c2473049d3d7e05c82a74e4c634
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179940'
---
## À propos de l’utilisation inattendue des licences

Si le nombre de licences consommées pour votre entreprise est inattendu, vous pouvez passer en revue le rapport des licences consommées afin d’auditer l’utilisation des licences dans l’ensemble des déploiements et abonnements de votre entreprise. Pour plus d’informations, consultez « [Affichage de l’utilisation des licences pour GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise) » et « [Affichage de l’abonnement et de l’utilisation pour votre compte d’entreprise](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account) ».

En cas d’erreurs, vous pouvez essayer les étapes de résolution des problèmes.

Pour des raisons de confidentialité, les propriétaires d’entreprise ne peuvent pas accéder directement aux détails des comptes d’utilisateur, sauf si vous utilisez {% data variables.product.prodname_emus %}.

## À propos du calcul des licences consommées

Si un utilisateur remplit une ou plusieurs des conditions suivantes, {% data variables.product.company_short %} facture pour l’utilisateur.

- L’utilisateur utilise les déploiements de {% data variables.product.prodname_ghe_server %}.
- L’utilisateur est membre de l’une de vos organisations sur {% data variables.product.prodname_ghe_cloud %}.
- L’utilisateur dispose d’un accès en écriture à l’un des dépôts privés de votre organisation.
- L’utilisateur est un {% data variables.visual_studio.prodname_vs_subscriber %}.

Les invitations pour ces rôles consomment une licence jusqu’à ce que l’invitation soit acceptée ou expire. Pour plus d’informations sur les personnes de votre entreprise qui consomment une licence, consultez « [À propos des tarifs par utilisateur](/billing/managing-billing-for-your-github-account/about-per-user-pricing) ».

Pour que chaque utilisateur consomme un seul siège, quel que soit le nombre de déploiements qu’il utilise, vous devez synchroniser l’utilisation des licences entre {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}. Pour plus d’informations, consultez « [Synchronisation de l’utilisation de licences entre {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud) ».

Une fois que vous avez synchronisé l’utilisation de licences, {% data variables.product.prodname_dotcom %} met en correspondance les comptes d’utilisateur sur {% data variables.product.prodname_ghe_server %} avec les comptes d’utilisateur sur {% data variables.product.prodname_ghe_cloud %} par adresse e-mail.

Tout d’abord, nous vérifions l’adresse e-mail principale de chaque utilisateur sur {% data variables.product.prodname_ghe_server %}. Ensuite, nous essayons de faire correspondre cette adresse à l’adresse e-mail d’un compte d’utilisateur sur {% data variables.product.prodname_ghe_cloud %}. Si votre entreprise utilise l’authentification unique SAML, nous vérifions d’abord les attributs SAML suivants pour les adresses e-mail.

- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
- `username`
- `NameID`
- `emails`

Si aucune adresse e-mail trouvée dans ces attributs ne correspond à l’adresse e-mail principale sur {% data variables.product.prodname_ghe_server %}, ou si votre entreprise n’utilise pas l’authentification unique SAML, nous vérifions ensuite chacune des adresses e-mail vérifiées de l’utilisateur sur {% data variables.product.prodname_ghe_cloud %}. Pour plus d’informations sur la vérification des adresses e-mail sur {% data variables.product.prodname_dotcom_the_website %}, consultez « [Vérification de votre adresse e-mail](/enterprise-cloud@latest/get-started/signing-up-for-github/verifying-your-email-address){% ifversion not ghec %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}. {% else %}. » {% endif %}

## Champs dans les fichiers des licences consommées

Le rapport d’utilisation des licences {% data variables.product.prodname_dotcom_the_website %} et le fichier d’utilisation des licences exporté {% data variables.product.prodname_ghe_server %} incluent différents champs permettant de résoudre les problèmes d’utilisation des licences dans votre entreprise. 

### Rapport d’utilisation des licences (fichier CSV) {% data variables.product.prodname_dotcom_the_website %}

Le rapport d’utilisation des licences de votre entreprise est un fichier CSV qui contient les informations suivantes sur les membres de votre entreprise. Certains champs sont spécifiques à votre déploiement {% data variables.product.prodname_ghe_cloud %} (GHEC), environnements connectés {% data variables.product.prodname_ghe_server %} (GHES) ou à vos abonnements {% data variables.product.prodname_vs %} (VSS) avec GitHub Enterprise.

| Champ | Description
| ----- | -----------
| github_com_login | Nom d’utilisateur du compte GHEC de l’utilisateur
| github_com_name | Nom d’affichage du compte GHEC de l’utilisateur
| github_com_profile | URL de la page de profil de l’utilisateur sur GHEC
| github_com_user   | Indique si l’utilisateur a ou non un compte sur GHEC |
| github_com_member_roles | Pour chacune des organisations auxquelles appartient l’utilisateur sur GHEC, nom de l’organisation et rôle de l’utilisateur dans cette organisation (`Owner` ou `Member`), séparés par un signe deux-points<br><br>Organisations délimitées par des virgules |
| github_com_enterprise_role | Peut être : `Owner`, `Member` ou `Outside collaborator`
| github_com_verified_domain_emails | Toutes les adresses e-mail associées au compte GHEC de l’utilisateur qui correspondent aux domaines vérifiés de votre entreprise |
| github_com_saml_name_id | Nom d’utilisateur SAML |
| github_com_orgs_with_pending_invites | Toutes les invitations en attente pour le compte GHEC de l’utilisateur à rejoindre des organisations dans votre entreprise |
| license_type | Peut être : `Visual Studio subscription` ou `Enterprise`
| enterprise_server_user| Indique si l’utilisateur a au moins un compte sur GHES |
| enterprise_server_primary_emails | Adresses e-mail principales associées à chacun des comptes GHES de l’utilisateur |
| enterprise_server_user_ids | Pour chacun des comptes GHES de l’utilisateur, ID d’utilisateur du compte
| total_user_accounts | Nombre total de comptes que la personne a dans GHEC et GHES
| visual_studio_subscription_user | Indique si l’utilisateur est un {% data variables.visual_studio.prodname_vs_subscriber %} |
| visual_studio_subscription_email | Adresse e-mail associée au VSS de l’utilisateur |
| visual_studio_license_status | Indique si la licence Visual Studio a été associée à un utilisateur {% data variables.product.company_short %} |

Les {% data variables.visual_studio.prodname_vs_subscriber %} qui ne sont pas encore membres d’au moins une organisation de votre entreprise sont inclus dans le rapport avec un état d’invitation en attente. Les valeurs manquent pour le champ « Nom » ou « Lien de profil ».

### Fichier d’utilisation des licences exporté (fichier JSON) {% data variables.product.prodname_ghe_server %}

Le fichier d’utilisation des licences {% data variables.product.prodname_ghe_server %} est un fichier JSON qui est généralement utilisé lors de l’exécution d’une synchronisation manuelle des licences utilisateur entre les déploiements {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}. Le fichier contient les informations suivantes spécifiques à votre environnement {% data variables.product.prodname_ghe_server %}.

| Champ | Description
| ----- | -----------
| Fonctionnalités | Les fonctionnalités de {% data variables.product.prodname_github_connect %} qui sont activées sur votre instance {% data variables.product.prodname_ghe_server %}, ainsi que la date et l’heure d’activation.
| Nom de l’hôte | Nom d’hôte de votre instance {% data variables.product.prodname_ghe_server %}.
| HTTP uniquement | Si le protocole TLS (Transport Layer Security) est activé et configuré sur votre instance {% data variables.product.prodname_ghe_server %}. Il peut s’agir de l’une des valeurs suivantes : `True` ou `False`. 
| Licence | Hachage de votre licence {% data variables.product.prodname_ghe_server %}.
| Clé publique | Partie clé publique de votre licence {% data variables.product.prodname_ghe_server %}.
| ID du serveur | UUID généré pour votre instance {% data variables.product.prodname_ghe_server %}.
| Version | Version de votre instance {% data variables.product.prodname_ghe_server %}.

## Résolution des problèmes liés aux licences consommées

Pour vous assurer que chaque utilisateur consomme uniquement un seul siège pour différents déploiements et abonnements, essayez les étapes de résolution des problèmes suivantes.

1. Pour aider à identifier les utilisateurs qui consomment plusieurs sièges, si votre entreprise utilise des domaines vérifiés pour {% data variables.product.prodname_ghe_cloud %}, consultez la liste des membres d’entreprise qui n’ont pas d’adresse e-mail d’un domaine vérifié associé à leur compte sur {% data variables.product.prodname_dotcom_the_website %}. Il s’agit souvent des utilisateurs qui consomment par erreur plusieurs licences. Pour plus d’informations, consultez « [Affichage des membres sans adresse e-mail à partir d’un domaine vérifié](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain) ».

   {% note %}

  **Remarque :** Pour faciliter la résolution des problèmes, nous vous recommandons d’utiliser des domaines vérifiés avec votre compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour une entreprise](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) ».

  {% endnote %}
1. Après avoir identifié les utilisateurs qui consomment plusieurs sièges, assurez-vous que la même adresse e-mail est associée à tous les comptes de l’utilisateur. Pour plus d’informations sur les adresses e-mail qui doivent être mises en correspondance, consultez « [À propos du calcul des licences consommées](#about-the-calculation-of-consumed-licenses) ».
1. Si une adresse e-mail a été récemment mise à jour ou vérifiée pour corriger une incompatibilité, affichez l’horodatage du dernier travail de synchronisation de licence. Si aucun travail n’a été exécuté depuis que la correction a été effectuée, déclenchez manuellement un nouveau travail. Pour plus d’informations, consultez « [Synchronisation de l’utilisation des licences entre GitHub Enterprise Server et GitHub Enterprise Cloud](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud) ».

Si vous avez encore des questions concernant les licences consommées après avoir consulté les informations de résolution des problèmes ci-dessus, vous pouvez contacter {% data variables.contact.github_support %} via {% data variables.contact.contact_enterprise_portal %}.
