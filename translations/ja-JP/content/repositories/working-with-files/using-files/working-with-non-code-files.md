---
title: Working with non-code files
intro: '{% data variables.product.product_name %} supports rendering and diffing in a number of non-code file formats.'
redirect_from:
  - /articles/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-and-diffing-images
  - /articles/stl-file-viewer
  - /articles/3d-file-viewer
  - /github/managing-files-in-a-repository/3d-file-viewer
  - /github/managing-files-in-a-repository/working-with-non-code-files/3d-file-viewer
  - /articles/rendering-csv-and-tsv-data
  - /github/managing-files-in-a-repository/rendering-csv-and-tsv-data
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-csv-and-tsv-data
  - /articles/rendering-pdf-documents
  - /github/managing-files-in-a-repository/rendering-pdf-documents
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-pdf-documents
  - /articles/rendering-differences-in-prose-documents
  - /github/managing-files-in-a-repository/rendering-differences-in-prose-documents
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-differences-in-prose-documents
  - /articles/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files/mapping-geojson-files-on-github
  - /articles/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Working with non-code files
---

## Rendering and diffing images

{% data variables.product.product_name %} can display several common image formats, including PNG, JPG, GIF, PSD, and SVG. In addition to simply displaying them, there are several ways to compare differences between versions of those image formats.

{% note %}

**Note:** 
- {% data variables.product.prodname_dotcom %} does not support comparing the differences between PSD files. 
- If you are using the Firefox browser, SVGs on {% data variables.product.prodname_dotcom %} may not render.

{% endnote %}

### Viewing images

You can directly browse and view images in your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}:

![inline image](/assets/images/help/images/view.png)

SVGs don't currently support inline scripting or animation.

### Viewing differences

