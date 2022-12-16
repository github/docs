---
title: Utilisation de pièces jointes au contenu
intro: Les pièces jointes au contenu permettent à une application GitHub de fournir plus d’informations dans GitHub concernant les URL qui dirigent vers les domaines inscrits. GitHub affiche les informations fournies par l’application sous l’URL dans le corps ou le commentaire d’un problème ou d’une demande de tirage (pull request).
redirect_from:
  - /apps/using-content-attachments
  - /developers/apps/using-content-attachments
versions:
  ghes: <3.4
topics:
  - GitHub Apps
ms.openlocfilehash: f557a804d48144df24398f75e90a589d563d941b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081022'
---
{% data reusables.pre-release-program.content-attachments-public-beta %}

## À propos des pièces jointes au contenu

Une application GitHub peut inscrire des domaines qui déclenchent des événements `content_reference`. Lorsque quelqu’un inclut une URL qui relie un domaine inscrit dans le corps ou le commentaire d’une demande de tirage ou d’un problème, l’application reçoit le [`content_reference` webhook](/webhooks/event-payloads/#content_reference). Vous pouvez utiliser des pièces jointes au contenu pour fournir visuellement plus de contexte ou de données à l’URL ajoutée à un problème ou à une demande de tirage. L’URL doit être une URL complète, en commençant par `http://` ou `https://`. Les URL qui font partie d’un lien Markdown sont ignorées et ne déclenchent pas l’événement `content_reference`.

Avant de pouvoir utiliser l’API {% data variables.product.prodname_unfurls %} , vous devez configurer des références de contenu pour votre application GitHub :
* Donnez à votre application des autorisations `Read & write` pour « Références de contenu ».
* Inscrivez jusqu’à 5 domaines valides et accessibles publiquement lors de la configuration de l’autorisation « Références de contenu ». N’utilisez pas d’adresses IP lors de la configuration des domaines de référence de contenu. Vous pouvez inscrire un nom de domaine (example.com) ou un sous-domaine (subdomain.example.com).
* Abonnez votre application à l’événement « Référence de contenu ».

Une fois votre application installée sur un référentiel, émettez ou extrayez des commentaires de demande de tirage (pull request) dans le référentiel contenant des URL pour que vos domaines inscrits génèrent un événement de référence de contenu. L’application doit créer une pièce jointe de contenu dans les six heures suivant la publication de l’URL de référence de contenu.

Les pièces jointes de contenu ne mettent pas à jour rétroactivement les URL. Cela ne fonctionne que pour les URL ajoutées aux problèmes ou aux demandes de tirage, après avoir configuré l’application à l’aide des exigences décrites ci-dessus, puis installé l’application sur son référentiel.

Consultez « [Création d’une application GitHub](/apps/building-github-apps/creating-a-github-app/) » ou « [Modification des autorisations d’une application GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/) » pour connaître les étapes nécessaires pour configurer les autorisations d’application et les abonnements aux événements GitHub.

## Implémentation du flux de pièces jointes de contenu

Le flux de pièces jointes de contenu vous montre la relation entre l’URL dans le problème ou la demande de tirage, l’événement webhook `content_reference` et le point de terminaison de l’API REST que vous devez appeler pour mettre à jour le problème ou la demande de tirage avec des informations supplémentaires :

**Étape 1.** Configurez votre application à l’aide des instructions décrites dans la rubrique [À propos des pièces jointes de contenu](#about-content-attachments). Vous pouvez également utiliser [l’exemple d’application Probot](#example-using-probot-and-github-app-manifests) pour commencer à utiliser des pièces jointes de contenu.

**Étape 2.** Ajoutez l’URL du domaine que vous avez inscrit à un problème ou une demande de tirage. Vous devez utiliser une URL complète qui commence par `http://` ou `https://`.

![URL ajoutée à un problème](/assets/images/github-apps/github_apps_content_reference.png)

**Étape 3.** Votre application recevra le [`content_reference` webhook](/webhooks/event-payloads/#content_reference) avec l’action `created`.

``` json
{
  "action": "created",
  "content_reference": {
    "id": 17,
    "node_id": "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA5",
    "reference": "errors.ai"
  },
  "repository": {
    "full_name": "Codertocat/Hello-World",
  },
  "sender": {...},
  "installation": {
    "id": 371641,
    "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMzcxNjQx"
  }
}
```

**Étape 4.** L’application utilise les champs `content_reference``id` et`repository``full_name` pour [Créer une pièce jointe de contenu](/rest/reference/apps#create-a-content-attachment) à l’aide de l’API REST. `installation` `id` sera également nécessaire pour l’authentifier comme [installation de l’application GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

Le paramètre `body` peut contenir Markdown :

```shell
curl -X POST \
  {% data variables.product.api_url_code %}/repos/Codertocat/Hello-World/content_references/17/attachments \
  -H 'Accept: application/vnd.github.corsair-preview+json' \
  -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
  -d '{
    "title": "[A-1234] Error found in core/models.py file",
    "body": "You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
}'
```

Pour plus d’informations sur la création d’un jeton d’installation, consultez « [Authentification en tant qu’application GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) ».

**Étape 5.** La nouvelle pièce jointe de contenu apparaît sous le lien d’un commentaire de demande de tirage (pull request) ou de problème :

![Contenu joint à une référence dans un problème](/assets/images/github-apps/content_reference_attachment.png)

## Utilisation de pièces jointes de contenu dans GraphQL
Nous fournissons `node_id` dans l’événement[`content_reference` webhook](/webhooks/event-payloads/#content_reference) pour vous permettre de faire référence à la mutation `createContentAttachment` dans l’API GraphQL.

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

Par exemple :

``` graphql
mutation {
  createContentAttachment(input: {
    contentReferenceId: "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1",
    title: "[A-1234] Error found in core/models.py file",
    body:"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
  }) {
    contentAttachment {
      ... on ContentAttachment {
        id
        title
        body
      }
    }
  }
}
```
Exemple de cURL :

```shell
curl -X "POST" "{% data variables.product.api_url_code %}/graphql" \
     -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
     -H 'Accept: application/vnd.github.corsair-preview+json' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "query": "mutation {\\n  createContentAttachment(input:{contentReferenceId: \\"MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1\\", title:\\"[A-1234] Error found in core/models.py file\\", body:\\"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n\self.save()\\"}) {\\n    contentAttachment {\\n      id,\\n      title,\\n      body\\n    }\\n  }\\n}"
}'
```

Pour plus d’informations sur `node_id`, consultez « [Utilisation des ID de nœud globaux](/graphql/guides/using-global-node-ids) ».

## Exemple utilisant des manifestes de l’application Probot et GitHub

Pour configurer rapidement une application GitHub qui peut utiliser l’API {% data variables.product.prodname_unfurls %} , vous pouvez utiliser [Probot](https://probot.github.io/). Consultez « [Création d’applications GitHub à partir d’un manifeste](/apps/building-github-apps/creating-github-apps-from-a-manifest/) » pour découvrir comment Probot utilise les manifestes de l'application GitHub.

Pour créer une application Probot, procédez comme suit :

1. [Générez une nouvelle application GitHub](https://probot.github.io/docs/development/#generating-a-new-app).
2. Ouvrez le projet que vous avez créé, puis personnalisez les paramètres dans le fichier `app.yml`. S’abonner à l’événement `content_reference` et activer les autorisations d’écriture `content_references` :

   ``` yml
    default_events:
      - content_reference
    # The set of permissions needed by the GitHub App. The format of the object uses
    # the permission name for the key (for example, issues) and the access type for
    # the value (for example, write).
    # Valid values are `read`, `write`, and `none`
    default_permissions:
      content_references: write

    content_references:
      - type: domain
        value: errors.ai
      - type: domain
        value: example.org
   ```

3. Ajoutez ce code au fichier `index.js` pour gérer les événements `content_reference` et appeler l’API REST :

    ``` javascript
    module.exports = app => {
      // Your code here
      app.log('Yay, the app was loaded!')
       app.on('content_reference.created', async context => {
        console.log('Content reference created!', context.payload)
         // Call the "Create a content reference" REST endpoint
        await context.github.request({
          method: 'POST',
          headers: { accept: 'application/vnd.github.corsair-preview+json' },
          url: `/repos/${context.payload.repository.full_name}/content_references/${context.payload.content_reference.id}/attachments`,
          // Parameters
          title: '[A-1234] Error found in core/models.py file',
          body: 'You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\nself.save()'
        })
      })
    }
    ```

4. [Exécutez l’application GitHub localement](https://probot.github.io/docs/development/#running-the-app-locally). Accédez à `http://localhost:3000`, puis cliquez sur le bouton **Inscrire l’application GitHub** :

   ![Inscrire une application GitHub Probot](/assets/images/github-apps/github_apps_probot-registration.png)

5. Installez l’application sur un référentiel de test.
6. Créez un problème dans votre référentiel de test.
7. Ajoutez un commentaire au problème que vous avez ouvert et qui inclut l’URL que vous avez configurée dans le fichier `app.yml`.
8. Examinez le commentaire du problème et vous verrez une mise à jour qui ressemble à ceci :

   ![Contenu joint à une référence dans un problème](/assets/images/github-apps/content_reference_attachment.png)
