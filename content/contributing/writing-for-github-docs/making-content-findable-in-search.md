---
title: Making content findable in search
shortTitle: Make content findable
intro: 'Follow these SEO best practices to help users find {% data variables.product.company_short %} documentation using search engines.'
versions:
  feature: 'contributing'
---

## About search engine optimization (SEO)

Search engine optimization (SEO) is the practice of earning visibility for web content in search engine results, such as those of Google and Bing. Google search is the top referrer to {% data variables.product.prodname_docs %} and the most common entry point for our users.

We can plan and write our content to improve SEO. Better SEO improves the experience of people searching for documentation because it makes it more likely for them to find the information they seek using their preferred search terms.

## Best practices for content SEO

Good SEO requires planning content for specific audiences and being attentive to the words they use to search. Follow these best practices to improve an article's SEO.

### Select a target audience

Understand and write to the specific audience for the content: developers, administrators, or code learners. This helps you to:

* Use words that your readers use.
* Make content relevant to their needs and tasks.
* Provide the right amount of context and background information.

### Respond to search intent

Craft content around **search intent**: the task, question, or problem that drives a member of the target audience to search for information online.

* Conduct search intent research. For example, analyze search engine results pages (SERPs) for relevant queries.
* Understand user needs. Use multiple sources such as customer feedback, user interviews, and metrics.

### Use clear language

Follow guidance in "[AUTOTITLE](/contributing/writing-for-github-docs/best-practices-for-github-docs)," including:

* Ensure every article has a clear, discrete topic.
* Put higher priority content first in an article.
* Structure articles with clear headings.
* Edit content for consistency following the "[AUTOTITLE](/contributing/style-guide-and-content-model/style-guide)."

### Incorporate keywords

Incorporate keywords, or top search terms used by your audience, into page copy and metadata. For example, if you are writing about "billing" but your audience primarily uses "cost" and "payment," use those terms instead.

Google and Bing both offer keyword research tools to help you discover relevant keywords. The Docs team also consults Google Search Console data to understand what search terms lead to pages on {% data variables.product.prodname_docs %}.

### Include metadata

Use complete metadata in the frontmatter. To see the values available, see "[AUTOTITLE](/contributing/writing-for-github-docs/using-yaml-frontmatter)."

On {% data variables.product.prodname_docs %}, the `intro` element displays as an on-page subhead and serves as the HTML metadata description. The article title serves as the HTML page title. For good SEO:

* Write the title and `intro` to be complementary and keyword-rich. Consider how they will render in research.
* Accompany all images with keyword-rich alt text, which is also metadata used by search engines. See "[Alt text](/contributing/style-guide-and-content-model/style-guide#alt-text)" in the {% data variables.product.prodname_docs %} Style Guide.

### Link strategically

Link frugally to other task-relevant pages on {% data variables.product.prodname_docs %} and high-quality peer sites, following "[Links](/contributing/style-guide-and-content-model/style-guide#links)" in the {% data variables.product.prodname_docs %} Style Guide.

Ensure that incoming links do not break by carefully maintaining redirects.

### Maintain accuracy

Ensure content is free of errors in fact, spelling, and style. Audit content periodically to remove errors such as broken links and to retire unneeded content. See "[AUTOTITLE](/contributing/writing-for-github-docs/configuring-redirects)."
