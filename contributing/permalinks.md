# Permalinks

Because the site is dynamic, it does not build HTML files for each different version of an article. Instead it generates a "permalink" for every version of the article. It does this based on the article's [`versions` frontmatter](content#versions).

For example, an article that is available in currently supported versions will have permalink URLs like the following:

* `/en/free-pro-team@latest/github/getting-started-with-github/set-up-git`
* `/en/enterprise-server@2.22/github/getting-started-with-github/set-up-git`
* `/en/enterprise-server@2.21/github/getting-started-with-github/set-up-git`
* `/en/enterprise-server@2.20/github/getting-started-with-github/set-up-git`
* `/en/enterprise-server@2.19/github/getting-started-with-github/set-up-git`

An article that is not available in Enterprise will have just one permalink:

* `/en/free-pro-team@latest/github/getting-started-with-github/set-up-git`
