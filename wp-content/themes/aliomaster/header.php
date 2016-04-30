<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" /> 
	<meta name="generator" content="WordPress <?php bloginfo('version'); ?>" />
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<!-- begin main-container -->
<section id="main-container">
		<!-- begin Header -->
		<header class="header">
			<div class="top">
			<div class="container">
			<div class="row">
				<div class="col-md-6 col-sm-6 col-xs-12">
					<span class="skype"><i></i><a href="skype:almazka987?chat">almazka987</a></span>
					<span class="github"><i></i><a href="https://github.com/aliomaster">aliomaster</a></span>
				</div>
				<div class="col-md-6 col-sm-6 col-xs-12 right">
					<span class="mail"><i></i><a href="mailto:aliowebdeveloper@gmail.com">aliowebdeveloper@gmail.com</a></span>
				</div>
			</div>
			</div>
			</div>
				<!-- begin Nav -->
				<nav class="navbar">
					<div class="container">
						<div class="row">
							<div class="col-md-3">
								<a class="alio-logo" href="/"><img src="<?php echo get_template_directory_uri() . '/img/logo.png' ?>" alt="Logo" /></a>
							</div>
							<div class="col-md-9">
								<a href="#" class="hmbrgr"></a>
								<?php 
									wp_nav_menu(
										array(
											'menu'              => 'primary',
											'theme_location'    => 'primary',
											'depth'             => 2,
											'container'         => 'div',
											'container_class'   => 'collapse navbar-collapse',
											'container_id'      => 'primary-navbar-collapse',
											'menu_class'        => 'alio-navbar',
											'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
										)
									);
								 ?>
							</div>
						</div>
						<div class="bg-navbar"><div></div></div>
					</div>
				</nav>
				<!-- end Nav -->
				<?php if ( is_front_page() ): ?>
					<div class="bottom">
						<div class="container">
							<div class="description">
							<span class="astronavt"></span>
									<small>Нужен сайт?</small>
									<span class="address">Вы по адресу</span>
									<a href="#" class="alio-btn">
									<i class="fa fa-lightbulb-o" aria-hidden="true"></i>
									<span class="in-button"> Заказать сайт</span></a>
							</div>
						</div>
					</div>
				<?php endif; ?>
			</div>
		</header>
		<!-- end Header -->