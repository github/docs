---
title: About collaborative development models
intro: The way you use pull requests depends on the type of development model you use in your project.
redirect_from:
  - /articles/types-of-collaborative-development-models/
  - /articles/about-collaborative-development-models
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

There are two main types of development models with which you'd use pull requests. In the *fork and pull model*, anyone can fork an existing repository and push changes to their personal fork. You do not need permission to the source repository to push to a user-owned fork. The changes can be pulled into the source repository by the project maintainer. When you open a pull request proposing changes from your user-owned fork to a branch in the source (upstream) repository, you can allow anyone with push access to the upstream repository to make changes to your pull request.  This model is popular with open source projects as it reduces the amount of friction for new contributors and allows people to work independently without upfront coordination.

{% tip %}

**Tip:** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning-lab %}

{% endtip %}

In the *shared repository model*, collaborators are granted push access to a single shared repository and topic branches are created when changes need to be made. Pull requests are useful in this model as they initiate code review and general discussion about a set of changes before the changes are merged into the main development branch. This model is more prevalent with small teams and organizations collaborating on private projects.

### Further reading

- "[About pull requests](/articles/about-pull-requests)"
- "[Creating a pull request from a fork](/articles/creating-a-pull-request-from-a-fork)"
- "[Allowing changes to a pull request branch created from a fork](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
