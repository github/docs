---
title: ディスカッションでのGraphQL APIの利用
intro: '{% data variables.product.prodname_discussions %} GraphQL APIの使い方を学んでください。'
versions:
  feature: discussions
shortTitle: Use GraphQL for Discussions
ms.openlocfilehash: 1512082737df4c92942a40007d2c75897edb1061
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408844'
---
{% data variables.product.prodname_discussions %} GraphQL APIを使うと、ディスカッションのポストの取得、作成、編集、削除ができます。 {% data variables.product.prodname_discussions %} の詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。

このAPIは、認証を受けたユーザ、OAuth App、GitHub Appが利用できます。 アクセス トークンには、プライベート リポジトリの `repo` スコープとパブリック リポジトリの `public_repo` スコープが必要です。 詳細については、「[OAuth アプリのスコープ](/developers/apps/scopes-for-oauth-apps)」を参照してください。

## フィールド

### Repository.discussions

リポジトリ内のディスカッションをリストします。 `categoryId` が指定されている場合、そのカテゴリ内の結果だけが返されます。

_シグニチャ:_

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

このリポジトリ内で定義されている利用可能なディスカッションのカテゴリを返します。 各リポジトリは、最大で10個のカテゴリを持つことができます。 ディスカッション カテゴリの詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)」を参照してください。

_シグニチャ:_

```graphql
discussionCategories(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : DiscussionCategoryConnection!
```

### Repository.discussion

ディスカッションを取得します。 指定された ID を持つディスカッションが存在しない場合、`null` を返します。

_シグニチャ:_

```graphql
discussion(number: Int!) : Discussion
```

### Repository.pinnedDiscussions

このリポジトリにピン止めされたディスカッションを、ピンの位置の順序で返します。

_シグニチャ:_

```graphql
pinnedDiscussions(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : PinnedDiscussionConnection!
```

## オブジェクト

**注:** 簡潔にするために、ここでは接続の種類は展開されません。 このスキーマで触れられているそれぞれのconnectionタイプは、GraphQL APIの他のconnectionと同じパターンに従います。 詳細については、「[GraphQL の概要](/graphql/guides/introduction-to-graphql#connection)」をご覧ください。

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

### 考察 (Discussion)

<details>
<summary>フィールド:</summary>

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
<summary>フィールド</summary>

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
<summary>フィールド</summary>

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
<summary>フィールド:</summary>

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
<summary>値</summary>

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
<summary>値</summary>

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

## インターフェイス

### RepositoryDiscussionAuthor

`User` と `Organization` 型によって実装されます。 **注:** それが `User` から変換されたものである場合にのみ、`Organization` は、それに関連するディスカッションを行います。

<details>
<summary>フィールド</summary>

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

また、`User` および `Organization` 型によって実装されます。

<details>
<summary>フィールド</summary>

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

## ミューテーション

以下のミューテーションは、GraphQL API中の他のミューテーションと同じ実装パターンに従っています。 それぞれのミューテーションは、そのミューテーションから名付けられた `Input` 型の引数を 1 つ取り、指定されたフィールドを含む `Payload` 型を返します。

たとえば、これは基本の `createDiscussion` ミューテーションで、新しいディスカッションを作成します。

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

入力フィールド:

* `body: String!` 新しいディスカッションの本文。
* `title: String!` 新しいディスカッションのタイトル。
* `repositoryId: ID!` ディスカッションを作成するリポジトリの ID。
* `categoryId: ID!` このリポジトリ内の `DiscussionCategory` の ID。
* `clientMutationId: String` ミューテーションを行っているクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として提供される一意の識別子。
* `discussion: Discussion` 作成されたディスカッション。

### updateDiscussion

入力フィールド:

* `discussionId: ID!` 更新するディスカッションのノード ID。
* `body: String` ディスカッション本文の新しい内容。
* `title: String` 新しいディスカッション タイトル。
* `categoryId: ID` このディスカッションを変更する同じリポジトリ内の `DiscussionCategory` のノード ID。
* `clientMutationId: String` ミューテーションを行っているクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として提供される一意の識別子。
* `discussion: Discussion` 変更されたディスカッション。

### deleteDiscussion
入力フィールド:

* `id: ID!` 削除するディスカッションのノード ID。
* `clientMutationId: String` ミューテーションを行っているクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として提供される一意の識別子。
* `discussion: Discussion` 削除されたディスカッション。

### addDiscussionComment

入力フィールド:

* `body: String!` コメントの内容。
* `discussionId: ID!` コメントするディスカッションのノード ID。
* `replyToId: ID` 返信するディスカッション コメントのノード ID。 存在しなければ、作成されるコメントはトップレベルのコメントになる。
* `clientMutationId: String` ミューテーションを行っているクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として提供される一意の識別子。
* `comment: DiscussionComment` 作成されたディスカッション コメント。

### updateDiscussionComment

入力フィールド:

* `body: String!` コメント本文の新しい内容。
* `commentId: ID!` 更新するディスカッション コメントのノード ID。
* `clientMutationId: String` ミューテーションを行っているクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として提供される一意の識別子。
* `comment: DiscussionComment` 更新されたディスカッション コメント。

### deleteDiscussionComment

入力フィールド:

* `id: ID!` 削除するディスカッション コメントのノード ID。
* `clientMutationId: String` ミューテーションを行っているクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として提供される一意の識別子。
* `comment: DiscussionComment` 削除されたディスカッション コメント。

### markDiscussionCommentAsAnswer

入力フィールド:

* `id: ID!` 解答としてマークするディスカッション コメントのノード ID。
* `clientMutationId: String` ミューテーションを行っているクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として提供される一意の識別子。
* `discussion: Discussion` 選択したコメントを含むディスカッション。

### unmarkDiscussionCommentAsAnswer

入力フィールド:

* `id: ID!` 解答としてのマークを解除するディスカッション コメントのノード ID。
* `clientMutationId: String` ミューテーションを行っているクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として提供される一意の識別子。
* `discussion: Discussion` マークされていないコメントを含むディスカッション。

## 検索

最上位の `search` フィールドからディスカッションが返される場合があります。 ディスカッションを検索するには、`DISCUSSION` として `type` を指定します。 `SearchResultItemConnection` 型には、返されたディスカッションの数を報告するための `discussionCount` フィールドがあり、`Discussion` 型が `SearchResultItem` ユニオンに追加されます。 詳細については、「[クエリ](/graphql/reference/queries#searchresultitemconnection)」および「[ディスカッションを検索する](/search-github/searching-on-github/searching-discussions)」を参照してください。
