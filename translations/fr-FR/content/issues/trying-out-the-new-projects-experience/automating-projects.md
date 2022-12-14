---
title: Automatisation des projets (bêta)
intro: Vous pouvez utiliser des workflows intégrés ou l’API et {% data variables.product.prodname_actions %} pour gérer vos projets.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
- Projects
- Workflows
- Project management
ms.openlocfilehash: ed82cc99b3faf5e58e0ddb09fac0bbab1b6123f2
ms.sourcegitcommit: 6a266bff4d8c9ee928560c3af45eddd7fb4f3a0c
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/26/2022
ms.locfileid: "147410530"
---
{% data reusables.projects.projects-beta %}

{% data reusables.projects.graphql-deprecation %}

## <a name="introduction"></a>Introduction

Vous pouvez ajouter une automatisation pour faciliter la gestion de votre projet. Les projets (bêta) incluent des workflows intégrés que vous pouvez configurer via l’interface utilisateur. En outre, vous pouvez écrire des workflows personnalisés avec l’API GraphQL et {% data variables.product.prodname_actions %}.

## <a name="built-in-workflows"></a>Workflows intégrés

{% data reusables.projects.about-workflows %}

Vous pouvez activer ou désactiver les workflows intégrés pour votre projet.

{% data reusables.projects.enable-basic-workflow %}

## <a name="-data-variablesproductprodname_actions--workflows"></a>Workflows {% data variables.product.prodname_actions %}

Cette section montre comment utiliser l’API GraphQL et {% data variables.product.prodname_actions %} pour ajouter une demande de tirage à un projet d’organisation. Dans l’exemple de workflows, lorsque la demande de tirage est marquée comme « prête pour évaluation », une nouvelle tâche est ajoutée au projet avec un champ « État » défini sur « À faire » et la date actuelle est ajoutée à un champ « Date publié » personnalisé.

Vous pouvez copier l’un des workflows ci-dessous et le modifier comme décrit dans le tableau ci-dessous pour répondre à vos besoins.

Un projet peut s’étendre sur plusieurs référentiels, mais un workflow est spécifique à un référentiel. Ajoutez le workflow à chaque référentiel que votre projet doit suivre. Pour plus d’informations sur la création de fichiers de workflow, consultez « [Démarrage rapide pour {% data variables.product.prodname_actions %}](/actions/quickstart) ».

Cet article part du principe que vous avez une compréhension de base de {% data variables.product.prodname_actions %}. Pour plus d’informations sur {% data variables.product.prodname_actions %}, consultez « [{% data variables.product.prodname_actions %}](/actions). »

Pour plus d’informations sur les autres modifications que vous pouvez apporter à votre projet via l’API, consultez « [Utilisation de l’API pour gérer des projets](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects) ».

{% note %}

**Remarque :** `GITHUB_TOKEN` est limité au niveau du référentiel et ne peut pas accéder aux projets (bêta). Pour accéder aux projets (bêta), vous pouvez créer un {% data variables.product.prodname_github_app %} (recommandé pour les projets d’organisation) ou un jeton d’accès personnel (recommandé pour les projets utilisateur). Les exemples de workflow pour les deux approches sont présentés ci-dessous.

{% endnote %}

### <a name="example-workflow-authenticating-with-a--data-variablesproductprodname_github_app-"></a>Exemple de workflow s’authentifiant avec un {% data variables.product.prodname_github_app %}

1. Créez un {% data variables.product.prodname_github_app %} ou choisissez un {% data variables.product.prodname_github_app %} existant appartenant à votre organisation. Pour plus d’informations, consultez « [Création d’un {% data variables.product.prodname_github_app %}](/developers/apps/building-github-apps/creating-a-github-app) ».
2. Accordez à {% data variables.product.prodname_github_app %} des autorisations de lecture et d’écriture pour les projets de l’organisation. Pour plus d’informations, consultez « [Modification des autorisations de {% data variables.product.prodname_github_app %}](/developers/apps/managing-github-apps/editing-a-github-apps-permissions) ».

   {% note %}

   **Remarque :** vous pouvez contrôler l’autorisation de votre application pour les projets d’organisation et pour les projets de référentiel. Vous devez accorder l’autorisation de lecture et d’écriture des projets d’organisation ; l’autorisation de lecture et d’écriture des projets de référentiel ne suffit pas.

   {% endnote %}

