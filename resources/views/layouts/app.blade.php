<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="@yield('description', 'BLS - Sistema de Cursos Online')">
    <meta name="author" content="BLS">
    <title>@yield('title', 'BLS - Cursos Online')</title>

    <!-- Favicons-->
    <link rel="shortcut icon" href="{{asset('template/img/favicon.ico')}}" type="image/x-icon">
    <link rel="apple-touch-icon" type="image/x-icon" href="{{asset('template/img/apple-touch-icon-57x57-precomposed.png')}}">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="{{asset('template/img/apple-touch-icon-72x72-precomposed.png')}}">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="{{asset('template/img/apple-touch-icon-114x114-precomposed.png')}}">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="{{asset('template/img/apple-touch-icon-144x144-precomposed.png')}}">

    <!-- GOOGLE WEB FONT -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- BASE CSS -->
    <link href="{{asset('template/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('template/css/style.css')}}" rel="stylesheet">
	<link href="{{asset('template/css/vendors.css')}}" rel="stylesheet">
	<link href="{{asset('template/css/icon_fonts/css/all_icons.min.css')}}" rel="stylesheet">

    <!-- YOUR CUSTOM CSS -->
    <link href="{{asset('template/css/custom.css')}}" rel="stylesheet">
    <link href="{{asset('template/css/bls-custom.css')}}" rel="stylesheet">

    @yield('styles')
</head>

<body>
		
	<div id="page">
		
	<header class="header menu_2">
		<div id="preloader"><div data-loader="circle-side"></div></div><!-- /Preload -->
		<div id="logo">
			<a href="/"><img src="{{asset('logo.png')}}" width="149" height="42" alt="BLS"></a>
		</div>
		<ul id="top_menu">
			<li><a href="/login" class="login">Login</a></li>
			<li><a href="#0" class="search-overlay-menu-btn">Buscar</a></li>
			<li class="hidden_tablet"><a href="/inscricao" class="btn_1 rounded">Inscrever-se</a></li>
		</ul>
		<!-- /top_menu -->
		<a href="#menu" class="btn_mobile">
			<div class="hamburger hamburger--spin" id="hamburger">
				<div class="hamburger-box">
					<div class="hamburger-inner"></div>
				</div>
			</div>
		</a>
		<nav id="menu" class="main-menu">
			<ul>
				<li><span><a href="/">Início</a></span></li>
				<li><span><a href="/cursos">Cursos</a></span></li>
				<li><span><a href="/sobre">Sobre</a></span></li>
				<li><span><a href="/contato">Contato</a></span></li>
			</ul>
		</nav>
		<!-- Search Menu -->
		<div class="search-overlay-menu">
			<span class="search-overlay-close"><span class="closebt"><i class="ti-close"></i></span></span>
			<form role="search" id="searchform" method="get" action="/cursos">
				<input value="{{request('q')}}" name="q" type="search" placeholder="Buscar cursos..." />
				<button type="submit"><i class="icon_search"></i>
				</button>
			</form>
		</div><!-- End Search Menu -->
	</header>
	<!-- /header -->
	
	<main>
		@yield('content')
	</main>
	<!-- /main -->

	<footer>
		<div class="container margin_120_95">
			<div class="row justify-content-between">
				<div class="col-lg-5 col-md-12">
					<p><img src="{{asset('logo.png')}}" width="149" height="42" alt="BLS"></p>
					<p>A BLS oferece os melhores cursos online para impulsionar sua carreira e desenvolvimento pessoal. Nossa plataforma conta com professores especialistas e conteúdo de alta qualidade.</p>
					<div class="follow_us">
						<ul>
							<li>Siga-nos</li>
							<li><a href="#0"><i class="ti-facebook"></i></a></li>
							<li><a href="#0"><i class="ti-twitter-alt"></i></a></li>
							<li><a href="#0"><i class="ti-google"></i></a></li>
							<li><a href="#0"><i class="ti-pinterest"></i></a></li>
							<li><a href="#0"><i class="ti-instagram"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 ml-lg-auto">
					<h5>Links Úteis</h5>
					<ul class="links">
						<li><a href="/inscricao">Inscrição</a></li>
						<li><a href="/sobre">Sobre</a></li>
						<li><a href="/login">Login</a></li>
						<li><a href="/registro">Registrar</a></li>
						<li><a href="/cursos">Cursos</a></li>
						<li><a href="/contato">Contatos</a></li>
					</ul>
				</div>
				<div class="col-lg-3 col-md-6">
					<h5>Entre em Contato</h5>
					<ul class="contacts">
						<li><a href="tel://+5585999999999"><i class="ti-mobile"></i> +55 85 9 9999-9999</a></li>
						<li><a href="mailto:contato@bls.com.br"><i class="ti-email"></i> contato@bls.com.br</a></li>
					</ul>
					<div id="newsletter">
					<h6>Newsletter</h6>
					<div id="message-newsletter"></div>
					<form method="post" action="/newsletter" name="newsletter_form" id="newsletter_form">
						@csrf
						<div class="form-group">
							<input type="email" name="email" id="email_newsletter" class="form-control" placeholder="Seu email">
							<input type="submit" value="Inscrever" id="submit-newsletter">
						</div>
					</form>
					</div>
				</div>
			</div>
			<!--/row-->
			<hr>
			<div class="row">
				<div class="col-md-8">
					<ul id="additional_links">
						<li><a href="/termos">Termos e condições</a></li>
						<li><a href="/privacidade">Privacidade</a></li>
					</ul>
				</div>
				<div class="col-md-4">
					<div id="copy">© {{date('Y')}} BLS</div>
				</div>
			</div>
		</div>
	</footer>
	<!--/footer-->
	</div>
	<!-- page -->
	
	<!-- COMMON SCRIPTS -->
    <script src="{{asset('template/js/jquery-3.6.0.min.js')}}"></script>
    <script src="{{asset('template/js/common_scripts.js')}}"></script>
    <script src="{{asset('template/js/main.js')}}"></script>
	<script src="{{asset('template/assets/validate.js')}}"></script>

	@yield('scripts')

</body>
</html>
