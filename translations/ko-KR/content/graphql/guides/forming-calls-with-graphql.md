---
title: Forming calls with GraphQL
intro: 'Learn how to authenticate to the GraphQL API, then learn how to create and run queries and mutations.'
redirect_from:
  - /v4/guides/forming-calls
  - /graphql/guides/forming-calls
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### Authenticating with GraphQL

To communicate with the GraphQL server, you'll need an OAuth token with the right scopes.

Follow the steps in "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)" to create a token. The scopes you require depends on the type of data you're trying to request. For example, select the **User** scopes to request user data. If you need access to repository information, select the appropriate **Repository** scopes.

{% if currentVersion == "free-pro-team@latest" %}

To match the behavior of the [GraphQL Explorer](/graphql/guides/using-the-explorer), request the following scopes:

{% else %}

The following scopes are recommended:

{% endif %}


```
user{% if currentVersion != "github-ae@latest" %}
public_repo{% endif %}
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```

The API notifies you if a resource requires a specific scope.

### The GraphQL endpoint

The REST API has numerous endpoints; the GraphQL API has a single endpoint:

<pre>{% data variables.product.graphql_url_pre %}</pre>

The endpoint remains constant no matter what operation you perform.

### Communicating with GraphQL

Because GraphQL operations consist of multiline JSON, GitHub recommends using the [Explorer](/graphql/guides/using-the-explorer) to make GraphQL calls. You can also use cURL or any other HTTP-speaking library.

