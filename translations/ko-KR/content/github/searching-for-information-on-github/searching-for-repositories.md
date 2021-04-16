---
title: Searching for repositories
intro: 'You can search for repositories on {% data variables.product.product_name %} and narrow the results using these repository search qualifiers in any combination.'
redirect_from:
  - /articles/searching-repositories/
  - /articles/searching-for-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - github search
---

You can search for repositories globally across all of {% data variables.product.product_location %}, or search for repositories within a particular organization. For more information, see "[About searching on {% data variables.product.prodname_dotcom %}](/articles/about-searching-on-github)."

To include forks in the search results, you will need to add `fork:true` or `fork:only` to your query. For more information, see "[Searching in forks](/articles/searching-in-forks)."

{% data reusables.search.syntax_tips %}

### Search by repository name, description, or contents of the README file

With the `in` qualifier you can restrict your search to the repository name, repository description, contents of the README file, or any combination of these. When you omit this qualifier, only the repository name and description are searched.

| Qualifier         | 예시                                                                                                                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:name`         | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) matches repositories with "jquery" in the repository name.                                          |
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) matches repositories with "jquery" in the repository name or description. |
| `in:readme`       | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) matches repositories mentioning "jquery" in the repository's README file.                       |
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) matches a specific repository name.                                                             |

### Search based on the contents of a repository

You can find a repository by searching for content in the repository's README file using the `in:readme` qualifier. For more information, see "[About READMEs](/github/creating-cloning-and-archiving-repositories/about-readmes)."

Besides using `in:readme`, it's not possible to find repositories by searching for specific content within the repository. To search for a specific file or content within a repository, you can use the file finder or code-specific search qualifiers. For more information, see "[Finding files on {% data variables.product.prodname_dotcom %}](/articles/finding-files-on-github)" and "[Searching code](/articles/searching-code)."

| Qualifier   | 예시                                                                                                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) matches repositories mentioning "octocat" in the repository's README file. |

### Search within a user's or organization's repositories

To search in all repositories owned by a certain user or organization, you can use the  `user` or `org` qualifier.

| Qualifier                 | 예시                                                                                                                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) matches repositories from @defunkt that have more than 100 forks. |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) matches repositories from GitHub.                                                            |

### Search by repository size

The `size` qualifier finds repositories that match a certain size (in kilobytes), using greater than, less than, and range qualifiers. For more information, see "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifier                 | 예시                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) matches repositories that are 1 MB exactly.                      |
|                           | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) matches repositories that are at least 30 MB. |
|                           | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) matches repositories that are smaller than 50 KB.       |
|                           | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) matches repositories that are between 50 KB and 120 KB.    |

### Search by number of followers

You can filter repositories based on the number of users who follow the repositories, using the `followers` qualifier with greater than, less than, and range qualifiers. For more information, see "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifier                 | 예시                                                                                                                                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) matches repositories with 10,000 or more followers mentioning the word "node".                                                     |
|                           | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) matches repositories with between 1 and 10 followers, mentioning the word "styleguide linter." |

### Search by number of forks

The `forks` qualifier specifies the number of forks a repository should have, using greater than, less than, and range qualifiers. For more information, see "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifier                 | 예시                                                                                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) matches repositories with only five forks.                         |
|                           | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) matches repositories with at least 205 forks. |
|                           | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) matches repositories with fewer than 90 forks.      |
|                           | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) matches repositories with 10 to 20 forks.                |

### Search by number of stars

You can search repositories based on the number of stars the repositories have, using greater than, less than, and range qualifiers. For more information, see "[Saving repositories with stars](/github/getting-started-with-github/saving-repositories-with-stars)" and "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifier                 | 예시                                                                                                                                                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) matches repositories with exactly 500 stars.                                                                                                          |
|                           | [**stars:10..20**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) matches repositories 10 to 20 stars, that are smaller than 1000 KB.                                                                             |
|                           | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) matches repositories with the at least 500 stars, including forked ones, that are written in PHP. |

### Search by when a repository was created or last updated

You can filter repositories based on time of creation or time of last update. For repository creation, you can use the `created` qualifier; to find out when a repository was last updated, you'll want to use the `pushed` qualifier. The `pushed` qualifier will return a list of repositories, sorted by the most recent commit made on any branch in the repository.

Both take a date as a parameter. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                 | 예시                                                                                                                                                                                                                                                         |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) matches repositories with the word "webos" that were created before 2011.                                                            |
| <code>pushed:<em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) matches repositories with the word "css" that were pushed to after January 2013.                                            |
|                           | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) matches repositories with the word "case" that were pushed to on or after March 6th, 2013, and that are forks. |

### Search by language

You can search repositories based on the language of the code in the repositories.

| Qualifier                 | 예시                                                                                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**rails language:javascript**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) matches repositories with the word "rails" that are written in JavaScript. |

### Search by topic

You can find all of the repositories that are classified with a particular topic. For more information, see "[Classifying your repository with topics](/github/administering-a-repository/classifying-your-repository-with-topics)."

| Qualifier                 | 예시                                                                                                                                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topic:<em>TOPIC</em></code> | [**topic:jekyll**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) matches repositories that have been classified with the topic "jekyll." |

### Search by number of topics

You can search repositories by the number of topics that have been applied to the repositories, using the `topics` qualifier along with greater than, less than, and range qualifiers. For more information, see "[Classifying your repository with topics](/github/administering-a-repository/classifying-your-repository-with-topics)" and "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifier                  | 예시                                                                                                                                                                   |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) matches repositories that have five topics.                |
|                            | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) matches repositories that have more than three topics. |

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

### Search by license

You can search repositories by the type of license in the repositories. You must use a license keyword to filter repositories by a particular license or license family. For more information, see "[Licensing a repository](/github/creating-cloning-and-archiving-repositories/licensing-a-repository)."

| Qualifier                  | 예시                                                                                                                                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) matches repositories that are licensed under Apache License 2.0. |

{% endif %}

### Search by repository visibility

You can filter your search based on the visibility of the repositories. For more information, see "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

| Qualifier  | Example | ------------- | ------------- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} | `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) matches public repositories owned by {% data variables.product.company_short %}.{% endif %} | `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories) matches internal repositories that you can access and contain the word "test". | `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) matches private repositories that you can access and contain the word "pages."

