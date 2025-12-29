---
title: 'What is {% data variables.product.prodname_pages %}?'
intro: 'You can use {% data variables.product.prodname_pages %} to host a website about yourself, your organization, or your project directly from a repository on {% data variables.product.prodname_dotcom %}.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /articles/what-is-github-pages
  - /articles/user-organization-and-project-pages
  - /articles/using-a-static-site-generator-other-than-jekyll
  - /articles/mime-types-on-github-pages
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio
  - /articles/about-github-pages
  - /github/working-with-github-pages/about-github-pages
  - /early-access/github/articles/managing-your-disabled-github-pages-site
  - /pages/getting-started-with-github-pages/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pages
---

## About {% data variables.product.prodname_pages %}

{% data variables.product.prodname_pages %} is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on {% data variables.product.github %}, optionally runs the files through a build process, and publishes a website. You can see examples of {% data variables.product.prodname_pages %} sites in the [{% data variables.product.prodname_pages %} examples collection](https://github.com/collections/github-pages-examples).

## Types of {% data variables.product.prodname_pages %} sites

There are two types of {% data variables.product.prodname_pages %} sites. Sites associated with a user or organization account, and sites for a specific project.

<table>
<thead>
<tr>
<th>Property</th>
<th>User and organization sites</th>
<th>Project sites</th>
</tr>
</thead>
<tbody>
<tr>
<th>Source files</th>
<td>Must be stored in a repository named <code>&lt;owner&gt;.github.io</code>, where <code>&lt;owner&gt;</code> is the personal or organization account name</td>
<td>Stored in a folder within the repository that contains the project&#39;s code</td>
</tr>
<tr>
<th>Limits</th>
<td>Maximum of one pages site per account</td>
<td>Maximum of one pages site per repository</td>
</tr>
{% ifversion fpt or ghec %}
<tr>
<th>Default site location</th>
<td><code>http(s)://&lt;owner&gt;.github.io</code></td>
<td><code>http(s)://&lt;owner&gt;.github.io/&lt;repositoryname&gt;</code></td>
</tr>
{% else %}
<tr>
<th>Default site location with subdomain isolation enabled</th>
<td><code>http(s)://pages.&lt;hostname&gt;/&lt;owner&gt;</code></td>
<td><code>http(s)://pages.&lt;hostname&gt;/&lt;owner&gt;/&lt;repository&gt;/</code></td>
</tr>
<tr>
<th>Default site location with subdomain isolation disabled</th>
<td><code>http(s)://&lt;hostname&gt;/pages/&lt;username&gt;</code></td>
<td><code>http(s)://&lt;hostname&gt;/pages/&lt;owner&gt;/&lt;repository&gt;/</code></td>
</tr>
{% endif %}
</tbody>
</table>

{% ifversion ghec %}
If you publish your site privately, the URL for your site will be different. For more information, see [AUTOTITLE](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).
{% endif %}

{% ifversion ghes %}
For more information, see [AUTOTITLE](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation) or contact your site administrator.
{% endif %}

{% ifversion fpt or ghec %}

### Hosting on your own custom domain

You can host your site on {% data variables.product.prodname_dotcom %}'s `github.io` domain or your own custom domain. See [AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site).

{% endif %}

{% ifversion fpt %}

## Data collection

When a {% data variables.product.prodname_pages %} site is visited, the visitor's IP address is logged and stored for security purposes, regardless of whether the visitor has signed into {% data variables.product.prodname_dotcom %} or not. For more information about {% data variables.product.prodname_dotcom %}'s security practices, see [{% data variables.product.prodname_dotcom %} Privacy Statement](/site-policy/privacy-policies/github-privacy-statement).
{% endif %}

## Further reading

* [{% data variables.product.prodname_pages %}](https://github.com/skills/github-pages) on {% data variables.product.prodname_learning %}
* [AUTOTITLE](/rest/repos#pages)
* [AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
{% ifversion fpt or ghec %} * [AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages#using-a-custom-domain-across-multiple-repositories) {% endif %}
