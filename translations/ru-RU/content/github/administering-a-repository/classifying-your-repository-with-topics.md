---
title: Classifying your repository with topics
intro: 'To help other people find and contribute to your project, you can add topics to your repository related to your project''s intended purpose, subject area, affinity groups, or other important qualities.'
redirect_from:
  - /articles/about-topics/
  - /articles/classifying-your-repository-with-topics
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### About topics

With topics, you can explore repositories in a particular subject area, find projects to contribute to, and discover new solutions to a specific problem. Topics appear on the main page of a repository. You can click a topic name to {% if currentVersion == "free-pro-team@latest" %}see related topics and a list of other repositories classified with that topic{% else %}search for other repositories with that topic{% endif %}.

![Main page of the test repository showing topics](/assets/images/help/repository/os-repo-with-topics.png)

To browse the most used topics, go to https://github.com/topics/.

{% if currentVersion == "free-pro-team@latest" %}You can contribute to {% data variables.product.product_name %}'s set of featured topics in the [github/explore](https://github.com/github/explore) repository. {% endif %}

Repository admins can add any topics they'd like to a repository. Helpful topics to classify a repository include the repository's intended purpose, subject area, community, or language.{% if currentVersion == "free-pro-team@latest" %} Additionally, {% data variables.product.product_name %} analyzes public repository content and generates suggested topics that repository admins can accept or reject. Private repository content is not analyzed and does not receive topic suggestions.{% endif %}

{% if currentVersion == "github-ae@latest" %}Internal {% else %}Public, internal, {% endif %}and private repositories can have topics, although you will only see private repositories that you have access to in topic search results.

You can search for repositories that are associated with a particular topic. For more information, see "[Searching for repositories](/articles/searching-for-repositories#search-by-topic)." You can also search for a list of topics on {% data variables.product.product_name %}. For more information, see "[Searching topics](/articles/searching-topics)."

### Adding topics to your repository

{% data reusables.repositories.navigate-to-repo %}{% if currentVersion ver_lt "enterprise-server@2.22" %}
2. Under your repository description, click **Add topics**. ![Add topics link on a repository's main page](/assets/images/help/repository/add-topics-link.png)
3. Type the topic you want to add to your repository, then type a space. ![Form to enter topics](/assets/images/help/repository/add-topic-form.png)
4. After you've finished adding topics, click **Done**. ![Form with a list of topics and Done button](/assets/images/help/repository/add-topics-done-button.png)
{% else %}
2. To the right of "About", click {% octicon "gear" aria-label="The Gear icon" %}. ![Gear icon on main page of a repository](/assets/images/help/repository/edit-repository-details-gear.png)
3. Under "Topics", type the topic you want to add to your repository, then type a space. ![Form to enter topics](/assets/images/help/repository/add-topic-form.png)
4. After you've finished adding topics, click **Save changes**. !["Save changes" button in "Edit repository details"](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
{% endif %}
