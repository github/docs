---
title: Searching commits
intro: 'You can search for commits on {% data variables.product.product_name %} and narrow the results using these commit search qualifiers in any combination.'
redirect_from:
  - /articles/searching-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - github search
---

You can search for commits globally across all of {% data variables.product.product_name %}, or search for commits within a particular repository or organization. For more information, see "[About searching on {% data variables.product.company_short %}](/articles/about-searching-on-github)."

When you search for commits, only the [default branch](/articles/about-branches) of a repository is searched.

{% data reusables.search.syntax_tips %}

### Search within commit messages

You can find commits that contain particular words in the message. For example, [**fix typo**](https://github.com/search?q=fix+typo&type=Commits) matches commits containing the words "fix" and "typo."

### Search by author or committer

You can find commits by a particular user with the `author` or `committer` qualifiers.

| Qualifier  | Example
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**author:defunkt**](https://github.com/search?q=author%3Adefunkt&type=Commits) matches commits authored by @defunkt.
| <code>committer:<em>USERNAME</em></code> | [**committer:defunkt**](https://github.com/search?q=committer%3Adefunkt&type=Commits) matches commits committed by @defunkt.

The `author-name` and `committer-name` qualifiers match commits by the name of the author or committer.

| Qualifier  | Example
| ------------- | -------------
| <code>author-name:<em>NAME</em></code> | [**author-name:wanstrath**](https://github.com/search?q=author-name%3Awanstrath&type=Commits) matches commits with "wanstrath" in the author name.
| <code>committer-name:<em>NAME</em></code> | [**committer-name:wanstrath**](https://github.com/search?q=committer-name%3Awanstrath&type=Commits) matches commits with "wanstrath" in the committer name.

The `author-email` and `committer-email` qualifiers match commits by the author's or committer's full email address.

| Qualifier  | Example
| ------------- | -------------
| <code>author-email:<em>EMAIL</em></code> | [**author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits) matches commits authored by chris@github.com.
| <code>committer-email:<em>EMAIL</em></code> | [**committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits) matches commits committed by chris@github.com.

### Search by authored or committed date

Use the `author-date` and `committer-date` qualifiers to match commits authored or committed within the specified date range.

{% data reusables.search.date_gt_lt %}

| Qualifier  | Example
| ------------- | -------------
| <code>author-date:<em>YYYY-MM-DD</em></code> | [**author-date:&lt;2016-01-01**](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits) matches commits authored before 2016-01-01.
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [**committer-date:&gt;2016-01-01**](https://github.com/search?q=committer-date%3A>2016-01-01&type=Commits) matches commits committed after 2016-01-01.

### Filter merge commits

The `merge` qualifier filters merge commits.

| Qualifier  | Example
| ------------- | -------------
| `merge:true` | [**merge:true**](https://github.com/search?q=merge%3Atrue&type=Commits) matches merge commits.
| `merge:false` | [**merge:false**](https://github.com/search?q=merge%3Afalse&type=Commits) matches non-merge commits.

### Search by hash

The `hash` qualifier matches commits with the specified SHA-1 hash.

| Qualifier  | Example
| ------------- | -------------
| <code>hash:<em>HASH</em></code> | [**hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits) matches commits with the hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`.

### Search by parent

The `parent` qualifier matches commits whose parent has the specified SHA-1 hash.

| Qualifier  | Example
| ------------- | -------------
| <code>parent:<em>HASH</em></code> | [**parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93) matches children of commits with the hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`.

### Search by tree

The `tree` qualifier matches commits with the specified SHA-1 git tree hash.

| Qualifier  | Example
| ------------- | -------------
| <code>tree:<em>HASH</em></code> | [**tree:99ca967**](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits) matches commits that refer to the tree hash `99ca967`.

### Search within a user's or organization's repositories

To search commits in all repositories owned by a certain user or organization, use the `user` or `org` qualifier. To search commits in a specific repository, use the `repo` qualifier.

| Qualifier  | Example
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**gibberish user:defunkt**](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93) matches commit messages with the word "gibberish" in repositories owned by @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**test org:github**](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits) matches commit messages with the word "test" in repositories owned by @github.
| <code>repo:<em>USERNAME/REPO</em></code> | [**language repo:defunkt/gibberish**](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits) matches commit messages with the word "language" in @defunkt's "gibberish" repository.

### Filter by repository visibility

The `is` qualifier matches commits from repositories with the specified visibility. For more information, see "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility).

| Qualifier  | Example
| ------------- | ------------- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
| `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits) matches commits to public repositories.{% endif %}
| `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Commits) matches commits to internal repositories.
| `is:private` | [**is:private**](https://github.com/search?q=is%3Aprivate&type=Commits) matches commits to private repositories.

### Further reading

- "[Sorting search results](/articles/sorting-search-results/)"
