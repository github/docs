# Article API

This subject folder contains the code for the Article API endpoints:
- `/api/pagelist`
- `/api/article/body`
- `/api/article/meta`

## What it does

Article API endpoints allow consumers to query GitHub Docs for listings of current articles, and for specific article information.

The `/api/article/meta` endpoint powers hovercards, which provide a preview for internal links on <docs.github.com>.

## How it works

The `/api/article` endpoints return information about a page by `pathname`. 

`api/article/meta` is highly cached, in JSON format.

## How to get help

For internal folks ask in the Docs Engineering slack channel. 

For open source folks, please open a discussion in the public repository.

<!-- API reference docs automatically generated, do not edit below this comment -->
## Reference: API endpoints

### GET /api/article/

Get article metadata and content in a single object. Equivalent to calling `/article/meta` concatenated with `/article/body`.

**Parameters**:
- **pathname** (string) - Article path (e.g. '/en/get-started/article-name')

**Returns**: (object) - JSON object with article metadata and content (`meta` and `body` keys)

**Throws**:
- (Error): 403 - If the article body cannot be retrieved. Reason is given in the error message.
- (Error): 400 - If pathname parameter is invalid.
- (Error): 404 - If the path is valid, but the page couldn't be resolved.

**Example**:
```
❯ curl -s "https://docs.github.com/api/article?pathname=/en/get-started/start-your-journey/about-github-and-git"
{
  "meta": {
    "title": "About GitHub and Git",
    "intro": "You can use GitHub and Git to collaborate on work.",
    "product": "Get started"
  },
  "body": "## About GitHub\n\nGitHub is a cloud-based platform where you can store, share, and work together with others to write code.\n\nStoring your code in a \"repository\" on GitHub allows you to:\n\n* **Showcase or share** your work.\n [...]"
}
```

---

### GET /api/article/body

Get the contents of an article's body.

**Parameters**:
- **pathname** (string) - Article path (e.g. '/en/get-started/article-name')

**Returns**: (string) - Article body content in markdown format.

**Throws**:
- (Error): 403 - If the article body cannot be retrieved. Reason is given in the error message.
- (Error): 400 - If pathname parameter is invalid.
- (Error): 404 - If the path is valid, but the page couldn't be resolved.

**Example**:
```
❯ curl -s https://docs.github.com/api/article/body\?pathname=/en/get-started/start-your-journey/about-github-and-git
## About GitHub

GitHub is a cloud-based platform where you can store, share, and work together with others to write code.

Storing your code in a "repository" on GitHub allows you to:
[...]
```

---

### GET /api/article/meta

Get metadata about an article.

**Parameters**:
- **pathname** (string) - Article path (e.g. '/en/get-started/article-name')

**Returns**: (object) - JSON object containing article metadata with title, intro, and product information.

**Throws**:
- (Error): 400 - If pathname parameter is invalid.
- (Error): 404 - If the path is valid, but the page couldn't be resolved.

**Example**:
```
❯ curl -s "https://docs.github.com/api/article/meta?pathname=/en/get-started/start-your-journey/about-github-and-git"
{
  "title": "About GitHub and Git",
  "intro": "You can use GitHub and Git to collaborate on work.",
  "product": "Get started",
  "breadcrumbs": [
    {
      "href": "/en/get-started",
      "title": "Get started"
    },
    {
      "href": "/en/get-started/start-your-journey",
      "title": "Start your journey"
    },
    {
      "href": "/en/get-started/start-your-journey/about-github-and-git",
      "title": "About GitHub and Git"
    }
  ]
}
```

---

### GET /api/pagelist/:lang/:productVersion

A list of pages available for a fully qualified path containing the target language and product version.

**Parameters**:
- **lang** (string) - Path parameter for language code (e.g. 'en')
- **productVersion** (string) - Path parameter for product version (e.g. 'free-pro-team@latest')

**Returns**: (string) - List of paths matching the language and version

**Throws**:
- (Error): 400 - If language or version parameters are invalid. Reason is given in the error message.

**Example**:
```
❯ curl -s https://docs.github.com/api/pagelist/en/free-pro-team@latest
/en
/en/search
/en/get-started
/en/get-started/start-your-journey
/en/get-started/start-your-journey/about-github-and-git
[...]
```

---

