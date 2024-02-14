#!/usr/bin/env node

import { gcdTask, gcdGame } from '../src/games/gcd-data.js';
import gameGenerator from './index.js';

gameGenerator(gcdGame, gcdTask);
