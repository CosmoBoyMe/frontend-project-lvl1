#!/usr/bin/env node

import { runGame } from '../src/index.js';
import getGameSetting from '../src/games/brain-calc.js';

runGame(getGameSetting());
