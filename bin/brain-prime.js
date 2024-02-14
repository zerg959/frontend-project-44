#!/usr/bin/env node

import { primeTask, primeGame } from '../src/games/prime-data.js';
import { gameGenerator } from './index.js';

gameGenerator(primeGame, primeTask);
