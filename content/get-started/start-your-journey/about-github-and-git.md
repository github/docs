---
title: About GitHub and Git
shortTitle: About GitHub and Git
intro: 'You can use {% data variables.product.product_name %} and Git to collaborate on work.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Git
  - Fundamentals
  - GitHub
  - Collaboration
  - Community
redirect_from:
  - /get-started/quickstart/about-github-and-git
---

## About {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} is a {% ifversion not ghes %}cloud-based {% endif %}platform where you can store, share, and work together with others to write code.

Storing your code in a "repository" on {% data variables.product.prodname_dotcom %} allows you to:
* **Showcase or share** your work.
* **Track and manage** changes to your code over time.
* Let others **review** your code, and make suggestions to improve it.
* **Collaborate** on a shared project, without worrying that your changes will impact the work of your collaborators before you're ready to integrate them.

Collaborative working, one of {% data variables.product.prodname_dotcom %}’s fundamental features, is made possible by the open-source software, Git, upon which {% data variables.product.prodname_dotcom %} is built.

## About Git

Git is a version control system that intelligently tracks changes in files. Git is particularly useful when you and a group of people are all making changes to the same files at the same time.

Typically, to do this in a Git-based workflow, you would:
* **Create a branch** off from the main copy of files that you (and your collaborators) are working on.
* **Make edits** to the files independently and safely on your own personal branch.
* Let Git intelligently **merge** your specific changes back into the main copy of files, so that your changes don't impact other people's updates.
* Let Git **keep track** of your and other people's changes, so you all stay working on the most up-to-date version of the project.

If you want to learn more about Git, see "[AUTOTITLE](/get-started/using-git/about-git)."

### How do Git and {% data variables.product.prodname_dotcom %} work together?

When you upload files to {% data variables.product.prodname_dotcom %}, you'll store them in a "Git repository." This means that when you make changes (or "commits") to your files in {% data variables.product.prodname_dotcom %}, Git will automatically start to track and manage your changes.

There are plenty of Git-related actions that you can complete on {% data variables.product.prodname_dotcom %} directly in your browser, such as creating a Git repository, creating branches, and uploading and editing files.

However, most people work on their files locally (on their own computer), then continually sync these local changes—and all the related Git data—with the central "remote" repository on {% data variables.product.prodname_dotcom %}. There are plenty of tools that you can use to do this, such as GitHub Desktop.

Once you start to collaborate with others and all need to work on the same repository at the same time, you’ll continually:

* **Pull** all the latest changes made by your collaborators from the remote repository on {% data variables.product.prodname_dotcom %}.
* **Push** back your own changes to the same remote repository on {% data variables.product.prodname_dotcom %}.

Git figures out how to intelligently merge this flow of changes, and {% data variables.product.prodname_dotcom %} helps you manage the flow through features such as "pull requests."

## Where do I start?

If you're new to {% data variables.product.prodname_dotcom %}, and unfamiliar with Git, we recommend working through the articles in the "[AUTOTITLE](/get-started/start-your-journey)" category. The articles focus on tasks you can complete directly in your browser on {% data variables.product.prodname_dotcom %} and will help you to:

* **Create an account** on {% data variables.product.prodname_dotcom %}.
* **Learn the "{% data variables.product.prodname_dotcom %} Flow"**, and the key principles of collaborative working (branches, commits, pull requests, merges).
* **Personalise your profile** to share your interests and skills.
* **Explore {% data variables.product.prodname_dotcom %}** to find inspiration for your own projects and connect with others.
* Learn how to **download** interesting code for your own use.
* Learn how to **upload** something you're working on to a {% data variables.product.prodname_dotcom %} repository.

{% ifversion fpt or ghec %}

## Next steps

* "[AUTOTITLE](/get-started/start-your-journey/creating-an-account-on-github)"

{% endif %}

## Further reading

* "[AUTOTITLE](/get-started/using-github/connecting-to-github)"
