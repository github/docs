When you add metadata restrictions, you can use regular expression syntax to define patterns that the relevant metadata, such as the commit message or the branch or tag name, must or must not match.

Rulesets support RE2 syntax. For more information, see Google's [syntax guide](https://github.com/google/re2/wiki/Syntax). To validate your expressions, you can use the validator on [regex101.com](https://regex101.com/), selecting the "Golang" flavor in the left sidebar.

By default, regular expressions in metadata restrictions do not consider multiple lines of text. For example, if you have a multiline commit message, the pattern `^ABC` will be a match if the first line of the message starts with `ABC`. To match multiple lines of the message, start your expression with `(?m)`.

The negative lookahead assertion, denoted `?!`, is not supported. However, for cases where you need to look for a given string that is not followed by another given string, you can use the positive lookahead assertion, denoted `?`, combined with the "Must not match a given regex pattern" requirement.

{% note %}

**Note:** If you require contributors to sign off on commits, this may interfere with your regular expression patterns. When someone signs off, {% data variables.product.prodname_dotcom %} adds a string like `Signed-off-by: #AUTHOR-NAME <#AUTHOR-EMAIL>` to the commit message. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization)."

{% endnote %}

#### Useful regular expression patterns

The following examples provide useful patterns for commit metadata. To use these patterns, set **Requirement** to "Must match a given regex pattern".

##### Ensure branch names are compatible with Windows

You can use the following pattern to ensure that branch names only include numbers, lowercase letters, and the characters `-` and `_`. This ensures branch names are compatible with operating systems that do not use case-sensitive file systems by default.

```text copy
\A[0-9a-z-_]$
```

Matches: `my-branch`

Does not match: `myBranch`

##### Ensure tag names use semantic versioning

You can use the following pattern to ensure tag names conform to semantic versioning. For more information, see the documentation on [semver.org](https://semver.org/).

```text copy
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

Matches: `1.2.3`, `10.20.30`, `1.1.2-prerelease+meta`

Does not match: `1.2`, `1.2-SNAPSHOT`

##### Limit length of lines in commit messages

The [Pro Git book](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines) recommends limiting the first line of a commit message to around 50 characters.

You can use the following pattern to ensure the first line in a commit message contains 50 characters or fewer.

```text copy
\A.{1,50}$
```

##### Ensure commit messages start with a resolution and issue number

You can use the following pattern to ensure that commit messages contain the word `Resolves:` or `Fixes:`, followed by a string like `#1234`.

```text copy
^(Resolves|Fixes): \#[0-9]+$
```

Matches: `Fixes: #1234`

Does not match: `Add conditional logic to foo.bar`

##### Enforce conventional commits

You can use the following pattern to ensure that commit messages conform to the Conventional Commits specification. For more information, see [conventionalcommits.org](https://www.conventionalcommits.org/).

```text copy
^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test){1}(\([\w\-\.]+\))?(!)?: ([\w ])+([\s\S]*)
```

Matches: `feat: allow provided config object to extend other configs`

Does not match: `Add conditional logic to foo.bar`
