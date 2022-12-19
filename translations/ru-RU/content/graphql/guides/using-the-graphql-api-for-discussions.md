---
title: Использование API GraphQL для обсуждений
intro: 'Сведения об использовании API GraphQL {% data variables.product.prodname_discussions %}.'
versions:
  feature: discussions
shortTitle: Use GraphQL for Discussions
ms.openlocfilehash: fd296c4e9390cac3500ba7319cb602366a37e262
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185620'
---
API GraphQL для {% data variables.product.prodname_discussions %} позволяет получать, создавать, изменять и удалять публикации обсуждений. Дополнительные сведения о {% data variables.product.prodname_discussions %} см. в разделе [Сведения об обсуждениях](/discussions/collaborating-with-your-community-using-discussions/about-discussions).

Этот API доступен для пользователей, прошедших проверку подлинности, приложений OAuth и приложений GitHub. Маркерам доступа требуется область `repo` для частных репозиториев и область `public_repo` для общедоступных репозиториев. Дополнительные сведения см. в разделе [Области для приложений OAuth](/developers/apps/scopes-for-oauth-apps).

## Поля

### Repository.discussions

Вывод списка обсуждений в репозитории. Если указано поле `categoryId`, возвращаются результаты только этой категории.

_Сигнатура:_

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

Возвращаются доступные категории обсуждений, определенные в этом репозитории. Каждый репозиторий может содержать до 25 категорий. Дополнительные сведения о категориях обсуждений см. в разделе [Сведения об обсуждениях](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions).

_Сигнатура:_

```graphql
discussionCategories(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : DiscussionCategoryConnection!
```

### Repository.discussion

Получение обсуждения. Возвращает `null`, если обсуждение с указанным идентификатором не существует.

_Сигнатура:_

```graphql
discussion(number: Int!) : Discussion
```

### Repository.pinnedDiscussions

Возвращаются обсуждения, закрепленные в этом репозитории, в порядке позиции закрепления.

_Сигнатура:_

```graphql
pinnedDiscussions(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : PinnedDiscussionConnection!
```

## Объекты

