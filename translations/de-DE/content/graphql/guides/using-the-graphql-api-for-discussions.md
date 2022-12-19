---
title: Verwenden der GraphQL-API für Diskussionen
intro: 'Erfahre, wie du die {% data variables.product.prodname_discussions %} GraphQL-API verwendest.'
versions:
  feature: discussions
shortTitle: Use GraphQL for Discussions
ms.openlocfilehash: fd296c4e9390cac3500ba7319cb602366a37e262
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185623'
---
Die {% data variables.product.prodname_discussions %} GraphQL API ermöglicht es dir, Diskussionsbeiträge zu erhalten, zu erstellen, zu bearbeiten und zu löschen. Weitere Informationen zu {% data variables.product.prodname_discussions %} findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."

Diese API ist für authentifizierte Benutzer, OAuth Apps und GitHub Apps verfügbar. Zugriffstoken erfordern den `repo` Bereich für private Repositorys und den `public_repo` Bereich für öffentliche Repositorys. Weitere Informationen findest du unter "[Bereiche für OAuth-Apps](/developers/apps/scopes-for-oauth-apps)."

## Felder

### Repository.discussions

Liste die Diskussionen innerhalb eines Repositorys auf. Wenn `categoryId` angegeben ist, werden nur Ergebnisse innerhalb dieser Kategorie zurückgegeben.

_Unterschrift:_

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

Gib die verfügbaren Diskussionskategorien zurück, die in diesem Repository definiert sind. Jedes Repository kann bis zu 25 Kategorien aufweisen. Weitere Informationen zu Diskussionskategorien findest du unter "[Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)."

_Unterschrift:_

```graphql
discussionCategories(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : DiscussionCategoryConnection!
```

### Repository.discussion

Abrufen einer Diskussion. Gibt `null` zurück, wenn die Diskussion mit der angegebenen ID nicht vorhanden ist.

_Unterschrift:_

```graphql
discussion(number: Int!) : Discussion
```

### Repository.pinnedDiscussions

Zurückgeben von Diskussionen, die an dieses Repository angeheftet wurden, sortiert nach Pinposition.

_Unterschrift:_

```graphql
pinnedDiscussions(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : PinnedDiscussionConnection!
```

## Objekte