3. Installation le {% data variables.product.prodname_github_app %} dans votre organisation. Installez-le pour tous les référentiels auxquels votre projet doit accéder. Pour plus d’informations, consultez « [Installation de {% data variables.product.prodname_github_apps %}](/developers/apps/managing-github-apps/installing-github-apps#installing-your-private-github-app-on-your-repository) ».
4. Stockez votre id de {% data variables.product.prodname_github_app %} en tant que secret dans votre référentiel ou organisation. Dans le workflow suivant, remplacez `APP_ID` par le nom du secret. Vous pouvez trouver votre ID d’application dans la page Paramètres de votre application ou via l’API d’application. Pour plus d’informations, consultez « [Applications](/rest/reference/apps#get-an-app). »
5. Générez une clé privée pour votre application. Stockez le contenu du fichier résultant sous la forme d’un secret dans votre référentiel ou organisation. (Stockez l’intégralité du contenu du fichier, y compris `-----BEGIN RSA PRIVATE KEY-----` et `-----END RSA PRIVATE KEY-----`.) Dans le workflow suivant, remplacez `APP_PEM` par le nom du secret. Pour plus d’informations, consultez « [Authentification avec des {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key) ».
6. Dans le workflow suivant, remplacez `YOUR_ORGANIZATION` par le nom de votre organisation. Par exemple : `octo-org`. Remplacez `YOUR_PROJECT_NUMBER` par votre numéro de projet. Pour trouver le numéro de projet, consultez l’URL du projet. Par exemple, `https://github.com/orgs/octo-org/projects/5` a un nombre de projet de 5.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Add PR to project
on:
  pull_request:
    types:
      - ready_for_review
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Get project data
        env:
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        run: |
          gh api graphql -f query='
            query($org: String!, $number: Int!) {
              organization(login: $org){
                projectV2(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      ... on ProjectV2Field {
                        id
                        name
                      }
                      ... on ProjectV2SingleSelectField {
                        id
                        name
                        options {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

          echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

      - name: Add PR to project
        env:
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
                item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"

            echo 'ITEM_ID='$item_id >> $GITHUB_ENV

      - name: Get date
        run: echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV

      - name: Set fields
        env:
          GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          gh api graphql -f query='
            mutation (
              $project: ID!
              $item: ID!
              $status_field: ID!
              $status_value: String!
              $date_field: ID!
              $date_value: Date!
            ) {
              set_status: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: { 
                  singleSelectOptionId: $status_value
                  }
              }) {
                projectV2Item {
                  id
                  }
              }
              set_date_posted: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: { 
                  date: $date_value
                }
              }) {
                projectV2Item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent

```

### <a name="example-workflow-authenticating-with-a-personal-access-token"></a>Authentification de l’exemple de workflow avec un jeton d’accès personnel

1. Créez un jeton d’accès personnel avec les étendues `project` et `repo`. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».
2. Enregistrez le jeton d’accès personnel en tant que secret dans votre référentiel ou organisation.
3. Dans le workflow suivant, remplacez `YOUR_TOKEN` par le nom du secret. Remplacez `YOUR_ORGANIZATION` par le nom de votre organisation. Par exemple : `octo-org`. Remplacez `YOUR_PROJECT_NUMBER` par votre numéro de projet. Pour trouver le numéro de projet, consultez l’URL du projet. Par exemple, `https://github.com/orgs/octo-org/projects/5` a un nombre de projet de 5.

```yaml{:copy}
name: Add PR to project
on:
  pull_request:
    types:
      - ready_for_review
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Get project data
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
          ORGANIZATION: YOUR_ORGANIZATION
          PROJECT_NUMBER: YOUR_PROJECT_NUMBER
        run: |
          gh api graphql -f query='
            query($org: String!, $number: Int!) {
              organization(login: $org){
                projectV2(number: $number) {
                  id
                  fields(first:20) {
                    nodes {
                      ... on ProjectV2Field {
                        id
                        name
                      }
                      ... on ProjectV2SingleSelectField {
                        id
                        name
                        options {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json

          echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
          echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
          echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
          echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV

      - name: Add PR to project
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
          PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
        run: |
          item_id="$( gh api graphql -f query='
            mutation($project:ID!, $pr:ID!) {
              addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
                item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"

            echo 'ITEM_ID='$item_id >> $GITHUB_ENV

      - name: Get date
        run: echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV

      - name: Set fields
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
        run: |
          gh api graphql -f query='
            mutation (
              $project: ID!
              $item: ID!
              $status_field: ID!
              $status_value: String!
              $date_field: ID!
              $date_value: Date!
            ) {
              set_status: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $status_field
                value: { 
                  singleSelectOptionId: $status_value
                  }
              }) {
                projectV2Item {
                  id
                  }
              }
              set_date_posted: updateProjectV2ItemFieldValue(input: {
                projectId: $project
                itemId: $item
                fieldId: $date_field
                value: { 
                  date: $date_value
                }
              }) {
                projectV2Item {
                  id
                }
              }
            }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent

```

### <a name="workflow-explanation"></a>Explication du workflow

Le tableau suivant décrit les sections de l’exemple de workflow et vous montre comment adapter les workflows à votre propre utilisation.

<table class="table-fixed">

<tr>
<td>

```yaml
on:
  pull_request:
    types:
      - ready_for_review
```

</td>
<td>
Ce workflow s’exécute chaque fois qu’une demande de tirage dans le référentiel est marquée comme « prête pour évaluation ».
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %} seulement :

```yaml
- name: Generate token
  id: generate_token
  uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
  with:
    app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
    private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}
```

</td>
<td>
Utilise <a href="https://github.com/tibdex/github-app-token">l’action tibdex/github-app-token</a> pour générer un jeton d’accès d’installation pour votre application à partir de l’ID d’application et de la clé privée. Le jeton d’accès à l’installation est accessible ultérieurement dans le workflow en tant que <code>{% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}</code>.
<br>
<br>
Remplacez <code>APP_ID</code> par le nom du secret qui contient votre ID d’application.
<br>
<br>
Remplacez <code>APP_PEM</code> par le nom du secret qui contient la clé privée de votre application.
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

Jeton d’accès personnel :

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
  ORGANIZATION: YOUR_ORGANIZATION
  PROJECT_NUMBER: YOUR_PROJECT_NUMBER
```

</td>
<td>
Définissez les variables d'environnement pour cette étape.
<br>
<br>
Si vous utilisez un jeton d’accès personnel, remplacez <code>YOUR_TOKEN</code> par le nom du secret qui contient votre jeton d’accès personnel.
<br>
<br>
Remplacez <code>YOUR_ORGANIZATION</code> par le nom de votre organisation. Par exemple : <code>octo-org</code>.
<br>
<br>
Remplacez <code>YOUR_PROJECT_NUMBER</code> par votre numéro de projet. Pour trouver le numéro de projet, consultez l’URL du projet. Par exemple, <code>https://github.com/orgs/octo-org/projects/5</code> a pour numéro de projet 5.
</td>
</tr>

<tr>
<td>

```yaml
gh api graphql -f query='
  query($org: String!, $number: Int!) {
    organization(login: $org){
      projectV2(number: $number) {
        id
        fields(first:20) {
          nodes {
            ... on ProjectV2Field {
              id
              name
            }
            ... on ProjectV2SingleSelectField {
              id
              name
              options {
                id
                name
              }
            }
          }
        }
      }
    }
  }'  -f org=$ORGANIZATION -F number=$PROJECT_NUMBER > project_data.json
```

</td>
<td>
<p>Utilise <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> pour interroger l’API pour l’ID du projet et retourne le nom et l’ID des 20 premiers champs du projet. <code>fields</code>retourne une union et la requête utilise des fragments inlined (<code>... on</code>) pour renvoyer des informations sur tous les champs <code>ProjectV2Field</code> et <code>ProjectV2SingleSelectField</code>.</p>

<p>La réponse est stockée dans un fichier appelé <code>project_data.json</code>.</p>
</td>
</tr>

<tr>
<td>

```yaml
echo 'PROJECT_ID='$(jq '.data.organization.projectV2.id' project_data.json) >> $GITHUB_ENV
echo 'DATE_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Date posted") | .id' project_data.json) >> $GITHUB_ENV
echo 'STATUS_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .id' project_data.json) >> $GITHUB_ENV
echo 'TODO_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Status") | .options[] | select(.name=="Todo") |.id' project_data.json) >> $GITHUB_ENV
```

</td>
<td>
Analyse la réponse de la requête d’API et stocke les ID pertinents en tant que variables d’environnement. Modifiez-le pour obtenir l’ID de différents champs ou options. Par exemple :
<ul>
<li>Pour obtenir l’ID d’un champ appelé <code>Team</code>, ajoutez <code>echo 'TEAM_FIELD_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") | .id' project_data.json) >> $GITHUB_ENV</code>.</li>
<li>Pour obtenir l’ID d’une option appelée <code>Octoteam</code> pour le seul champ sélectionné <code>Team</code>, ajoutez <code>echo 'OCTOTEAM_OPTION_ID='$(jq '.data.organization.projectV2.fields.nodes[] | select(.name== "Team") |.options[] | select(.name=="Octoteam") |.id' project_data.json) >> $GITHUB_ENV</code></li>
</ul>
<strong>Remarque : </strong>Ce workflow suppose que vous disposez d’un projet avec un seul champ de sélection appelé « État » qui inclut une option appelée « À faire » et un champ de date appelé « Date publiée ». Vous devez modifier cette section pour qu’elle corresponde aux champs présents dans votre table.
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

Jeton d’accès personnel :

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
  PR_ID: {% raw %}${{ github.event.pull_request.node_id }}{% endraw %}
```

</td>
<td>
Définissez les variables d'environnement pour cette étape. <code>GITHUB_TOKEN</code> est décrit ci-dessus. <code>PR_ID</code> est l’ID de la demande de tirage qui a déclenché ce workflow.

</td>
</tr>

<tr>
<td>

```yaml
item_id="$( gh api graphql -f query='
  mutation($project:ID!, $pr:ID!) {
    addProjectV2ItemById(input: {projectId: $project, contentId: $pr}) {
      item {
        id
      }
    }
  }' -f project=$PROJECT_ID -f pr=$PR_ID --jq '.data.addProjectV2ItemById.item.id')"
```

</td>
<td>
Utilise <a href="https://cli.github.com/manual/">{% data variables.product.prodname_cli %}</a> et l’API pour ajouter la demande de tirage qui a déclenché ce workflow dans le projet. L’indicateur <code>jq</code> analyse la réponse pour obtenir l’ID de l’élément créé.
</td>
</tr>

<tr>
<td>

```yaml
echo 'ITEM_ID='$item_id >> $GITHUB_ENV
```

</td>
<td>
Stocke l’ID de l’élément créé en tant que variable d’environnement.
</td>
</tr>

<tr>
<td>

```yaml
echo "DATE=$(date +"%Y-%m-%d")" >> $GITHUB_ENV
```

</td>
<td>
Enregistre la date actuelle en tant que variable d’environnement au format <code>yyyy-mm-dd</code>.
</td>
</tr>

<tr>
<td>

{% data variables.product.prodname_github_app %}:

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

Jeton d’accès personnel :

```yaml
env:
  GITHUB_TOKEN: {% raw %}${{ secrets.YOUR_TOKEN }}{% endraw %}
```

</td>
<td>
Définissez les variables d'environnement pour cette étape. <code>GITHUB_TOKEN</code> est décrit ci-dessus.

</td>
</tr>

<tr>
<td>

```yaml
gh api graphql -f query='
  mutation (
    $project: ID!
    $item: ID!
    $status_field: ID!
    $status_value: String!
    $date_field: ID!
    $date_value: Date!
  ) {
    set_status: updateProjectV2ItemFieldValue(input: {
      projectId: $project
      itemId: $item
      fieldId: $status_field
      value: { 
        singleSelectOptionId: $status_value
        }
    }) {
      projectV2Item {
        id
        }
    }
    set_date_posted: updateProjectV2ItemFieldValue(input: {
      projectId: $project
      itemId: $item
      fieldId: $date_field
      value: { 
        date: $date_value
      }
    }) {
      projectV2Item {
        id
      }
    }
  }' -f project=$PROJECT_ID -f item=$ITEM_ID -f status_field=$STATUS_FIELD_ID -f status_value={% raw %}${{ env.TODO_OPTION_ID }}{% endraw %} -f date_field=$DATE_FIELD_ID -f date_value=$DATE --silent
```

</td>
<td>
Définit la valeur du champ <code>Status</code> sur <code>Todo</code>. Définit la valeur du champ <code>Date posted</code>.
</td>
</tr>

</table>
