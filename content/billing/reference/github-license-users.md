## About GitHub Importer

GitHub Importer is a tool that quickly imports Git repositories from other hosting services to GitHub.com.

To get started with GitHub Importer, see [Importing a repository with GitHub Importer](/en/migrations/importing-source-code/using-github-importer/importing-a-repository-with-github-importer#importing-a-repository-with-github-importer).

## Capabilities and limitations of GitHub Importer

* GitHub Importer imports the source code and commit history of a repository. It does not import other associated data from the hosting service, such as issues and pull requests.
* GitHub Importer is only available on GitHub.com.
* During an import, you can authenticate with your remote repository. The repository must be accessible from the public internet. If the repository is hosted on a private network, GitHub Importer won't be able to access it.
* GitHub Importer does not support repositories that use version control systems other than Git, such as Mercurial, Subversion, or Team Foundation Version Control (TFVC). For more information about alternatives to GitHub Importer, see [About source code imports using the command line](/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/about-source-code-imports-using-the-command-line).
* Repositories and individual files on GitHub are subject to size limits. For more information, see [About large files on GitHub](/en/repositories/working-with-files/managing-large-files/about-large-files-on-github).
* GitHub Importer does not move Git Large File Storage (LFS) objects from the source repository to the target repository. If you use Git LFS, you will need to either convert the Git LFS objects to regular files tracked by Git before running the migration, or move the Git LFS objects to the new repository separately after running the migration.

## Further reading

* [Importing an external Git repository using the command line](/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)