You can visually compare images in three different modes: [2-up](#2-up), [swipe](#swipe), and [onion skin](#onion-skin).

#### 2-up

**2-up** is the default mode; it gives you a quick glimpse of both images. In addition, if the image has changed size between versions, the actual dimension change is displayed. This should make it very apparent when things are resized, such as when assets are upgraded to higher resolutions.

![2-up](/assets/images/help/repository/images-2up-view.png)

#### Swipe

**Swipe** lets you view portions of your image side by side. Not sure if colors shifted between different versions? Drag the swipe slider over the area in question and compare the pixels for yourself.

![Swipe](/assets/images/help/repository/images-swipe-view.png)

#### Onion skin

**Onion Skin** really comes in handy when elements move around by small, hard to notice amounts. Did an icon shift two pixels to the left? Drag the opacity slider back a bit and notice if things move around.

![Onion skin](/assets/images/help/repository/images-onion-view.gif)

## 3D File Viewer

{% data variables.product.product_name %} can host and render 3D files with the *.stl* extension.

When looking directly at an STL file on {% data variables.product.product_name %} you can:

* Click and drag to spin the model.
* Right click and drag to translate the view.
* Scroll to zoom in and out.
* Click the different view modes to change the view.

### Diffs

When looking at a commit or set of changes which includes an STL file, you'll be able to see a before and after diff of the file.

By default, you'll get a view where everything unchanged is in wireframe. Additions are colored in green, and removed parts are colored in red.

![wireframe](/assets/images/help/repository/stl_wireframe.png)

You can also select the **Revision Slider** option, which lets you use a slider at the top of the file to transition between the current and previous revisions.

### Fixing slow performance

If you see this icon in the corner of the viewer, then the WebGL technology is not available on your browser:

![WebGL pop error](/assets/images/help/repository/render_webgl_error.png)

WebGL is necessary to take advantage of your computer's hardware to its fullest. We recommend you try browsers like [Chrome](https://www.google.com/intl/en/chrome/browser/) or [Firefox](https://www.mozilla.org/en-US/firefox/new/), which ship with WebGL enabled.

### Error: "Unable to display"

If your model is invalid, GitHub may not be able to display the file. In addition, files that are larger than 10 MB are too big for GitHub to display.

### Embedding your model elsewhere

To display your 3D file elsewhere on the internet, modify this template and place it on any HTML page that supports JavaScript:

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

For example, if your model's URL is [`github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl`](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl), your embed code would be:

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

By default, the embedded renderer is 420 pixels wide by 620 pixels high, but you can customize the output by passing height and width variables as parameters at the end of the URL, such as `?height=300&width=500`.

{% tip %}

**Note**: `ref` can be a branch or the hash to an individual commit (like `2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Rendering in Markdown

You can embed ASCII STL syntax directly in Markdown. For more information, see "[Creating diagrams](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models)."
{% endif %}

## Rendering CSV and TSV data

GitHub supports rendering tabular data in the form of *.csv* (comma-separated) and .*tsv* (tab-separated) files.

![Rendered CSV sample](/assets/images/help/repository/rendered_csv.png)

When viewed, any _.csv_ or _.tsv_ file committed to a repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} automatically renders as an interactive table, complete with headers and row numbering. By default, we'll always assume the first row is your header row.

You can link to a particular row by clicking the row number, or select multiple rows by holding down the shift key. Just copy the URL and send it to a friend.

### Searching data

If you want to find a certain value in your dataset, you can start typing in the search bar directly above the file. The rows will filter automatically:

![Searching for values](/assets/images/help/repository/searching_csvs.gif)

### Handling errors

Occasionally, you may discover that your CSV or TSV file isn't rendering. In those instances, an error box appears at the bottom of your raw text, suggesting what the error may be.

![CSV render error message](/assets/images/help/repository/csv_render_error.png)

Common errors include:

* Mismatched column counts. You must have the same number of separators in each row, even if the cell is blank
* Exceeding the file size. Our rendering only works for files up to 512KB. Anything bigger than that slows down the browser.

## Rendering PDF documents

GitHub supports rendering of PDF documents.

![Rendered PDF Document](/assets/images/help/repository/rendered-pdf.png)

Currently, links within PDFs are ignored.

## Rendering differences in prose documents

Commits and pull requests that include prose documents have the ability to represent those documents with *source* and *rendered* views.

The source view shows the raw text that has been typed, while the rendered
view shows how that text would look once it's rendered on {% data variables.product.product_name %}. For example,
this might be the difference between showing `**bold**` in Markdown, and **bold** in the rendered view.

Prose rendering is supported for rendered documents supported by [github/markup](https://github.com/github/markup):

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* Org
* Creole
* MediaWiki
* Pod

![Paper icon to view rendered prose document](/assets/images/help/repository/rendered_prose_diff.png)

You can click {% octicon "file" aria-label="The paper icon" %} to see the changes made to the document as part of a commit.

![Rendered Prose changes](/assets/images/help/repository/rendered_prose_changes.png)

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}

### Disabling Markdown rendering

{% data reusables.repositories.disabling-markdown-rendering %}

{% endif %}

### Visualizing attribute changes

We provide a tooltip
describing changes to attributes that, unlike words, would not otherwise be visible in the rendered document. For example, if a link URL changes from one website to
another, we'd show a tooltip like this:

![Rendered Prose attribute changes](/assets/images/help/repository/prose_diff_attributes.png)

### Commenting on changes

[Commit comments](/articles/commenting-on-differences-between-files) can only
be added to files within the *source* view, on a line-by-line basis.

### Linking to headers

As with [other rendered prose documents](/articles/about-readmes),
hovering over a header in your document creates a link icon. You can link readers
of your rendered prose diff to specific sections.

### Viewing complex diffs

Some pull requests involve a large number of changes with large, complex documents. When the changes take too long to analyze, {% data variables.product.product_name %} can't always produce a rendered view of the changes. If this happens, you'll see an error message when you click the rendered button.

![Message when view can't be rendered](/assets/images/help/repository/prose_diff_rendering.png)

You can still use the source view to analyze and comment on changes.

### Viewing HTML elements

We don't directly support rendered views of commits to HTML documents. Some formats, such as Markdown, let you embed arbitrary HTML in a document. When these documents are shown on {% data variables.product.product_name %}, some of that embedded HTML can be shown in a preview, while some (like an embedded YouTube video) cannot.

In general, rendered views of changes to a document containing embedded HTML will show changes to the elements that are supported in {% data variables.product.product_name %}'s view of the document. Changes to documents containing embedded HTML should always be reviewed in both the rendered and source views for completeness.

## Mapping GeoJSON/TopoJSON files on {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} supports rendering GeoJSON and TopoJSON map files within {% data variables.product.product_name %} repositories. Simply commit the file as you would normally using a `.geojson` or `.topojson` extension. Files with a `.json` extension are also supported, but only if `type` is set to `FeatureCollection`, `GeometryCollection`, or `topology`. Then, navigate to the path of the GeoJSON/TopoJSON file on GitHub.com.

When you click the paper icon on the right, you'll also see the changes made to that file as part of a commit.

![Source Render toggle screenshot](/assets/images/help/repository/source-render-toggle-geojson.png)

### Geometry types

Maps on {% data variables.product.product_name %} use [Leaflet.js](http://leafletjs.com) and support all the geometry types outlined in [the geoJSON spec](http://www.geojson.org/geojson-spec.html) (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon, and GeometryCollection). TopoJSON files should be type "Topology" and adhere to the [TopoJSON spec](https://github.com/mbostock/topojson/wiki/Specification).

{% ifversion geoJSON-with-MapBox %}
### Styling features

You can customize the way features are displayed, such as specifying a particular color or adding a descriptive icon, by passing additional metadata within the GeoJSON object's properties. The options are:

* `marker-size` - `small`, `medium`, or `large`
* `marker-color` - valid RGB hex color
* `marker-symbol` - an icon ID from [the Maki project](http://mapbox.com/maki/) or a single alphanumeric character (a-z or 0-9).
* `stroke` - color of a polygon edge or line (RGB)
* `stroke-opacity` - opacity of a polygon edge or line (0.0 - 1.0)
* `stroke-width` - width of a polygon edge or line
* `fill` - the color of the interior of a polygon (GRB)
* `fill-opacity` - the opacity of the interior of a polygon (0.0-1.0)

See [version 1.1.0 of the open simplestyle spec](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0) for more information.
{% endif %}

### Embedding your map elsewhere

Want to make your GeoJSON map available someplace other than {% data variables.product.product_name %}? Simply modify this template, and place it in any HTML page that supports JavaScript (e.g., [{% data variables.product.prodname_pages %}](http://pages.github.com)):

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

For example, if your map's URL is [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson), your embed code would be:

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

By default, the embedded map 420px x 620px, but you can customize the output by passing height and width variables as parameters at the end, such as `?height=300&width=500`.

{% tip %}

**Note**: `ref` can be a branch or the hash to an individual commit (like `2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Mapping in Markdown

You can embed GeoJSON and TopoJSON directly in Markdown. For more information, see "[Creating diagrams](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-geojson-and-topojson-maps)."
{% endif %}

### Clustering

If your map contains a large number of markers (roughly over 750), GitHub will automatically cluster nearby markers at higher zoom levels. Simply click the cluster or zoom in to see individual markers.

### Something's up with the underlying map

The underlying map data (street names, roads, etc.) are driven by [OpenStreetMap](http://www.openstreetmap.org/), a collaborative project to create a free editable map of the world. If you notice something's not quite right, since it's open source, simply [sign up](https://www.openstreetmap.org/user/new) and submit a fix.

### Troubleshooting

If you're having trouble rendering GeoJSON files, ensure you have a valid GeoJSON file by running it through a [GeoJSON linter](http://geojsonlint.com/). If your points aren't appearing where you'd expect (<em>e.g.</em>, in the middle of the ocean), it's likely that the data is in a projection which is currently unsupported. Currently, {% data variables.product.product_name %} only supports the `urn:ogc:def:crs:OGC:1.3:CRS84` projection.

Additionally, if your `.geojson` file is especially large (over 10 MB), it is not possible to render within the browser. If that's the case, you'll generally see a message that looks something like this:

![Large file](/assets/images/help/repository/view_raw.png)

It may still be possible to render the data by converting the `.geojson` file to [TopoJSON](https://github.com/mbostock/topojson), a compression format that, in some cases, can reduce filesize by up to 80%. Of course, you can always break the file into smaller chunks (such as by state or by year), and store the data as multiple files within the repository.

### Further reading

{% ifversion geoJSON-with-MapBox %}
* [Leaflet.js documentation](https://leafletjs.com/)
* [MapBox marker-styling documentation](http://www.mapbox.com/developers/simplestyle/)
{%- else %}
* [Azure Maps documentation](https://docs.microsoft.com/en-us/azure/azure-maps/)
{%- endif %}
* [TopoJSON Wiki](https://github.com/mbostock/topojson/wiki)

## Working with Jupyter Notebook files on {% data variables.product.prodname_dotcom %}

When you add Jupyter Notebook or IPython Notebook files with a *.ipynb* extension on {% data variables.product.product_location %}, they will render as static HTML files in your repository.

The interactive features of the notebook, such as custom JavaScript plots, will not work in your repository on {% data variables.product.product_location %}. For an example, see [*Linking and Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

To view your Jupyter notebook with JavaScript content rendered or to share your notebook files with others you can use [nbviewer](https://nbviewer.jupyter.org/). For an example, see [*Linking and Interactions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb) rendered on nbviewer.

To view a fully interactive version of your Jupyter Notebook, you can set up a notebook server locally. For more information, see [Jupyter's official documentation](http://jupyter.readthedocs.io/en/latest/index.html).

### Troubleshooting

If you're having trouble rendering Jupyter Notebook files in static HTML, you can convert the file locally on the command line by using the [`nbconvert` command](https://github.com/jupyter/nbconvert):

```shell
$ jupyter nbconvert --to html <em>NOTEBOOK-NAME.ipynb</em>
```

### Further reading

- [Jupyter Notebook's GitHub repository](https://github.com/jupyter/jupyter_notebook)
- [Gallery of Jupyter Notebooks](https://github.com/jupyter/jupyter/wiki)

{% ifversion mermaid %}
## Displaying Mermaid files on {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} supports rendering Mermaid files within repositories. Commit the file as you would normally using a `.mermaid` or `.mmd` extension. Then, navigate to the path of the Mermaid file on {% data variables.product.prodname_dotcom %}.

For example, if you add a `.mmd` file with the following content to your repository:

```
graph TD
    A[Friend's Birthday] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D["Cool <br> Laptop"]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

When you view the file in the repository, it is rendered as a flow chart.
![Rendered mermaid file diagram](/assets/images/help/repository/mermaid-file-diagram.png)

### Troubleshooting

If your chart does not render at all, verify that it contains valid Mermaid Markdown syntax by checking your chart with the [Mermaid live editor](https://mermaid.live/edit).

If the chart displays, but does not appear as you'd expect, you can create a new [{% data variables.product.prodname_github_community %} discussion](https://github.com/orgs/community/discussions/categories/general), and add the `Mermaid` label. 

#### Known issues

* Sequence diagram charts frequently render with additional padding below the chart, with more padding added as the chart size increases. This is a known issue with the Mermaid library.
* Actor nodes with popover menus do not work as expected within sequence diagram charts. This is due to a discrepancy in how JavaScript events are added to a chart when the Mermaid library's API is used to render a chart.
* Not all charts are a11y compliant. This may affect users who rely on a screen reader.

### Mermaid in Markdown

You can embed Mermaid syntax directly in Markdown. For more information, see "[Creating diagrams](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-mermaid-diagrams)."

### Further reading

* [Mermaid.js documentation](https://mermaid-js.github.io/mermaid/#/)
* [Mermaid.js live editor](https://mermaid.live/edit)
{% endif %}

