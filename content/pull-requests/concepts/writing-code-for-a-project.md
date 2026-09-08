---
title: Writing code for a project
shortTitle: Write code
intro: 'Use branches, forks, commits, and pull requests to safely write, refine, and propose code changes for collaborative projects.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: concepts
---

When you contribute to a project, you need a safe place to write and refine code before it affects your main code base. Branches, forks, commits, and pull requests work together to give you that space, so you can experiment, check in work incrementally, and propose finished changes for review.

## Isolating your work with branches and forks

Most work starts by creating an isolated copy of the code that you can change freely.

* Use a **branch** when you have write access to a repository. A branch lets you develop a feature, fix a bug, or experiment in a contained area of the repository without affecting other branches. You create a branch from an existing branch, usually the default branch. 
* Use a **fork** when you do not have write access, or when you want full independence from the original project. A fork is a separate repository that shares code and visibility settings with the original "upstream" repository. It has its own branches, issues, and pull requests. With a fork, you can also open pull requests for the upstream repository.

A branch is usually the simplest choice when you already collaborate in a shared repository. A fork is often the best choice for open source contributions, where you may not have write access to the upstream repository.

## Checking in work with commits

As you write code, you save small, meaningful groups of changes as **commits**. Each commit records a snapshot of your work along with a message describing what changed, which makes it easier to track history, review changes, and understand how the code evolved. 

Committing frequently on your branch or fork lets you:

* Break a larger change into reviewable steps.
* Roll back to an earlier state if an experiment does not work out.
* Give reviewers a clear history of how you arrived at the final change.

## Proposing changes with pull requests

When your work is ready to share, you open a **pull request** to propose merging your changes into the base branch. A pull request brings together your commits, a description of the change, and the tools reviewers need to discuss and evaluate it before it merges. 

You can open a pull request while work is still in progress by creating a draft pull request, which shares your changes without formally requesting review. This is useful when you want early feedback or want to run automated checks against your code.

## Keeping your code current and optimized

While a pull request is open, the base branch can keep changing as other people merge their work. To keep your changes clean and reduce conflicts, you can:

* Merge or rebase the base branch into your branch frequently so your diff stays focused on what your change introduces. {% data variables.product.github %} shows a three-dot diff by default, which compares your branch against the point where it diverged from the base. 
* Rebase to tidy a messy commit history—reordering, combining, or rewording commits—before you ask for review.
* Resolve merge conflicts when Git cannot automatically combine competing changes. 

## Working within repository controls

Experienced contributors work within the guardrails a repository defines. These controls shape where you can push, who must approve your work, and what must pass before it merges.

* **Protected branches and rulesets** can block direct pushes to important branches, require linear history or signed commits, and require status checks or reviews before merging. 
* **Code owners** are automatically requested for review when your change touches files they own, so plan for their approval on sensitive areas. 
* **Push rulesets** can apply across a fork network, restricting file paths, sizes, or names in every fork.
* **Pre-receive hooks** let administrators on {% data variables.product.prodname_ghe_server %} enforce policy checks on the server before commits are accepted. 

## An integrated toolchain

Pull requests connect your code to the automation and services that help you write code quickly and securely.


{% ifversion fpt or ghec %}* **{% data variables.product.prodname_copilot %}** can help you write, debug, and optimize code. {% endif %}
* **{% data variables.product.prodname_code_scanning_caps %}** and **{% data variables.product.prodname_dependabot %}** surface security issues and vulnerable dependencies as your changes move through a pull request, so you can apply secure coding practices early.
* **{% data variables.product.prodname_actions %}** can run continuous integration on every push to your pull request, building and testing your changes automatically. 

## Further reading

* [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/creating-a-pull-request)
{% ifversion fpt or ghec %}
* [AUTOTITLE](/copilot/get-started/quickstart)
{% endif %}
