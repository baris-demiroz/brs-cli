#!/usr/bin/env node

import { program } from "commander";
import { createProject } from "../src/create.js";

program
  .command("create <name>")
  .action((name) => {
    createProject(name);
  });

program.parse();