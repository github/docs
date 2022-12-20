---
title: Activation de l’isolation de sous-domaine
intro: 'Vous pouvez configurer l’isolement de sous-domaine pour séparer de manière sécurisée le contenu fourni par l’utilisateur des autres parties de votre appliance {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
  - /admin/configuration/enabling-subdomain-isolation
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
shortTitle: Enable subdomain isolation
ms.openlocfilehash: 6ce23de3646d3ca3f4523ec7716907f8b5430564
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193096'
---
## À propos de l’isolation de sous-domaine

L’isolation de sous-domaine atténue les effets du scripting intersite et des autres vulnérabilités associées. Pour plus d’informations, consultez « [Cross-site scripting](http://en.wikipedia.org/wiki/Cross-site_scripting) » sur Wikipédia. Nous vous recommandons vivement d’activer l’isolation de sous-domaine sur {% data variables.location.product_location %}.

Quand l’isolation de sous-domaine est activée, {% data variables.product.prodname_ghe_server %} remplace plusieurs chemins par des sous-domaines. Après avoir activé l’isolation de sous-domaine, les tentatives d’accès aux chemins précédents pour un contenu fourni par l’utilisateur, par exemple `http(s)://HOSTNAME/raw/`, peuvent retourner des erreurs `404`.

{% data reusables.enterprise_site_admin_settings.3-7-new-subdomains %}

| Chemin sans isolation de sous-domaine  | Chemin avec isolation de sous-domaine   |
| --- | --- |
| `http(s)://HOSTNAME/` | `http(s)://docker.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/npm/` | `https://npm.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/rubygems/` | `https://rubygems.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/maven/` | `https://maven.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/nuget/` | `https://nuget.HOSTNAME/` |
| `http(s)://HOSTNAME/assets/` | `http(s)://assets.HOSTNAME/` |
| `http(s)://HOSTNAME/avatars/` | `http(s)://avatars.HOSTNAME/` |
| `http(s)://HOSTNAME/codeload/` | `http(s)://codeload.HOSTNAME/` |
| `http(s)://HOSTNAME/gist/` | `http(s)://gist.HOSTNAME/` |
| `http(s)://HOSTNAME/media/` | `http(s)://media.HOSTNAME/` |
{%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/notebooks/` | `http(s)://notebooks.HOSTNAME/` | {%- endif %} | `http(s)://HOSTNAME/pages/` | `http(s)://pages.HOSTNAME/` | | `http(s)://HOSTNAME/raw/` | `http(s)://raw.HOSTNAME/` | {%- ifversion ghes < 3.7 %} | `http(s)://HOSTNAME/render/` | `http(s)://render.HOSTNAME/` | {%- endif %} | `http(s)://HOSTNAME/reply/` | `http(s)://reply.HOSTNAME/` | | `http(s)://HOSTNAME/uploads/` | `http(s)://uploads.HOSTNAME/` | {%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/viewscreen/` | `http(s)://viewscreen.HOSTNAME/` | {%- endif %} {%- ifversion ghes > 3.4 %} | Non pris en charge | `https://containers.HOSTNAME/` | {%- endif %}

## Prérequis

{% data reusables.enterprise_installation.disable-github-pages-warning %}

Avant d’activer l’isolation de sous-domaine, vous devez configurer les paramètres réseau de votre nouveau domaine.

- Spécifiez un nom de domaine valide en guise de nom d’hôte, plutôt qu’une adresse IP. Pour plus d’informations, consultez « [Configuration d’un nom d’hôte](/enterprise/admin/guides/installation/configuring-a-hostname) ».

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

- Configurez un enregistrement DNS (Domain Name System) générique ou des enregistrements DNS individuels pour les sous-domaines listés ci-dessus. Nous vous recommandons de créer un enregistrement A pour `*.HOSTNAME` qui pointe vers l’adresse IP de votre serveur. Ainsi, vous n’aurez pas besoin de créer plusieurs enregistrements pour chaque sous-domaine.
- Obtenez un certificat TLS (Transport Layer Security) générique pour `*.HOSTNAME` avec un autre nom d’objet (SAN) pour `HOSTNAME` et le domaine générique `*.HOSTNAME`. Par exemple, si votre nom d’hôte est `github.octoinc.com`, obtenez un certificat en définissant une valeur de nom commun de `*.github.octoinc.com` et une valeur d’autre nom d’objet de `github.octoinc.com` et `*.github.octoinc.com`.
- Activez TLS sur votre appliance. Pour plus d’informations, consultez « [Configuration du protocole TLS](/enterprise/admin/guides/installation/configuring-tls/) ».

## Activation de l’isolation de sous-domaine

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. Sélectionnez **Isolation de sous-domaine (recommandé)** .
  ![Case à cocher permettant d’activer l’isolation de sous-domaine](/assets/images/enterprise/management-console/subdomain-isolation.png) {% data reusables.enterprise_management_console.save-settings %}
