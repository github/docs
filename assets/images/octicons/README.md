## Importing Aftermarket Octicons

#### Background
Some octicons are missing from the project's current version of the `octicons` gem. Because this project is being replaced soon and updating `octicons` would require [significant changes](https://github.com/github/docs-internal/issues/6250#issuecomment-339730405), new octicons should be added manually as needed, via the following process:

#### How to add

1. Locate the missing octicon `.svg` in [primer/octions](https://github.com/primer/octicons/tree/master/lib/svg) and download it to your local `app/assets/images/octions` folder
1. Add a line to `app/assets/stylesheets/shared/_octicons.scss` for the new octicon, like so: 
```apple css
.octicon-<YOUR OCTICON NAME>:before {
  content: url("#{$new-octicons-path}/<YOUR OCTICON FILENAME>.svg")
}
```

You may now use the new octicon in your content as normal! :tada: