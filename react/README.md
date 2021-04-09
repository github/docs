# React (Experimental)

The files in this directory are React components. We can use these components within Markdown files by adding `interactive: true` frontmatter to a Markdown file. Then, using the following syntax to embed the component:

```
<!--react-->
<ReactComponentHere some='prop' other={`prop`} />
<!--end-react-->
```

Theoretically React can be embedded anywhere on the site with a little bit of creativity but that is yet to be tested.

## Defining new components

Start by adding frontmatter `interactive:true` to any Markdown file that you want to support React. This prevents React render time from slowing down any other page and keeping the impact on performance very low.

1. Create the component in the `./react` directory
2. Register the component for webpack in `./javascripts/index.js` so the component works with client side rendering
3. Register the component in `./lib/react/engine.js` so the component works with server side rendering
4. If the component needs to be evaluated client side, see [this example](https://github.com/github/docs/blob/a48998c7890b71c8f58eda1fa31b50df348a0042/react/CodeEditor.js) for how to ensure the client side component rendered by the server gets [Hydrated](https://reactjs.org/docs/react-dom.html#hydrate).

## A Complete Example

The following example demonstrates the addition of an interactive CodeEditor on one of our pages:

- [Defining the CodeEditor React Component](https://github.com/github/docs/blob/a48998c7890b71c8f58eda1fa31b50df348a0042/react/CodeEditor.js)
- [Configuring the CodeEditor for client-side rendering](https://github.com/github/docs/blob/a48998c7890b71c8f58eda1fa31b50df348a0042/javascripts/index.js#L45)
- [Configuring the CodeEditor for server-side rendering](https://github.com/github/docs/blob/a48998c7890b71c8f58eda1fa31b50df348a0042/lib/react/engine.js#L30)
- CodeEditor added to a markdown file
  - [Enabling React components on a page](https://github.com/github/docs/blame/a48998c7890b71c8f58eda1fa31b50df348a0042/content/github/getting-started-with-github/access-permissions-on-github.md#L12)
  - [Adding the CodeEditor to a page](https://github.com/github/docs/blame/a48998c7890b71c8f58eda1fa31b50df348a0042/content/github/getting-started-with-github/access-permissions-on-github.md#L47)

## Gotchas

- When requiring React components from npm you will often need to explicitly call `require('component').default` to make sure you get the component 
- Some code examples you get from external React packages won't work out of the box, you often need to dig into the module and determine whether it's exporting to default or not which will in many cases cause you to need to `require('package').default`
- `import` doesn't always work. Use `require` for a more consistent experience with React in this codebase.
- If components require you to load CSS, you need to load that CSS in the `javascripts/index.js` file as shown [here](https://github.com/github/docs/blob/a48998c7890b71c8f58eda1fa31b50df348a0042/javascripts/index.js#L22)
