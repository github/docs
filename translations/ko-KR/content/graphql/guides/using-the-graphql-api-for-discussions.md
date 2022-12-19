---
title: 토론에 GraphQL API 사용
intro: '{% data variables.product.prodname_discussions %} GraphQL API를 사용하는 방법을 알아봅니다.'
versions:
  feature: discussions
shortTitle: Use GraphQL for Discussions
ms.openlocfilehash: fd296c4e9390cac3500ba7319cb602366a37e262
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185621'
---
{% data variables.product.prodname_discussions %} GraphQL API를 사용하면 토론 게시물을 다운로드, 생성, 편집, 삭제할 수 있습니다. {% data variables.product.prodname_discussions %}에 대한 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”를 참조하세요.

이 API는 인증된 사용자, OAuth 앱, GitHub 앱에서 사용할 수 있습니다. 액세스 토큰에는 프라이빗 리포지토리의 `repo` 범위와 퍼블릭 리포지토리의 `public_repo` 범위가 필요합니다. 자세한 내용은 “[OAuth 앱에 대한 범위](/developers/apps/scopes-for-oauth-apps)”를 참조하세요.

## 필드

### Repository.discussions

리포지토리 내의 토론을 나열합니다. `categoryId`를 지정하면 해당 범주 내의 결과만 반환됩니다.

서명:

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

이 리포지토리 내에 정의된 사용 가능한 토론 범주를 반환합니다. 각 리포지토리에는 최대 25개의 범주가 있을 수 있습니다. 토론 범주에 대한 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)”를 참조하세요.

서명:

```graphql
discussionCategories(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : DiscussionCategoryConnection!
```

### Repository.discussion

토론을 가져옵니다. 지정된 ID를 사용하는 토론이 없는 경우 `null`을 반환합니다.

서명:

```graphql
discussion(number: Int!) : Discussion
```

### Repository.pinnedDiscussions

이 리포지토리에 고정된 토론을 고정 위치로 정렬하여 반환합니다.

서명:

```graphql
pinnedDiscussions(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : PinnedDiscussionConnection!
```

## 개체

