    CKEDITOR.plugins.add('tliyoutube2', {
        icons: 'youtube',
        lang: ['en', 'pt', 'ja', 'hu', 'it', 'fr', 'tr', 'ru', 'de', 'ar', 'nl', 'pl', 'vi', 'zh', 'el', 'he', 'es', 'nb', 'nn', 'fi', 'et', 'sk', 'cs'],
        init: function (editor) {
            editor.addCommand('embedYoutubeDialog', new CKEDITOR.dialogCommand('embedYoutubeDialog'));
            editor.ui.addButton('Tliyoutube2', {
                label: editor.lang.tliyoutube2.button,
                toolbar: 'insert',
                command: 'embedYoutubeDialog',
                icon: this.path + 'icons/youtube.png'
            });
            CKEDITOR.dialog.add('embedYoutubeDialog', this.path + 'dialogs/youtube.js');
        }
    });
