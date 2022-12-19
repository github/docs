---
title: Contrat de niveau de service GitHub Enterprise
hidden: true
redirect_from:
  - /github-enterprise-cloud-addendum
  - /github-business-cloud-addendum
  - /articles/github-enterprise-cloud-addendum
  - /github/site-policy/github-enterprise-service-level-agreement
  - /github/site-policy-deprecated/github-enterprise-cloud-addendum
versions:
  fpt: '*'
ms.openlocfilehash: e21816ada1c6b6d3062cecb5d4f0144702ea0f8e
ms.sourcegitcommit: 93b306112b5cd5ce482d468a25c9961ad02f87ac
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 08/29/2022
ms.locfileid: '147099261'
---
_Ces conditions s’appliquent aux Clients qui ont obtenu une licence pour les Produits avant le 4 janvier 2021. Les Clients qui achètent des Produits GitHub après cette date sont invités à consulter https://www.github.com/enterprise-legal pour les conditions actuelles._

**Version courte :** GitHub garantit un engagement de disponibilité trimestrielle de 99,9 % pour le service GitHub applicable. (le « **Niveau de service** » ou « **SLA** »). Si GitHub ne respecte pas le SLA, le client aura droit à un crédit de service sur son compte. (« **Crédits de service** »).

Pour les définitions de chaque Fonctionnalité de service (« **Fonctionnalité de service** ») et consulter le Temps de disponibilité historique et actuel, consultez la [Page de Statut GitHub](https://www.githubstatus.com/). Tous les termes commençant par une lettre majuscule utilisés mais non définis dans le présent SLA ont la signification qui leur est attribuée dans le contrat applicable du Client.

## Garantie de Temps de disponibilité

« **Temps de disponibilité** » désigne le pourcentage total de minutes durant lesquelles le service GitHub applicable a été disponible au cours d’un trimestre civil donné. GitHub s’engage à maintenir au moins 99,9 % de Temps de disponibilité pour le service GitHub applicable. Le calcul du Temps de disponibilité pour chaque Fonctionnalité de service qui peut être inclus dans le service GitHub applicable est décrit ci-dessous. (« **Calcul du Temps de disponibilité** »). Si GitHub ne respecte pas le SLA, le Client aura droit à des Crédits de service basés sur le calcul ci-dessous (« **Calcul des Crédits de service** »). Notez que le Temps d’indisponibilité n’affecte pas chaque client en même temps ou de la même façon.

| **Fonctionnalité de service** | **Calcul du Temps de disponibilité** | **Définitions** | **Calcul des Crédits de service** |
|---|---|---|---|
| **Problèmes**<br>**Demandes de&nbsp;tirage**<br>**Opérations&nbsp;Git**<br>**Demandes&nbsp;d’API (pour les Fonctionnalités de service uniquement)**<br>**Webhooks**<br>**Pages** | (total des minutes au cours d’un trimestre civil - Temps d’indisponibilité) / total des minutes au cours d’un trimestre civil | « **Temps d’indisponibilité** » désigne une période durant laquelle soit (a) le taux d’erreur dépasse cinq pour cent (5 %) en une minute donnée pour toute Fonctionnalité du service, soit (b) le Service est indisponible, comme déterminé par une combinaison des systèmes de surveillance internes et externes GitHub. | Une demande de Crédits de service peut être basée sur l’un ou l’autre des calculs suivants (et non les deux) : <ul><li>10 % du montant payé par le Client pour une Fonctionnalité de service au cours d’un trimestre civil durant lequel le Temps de disponibilité de cette Fonctionnalité de service a été inférieur ou égal à 99,9 %, mais supérieur à 99,0 %. <BR><BR>OR <BR><BR></li><li>25 % du montant payé par le Client pour une Fonctionnalité de service au cours d’un trimestre civil durant lequel le Temps de disponibilité de cette Fonctionnalité de service a été inférieur à 99,0 %.</li></ul> | |
| **Actions** | (Total des Exécutions déclenchées - Exécutions indisponibles) / (Total des Exécutions déclenchées) x 100 | « **Total des Exécutions déclenchées** » correspond au nombre total de toutes les exécutions d’Actions déclenchées par le Client au cours d’un trimestre civil. <br><br> « **Exécutions indisponibles** » correspond au nombre total d’exécutions qui n’ont pas fonctionné eu égard au Total des Exécutions déclenchées au cours d’un trimestre civil.  Une exécution ne fonctionne pas lorsque le fichier historique d’Actions ne saisit aucune entrée cinq (5) minutes après que le déclenchement a été effectué avec succès. | Identique à ce qui précède |
| **Packages** | Temps de disponibilité des transferts = identique aux actions <br> <br> Temps de disponibilité du stockage = 100 % - Taux d’erreur moyen* <br> <br> *Le Calcul du Temps de disponibilité exclut l’utilisation publique et les transactions de stockage non comptabilisées dans le Total des Transactions de stockage ou dans les Transactions de stockage inabouties (y compris les échecs de pré-authentification, les échecs d’authentification, les tentatives de transactions pour les comptes de stockage dépassant leurs quotas prescrits). | « **Taux d’erreur** » correspond au nombre total de Transactions de Stockage inabouties divisé par le Total des Transactions de stockage au cours d’un intervalle de temps défini (qui est actuellement d’une heure). Si le Total des Transactions de stockage au cours d’un intervalle donné d’une heure est de zéro, le Taux d’erreur pour cet intervalle est de 0 %. <br><br> « **Taux d’erreur moyen** » correspond à la somme des taux d’erreur pour chaque heure d’un trimestre civil divisée par le nombre total d’heures d’un trimestre civil. | Identique à ce qui précède |

## Exclusions
Sont exclus du Calcul de Temps de disponibilité les échecs de Fonctionnalité de service résultant (i) d’actes, d’omissions ou d’une mauvaise utilisation du service GitHub applicable par le Client, y compris les violations de l’Accord ; (ii) d’un échec de connectivité Internet du Client ; (iii) des facteurs échappant au contrôle raisonnable de GitHub, y compris les cas de force majeure ; ou (iv) de l’équipement, des services ou de toute autre technologie du Client.

## Échange de Crédits de service
Si GitHub ne respecte pas le présent SLA, le Client ne peut échanger des Crédits de service que sur demande écrite adressée GitHub dans les trente (30) jours suivant la fin du trimestre civil. Les demandes écrites d’échange de Crédits de service et les rapports mensuels ou trimestriels personnalisés de GitHub Enterprise Cloud doivent être envoyés à l’[Assistance GitHub](https://support.github.com/contact?tags=docs-policy).

Les Crédits de service peuvent se présenter sous forme de remboursement ou de crédit sur le Compte du Client, ne peuvent pas être échangés contre un montant en espèces, sont limités à un maximum de quatre-vingt-dix (90) jours de service payé par trimestre civil, exigent que le Client ait payé toutes les factures en cours, et expirent à la résiliation du contrat du Client avec GitHub. Les Crédits de service constituent le seul et unique recours en cas de manquement de GitHub à l’une des obligations du présent SLA.
