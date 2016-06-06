<?php

$aliases['dev'] = array(
	'uri'=> 'energipr2016.ccistaging.com',
	'root' => '/home/staging/subdomains/energipr2016/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),

	'ssh-options'=>'-p 37241'
);
