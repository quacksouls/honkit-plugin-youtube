# HonKit plugin: youtube

Link to a YouTube video in HonKit.

<!--===================================================================-->

## Installation

Install via npm:

```sh
npm install honkit-plugin-youtube --save-dev
```

Add the plugin to your `book.json`:

```js
{
    plugins: [ "youtube" ]
}
```

<!--===================================================================-->

## Usage

Link to a YouTube video as follows:

```
{% youtube id="video_id", title="video_title" %}{% endyoutube %}
```

* `id` -- The ID of the YouTube video.  For example, if the URL of the video is<br/>
  https://www.youtube.com/watch?v=p3G5IXn0K7A<br/>
  then the ID of the video is `p3G5IXn0K7A`.
* `title` -- The title of the video.

Here is an example:

```
{% youtube id="p3G5IXn0K7A", title="The Hamsterdance Song" %}{% endyoutube %}
```
