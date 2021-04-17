---
title: Editing files in another user's repository
intro: 'When you edit a file in another user''s repository, we''ll automatically [fork the repository](/articles/fork-a-repo) and [open a pull request](/articles/creating-a-pull-request) for you.'
redirect_from:
  - /articles/editing-files-in-another-users-repository/
  - /articles/editing-files-in-another-user-s-repository
  - /articles/editing-files-in-another-users-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

1. In another user's repository, browse to the folder that contains the file you want to edit. Click the name of the file you want to edit.
2. Above the file content, click {% octicon "pencil" aria-label="The edit icon" %}. At this point, GitHub forks the repository for you.
3. Make any changes you need to the file. ![New content in file](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
6. Click **Propose file change**. ![Commit Changes button](/assets/images/help/repository/propose_file_change_button.png)
7. Type a title and description for your pull request. ![Pull Request description page](/assets/images/help/pull_requests/pullrequest-description.png)
8. Click **Create pull request**. ![Pull Request button](/assets/images/help/pull_requests/pullrequest-send.png)

### Дополнительная литература

* "[Editing files in your repository](/articles/editing-files-in-your-repository)"
