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
        Schema::create('questions', function (Blueprint $table) {
            $table->id();

            $table->foreignId('topic_test_id')->constrained()->cascadeOnDelete();
            $table->text('question');
            $table->string('correct_answer');
            $table->text('explanation')->nullable();
            $table->integer('difficulty_level')->default(1); // 1: Easy, 2: Medium, 3: Hard
            $table->integer('marks')->default(1); // Default marks for the question
            $table->boolean('is_multiple_choice')->default(false); // Whether the question is multiple choice

            $table->string('slug')->nullable()->unique();
            $table->foreignId('created_by_user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('updated_by_user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('deleted_by_user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->boolean('is_active')->default(true);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
