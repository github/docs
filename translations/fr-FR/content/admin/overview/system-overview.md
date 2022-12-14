---
title: Vue d’ensemble du système
intro: 'En savoir plus sur les éléments internes du système, les fonctionnalités et la sécurité de {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/installation/system-overview
  - /enterprise/admin/overview/system-overview
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Security
  - Storage
ms.openlocfilehash: 656d68b267b4a739812b10e9409609f61cacdd5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066937'
---
## À propos de {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} {% data reusables.enterprise.github-distributes-ghes %} Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server). »

## Architecture de stockage

{% data variables.product.product_name %} nécessite deux volumes de stockage : l’un monté sur le chemin du *système de fichiers racine* (`/`) et l’autre sur le chemin du *système de fichiers utilisateur* (`/data/user`). Cette architecture simplifie les procédures de mise à niveau, de restauration et de récupération en séparant l’environnement logiciel en cours d’exécution des données d’application persistantes.

Le système de fichiers racine est inclus dans l’image de machine distribuée. Il contient le système d’exploitation de base et l’environnement d’application {% data variables.product.product_name %}. Le système de fichiers racine doit être traité comme système éphémère. Toutes les données du système de fichiers racine seront remplacées durant la mise à niveau vers les futures versions de {% data variables.product.product_name %}.

Le volume de stockage racine est divisé en deux partitions de même taille. L’une des partitions est montée comme système de fichiers racine (`/`). L’autre partition est montée uniquement pendant les mises à niveau et les restaurations des mises à niveau avec le chemin `/mnt/upgrade` pour faciliter les restaurations si nécessaire. Par exemple, si un volume racine de 200 Go est alloué, 100 Go seront alloués au système de fichiers racine et 100 Go seront réservés aux mises à niveau et restaurations.

Le système de fichiers racine contient des fichiers qui stockent les informations suivantes. Cette liste n’est pas exhaustive.

- Certificats d’autorité de certification personnalisée (dans `/usr/local/share/ca-certificates*`)
- Les configurations réseau personnalisées
- Les configurations de pare-feu personnalisées
- L’état de réplication

Le système de fichiers utilisateur contient des fichiers qui stockent la configuration et les données suivantes. Cette liste n’est pas exhaustive.

- Référentiels Git
- Bases de données
- Rechercher dans les index
- Contenu publié sur les sites {% data variables.product.prodname_pages %}
- Grands fichiers de {% data variables.large_files.product_name_long %}
- Environnements de hook de pré-réception

## Topologies de déploiement

Vous pouvez déployer {% data variables.product.product_name %} dans diverses topologies, comme une paire haute disponibilité. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server#about-deployment-topologies) ».

## Conservation des données et redondance des centres de données

{% warning %}

**Avertissement** : avant d’utiliser {% data variables.product.product_name %} dans un environnement de production, nous vous recommandons vivement de configurer des sauvegardes et un plan de reprise d’activité.

{% endwarning %}

{% data variables.product.product_name %} prend en charge les sauvegardes en ligne et incrémentielles avec {% data variables.product.prodname_enterprise_backup_utilities %}. Vous pouvez faire des captures instantanées incrémentielles sur une liaison réseau sécurisée (port d’administration SSH) sur de longues distances pour le stockage hors site ou géographiquement dispersé. Vous pouvez restaurer des instantanés sur le réseau dans une instance récemment provisionnée au moment de la récupération en cas de sinistre au niveau du centre de données principal.

Outre les sauvegardes réseau, les captures instantanées de disques VMware et AWS (EBS) des volumes de stockage utilisateur sont prises en charge quand l’instance est hors connexion ou en mode maintenance. Des captures instantanées de volume régulières peuvent être utilisées comme alternative peu coûteuse et peu complexe aux sauvegardes réseau avec les {% data variables.product.prodname_enterprise_backup_utilities %} si vos exigences de niveau de service permettent une maintenance hors connexion régulière.

Pour plus d’informations, consultez « [Configuration des sauvegardes sur votre appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance) ».

## Sécurité

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data variables.product.product_name %} inclut également des fonctionnalités de sécurité supplémentaires.

