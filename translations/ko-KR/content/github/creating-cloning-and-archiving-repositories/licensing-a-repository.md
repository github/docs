---
title: Licensing a repository
intro: 'Public repositories on GitHub are often used to share open source software. For your repository to truly be open source, you''ll need to license it so that others are free to use, change, and distribute the software.'
redirect_from:
  - /articles/open-source-licensing/
  - /articles/licensing-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Repositories
---

### Choosing the right license

We created [choosealicense.com](http://choosealicense.com), to help you understand how to license your code. A software license tells others what they can and can't do with your source code, so it's important to make an informed decision.

You're under no obligation to choose a license. However, without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work. If you're creating an open source project, we strongly encourage you to include an open source license. The [Open Source Guide](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project) provides additional guidance on choosing the correct license for your project.

{% note %}

**Note:** If you publish your source code in a public repository on {% data variables.product.product_name %}, {% if currentVersion == "free-pro-team@latest" %}according to the [Terms of Service](/articles/github-terms-of-service), {% endif %}other users of {% data variables.product.product_location %} have the right to view and fork your repository. If you have already created a repository and no longer want users to have access to the repository, you can make the repository private. When you change the visibility of a repository to private, existing forks or local copies created by other users will still exist. For more information, see "[Setting repository visibility](/github/administering-a-repository/setting-repository-visibility)."

{% endnote %}

### Determining the location of your license

Most people place their license text in a file named `LICENSE.txt` (or `LICENSE.md` or `LICENSE.rst`) in the root of the repository; [here's an example from Hubot](https://github.com/github/hubot/blob/master/LICENSE.md).

Some projects include information about their license in their README. For example, a project's README may include a note saying "This project is licensed under the terms of the MIT license."

As a best practice, we encourage you to include the license file with your project.

### Searching GitHub by license type

You can filter repositories based on their license or license family using the `license` qualifier and the exact license keyword:

| 라이선스 | License keyword                                               |
| ---- | ------------------------------------------------------------- |
|      | Academic Free License v3.0 | `afl-3.0`                        |
|      | Apache license 2.0 | `apache-2.0`                             |
|      | Artistic license 2.0 | `artistic-2.0`                         |
|      | Boost Software License 1.0 | `bsl-1.0`                        |
|      | BSD 2-clause "Simplified" license | `bsd-2-clause`            |
|      | BSD 3-clause "New" or "Revised" license | `bsd-3-clause`      |
|      | BSD 3-clause Clear license | `bsd-3-clause-clear`             |
|      | Creative Commons license family | `cc`                        |
|      | Creative Commons Zero v1.0 Universal | `cc0-1.0`              |
|      | Creative Commons Attribution 4.0 | `cc-by-4.0`                |
|      | Creative Commons Attribution Share Alike 4.0 | `cc-by-sa-4.0` |
|      | Do What The F*ck You Want To Public License | `wtfpl`         |
|      | Educational Community License v2.0 | `ecl-2.0`                |
|      | Eclipse Public License 1.0 | `epl-1.0`                        |
|      | Eclipse Public License 2.0 | `epl-2.0`                        |
|      | European Union Public License 1.1 | `eupl-1.1`                |
|      | GNU Affero General Public License v3.0 | `agpl-3.0`           |
|      | GNU General Public License family | `gpl`                     |
|      | GNU General Public License v2.0 | `gpl-2.0`                   |
|      | GNU General Public License v3.0 | `gpl-3.0`                   |
|      | GNU Lesser General Public License family | `lgpl`             |
|      | GNU Lesser General Public License v2.1 | `lgpl-2.1`           |
|      | GNU Lesser General Public License v3.0 | `lgpl-3.0`           |
|      | ISC | `isc`                                                   |
|      | LaTeX Project Public License v1.3c | `lppl-1.3c`              |
|      | Microsoft Public License | `ms-pl`                            |
|      | MIT | `mit`                                                   |
|      | Mozilla Public License 2.0 | `mpl-2.0`                        |
|      | Open Software License 3.0 | `osl-3.0`                         |
|      | PostgreSQL License | `postgresql`                             |
|      | SIL Open Font License 1.1 | `ofl-1.1`                         |
|      | University of Illinois/NCSA Open Source License | `ncsa`      |
|      | The Unlicense | `unlicense`                                   |
|      | zLib License | `zlib`                                         |

When you search by a family license, your results will include all licenses in that family. For example, when you use the query `license:gpl`, your results will include repositories licensed under GNU General Public License v2.0 and GNU General Public License v3.0. For more information, see "[Searching for repositories](/articles/searching-for-repositories/#search-by-license)."

### Detecting a license

[The open source Ruby gem Licensee](https://github.com/licensee/licensee) compares the repository's *LICENSE* file to a short list of known licenses. Licensee also provides the [Licenses API](/rest/reference/licenses) and [gives us insight into how repositories on {% data variables.product.product_name %} are licensed](https://github.com/blog/1964-open-source-license-usage-on-github-com). If your repository is using a license that isn't listed on the [Choose a License website](http://choosealicense.com/appendix/), you can [request including the license](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license).

If your repository is using a license that is listed on the Choose a License website and it's not displaying clearly at the top of the repository page, it may contain multiple licenses or other complexity. To have your license detected, simplify your *LICENSE* file and note the complexity somewhere else, such as your repository's *README* file.

### Applying a license to a repository with an existing license

The license picker is only available when you create a new project on GitHub. You can manually add a license using the browser. For more information on adding a license to a repository, see "[Adding a license to a repository](/articles/adding-a-license-to-a-repository)."

![Screenshot of license picker on GitHub.com](/assets/images/help/repository/repository-license-picker.png)

### Disclaimer

The goal of GitHub's open source licensing efforts is to provide a starting point to help you make an informed choice. GitHub displays license information to help users get information about open source licenses and the projects that use them. We hope it helps, but please keep in mind that we’re not lawyers and that we make mistakes like everyone else. For that reason, GitHub provides the information on an “as-is” basis and makes no warranties regarding any information or licenses provided on or through it, and disclaims liability for damages resulting from using the license information. If you have any questions regarding the right license for your code or any other legal issues relating to it, it’s always best to consult with a professional.

### 더 읽을거리

- The Open Source Guides' section "[The Legal Side of Open Source](https://opensource.guide/legal/)"{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
