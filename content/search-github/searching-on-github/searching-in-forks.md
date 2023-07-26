---
title: Searching in forks
intro: 'By default, [forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) are not shown in search results. You can choose to include them in repository searches, and in code searches if they meet certain criteria.'
redirect_from:
  - /articles/searching-in-forks
  - /github/searching-for-information-on-github/searching-in-forks
  - /github/searching-for-information-on-github/searching-on-github/searching-in-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
---
To show forks in [repository search](/search-github/searching-on-github/searching-for-repositories) results, add `fork:true` or `fork:only` to your query.

{% ifversion ghes or ghae %}Forks are only indexed for [code search](/search-github/searching-on-github/searching-code) when they have more stars than the parent repository. You will not be able to search the code in a fork that has less stars than its parent. To show forks with more stars than the parent repository in code search results, add `fork:true` or `fork:only` to your query.{% endif%}

The `fork:true` qualifier finds all results that match your search query, including forks. The `fork:only` qualifier finds _only_ forks that match your search query.

| Qualifier  | Example
| ------------- | -------------
| `fork:true` | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories) matches all repositories containing the word "github," including forks.
| <code>language:<em>LANGUAGE</em></code> `fork:true` | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) matches code with the word "android" that's written in Java, in both forks and regular repositories.
| `fork:only` | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories) matches all fork repositories containing the word "github."
| <code>forks:><em>n</em></code> `fork:only` | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) matches repositories with more than 500 forks, and only returns those that are forks.

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories#listing-the-forks-of-a-repository)"
- "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
