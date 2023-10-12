module.exports = {
    blocks: {
        /**
         * This is run when HonKit parses the book.
         *
         * Link to a YouTube video.  Require the following parameters:
         *
         * @param id The ID of the YouTube video.  For example, if the URL of the video is
         *
         *     https://www.youtube.com/watch?v=p3G5IXn0K7A
         *
         *     then the ID of the video is p3G5IXn0K7A.
         * @param title The title of the video.
         */
        youtube: {
            process: (block) => {
                const { id, title } = block.kwargs;
                const header = `<a href="http://www.youtube.com/watch?v=${id}" target="_blank">${title}</a>`;
                const image = `<a href="http://www.youtube.com/watch?v=${id}" title="${title}" target="_blank"><img src="http://img.youtube.com/vi/${id}/0.jpg" alt="${title}"></a>`;
                return `${header}<br/>${image}`;
            }
        }
    }
};
