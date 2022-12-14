---
title: Environnements de pré-réception
intro: 'L’API Environnements de pré-réception vous permet de créer, répertorier, mettre à jour et supprimer des environnements pour les hooks de pré-réception.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9db8635691ae2f8fcb8649b648948763168081ac
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883261'
---
*Uniquement disponible pour les administrateurs de site [authentifiés](/rest/overview/resources-in-the-rest-api#authentication).* Les utilisateurs normaux recevront une réponse `404` s’ils essaient d’y accéder.

### Attributs d’objet

#### Environnement de pré-réception

| Nom                  | Type      | Description                                                                |
|-----------------------|-----------|----------------------------------------------------------------------------|
| `name`                | `string`  | Nom de l’environnement tel qu’affiché dans l’interface utilisateur.                        |
| `image_url`           | `string`  | URL vers le tarball qui sera téléchargé et extrait.                  |
| `default_environment` | `boolean` | Indique s’il s’agit de l’environnement par défaut fourni avec {% data variables.product.product_name %}. |
| `download`            | `object`  | État de téléchargement de cet environnement.                                        |
| `hooks_count`         | `integer` | Nombre de hooks pré-réception qui utilisent cet environnement.                 |

#### Téléchargement de l’environnement de pré-réception

| Nom            | Type     | Description                                             |
|-----------------|----------|---------------------------------------------------------|
| `state`         | `string` | État du téléchargement le plus récent.                  |
| `downloaded_at` | `string` | Heure à laquelle le téléchargement le plus récent a démarré.         |
| `message`       | `string` | En cas d’échec, des messages d’erreur sont générés. |

Les valeurs possibles pour `state` sont `not_started`, `in_progress`, `success` et `failed`.
