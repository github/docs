---
title: Searching topics
intro: 'You can search for topics associated with repositories on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/searching-topics
  - /github/searching-for-information-on-github/searching-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
---
## Search {% data variables.product.product_name %} for topics

You can search for topics on {% data variables.product.product_name %}, explore related topics, and see how many repositories are associated with a certain topic.

1. Navigate to https://github.com/search.
2. Type a topic keyword.
  ![search field](/assets/images/help/search/search-field.png)
3. In the left sidebar, to narrow your search to topics, click **Topics**.
{% ifversion fpt %}
  ![Jekyll repository search results page with topics side-menu option highlighted](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %}
  ![Jekyll repository search results page on dotcom with topics side-menu option highlighted](/assets/images/help/search/topic-left-side-navigation.png){% endif %}

## Narrowing your search with search qualifiers

If you want to explore repositories about a certain topic, find projects to contribute to, or learn which topics are most popular on {% data variables.product.product_name %}, you can search topics with the search qualifiers `is:featured`, `is:curated`, `repositories:n` and `created:YYYY-MM-DD`.

The `is:featured` search qualifier will narrow search results to the topics with the most repositories on {% data variables.product.product_name %}. These topics are also featured at https://github.com/topics/.

The `is:curated` search qualifier will narrow search results to topics that community members have added extra information to. For more information, see the [explore repository](https://github.com/github/explore).

You can filter topics based when they were created using the date parameter and `created:` or based on how many repositories are associated with this topic using `repositories:n`. Both of these qualifiers can use the [greater than and less than range qualifiers](/articles/understanding-the-search-syntax).

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier  | Example |
| ------------- | -------------
| `is:curated`| [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) matches topics that are curated and contain the word "javascript."
| `is:featured` | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) matches topics that are featured on https://github.com/topics/ and contain the word "javascript."
|  `is:not-curated` | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) matches topics that don't have extra information, such as a description or logo, and contain the word "javascript."
|  `is:not-featured`| [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics) matches topics that aren't featured on https://github.com/topics/ and contain the word "javascript."
| `repositories:n` | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) matches topics that have more than 5000 repositories.
| <code>created:<em>YYYY-MM-DD</em></code> | [**Serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) matches topics with the word "serverless" that were created after 2018.

## Search repositories by topic

You can use the `topic:` qualifier to find every repository connected to a particular topic. For more information, see "[Searching for repositories](/articles/searching-for-repositories/#search-by-topic)."

## Further reading
- "[Classifying your repository with topics](/articles/classifying-your-repository-with-topics)"
