# GitHub Docs <!-- omit in toc -->

Welcome to GitHub Docs! GitHub’s documentation is open source, meaning anyone from inside or outside the company can contribute. For full contributing guidelines, visit our [contributing guide](https://docs.github.com/en/contributing).


Here’s a ready-to-paste PR description for the rebase documentation change. Since there’s no confirmed issue number, I’ve left the issue field blank rather than inventing one. GitHub has enough imaginary paperwork already.

Why:

Closes:

Clarifies the interactive rebase workflow so readers understand how to amend the current commit and safely update a remote branch after rewriting Git history.

What’s being changed (if available, include any code snippets, screenshots, or gifs):

* Clarifies how to edit files, stage changes with git add, and update the current commit with git commit --amend during an interactive rebase.
* Explains how to amend a commit message without changing staged file contents.
* Clarifies when to resume the rebase with git rebase --continue.
* Updates the guidance for pushing rebased history, including git push --force-with-lease and git push origin HEAD --force-with-lease.
* Explains why --force-with-lease is safer than --force, while noting the remaining risks when updating shared branches.

Only the relevant sections of content/get-started/using-git/using-git-rebase-on-the-command-line.md are intended to change.

Check off the following:

* [ ]	A subject matter expert (SME) has reviewed the technical accuracy of the content in this PR.
* [ ]	The changes in this PR meet the docs fundamentals that are required for all content.
* [ ]	All CI checks are passing and the changes look good in the review environment.

One important catch: the PR still needs to be opened from the fork, and the final Markdown formatting correction around the --force-with-lease and --force option names should be made first. The GitHub integration previously rejected both write attempts with a 403, so this description is ready, but the PR itself is not open.
