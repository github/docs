---
title: Gestion des exécuteurs auto-hébergés pour les mises à jour Dependabot dans votre entreprise
intro: 'Vous pouvez créer des exécuteurs dédiés pour {% data variables.location.product_location %}, qui permettent à {% data variables.product.prodname_dependabot %} de créer des demandes de tirage (pull requests) afin de sécuriser et gérer les dépendances utilisées dans les référentiels de votre entreprise.'
redirect_from:
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Dependabot updates
ms.openlocfilehash: 0f21d4bc91e519f7af89ff04bd65a6ace742f430
ms.sourcegitcommit: d411e8278b73efd0051816625c0b235ab7c263e9
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181332'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## À propos des exécuteurs auto-hébergés pour les {% data variables.product.prodname_dependabot_updates %}

Vous pouvez aider les utilisateurs de {% data variables.location.product_location %} à créer et à gérer le code sécurisé en configurant la sécurité et les mises à jour de version de {% data variables.product.prodname_dependabot %}. Avec les {% data variables.product.prodname_dependabot_updates %}, les développeurs peuvent configurer des dépôts afin de tenir automatiquement à jour et en sécurité leurs dépendances. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_dependabot %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ».

Pour utiliser les {% data variables.product.prodname_dependabot_updates %} sur {% data variables.location.product_location %}, vous devez configurer des exécuteurs auto-hébergés afin de créer les demandes de tirage (pull requests) mettant à jour les dépendances.

## Prérequis

{% ifversion dependabot-updates-github-connect %} La configuration des exécuteurs autohébergés n’est qu’une étape intermédiaire du processus d’activation des {% data variables.product.prodname_dependabot_updates %}. Il existe plusieurs étapes à suivre avant celles-ci, avec notamment la configuration de {% data variables.location.product_location %} pour utiliser {% data variables.product.prodname_actions %} avec des exécuteurs auto-hébergés. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_dependabot %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ».
{% else %} Avant de configurer des exécuteurs auto-hébergés pour les {% data variables.product.prodname_dependabot_updates %}, vous devez :

- Configurer {% data variables.location.product_location %} pour utiliser {% data variables.product.prodname_actions %} avec des exécuteurs auto-hébergés. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server) ».
- Activer les {% data variables.product.prodname_dependabot_alerts %} pour votre entreprise. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_dependabot %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ».
{% endif %}

## Configuration d’exécuteurs auto-hébergés pour les {% data variables.product.prodname_dependabot_updates %}

Après avoir configuré {% data variables.location.product_location %} pour utiliser {% data variables.product.prodname_actions %}, vous devez ajouter des exécuteurs auto-hébergés pour les {% data variables.product.prodname_dependabot_updates %}.

### Configuration système requise pour les exécuteurs {% data variables.product.prodname_dependabot %}

Les machines virtuelles que vous utilisez pour les exécuteurs {% data variables.product.prodname_dependabot %} doivent toutes respecter la configuration requise pour les exécuteurs auto-hébergés. Par ailleurs, elles doivent satisfaire les exigences suivantes.

- Système d’exploitation Linux
- architecture x64 {%- ifversion ghes < 3.5 %}
- Git installé {%- endif %}
- Docker installé avec un accès pour les utilisateurs des exécuteurs :
  - Nous vous recommandons d’installer Docker en mode sans racine et de configurer les exécuteurs de sorte qu’ils puissent accéder à Docker sans privilèges `root`.
  - Vous pouvez aussi installer Docker et accorder aux utilisateurs des exécuteurs des privilèges accrus pour exécuter Docker.

Les besoins en processeur et mémoire dépendent du nombre d’exécuteurs simultanés que vous déployez sur une machine virtuelle donnée. Pour indication, nous avons installé avec succès 20 exécuteurs sur un ordinateur à 2 processeurs de 8 Go, mais en fin de compte, vos besoins en processeur et mémoire varieront fortement en fonction des dépôts qui sont mis à jour. Certains écosystèmes demandent plus de ressources que d’autres.

Si vous spécifiez plus de 14 exécuteurs simultanés sur une machine virtuelle, vous devez aussi mettre à jour la configuration `/etc/docker/daemon.json` Docker pour accroître le nombre de réseaux par défaut que Docker peut créer.

```
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### Configuration réseau requise pour les exécuteurs {% data variables.product.prodname_dependabot %}

Les exécuteurs {% data variables.product.prodname_dependabot %} nécessitent un accès à l’Internet public, {% data variables.product.prodname_dotcom_the_website %}, et aux registres internes qui seront utilisés dans les mises à jour {% data variables.product.prodname_dependabot %}. Pour limiter les risques sur votre réseau interne, vous devez limiter l’accès de la machine virtuelle à votre réseau interne. Cela réduit les risques de dommages que pourraient subir vos systèmes internes si un exécuteur venait à télécharger une dépendance détournée.

### Ajout d’exécuteurs auto-hébergés pour les mises à jour {% data variables.product.prodname_dependabot %}

1. Provisionnez des exécuteurs auto-hébergés au niveau du dépôt, de l’organisation ou du compte d’entreprise. Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners) et « [Ajout d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/adding-self-hosted-runners) ».

2. Installez les exécuteurs auto-hébergés en respectant les exigences décrites ci-dessus. Par exemple, sur une machine virtuelle exécutant Ubuntu 20.04, vous devez :{% ifversion ghes < 3.5 %}

   - Vérifier que Git est installé : `command -v git`{% endif %}
   - Installer Docker et vérifiez que les utilisateurs d’exécuteurs ont accès à Docker. Pour plus d’informations, consultez la documentation Docker.
     - [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
     - Approche recommandée : [Exécuter le démon Docker en tant qu’utilisateur non racine (mode sans racine)](https://docs.docker.com/engine/security/rootless/)
     - Autre approche : [Gérer Docker en tant qu’utilisateur non racine](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   - Vérifiez que les exécuteurs ont accès à l’Internet public et ne peuvent accéder qu’aux réseaux internes dont a besoin {% data variables.product.prodname_dependabot %}.

3. Attribuez une étiquette `dependabot` à chaque exécuteur que doit utiliser {% data variables.product.prodname_dependabot %}. Pour plus d’informations, consultez « [Utilisation d’étiquettes avec les exécuteurs auto-hébergés](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner) ».

4. Si vous le souhaitez, permettez aux workflows déclenchés par {% data variables.product.prodname_dependabot %} d’utiliser plus que des autorisations en lecture seule et d’avoir accès aux secrets normalement disponibles. Pour plus d’informations, consultez « [Résolution des problèmes liés à {% data variables.product.prodname_actions %} pour votre entreprise](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions) ».
