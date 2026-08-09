import type { Building } from "./boosts/building/class";
import type { Boost } from "./boosts/class";
import type { Worker } from "./boosts/worker/class";
import { is_desktop } from "./is_desktop";
import { writeTextFile, BaseDirectory, mkdir } from '@tauri-apps/plugin-fs';
import type { Skill } from "./skills/class";

export async function save(username: string, cum: number, dick: Boost, hand: Boost, workers: Worker[], buildings: Building[], skill_point: number, skills: Skill[]) {
    let text = 'CumClicker_';
    text += username + "_";
    text += cum + "_";
    text += dick.level + "_" + hand.level + "_";

    text += workers.length + "_";
    for (const worker of workers) {
        text += worker.name + "_" + worker.level + "_";
    }

    text += buildings.length + "_";
    for (const building of buildings) {
        text += building.name + "_" + building.level + "_";
    }

    text += skill_point + "_";
    text += skills.length + "_";
    for (const skill of skills) {
        text += skill.name + "_" + skill.unlock + "_";
    }

    const now = new Date();
    const date = now.toISOString().replace('T', '_').slice(0, 19).replace(/:/g, '-');
    let filename: string = 'CumClicker_' + username + "_" + date;

    if (is_desktop) {
        const folder = 'Cum Clicker/Saves';

        await mkdir(folder, {
            baseDir: BaseDirectory.LocalData,
            recursive: true
        });

        await writeTextFile(`${folder}/${filename}.txt`, text, {
            baseDir: BaseDirectory.LocalData
        });
    }
    else {
        var element = document.createElement("a");
        element.setAttribute(
            "href",
            "data:text/plain;charset=utf-8," + encodeURIComponent(text),
        );
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
};