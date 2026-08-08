import { is_desktop } from "./is_desktop";
import { writeTextFile, BaseDirectory, mkdir } from '@tauri-apps/plugin-fs';

export async function save(username: string) {
    let text = 'CumClicker_';
    text += username + "_";

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