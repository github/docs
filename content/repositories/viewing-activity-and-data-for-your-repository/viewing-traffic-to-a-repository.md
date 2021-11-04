---
title: Viewing traffic to a repository
intro: 'Anyone with push access to a repository can view its traffic, including full clones (not fetches), visitors from the past 14 days, referring sites, and popular content in the traffic graph.'
product: 'This repository insights graph is available in public repositories with {% data variables.product.prodname_free_user %} and {% data variables.product.prodname_free_team %} for organizations, and in public and private repositories with {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}.{% ifversion fpt %} For more information, see "[About repository graphs](/articles/about-repository-graphs)" and "[{% data variables.product.prodname_dotcom %}''s products](/articles/github-s-products)."{% endif %}'
redirect_from:
  - /articles/viewing-traffic-to-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-traffic-to-a-repository
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-traffic-to-a-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository traffic
---

You can navigate to referring sites, excluding search engines and {% data variables.product.product_name %} itself, from the links the specific paths were referred from. The popular content links to the specific content that generated traffic.

Referring sites and popular content are ordered by views and unique visitors. Full clones and visitor information update hourly, while referring sites and popular content sections update daily. All data in the traffic graph uses the UTC+0 timezone, regardless of your location.

The traffic graph displays traffic for your repository, not any {% data variables.product.prodname_pages %} sites that may be published from the repository. If you want to track traffic to a {% data variables.product.prodname_pages %} site, you can configure a third-party analytics service.

If you are signed in to {% data variables.product.product_name %}, then your own page views are not included.

Visitors refers to the total visits to your repository. Unique visitors refers to the number of individual users who have visited your repository. For unique visitors, each visitor is only counted once, regardless of how many times they visit the repository.

Cloners refers to people to have cloned or downloaded your repository from {% data variables.product.product_name %}. Unique cloners is the number of individual users who have cloned the repository, whereas cloners is the total number of clones.


{% tip %}

**Tip:** You can hover over a specific day in the traffic graph to view the exact data for that day.

{% endtip %}

![Repository traffic graphs with tooltip](/assets/images/help/graphs/repo_traffic_graphs_tooltip_dotcom.png)

## Accessing the traffic graph

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. In the left sidebar, click **Traffic**.
![Traffic tab](/assets/images/help/graphs/traffic_tab.png)
