@extends('layouts.app')

@section('title', 'BLS - Cursos Online')
@section('description', 'Aumente sua expertise em negócios, tecnologia e desenvolvimento pessoal com os melhores cursos online do BLS.')

@section('content')
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
						<img src="{{$course->cover_image_url}}" class="img-fluid" alt="{{$course->title}}">
					</a>
					@if($plans->first())
						<div class="price">{{$plans->first()->formatted_price}}</div>
					@endif
				</figure>
				<div class="wrapper">
					<small>Curso Online</small>
					<h3>{{$course->title}}</h3>
					<p>{{$course->short_description}}</p>
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
					<li><a href="{{$course->url}}">Inscrever-se</a></li>
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
@endsection

@section('scripts')
<!-- Script específico para o carrossel -->
<script>
$(document).ready(function(){
    if($('#reccomended').length) {
        $('#reccomended').owlCarousel({
            items: 3,
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }
});
</script>
@endsection
