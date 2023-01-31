# Creating and updating screenshots

Screenshots complement text instructions for using GitHub. Use a screenshot when one or both of the following apply:

- The relevant **area of the interface has multiple choices**, which would cause confusion without a visual cue.
- A key **interface element is small, subtle**, or otherwise hard to find.

Don't use screenshots for simple steps where text does the job, or to show code commands or outputs.

## Pros and cons of screenshots

Consider these in your decision-making.

### Pros of screenshots

- Screenshots make articles more visually scannable.
- Screenshots make instructions easier to follow, especially for people who have difficulty reading.
- When supplied with alt text, screenshots help blind and low-vision users collaborate with sighted colleagues.

### Cons of screenshots

- Screenshots privilege sighted users.
- Screenshots add length and load time to articles.
- Screenshots increase the volume of content that needs to be maintained.
- When captured at different pixel dimensions and degrees of zoom, screenshots can look confusing.

## Guidelines for screenshots on GitHub Docs

### Technical specs

- PNG file format
- 144 ppi ("retina" or 2x on Mac)
- 750–1000 pixels wide for full-column images
- 250KB or less in file size
- Descriptive file names: `gist-embed-link.png` instead of `right_side_page_03.png`

### Accessibility

To be inclusive of all users, screenshots must:

- **Be accompanied by complete instructions** on the webpage, with no information conveyed entirely in visual form.
- **Be full contrast** as in the interface itself, with nothing obscured or reduced in opacity or color contrast.
- **Have alt text** that describes the meaning of the image and the appearance of its highlighting, if any. [See alt text guidelines in our style guide.](./content-style-guide.md#alt-text)
- **Be clear and crisp**, with text and UI elements as legible as possible.

### Visual style

- Show a UI element with **just enough surrounding context** to help people know where to find it on their screen.
- **Reduce negative space**, for example in input fields, by resizing your browser window until optimal.
- Show interfaces in **light theme** to ensure contrast between the interface and the orange highlight.
  - For GitHub, select "Light default" in your account's [appearance settings](https://github.com/settings/appearance).
  - For VSCode, select "GitHub Light Default" in the free [GitHub Theme extension](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme).
- Replace your username and avatar, if they appear, with **[Octocat's](https://github.com/octocat) username and avatar**. You can do this using the developer tools in your browser to edit the rendered page.

 ![Screenshot of a comment box on a GitHub issue. A button labeled "Close issue" is highlighted with an orange outline.](./images/issue-comment-close-button.png)

## Adding highlighting in Snagit

Use [Snagit](https://www.techsmith.com/screen-capture.html) to apply a contrasting stroke around the UI element being discussed.

![Screenshot of four options menus on a GitHub repository. The menu labeled "Fork" shows a fork count of 58.5k and is highlighted with an orange outline.](./images/repository-fork-button.png)

### Importing the GitHub Docs theme into Snagit

1. Download [`snagit-theme-github-docs.snagtheme`](./images/snagit-theme-github-docs.snagtheme) to your computer.
2. Open Snagit and select the Shape tool.
3. Under "Quick Styles," select "Import...".
4. Select the Snagit theme from your computer's files. This will install the shape preset.
5. Optionally, star the orange rectangle to add it to your favorites.

### Adding a highlight to a screenshot

1. Open a screenshot you'd like to highlight.
2. If the image is larger than 1000 pixels, resize it to 1000 pixels so that the stroke will be clearly visible.
3. With the GitHub Docs theme open in the Shapes sidebar, select the orange rectangle.
4. Drag and drop across the image to create a rectangle. Adjust height and width by dragging edges.
5. Adjust the space between the UI element and the stroke so it's about the width of the stroke itself.
6. Export image to PNG.
7. Keep the editable Snagit file with the extension `.snagx` on your computer in case you need to change the file later.

## Replacing screenshots

When replacing an existing image (such as for an updated button in the UI), best practice is to retain the image's filename.

If you must change an image filename, search the docs repository for other references to that image and update all references to the original filename.

If the image is used in deprecated versions of GHES documentation, don't change the filename.
  
## Versioning images in Markdown content

Some images apply to all GitHub plans (Free, Pro and Team; GitHub Enterprise Server; GitHub AE; and GitHub Enterprise Cloud). In this case, there is no versioning required.

When an image does differ from plan to plan or changes in a newer release of GitHub Enterprise server or GitHub AE, the images need to be versioned with [Liquid](liquid-helpers.md) conditional statements. The Liquid conditional versioning may need to be added when the content is initially created, or may need to be added when the content is updated for a feature update or Enterprise release.

### Image locations

Images are located in the `/assets/images` directory. This directory has some folders that can be used to organize content by plan and release number.

- `/assets/images/enterprise/github-ae`: Images that are _only_ applicable to GitHub AE (and not applicable to any other plan).
- `/assets/images/enterprise/enterprise-server`: Images that are applicable to _all_ releases of GitHub Enterprise Server or are applicable to the current release and future releases.
- `/assets/images/enterprise/<release number>`: Ex: `/assets/images/enterprise/3.0/`. When an image is changed in a new GitHub Enterprise Server release, add the new image and move the old image to the directory corresponding to the last release that it should be displayed in.
- `/assets/images`: Images that apply to the Free, Pro, Team plan or images that are not specific to any Enterprise plan.

### Example: An image differs between free-pro-team and all Enterprise plans

When there are slight or even drastic differences between the free-pro-team image and the associated Enterprise image (Server or GitHub AE), you can use Liquid conditionals to version the two images.

```markdown
{% ifversion fpt %}
![An image of foo bar](/assets/images/foo/bar.png){% else %}
![An image of enterprise foo bar](/assets/images/enterprise/foo/bar.png){% endif %}
```

### Example: An image is updated in a new Enterprise Server release

Going further with the example ☝️, let's say that the enterprise version of the `foo/bar.png` image will change in the upcoming release 3.1 and the updated image will be used for all future versions of Enterprise. In this case, you would move the existing `/assets/images/enterprise/foo/bar.png` image to `/assets/images/enterprise/3.0`. You will then add the new 3.1 image back to the original location `/assets/images/enterprise/foo/bar.png`.

Your Liquid conditional would look like this:

```markdown
{% ifversion fpt %}
![An image of foo bar](/assets/images/foo/bar.png){% elsif ghes < 3.1 %}
![An image of enterprise 3.0 foo bar](/assets/images/enterprise/3.0/foo/bar.png){% else %}
![An image of enterprise foo bar](/assets/images/enterprise/foo/bar.png){% endif %}
```

When the 3.0 release is deprecated, the `/assets/images/enterprise/3.0` directory will be removed. 

The numbered release directory should contain images that apply to that release number only or to that release number and earlier. For example, images in `/assets/images/enterprise/2.22` should contain images that apply to 2.22 only or 2.22 and earlier.
