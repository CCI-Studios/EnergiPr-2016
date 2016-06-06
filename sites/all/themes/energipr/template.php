
<?php 
function energipr_views_pre_render(&$view) {
  if($view->name == 'front_blog') {
  	global $language;
  	if ($language->language=='fr'){
	 	$content = '<a href="/fr/blog">View more blog posts</a>';
	    $view->attachment_after = $content;
  	 }
  	 else
  	 {
  	 	$content = '<a href="/blog">View more blog posts</a>';
	    $view->attachment_after = $content;
  	 }
  }
}

function energipr_preprocess_block(&$variables, $hook) {
  // allow to use block templates depend on delta
  // example: delta = main-menu ; template file: block--main-menu.tpl.php
 if ($variables['block']->delta == 'main-menu') {
    $variables['theme_hook_suggestions'][] = 'block__' . str_replace('-', '_', $variables['block']->delta);
 } 
}