After you generate the script, review the file and, optionally, edit the script.

* If there are any repositories you don't want to migrate, delete or comment out the corresponding lines.
* If you want any repositories to have a different name in the destination organization, update the value for the corresponding `--target-repo` flag.
* If you want to change the visibility of new repository, update the value for the corresponding `--target-repo-visibility` flag. By default, the script sets the same visibility as the source repository.
