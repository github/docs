---
title: À propos des mises à niveau vers de nouvelles mises en production
shortTitle: About upgrades
intro: '{% ifversion ghae %} Votre entreprise sur {% data variables.product.product_name %} fait régulièrement l’objet de mises à jour avec les fonctionnalités et les correctifs de bogues les plus récents de la part de {% data variables.product.company_short %}.{% else %}Vous pouvez bénéficier des nouvelles fonctionnalités et des correctifs de bogues pour {% data variables.product.product_name %} en mettant à niveau votre entreprise vers une version nouvellement publiée.{% endif %}'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: b3a2d340ef73ffe92f2117caf38a84e76ba0c8d1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108317'
---
{% data reusables.enterprise.constantly-improving %}{% ifversion ghae %}{% data variables.product.prodname_ghe_managed %} est un service entièrement managé, {% data variables.product.company_short %} effectue le processus de mise à niveau pour votre entreprise.{% endif %}

Les mises en production de fonctionnalité, généralement publiées tous les trimestres, incluent des nouveautés et des mises à niveau. {% ifversion ghae %}{% data variables.product.company_short %} met à niveau votre entreprise avec la mise en production de fonctionnalité la plus récente. Vous serez préalablement informé des temps d’arrêt planifiés pour votre entreprise.{% endif %}

{% ifversion ghes %}

À compter de la version {% data variables.product.prodname_ghe_server %} 3.0, toutes les mises en production de fonctionnalité sont précédées d’au moins une version Release Candidate. Les versions Release Candidate sont des propositions de mises en production de fonctionnalité complètes. Elles peuvent contenir des bogues et présenter certains problèmes qui ne peuvent être identifiés qu’à l’aide des commentaires des clients utilisant effectivement {% data variables.product.product_name %}. 

Vous pouvez accéder en avant-première aux fonctionnalités les plus récentes en testant une version Release Candidate dès sa mise à disposition. Vous pouvez faire une mise à niveau vers une version Release Candidate à partir d’une version prise en charge, puis une mise à niveau de la version Release Candidate vers des versions plus récentes quand elles sont publiées. Vous devez mettre à niveau tout environnement exécutant une version Release Candidate dès que la version est en disponibilité générale. Pour plus d’informations, consultez « [Exigences de mise à niveau](/admin/enterprise-management/upgrade-requirements) ».

Les versions Release Candidate doivent être déployées sur des environnements de test ou de préproduction. Quand vous testez une version Release Candidate, envoyez vos commentaires en contactant le support. Pour plus d’informations, consultez « [Travailler avec le {% data variables.contact.github_support %}](/admin/enterprise-support) ».

Nous utiliserons vos commentaires pour appliquer des correctifs de bogues et toute autre modification nécessaire à la création d’une version de production stable. Chaque nouvelle version Release Candidate apporte des correctifs de bogues visant à résoudre les problèmes détectés dans les versions précédentes. Quand la version est prête pour une adoption généralisée, {% data variables.product.company_short %} publie une version de production stable.

{% endif %}

{% warning %}

**Avertissement** : la mise à niveau vers une nouvelle mise en production de fonctionnalité entraîne quelques heures d’arrêt, pendant lesquelles aucun de vos utilisateurs ne pourra utiliser l’entreprise. Vous pouvez informer vos utilisateurs de ce temps d’arrêt en publiant une bannière d’annonce globale à l’aide de vos paramètres d’entreprise ou de l’API REST. Pour plus d’informations, consultez « [Personnalisation des messages utilisateur sur votre instance](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner) » et « [Administration de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements) ».

{% endwarning %}

{% ifversion ghes %}

Les mises en production de patchs, qui incluent uniquement des patchs à chaud et des correctifs de bogues sont publiées plus fréquemment. Elles sont en disponibilité générale dès la première publication et ne sont pas précédées de versions Release Candidate. La mise à niveau vers une mise en production de patchs nécessite généralement moins de cinq minutes de temps d’arrêt.

Pour mettre à niveau votre entreprise vers une nouvelle mise en production, consultez « [Notes de publication](/enterprise-server/admin/release-notes) » et « [Mise à niveau de {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server) ». Étant donné que vous pouvez effectuer une mise à niveau uniquement à partir d’une mise en production de fonctionnalité dont la version est antérieure de deux niveaux au maximum, utilisez l’[{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) pour connaître le chemin de mise à niveau à partir de votre version actuelle.

{% endif %}

## Pour aller plus loin

- [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) dans le dépôt `github/roadmap`{% ifversion ghae %}
- [ {% data variables.product.prodname_ghe_managed %} - notes de publication](/admin/release-notes) {% endif %}
