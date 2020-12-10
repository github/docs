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

**If you are a content contributor:** You don't need to worry about supported versions when adding a link to a document. Following the examples above, if you want to reference an article you can just use its relative location:

* `/github/getting-started-with-github/set-up-git`

*(Please note that using a hard-coded link or supported version will result in an error when your submitted PR is automatically tested)*
