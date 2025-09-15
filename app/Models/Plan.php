<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Plan extends Model
{
    use SoftDeletes;
    
    protected $guarded = [];

    protected $casts = [
        'price' => 'decimal:2',
    ];

    public function getFormattedPriceAttribute()
    {
        return 'R$ ' . number_format($this->price, 2, ',', '.');
    }

    public function getDurationInMonthsAttribute()
    {
        return round($this->duration_in_days / 30);
    }
}
