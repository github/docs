---
title: Searching users
intro: 'You can search for users on {% data variables.product.product_name %} and narrow the results using these user search qualifiers in any combination.'
redirect_from:
  - /articles/searching-users
  - /github/searching-for-information-on-github/searching-users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---
You can search for users globally across all of {% data variables.product.product_name %}. For more information, see "[About searching on {% data variables.product.company_short %}](/articles/about-searching-on-github)."

{% data reusables.search.syntax_tips %}

## Search only users or organizations

By default, searching users will return both personal and organizations. However, you can use the `type` qualifier to restrict search results to personal accounts or organizations only.

| Qualifier        | Example
| ------------- | -------------
| `type:user` | [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) matches personal accounts named "mike" that were created before 2011.
| `type:org` | [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) matches organizations  with the word "data" in their email.

## Search by account name, full name, or public email

You can filter your search to the personal user or organization account name with `user` or `org` qualifiers.

With the `in` qualifier you can restrict your search to the username (`login`), full name, public email, or any combination of these. When you omit this qualifier, only the username and email address are searched. For privacy reasons, you cannot search by email domain name.

| Qualifier        | Example
| ------------- | -------------
| `user:name` | [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users) matches the user with the username "octocat".
| `org:name` | [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) matches the Electron organization's account name.
| `in:login` | [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users) matches users with the word "kenya" in their username.
| `in:name` | [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users) matches users whose real name contains the word "bolton."
| `fullname:firstname lastname` | [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users) matches a user with the full name "Nat Friedman." Note: This search qualifier is sensitive to spacing.
| `in:email` | [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) matches users with the word "data" in their email.

## Search by number of repositories a user owns

You can filter users based on the number of repositories they own, using the `repos` qualifier and [greater than, less than, and range qualifiers](/articles/understanding-the-search-syntax).

| Qualifier        | Example
| ------------- | -------------
| <code>repos:<em>n</em></code> | [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) matches users whose repository count is over 9,000.
| | [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users) matches users with the word "bert" in their username or real name who own 10 to 30 repositories.

## Search by location

You can search for users by the location indicated in their profile.

| Qualifier        | Example
| ------------- | -------------
| <code>location:<em>LOCATION</em></code> | [**repos:1 location:iceland**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) matches users with exactly one repository that live in Iceland.

## Search by repository language

Using the `language` qualifier you can search for users based on the languages of repositories they own.

| Qualifier        | Example
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) matches users in Russia with a majority of their repositories written in JavaScript.
| | [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) matches users with JavaScript repositories whose full name contains the word "jenny."

## Search by when a user account was created

You can filter users based on when they joined {% data variables.product.product_name %} with the `created` qualifier. This takes a date as its parameter. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier        | Example
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) matches users that joined before 2011.
| | [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) matches users that joined at or after May 11th, 2013.
| | [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) matches users that joined on March 6th, 2013, who list their location as London.
| | [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) matches users that joined between 2010 and 2011 with the word "john" in their username.

## Search by number of followers

You can filter users based on the number of followers that they have, using the `followers` qualifier with [greater than, less than, and range qualifiers](/articles/understanding-the-search-syntax).

| Qualifier        | Example
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) matches users with 1,000 or more followers.
| | [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) matches users with between 1 and 10 followers, with the word "sparkle" in their name.

## Further reading

- "[Sorting search results](/articles/sorting-search-results/)"
