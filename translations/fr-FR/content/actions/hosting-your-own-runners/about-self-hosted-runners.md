---
title: À propos des exécuteurs auto-hébergés
intro: 'Vous pouvez héberger vos propres exécuteurs et personnaliser l’environnement utilisé pour exécuter les travaux dans vos workflows {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
ms.openlocfilehash: b570dbe3a5df607f0b02e0c7a42a6a7cfb860c80
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107564'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des exécuteurs auto-hébergés

Un exécuteur auto-hébergé est un système que vous déployez et gérez pour exécuter des travaux à partir de {% data variables.product.prodname_actions %} sur {% ifversion ghae or ghec %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}. Pour plus d’informations sur {% data variables.product.prodname_actions %}, consultez « [Présentation de {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %} ».{% elsif ghec or ghes or ghae %} » et « [À propos de {% data variables.product.prodname_actions %} pour les entreprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)».{% endif %}

{% data reusables.actions.self-hosted-runner-description %} {% data reusables.actions.self-hosted-runner-locations %}

Vous pouvez ajouter des exécuteurs auto-hébergés à différents niveaux dans la hiérarchie de gestion :
- Les exécuteurs au niveau du dépôt sont dédiés à un seul dépôt.
- Les exécuteurs au niveau de l’organisation peuvent traiter des travaux pour plusieurs dépôts d’une organisation.
- Les exécuteurs au niveau de l’entreprise peuvent être affectés à plusieurs organisations dans un compte d’entreprise.

{% data reusables.actions.self-hosted-runner-architecture %} {% data reusables.actions.runner-app-open-source %} Lorsqu’une nouvelle version est publiée, l’application de l’exécuteur est mise à jour automatiquement lorsqu’un travail est affecté à l’exécuteur, ou dans un délai d’une semaine après publication si aucun travail n’est affecté à l’exécuteur.

{% ifversion ghes %} {% note %}

**Remarque :** {% data reusables.actions.upgrade-runners-before-upgrade-ghes %}

{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

Pour plus d’informations sur l’installation et l’utilisation d’exécuteurs auto-hébergés, consultez « [Ajout d’exécuteurs auto-hébergés](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)» et « [Utilisation d’exécuteurs auto-hébergés dans un workflow](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow) ».

## {% ifversion fpt or ghec or ghes %}Différences entre exécuteurs hébergés par {% data variables.product.prodname_dotcom %} et {% elsif ghae %}Caractéristiques des {% endif %}exécuteurs auto-hébergés

{% ifversion fpt or ghec or ghes %} Les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} offrent un moyen plus rapide et plus simple d’exécuter vos workflows, tandis que les exécuteurs auto-hébergés{% elsif ghae %}Les exécuteurs auto-hébergés{% endif %} sont un moyen hautement configurable d’exécuter des workflows dans votre propre environnement personnalisé. {% ifversion ghae %}Les exécuteurs auto-hébergés :{% endif %}

{% ifversion fpt or ghec or ghes %} **Les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} :**
- Recevez les mises à jour automatiques pour le système d’exploitation, les packages et les outils préinstallés et l’application de l’exécuteur auto-hébergé.
- Sont gérés et tenus à jour par {% data variables.product.prodname_dotcom %}.
- Fournissez une instance claire pour chaque exécution de travail.
- Utilisent des minutes gratuites sur votre plan {% data variables.product.prodname_dotcom %}, avec des tarifs à la minute appliqués après dépassement des minutes gratuites.

