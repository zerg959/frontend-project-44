#!/usr/bin/env node

import { calcTask, calcGame } from "../src/calc-data.js";
import { gameGenerator } from "./index.js";

gameGenerator(calcGame, calcTask);