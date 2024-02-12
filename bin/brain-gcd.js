#!/usr/bin/env node

import { gcdTask, gcdGame } from "../src/gcd-data.js"
import { gameGenerator } from "./index.js";

gameGenerator(gcdGame, gcdTask);