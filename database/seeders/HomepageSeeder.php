<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Plan;
use App\Models\Topic;
use Illuminate\Database\Seeder;

class HomepageSeeder extends Seeder
{
    public function run()
    {
        // Criar planos
        $plans = [
            [
                'name' => 'Plano Mensal',
                'price' => 39.90,
                'duration_in_days' => 30,
                'slug' => 'mensal',
                'is_active' => true,
            ],
            [
                'name' => 'Plano Trimestral',
                'price' => 99.90,
                'duration_in_days' => 90,
                'slug' => 'trimestral',
                'is_active' => true,
            ],
            [
                'name' => 'Plano Anual',
                'price' => 299.90,
                'duration_in_days' => 365,
                'slug' => 'anual',
                'is_active' => true,
            ],
        ];

        foreach ($plans as $planData) {
            Plan::updateOrCreate(['slug' => $planData['slug']], $planData);
        }

        // Criar cursos de exemplo
        $courses = [
            [
                'title' => 'Desenvolvimento Web Completo',
                'description' => 'Aprenda HTML, CSS, JavaScript e frameworks modernos para criar aplicações web incríveis. Este curso abrange desde conceitos básicos até técnicas avançadas de desenvolvimento.',
                'duration' => '40 horas',
                'slug' => 'desenvolvimento-web-completo',
                'is_active' => true,
            ],
            [
                'title' => 'Marketing Digital Estratégico',
                'description' => 'Domine as estratégias de marketing digital, incluindo SEO, Google Ads, redes sociais e análise de dados para impulsionar seu negócio online.',
                'duration' => '25 horas',
                'slug' => 'marketing-digital-estrategico',
                'is_active' => true,
            ],
            [
                'title' => 'Design Gráfico Profissional',
                'description' => 'Aprenda os fundamentos do design gráfico, uso de ferramentas como Photoshop e Illustrator, e como criar identidades visuais impactantes.',
                'duration' => '35 horas',
                'slug' => 'design-grafico-profissional',
                'is_active' => true,
            ],
            [
                'title' => 'Gestão de Projetos Ágil',
                'description' => 'Domine metodologias ágeis como Scrum e Kanban para gerenciar projetos de forma eficiente e entregue resultados excepcionais.',
                'duration' => '20 horas',
                'slug' => 'gestao-projetos-agil',
                'is_active' => true,
            ],
            [
                'title' => 'Análise de Dados com Python',
                'description' => 'Aprenda a analisar dados usando Python, pandas, matplotlib e outras bibliotecas para extrair insights valiosos dos seus dados.',
                'duration' => '30 horas',
                'slug' => 'analise-dados-python',
                'is_active' => true,
            ],
            [
                'title' => 'Fotografia Digital Avançada',
                'description' => 'Desenvolva suas habilidades fotográficas, desde configurações de câmera até edição profissional, criando imagens impactantes.',
                'duration' => '18 horas',
                'slug' => 'fotografia-digital-avancada',
                'is_active' => true,
            ],
        ];

        foreach ($courses as $courseData) {
            $course = Course::updateOrCreate(['slug' => $courseData['slug']], $courseData);

            // Criar tópicos para cada curso
            $this->createTopicsForCourse($course);
        }
    }

    private function createTopicsForCourse($course)
    {
        $topicsByType = [
            'Desenvolvimento Web Completo' => [
                'Introdução ao HTML e CSS',
                'JavaScript Fundamentals',
                'React.js Essentials',
                'Backend com Node.js',
                'Banco de Dados',
                'Deploy e Hospedagem',
            ],
            'Marketing Digital Estratégico' => [
                'Fundamentos do Marketing Digital',
                'SEO e Otimização',
                'Google Ads e PPC',
                'Marketing em Redes Sociais',
                'Email Marketing',
                'Análise e Métricas',
            ],
            'Design Gráfico Profissional' => [
                'Teoria das Cores e Tipografia',
                'Adobe Photoshop',
                'Adobe Illustrator',
                'Identidade Visual',
                'Design de Materiais Gráficos',
                'Portfolio Profissional',
            ],
            'Gestão de Projetos Ágil' => [
                'Introdução à Metodologias Ágeis',
                'Scrum Framework',
                'Kanban Method',
                'Ferramentas de Gestão',
                'Liderança Ágil',
            ],
            'Análise de Dados com Python' => [
                'Python para Análise',
                'Pandas e NumPy',
                'Visualização com Matplotlib',
                'Análise Estatística',
                'Machine Learning Básico',
                'Projetos Práticos',
            ],
            'Fotografia Digital Avançada' => [
                'Configurações de Câmera',
                'Composição Fotográfica',
                'Iluminação Natural e Artificial',
                'Edição no Lightroom',
                'Photoshop para Fotógrafos',
                'Portfolio e Mercado',
            ],
        ];

        $topics = $topicsByType[$course->title] ?? ['Tópico 1', 'Tópico 2', 'Tópico 3'];

        foreach ($topics as $index => $topicTitle) {
            Topic::updateOrCreate([
                'course_id' => $course->id,
                'title' => $topicTitle,
            ], [
                'content' => "Descrição detalhada do tópico: {$topicTitle}. Este módulo aborda conceitos importantes e práticas essenciais.",
                'duration' => rand(2, 8) . ' horas',
                'order' => $index + 1,
                'is_active' => true,
            ]);
        }
    }
}
