---
title: Removing sensitive data from a repository
intro: 'Sensitive data can be removed from the history of a repository _if_ you can carefully coordinate with everyone who has cloned it and you are willing to manage the side effects.'
redirect_from:
  - /remove-sensitive-data
  - /removing-sensitive-data
  - /articles/remove-sensitive-data
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Remove sensitive data
---

## About removing sensitive data from a repository

When altering your repository's history using tools like `git-filter-repo`, it's crucial to understand the implications.  Rewriting history requires careful coordination with collaborators to successfully execute, and has a number of side effects that must be managed.

It is important to note that if the sensitive data you need to remove is a secret (e.g. password/token/credential), as is often the case, then as a first step you need to revoke and/or rotate that secret.  Once the secret is revoked or rotated, it can no longer be used for access, and that may be sufficient to solve your problem.  Going through the extra steps to rewrite the history and remove the secret may not be warranted.

## Side effects of rewriting history

There are numerous side effects to rewriting history; these include:

 * **High risk of recontamination**: It is unfortunately easy to re-push the sensitive data to the repository and make a bigger mess.  If a fellow developer has a clone from before your rewrite, and after your rewrite simply runs `git pull` followed by `git push`, the sensitive data will return.  They need to either discard their clone and re-clone, or carefully walk through multiple steps to clean up their clone first.
 * **Risk of losing other developers' work**: If other developers continue updating branches which contain the sensitive data while you are trying to clean up, you will be forced to either redo the cleanup, or to discard their work.
 * **Changed commit hashes**: Rewriting history will change the hashes of the commits that introduced the sensitive data _and_ all commits that came after.  Any tooling or automation that depends on commit hashes not changing will be broken or have problems.
 * **Branch protection challenges**: If you have any branch protections that prevent force pushes, those protections will have to be turned off (at least temporarily) for the sensitive data to be removed.
 * **Broken diff view for closed pull requests**: Removing the sensitive data will require removing the internal references used for displaying the diff view in pull requests, so you will no longer be able to see these diffs.  This is true not only for the PR that introduced the sensitive data, but any PR that builds on a version of history after the sensitive data PR was merged (even if those later PRs didn't add or modify any file with sensitive data).
 * **Poor interaction with open pull requests**: Changed commit SHAs will result in a different PR diff, and comments on the old PR diff may become invalidated and lost, which may cause confusion for authors and reviewers.  We recommend merging or closing all open pull requests before removing files from your repository.
 * **Lost signatures on commits and tags**: Signatures for commits or tags depend on commit hashes; since commit hashes are modified by history rewrites, signatures would no longer be valid and many history rewriting tools (including `git-filter-repo`) will simply remove the signatures.  In fact, `git-filter-repo` will remove commit signatures and tag signatures for commits that pre-date the sensitive data removal as well.  (Technically one can workaround this with the `--refs` option to `git-filter-repo` if needed, but then you will need to be careful to ensure you specify all refs that have sensitive data in their history and that include the commits that introduced the sensitive data in your range).
 * **Leading others directly to the sensitive data**: Git was designed with cryptographic checks built into commit identifiers so that nefarious individuals could not break into a server and modify history without being noticed.  That's helpful from a security perspective, but from a sensitive data perspective it means that expunging sensitive data is a very involved process of coordination; it further means that when you do modify history, clueful users with an existing clone will notice the history divergence and can use it to quickly and easily find the sensitive data still in their clone that you removed from the central repository.

## About sensitive data exposure

Removing sensitive data from a repository involves four high-level steps:

  * Rewrite the repository locally, using git-filter-repo
  * Update the repository on GitHub, using your locally rewritten history
  * Coordinate with colleagues to clean up other clones that exist
  * Prevent repeats and avoid future sensitive data spills

If you only rewrite your history and force push it, the commits with sensitive data may still be accessible elsewhere:

* In any clones or forks of your repository
* Directly via their SHA-1 hashes in cached views on {% data variables.product.github %}
* Through any pull requests that reference them

You cannot remove sensitive data from other users' clones of your repository; you will have to send them the instructions from [Make sure other copies are cleaned up: clones of colleagues](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html#_make_sure_other_copies_are_cleaned_up_clones_of_colleagues) in the `git-filter-repo` manual to have them do so themselves.  However, you can permanently remove cached views and references to the sensitive data in pull requests on {% data variables.product.github %} by contacting {% data variables.contact.contact_support %}.

{% ifversion fpt or ghec %}

> [!IMPORTANT] {% data variables.contact.github_support %} won't remove non-sensitive data, and will only assist in the removal of sensitive data in cases where we determine that the risk can't be mitigated by rotating affected credentials.

{% endif %}

If the commit that introduced the sensitive data exists in any forks, it will continue to be accessible there. You will need to coordinate with the owners of the forks, asking them to remove the sensitive data or delete the fork entirely. {% ifversion fpt or ghec %}{% data variables.product.company_short %} cannot provide contact information for these owners. {% endif %}

Consider these limitations and challenges in your decision to rewrite your repository's history.

## Purging a file from your local repository's history using git-filter-repo

1. Install the latest release of [the `git-filter-repo` tool](https://github.com/newren/git-filter-repo). You need a version with the `--sensitive-data-removal` flag, meaning at least version 2.47.  You can install `git-filter-repo` manually or by using a package manager. For example, to install the tool with HomeBrew, use the `brew install` command.

   ```shell
   brew install git-filter-repo
   ```

   For more information, see [_INSTALL.md_](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) in the `newren/git-filter-repo` repository.

1. Clone the repository to your local computer. See [AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository).

   ```shell
   git clone https://{% data variables.product.product_url %}/YOUR-USERNAME/YOUR-REPOSITORY
   ```

1. Navigate into the repository's working directory.

   ```shell
   cd YOUR-REPOSITORY
   ```

1. Run a `git-filter-repo` command to clean up the sensitive data.

    If you want to delete a specific file from all branches/tags/refs, run the following command replacing `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` with the **git path to the file you want to remove, not just its filename** (e.g. `src/module/phone-numbers.txt`):

      ```shell
      git-filter-repo --sensitive-data-removal --invert-paths --path PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
      ```

      > [!IMPORTANT] If the file with sensitive data used to exist at any other paths (because it was moved or renamed), you must either add an extra `--path` argument for that file, or run this command a second time naming the alternative path.

    If you want to replace all text listed in `../passwords.txt` from any non-binary files found anywhere in your repository's history, run the following command:

      ```shell
      git-filter-repo --sensitive-data-removal --replace-text ../passwords.txt
      ```

1. Double-check that you've removed everything you wanted to from your repository's history.

1. Find out how many pull requests will be adversely affected by this history rewrite. You will need this information below.

   ```shell
   $ grep -c '^refs/pull/.*/head$' .git/filter-repo/changed-refs
   4
   ```

    You can drop the `-c` to see which pull requests are affected:

   ```shell
   $ grep '^refs/pull/.*/head$' .git/filter-repo/changed-refs
   refs/pull/589/head
   refs/pull/602/head
   refs/pull/604/head
   refs/pull/605/head
   ```

    This output includes the pull request number between the second and third slashes.  If the [number of pull requests affected is larger than you expected](https://github.com/newren/git-filter-repo/blob/main/Documentation/FAQ.md#why-did-git-filter-repo-rewrite-more-commit-hashes-than-i-expected), you can discard this clone with no ill-effects and either redo the rewrite or abandon the sensitive data removal.  Once you move on to the next step, the rewrite becomes irreversible.

1. Once you're happy with the state of your repository, force-push your local changes to overwrite your repository on {% data variables.location.product_location %}. Even though `--force` is implied by `--mirror`, we include it below as a reminder that you are forcibly updating all branches, tags, and refs and you are discarding any changes others may have made to those refs while you were cleaning up the repository.

   ```shell
   git push --force --mirror origin
   ```

    This command will fail to push any refs starting with `refs/pull/`, since {% data variables.product.github %} marks those as read-only.  Those push failures will be handled in the next section.  If any other refs fail to push, you likely have branch protection turned on for that branch and will need to turn it off temporarily and redo the push.  Repeat until the only failures to update are refs starting with `refs/pull/`.

## Fully removing the data from {% data variables.product.github %}

After using `git-filter-repo` to remove the sensitive data and pushing your changes to {% data variables.product.github %}, you must take a few more steps to fully remove the data from {% data variables.product.github %}.

1. Contact {% data variables.contact.contact_support %}, and provide the following information:

    * The owner and repository name in question (e.g. YOUR-USERNAME/YOUR-REPOSITORY).
    * The number of affected pull requests, found in the previous step. This is used by Support to verify you understand how much will be affected.
    * The First Changed Commit(s) reported by `git-filter-repo` (Look for `NOTE: First Changed Commit(s)` in its output.)
    * If `NOTE: There were LFS Objects Orphaned by this rewrite` appears in the git-filter-repo output (right after the First Changed Commit), then mention you had LFS Objects Orphaned and upload the named file to the ticket as well.

    If you have successfully cleaned up all references other than PRs, and no forks have references to the sensitive data, Support will then:

    * Dereference or delete any affected PRs on {% data variables.product.github %}.
    * Run a garbage collection on the server to expunge the sensitive data from storage.
    * Remove cached views.
    * If LFS Objects are involved, delete and/or purge the orphaned LFS objects.

    {% ifversion ghes %}For more information about how site administrators can remove unreachable Git objects, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repo-gc). For more information about how site administrators can identify reachable commits, see [Identifying reachable commits](#identifying-reachable-commits).{% endif %}{% ifversion fpt or ghec %}
     >[!IMPORTANT] {% data variables.contact.github_support %} won't remove non-sensitive data, and will only assist in the removal of sensitive data in cases where we determine that the risk can't be mitigated by rotating affected credentials.{% endif %}

1. Collaborators must [rebase](https://git-scm.com/book/en/v2/Git-Branching-Rebasing), _not_ merge, any branches they created off of your old (tainted) repository history. One merge commit could reintroduce some or all of the tainted history that you just went to the trouble of purging.  They may need to take additional steps as well; see [Make sure other copies are cleaned up: clones of colleagues](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html#_make_sure_other_copies_are_cleaned_up_clones_of_colleagues) in the `git-filter-repo` manual.

{% ifversion ghes %}

## Identifying reachable commits

To fully remove unwanted or sensitive data from a repository, the commit that first introduced the data needs to be completely unreferenced in branches, tags, pull requests, and forks. A single reference anywhere will prevent garbage collection from being able to purge the data completely.

You can check for existing references by using the following commands when connected to the appliance via SSH. You'll need the SHA of the commit that originally introduced the sensitive data.

```shell
ghe-repo OWNER/REPOSITORY -c 'git ref-contains COMMIT_SHA_NUMBER'
ghe-repo OWNER/REPOSITORY -c 'cd ../network.git && git ref-contains COMMIT_SHA_NUMBER'
```

If either of those commands return any results, you'll need to remove those references before the commit can be successfully garbage collected. The second command will identify references that exist in forks of the repository (if the repository has no forks, you may skip running it).

* Results beginning with `refs/heads/` or `refs/tags/` indicate branches and tags respectively which still contain references to the offending commit, suggesting that the modified repository was not fully cleaned of the commit, or that it was not force-pushed.
* Results beginning with `refs/pull/` or `refs/__gh__/pull` indicate pull requests that reference the offending commit. These pull requests need to be deleted in order to allow the commit to be garbage collected. A pull request can be deleted in the site admin dashboard at `https://HOSTNAME/stafftools/repositories/OWNER/REPOSITORY/PULL_REQUESTS/<PULL-REQUEST-NUMBER>`, replacing `<PULL-REQUEST-NUMBER>` with the pull request number.

If references are found in any forks, the results will look similar, but will start with `refs/remotes/NWO/`. To identify the fork by name, you can run the following command.

```shell
ghe-nwo NWO
```

The sensitive data can be removed from a repository's forks by going to a clone of one, fetching from the cleaned up repository, then rebasing all branches and tags that contain the sensitive data on top of the relevant branch or tag from the cleaned up repository. Alternatively, the forks can be deleted altogether, and if needed, the repository can be re-forked once the cleanup of the root repository is complete.

Once you have removed the commit's references, re-run the commands to double-check.

If there are no results from either of the `ref-contains` commands, you can run garbage collection with the `--prune` flag to remove the unreferenced commits by running the following command.

```shell
ghe-repo-gc -v --prune OWNER/REPOSITORY
```

Once garbage collection has successfully removed the commit, you'll want to browse to the repository's site admin dashboard at `https://HOSTNAME/stafftools/repositories/OWNER/REPOSITORY`, select **Network**, then click **Invalidate Git cache** to remove any cached data.

{% endif %}

## Avoiding accidental commits in the future

Preventing contributors from making accidental commits can help you prevent sensitive information from being exposed. For more information see [AUTOTITLE](/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization).

There are a few things you can do to avoid committing or pushing things that should not be shared:

* If the sensitive data is likely to be found in a file that should not be tracked by git, add that filename to `.gitignore` (and make sure to commit and push that change to `.gitignore` so other developers are protected).
* Avoid hardcoding secrets in code. Use environment variables, or secret management services like Azure Key Vault, AWS Secrets Manager, or HashiCorp Vault to manage and inject secrets at runtime.
* Create a pre-commit hook to check for sensitive data before it is committed or pushed anywhere, or use a well-known tool in a pre-commit hook like git-secrets or gitleaks.  (Make sure to ask each collaborator to set up the pre-commit hook you have chosen.)
* Use a visual program like [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) or [gitk](https://git-scm.com/docs/gitk) to commit changes. Visual programs generally make it easier to see exactly which files will be added, deleted, and modified with each commit.
* Avoid the catch-all commands `git add .` and `git commit -a` on the command line—use `git add filename` and `git rm filename` to individually stage files, instead.
* Use `git add --interactive` to individually review and stage changes within each file.
* Use `git diff --cached` to review the changes that you have staged for commit. This is the exact diff that `git commit` will produce as long as you don't use the `-a` flag.
* Enable push protection for your repository to detect and prevent pushes which contain hardcoded secrets from being committed to your codebase. For more information, see [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection).

## Further reading

* [`git-filter-repo` man page](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html), especially the "Sensitive Data Removal" subsection of the "DISCUSSION" section.
* [Pro Git: Git Tools - Rewriting History](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)
* [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)
