<?php

namespace App\Traits;

trait AdminActions
{
    // use in Policy Model
	public function before($user, $ability)
    {
        if ($user->isAdmin()) {
            return true;
        }
    }
}