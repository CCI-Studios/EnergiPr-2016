
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
	<div class="author-top">
		by <?php print $name; ?>
	</div>

	<?php
		$nodequeue_nodes = nodequeue_load_nodes(1, FALSE, 0, 0);
		foreach ($nodequeue_nodes as $nodequeue_node) { 
			$subcategory_nodes[] = $nodequeue_node;
			if ($nodequeue_node->nid == $node->nid) {
				$index = count($subcategory_nodes)-1;
			}
		} 

	if (!function_exists('removeUrlSpace')) {
	function removeUrlSpace($string){
	    //Lower case everything
	    $string = strtolower($string);
	    //Convert whitespaces and underscore to dash
	    $string = preg_replace("/[\s_]/", "-", $string);
	    $string=str_replace('with-','',$string);
	    return $string;
		}
	}
	$max=count($subcategory_nodes);

	$currentTitle=removeUrlSpace($node->title);

 	if($max>=2){

	if ($index == 0)
	{	
		$str_next = $subcategory_nodes[$index+1]->title;
		$next_path = $subcategory_nodes[$index+1]->nid;
		$next_path = drupal_lookup_path('alias',"node/".$next_path);
	}
	else if($index==$max-1)
	{
		$str_prev = $subcategory_nodes[$max-2]->title;
		$prev_path = $subcategory_nodes[$index-1]->nid;
		$prev_path = drupal_lookup_path('alias',"node/".$prev_path);
	}
	else
	{	
	    $str_next = $subcategory_nodes[$index+1]->title;
		$next_path = $subcategory_nodes[$index+1]->nid;
		$next_path = drupal_lookup_path('alias',"node/".$next_path);
	    $str_prev=$subcategory_nodes[$index-1]->title;
		$prev_path = $subcategory_nodes[$index-1]->nid;
		$prev_path = drupal_lookup_path('alias',"node/".$prev_path);
	}
	?>
	
	<?php }?>
	<?php
		echo render($content); 
	?>
	<div id="blog-footer">
		<div id="article-by">
			<div class="picture"><?php print $user_picture; ?></div>
			<div class="author">
				<p>article by</p>
				<p><?php print $name; ?></p>
			</div>
		</div>

		<div id="social-block">
			<?php 	
				global $base_root;
				$current_url = $base_root . request_uri();
		 	?>
		 	<div><p>share:</p></div>
		 	<div class="fb-share"><a href="http://www.facebook.com/sharer.php?u=<?php echo $current_url; ?>" target="_blank"><img src="/sites/all/themes/energipr/images/fb-share.png" alt="Facebook"></a></div>
		 	<div class="twitter-share"><a href="http://twitter.com/share?url=<?php echo $current_url; ?>" target="_blank"><img src="/sites/all/themes/energipr/images/twitter-share.png" alt="Twitter"></a></div>
			<div class="google-share"><a href="https://plus.google.com/share?url=<?php echo $current_url; ?>" target="_blank"><img src="/sites/all/themes/energipr/images/g-plus.png" alt="Google"></a></div>
			<div class="linkedin-share"><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $current_url; ?>" target="_blank"><img src="/sites/all/themes/energipr/images/linkedin-share.png" alt="Linkedin"></a>
			</div>
		</div>

		<div id="blog-nav">
			<?php global $language; ?>
			<?php if($index>0 && $language->language == 'en') { ?>
			<a href="/<?php echo $prev_path ?>" class="prev"><span>previous post</span></a>
			<?php } else if($index>0 && $language->language == 'fr'){ ?>
			<a href="/fr/<?php echo $prev_path ?>" class="prev"><span>Previous post</span></a>	
			<?php } 

			if($language->language == 'en')
			{ ?>
				<a href="/blog" class="back">back to blog</a>
			<?php } else { ?>
				<a href="/fr/blogue" class="back">back to blog</a>
			<?php } ?>
			<?php if($index<$max-1 && $language->language == 'en' ) {?>
			<a href="/<?php echo $next_path ?>" class="next"><span>next post</span></a>
			<?php } else if($index<$max-1 && $language->language == 'fr') {?>
			<a href="/fr/<?php echo $next_path ?>" class="next"><span>next post</span></a>
			<?php } ?>
		</div>
	</div>
</div>

