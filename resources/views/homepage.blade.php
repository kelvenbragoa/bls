<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="BLS - Sistema de Cursos Online">
    <meta name="author" content="BLS">
    <title>BLS - Cursos Online</title>

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
				<input value="" name="q" type="search" placeholder="Buscar cursos..." />
				<button type="submit"><i class="icon_search"></i>
				</button>
			</form>
		</div><!-- End Search Menu -->
	</header>
	<!-- /header -->
	
	<main>
		<section class="hero_single version_2">
			<div class="wrapper">
				<div class="container">
					<h3>O que você gostaria de aprender?</h3>
					<p>Aumente sua expertise em negócios, tecnologia e desenvolvimento pessoal</p>
					<form action="/cursos" method="GET">
						<div id="custom-search-input">
							<div class="input-group">
								<input type="text" name="q" class="search-query" placeholder="Ex. Arquitetura, Especialização...">
								<input type="submit" class="btn_search" value="Buscar">
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
		<!-- /hero_single -->

		<div class="features clearfix">
			<div class="container">
				<ul>
					<li><i class="pe-7s-study"></i>
						<h4>+{{$coursesCount}} cursos</h4><span>Explore uma variedade de tópicos</span>
					</li>
					<li><i class="pe-7s-cup"></i>
						<h4>Professores especialistas</h4><span>Encontre o instrutor certo para você</span>
					</li>
					<li><i class="pe-7s-target"></i>
						<h4>Foco no objetivo</h4><span>Aumente sua expertise pessoal</span>
					</li>
				</ul>
			</div>
		</div>
		<!-- /features -->

		@if($popularCourses->count() > 0)
		<div class="container-fluid margin_120_0">
			<div class="main_title_2">
				<span><em></em></span>
				<h2>Cursos Populares BLS</h2>
				<p>Descubra os cursos mais procurados pelos nossos alunos.</p>
			</div>
			<div id="reccomended" class="owl-carousel owl-theme">
				@foreach($popularCourses as $course)
				<div class="item">
					<div class="box_grid">
						<figure>
							<a href="#0" class="wish_bt"></a>
							<a href="/curso/{{$course->slug ?? $course->id}}">
								<div class="preview"><span>Visualizar curso</span></div>
								@if($course->cover_image)
									<img src="{{asset('storage/' . $course->cover_image)}}" class="img-fluid" alt="{{$course->title}}">
								@else
									<img src="{{asset('template/img/course_placeholder.jpg')}}" class="img-fluid" alt="{{$course->title}}">
								@endif
							</a>
							@if($plans->first())
								<div class="price">R$ {{number_format($plans->first()->price, 2, ',', '.')}}</div>
							@endif
						</figure>
						<div class="wrapper">
							<small>Curso Online</small>
							<h3>{{$course->title}}</h3>
							<p>{{Str::limit($course->description, 100)}}</p>
							<div class="rating">
								<i class="icon_star voted"></i>
								<i class="icon_star voted"></i>
								<i class="icon_star voted"></i>
								<i class="icon_star voted"></i>
								<i class="icon_star voted"></i> 
								<small>({{rand(50, 200)}})</small>
							</div>
						</div>
						<ul>
							@if($course->duration)
								<li><i class="icon_clock_alt"></i> {{$course->duration}}</li>
							@endif
							<li><i class="icon_like"></i> {{$course->topics->count()}} tópicos</li>
							<li><a href="/curso/{{$course->slug ?? $course->id}}">Inscrever-se</a></li>
						</ul>
					</div>
				</div>
				<!-- /item -->
				@endforeach
			</div>
			<!-- /carousel -->
			<div class="container">
				<p class="btn_home_align"><a href="/cursos" class="btn_1 rounded">Ver todos os cursos</a></p>
			</div>
			<!-- /container -->
			<hr>
		</div>
		<!-- /container -->
		@endif

		<div class="container margin_30_95">
			<div class="main_title_2">
				<span><em></em></span>
				<h2>Categorias de Cursos BLS</h2>
				<p>Explore nossas principais categorias de conhecimento.</p>
			</div>
			<div class="row">
				<div class="col-lg-4 col-md-6 wow" data-wow-offset="150">
					<a href="/cursos?categoria=tecnologia" class="grid_item">
						<figure class="block-reveal">
							<div class="block-horizzontal"></div>
							<img src="{{asset('template/img/course_1.jpg')}}" class="img-fluid" alt="">
							<div class="info">
								<small><i class="ti-layers"></i>{{$coursesCount}} Programas</small>
								<h3>Tecnologia</h3>
							</div>
						</figure>
					</a>
				</div>
				<!-- /grid_item -->
				<div class="col-lg-4 col-md-6 wow" data-wow-offset="150">
					<a href="/cursos?categoria=negocios" class="grid_item">
						<figure class="block-reveal">
							<div class="block-horizzontal"></div>
							<img src="{{asset('template/img/course_2.jpg')}}" class="img-fluid" alt="">
							<div class="info">
								<small><i class="ti-layers"></i>{{$coursesCount}} Programas</small>
								<h3>Negócios</h3>
							</div>
						</figure>
					</a>
				</div>
				<!-- /grid_item -->
				<div class="col-lg-4 col-md-6 wow" data-wow-offset="150">
					<a href="/cursos?categoria=design" class="grid_item">
						<figure class="block-reveal">
							<div class="block-horizzontal"></div>
							<img src="{{asset('template/img/course_3.jpg')}}" class="img-fluid" alt="">
							<div class="info">
								<small><i class="ti-layers"></i>{{$coursesCount}} Programas</small>
								<h3>Design</h3>
							</div>
						</figure>
					</a>
				</div>
				<!-- /grid_item -->
				<div class="col-lg-4 col-md-6 wow" data-wow-offset="150">
					<a href="/cursos?categoria=marketing" class="grid_item">
						<figure class="block-reveal">
							<div class="block-horizzontal"></div>
							<img src="{{asset('template/img/course_4.jpg')}}" class="img-fluid" alt="">
							<div class="info">
								<small><i class="ti-layers"></i>{{$coursesCount}} Programas</small>
								<h3>Marketing</h3>
							</div>
						</figure>
					</a>
				</div>
				<!-- /grid_item -->
				<div class="col-lg-4 col-md-6 wow" data-wow-offset="150">
					<a href="/cursos?categoria=desenvolvimento" class="grid_item">
						<figure class="block-reveal">
							<div class="block-horizzontal"></div>
							<img src="{{asset('template/img/course_5.jpg')}}" class="img-fluid" alt="">
							<div class="info">
								<small><i class="ti-layers"></i>{{$coursesCount}} Programas</small>
								<h3>Desenvolvimento Pessoal</h3>
							</div>
						</figure>
					</a>
				</div>
				<!-- /grid_item -->
				<div class="col-lg-4 col-md-6 wow" data-wow-offset="150">
					<a href="/cursos?categoria=saude" class="grid_item">
						<figure class="block-reveal">
							<div class="block-horizzontal"></div>
							<img src="{{asset('template/img/course_6.jpg')}}" class="img-fluid" alt="">
							<div class="info">
								<small><i class="ti-layers"></i>{{$coursesCount}} Programas</small>
								<h3>Saúde e Bem-estar</h3>
							</div>
						</figure>
					</a>
				</div>
				<!-- /grid_item -->
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->

		@if($plans->count() > 0)
		<div class="bg_color_1">
			<div class="container margin_120_95">
				<div class="main_title_2">
					<span><em></em></span>
					<h2>Planos de Assinatura</h2>
					<p>Escolha o plano que melhor se adapta às suas necessidades.</p>
				</div>
				<div class="row justify-content-center">
					@foreach($plans as $plan)
					<div class="col-lg-4 col-md-6 mb-4">
						<div class="plan-card">
							<h4>{{$plan->name}}</h4>
							<div class="price" style="font-size: 2.5rem; color: #007bff; margin: 20px 0;">
								{{$plan->formatted_price}}
							</div>
							<p>{{$plan->duration_in_days}} dias de acesso</p>
							<ul style="list-style: none; padding: 0; margin: 20px 0;">
								<li style="margin: 10px 0;"><i class="icon_check" style="color: #28a745; margin-right: 10px;"></i>Acesso a todos os cursos</li>
								<li style="margin: 10px 0;"><i class="icon_check" style="color: #28a745; margin-right: 10px;"></i>Certificados incluídos</li>
								<li style="margin: 10px 0;"><i class="icon_check" style="color: #28a745; margin-right: 10px;"></i>Suporte completo</li>
								<li style="margin: 10px 0;"><i class="icon_check" style="color: #28a745; margin-right: 10px;"></i>Acesso via mobile</li>
							</ul>
							<a href="/inscricao?plano={{$plan->id}}" class="btn_1 rounded">Escolher Plano</a>
						</div>
					</div>
					@endforeach
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /bg_color_1 -->
		@endif

		<div class="call_section">
			<div class="container clearfix">
				<div class="col-lg-5 col-md-6 float-right wow" data-wow-offset="250">
					<div class="block-reveal">
						<div class="block-vertical"></div>
						<div class="box_1">
							<h3>Junte-se à nossa comunidade de estudantes</h3>
							<p>Faça parte de uma comunidade ativa de aprendizado, onde você pode interagir com outros alunos, compartilhar conhecimentos e crescer juntos.</p>
							<a href="/sobre" class="btn_1 rounded">Saiba mais</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--/call_section-->
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

</body>
</html>
