---
title: Utilisation de l’API GraphQL pour les discussions
intro: 'Découvrez comment utiliser l’API GraphQL {% data variables.product.prodname_discussions %}.'
versions:
  feature: discussions
shortTitle: Use GraphQL for Discussions
ms.openlocfilehash: fd296c4e9390cac3500ba7319cb602366a37e262
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185614'
---
L’API GraphQL {% data variables.product.prodname_discussions %} vous permet d’obtenir, de créer, de modifier et de supprimer des posts de discussion. Pour plus d’informations sur les données {% data variables.product.prodname_discussions %}, consultez « [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions) ».

Cette API est disponible pour les utilisateurs authentifiés, les applications OAuth et les applications GitHub. Les jetons d’accès nécessitent l’étendue `repo` pour les dépôts privés et l’étendue `public_repo` pour les dépôts publics. Pour plus d’informations, consultez « [Étendues pour les applications OAuth](/developers/apps/scopes-for-oauth-apps) ».

## Champs

### Repository.discussions

Lister les discussions au sein d’un dépôt. Si `categoryId` est spécifié, seuls les résultats de cette catégorie seront retournés.

_Signature :_

```graphql
discussions(
  after: String,
  before: String,
  first: Int,
  last: Int,
  categoryId: ID = null,
  orderBy: DiscussionOrder = {field: UPDATED_AT, direction: DESC}
) : Discussion
```

#### DiscussionOrder

```graphql
"""
Ways in which discussions can be ordered.
"""
input DiscussionOrder {
  """
  The field by which to order discussions.
  """
  field: DiscussionOrderField!

  """
  The direction in which to order discussions by the specified field.
  """
  direction: OrderDirection!
}
```

```graphql
"""
Properties by which discussion connections can be ordered.
"""
enum DiscussionOrderField {
  """
  Order discussions by creation time.
  """
  CREATED_AT

  """
  Order discussions by most recent modification time.
  """
  UPDATED_AT
}
```

### Repository.discussionCategories

Retourner les catégories de discussion disponibles définies dans ce dépôt. Chaque référentiel peut avoir jusqu’à 25 catégories. Pour plus d’informations sur les catégories de discussion, consultez « [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions) ».

_Signature :_

```graphql
discussionCategories(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : DiscussionCategoryConnection!
```

### Repository.discussion

Obtenir une discussion. Retourne `null` si la discussion avec l’ID spécifié n’existe pas.

_Signature :_

```graphql
discussion(number: Int!) : Discussion
```

### Repository.pinnedDiscussions

Retourner des discussions épinglées à ce dépôt, classées d’après la position des épingles.

_Signature :_

```graphql
pinnedDiscussions(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : PinnedDiscussionConnection!
```

## Objets

