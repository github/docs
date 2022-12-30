---
title: Audit des utilisateurs au sein de votre entreprise
intro: 'Le tableau de bord du journal d’audit présente aux administrateurs de site les actions effectuées par l’ensemble des utilisateurs et des organisations de votre entreprise pendant le mois en cours et les six derniers mois. Le journal d’audit comprend des informations telles que l’auteur, la nature et la date d’exécution de l’action.'
redirect_from:
  - /enterprise/admin/guides/user-management/auditing-users-across-an-organization
  - /enterprise/admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Organizations
  - Security
  - User account
shortTitle: Audit users
ms.openlocfilehash: 18ea00b69f452ff496670fbd31e41bb8038cc46d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331687'
---
## Accès au journal d’audit

Le tableau de bord du journal d’audit vous offre un affichage visuel des données d’audit dans votre entreprise.

![Tableau de bord du journal d’audit à l’échelle de l’instance](/assets/images/enterprise/site-admin-settings/audit-log-dashboard-admin-center.png)

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}

Dans la carte, vous pouvez effectuer un panoramique et un zoom pour voir les événements dans le monde entier. Pointez sur un pays pour voir rapidement le nombre d’événements de ce pays.

## Recherche d’événements dans votre entreprise

Le journal d’audit répertorie les informations suivantes sur les actions effectuées au sein de votre entreprise :

* [Le référentiel](#search-based-on-the-repository) dans lequel une action a été effectuée
* L’[utilisateur](#search-based-on-the-user) qui a effectué l’action.
* [L’organisation](#search-based-on-the-organization) à laquelle une action s’est rapportée
* [Action](#search-based-on-the-action-performed) qui a été effectuée.
* [Le pays](#search-based-on-the-location) où l’action a eu lieu
* [Date et heure](#search-based-on-the-time-of-action) auxquelles l’action s’est produite

{% warning %}

**Remarques :**

- Bien que vous ne puissiez pas utiliser de texte pour rechercher des entrées d’audit, vous pouvez construire des requêtes de recherche à l’aide de divers filtres. {% data variables.product.product_name %} prend en charge de nombreux opérateurs pour la recherche sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [À propos de la recherche sur {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github) ».
- Les enregistrements d’audit sont disponibles pour le mois en cours et tous les jours des six mois précédents.

{% endwarning %}

### Recherche en fonction du référentiel

Le qualificateur `repo` limite les actions à un référentiel spécifique appartenant à votre organisation. Par exemple :

* `repo:my-org/our-repo` recherche tous les événements qui se sont produits pour le dépôt `our-repo` dans l’organisation `my-org`.
* `repo:my-org/our-repo repo:my-org/another-repo` recherche tous les événements qui se sont produits pour les dépôts `our-repo` et `another-repo` dans l’organisation `my-org`.
* `-repo:my-org/not-this-repo` exclut tous les événements qui se sont produits pour le référentiel `not-this-repo` dans l’organisation `my-org`.

Vous devez inclure le nom de votre organisation dans le qualificateur `repo` ; la recherche de `repo:our-repo` seulement ne fonctionnera pas.

### Recherche en fonction de l’utilisateur

Le qualificateur `actor` étend les événements en fonction du membre de votre organisation qui a effectué l’action. Par exemple :

* `actor:octocat` recherche tous les événements effectués par `octocat`.
* `actor:octocat actor:hubot` trouve tous les événements effectués à la fois par `octocat` et `hubot`.
* `-actor:hubot` exclut tous les événements effectués par `hubot`.

Vous ne pouvez utiliser qu’un nom d’utilisateur {% data variables.product.product_name %}, et non un nom réel d’un individu.

### Recherche en fonction de l’organisation

Le qualificateur `org` limite les actions à une organisation spécifique. Par exemple :

* `org:my-org` recherche tous les événements qui se sont produits pour l’organisation `my-org`.
* `org:my-org action:team` recherche tous les événements d’équipe effectués au sein de l’organisation `my-org`.
* `-org:my-org` exclut tous les événements qui se sont produits pour l’organisation `my-org`.

### Recherche basée sur l’action effectuée

Le qualificateur `action` recherche des événements spécifiques, regroupés dans des catégories. Pour plus d’informations sur les événements associés à ces catégories, consultez « [Événements du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise) ».

| Nom de la catégorie | Description
|------------------|-------------------
| `hook` | Contient toutes les activités liées aux webhooks.
| `org` | Contient toutes les activités liées à l’appartenance à l’organisation
| `repo` | Contient toutes les activités liées aux référentiels appartenant à votre organisation.
| `team` | Contient toutes les activités liées aux équipes de votre organisation.

Vous pouvez rechercher des ensembles d’actions spécifiques à l’aide de ces termes. Par exemple :

* `action:team` recherche tous les événements regroupés dans la catégorie team.
* `-action:billing` exclut tous les événements de la catégorie de facturation.

Chaque catégorie a un ensemble d’événements associés sur lesquels vous pouvez filtrer. Par exemple :

* `action:team.create` recherche tous les événements ayant impliqué la création d’une équipe.
* `-action:billing.change_email` exclut tous les événements où l’e-mail de facturation a été modifié.

### Recherche en fonction de l’emplacement

Le qualificateur `country` filtre les actions par pays d’origine.
- Vous pouvez utiliser le code court à deux lettres ou le nom complet d’un pays.
- Les pays dont le nom contient des espaces doivent être placés entre guillemets. Par exemple :
  * `country:de` recherche tous les événements qui se sont produits en Allemagne.
  * `country:Mexico` recherche tous les événements qui se sont produits au Mexique.
  * `country:"United States"` recherche tous les événements qui se sont produits aux États-Unis.

### Recherche basée sur l’heure de l’action

Le qualificateur `created` filtre les actions en fonction du moment où elles se sont produites.
- Définissez les dates au format `YYYY-MM-DD`, c’est-à-dire l’année, suivie du mois, suivi du jour.
- Les dates prennent en charge les [qualificateurs supérieur à, inférieur à et de plage](/enterprise/user/articles/search-syntax). Par exemple :
  * `created:2014-07-08` recherche tous les événements qui se sont produits le 8 juillet 2014.
  * `created:>=2014-07-01` recherche tous les événements qui se sont produits le 8 juillet 2014 ou après cette date.
  * `created:<=2014-07-01` recherche tous les événements qui se sont produits le 8 juillet 2014 ou avant cette date.
  * `created:2014-07-01..2014-07-31` recherche tous les événements qui se sont produits en juillet 2014.
