// Central exported list of all modules for static generation
import { curriculum } from "./curriculum";
import { governingParticles } from "./governing-particles";
import { verbInflection } from "./verb-inflection";
import { followers } from "./tawabi";

export const allModules = [
  ...curriculum,
  ...governingParticles,
  ...verbInflection,
  ...followers,
];

export function getModuleById(id: string) {
  return allModules.find((m) => m.id === id);
}