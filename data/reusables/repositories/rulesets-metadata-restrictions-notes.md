> [!NOTE]
> If you squash merge a branch, all commits on that branch must meet any metadata requirements for the base branch.
> 
> When using end-of-line anchors in regular expressions, use `\n?$` rather than `$` alone. The optional `\n?` matches a trailing newline that may be present in Git push/CLI flows, while still working for commits created via the web UI and API.
