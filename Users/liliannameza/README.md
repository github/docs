@import "syntax-variables";

atom-text-editor {
  background-color: @syntax-background-color;
  color: @syntax-text-color;

  .wrap-guide {
    background-color: @syntax-wrap-guide-color;
  }

  .indent-guide {
    color: @syntax-indent-guide-color;
  }

  .invisible-character {
    color: @syntax-invisible-character-color;
  }

  .gutter {
    background-color: @syntax-gutter-background-color;
    color: @syntax-gutter-text-color;

    .line-number {
      &.cursor-line {
        background-color: @syntax-gutter-background-color-selected;
        color: @syntax-gutter-text-color-selected;
      }

      &.cursor-line-no-selection {
        color: @syntax-gutter-text-color-selected;
      }
    }
  }

  .gutter .line-number.folded,
  .gutter .line-number:after,
  .fold-marker:after {
    color: @light-gray;
  }

  .invisible {
    color: @syntax-text-color;
  }

  .cursor {
    color: @syntax-cursor-color;
  }

  .selection .region {
    background-color: @syntax-selection-color;
  }
}


// Syntax styles

.syntax--comment {
  color: @light-gray;
}

.syntax--keyword {
  color: @purple;

  &.syntax--control {
    color: @purple;
  }

  &.syntax--operator {
    color: @syntax-text-color;
  }

  &.syntax--other.syntax--special-method {
    color: @blue;
  }

  &.syntax--other.syntax--unit {
    color: @orange;
  }
}

.syntax--storage {
  color: @purple;
}

.syntax--constant {
  color: @orange;

  &.syntax--character.syntax--escape {
    color: @cyan;
  }

  &.syntax--numeric {
    color: @orange;
  }

  &.syntax--other.syntax--color {
    color: @cyan;
  }

  &.syntax--other.syntax--symbol {
    color: @green;
  }
}

.syntax--variable {
  color: @red;

  &.syntax--interpolation {
    color: darken(@red, 10%);
  }

  &.syntax--parameter.syntax--function {
    color: @syntax-text-color;
  }
}

.syntax--invalid.syntax--illegal {
  background-color: @red;
  color: @syntax-background-color;
}

.syntax--string {
  color: @green;


  &.syntax--regexp {
    color: @cyan;

    .syntax--source.syntax--ruby.syntax--embedded {
      color: @orange;
    }
  }

  &.syntax--other.syntax--link {
    color: @red;
  }
}

.syntax--punctuation {
  &.syntax--definition {
    &.syntax--comment {
      color: @light-gray;
    }

    &.syntax--string,
    &.syntax--variable,
    &.syntax--parameters,
    &.syntax--array {
      color: @syntax-text-color;
    }

    &.syntax--heading,
    &.syntax--identity {
      color: @blue;
    }

    &.syntax--bold {
      color: @light-orange;
      font-weight: bold;
    }

    &.syntax--italic {
      color: @purple;
      font-style: italic;
    }
  }

  &.syntax--section.syntax--embedded {
    color: darken(@red, 10%);
  }

}

.syntax--support {
  &.syntax--class {
    color: @light-orange;
  }

  &.syntax--function  {
    color: @cyan;

    &.syntax--any-method {
      color: @blue;
    }
  }
}

.syntax--entity {
  &.syntax--name.syntax--function {
    color: @blue;
  }
  &.syntax--name.syntax--type {
    color: @light-orange;
    text-decoration: underline;
  }

  &.syntax--other.syntax--inherited-class {
    color: @green;
  }
  &.syntax--name.syntax--class, &.syntax--name.syntax--type.syntax--class {
    color: @light-orange;
  }

  &.syntax--name.syntax--section {
    color: @blue;
  }

  &.syntax--name.syntax--tag {
    color: @red;
    text-decoration: underline;
  }

  &.syntax--other.syntax--attribute-name {
    color: @orange;

    &.syntax--id {
      color: @blue;
    }
  }
}

.syntax--meta {
  &.syntax--class {
    color: @light-orange;
  }

  &.syntax--link {
    color: @orange;
  }

  &.syntax--require {
    color: @blue;
  }

  &.syntax--selector {
    color: @purple;
  }

  &.syntax--separator {
    background-color: @gray;
    color: @syntax-text-color;
  }
}

.syntax--none {
  color: @syntax-text-color;
}

.syntax--markup {
  &.syntax--bold {
    color: @orange;
    font-weight: bold;
  }

  &.syntax--changed {
    color: @purple;
  }

  &.syntax--deleted {
    color: @red;
  }

  &.syntax--italic {
    color: @purple;
    font-style: italic;
  }

  &.syntax--heading .syntax--punctuation.syntax--definition.syntax--heading {
    color: @blue;
  }

  &.syntax--inserted {
    color: @green;
  }

  &.syntax--list {
    color: @red;
  }

  &.syntax--quote {
    color: @orange;
  }

  &.syntax--raw.syntax--inline {
    color: @green;
  }
}

.syntax--source.syntax--gfm .syntax--markup {
  -webkit-font-smoothing: auto;
  &.syntax--heading {
    color: @green;
  }
}


// Mini editor

atom-text-editor[mini] .scroll-view {
  padding-left: 1px;
}
{
  "name": "my-theme-syntax",
  "theme": "syntax",
  "version": "0.0.0",
  "description": "A short description of your syntax theme",
  "keywords": [
    "syntax",
    "theme"
  ],
  "repository": "https://github.com/atom/my-theme-syntax",
  "license": "MIT",
  "engines": {
    "atom": ">=1.0.0 <2.0.0"
  }
}
