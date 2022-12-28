---
title: Bien démarrer avec GitHub Actions pour GitHub Enterprise Server
shortTitle: Get started
intro: 'Découvrez comment activer et configurer {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_ghe_server %} pour la première fois.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: a48e562898eb4c82b9027ee56ed52b71e7c5ebc7
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192968'
---
{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

## À propos de {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_ghe_server %}

Cet article explique comment les administrateurs de site peuvent configurer {% data variables.product.prodname_ghe_server %} pour utiliser {% data variables.product.prodname_actions %}.

{% data reusables.actions.ghes-actions-not-enabled-by-default %} Vous devez déterminer si votre instance dispose des ressources processeur et mémoire adéquates pour gérer la charge de {% data variables.product.prodname_actions %} sans entraîner de perte de performances, et éventuellement augmenter ces ressources. Vous devez aussi vous décider sur le fournisseur de stockage auquel vous allez faire appel pour le stockage d’objets blob nécessaire au stockage des artefacts{% ifversion actions-caching %} et des caches{% endif %} générés par les exécutions de workflows. Ensuite, vous activerez {% data variables.product.prodname_actions %} pour votre entreprise, gérerez les autorisations d’accès et ajouterez des exécuteurs auto-hébergés pour exécuter les workflows.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Passer en revue la configuration matérielle requise

{%- ifversion ghes < 3.6 %}

Les ressources processeur et mémoire dont dispose {% data variables.location.product_location %} déterminent le nombre de travaux qui peuvent être exécutés simultanément sans perte de performances. {% data reusables.actions.minimum-hardware %}

La quantité maximale de travaux s’exécutant simultanément sans perte de performances dépend de certains facteurs comme la durée des travaux, l’utilisation ou non d’artefacts, le nombre de dépôts exécutant Actions et le nombre de travaux exécutés en parallèle sur votre instance en rapport avec Actions. Les tests réalisés en interne par GitHub ont mis en évidence les objectifs de performances suivants pour GitHub Enterprise Server sur un éventail de configurations processeur et mémoire :

{% endif %}

{%- ifversion ghes > 3.5 %}

Les ressources processeur et mémoire dont dispose {% data variables.location.product_location %} déterminent le nombre d’exécuteurs qui peuvent être configurés sans perte de performances. {% data reusables.actions.minimum-hardware %}

La quantité maximale d’exécuteurs connectés sans perte de performances dépend de certains facteurs comme la durée des travaux, l’utilisation ou non d’artefacts, le nombre de dépôts exécutant Actions et le nombre de travaux exécutés en parallèle sur votre instance en rapport avec Actions. Les tests réalisés en interne par GitHub ont mis en évidence les objectifs de performances suivants pour GitHub Enterprise Server sur un éventail de configurations processeur et mémoire :

{% endif %}

{%- ifversion ghes = 3.3 %}

{% data reusables.actions.hardware-requirements-3.3 %}

La concurrence maximale a été mesurée pour plusieurs dépôts, une durée de travail d’environ 10 minutes et des chargements d’artefacts de 10 Mo. Il se peut que vous observiez des niveaux de performance différents selon les niveaux globaux d’activité sur votre instance.

{%- endif %}

{%- ifversion ghes = 3.4 %}

{% data reusables.actions.hardware-requirements-3.4 %}

La concurrence maximale a été mesurée pour plusieurs dépôts, une durée de travail d’environ 10 minutes et des chargements d’artefacts de 10 Mo. Il se peut que vous observiez des niveaux de performance différents selon les niveaux globaux d’activité sur votre instance.

{%- endif %}

{%- ifversion ghes = 3.5 %}

{% data reusables.actions.hardware-requirements-3.5 %}

{% data variables.product.company_short %} a mesuré la concurrence maximale en utilisant plusieurs dépôts, une durée de travail d’environ 10 minutes et des chargements d’artefacts de 10 Mo. Il se peut que vous observiez des niveaux de performance différents selon les niveaux globaux d’activité sur votre instance.

{% note %}

**Remarque :** À compter de {% data variables.product.prodname_ghe_server %} 3.5, les tests internes de {% data variables.product.company_short %} utilisent des processeurs de 3e génération pour mieux refléter une configuration classique du client. Ce changement de processeur représente une petite partie des modifications apportées aux cibles de performances dans cette version de {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{%- endif %}

{%- ifversion ghes > 3.5 %}


| Processeurs virtuels | Mémoire | Nombre maximal d’exécuteurs connectés |
| :---| :--- | :--- |
| 8   | 64 Go  | 740 exécuteurs |
| 32  | 160 Go | 2 700 exécuteurs |
| 96  | 384 Go | 7 000 exécuteurs |
| 128 | 512 Go | 7 000 exécuteurs |

{% data variables.product.company_short %} a mesuré le nombre maximal d’exécuteurs connectés en utilisant plusieurs référentiels, une durée de travail d’environ 10 minutes et des chargements d’artefacts de 10 Mo. Il se peut que vous observiez des niveaux de performance différents selon les niveaux globaux d’activité sur votre instance.

{% note %}

**Remarques :**

- À partir de {% data variables.product.prodname_ghe_server %} 3.6, {% data variables.product.company_short %} documente les exécuteurs connectés plutôt que les travaux simultanés. Les exécuteurs connectés représentent le nombre maximal d’exécuteurs que vous pouvez connecter et que vous envisagez d’utiliser. Il doit également être noté que la connexion de davantage d’exécuteurs que vous envisagez d’utiliser peut avoir un impact négatif sur les performances.

- À partir de {% data variables.product.prodname_ghe_server %} 3.5, les tests internes de {% data variables.product.company_short %} utilisent des processeurs de 3e génération pour mieux refléter une configuration classique du client. Ce changement de processeur représente une petite partie des modifications apportées aux cibles de performances dans cette version de {% data variables.product.prodname_ghe_server %}.
{% endnote %} {%- endif %}

Si vous envisagez d’activer {% data variables.product.prodname_actions %} pour les utilisateurs d’une instance existante, examinez les niveaux d’activité des utilisateurs et des automatisations sur l’instance et vérifiez que vous avez provisionné des ressources processeur et mémoire adéquates pour vos utilisateurs. Pour plus d’informations sur la supervision de la capacité et du niveau de performance de {% data variables.product.prodname_ghe_server %}, consultez « [Supervision de votre appliance](/admin/enterprise-management/monitoring-your-appliance) ».

Pour plus d’informations sur la configuration matérielle minimale requise pour {% data variables.location.product_location %}, prenez connaissance des considérations matérielles concernant la plateforme de votre instance.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Microsoft Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations)

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% ifversion ghes > 3.4 %}

Vous pouvez éventuellement limiter la consommation des ressources sur {% data variables.location.product_location %} en configurant une limite de débit pour {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Configuration des limites de débit](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-rate-limits-for-github-actions) ».

{% endif %}

## Exigences relatives au stockage externe

Pour activer {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_ghe_server %}, vous devez avoir accès au stockage d’objets blob externe.

{% data reusables.actions.enterprise-storage-contents %} Le volume de stockage nécessaire dépend de votre utilisation de {% data variables.product.prodname_actions %}. Seule une configuration de stockage externe est prise en charge, et vous ne pouvez pas utiliser plusieurs fournisseurs de stockage à la fois.

Toutes les autres données {% data variables.product.prodname_actions %}, telles que les fichiers de workflow dans la structure de fichiers d’un dépôt, sont stockées sur le volume de stockage de données pour {% data variables.location.product_location %}.

{% data variables.product.prodname_actions %} prend en charge les fournisseurs de stockage suivants :

* Stockage Blob Azure
* Amazon S3 {%- ifversion actions-ghes-gcp-storage %}
* Google Cloud Storage {%- endif %}
* Cluster MinIO compatible S3

{% note %}

**Remarque :** Ces fournisseurs de stockage sont les seuls à être pris en charge par {% data variables.product.company_short %} et à pouvoir proposer une assistance.

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

## Mise en réseau - Éléments à prendre en compte

{% data reusables.actions.proxy-considerations %} Pour plus d’informations sur l’utilisation d’un proxy avec {% data variables.product.prodname_ghe_server %}, consultez « [Configuration d’un serveur proxy web sortant](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server) ».

{% ifversion ghes %}

## Activation de {% data variables.product.prodname_actions %} avec votre fournisseur de stockage

Suivez l’une des procédures ci-dessous pour activer {% data variables.product.prodname_actions %} avec le fournisseur de stockage de votre choix :

* [Activation de GitHub Actions avec Stockage Blob Azure](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-azure-blob-storage)
* [Activation de GitHub Actions avec le stockage Amazon S3](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage) {%- ifversion actions-ghes-gcp-storage %}
* [Activation de GitHub Actions avec Google Cloud Storage](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-google-cloud-storage) {%- endif %}
* [Activation de GitHub Actions avec le stockage MinIO](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-storage)

## Gestion des autorisations d’accès pour {% data variables.product.prodname_actions %} dans votre entreprise

Vous pouvez utiliser des stratégies pour gérer l’accès à {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Application de stratégies GitHub Actions pour votre entreprise](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise) ».

## Ajout d’exécuteurs auto-hébergés

{% data reusables.actions.enterprise-github-hosted-runners %}

Pour exécuter des workflows {% data variables.product.prodname_actions %}, vous devez ajouter des exécuteurs auto-hébergés. Vous pouvez ajouter des exécuteurs auto-hébergés au niveau de l’entreprise, de l’organisation ou du dépôt. Pour plus d’informations, consultez « [Ajout d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/adding-self-hosted-runners) ».

## Gestion des actions qui peuvent être utilisées dans votre entreprise

Vous pouvez contrôler les actions que vos utilisateurs sont autorisés à utiliser dans votre entreprise. Cela inclut la configuration de {% data variables.product.prodname_github_connect %} pour l’accès automatique aux actions à partir de {% data variables.product.prodname_dotcom_the_website %}, ou la synchronisation manuelle des actions à partir de {% data variables.product.prodname_dotcom_the_website %}.

Pour plus d’informations, consultez « [À propos de l’utilisation d’actions dans votre entreprise](/admin/github-actions/about-using-actions-in-your-enterprise) ».

{% data reusables.actions.general-security-hardening %}

{% endif %}

## Noms réservés

Quand vous activez {% data variables.product.prodname_actions %} pour votre entreprise, deux organisations sont créées : `github` et `actions`. Si votre entreprise utilise déjà le nom d’organisation `github`, `github-org` (ou `github-github-org` si `github-org` est aussi utilisé) est utilisé à la place. Si votre entreprise utilise déjà le nom d’organisation `actions`, `github-actions` (ou `github-actions-org` si `github-actions` est aussi utilisé) est utilisé à la place. Une fois les actions activées, vous ne pouvez plus utiliser ces noms.
