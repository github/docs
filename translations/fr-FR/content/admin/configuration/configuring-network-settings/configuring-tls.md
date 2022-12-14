---
title: Configuration de TLS
intro: 'Vous pouvez configurer Transport Layer Security (TLS) sur {% data variables.product.product_location %} afin d’utiliser un certificat signé par une autorité de certification de confiance.'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration
  - /enterprise/admin/guides/installation/about-tls
  - /enterprise/admin/installation/configuring-tls
  - /enterprise/admin/configuration/configuring-tls
  - /admin/configuration/configuring-tls
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: c11f78b69f5b251a63c0796d46bca4d6c926f002
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682332'
---
## À propos du protocole TLS (Transport Layer Security)

TLS, qui a remplacé SSL, est activé et configuré avec un certificat auto-signé au premier démarrage de {% data variables.product.prodname_ghe_server %}. Sachant que les certificats auto-signés ne sont pas approuvés par les navigateurs web et les clients Git, ces clients affichent des avertissements de certificat tant que vous ne désactivez pas TLS ou que vous ne chargez pas un certificat signé par une autorité approuvée, comme Let’s Encrypt.

L’appliance {% data variables.product.prodname_ghe_server %} envoie des en-têtes HTTP Strict Transport Security quand SSL est activé. La désactivation du protocole TLS entraîne la perte d’accès des utilisateurs à l’appliance, car leurs navigateurs n’autorisent pas un déclassement du protocole à HTTP. Pour plus d’informations, consultez « [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) » sur Wikipédia.

{% data reusables.enterprise_installation.terminating-tls %}

Pour permettre aux utilisateurs d’utiliser FIDO U2F pour l’authentification à 2 facteurs, vous devez activer TLS pour votre instance. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication) ».

## Prérequis

Pour utiliser TLS en production, vous devez disposer d’un certificat dans un format PEM non chiffré signé par une autorité de certification approuvée.

Votre certificat aura besoin que d’autres noms d’objet soient configurés pour les sous-domaines listés dans « [Activation de l’isolation de sous-domaine](/enterprise/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation) » et devra inclure la chaîne de certificats complète s’il a été signé par une autorité de certification intermédiaire. Pour plus d’informations, consultez « [Subject Alternative Name](http://en.wikipedia.org/wiki/SubjectAltName) » sur Wikipédia.

Vous pouvez générer une demande de signature de certificat (CSR) pour votre instance à l’aide de la commande `ghe-ssl-generate-csr`. Pour plus d’informations, consultez « [Utilitaires en ligne de commande](/enterprise/admin/guides/installation/command-line-utilities/#ghe-ssl-generate-csr) ».

Votre clé doit être une clé RSA et ne doit pas contenir de phrase secrète. Pour plus d’informations, consultez « [Suppression de la phrase secrète de votre fichier de clé](/admin/guides/installation/troubleshooting-ssl-errors#removing-the-passphrase-from-your-key-file) ».

## Chargement d’un certificat TLS personnalisé

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %} {% data reusables.enterprise_management_console.select-tls-only %}
4. Sous « Prise en charge des protocoles TLS », sélectionnez les protocoles que vous souhaitez autoriser.
  ![Cases d’option pour choisir des protocoles TLS](/assets/images/enterprise/management-console/tls-protocol-support.png)
5. Sous « Certificat », cliquez sur **Choisir un fichier** pour choisir le certificat TLS ou la chaîne de certificats (au format PEM) à installer. Ce fichier possède généralement une extension *.pem*, *.crt* ou *.cer*.
  ![Bouton permettant de rechercher un fichier de certificat TLS](/assets/images/enterprise/management-console/install-tls-certificate.png)
6. Sous « Clé non chiffrée », cliquez sur **Choisir un fichier** pour choisir la clé RSA (au format PEM) à installer. Ce fichier possède généralement une extension *.key*.
  ![Bouton permettant de rechercher un fichier de clé TLS](/assets/images/enterprise/management-console/install-tls-key.png)

{% data reusables.enterprise_management_console.save-settings %}

## À propos de la prise en charge de Let’s Encrypt

Let’s Encrypt est une autorité de certification publique qui émet des certificats TLS gratuits et automatisés qui sont approuvés par les navigateurs utilisant le protocole ACME. Vous pouvez obtenir et renouveler automatiquement des certificats Let’s Encrypt sur votre appliance sans aucun besoin de maintenance manuelle.

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

Quand vous permettez l’automatisation de la gestion de certificats TLS avec Let’s Encrypt, {% data variables.product.product_location %} contacte les serveurs Let’s Encrypt pour obtenir un certificat. Pour renouveler un certificat, les serveurs Let’s Encrypt doivent valider le contrôle du nom de domaine configuré avec des requêtes HTTP entrantes.

Vous pouvez aussi utiliser l’utilitaire en ligne de commande `ghe-ssl-acme` sur {% data variables.product.product_location %} pour générer automatiquement un certificat Let’s Encrypt. Pour plus d’informations, consultez « [Utilitaires en ligne de commande](/enterprise/admin/guides/installation/command-line-utilities#ghe-ssl-acme) ».

## Configuration de TLS avec Let’s Encrypt

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %} {% data reusables.enterprise_management_console.select-tls-only %}
5. Sélectionnez **Permettre l’automatisation de la gestion de certificats TLS avec Let’s Encrypt**.
  ![Case à cocher pour activer Let’s Encrypt](/assets/images/enterprise/management-console/lets-encrypt-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% data reusables.enterprise_management_console.privacy %}
7. Cliquez sur **Demander un certificat TLS**.
  ![Bouton Demander un certificat TLS](/assets/images/enterprise/management-console/request-tls-button.png)
8. Attendez que l’« État » passe de « DÉMARRÉ » à « TERMINÉ ».
   ![État de Let’s Encrypt](/assets/images/enterprise/management-console/lets-encrypt-status.png)
9. Cliquez sur **Enregistrer la configuration**.
