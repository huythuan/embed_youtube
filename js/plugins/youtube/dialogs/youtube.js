    /**
     * @license Modifica e usa come vuoi
     *
     * Creato da TurboLab.it - 01/01/2014 (buon anno!)
     */
    CKEDITOR.dialog.add('embedYoutubeDialog', function (editor) {
        return {
            title: editor.lang.tliyoutube2.title,
            minWidth: 400,
            minHeight: 75,
            contents: [
                {
                    id: 'tab-basic',
                    label: 'Basic Settings',
                    elements: [
                        {
                            type: 'text',
                            id: 'youtubeURL',
                            label: editor.lang.tliyoutube2.txtUrl,
                        }
                    ]
                }
            ],
            onOk: function () {
                var dialog = this;
                var url = dialog.getValueOf('tab-basic', 'youtubeURL').trim();
                var regExURL = /v=([^&$]+)/i;
                var id_video = url.match(regExURL);

                if (id_video == null || id_video == '' || id_video[0] == '' || id_video[1] == '')
                {
                    alert(editor.lang.youtube.invalidUrl);
                    return false;
                }

                var width = '560';
                var height = '315';
                var content = '';

                content += '<p><span class="youtube-container--responsive">';
                content += '<iframe class="youtube-field-player" width="' + width + '" height="'
                  + height + '" src="//www.youtube.com/embed/'
                  + id_video[1] + '?rel=0"';
                content += 'frameborder="0" allowfullscreen="1"></iframe></span></p>';
                editor.insertHtml(content);
            }
        };
    });

