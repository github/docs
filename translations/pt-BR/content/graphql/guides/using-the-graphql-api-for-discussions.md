---
title: Usar a API do GraphQL para discussões
intro: Aprenda a usar a API do GraphQL para as discussões do GitHub.
versions:
  free-pro-team: '*'
---

A API do GraphQL do {% data variables.product.prodname_discussions %} permite que você obtenha, crie, edite e exclua publicações de discussão. Para obter mais informações sobre {% data variables.product.prodname_discussions %}, consulte "[Sobre discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".

Esta API está disponível para usuários autenticados, aplicativos OAuth e aplicativos GitHub. Os tokens de acesso exigem o escopo `repo` para repositórios privados e o escopo `public_repo` para repositórios públicos. Para obter mais informações, consulte "[Escopos para aplicativos OAuth](/developers/apps/scopes-for-oauth-apps)".

Para usar esta API, você deve incluir `GraphQL-Featus: discussions_api` no cabeçalho `HTTP`.

## Campos

### Repository.discussions

Liste as discussões dentro de um repositório. Se `categoriyId` for especificado, apenas os resultados dentro dessa categoria serão retornados.

_Assinatura:_

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

Retorna as categorias de discussão disponíveis definidas neste repositório. Cada repositório pode ter até 10 categorias. Para obter mais informações sobre as categorias de discussão, consulte "[Sobre discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)".

_Assinatura:_

```graphql
discussionCategories(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : DiscussionCategoryConnection!
```

### Repository.discussion

Obter discussão. Retorna `null` se a discussão com o ID especificado não existe.

_Assinatura:_

```graphql
discussion(number: Int!) : Discussion
```

### Repository.pinnedDiscussions

Discussões de retorno fixadas a este repositório, ordenada pela posição do da marcação.

_Assinatura:_

```graphql
pinnedDiscussions(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : PinnedDiscussionConnection!
```

## Objetos

**Observação:** Por brevidade, os tipos de conexão não são expandidos aqui. Cada tipo de conexão mencionada no esquema segue o mesmo padrão que outras conexões na API do GraphQL. Para obter mais informações, consulte "[Introdução ao GraphQL](/graphql/guides/introduction-to-graphql#connection)".

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

### Discussão

<details>
<summary>Campos:</summary>

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
<summary>Campos</summary>

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
<summary>Campos</summary>

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
<summary>Campos:</summary>

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
<summary>Valores</summary>

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
<summary>Valores</summary>

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

São implementados pelos tipos `Usuário` e `Organização`. **Observação:** Uma `Organização` só terá discussões associadas, se for tiver sido convertida a partir de um `Usuário`.

<details>
<summary>Campos</summary>

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

Também são implementados pelos tipos de `Usuário` e `Organização`.

<details>
<summary>Campos</summary>

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

## Mutações

Essas mutações seguem o mesmo padrão de implementação das outras mutações na API do GraphQL. Cada mutação aceita um único argumento de um tipo de `Input`, que leva o nome da mutação e retorna um tipo de `carga` que contém os campos especificados.

Por exemplo, esta é uma mutação básica de `createDiscussion` que irá criar uma nova discussão:

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

Campos de entrada:

* `body: String!` O texto da nova discussão.
* `title: String!` O título da nova discussão.
* `repositoryId: ID!` TO ID de um repositório no qual criar uma discussão.
* `categoryId: ID!` O ID de uma `DiscussionCategory` com esse repositório.
* `clientMutationId: String` Um identificador único para o cliente que realiza a mutação.

Campos de tipo de retorno:

* `clientMutationId: String` O identificador único fornecido como entrada.
* `discussion: Discussion` A discussão que foi criada.

### updateDiscussion

Campos de entrada:

* `discussionId: ID!` O ID do nó da discussão a ser atualizado.
* `body: String` O novo conteúdo do texto da discussão.
* `title: String` O novo título da discussão.
* `CategyId: ID` O ID do nó de uma `DiscussionCategory` dentro do mesmo repositório para alterar esta discussão.
* `clientMutationId: String` Um identificador único para o cliente que realiza a mutação.

Campos de tipo de retorno:

* `clientMutationId: String` O identificador único fornecido como entrada.
* `discussion: Discussion` A discussão que foi modificada.

### deleteDiscussion
Campos de entrada:

* `id: ID!` O ID do nó da discussão a ser excluído.
* `clientMutationId: String` Um identificador único para o cliente que realiza a mutação.

Campos de tipo de retorno:

* `clientMutationId: String` O identificador único fornecido como entrada.
* `discussion: Discussion` A discussão que foi excluída.

### addDiscussionComment

Campos de entrada:

* `body: String!` Os conteúdos do comentário.
* `discussionId: ID!` O ID do nó da discussão sobre o qual comentar.
* `replyToId: ID` O ID do nó do comentário de discussão ao qual responder. Se ausente, o comentário criado será um comentário de nível superior.
* `clientMutationId: String` Um identificador único para o cliente que realiza a mutação.

Campos de tipo de retorno:

* `clientMutationId: String` O identificador único fornecido como entrada.
* `comment: DiscussionComment` O comentário da discussão que foi criado.

### updateDiscussionComment

Campos de entrada:

* `body: String!` Os novos conteúdos do texto do comentário.
* `commentId: ID!` O ID do nó do comentário da discussão a ser atualizado.
* `clientMutationId: String` Um identificador único para o cliente que realiza a mutação.

Campos de tipo de retorno:

* `clientMutationId: String` O identificador único fornecido como entrada.
* `comment: DiscussionComment` O comentário de discussão que foi atualizado.

### deleteDiscussionComment

Campos de entrada:

* `id: ID!` O ID do nó do comentário de discussão a ser excluído.
* `clientMutationId: String` Um identificador único para o cliente que realiza a mutação.

Campos de tipo de retorno:

* `clientMutationId: String` O identificador único fornecido como entrada.
* `comment: DiscussionComment` O comentário das discussões que foi excluído.

### markDiscussionCommentAsAnswer

Campos de entrada:

* `id: ID!` O ID do nó do comentário de discussão para marcar como uma resposta.
* `clientMutationId: String` Um identificador único para o cliente que realiza a mutação.

Campos de tipo de retorno:

* `clientMutationId: String` O identificador único fornecido como entrada.
* `discussion: Discussion` A discussão que inclui o comentário escolhido.

### unmarkDiscussionCommentAsAnswer

Campos de entrada:

* `ID: ID!` O ID do nó do comentário de discussão para desmarcar como uma resposta.
* `clientMutationId: String` Um identificador único para o cliente que realiza a mutação.

Campos de tipo de retorno:

* `clientMutationId: String` O identificador único fornecido como entrada.
* `discussion: Discussion` A discussão que inclui o comentário não avaliado.

## Pesquisar

A discussão pode ser retornada do campo de `pesquisa` de alto nível. Para pesquisar uma discussão, especifique o `tipo` como `DSCUSSÃO`. O tipo `SearchResultItemConnection` tem um campo `discussionCount` para relatar o número de discussões retornadas, e o tipo `Discussão` é adicionado à união DE `SearchResultItem`. Para obter mais informações, consulte ["Consultas](/graphql/reference/queries#searchresultitemconnection)".
