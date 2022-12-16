---
title: Configuration des connexions SSH sur votre instance
shortTitle: Configure SSH connections
intro: 'Vous pouvez accroître la sécurité de {% data variables.location.product_location %} en configurant les algorithmes SSH que les clients peuvent utiliser pour établir une connexion.'
permissions: 'Site administrators can configure SSH connections to a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 9b2cc81a447018eef350e1c53857dd5a74a3099a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107540'
---
## À propos des connexions SSH sur votre instance

{% data reusables.enterprise.about-ssh-ports %}

Pour prendre en charge les clients SSH dans votre environnement, vous pouvez configurer les types de connexions qu’acceptera {% data variables.location.product_location %}.

## Configuration des connexions SSH avec des clés RSA

Lorsque les utilisateurs effectuent des opérations Git sur {% data variables.location.product_location %} via SSH sur le port 22, le client peut s’authentifier avec une clé RSA. Le client peut signer la tentative à l’aide de la fonction de hachage SHA-1. Dans ce contexte, la fonction de hachage SHA-1 n’est plus sécurisée. Pour plus d’informations, consultez « [ShA-1](https://en.wikipedia.org/wiki/SHA-1) » sur Wikipédia.

Par défaut{% ifversion ghes < 3.7 %} sur {% data variables.product.product_name %} 3.6 et ultérieur{% endif %}, les connexions SSH qui répondent aux **deux** conditions suivantes échouent.

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

Vous pouvez ajuster la date limite. Si l’utilisateur a chargé la clé RSA avant la date limite, le client peut continuer à se connecter en utilisant SHA-1 tant que la clé reste valide. Vous pouvez également rejeter toutes les connexions SSH authentifiées avec une clé RSA si le client signe la connexion en utilisant la fonction de hachage SHA-1.

Quel que soit le paramètre que vous choisissez pour votre instance, les clients peuvent continuer à se connecter en utilisant n’importe quelle clé RSA signée avec une fonction de hachage SHA-2.

Si vous utilisez une autorité de certification SSH, les connexions échouent si la date `valid_after` du certificat est postérieure à la date limite. Pour plus d’informations, consultez « [À propos des autorités de certification SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities) ».

Pour plus d’informations, consultez [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Auditez les journaux de votre instance pour les connexions qui utilisent des algorithmes non sécurisés ou des fonctions de hachage avec l’utilitaire `ghe-find-insecure-git-operations`. Pour plus d’informations, consultez « [Utilitaires en ligne de commande](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-find-insecure-git-operations) ».
1. Pour configurer une date limite après laquelle {% data variables.location.product_location %} refusera les connexions des clients qui utilisent une clé RSA chargée après la date si la connexion est signée par la fonction de hachage SHA-1, entrez la commande suivante. Remplacez _**RFC-3399-UTC-TIMESTAMP**_ par un horodatage UTC RFC 3399 valide. Par exemple, la valeur par défaut, 1er août 2022, serait représentée sous la forme `2022-08-01T00:00:00Z`. Pour plus d’informations, consultez la [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) sur le site web IETF.

   <pre>
   $ ghe-config app.gitauth.rsa-sha1 RFC-3339-UTC-TIMESTAMP
   </pre>
1. Vous pouvez aussi désactiver complètement les connexions SSH utilisant des clés RSA signées avec la fonction de hachage SHA-1. Pour cela, entrez la commande suivante.

   ```shell
   ghe-config app.gitauth.rsa-sha1 false
   ```
{% data reusables.enterprise.apply-configuration %}
