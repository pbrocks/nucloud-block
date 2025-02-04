<?php
/**
 * Plugin Name: nuCloud Map Embed Block
 * Plugin URI: https://github.com/nuCloud/nucloud-block/
 * GitHub Plugin URI: nuCloud/nucloud-block
 * Description: Allows a user to embed their nuCloud powered interactive map into a page with a block in Gutenberg.
 * Author: Michael Fienen
 * Author URI: https://nucloud.com/
 * Version: 0.4.2
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Check for updates from the GitHub repo (at least until we can deploy to WP.org).
 * Support's afragen/github-updater, and will default to a local library to check
 * GitHub for updates if it doesn't find it.
 */
require_once( 'src/github-update.php' );
if ( is_admin() && !function_exists( 'github_updater_set_options' ) ) {
	new GitHubPluginUpdater( __FILE__, 'nuCloud', "nucloud-block" );
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
