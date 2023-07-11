import { assert, expect, test } from "vitest";
import Skillset from "../app/views/Skillset";

test("test Skillset methods", async () => {
  const skillset = new Skillset();
  const coucou = [
    {
      icon: "devicon-c-plain",
      title: "C",
      subtitle: "programming",
      category: ["programming", "system"],
    },
    {
      icon: "devicon-c-plain",
      title: "C",
      subtitle: "programming",
      category: ["programming", "system"],
    },
  ];

  const result = await skillset.getSkills(coucou);

  expect(result).toBe(`
        <div class="card-style skill-card">
          <div class="skill-icon">
            <span class=devicon-c-plain></span>
          </div>
          <div class="skill-prez">
            <p class="skill-title">C</p>
            <p class="skill-subtitle">programming</p>
          </div>
        </div>
      
        <div class="card-style skill-card">
          <div class="skill-icon">
            <span class=devicon-c-plain></span>
          </div>
          <div class="skill-prez">
            <p class="skill-title">C</p>
            <p class="skill-subtitle">programming</p>
          </div>
        </div>
      `);
});