**Hinweis:** Verbindungstypen werden hier nicht erweitert. Jeder im Schema erwähnte Verbindungstyp folgt demselben Muster wie andere Verbindungen in der GraphQL-API. Weitere Informationen findest du unter [Einführung in GraphQL](/graphql/guides/introduction-to-graphql#connection).

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

### Diskussion (Discussion)

<details>
<summary>Felder:</summary>

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
<summary>Felder</summary>

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
<summary>Felder</summary>

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
<summary>Felder:</summary>

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
<summary>Werte</summary>

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
<summary>Werte</summary>

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

## Schnittstellen

### RepositoryDiscussionAuthor

Implementiert durch die `User` und `Organization` Typen. **Hinweis:** Ein `Organization` wird nur dann mit Diskussionen verbunden, wenn es aus einem `User` konvertiert wurde.

<details>
<summary>Felder</summary>

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

Außerdem implementiert durch die `User` und `Organization` Typen.

<details>
<summary>Felder</summary>

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

## Mutationen

Diese Mutationen folgen demselben Implementierungsmuster wie andere Mutationen in der GraphQL-API. Jede Mutation akzeptiert ein einzelnes Argument eines `Input` Typs, der nach der Mutation benannt ist, und gibt einen `Payload` Typ zurück, der die angegebenen Felder enthält.

Dies ist beispielsweise eine grundlegende `createDiscussion` Mutation, die eine neue Diskussion schafft:

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

Eingabefelder:

* `body: String!` Der Textkörper der neuen Diskussion.
* `title: String!` Der Titel der neuen Diskussion.
* `repositoryId: ID!` Die ID eines Repositorys, in dem die Diskussion erstellt werden soll.
* `categoryId: ID!` Die ID eines `DiscussionCategory` innerhalb dieses Repositorys.
* `clientMutationId: String` Ein eindeutiger Bezeichner für den Client, der die Mutation ausführt.

Rückgabetypfelder:

* `clientMutationId: String` Der eindeutige Bezeichner, der als Eingabe bereitgestellt wird.
* `discussion: Discussion` Die Diskussion, die erstellt wurde.

### updateDiscussion

Eingabefelder:

* `discussionId: ID!` Die Knoten-ID der zu aktualisierenden Diskussion.
* `body: String` Der neue Inhalt des Diskussionstexts.
* `title: String` Der neue Diskussionstitel.
* `categoryId: ID` Die Knoten-ID eines `DiscussionCategory` innerhalb desselben Repositorys, um diese Diskussion zu ändern.
* `clientMutationId: String` Ein eindeutiger Bezeichner für den Client, der die Mutation ausführt.

Rückgabetypfelder:

* `clientMutationId: String` Der eindeutige Bezeichner, der als Eingabe bereitgestellt wird.
* `discussion: Discussion` Die Diskussion, die geändert wurde.

### deleteDiscussion
Eingabefelder:

* `id: ID!` Die Knoten-ID der zu löschenden Diskussion.
* `clientMutationId: String` Ein eindeutiger Bezeichner für den Client, der die Mutation ausführt.

Rückgabetypfelder:

* `clientMutationId: String` Der eindeutige Bezeichner, der als Eingabe bereitgestellt wird.
* `discussion: Discussion` Die Diskussion, die gelöscht wurde.

### addDiscussionComment

Eingabefelder:

* `body: String!` Der Inhalt des Kommentars.
* `discussionId: ID!` Die Knoten-ID der Diskussion, um zu kommentieren.
* `replyToId: ID` Die Knoten-ID des Diskussionskommentars, um darauf zu antworten. Falls nicht vorhanden, ist der erstellte Kommentar ein Kommentar auf oberster Ebene.
* `clientMutationId: String` Ein eindeutiger Bezeichner für den Client, der die Mutation ausführt.

Rückgabetypfelder:

* `clientMutationId: String` Der eindeutige Bezeichner, der als Eingabe bereitgestellt wird.
* `comment: DiscussionComment` Der Diskussionskommentar, der erstellt wurde.

### updateDiscussionComment

Eingabefelder:

* `body: String!` Der neue Inhalt des Kommentartexts.
* `commentId: ID!` Die Knoten-ID des Diskussionskommentars, der aktualisiert werden soll.
* `clientMutationId: String` Ein eindeutiger Bezeichner für den Client, der die Mutation ausführt.

Rückgabetypfelder:

* `clientMutationId: String` Der eindeutige Bezeichner, der als Eingabe bereitgestellt wird.
* `comment: DiscussionComment` Der Diskussionskommentar, der aktualisiert wurde.

### deleteDiscussionComment

Eingabefelder:

* `id: ID!` Die Knoten-ID des zu löschenden Diskussionskommentars.
* `clientMutationId: String` Ein eindeutiger Bezeichner für den Client, der die Mutation ausführt.

Rückgabetypfelder:

* `clientMutationId: String` Der eindeutige Bezeichner, der als Eingabe bereitgestellt wird.
* `comment: DiscussionComment` Der Diskussionskommentar, der gelöscht wurde.

### markDiscussionCommentAsAnswer

Eingabefelder:

* `id: ID!` Die Knoten-ID des Diskussionskommentars, der als Antwort markiert werden soll.
* `clientMutationId: String` Ein eindeutiger Bezeichner für den Client, der die Mutation ausführt.

Rückgabetypfelder:

* `clientMutationId: String` Der eindeutige Bezeichner, der als Eingabe bereitgestellt wird.
* `discussion: Discussion` Die Diskussion, die den ausgewählten Kommentar enthält.

### unmarkDiscussionCommentAsAnswer

Eingabefelder:

* `id: ID!` Die Knoten-ID des Diskussionskommentars, um als Antwort zu deaktivieren.
* `clientMutationId: String` Ein eindeutiger Bezeichner für den Client, der die Mutation ausführt.

Rückgabetypfelder:

* `clientMutationId: String` Der eindeutige Bezeichner, der als Eingabe bereitgestellt wird.
* `discussion: Discussion` Die Diskussion, die den unmarkierten Kommentar enthält.

## Suche

Die Diskussion kann von der obersten Ebene `search` Feld zurückgegeben werden. Um nach Diskussionen zu suchen, gibst du `type` als `DISCUSSION` an. Der `SearchResultItemConnection` Typ hat ein `discussionCount` Feld, um die Anzahl der zurückgegebenen Diskussionen zu melden, und der `Discussion` Typ wird der `SearchResultItem` Union hinzugefügt. Weitere Informationen findest du unter "[Abfragen](/graphql/reference/queries#searchresultitemconnection)" und "[Diskussionen durchsuchen](/search-github/searching-on-github/searching-discussions)."
