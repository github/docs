---
title: Identification des événements du journal d’audit effectués par un jeton d’accès
shortTitle: Identify events by token
intro: 'Vous pouvez identifier les actions effectuées par un jeton OAuth ou un {% data variables.product.pat_generic %} spécifique dans votre entreprise.'
versions:
  feature: token-audit-log
ms.openlocfilehash: 4452e740e611ea3f903c5d122222b3cb575ba37d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159712'
---
## À propos des données de jeton dans le journal d’audit

Dans le journal d’audit de votre entreprise, pour toutes les actions effectuées avec un {% data variables.product.pat_generic %} ou une application OAuth pour l’authentification, les données d’événement affichent la méthode d’authentification utilisée et le hachage SHA-256 du jeton.

Si vous apprenez qu’un jeton a été compromis, vous pouvez comprendre les actions effectuées par celui-ci en recherchant tous les événements correspondants dans le journal d’audit de votre entreprise.

Les valeurs de jeton hachées ne sont pas incluses quand vous exportez le journal d’audit.

## Recherche des événements associés à un jeton

Quand vous recherchez les événements associés à un jeton spécifique, vous pouvez utiliser l’interface utilisateur ou l’API REST. Dans les deux cas, vous devez d’abord connaître le hachage SHA-256 du jeton.

### Génération d’une valeur de hachage SHA-256 pour un jeton

Si vous avez uniquement une valeur de jeton brute, vous devez générer un hachage SHA-256 avant de pouvoir rechercher le jeton.

Pour MacOS et Linux, vous pouvez utiliser `echo -n TOKEN | openssl dgst -sha256 -binary | base64`, en remplaçant TOKEN par la valeur du jeton.

Pour PowerShell, vous pouvez utiliser le script suivant afin de retourner un hachage SHA-256 pour une chaîne donnée.

```shell{:copy}
Param (
    [Parameter(Mandatory=$true)]
    [string]
    $ClearString
)

$hasher = [System.Security.Cryptography.HashAlgorithm]::Create('sha256')
$hash = $hasher.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($ClearString))

$hashString = [System.BitConverter]::ToString($hash)
$hashString.Replace('-', '')
```

### Recherche sur {% data variables.product.prodname_dotcom %}

Lors de la recherche dans le journal d’audit sur {% data variables.product.prodname_dotcom %}, incluez `hashed_token:"VALUE"` dans votre requête de recherche, en remplaçant `VALUE` par le hachage SHA-256 du jeton. 

{% note %}

**Remarque :** Veillez à placer entre guillemets la valeur du jeton haché.

{% endnote %}

### Recherche avec l’API REST

Avant de pouvoir rechercher un jeton avec l’API REST, après avoir généré un hachage SHA-256, vous devez également placer le hachage dans une séquence d’échappement d’URI. La plupart des principaux langages de programmation fournissent un utilitaire d’échappement d’URI. Par exemple, [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) encode une chaîne pour JavaScript.

Ensuite, incluez `hashed_token:"VALUE"` dans votre expression de recherche, en remplaçant VALUE par le hachage placé dans une séquence d’échappement d’URI. 

Par exemple, si le nom du compte d’entreprise est `octo-corp`, la commande curl suivante recherche dans le journal d’audit de @octo-corp tous les événements associés au jeton dont le hachage SHA-256 encodé sous forme d’URI est `EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8`.

```
curl --location --request GET 'https://api.github.com/enterprises/octo-corp/audit-log?phrase=hashed_token:"EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8"' \
--header 'Authorization: Basic TOKEN' \ 
```

## Pour aller plus loin

- « [Utilisation de l’API de journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise) »
