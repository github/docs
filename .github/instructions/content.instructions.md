---
applyTo: "content/**,data/**,**/*.md"
---

# Copilot content instructions for docs.github.com

**When to use**: Content editing, documentation writing, Markdown files
**Key indicators**: Changes to .md files, creating articles, updating documentation

## Testing Content changes

Before committing content changes, always:

1. **Use the content linter** to validate content: `npm run lint-content -- --paths <file-paths>`
2. **Check for proper variable usage** in your content
3. **Verify [AUTOTITLE] links** point to existing articles
4. **Run tests** on changed content: `npm run test -- src/content-render/tests/render-changed-and-deleted-files.ts`

## Bullet lists

The bulleted points in a bullet list should always be denoted in Markdown using an asterisk, not a hyphen.

## Using variables

Within Markdown files, with the exception of the `title` field in the metadata at the start of a file, **always use the Liquid syntax variables rather than text** if a variable has been defined for that text. This ensures consistency and makes it easier to update product names globally.

**Important**: You must use variables in all content, including reusable content, data files, and regular articles. The only exceptions are the `title` field in frontmatter metadata and any file in the `content/site-policy` directory.

For example:

| Use this variable                                        | Don't use this text      | File where variable is defined   |
| -------------------------------------------------------- | ------------------------ | -------------------------------- |
| `{% data variables.product.github %}`                    | GitHub                   | data/variables/product.yml       |
| `{% data variables.product.prodname_ghe_server %}`       | GitHub Enterprise Server | data/variables/product.yml       |
| `{% data variables.product.prodname_copilot_short %}`    | Copilot                  | data/variables/product.yml       |
| `{% data variables.product.prodname_copilot %}`          | GitHub Copilot           | data/variables/product.yml       |
| `{% data variables.copilot.copilot_code-review_short %}` | Copilot code review      | data/variables/copilot.yml       |
| `{% data variables.enterprise.prodname_managed_user %}`  | managed user account     | data/variables/enterprise.yml    |
| `{% data variables.code-scanning.codeql_workflow %}`     | CodeQL analysis workflow | data/variables/code-scanning.yml |

There are many more variables. We store these in various YAML files within the `data/variables` directory.

**How to find variables**: Check the `data/variables` directory for existing variables before writing hardcoded text. Common variable files include:

* `data/variables/product.yml` - Product names and variations
* `data/variables/copilot.yml` - Copilot-specific terms
* `data/variables/enterprise.yml` - Enterprise-specific terms
* `data/variables/code-scanning.yml` - Code scanning terms

## Reusable text

Reusables are long strings of reusable text, such as paragraphs or procedural lists, that are referenced in multiple content files. This makes it easier for us to maintain content and ensure that it is accurate across all files where the content is needed.

Each reusable lives in its own Markdown file. The path and filename of each reusable determines what its path will be in the data object. For example, a file named `/data/reusables/foo/bar.md` will be accessible as `{% data reusables.foo.bar %}` in articles.

Examples where you should create a reusable:

* You are documenting a new feature for a public preview. You need to create a note to display in all new articles about the new feature. Create a new reusable for the note and use it in all articles where it is needed.
* You are documenting billing for a new feature and need to briefly mention how the feature is billed and link to content about billing in several articles. Create a new reusable with the brief mention and a link to the content on billing. Aim to use the reusable in all places where you want to mention billing for the feature.

## Links to other articles

`[AUTOTITLE]` is the **only correct way** to specify the title of a linked article when that article is another page on the docs.github.com site.

You can replace the placeholder link text `[AUTOTITLE]` only when linking to an anchor in the same article or when linking to an anchor in another article and the actual article title would be confusing.

Never use the `{% link %}` Liquid tag for internal documentation links. The `[AUTOTITLE]` placeholder automatically pulls the correct title and ensures that links remain valid when titles change.

Examples:

* ✅ Correct: `For more information, see [AUTOTITLE](/copilot/using-github-copilot).`
* ❌ Incorrect: `For more information, see [Using GitHub Copilot](/copilot/using-github-copilot).`
* ❌ Incorrect: `For more information, see {% link /copilot/using-github-copilot %}.`

## Parenthetical dashes

Where a sentence of normal body text contains a parenthetical dash, the dash should always be an em dash without spaces at either side. This rule does not apply to text within code blocks.

Examples:

* ✅ Correct: "The cat—which sat on a branch—smiled with a broad grin." (em dash without spaces)
* ❌ Incorrect: "The cat — which sat on a branch — smiled with a broad grin." (em dash with spaces)
* ❌ Incorrect: "The cat–which sat on a branch–smiled with a broad grin." (en dash without spaces)
* ❌ Incorrect: "The cat – which sat on a branch – smiled with a broad grin." (en dash with spaces)
* ❌ Incorrect: "The cat-which sat on a branch-smiled with a broad grin." (hyphen without spaces)
* ❌ Incorrect: "The cat - which sat on a branch - smiled with a broad grin." (hyphen with spaces)
