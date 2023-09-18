---
title: Signing commits
intro: 'You can sign commits locally using GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} or S/MIME.'
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg
  - /articles/signing-commits-using-gpg
  - /articles/signing-commits
  - /github/authenticating-to-github/signing-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**Tips:**

To configure your Git client to sign commits by default for a local repository, in Git versions 2.0.0 and above, run `git config commit.gpgsign true`. To sign all commits by default in any local repository on your computer, run `git config --global commit.gpgsign true`.

To store your GPG key passphrase so you don't have to enter it every time you sign a commit, we recommend using the following tools:
- For Mac users, the [GPG Suite](https://gpgtools.org/) allows you to store your GPG key passphrase in the Mac OS Keychain.
- For Windows users, the [Gpg4win](https://www.gpg4win.org/) integrates with other Windows tools.

You can also manually configure [gpg-agent](http://linux.die.net/man/1/gpg-agent) to save your GPG key passphrase, but this doesn't integrate with Mac OS Keychain like ssh-agent and requires more setup.

{% endtip %}

If you have multiple keys or are attempting to sign commits or tags with a key that doesn't match your committer identity, you should [tell Git about your signing key](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key).

1. When committing changes in your local branch, add the -S flag to the git commit command:

   ```shell
   $ git commit -S -m "YOUR_COMMIT_MESSAGE"
   # Creates a signed commit
   ```

1. If you're using GPG, after you create your commit, provide the passphrase you set up when you [generated your GPG key](/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).
1. When you've finished creating commits locally, push them to your remote repository on {% data variables.product.product_name %}:

   ```shell
   $ git push
   # Pushes your local commits to the remote repository
   ```

1. On {% data variables.product.product_name %}, navigate to your pull request.
{% data reusables.repositories.review-pr-commits %}
1. To view more detailed information about the verified signature, click **Verified.**

   ![Screenshot of a commit in the commit list for a repository. "Verified" is highlighted with an orange outline.](/assets/images/help/commits/verified-commit.png)

## Further reading

- "[AUTOTITLE](/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)"
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/signing-tags)"{% ifversion fpt or ghec %}
- "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)"{% endif %}
