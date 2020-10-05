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
