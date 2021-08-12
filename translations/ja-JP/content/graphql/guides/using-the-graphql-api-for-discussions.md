---
title: ディスカッションでのGraphQL APIの利用
intro: GitHub Discussions GraphQL APIの使い方を学んでください。
versions:
  free-pro-team: '*'
---

{% data variables.product.prodname_discussions %} GraphQL APIを使うと、ディスカッションのポストの取得、作成、編集、削除ができます。 {% data variables.product.prodname_discussions %}に関する詳しい情報については「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。

このAPIは、認証を受けたユーザ、OAuth App、GitHub Appが利用できます。 プライベートリポジトリではアクセストークンに`repo`スコープが必要であり、パブリックリポジトリでは`public_repo`が必要です。 詳しい情報については「[OAuth Appのスコープ](/developers/apps/scopes-for-oauth-apps)」を参照してください。

## フィールド

### Repository.discussions

リポジトリ内のディスカッションをリストします。 `categoryId`が指定されている場合、そのカテゴリ内の結果だけが返されます。

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
ディスカッションの並び替えの順序
"""
input DiscussionOrder {
  """
  ディスカッションの並び替えの基準になるフィールド。
  """
  field: DiscussionOrderField!

  """
  指定されたフィールドでディスカッションを並び替える向き。
  """
  direction: OrderDirection!
}
```

```graphql
"""
ディスカッションの接続を並び替えできるプロパティ。
"""
enum DiscussionOrderField {
  """
  ディスカッションを作成時刻で並び替える。
  """
  CREATED_AT

  """
  ディスカッションを最新の変更時間で並び替える。
  """
  UPDATED_AT
}
```

### Repository.discussionCategories

このリポジトリ内で定義されている利用可能なディスカッションのカテゴリを返します。 各リポジトリは、最大で10個のカテゴリを持つことができます。 ディスカッションのカテゴリに関する詳しい情報については「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)」を参照してください。

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

ディスカッションを取得します。 指定されたIDのディスカッションが存在しない場合、`null`を返します。

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

**ノート:** 簡潔にするために、connectionタイプはここでは展開しません。 このスキーマで触れられているそれぞれのconnectionタイプは、GraphQL APIの他のconnectionと同じパターンに従います。 詳しい情報については「[GraphQLの紹介](/graphql/guides/introduction-to-graphql#connection)」を参照してください。

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
<summary>フィールド:</summary>

```graphql
"""
リポジトリ内のディスカッション。
"""
type Discussion implements Comment & Deletable & Lockable & Node & Reactable & RepositoryNode & Subscribable & Updatable {
  """
  会話がロックされている理由。
  """
  activeLockReason: LockReason

  """
  このディスカッションの回答として選択されたコメントがある場合、そのコメント。
  """
  answer: DiscussionComment

  """
  このディスカッションの回答をユーザが選択している場合、その選択した時刻。
  """
  answerChosenAt: DateTime

  """
  このディスカッションの回答が選択されている場合、その選択をしたユーザ。
  """
  answerChosenBy: Actor

  """
  コメントを作成したアクター。
  """
  author: Actor

  """
  コメントの主題との作者の関連。
  """
  authorAssociation: CommentAuthorAssociation!

  """
  ディスカッションポストのメインのテキスト。
  """
  body: String!

  """
  HTMLにレンダリングされたボディ。
  """
  bodyHTML: HTML!

  """
  テキストにレンダリングされたボディ。
  """
  bodyText: String!

  """
  このディスカッションのカテゴリ。
  """
  category: DiscussionCategory!

  """
  ディスカッションへの返信。
  """
  comments(
    """
    指定されたカーソルの後に来るリスト中の要素を返す。
    """
    after: String

    """
    指定されたカーソルの前に来るリスト中の要素を返す。
    """
    before: String

    """
    リストから先頭の_n_要素を返す。
    """
    first: Int

    """
    リストから末尾の_n_要素を返す。
    """
    last: Int
  ): DiscussionCommentConnection!

  """
  オブジェクトが作成された日時を示す。
  """
  createdAt: DateTime!

  """
  このコメントがメール返信を介して作成されたかを示す。
  """
  createdViaEmail: Boolean!

  """
  データベースの主キーを示す。
  """
  databaseId: Int

  """
  コメントを編集したアクター。
  """
  editor: Actor
  id: ID!

  """
  このコメントが編集され、作成データを含むかを示す。
  """
  includesCreatedEdit: Boolean!

  """
  編集者が最後に編集した日時
  """
  lastEditedAt: DateTime

  """
  オブジェクトがロックされていれば`true`
  """
  locked: Boolean!

  """
  リポジトリ中でこのディスカッションを特定する番号。
  """
  number: Int!

  """
  コメントが公開された日時を示す。
  """
  publishedAt: DateTime

  """
  主題に残された内容でグループ化されたリアクションのリスト。
  """
  reactionGroups: [ReactionGroup!]

  """
  Issueに残されたリアクションのリスト。
  """
  reactions(
    """
    指定されたカーソルの後に来るリスト中の要素を返す。
    """
    after: String

    """
    指定されたカーソルの前に来るリスト中の要素を返す。
    """
    before: String

    """
    絵文字でリアクションのフィルタリングをできるようにする。
    """
    content: ReactionContent

    """
    リストから先頭の_n_要素を返す。
    """
    first: Int

    """
    リストから末尾の_n_要素を返す。
    """
    last: Int

    """
    リアクションが返される順序を指定できるようにする。
    """
    orderBy: ReactionOrder
  ): ReactionConnection!

  """
  このノードに関連づけられているリポジトリ。
  """
  repository: Repository!

  """
  このディスカッションのパス。
  """
  resourcePath: URI!

  """
  このディスカッションのタイトル。
  """
  title: String!

  """
  オブジェクトが最後に更新された日時を示す。
  """
  updatedAt: DateTime!

  """
  このディスカッションのURL。
  """
  url: URI!

  """
  このコンテンツに対する編集のリスト。
  """
  userContentEdits(
    """
    指定されたカーソフトの後に来るリスト中の要素を返す。
    """
    after: String

    """
    指定されたカーソルの前に来るリスト中の要素を返す。
    """
    before: String

    """
    リストから先頭の_n_要素を返す。
    """
    first: Int

    """
    リストから末尾の_n_要素を返す。
    """
    last: Int
  ): UserContentEditConnection

  """
  現在のビューアがこのオブジェクトを削除できるかを示す。
  """
  viewerCanDelete: Boolean!

  """
  ユーザがこの主題に反応できるか
  """
  viewerCanReact: Boolean!

  """
  ビューアがリポジトリのサブスクリプションのステータスを変更できるかを示す。
  """
  viewerCanSubscribe: Boolean!

  """
  現在のビューアがこのオブジェクトを更新できるかを示す。
  """
  viewerCanUpdate: Boolean!

  """
  ビューアがこのコメントを作成したか。
  """
  viewerDidAuthor: Boolean!

  """
  サブスクライブ可能なエンティティをビューアがWatchしているか、していないか、あるいは無視しているかを識別する。
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
ディスカッションのコメント。
"""
type DiscussionComment implements Comment & Deletable & Minimizable & Node & Reactable & Updatable & UpdatableComment {
  """
  コメントを作成したアクター。
  """
  author: Actor

  """
  コメントの主題との作者の関連。
  """
  authorAssociation: CommentAuthorAssociation!

  """
  Markdown形式のボディ。
  """
  body: String!

  """
  HTMLにレンダリングされたボディ。
  """
  bodyHTML: HTML!

  """
  テキストにレンダリングされたボディ。
  """
  bodyText: String!

  """
  オブジェクトが作成された日時を示す。
  """
  createdAt: DateTime!

  """
  このコメントがメール返信を介して作成されたかを示す。
  """
  createdViaEmail: Boolean!

  """
  データベースの主キーを示す。
  """
  databaseId: Int

  """
  このreplied-toコメントが削除された日時
  """
  deletedAt: DateTime

  """
  このコメントが作成されたディスカッション
  """
  discussion: Discussion

  """
  コメントを編集したアクター。
  """
  editor: Actor
  id: ID!

  """
  このコメントが編集され、作成データを含むかを示す。
  """
  includesCreatedEdit: Boolean!

  """
  このコメントがディスカッションの回答として選択されたか？
  """
  isAnswer: Boolean!

  """
  コメントが最小化されているかどうかを返す。
  """
  isMinimized: Boolean!

  """
  編集が最後に行われた日時
  """
  lastEditedAt: DateTime

  """
  コメントが最小化されている理由を返す。
  """
  minimizedReason: String

  """
  コメントが公開された日時を特定する。
  """
  publishedAt: DateTime

  """
  主題に残された内容でグループ化されたリアクションのリスト。
  """
  reactionGroups: [ReactionGroup!]

  """
  Issueに残されたリアクションのリスト。
  """
  reactions(
    """
    指定されたカーソルの後に来るリスト中の要素を返す。
    """
    after: String

    """
    指定されたカーソルの前に来るリスト中の要素を返す。
    """
    before: String

    """
    リアクションを絵文字でフィルタリングできるようにする。
    """
    content: ReactionContent

    """
    リストから先頭の_n_要素を返す。
    """
    first: Int

    """
    リストから末尾の_n_要素を返す。
    """
    last: Int

    """
    リアクションが返される順序を指定できるようにする。
    """
    orderBy: ReactionOrder
  ): ReactionConnection!

  """
  このコメントに対するスレッド化された返信。
  """
  replies(
    """
    指定されたカーソルの後に来るリスト中の要素を返す。
    """
    after: String

    """
    指定されたカーソルの前に来るリスト中の要素を返す。
    """
    before: String

    """
    リストから先頭の_n_要素を返す。
    """
    first: Int

    """
    リストから末尾の_n_要素を返す。
    """
    last: Int
  ): DiscussionCommentConnection!

  """
  このコメントの返信先のディスカッションコメント
  """
  replyTo: DiscussionComment

  """
  このディスカッションコメントのパス。
  """
  resourcePath: URI!

  """
  オブジェクトが最後に更新された日時を示す。
  """
  updatedAt: DateTime!

  """
  このディスカッションコメントのURL。
  """
  url: URI!

  """
  このコンテンツに対する編集のリスト。
  """
  userContentEdits(
    """
    指定されたカーソフトの後に来るリスト中の要素を返す。
    """
    after: String

    """
    指定されたカーソルの前に来るリスト中の要素を返す。
    """
    before: String

    """
    リストから先頭の_n_要素を返す。
    """
    first: Int

    """
    リストから末尾の_n_要素を返す。
    """
    last: Int
  ): UserContentEditConnection

  """
  現在のビューアがこのオブジェクトを削除できるかを示す。
  """
  viewerCanDelete: Boolean!

  """
  現在のユーザがこのコメントを回答としてマークできるか？
  """
  viewerCanMarkAsAnswer: Boolean!

  """
  現在のビューアがこのオブジェクトを最小化できるかを示す。
  """
  viewerCanMinimize: Boolean!

  """
  ユーザがこの主題に反応できるか
  """
  viewerCanReact: Boolean!

  """
  現在のユーザがこのコメントの回答としてのマークを解除できるか？
  """
  viewerCanUnmarkAsAnswer: Boolean!

  """
  現在のビューアがこのオブジェクトを更新できるかを示す。
  """
  viewerCanUpdate: Boolean!

  """
  現在のビューアがこのコメントを更新できない理由。
  """
  viewerCannotUpdateReasons: [CommentCannotUpdateReason!]!

  """
  ビューアがこのコメントを作成したか。
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
リポジトリ中のディスカッションのカテゴリ。
"""
type DiscussionCategory implements Node & RepositoryNode {
  """
  オブジェクトが作成された日時を示す。
  """
  createdAt: DateTime!

  """
  このカテゴリの説明。
  """
  description: String

  """
  このカテゴリを表す絵文字。
  """
  emoji: String!

  """
  HTMLとしてレンダリングされたこのカテゴリの絵文字。
  """
  emojiHTML: HTML!
  id: ID!

  """
  このカテゴリ中のディスカッションがmarkDiscussionCommentAsAnswerミューテーションでの回答の選択をサポートしているか。
  """
  isAnswerable: Boolean!

  """
  このカテゴリの名前。
  """
  name: String!

  """
  このノードに関連づけられているリポジトリ。
  """
  repository: Repository!

  """
  オブジェクトが最後に更新された日時を示す。
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
ピン止めされたディスカッションは、リポジトリのインデックスページにピン止めされたディスカッション。
"""
type PinnedDiscussion implements Node & RepositoryNode {
  """
  オブジェクトが作成された日時を示す。
  """
  createdAt: DateTime!

  """
  データベースの主キーを示す。
  """
  databaseId: Int

  """
  ピン止めされたディスカッション。
  """
  discussion: Discussion!

  """
  選択されたグラデーションのカラーストップ
  """
  gradientStopColors: [String!]!
  id: ID!

  """
  バックグラウンドのテクスチャパターン
  """
  pattern: PinnedDiscussionPattern!

  """
  このディスカッションをピン止めしたアクター。
  """
  pinnedBy: Actor!

  """
  事前設定されたバックグラウンドのグラデーションのオプション
  """
  preconfiguredGradient: PinnedDiscussionGradient

  """
  このノードに関連づけられたリポジトリ。
  """
  repository: Repository!

  """
  オブジェクトが最後に更新された日時を示す。
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
リポジトリ内にピン止めされたディスカッションのスタイルに使われることがある、事前設定されたバックグラウンドパターン。
"""
enum PinnedDiscussionPattern {
  """
  上向きのシェブロンパターン
  """
  CHEVRON_UP

  """
  中空のドットパターン
  """
  DOT

  """
  ドットパターン
  """
  DOT_FILL

  """
  ハートパターン
  """
  HEART_FILL

  """
  友好的なoctocatの顔のパターン
  """
  OCTOFACE

  """
  プラス記号のパターン
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
リポジトリ内にピン止めされたディスカッションのスタイルに使われることがある、事前設定されたグラデーション。
"""
enum PinnedDiscussionGradient {
  """
  青からミントへのグラデーション
  """
  BLUE_MINT

  """
  青から紫へのグラデーション
  """
  BLUE_PURPLE

  """
  ピンクから青へのグラデーション
  """
  PINK_BLUE

  """
  紫からコーラルへのグラデーション
  """
  PURPLE_CORAL

  """
  赤からオレンジへのグラデーション
  """
  RED_ORANGE
}
```

</details>

## インターフェース

### RepositoryDiscussionAuthor

`User`及び`Organization`型によって実装されている。 **ノート:** `Organization`は、`User`から変換されたものである場合、自身に関連づけられたディスカッションだけを持つ。

<details>
<summary>フィールド</summary>

```graphql
"""
リポジトリ内のディスカッションの作者を表す。
"""
interface RepositoryDiscussionAuthor {
  """
  このユーザが開始したディスカッション。
  """
  repositoryDiscussions(
    """
    指定されたカーソルの後に来るリスト中の要素を返す。
    """
    after: String

    """
    回答済みもしくは未回答のディスカッションのみにフィルタリングする。 デフォルトは
    回答済み及び未回答のディスカッションをどちらも含む。
    """
    answered: Boolean = null

    """
    指定されたカーソルの前に来るリスト中の要素を返す。
    """
    before: String

    """
    リストから先頭の_n_要素を返す。
    """
    first: Int

    """
    リストから末尾の_n_要素を返す。
    """
    last: Int

    """
    接続から返されたディスカッションの並び替えのオプション。
    """
    orderBy: DiscussionOrder = {field: CREATED_AT, direction: DESC}

    """
    特定のリポジトリ内のディスカッションだけになるようディスカッションをフィルタリングする。
    """
    repositoryId: ID
  ): DiscussionConnection!
}
```

</details>

### RepositoryDiscussionCommentAuthor

やはり`User`及び`Organization`型によって実装されている。

<details>
<summary>フィールド</summary>

```graphql
"""
リポジトリ内のディスカッションコメントの作者を表す。
"""
interface RepositoryDiscussionCommentAuthor {
  """
  このユーザが作成したディスカッションコメント。.
  """
  repositoryDiscussionComments(
    """
    指定されたカーソルの後に来るリスト中の要素を返す。
    """
    after: String

    """
    指定されたカーソルの前に来るリスト中の要素を返す。
    """
    before: String

    """
    リストから先頭の_n_要素を返す。
    """
    first: Int

    """
    リストから末尾の_n_要素を返す。
    """
    last: Int

    """
    回答としてマークされたものだけにディスカッションコメントをフィルタリングする。
    """
    onlyAnswers: Boolean = false

    """
    指定されたリポジトリ内のものだけにディスカッションコメントをフィルタリングする。
    """
    repositoryId: ID
  ): DiscussionCommentConnection!
}
```

</details>

## ミューテーション

以下のミューテーションは、GraphQL API中の他のミューテーションと同じ実装パターンに従っています。 それぞれのミューテーションは、そのミューテーションから名付けられた`Input`型の引数を1つ取り、指定されたフィールドを含む`Payload`型を返します。

たとえば、これは基本の`createDiscussion`ミューテーションで、新しいディスカッションを作成します。

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

* `body: String!` 新しいディスカッションのボディ。
* `title: String!` 新しいディスカッションのタイトル。
* `repositoryId: ID!` ディスカッションを作成するリポジトリのID。
* `categoryId: ID!` このリポジトリ内の`DiscussionCategory`のID。
* `clientMutationId: String` ミューテーションを実行するクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として渡された一意の識別子。
* `discussion: Discussion` 作成されたディスカッション。

### updateDiscussion

入力フィールド:

* `discussionId: ID!` 更新するディスカッションのノードID。
* `body: String` ディスカッションのボディの新しい内容。
* `title: String` ディスカッションの新しいタイトル。
* `categoryId: ID` このディスカッションの変更先となる、同じリポジトリ内の`DiscussionCategory`のノードID。
* `clientMutationId: String` ミューテーションを実行するクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として渡された一意の識別子。
* `discussion: Discussion` 変更されたディスカッション。

### deleteDiscussion
入力フィールド:

* `id: ID!` 削除するディスカッションのノードID。
* `clientMutationId: String` ミューテーションを実行するクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として渡された一意の識別子。
* `discussion: Discussion` 削除されたディスカッション。

### addDiscussionComment

入力フィールド:

* `body: String!` コメントの内容。
* `discussionId: ID!` コメントを付けるディスカッションのノードID。
* `replyToId: ID` 返信するディスカッションコメントのノードID。 存在しなければ、作成されるコメントはトップレベルのコメントになる。
* `clientMutationId: String` ミューテーションを実行するクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として渡された一意の識別子。
* `comment: DiscussionComment` 作成されたディスカッションコメント。

### updateDiscussionComment

入力フィールド:

* `body: String!` コメントのボディの新しい内容。
* `commentId: ID!` 更新するディスカッションコメントのノードID。
* `clientMutationId: String` ミューテーションを実行するクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として渡された一意の識別子。
* `comment: DiscussionComment` 更新されたディスカッションコメント。

### deleteDiscussionComment

入力フィールド:

* `id: ID!` 削除するディスカッションコメントのノードID。
* `clientMutationId: String` ミューテーションを実行するクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として渡された一意の識別子。
* `comment: DiscussionComment` 削除されたディスカッションコメント。

### markDiscussionCommentAsAnswer

入力フィールド:

* `id: ID!` 解答としてマークするディスカッションコメントのノードID。
* `clientMutationId: String` ミューテーションを実行するクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として渡された一意の識別子。
* `discussion: Discussion` 選択されたコメントを含むディスカッション。

### unmarkDiscussionCommentAsAnswer

入力フィールド:

* `id: ID!` 解答としてのマークを解除するディスカッションコメントのノードID。
* `clientMutationId: String` ミューテーションを実行するクライアントの一意の識別子。

返値の型のフィールド:

* `clientMutationId: String` 入力として渡された一意の識別子。
* `discussion: Discussion` マーク解除されたコメントを含むディスカッション。

## 検索

ディスカッションは、トップレベルの`search`フィールドから返されることがあります。 ディスカッションを検索するには、`type`を`DISCUSSION`に指定してください。 `SearchResultItemConnection`型は、返されるディスカッション数を知らせる`discussionCount`フィールドを持ち、`SearchResultItem`共用体には`Discussion`型が追加されます。 詳しい情報については「[クエリ](/graphql/reference/queries#searchresultitemconnection)」及び「[ディスカッションの検索](/github/searching-for-information-on-github/searching-discussions)」を参照してください。
