<?php

namespace Drupal\embed_youtube\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "embed youtube ckeditor button" plugin.
 *
 * NOTE: The plugin ID ('id' key) corresponds to the CKEditor plugin name.
 * It is the first argument of the CKEDITOR.plugins.add() function in the
 * plugin.js file.
 *
 * @CKEditorPlugin(
 *   id = "tliyoutube2",
 *   label = @Translation("Embed youtube ckeditor button")
 * )
 */
class EmbedYoutubeCKEditorButton extends CKEditorPluginBase {

    /**
     * {@inheritdoc}
     *
     * NOTE: The keys of the returned array corresponds to the CKEditor button
     * names. They are the first argument of the editor.ui.addButton() or
     * editor.ui.addRichCombo() functions in the plugin.js file.
     */
    public function getButtons() {
        $path = drupal_get_path('module', 'embed_youtube');
        return [
          'Tliyoutube2' => [
            'label' => t('Embed youtube ckeditor button'),
            'image' => $path . '/js/plugins/youtube/icons/youtube.png',
          ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function getFile() {
        // Make sure that the path to the plugin.js matches the file structure of
        // the CKEditor plugin you are implementing.
        return drupal_get_path('module', 'embed_youtube') . '/js/plugins/youtube/plugin.js';
    }

    /**
     * {@inheritdoc}
     */
    public function isInternal() {
        return FALSE;
    }

    /**
     * {@inheritdoc}
     */
    public function getDependencies(Editor $editor) {
        return [];
    }

    /**
     * {@inheritdoc}
     */
    public function getLibraries(Editor $editor) {
        return [];
    }

    /**
     * {@inheritdoc}
     */
    public function getConfig(Editor $editor) {
        return [];
    }

}