**Remarque :** Par souci de concision, les types de connexion ne sont pas développés ici. Chaque type de connexion mentionné dans le schéma suit le même modèle que les autres connexions dans l’API GraphQL. Pour plus d’informations, consultez « [Présentation de GraphQL](/graphql/guides/introduction-to-graphql#connection) ».

```graphql
query {
  repository(owner: "github", name: "some-repo") {
    discussions(first: 10) {
      # type: DiscussionConnection
      totalCount # Int!

      pageInfo {
        # type: PageInfo (from the public schema)
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }

      edges {
        # type: DiscussionEdge
        cursor
        node {
          # type: Discussion
          id
        }
      }

      nodes {
        # type: Discussion
        id
      }
    }
  }
}
```

### Discussion

<details>
<summary>Champs :</summary>

```graphql
"""
A discussion in a repository.
"""
type Discussion implements Comment & Deletable & Lockable & Node & Reactable & RepositoryNode & Subscribable & Updatable {
  """
  Reason that the conversation was locked.
  """
  activeLockReason: LockReason

  """
  The comment chosen as this discussion's answer, if any.
  """
  answer: DiscussionComment

  """
  The time when a user chose this discussion's answer, if answered.
  """
  answerChosenAt: DateTime

  """
  The user who chose this discussion's answer, if answered.
  """
  answerChosenBy: Actor

  """
  The actor who authored the comment.
  """
  author: Actor

  """
  Author's association with the subject of the comment.
  """
  authorAssociation: CommentAuthorAssociation!

  """
  The main text of the discussion post.
  """
  body: String!

  """
  The body rendered to HTML.
  """
  bodyHTML: HTML!

  """
  The body rendered to text.
  """
  bodyText: String!

  """
  The category for this discussion.
  """
  category: DiscussionCategory!

  """
  The replies to the discussion.
  """
  comments(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int
  ): DiscussionCommentConnection!

  """
  Identifies the date and time when the object was created.
  """
  createdAt: DateTime!

  """
  Check if this comment was created via an email reply.
  """
  createdViaEmail: Boolean!

  """
  Identifies the primary key from the database.
  """
  databaseId: Int

  """
  The actor who edited the comment.
  """
  editor: Actor
  id: ID!

  """
  Check if this comment was edited and includes an edit with the creation data
  """
  includesCreatedEdit: Boolean!

  """
  The moment the editor made the last edit
  """
  lastEditedAt: DateTime

  """
  `true` if the object is locked
  """
  locked: Boolean!

  """
  The number identifying this discussion within the repository.
  """
  number: Int!

  """
  Identifies when the comment was published at.
  """
  publishedAt: DateTime

  """
  A list of reactions grouped by content left on the subject.
  """
  reactionGroups: [ReactionGroup!]

  """
  A list of Reactions left on the Issue.
  """
  reactions(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Allows filtering Reactions by emoji.
    """
    content: ReactionContent

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int

    """
    Allows specifying the order in which reactions are returned.
    """
    orderBy: ReactionOrder
  ): ReactionConnection!

  """
  The repository associated with this node.
  """
  repository: Repository!

  """
  The path for this discussion.
  """
  resourcePath: URI!

  """
  The title of this discussion.
  """
  title: String!

  """
  Identifies the date and time when the object was last updated.
  """
  updatedAt: DateTime!

  """
  The URL for this discussion.
  """
  url: URI!

  """
  A list of edits to this content.
  """
  userContentEdits(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int
  ): UserContentEditConnection

  """
  Check if the current viewer can delete this object.
  """
  viewerCanDelete: Boolean!

  """
  Can user react to this subject
  """
  viewerCanReact: Boolean!

  """
  Check if the viewer is able to change their subscription status for the repository.
  """
  viewerCanSubscribe: Boolean!

  """
  Check if the current viewer can update this object.
  """
  viewerCanUpdate: Boolean!

  """
  Did the viewer author this comment.
  """
  viewerDidAuthor: Boolean!

  """
  Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
  """
  viewerSubscription: SubscriptionState
}
```

</details>

### DiscussionComment

<details>
<summary>Champs</summary>

```graphql
"""
A comment on a discussion.
"""
type DiscussionComment implements Comment & Deletable & Minimizable & Node & Reactable & Updatable & UpdatableComment {
  """
  The actor who authored the comment.
  """
  author: Actor

  """
  Author's association with the subject of the comment.
  """
  authorAssociation: CommentAuthorAssociation!

  """
  The body as Markdown.
  """
  body: String!

  """
  The body rendered to HTML.
  """
  bodyHTML: HTML!

  """
  The body rendered to text.
  """
  bodyText: String!

  """
  Identifies the date and time when the object was created.
  """
  createdAt: DateTime!

  """
  Check if this comment was created via an email reply.
  """
  createdViaEmail: Boolean!

  """
  Identifies the primary key from the database.
  """
  databaseId: Int

  """
  The time when this replied-to comment was deleted
  """
  deletedAt: DateTime

  """
  The discussion this comment was created in
  """
  discussion: Discussion

  """
  The actor who edited the comment.
  """
  editor: Actor
  id: ID!

  """
  Check if this comment was edited and includes an edit with the creation data
  """
  includesCreatedEdit: Boolean!

  """
  Has this comment been chosen as the answer of its discussion?
  """
  isAnswer: Boolean!

  """
  Returns whether or not a comment has been minimized.
  """
  isMinimized: Boolean!

  """
  The moment the editor made the last edit
  """
  lastEditedAt: DateTime

  """
  Returns why the comment was minimized.
  """
  minimizedReason: String

  """
  Identifies when the comment was published at.
  """
  publishedAt: DateTime

  """
  A list of reactions grouped by content left on the subject.
  """
  reactionGroups: [ReactionGroup!]

  """
  A list of Reactions left on the Issue.
  """
  reactions(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Allows filtering Reactions by emoji.
    """
    content: ReactionContent

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int

    """
    Allows specifying the order in which reactions are returned.
    """
    orderBy: ReactionOrder
  ): ReactionConnection!

  """
  The threaded replies to this comment.
  """
  replies(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int
  ): DiscussionCommentConnection!

  """
  The discussion comment this comment is a reply to
  """
  replyTo: DiscussionComment

  """
  The path for this discussion comment.
  """
  resourcePath: URI!

  """
  Identifies the date and time when the object was last updated.
  """
  updatedAt: DateTime!

  """
  The URL for this discussion comment.
  """
  url: URI!

  """
  A list of edits to this content.
  """
  userContentEdits(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int
  ): UserContentEditConnection

  """
  Check if the current viewer can delete this object.
  """
  viewerCanDelete: Boolean!

  """
  Can the current user mark this comment as an answer?
  """
  viewerCanMarkAsAnswer: Boolean!

  """
  Check if the current viewer can minimize this object.
  """
  viewerCanMinimize: Boolean!

  """
  Can user react to this subject
  """
  viewerCanReact: Boolean!

  """
  Can the current user unmark this comment as an answer?
  """
  viewerCanUnmarkAsAnswer: Boolean!

  """
  Check if the current viewer can update this object.
  """
  viewerCanUpdate: Boolean!

  """
  Reasons why the current viewer can not update this comment.
  """
  viewerCannotUpdateReasons: [CommentCannotUpdateReason!]!

  """
  Did the viewer author this comment.
  """
  viewerDidAuthor: Boolean!
}
```

</details>

### DiscussionCategory

<details>
<summary>Champs</summary>

```graphql
"""
A category for discussions in a repository.
"""
type DiscussionCategory implements Node & RepositoryNode {
  """
  Identifies the date and time when the object was created.
  """
  createdAt: DateTime!

  """
  A description of this category.
  """
  description: String

  """
  An emoji representing this category.
  """
  emoji: String!

  """
  This category's emoji rendered as HTML.
  """
  emojiHTML: HTML!
  id: ID!

  """
  Whether or not discussions in this category support choosing an answer with the markDiscussionCommentAsAnswer mutation.
  """
  isAnswerable: Boolean!

  """
  The name of this category.
  """
  name: String!

  """
  The repository associated with this node.
  """
  repository: Repository!

  """
  Identifies the date and time when the object was last updated.
  """
  updatedAt: DateTime!
}
```

</details>

### PinnedDiscussion

<details>
<summary>Champs :</summary>

```graphql
"""
A Pinned discussion is a discussion pinned to a repository's index page.
"""
type PinnedDiscussion implements Node & RepositoryNode {
  """
  Identifies the date and time when the object was created.
  """
  createdAt: DateTime!

  """
  Identifies the primary key from the database.
  """
  databaseId: Int

  """
  The discussion that was pinned.
  """
  discussion: Discussion!

  """
  Color stops of the chosen gradient
  """
  gradientStopColors: [String!]!
  id: ID!

  """
  Background texture pattern
  """
  pattern: PinnedDiscussionPattern!

  """
  The actor that pinned this discussion.
  """
  pinnedBy: Actor!

  """
  Preconfigured background gradient option
  """
  preconfiguredGradient: PinnedDiscussionGradient

  """
  The repository associated with this node.
  """
  repository: Repository!

  """
  Identifies the date and time when the object was last updated.
  """
  updatedAt: DateTime!
}
```

</details>

#### PinnedDiscussionPattern

<details>
<summary>Valeurs</summary>

```graphql
"""
Preconfigured background patterns that may be used to style discussions pinned within a repository.
"""
enum PinnedDiscussionPattern {
  """
  An upward-facing chevron pattern
  """
  CHEVRON_UP

  """
  A hollow dot pattern
  """
  DOT

  """
  A solid dot pattern
  """
  DOT_FILL

  """
  A heart pattern
  """
  HEART_FILL

  """
  A friendly octocat face pattern
  """
  OCTOFACE

  """
  A plus sign pattern
  """
  PLUS
}
```

</details>

#### PinnedDiscussionGradient

<details>
<summary>Valeurs</summary>

```graphql
"""
Preconfigured gradients that may be used to style discussions pinned within a repository.
"""
enum PinnedDiscussionGradient {
  """
  A gradient of blue to mint
  """
  BLUE_MINT

  """
  A gradient of blue to purple
  """
  BLUE_PURPLE

  """
  A gradient of pink to blue
  """
  PINK_BLUE

  """
  A gradient of purple to coral
  """
  PURPLE_CORAL

  """
  A gradient of red to orange
  """
  RED_ORANGE
}
```

</details>

## Interfaces

### RepositoryDiscussionAuthor

Implémenté par les types `User` et `Organization`. **Remarque :** Des discussions seront associées à un élément `Organization` uniquement si ce dernier a été converti à partir d’un élément `User`.

<details>
<summary>Champs</summary>

```graphql
"""
Represents an author of discussions in repositories.
"""
interface RepositoryDiscussionAuthor {
  """
  Discussions this user has started.
  """
  repositoryDiscussions(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Filter discussions to only those that have been answered or not. Defaults to
    including both answered and unanswered discussions.
    """
    answered: Boolean = null

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int

    """
    Ordering options for discussions returned from the connection.
    """
    orderBy: DiscussionOrder = {field: CREATED_AT, direction: DESC}

    """
    Filter discussions to only those in a specific repository.
    """
    repositoryId: ID
  ): DiscussionConnection!
}
```

</details>

### RepositoryDiscussionCommentAuthor

Également implémenté par les types `User` et `Organization`.

<details>
<summary>Champs</summary>

```graphql
"""
Represents an author of discussion comments in repositories.
"""
interface RepositoryDiscussionCommentAuthor {
  """
  Discussion comments this user has authored.
  """
  repositoryDiscussionComments(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int

    """
    Filter discussion comments to only those that were marked as the answer
    """
    onlyAnswers: Boolean = false

    """
    Filter discussion comments to only those in a specific repository.
    """
    repositoryId: ID
  ): DiscussionCommentConnection!
}
```

</details>

## Mutations

Ces mutations suivent le même modèle d’implémentation que les autres mutations dans l’API GraphQL. Chaque mutation accepte un argument unique de type `Input`, nommé après la mutation, et retourne un type `Payload` contenant les champs spécifiés.

Par exemple, il s’agit d’une mutation de `createDiscussion` de base qui crée une nouvelle discussion :

```graphql
mutation {
  # input type: CreateDiscussionInput
  createDiscussion(input: {repositoryId: "1234", categoryId: "5678", body: "The body", title: "The title"}) {

    # response type: CreateDiscussionPayload
    discussion {
      id
    }
  }
}
```

### createDiscussion

Champs d’entrée :

* `body: String!` Corps de la nouvelle discussion.
* `title: String!` Titre de la nouvelle discussion.
* `repositoryId: ID!` ID d’un dépôt dans lequel créer la discussion.
* `categoryId: ID!` ID d’un élément `DiscussionCategory` dans ce dépôt.
* `clientMutationId: String` Identificateur unique du client effectuant la mutation.

Champs de type de retour :

* `clientMutationId: String` Identificateur unique fourni en tant qu’entrée.
* `discussion: Discussion` Discussion qui a été créée.

### updateDiscussion

Champs d’entrée :

* `discussionId: ID!` ID de nœud de la discussion à mettre à jour.
* `body: String` Nouveau contenu du corps de la discussion.
* `title: String` Nouveau titre de discussion.
* `categoryId: ID` ID de nœud d’un élément `DiscussionCategory` du même dépôt en lequel transformer cette discussion.
* `clientMutationId: String` Identificateur unique du client effectuant la mutation.

Champs de type de retour :

* `clientMutationId: String` Identificateur unique fourni en tant qu’entrée.
* `discussion: Discussion` Discussion qui a été modifiée.

### deleteDiscussion
Champs d’entrée :

* `id: ID!` ID de nœud de la discussion à supprimer.
* `clientMutationId: String` Identificateur unique du client effectuant la mutation.

Champs de type de retour :

* `clientMutationId: String` Identificateur unique fourni en tant qu’entrée.
* `discussion: Discussion` Discussion qui a été supprimer.

### addDiscussionComment

Champs d’entrée :

* `body: String!` Contenu du commentaire.
* `discussionId: ID!` ID de nœud de la discussion à commenter.
* `replyToId: ID` ID de nœud du commentaire de discussion auquel répondre. En cas d’absence, le commentaire créé est un commentaire de niveau supérieur.
* `clientMutationId: String` Identificateur unique du client effectuant la mutation.

Champs de type de retour :

* `clientMutationId: String` Identificateur unique fourni en tant qu’entrée.
* `comment: DiscussionComment` Commentaire de discussion qui a été créé.

### updateDiscussionComment

Champs d’entrée :

* `body: String!` Nouveau contenu du corps du commentaire.
* `commentId: ID!` ID de nœud du commentaire de discussion à mettre à jour.
* `clientMutationId: String` Identificateur unique du client effectuant la mutation.

Champs de type de retour :

* `clientMutationId: String` Identificateur unique fourni en tant qu’entrée.
* `comment: DiscussionComment` Commentaire de discussion qui a été mis à jour.

### deleteDiscussionComment

Champs d’entrée :

* `id: ID!` ID de nœud du commentaire de discussion à supprimer.
* `clientMutationId: String` Identificateur unique du client effectuant la mutation.

Champs de type de retour :

* `clientMutationId: String` Identificateur unique fourni en tant qu’entrée.
* `comment: DiscussionComment` Commentaire de discussion qui a été supprimer.

### markDiscussionCommentAsAnswer

Champs d’entrée :

* `id: ID!` ID de nœud du commentaire de discussion à marquer comme réponse.
* `clientMutationId: String` Identificateur unique du client effectuant la mutation.

Champs de type de retour :

* `clientMutationId: String` Identificateur unique fourni en tant qu’entrée.
* `discussion: Discussion` Discussion qui inclut le commentaire choisi.

### unmarkDiscussionCommentAsAnswer

Champs d’entrée :

* `id: ID!` ID de nœud du commentaire de discussion qui ne doit plus être marqué comme réponse.
* `clientMutationId: String` Identificateur unique du client effectuant la mutation.

Champs de type de retour :

* `clientMutationId: String` Identificateur unique fourni en tant qu’entrée.
* `discussion: Discussion` Discussion qui inclut le commentaire non marqué.

## Rechercher

La discussion peut être retournée à partir du champ `search` supérieur. Pour rechercher une discussion, spécifiez `DISCUSSION` comme `type`. Le type `SearchResultItemConnection` a un champ `discussionCount` pour signaler le nombre de discussions retournées, et le type `Discussion` est ajouté à l’union `SearchResultItem`. Pour plus d’informations, consultez « [Requêtes](/graphql/reference/queries#searchresultitemconnection) » et « [Recherche dans les discussions](/search-github/searching-on-github/searching-discussions) ».