In REST, [HTTP verbs](/rest#http-verbs) determine the operation performed. In GraphQL, you'll provide a JSON-encoded body whether you're performing a query or a mutation, so the HTTP verb is `POST`. The exception is an [introspection query](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api), which is a simple `GET` to the endpoint. For more information on GraphQL versus REST, see "[Migrating from REST to GraphQL](/graphql/guides/migrating-from-rest-to-graphql)."

To query GraphQL using cURL, make a `POST` request with a JSON payload. The payload must contain a string called `query`:

```shell
curl -H "Authorization: bearer <em>token</em>" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" {% data variables.product.graphql_url_code %}
```

{% tip %}

**Note**: The string value of `"query"` must escape newline characters or the schema will not parse it correctly. For the `POST` body, use outer double quotes and escaped inner double quotes.

{% endtip %}

#### About query and mutation operations

The two types of allowed operations in GitHub's GraphQL API are _queries_ and _mutations_. Comparing GraphQL to REST, queries operate like `GET` requests, while mutations operate like `POST`/`PATCH`/`DELETE`. The [mutation name](/graphql/reference/mutations) determines which modification is executed.

For information about rate limiting, see "[GraphQL resource limitations](/graphql/overview/resource-limitations)."

Queries and mutations share similar forms, with some important differences.

#### About queries

GraphQL queries return only the data you specify. To form a query, you must specify [fields within fields](/graphql/guides/introduction-to-graphql#field) (also known as _nested subfields_) until you return only [scalars](/graphql/reference/scalars).

Queries are structured like this:

<pre>query {
  <em>JSON objects to return</em>
}</pre>

For a real-world example, see "[Example query](#example-query)."

#### About mutations

To form a mutation, you must specify three things:

1. _Mutation name_. The type of modification you want to perform.
2. _Input object_. The data you want to send to the server, composed of _input fields_. Pass it as an argument to the mutation name.
3. _Payload object_. The data you want to return from the server, composed of _return fields_. Pass it as the body of the mutation name.

Mutations are structured like this:

<pre>mutation {
  <em>mutationName</em>(input: {<em>MutationNameInput!</em>}) {
    <em>MutationNamePayload</em>
  }
}</pre>

The input object in this example is `MutationNameInput`, and the payload object is `MutationNamePayload`.

In the [mutations](/graphql/reference/mutations) reference, the listed _input fields_ are what you pass as the input object. The listed _return fields_ are what you pass as the payload object.

For a real-world example, see "[Example mutation](#example-mutation)."

### Working with variables

[Variables](https://graphql.github.io/learn/queries/#variables) can make queries more dynamic and powerful, and they can reduce complexity when passing mutation input objects.

{% note %}

**Note**: If you're using the Explorer, make sure to enter variables in the separate [Query Variables pane](/graphql/guides/using-the-explorer#using-the-variable-pane), and do not include the word `variables` before the JSON object.

{% endnote %}

Here's an example query with a single variable:

```graphql
query($number_of_repos:Int!) {
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

There are three steps to using variables:

1. Define the variable outside the operation in a `variables` object:

  ```graphql
  variables {
     "number_of_repos": 3
  }
  ```

  The object must be valid JSON. This example shows a simple `Int` variable type, but it's possible to define more complex variable types, such as input objects. You can also define multiple variables here.

2. Pass the variable to the operation as an argument:

  ```graphql
  query($number_of_repos:Int!){
  ```

  The argument is a key-value pair, where the key is the _name_ starting with `$` (e.g., `$number_of_repos`), and the value is the _type_ (e.g., `Int`). Add a `!` to indicate whether the type is required. If you've defined multiple variables, include them here as multiple arguments.

3. Use the variable within the operation:

  ```graphql
  repositories(last: $number_of_repos) {
  ```

  In this example, we substitute the variable for the number of repositories to retrieve. We specify a type in step 2 because GraphQL enforces strong typing.

This process makes the query argument dynamic. We can now simply change the value in the `variables` object and keep the rest of the query the same.

Using variables as arguments lets you dynamically update values in the `variables` object without changing the query.

### Example query

Let's walk through a more complex query and put this information in context.

The following query looks up the `octocat/Hello-World` repository, finds the 20 most recent closed issues, and returns each issue's title, URL, and first 5 labels:

```graphql
query {
  repository(owner:"octocat", name:"Hello-World") {
    issues(last:20, states:CLOSED) {
      edges {
        node {
          title
          url
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
```

Looking at the composition line by line:

* `query {`

  Because we want to read data from the server, not modify it, `query` is the root operation. (If you don't specify an operation, `query` is also the default.)

* `repository(owner:"octocat", name:"Hello-World") {`

  To begin the query, we want to find a [`repository`](/graphql/reference/objects#repository) object. The schema validation indicates this object requires an `owner` and a `name` argument.

* `issues(last:20, states:CLOSED) {`

  To account for all issues in the repository, we call the `issues` object. (We _could_ query a single `issue` on a `repository`, but that would require us to know the number of the issue we want to return and provide it as an argument.)

  Some details about the `issues` object:

  - The [docs](/graphql/reference/objects#repository) tell us this object has the type `IssueConnection`.
  - Schema validation indicates this object requires a `last` or `first` number of results as an argument, so we provide `20`.
  - The [docs](/graphql/reference/objects#repository) also tell us this object accepts a `states` argument, which is an  [`IssueState`](/graphql/reference/enums#issuestate) enum that accepts `OPEN` or `CLOSED` values. To find only closed issues, we give the `states` key a value of `CLOSED`.

* `edges {`

  We know `issues` is a connection because it has the `IssueConnection` type. To retrieve data about individual issues, we have to access the node via `edges`.

* `node {`

  Here we retrieve the node at the end of the edge. The [`IssueConnection` docs](/graphql/reference/objects#issueconnection) indicate the node at the end of the `IssueConnection` type is an `Issue` object.

* Now that we know we're retrieving an `Issue` object, we can look at the [docs](/graphql/reference/objects#issue) and specify the fields we want to return:

  ```graphql
  title
  url
  labels(first:5) {
    edges {
      node {
        name
      }
    }
  }
  ```

  Here we specify the `title`, `url`, and `labels` fields of the `Issue` object.

  The `labels` field has the type [`LabelConnection`](/graphql/reference/objects#labelconnection). As with the `issues` object, because `labels` is a connection, we must travel its edges to a connected node: the `label` object. At the node, we can specify the `label` object fields we want to return, in this case, `name`.

You may notice that running this query on the Octocat's {% if currentVersion != "github-ae@latest" %}public{% endif %} `Hello-World` repository won't return many labels. Try running it on one of your own repositories that does use labels, and you'll likely see a difference.

### Example mutation

Mutations often require information that you can only find out by performing a query first. This example shows two operations:

1. A query to get an issue ID.
2. A mutation to add an emoji reaction to the issue.

```graphql
query FindIssueID {
  repository(owner:"octocat", name:"Hello-World") {
    issue(number:349) {
      id
    }
  }
}

mutation AddReactionToIssue {
  addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
```

{% tip %}

Although you can include a query and a mutation in the same Explorer window if you give them names (`FindIssueID` and `AddReactionToIssue` in this example), the operations will be executed as separate calls to the GraphQL endpoint. It's not possible to perform a query at the same time as a mutation, or vice versa.

{% endtip %}

Let's walk through the example. The task sounds simple: add an emoji reaction to an issue.

So how do we know to begin with a query? We don't, yet.

Because we want to modify data on the server (attach an emoji to an issue), we begin by searching the schema for a helpful mutation. The reference docs show the [`addReaction`](/graphql/reference/mutations#addreaction) mutation, with this description: `Adds a reaction to a subject.` Perfect!

The docs for the mutation list three input fields:

* `clientMutationId` (`String`)
* `subjectId` (`ID!`)
* `content` (`ReactionContent!`)

The `!`s indicate that `subjectId` and `content` are required fields. A required `content` makes sense: we want to add a reaction, so we'll need to specify which emoji to use.

But why is `subjectId` required? It's because the `subjectId` is the only way to identify _which_ issue in _which_ repository to react to.

This is why we start this example with a query: to get the `ID`.

Let's examine the query line by line:

* `query FindIssueID {`

  Here we're performing a query, and we name it `FindIssueID`. Note that naming a query is optional; we give it a name here so that we can include it in same Explorer window as the mutation.

* `repository(owner:"octocat", name:"Hello-World") {`

  We specify the repository by querying the `repository` object and passing `owner` and `name` arguments.

* `issue(number:349) {`

  We specify the issue to react to by querying the `issue` object and passing a `number` argument.

* `id`

  This is where we retrieve the `id` of `https://github.com/octocat/Hello-World/issues/349` to pass as the `subjectId`.

When we run the query, we get the `id`: `MDU6SXNzdWUyMzEzOTE1NTE=`

{% tip %}

**Note**: The `id` returned in the query is the value we'll pass as the `subjectID` in the mutation. Neither the docs nor schema introspection will indicate this relationship; you'll need to understand the concepts behind the names to figure this out.

{% endtip %}

With the ID known, we can proceed with the mutation:

* `mutation AddReactionToIssue {`

  Here we're performing a mutation, and we name it `AddReactionToIssue`. As with queries, naming a mutation is optional; we give it a name here so we can include it in the same Explorer window as the query.

* `addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {`

  Let's examine this line:

  - `addReaction` is the name of the mutation.
  - `input` is the required argument key. This will always be `input` for a mutation.
  - `{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}` is the required argument value. This will always be an [input object](/graphql/reference/input-objects) (hence the curly braces) composed of input fields (`subjectId` and `content` in this case) for a mutation.

  How do we know which value to use for the content? The [`addReaction` docs](/graphql/reference/mutations#addreaction) tell us the `content` field has the type [`ReactionContent`](/graphql/reference/enums#reactioncontent), which is an [enum](/graphql/reference/enums) because only certain emoji reactions are supported on GitHub issues. These are the allowed values for reactions (note some values differ from their corresponding emoji names):

  {% data reusables.repositories.reaction_list %}

* The rest of the call is composed of the payload object. This is where we specify the data we want the server to return after we've performed the mutation. These lines come from the [`addReaction` docs](/graphql/reference/mutations#addreaction), which three possible return fields:

    - `clientMutationId` (`String`)
    - `reaction` (`Reaction!`)
    - `subject` (`Reactable!`)

  In this example, we return the two required fields (`reaction` and `subject`), both of which have required subfields (respectively, `content` and `id`).

When we run the mutation, this is the response:

```json
{
  "data": {
    "addReaction": {
      "reaction": {
        "content": "HOORAY"
      },
      "subject": {
        "id": "MDU6SXNzdWUyMTc5NTQ0OTc="
      }
    }
  }
}
```

간단하죠? Check out your [reaction to the issue](https://github.com/octocat/Hello-World/issues/349) by hovering over the :tada: to find your username.

One final note: when you pass multiple fields in an input object, the syntax can get unwieldy. Moving the fields into a [variable](#working-with-variables) can help. Here's how you could rewrite the original mutation using a variable:

```graphql
mutation($myVar:AddReactionInput!) {
  addReaction(input:$myVar) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
variables {
  "myVar": {
    "subjectId":"MDU6SXNzdWUyMTc5NTQ0OTc=",
    "content":"HOORAY"
  }
}
```

{% note %}

You may notice that the `content` field value in the earlier example (where it's used directly in the mutation) does not have quotes around `HOORAY`, but it does have quotes when used in the variable. There's a reason for this:
* When you use `content` directly in the mutation, the schema expects the value to be of type [`ReactionContent`](/graphql/reference/enums#reactioncontent), which is an _enum_, not a string. Schema validation will throw an error if you add quotes around the enum value, as quotes are reserved for strings.
* When you use `content` in a variable, the variables section must be valid JSON, so the quotes are required. Schema validation correctly interprets the `ReactionContent` type when the variable is passed into the mutation during execution.

For more information on the difference between enums and strings, see the [official GraphQL spec](https://graphql.github.io/graphql-spec/June2018/#sec-Enums).

{% endnote %}

### 더 읽을거리

There is a _lot_ more you can do when forming GraphQL calls. Here are some places to look next:

* [Pagination](https://graphql.github.io/learn/pagination/)
* [Fragments](https://graphql.github.io/learn/queries/#fragments)
* [Inline fragments](https://graphql.github.io/learn/queries/#inline-fragments)
* [Directives](https://graphql.github.io/learn/queries/#directives)
