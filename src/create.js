import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createProject(name) {
  const target = path.join(process.cwd(), name);

  // 🔥 BURASI FIX
  const template = path.join(__dirname, "../templates/react/core");

  fs.ensureDirSync(target);
  fs.copySync(template, target);

  console.log("Project created:", name);
}