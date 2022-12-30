---
title: Clés SSH supprimées ou manquantes
intro: 'Par précaution de sécurité, {% data variables.product.prodname_dotcom %} supprime automatiquement les clés SSH qui n’ont pas été utilisées au cours d’une année.'
redirect_from:
  - /articles/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/troubleshooting-ssh/deleted-or-missing-ssh-keys
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Deleted or missing SSH keys
ms.openlocfilehash: aa26a5bf39db3f41aa3c3aa01f59c392a42f467f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085890'
---
{% data variables.product.prodname_dotcom %} supprime automatiquement les clés SSH inactives pour aider à garantir la sécurité des comptes, par exemple une fois qu’une personne quitte un travail ou perd un ordinateur.

Vous pouvez vérifier si vous n’avez pas utilisé de clé SSH depuis un an en examinant le journal de sécurité de votre compte. Pour plus d’informations, consultez « [Examen de votre journal de sécurité](/articles/reviewing-your-security-log/) ».

Une fois votre clé SSH inactive supprimée, vous devez générer une nouvelle clé SSH et l’associer à votre compte. Pour plus d’informations, consultez « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) » et « [Ajout d’une nouvelle clé SSH à votre compte GitHub](/articles/adding-a-new-ssh-key-to-your-github-account/) ».
