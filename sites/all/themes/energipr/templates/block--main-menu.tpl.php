<?php
/**
 * @file
 * theme's implementation to display a block with the main menu.
 */     
?>
<div id="main-navigation">
  <div class="block block-system" id="block-system-main-menu">
    <div class="block-inner clearfix">
      <div class="content clearfix">
        <?php print $content; ?>
     	<div id="mobile-social">
            <?php $block = module_invoke('menu', 'block_view', 'menu-social-menu');
              print render($block['content']);
            ?>
      	</div>
      </div>
    </div>
  </div>
</div>

<!-- or a div added here would be ok -->
