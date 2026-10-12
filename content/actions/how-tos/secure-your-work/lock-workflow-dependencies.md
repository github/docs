---
title: Locking action dependencies in a repository's workflows
shortTitle: Lock workflow dependencies
intro: 'Generate a lockfile that pins every action your workflows use to a verified commit, and keep it current as your dependencies change.'
versions:
  feature: actions-workflow-lockfiles
permissions: 'People with write access to a repository'
product: '{% data variables.product.prodname_ghe_cloud %}'
contentType: how-tos
---

> [!NOTE] {% data reusables.actions.workflow-lockfiles-preview %}

Locking your workflows' dependencies ensures that the actions you reference contain the same code that was originally reviewed. For more information, see [AUTOTITLE](/actions/concepts/security/workflow-dependency-lockfiles).

## 1. Check your action references

Creating a lockfile pins your dependencies to commits based on the current branch or tag reference. Make sure these are the versions you want to lock in place.

Check that each `uses` reference in your workflows points to a supported, current version of the action. For best practices, see [AUTOTITLE](/actions/reference/security/secure-use#using-third-party-actions).

If any of your workflows call a reusable workflow in another repository, check those references too. Dependencies of reusable workflows are covered by the lockfile of the repository where the reusable workflow is defined. If your organization maintains shared workflows, we recommend onboarding those repositories first. See [AUTOTITLE](/actions/concepts/workflows-and-actions/reusing-workflow-configurations).

We recommend letting {% data variables.product.prodname_dependabot %} manage your {% data variables.product.prodname_actions %} dependencies. If it's not already enabled, enable it before you create the lockfile. See [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/auto-update-actions).

## 2. Install the `actions-lock` extension

1. Install the [{% data variables.product.prodname_cli %}](https://cli.github.com/).

1. Install the extension.

   ```bash copy
   gh extension install github/gh-actions-lock
   ```

> [!TIP] To update the extension later, run `gh extension upgrade gh-actions-lock`.

## 3. Generate the lockfile

From the root of your repository, run the extension with no arguments. It will scan every workflow under `.github/workflows/`, pin each resolvable action to a commit SHA, and write the lockfile.

```bash copy
gh actions-lock
```

To onboard a single workflow instead of the whole directory, pass its path.

```bash copy
gh actions-lock .github/workflows/ci.yml
```

If the extension reports that it has skipped a workflow because local path actions aren't supported, this means a `uses: ./…` reference in that workflow didn't resolve to a real action file. Local paths resolve from the repository root, **not** from the directory of the file that contains them, so a path that looks right next to its own file may not resolve. Correct the path and run the command again.

For the full set of options, run `gh actions-lock --help`.

## 4. Review the changes and commit

The extension changes more than the lockfile, so review the full diff before you commit. It also rewrites your workflow `uses` references to the specific version it resolved, so a reference such as `octo-org/deploy-action@v3` can become `octo-org/deploy-action@v3.1.0`. This makes the reference more specific without changing the commit it resolves to.

If your repository, organization, or enterprise only allows specified actions, check the allowlist before you commit. After a workflow is onboarded, the allowlist is checked against locked commit SHAs, because a tag can be moved to different code but a locked SHA can't. Entries pinned to a tag, such as `{% data reusables.actions.action-checkout %}`, no longer match. Use a wildcard or the full commit SHA instead. See [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-select-actions-and-reusable-workflows-to-run).

References to actions in your own repository are rewritten too, from `uses: ./…` to the equivalent `uses: $/…`, in both your workflows and your in-repository `action.yml` files. A `$/…` reference always resolves to the running commit, so it's inherently pinned and needs no lockfile entry.

## 5. Keep the lockfile current

Keep the lockfile up to date with your repository's workflow files and security updates.

1. **Re-run the extension when you change dependencies.** Run `gh actions-lock` again whenever you add a workflow that has `uses` dependencies, or add or remove `uses` dependencies in an existing workflow.
1. **Let {% data variables.product.prodname_dependabot %} handle version bumps.** When {% data variables.product.prodname_dependabot %} opens a version update for an action in a workflow you've onboarded, it will also regenerate the matching lockfile entry in the same pull request, so your workflow file and lockfile can't drift apart.
   
   {% data variables.product.prodname_dependabot %} will **not** onboard a workflow for you. If it bumps a dependency in a workflow with no lockfile entry, it just reports that onboarding is required.

1. **Re-resolve references that have moved.** References to branches or partial versions, such as `main` or `v3`, are trusted from the lockfile and aren't re-resolved on a normal run. If the extension reports an error because a tag now points to a different upstream commit, check the upstream repository's history first. If the move was legitimate, re-resolve the reference with `gh actions-lock --relock`. If the commit you originally locked is no longer reachable at all, for example because the upstream repository force-pushed or deleted it, `--relock` will still report an error. To accept the new commit, run `gh actions-lock --relock --accept-moved`.

### Reviewing lockfile changes

Review changes to the lockfile like any other dependency change:

* **A changed `commit`** is the code your workflows will run. Treat it the way you'd treat any other dependency version bump.
* **A changed `owner_id` or `repo_id`** should be rare. It means the repository behind that name is **not** the one you originally locked, so investigate before you merge.

If a lockfile looks wrong, fix your workflow files and regenerate it. Never edit the lockfile manually.

## Next steps

Once you have generated a lockfile for a repository, ensure it's enforced and up to date without developers needing to remember to run commands. See [AUTOTITLE](/actions/how-tos/administer/enforce-workflow-lockfiles).