**Примечание**. Для краткости типы соединений здесь не рассматриваются. Каждый тип соединения, упомянутый в схеме, соответствует тому же шаблону, что и другие соединения в API GraphQL. Дополнительные сведения см. в разделе [Общие сведения о GraphQL](/graphql/guides/introduction-to-graphql#connection).

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

### Разговор

<details>
<summary>Поля</summary>

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
<summary>Поля</summary>

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
<summary>Поля</summary>

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
<summary>Поля</summary>

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
<summary>Значения</summary>

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
<summary>Значения</summary>

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

## Интерфейсы

### RepositoryDiscussionAuthor

Реализуется типами `User` и `Organization`. **Примечание**. С объектом `Organization` обсуждения будут связаны только в том случае, если он был преобразован из объекта `User`.

<details>
<summary>Поля</summary>

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

Также реализуется типами `User` и `Organization`.

<details>
<summary>Поля</summary>

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

## Изменения

Эти изменения соответствуют тому же шаблону реализации, что и другие изменения в API GraphQL. Каждое изменение принимает один аргумент типа `Input`, указываемый после изменения, и возвращает тип `Payload`, содержащий заданные поля.

Например, это базовое изменение `createDiscussion`, которое создает обсуждение:

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

Поля ввода:

* `body: String!` Текст нового обсуждения.
* `title: String!` Название нового обсуждения.
* `repositoryId: ID!` Идентификатор репозитория, в котором создается обсуждение.
* `categoryId: ID!` Идентификатор `DiscussionCategory` в этом репозитории.
* `clientMutationId: String` Уникальный идентификатор клиента, выполняющего изменение.

Поля типа возвращаемого значения:

* `clientMutationId: String` Уникальный идентификатор, предоставленный в качестве входных данных.
* `discussion: Discussion` Созданное обсуждение.

### updateDiscussion

Поля ввода:

* `discussionId: ID!` Идентификатор узла обновляемого обсуждения.
* `body: String` Новое содержимое текста обсуждения.
* `title: String` Новое название обсуждения.
* `categoryId: ID` Идентификатор узла `DiscussionCategory` в том же репозитории, на который нужно изменить это обсуждение.
* `clientMutationId: String` Уникальный идентификатор клиента, выполняющего изменение.

Поля типа возвращаемого значения:

* `clientMutationId: String` Уникальный идентификатор, предоставленный в качестве входных данных.
* `discussion: Discussion` Измененное обсуждение.

### deleteDiscussion
Поля ввода:

* `id: ID!` Идентификатор узла удаляемого обсуждения.
* `clientMutationId: String` Уникальный идентификатор клиента, выполняющего изменение.

Поля типа возвращаемого значения:

* `clientMutationId: String` Уникальный идентификатор, предоставленный в качестве входных данных.
* `discussion: Discussion` Удаленное обсуждение.

### addDiscussionComment

Поля ввода:

* `body: String!` Содержимое комментария.
* `discussionId: ID!` Идентификатор узла обсуждения, к которому добавляется комментарий.
* `replyToId: ID` Идентификатор узла комментария обсуждения, на который нужно ответить. При отсутствии созданный комментарий будет комментарием верхнего уровня.
* `clientMutationId: String` Уникальный идентификатор клиента, выполняющего изменение.

Поля типа возвращаемого значения:

* `clientMutationId: String` Уникальный идентификатор, предоставленный в качестве входных данных.
* `comment: DiscussionComment` Созданный комментарий к обсуждению.

### updateDiscussionComment

Поля ввода:

* `body: String!` Новое содержимое текста комментария.
* `commentId: ID!` Идентификатор узла обновляемого комментария обсуждения.
* `clientMutationId: String` Уникальный идентификатор клиента, выполняющего изменение.

Поля типа возвращаемого значения:

* `clientMutationId: String` Уникальный идентификатор, предоставленный в качестве входных данных.
* `comment: DiscussionComment` Обновленный комментарий обсуждения.

### deleteDiscussionComment

Поля ввода:

* `id: ID!` Идентификатор узла удаляемого комментария обсуждения.
* `clientMutationId: String` Уникальный идентификатор клиента, выполняющего изменение.

Поля типа возвращаемого значения:

* `clientMutationId: String` Уникальный идентификатор, предоставленный в качестве входных данных.
* `comment: DiscussionComment` Удаленный комментарий обсуждения.

### markDiscussionCommentAsAnswer

Поля ввода:

* `id: ID!` Идентификатор узла комментария обсуждения, который нужно пометить как ответ.
* `clientMutationId: String` Уникальный идентификатор клиента, выполняющего изменение.

Поля типа возвращаемого значения:

* `clientMutationId: String` Уникальный идентификатор, предоставленный в качестве входных данных.
* `discussion: Discussion` Обсуждение с выбранным комментарием.

### unmarkDiscussionCommentAsAnswer

Поля ввода:

* `id: ID!` Идентификатор узла комментария обсуждения, с которого нужно снять пометку ответа.
* `clientMutationId: String` Уникальный идентификатор клиента, выполняющего изменение.

Поля типа возвращаемого значения:

* `clientMutationId: String` Уникальный идентификатор, предоставленный в качестве входных данных.
* `discussion: Discussion` Обсуждение с комментарием, с которого снята пометка.

## Поиск

Обсуждение может быть возвращено из поля `search` верхнего уровня. Чтобы найти обсуждение, укажите `type` `DISCUSSION`. Тип `SearchResultItemConnection` имеет поле `discussionCount`, в котором сообщается количество возвращенных обсуждений. Тип `Discussion` добавляется в объединение `SearchResultItem`. Дополнительные сведения см. в разделах [Запросы](/graphql/reference/queries#searchresultitemconnection) и [Поиск в обсуждениях](/search-github/searching-on-github/searching-discussions).
