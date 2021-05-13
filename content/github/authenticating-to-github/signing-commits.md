---
title: Signing commits
intro: You can sign commits locally using GPG or S/MIME.
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg/
  - /articles/signing-commits-using-gpg/
  - /articles/signing-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
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

If you have multiple keys or are attempting to sign commits or tags with a key that doesn't match your committer identity, you should [tell Git about your signing key](/articles/telling-git-about-your-signing-key).

1. When committing changes in your local branch, add the -S flag to the git commit command:
  ```shell
  $ git commit -S -m <em>your commit message</em>
  # Creates a signed commit
  ```
2. If you're using GPG, after you create your commit, provide the passphrase you set up when you [generated your GPG key](/articles/generating-a-new-gpg-key).
3. When you've finished creating commits locally, push them to your remote repository on {% data variables.product.product_name %}:
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. On {% data variables.product.product_name %}, navigate to your pull request.
{% data reusables.repositories.review-pr-commits %}
5. To view more detailed information about the verified signature, click Verified.
![Signed commit](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

### Further reading

* "[Checking for existing GPG keys](/articles/checking-for-existing-gpg-keys)"
* "[Generating a new GPG key](/articles/generating-a-new-gpg-key)"
* "[Adding a new GPG key to your GitHub account](/articles/adding-a-new-gpg-key-to-your-github-account)"
* "[Telling Git about your signing key](/articles/telling-git-about-your-signing-key)"
* "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)"
* "[Signing tags](/articles/signing-tags)"
