<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('avatar')->nullable(); // caminho/foto do perfil
            $table->string('bio')->nullable(); // biografia ou descrição do usuário
            $table->string('website')->nullable(); // site pessoal ou profissional
            $table->string('social_links')->nullable(); // links para redes sociais, pode ser JSON ou texto
            $table->string('preferences')->nullable(); // preferências do usuário, pode ser JSON ou texto
            $table->string('slug')->nullable()->unique();

            $table->unsignedBigInteger('ranking')->nullable(); // classificação do usuário, pode ser um número ou string
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
    }
};