{% if currentVersion == "free-pro-team@latest" %}

### Search based on whether a repository is a mirror

You can search repositories based on whether the repositories are mirrors and hosted elsewhere. For more information, see "[Finding ways to contribute to open source on {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."

| Qualifier      | 예시                                                                                                                                                                      |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mirror:true`  | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) matches repositories that are mirrors and contain the word "GNOME."       |
| `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) matches repositories that are not mirrors and contain the word "GNOME." |

{% endif %}

### Search based on whether a repository is archived

You can search repositories based on whether or not the repositories are archived. For more information, see "[About archiving repositories](/github/creating-cloning-and-archiving-repositories/about-archiving-repositories)."

| Qualifier        | 예시                                                                                                                                                                           |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) matches repositories that are archived and contain the word "GNOME."       |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) matches repositories that are not archived and contain the word "GNOME." |

{% if currentVersion == "free-pro-team@latest" %}

### Search based on number of issues with `good first issue` or `help wanted` labels

You can search for repositories that have a minimum number of issues labeled `help-wanted` or `good-first-issue` with the qualifiers `help-wanted-issues:>n` and `good-first-issues:>n`. For more information, see "[Encouraging helpful contributions to your project with labels](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)."

| Qualifier                  | 예시                                                                                                                                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `good-first-issues:>n`  | [**good-first-issues:&gt;2 javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) matches repositories with more than two issues labeled `good-first-issue` and that contain the word "javascript." |
| `help-wanted-issues:>n` | [**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) matches repositories with more than four issues labeled `help-wanted` and that contain the word "React."                  |

{% endif %}

### 더 읽을거리

- "[Sorting search results](/articles/sorting-search-results/)"
- "[Searching in forks](/articles/searching-in-forks)"