**참고:** 간단히 말하면 연결 형식은 여기서 확장되지 않습니다. 스키마에서 언급된 각 연결 형식은 GraphQL API의 다른 연결과 동일한 패턴을 따릅니다. 자세한 내용은 “[GraphQL 소개](/graphql/guides/introduction-to-graphql#connection)”를 참조하세요.

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

### 토론(Discussion)

<details>
<summary>필드:</summary>

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
<summary>필드</summary>

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
<summary>필드</summary>

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
<summary>필드:</summary>

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
<summary>값</summary>

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
<summary>값</summary>

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

## 인터페이스

### RepositoryDiscussionAuthor

`User` 및 `Organization` 형식에 의해 구현됩니다. **참고:** `Organization`은 `User`로부터 변환된 경우에만 관련 토론을 갖게 됩니다.

<details>
<summary>필드</summary>

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

역시 `User` 및 `Organization` 형식에 의해 구현됩니다.

<details>
<summary>필드</summary>

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

## 변형

이러한 변형은 GraphQL API의 다른 변형과 동일한 구현 패턴을 따릅니다. 각 변형은 변형의 이름을 따서 명명된 `Input` 형식의 단일 인수를 받아들이고, 지정된 필드가 포함된 `Payload` 형식을 반환합니다.

예를 들어, 다음은 새 토론을 만드는 기본 `createDiscussion` 변형입니다.

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

입력 필드:

* `body: String!` 새 토론의 본문입니다.
* `title: String!` 새 토론의 제목입니다.
* `repositoryId: ID!` 토론을 만들 리포지토리의 ID입니다.
* `categoryId: ID!` 이 리포지토리 내에 있는 `DiscussionCategory`의 ID입니다.
* `clientMutationId: String` 변형을 수행하는 클라이언트에 대한 고유 식별자입니다.

반환 형식 필드:

* `clientMutationId: String` 입력으로서 제공되는 고유 식별자입니다.
* `discussion: Discussion` 만들어진 토론입니다.

### updateDiscussion

입력 필드:

* `discussionId: ID!` 업데이트할 토론의 노드 ID입니다.
* `body: String` 토론 본문의 새 내용입니다.
* `title: String` 새 토론 제목입니다.
* `categoryId: ID` 이 토론을 변경할 동일한 리포지토리 내에 있는 `DiscussionCategory`의 노드 ID입니다.
* `clientMutationId: String` 변형을 수행하는 클라이언트에 대한 고유 식별자입니다.

반환 형식 필드:

* `clientMutationId: String` 입력으로서 제공되는 고유 식별자입니다.
* `discussion: Discussion` 수정된 토론입니다.

### deleteDiscussion
입력 필드:

* `id: ID!` 삭제할 토론의 노드 ID입니다.
* `clientMutationId: String` 변형을 수행하는 클라이언트에 대한 고유 식별자입니다.

반환 형식 필드:

* `clientMutationId: String` 입력으로서 제공되는 고유 식별자입니다.
* `discussion: Discussion` 삭제된 토론입니다.

### addDiscussionComment

입력 필드:

* `body: String!` 주석의 내용입니다.
* `discussionId: ID!` 주석을 달 토론의 노드 ID입니다.
* `replyToId: ID` 회신할 토론 주석의 노드 ID입니다. 없는 경우, 만들어진 주석은 최상위 주석이 됩니다.
* `clientMutationId: String` 변형을 수행하는 클라이언트에 대한 고유 식별자입니다.

반환 형식 필드:

* `clientMutationId: String` 입력으로서 제공되는 고유 식별자입니다.
* `comment: DiscussionComment` 만들어진 토론 주석입니다.

### updateDiscussionComment

입력 필드:

* `body: String!` 주석 본문의 새 내용입니다.
* `commentId: ID!` 업데이트할 토론 주석의 노드 ID입니다.
* `clientMutationId: String` 변형을 수행하는 클라이언트에 대한 고유 식별자입니다.

반환 형식 필드:

* `clientMutationId: String` 입력으로서 제공되는 고유 식별자입니다.
* `comment: DiscussionComment` 업데이트된 토론 주석입니다.

### deleteDiscussionComment

입력 필드:

* `id: ID!` 삭제할 토론 주석의 노드 ID입니다.
* `clientMutationId: String` 변형을 수행하는 클라이언트에 대한 고유 식별자입니다.

반환 형식 필드:

* `clientMutationId: String` 입력으로서 제공되는 고유 식별자입니다.
* `comment: DiscussionComment` 삭제된 토론 주석입니다.

### markDiscussionCommentAsAnswer

입력 필드:

* `id: ID!` 답변으로 표시할 토론 주석의 노드 ID입니다.
* `clientMutationId: String` 변형을 수행하는 클라이언트에 대한 고유 식별자입니다.

반환 형식 필드:

* `clientMutationId: String` 입력으로서 제공되는 고유 식별자입니다.
* `discussion: Discussion` 선택한 주석이 포함된 토론입니다.

### unmarkDiscussionCommentAsAnswer

입력 필드:

* `id: ID!` 답변으로 표시를 해제할 토론 주석의 노드 ID입니다.
* `clientMutationId: String` 변형을 수행하는 클라이언트에 대한 고유 식별자입니다.

반환 형식 필드:

* `clientMutationId: String` 입력으로서 제공되는 고유 식별자입니다.
* `discussion: Discussion` 표시되지 않은 주석이 포함된 토론입니다.

## 검색

토론은 최상위 `search` 필드에서 반환될 수 있습니다. 토론을 검색하려면 `type`을 `DISCUSSION`으로 지정합니다. `SearchResultItemConnection` 형식에는 반환된 토론 수를 보고하는 `discussionCount` 필드가 있으며 `Discussion` 형식은 `SearchResultItem` 공용 구조체에 추가됩니다. 자세한 내용은 “[쿼리](/graphql/reference/queries#searchresultitemconnection)” 및 “[토론 검색](/search-github/searching-on-github/searching-discussions)”을 참조하세요.
