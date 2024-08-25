import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import experience from "./schemas/experience";
import pageInfo from "./schemas/pageInfo";
import project from "./schemas/project";
import skill from "./schemas/skill";
import social from "./schemas/social";

const schemaTypes = [experience, pageInfo, project, skill, social];

export default defineConfig({
  name: "default",
  title: "Chris Agnew Portfolio",
  projectId: "jtf6bfld",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
