
<?php 
function energipr_views_pre_render(&$view) {
  if($view->name == 'front_blog') {
    global $language;
    $view->attachment_after = l(t("View more news"),"news",array('language' => $language));
  }
}

function energipr_preprocess_block(&$variables, $hook) {
  // allow to use block templates depend on delta
  // example: delta = main-menu ; template file: block--main-menu.tpl.php
 if ($variables['block']->delta == 'main-menu') {
    $variables['theme_hook_suggestions'][] = 'block__' . str_replace('-', '_', $variables['block']->delta);
 } 
}