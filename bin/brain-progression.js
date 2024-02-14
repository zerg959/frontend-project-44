#!/usr/bin/env node

import { progressionTask, progressionGame } from '../src/games/progression-data.js';
import { gameGenerator } from './index.js';

gameGenerator(progressionGame, progressionTask);