- [Système d’exploitation, logiciels et patchs](#operating-system-software-and-patches)
- [Sécurité du réseau](#network-security)
- [Sécurité des applications](#application-security)
- [Services externes et accès au support](#external-services-and-support-access)
- [Communication chiffrée](#encrypted-communication)
- [Utilisateurs et autorisations d’accès](#users-and-access-permissions)
- [Authentification](#authentication)
- [Journalisation des audits et des accès](#audit-and-access-logging)

### Système d’exploitation, logiciels et patchs

{% data variables.product.product_name %} exécute un système d’exploitation Linux personnalisé avec uniquement les applications et services nécessaires. {% data variables.product.company_short %} distribue les mises à jour correctives du système d’exploitation principal de l’instance dans le cadre du cycle de publication de produit standard. Les patchs résolvent les problèmes de fonctionnalité et de stabilité, ainsi que les problèmes de sécurité non critiques pour {% data variables.product.product_name %}. {% data variables.product.company_short %} fournit également les correctifs de sécurité critiques nécessaires en dehors du cycle de publication standard.

{% data variables.product.product_name %} est fourni comme appliance. De nombreux packages du système d’exploitation sont modifiés par rapport à la distribution Debian habituelle. Pour cette raison, nous n’assurons pas de support en cas de modification du système d’exploitation sous-jacent (ce qui inclut également les mises à niveau du système d’exploitation), conformément à la section 11.3 Exclusions du [contrat de licence et support de {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/license).

Actuellement, le système d’exploitation de base pour {% data variables.product.product_name %} est Debian 9 (Stretch), dont le support est assuré dans le cadre du programme Debian Long Term Support.  Il est envisagé de passer à un système d’exploitation de base plus récent avant la fin de la période de support du programme Debian LTS pour Stretch.

Des mises à jour correctives régulières sont publiées sur la page des [versions](https://enterprise.github.com/releases) de {% data variables.product.product_name %}. La page des [notes de publication](/admin/release-notes) fournit plus d’informations. Ces patchs contiennent généralement des correctifs de sécurité des fournisseurs et projets en amont qui ont été testés et dont la qualité a été approuvée par notre équipe d’ingénieurs. Il peut y avoir un léger délai entre le moment où la mise à jour en amont est publiée et le moment où elle est testée et groupée dans une prochaine mise en production de patchs pour {% data variables.product.product_name %}.

### Sécurité du réseau

Le pare-feu interne de {% data variables.product.product_name %} limite l’accès réseau aux services de l’instance. Seuls les services nécessaires au fonctionnement de l’appliance sont disponibles sur le réseau. Pour plus d’informations, consultez « [Ports réseau](/admin/configuration/configuring-network-settings/network-ports) ».

### Sécurité des applications

L’équipe de sécurité des applications {% data variables.product.company_short %} se concentre en permanence sur l’évaluation des vulnérabilités, les tests d’intrusion et la révision du code pour les produits {% data variables.product.company_short %}, notamment {% data variables.product.product_name %}. {% data variables.product.company_short %} collabore également avec des entreprises de sécurité externes pour fournir des évaluations de sécurité ponctuelles des produits {% data variables.product.company_short %} products.

### Services externes et accès au support

{% data variables.product.product_name %} peut fonctionner sans aucun accès en sortie de votre réseau vers des services externes. Vous pouvez éventuellement activer l’intégration à des services externes pour la remise des e-mails, le monitoring externe et le transfert de journal. Pour plus d’informations, consultez « [Configuration de l’e-mail pour les notifications](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications) », « [Configuration du monitoring externe](/admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring) » et « [Transfert de journaux](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding) ».

Vous pouvez collecter et envoyer manuellement des données de dépannage à {% data variables.contact.github_support %}. Pour plus d’informations, consultez « [Fourniture de données à {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support) ».

### Communication chiffrée

{% data variables.product.company_short %} conçoit {% data variables.product.product_name %} pour qu’il s’exécute derrière votre pare-feu d’entreprise. Pour sécuriser la communication sur le réseau, nous vous encourageons à activer le protocole TLS. {% data variables.product.product_name %} prend en charge les certificats TLS commerciaux 2048 bits et supérieurs pour le trafic HTTPS. Pour plus d’informations, consultez « [Configuration du protocole TLS](/admin/configuration/configuring-network-settings/configuring-tls) ».

Par défaut, l’instance offre également un accès SSH (Secure Shell) pour l’accès aux référentiels avec Git et l’accès à des fins d’administration. Pour plus d’informations, consultez « [À propos de SSH](/authentication/connecting-to-github-with-ssh/about-ssh) » et « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh) ».

{% ifversion ghes > 3.3 %}

Si vous configurez l’authentification SAML pour {% data variables.product.product_location %}, vous pouvez activer les assertions chiffrées entre l’instance et votre fournisseur d’identité SAML. Pour plus d’informations, consultez « [Utilisation de SAML](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-saml#enabling-encrypted-assertions) ».

{% endif %}

### Utilisateurs et autorisations d’accès

{% data variables.product.product_name %} fournit trois types de comptes.

- Le compte d’utilisateur Linux `admin` a un accès contrôlé au système d’exploitation sous-jacent et notamment un accès direct au système de fichiers et à la base de données. Un petit groupe d’administrateurs approuvés doit avoir accès à ce compte par SSH. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh) ».
- Les comptes d’utilisateur dans l’application web de l’instance ont un accès complet à leurs propres données et à toutes les données auxquelles d’autres utilisateurs ou organisations accordent explicitement l’accès.
- Les administrateurs de site dans l’application web de l’instance sont des comptes d’utilisateur qui peuvent gérer les paramètres d’application web et d’instance de haut niveau, les paramètres de compte d’utilisateur et d’organisation et les données de référentiel.

Pour plus d’informations sur les autorisations utilisateur de {% data variables.product.product_name %}, consultez « [Autorisations d’accès sur {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/access-permissions-on-github) ».

### Authentification

{% data variables.product.product_name %} fournit quatre méthodes d’authentification.

- L’authentification par clé publique SSH fournit l’accès aux dépôts avec Git et l’accès à l’interpréteur de commandes d’administration. Pour plus d’informations, consultez « [À propos de SSH](/authentication/connecting-to-github-with-ssh/about-ssh) » et « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh) ».
- L’authentification par nom d’utilisateur et mot de passe avec des cookies HTTP permet d’accéder aux applications web et de gérer les sessions avec l’authentification à 2 facteurs facultative. Pour plus d’informations, consultez « [Utilisation de l’authentification intégrée](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication) ».
- L’authentification LDAP, SAML ou CAS externe à l’aide d’un service LDAP, d’un fournisseur d’identité (IdP) SAML ou d’un autre service compatible fournit l’accès à l’application web. Pour plus d’informations, consultez « [Gestion d’IAM pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise) ».
- Quant à l’authentification OAuth et aux jetons d’accès personnel, ils fournissent l’accès aux données et API du dépôt Git pour les services et les clients externes. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) ».

### Journalisation des audits et des accès

{% data variables.product.product_name %} stocke les journaux du système d’exploitation et des applications classiques. L’application écrit également des journaux d’audit et de sécurité détaillés, que {% data variables.product.product_name %} stocke de façon permanente. Vous pouvez transférer les deux types de journaux en temps réel vers plusieurs destinations avec le protocole `syslog-ng`. Pour plus d’informations, consultez « [À propos du journal d’audit de votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise) » et « [Transfert de journaux](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding) ».

Les journaux d’accès et d’audit incluent notamment les informations suivantes.

#### Accéder aux journaux

- Journaux de serveur web complets des accès au navigateur et aux API
- Journaux complets des accès aux données de dépôt avec les protocoles Git, HTTPS et SSH
- Journaux des accès administratifs avec HTTPS et SSH

#### Journaux d’audit

- Connexions utilisateur, réinitialisations de mot de passe, demandes TFA, modifications des paramètres de messagerie et modifications des applications et API autorisées
- Actions des administrateurs de site telles que le déverrouillage de dépôts et de comptes d’utilisateur
- Événements de poussée (push) dans un dépôt, octrois d’accès à un dépôt, transferts et renommages de dépôt
- Changements d’appartenance aux organisations et notamment la création et la destruction d’une équipe

## Dépendances open source pour {% data variables.product.product_name %}

Vous pouvez voir une liste complète des dépendances dans la version de votre instance de {% data variables.product.product_name %}, ainsi que la licence de chaque projet à l’emplacement `http(s)://HOSTNAME/site/credits`.

Des tarballs avec une liste complète des dépendances et des métadonnées associées sont disponibles sur votre instance.

- Pour les dépendances communes à toutes les plateformes, sous `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`
- Pour les dépendances spécifiques à une plateforme, sous `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`

Des tarballs avec une liste complète des dépendances et métadonnées sont également disponibles à l’adresse `https://enterprise.github.com/releases/<version>/download.html`.

## Pour aller plus loin

- « [Configuration d’une version d’évaluation de {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server) »
- « [Configuration d’une instance de {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance) »