**Les exécuteurs auto-hébergés :** {% endif %}
- Reçoivent des mises à jour automatiques uniquement pour l’application d’exécuteur auto-hébergée{% ifversion fpt or ghec or ghes > 3.4 or ghae %}, bien que vous puissiez désactiver les mises à jour automatiques de l’exécuteur. Pour plus d’informations sur le contrôle des mises à jour logicielles de l’exécuteur sur les exécuteurs auto-hébergés, consultez « [Mise à l’échelle automatique avec des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#controlling-runner-software-updates-on-self-hosted-runners) ».{% else %}.{% endif %} Vous êtes responsable de la mise à jour du système d’exploitation et de tous les autres logiciels.
- Peut utiliser des services cloud ou des ordinateurs locaux que vous payez déjà.
- Sont personnalisables en termes de matériel, de système d’exploitation, de logiciel et de sécurité.
- Il n’est pas nécessaire d’avoir une instance claire pour chaque exécution de travail.
- Peuvent être utilisés gratuitement avec {% data variables.product.prodname_actions %}, mais vous êtes responsable du coût de maintenance de vos machines d’exécuteur.{% ifversion ghec or ghes or ghae %}
- Peuvent être organisés en groupes pour restreindre l’accès à des {% ifversion restrict-groups-to-workflows %}workflows, {% endif %}organisations et dépôts spécifiques. Pour plus d’informations, consultez « [Gestion de l’accès aux exécuteurs auto-hébergés à l’aide de groupes](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups) ».{% endif %}

## Configuration requise pour les machines d’exécuteur auto-hébergé

Vous pouvez utiliser n’importe quelle machine en tant qu’exécuteur auto-hébergé tant qu’elle répond aux exigences suivantes :

* Vous pouvez installer et exécuter l’application d’exécuteur auto-hébergée sur la machine. Pour plus d’informations, consultez « [Architectures et systèmes d’exploitation pris en charge pour les exécuteurs auto-hébergés](#supported-architectures-and-operating-systems-for-self-hosted-runners) ».
* La machine peut communiquer avec {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Communication entre les exécuteurs auto-hébergés et {% data variables.product.product_name %}](#communication-requirements) ».
* La machine dispose de suffisamment de ressources matérielles pour le type de workflows que vous envisagez d’exécuter. L’application d’exécuteur auto-hébergé elle-même nécessite uniquement des ressources minimales.
* Si vous souhaitez exécuter des workflows qui utilisent des actions de conteneur Docker ou des conteneurs de service, vous devez utiliser une machine Linux et Docker doit être installé.

## Mise à l’échelle automatique de vos exécuteurs auto-hébergés

Vous pouvez augmenter ou diminuer automatiquement le nombre d’exécuteurs auto-hébergés dans votre environnement en réponse aux événements de webhook que vous recevez. Pour plus d’informations, consultez « [Mise à l’échelle automatique avec des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners) ».

## Limites d’utilisation

Il existe des limites sur l’utilisation de {% data variables.product.prodname_actions %} lors de l’utilisation d’exécuteurs auto-hébergés. Ces limites sont susceptibles d’être modifiées.

{% data reusables.actions.usage-workflow-run-time %}
- **Durée de file d’attente des travaux**: Chaque travail pour les exécuteurs auto-hébergés peut être mis en file d’attente pendant un maximum de 24 heures. Si un exécuteur auto-hébergé ne démarre pas l’exécution du travail dans cette limite, le travail est arrêté et n’aboutit pas.
{% data reusables.actions.usage-api-requests %}
- **Matrice de travaux** : {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

## Continuité des workflows pour les exécuteurs auto-hébergés

{% data reusables.actions.runner-workflow-continuity %}

## Architectures et systèmes d’exploitation pris en charge pour les exécuteurs auto-hébergés

Les systèmes d’exploitation suivants sont pris en charge pour l’application d’exécuteur auto-hébergé.

### Linux

- Red Hat Enterprise Linux 7 ou version ultérieure
- CentOS 7 ou version ultérieure
- Oracle Linux 7
- Fedora 29 ou version ultérieure
- Debian 9 ou version ultérieure
- Ubuntu 16.04 ou version ultérieure
- Linux Mint 18 ou version ultérieure
- openSUSE 15 ou version ultérieure
- SUSE Enterprise Linux (SLES) 12 SP2 ou version ultérieure

### Windows

- Windows 7 64 bits
- Windows 8.1 64 bits
- Windows 10 64 bits
- Windows Server 2012 R2 64 bits
- Windows Server 2019 64 bits

### macOS

- macOS 10.13 (High Sierra) ou version ultérieure

### Architectures

Les architectures de processeur suivantes sont prises en charge pour l’application d’exécuteur auto-hébergé.

- `x64` – Linux, macOS, Windows.
- `ARM64` - Linux{% ifversion actions-macos-arm %}, macOS{% endif %}{% ifversion actions-windows-arm %}, Windows (actuellement en version bêta){% endif %}.
- `ARM32` - Linux.

{% ifversion ghes %}

## Actions prises en charge sur les exécuteurs auto-hébergés

Une configuration supplémentaire peut être nécessaire pour utiliser des actions à partir de {% data variables.product.prodname_dotcom_the_website %} avec {% data variables.product.prodname_ghe_server %}, ou pour utiliser les actions `actions/setup-LANGUAGE` avec des exécuteurs auto-hébergés qui n’ont pas accès à Internet. Pour plus d’informations, consultez « [Gestion de l’accès aux actions à partir de {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/managing-access-to-actions-from-githubcom)» et contactez votre administrateur de site {% data variables.product.prodname_enterprise %}.

{% endif %}

<a name="communication-requirements"></a>

## Communication entre les exécuteurs auto-hébergés et {% data variables.product.product_name %}

Les exécuteurs auto-hébergés se connectent à {% data variables.product.product_name %} pour recevoir les affectations de travaux et pour télécharger les nouvelles versions de l’application d’exécuteur. L’exécuteur auto-hébergé utilise une _interrogation longue_ {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} qui ouvre une connexion à {% data variables.product.product_name %} pendant 50 secondes, et si aucune réponse n’est reçue, il expire et crée une nouvelle interrogation longue. L’application doit s’exécuter sur la machine pour accepter et exécuter des travaux {% data variables.product.prodname_actions %}.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

{% ifversion fpt or ghec %} Étant donné que l’exécuteur auto-hébergé ouvre une connexion à {% data variables.location.product_location %}, vous n’avez pas besoin d’autoriser {% data variables.product.prodname_dotcom %} à établir des connexions entrantes à votre exécuteur auto-hébergé.
{% elsif ghes or ghae %} Seule une connexion sortante de l’exécuteur vers {% data variables.location.product_location %} est requise. Il n’est pas nécessaire d’établir une connexion entrante de {% data variables.location.product_location %} vers l’exécuteur.
{%- endif %}

{% ifversion ghes %}

{% data variables.product.product_name %} doit accepter les connexions entrantes de vos exécuteurs via {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} au sous-domaine de l’API et au nom d’hôte de {% data variables.location.product_location %}, et vos exécuteurs doivent autoriser les connexions sortantes via {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} au sous-domaine de l’API et au nom d’hôte de {% data variables.location.product_location %}.

{% elsif ghae %}

Vous devez vous assurer que l’exécuteur auto-hébergé dispose d’un accès réseau approprié pour communiquer avec votre URL {% data variables.product.product_name %} et ses sous-domaines. Par exemple, si votre sous-domaine pour {% data variables.product.product_name %} est `octoghae`, vous devez autoriser l’exécuteur auto-hébergé à accéder à `octoghae.githubenterprise.com`, `api.octoghae.githubenterprise.com` et `codeload.octoghae.githubenterprise.com`.

Si vous utilisez une liste verte d’adresses IP, vous devez ajouter l’adresse IP de votre exécuteur auto-hébergé à cette liste verte. Pour plus d’informations, consultez « [Gestion des adresses IP autorisées pour votre organisation](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list) ».

{% endif %}

{% ifversion fpt or ghec %}

Vous devez vous assurer que la machine dispose de l’accès réseau approprié pour communiquer avec les hôtes {% data variables.product.prodname_dotcom %} listés ci-dessous. Certains hôtes sont requis pour les opérations d’exécuteur essentielles, tandis que d’autres hôtes ne sont requis que pour certaines fonctionnalités.

{% note %}

**Remarque :** Certains des domaines répertoriés ci-dessous sont configurés à l’aide d’enregistrements `CNAME`. Certains pare-feu peuvent nécessiter l’ajout de règles récursives pour tous les enregistrements `CNAME`. Notez que les enregistrements `CNAME` peuvent changer à l’avenir et que seuls les domaines listés ci-dessous resteront constants.

{% endnote %}

**Requis pour les opérations essentielles :**

```
github.com
api.github.com
```

**Requis pour télécharger les actions :**

```
codeload.github.com
```

**Requis pour les mises à jour de la version de l’exécuteur :**

```
objects.githubusercontent.com
objects-origin.githubusercontent.com
github-releases.githubusercontent.com
github-registry-files.githubusercontent.com
```

**Requis pour charger/télécharger les caches et les artefacts de workflow :**    

```
*.blob.core.windows.net
```

**Requis pour récupérer les jetons OIDC :**

```
*.actions.githubusercontent.com
```

**Nécessaire pour le téléchargement ou la publication de packages ou de conteneurs dans les packages {% data variables.product.prodname_dotcom %} :**

```
*.pkg.github.com
ghcr.io
```

En outre, votre workflow peut nécessiter l’accès à d’autres ressources réseau.

Si vous utilisez une liste verte d’adresses IP pour votre compte d’organisation ou d’entreprise {% data variables.product.prodname_dotcom %}, vous devez ajouter l’adresse IP de votre exécuteur auto-hébergé à cette liste verte. Pour plus d’informations, consultez « [Gestion des adresses IP autorisées pour votre organisation](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list) » ou « [Application de stratégies pour les paramètres de sécurité dans votre entreprise](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %}. »{% endif %}

{% else %}

{% ifversion ghes %}Les exécuteurs auto-hébergés ne nécessitent pas d’accès Internet externe pour fonctionner. Par conséquent, vous pouvez utiliser le routage réseau pour diriger la communication entre l’exécuteur auto-hébergé et {% data variables.location.product_location %}. Par exemple, vous pouvez attribuer une adresse IP privée à votre exécuteur auto-hébergé et configurer le routage pour envoyer le trafic à {% data variables.location.product_location %}, sans avoir besoin que le trafic traverse un réseau public.{% endif %}

{% endif %}

{% ifversion ghae %} Si vous utilisez une liste verte d’adresses IP pour votre compte d’organisation ou d’entreprise {% data variables.product.prodname_dotcom %}, vous devez ajouter l’adresse IP de votre exécuteur auto-hébergé à cette liste verte. Pour plus d’informations, consultez « [Gestion des adresses IP autorisées pour votre organisation](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list) ».
{% endif %}

Vous pouvez également utiliser des exécuteurs auto-hébergés avec un serveur proxy. Pour plus d’informations, consultez « [Utilisation d’un serveur proxy avec des exécuteurs auto-hébergés](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners) ».

Pour plus d’informations sur la résolution des problèmes courants de connectivité réseau, consultez « [Surveillance des exécuteurs auto-hébergés et résolution des problèmes](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#troubleshooting-network-connectivity) ».

{% ifversion ghes or ghae %}

## Communication entre les exécuteurs auto-hébergés et {% data variables.product.prodname_dotcom_the_website %}

Les exécuteurs auto-hébergés n’ont pas besoin de se connecter à {% data variables.product.prodname_dotcom_the_website %}, à moins que vous ayez activé l’accès automatique aux actions {% data variables.product.prodname_dotcom_the_website %} pour {% data variables.location.product_location %}. Pour plus d’informations, consultez « [À propos de l’utilisation d’actions dans votre entreprise](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise) ».

Si vous avez activé l’accès automatique aux actions {% data variables.product.prodname_dotcom_the_website %}, l’exécuteur auto-hébergé se connecte directement à {% data variables.product.prodname_dotcom_the_website %} pour télécharger les actions. Vous devez vous assurer que la machine dispose de l’accès réseau approprié pour communiquer avec les URL {% data variables.product.prodname_dotcom %} listées ci-dessous. 

```
github.com
api.github.com
codeload.github.com
```

{% note %}

**Remarque :** Certains des domaines listés ci-dessus sont configurés à l’aide d’enregistrements `CNAME`. Certains pare-feu peuvent nécessiter l’ajout de règles récursives pour tous les enregistrements `CNAME`. Notez que les enregistrements `CNAME` peuvent changer à l’avenir et que seuls les domaines listés ci-dessus resteront constants.

{% endnote %}

{% endif %}

## Sécurité des exécuteurs auto-hébergés

{% ifversion fpt or ghec %}

{% data reusables.actions.self-hosted-runner-security %}

{% endif %}

{% ifversion fpt or ghec %}

Cela ne pose pas de problème avec les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}, car chaque exécuteur hébergé par {% data variables.product.prodname_dotcom %} est toujours une machine virtuelle isolée propre, et parce qu’il est détruit à la fin de l’exécution du travail.

{% endif %}

Les workflows non approuvés qui s’exécutent sur votre exécuteur auto-hébergé présentent des risques de sécurité importants pour votre machine et votre environnement réseau, en particulier si votre machine conserve son environnement entre les travaux. Voici certains des risques encourus :

* Programmes malveillants s’exécutant sur la machine.
* Échappement du bac à sable de l’exécuteur de la machine.
* Exposition de l’accès à l’environnement réseau de la machine.
* Persistance de données indésirables ou dangereuses sur la machine.

Pour plus d’informations sur le renforcement de la sécurité pour les exécuteurs auto-hébergés, consultez « [Renforcement de la sécurité pour {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners) ».

{% ifversion ghec or ghes or ghae %}

## Pour aller plus loin

- « [Bien démarrer avec les exécuteurs auto-hébergés pour votre entreprise](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise) »

{% endif %}
