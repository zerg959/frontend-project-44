#!/usr/bin/env node

import { evenTask, evenGame } from "../src/even-data.js"
import { gameGenerator } from "./index.js";

gameGenerator(evenGame, evenTask);