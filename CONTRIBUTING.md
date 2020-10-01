# Contributing to this repository <!-- omit in toc -->
We welcome contributions from the community. Read on to learn about the ways you can contribute to GitHub Docs.
- [Types of contributions :memo:](#types-of-contributions-memo)
  - [:mega: Discussions](#mega-discussions)
  - [:beetle: Issues](#beetle-issues)
  - [:hammer_and_wrench: Pull requests](#hammer_and_wrench-pull-requests)
  - [:question: Support](#question-support)
  - [:earth_asia: Translations](#earth_asia-translations)
  - [:balance_scale: Site Policy](#balance_scale-site-policy)
- [Starting with an issue](#starting-with-an-issue)
  - [Labels](#labels)
- [Opening a pull request](#opening-a-pull-request)
  - [Fork using GitHub Desktop](#fork-using-github-desktop)
  - [Fork using the command line](#fork-using-the-command-line)
- [Working in the github/docs repository](#working-in-the-githubdocs-repository)
- [Resolving merge conflicts](#resolving-merge-conflicts)
  - [In the GitHub user interface](#in-the-github-user-interface)
    - [Editing the file and committing the changes](#editing-the-file-and-committing-the-changes)
- [Troubleshooting](#troubleshooting)
  - [Failed status checks](#failed-status-checks)
- [Draft pull requests](#draft-pull-requests)
- [Reviewing](#reviewing)
  - [Self review](#self-review)
  - [Pull request template](#pull-request-template)
  - [Suggested changes](#suggested-changes)
- [Windows](#windows)

## Types of contributions :memo:
You can contribute to the GitHub Docs content and site in several ways.

### :mega: Discussions
Discussions are where we have conversations. 

If you'd like help troubleshooting a docs PR you're working on, have a great new idea, or want to share something amazing you've learned in our docs, join us in [discussions](https://github.com/github/docs/discussions).

### :beetle: Issues
[Issues](https://docs.github.com/en/github/managing-your-work-on-github/about-issues) are used to track tasks that contributors can help with. If an issue has a triage label, we haven't reviewed it yet and you shouldn't begin work on it.

If you've found something in the content or the website that should be updated, search open issues to see if someone else has reported the same thing. If it's something new, open an issue using a [template](https://github.com/github/docs/issues/new/choose). We'll use the issue to have a conversation about the problem you want to fix.

### :hammer_and_wrench: Pull requests
A [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) is a way to suggest changes in our repository. 

When we merge those changes, they should be deployed to the live site within 24 hours. :earth_africa: To learn more about opening a pull request in this repo, see [Opening a pull request](#opening-a-pull-request) below.

### :question: Support
We are a small team working hard to keep up with the documentation demands of a continously changing product. Unfortunately, we just can't help with support questions in this repository. If you are experiencing a problem with GitHub, unrelated to our documentation, please [contact GitHub Support directly](https://support.github.com/contact). Any issues, discussions, or pull requests opened here requesting support will be given information about how to contact GitHub Support, then closed and locked.

If you're having trouble with your GitHub account, contact [Support](https://support.github.com/contact).

### :earth_asia: Translations

This website is internationalized and available in multiple languages. The source content in this repository is written in English. We integrate with an external localization platform called [Crowdin](https://crowdin.com) and work with professional translators to localize the English content.

**We do not currently accept contributions for translated content**, but we hope to in the future.

### :balance_scale: Site Policy
GitHub's site policies are published on docs.github.com, too!

If you find a typo in the site policy section, you can open a pull request to fix it. For anything else, see [the CONTRIBUTING guide in the site-policy repo](https://github.com/github/site-policy/blob/main/CONTRIBUTING.md).

## Starting with an issue
You can browse existing issues to find something that needs help!

### Labels
Labels can help you find an issue you'd like to help with.
- The [`good-first-issue` label](https://github.com/github/docs/issues?q=is%3Aopen+is%3Aissue+label%3Agood-first-issue) is for problems or updates we think are ideal for beginners.
- The [`content` label](https://github.com/github/docs/issues?q=is%3Aopen+is%3Aissue+label%3Acontent) is for problems or updates in the content on docs.github.com. These will usually require some knowledge of Markdown.
- The [`engineering` label](https://github.com/github/docs/issues?q=is%3Aopen+is%3Aissue+label%3Aengineering) is for problems or updates in the docs.github.com website. These will usually require some knowledge of JavaScript/Node.js or YAML to fix. 

## Opening a pull request
You can use the GitHub user interface :pencil2: for some small changes, like fixing a typo or updating a readme. You can also fork the repo and then clone it locally, to view changes and run your tests on your machine.

### Fork using GitHub Desktop
[Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop. Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

### Fork using the command line
1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) the repo.
2. Open the terminal.
3. Enter the following command. Use your GitHub username instead of `YOUR-USERNAME`.
   ```
   git clone git@github.com:YOUR-USERNAME/docs
   ```

## Working in the github/docs repository
Here's some information that might be helpful while working on a Docs PR:

- [Development](/contributing/development.md) - This short guide describes how to get this app running on your local machine.

- [Content markup reference](/contributing/content-markup-reference.md) - All of our content is written in GitHub-flavored Markdown, with some additional enhancements.

- [Content style guide for GitHub Docs](/contributing/content-style-guide.md) - This guide covers GitHub-specific information about how we style our content and images. It also links to the resources we use for general style guidelines.

- [Reusables](/data/reusables/README.md) - We use reusables to help us keep content up to date. Instead of writing the same long string of information in several articles, we create a reusable, then call it from the individual articles.

- [Variables](/data/variables/README.md) - We use variables the same way we use reusables. Variables are for short strings of reusable text.

- [Liquid](/contribution/liquid-helpers.md) - We use liquid helpers to create different versions of our content.

- [Scripts](/script/README.md) - The scripts directory is the home for all of the scripts you can run locally. 

- [Tests](/tests/README.md) - We use tests to ensure content will render correctly on the site. Tests run automatically in your PR, and sometimes it's also helpful to run them locally.

## Resolving merge conflicts
When you try to merge two branches that change the same part of the same file, you will get a merge conflict.

### In the GitHub user interface
You can resolve the merge conflicts in the [GitHub UI](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github). This is useful for small conflicts, but if the conflict is more involved, you'll want to use your editor.

#### Editing the file and committing the changes

1. On the command line or GitHub Desktop, note the file that contains merge conflicts.
2. Open the file in your editor.
3. In the file, look for the merge conflict markers. (this is what it looks like in Atom)

 ```command-line
  <<<<<<< HEAD

  Here are your changes.
  =====================
  Here are the changes you are pulling in.
  >>>>>>> main
```
4. Decide which changes to keep and delete the unwanted changes and the merge conflict markers. If there are multiple files with merge conflicts, repeat this step until you resolve all conflicts.

 ```command-line
  Here are your changes.
```

**Note**: Resolving merge conflicts requires thought; it isn't purely mechanical and rote. Sometimes you outright accept your own changes, sometimes you take the upstream changes, and sometimes you combine the two to make a glorious hybrid update.

5. To commit your new changes:
- Using Desktop:
  - Check out this [GitHub Desktop](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project) article.

- Using the terminal: 
  - Stage the file (or files) you just modified for commit.

 ```command-line
  $ git add <EXAMPLE-CHANGED-FILE.md>
```
  - Commit the file to your local branch.

 ```command-line
  $ git commit -m "resolves merge conflicts"
```
  - Push the committed changes to the remote branch of the repository on GitHub.
 ```command-line
  $ git push origin
```

## Troubleshooting
If you get stuck while you're trying to contribute, see if someone else has had a similar problem in [discussions](https://github.com/github/docs/discussions). If not, open a new discussion!

While you're there, we'd appreciate any help answering questions you feel knowledgeable about.

### Failed status checks
If your pull request has failing status checks, [Troubleshooting](/contributing/troubleshooting.md) will walk you through some of the possible reasons.

## Draft pull requests
Do not review any [draft PRs](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests), they're not ready! The docs team uses draft PRs to work on projects over time. When the PR is ready for feedback, we'll change the state from draft to ready for review.

## Reviewing
We (usually the docs team, but sometimes GitHub product managers, engineers, or supportocats too!) review every single PR. The purpose of reviews is to create the best content we can for people who use GitHub.

:yellow_heart: Reviews are always respectful, acknowledging that everyone did the best possible job with the knowledge they had at the time.  
:yellow_heart: Reviews discuss content, not the person who created it.  
:yellow_heart: Reviews are constructive and start conversation around feedback.  

### Self review
You should always review your own PR first.

For content changes, make sure that you:
- [ ] Confirm that the changes address every part of the content strategy plan from your issue (if there are differences, explain them).
- [ ] Review the content for technical accuracy.
- [ ] Review the entire pull request using the [localization checklist](contribution/localization-checklist.md).
- [ ] Copy-edit the changes for grammar, spelling, and adherence to the style guide.
- [ ] Check new or updated Liquid statements to confirm that versioning is correct.
- [ ] Check that all of your changes render correctly in staging. Remember, that lists and tables can be tricky.
- [ ] If there are any failing checks in your PR, troubleshoot them until they're all passing.

### Pull request template
When you open a pull request, you must fill out the "Ready for review" template before we can review your PR. This template helps reviewers understand your changes and the purpose of your pull request.

### Suggested changes
We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.

As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix based systems use `\n`. Therefore when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
1. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
1. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
