# Permalinks

Because the site is dynamic, it does not build HTML files for each different version of an article. Instead it generates a "permalink" for every version of the article. It does this based on the article's [`productVersions` frontmatter](content#productversions).

For example, an article that is available in Dotcom and all Enterprise versions will have permalinks like the following:

* `/en/articles/set-up-git`
* `/en/enterprise/2.16/user/articles/set-up-git`
* `/en/enterprise/2.15/user/articles/set-up-git`
* `/en/enterprise/2.14/user/articles/set-up-git`
* `/en/enterprise/2.13/user/articles/set-up-git`

An article that is only available in Dotcom will have just one permalink:

* `/en/articles/githubs-billing-plans`
