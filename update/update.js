import request from "requestv2";
import Settings from "../utils/config";

export const checkVersion = () => {
    request("https://api.github.com/repos/Builderboy271/BHTSL/releases/latest").then(response => {
        const currentVersion = JSON.parse(FileLib.read("BHTSL", "./metadata.json")).version;
        const latestVersion = JSON.parse(response).tag_name.replace("v", "");

        const currentSplit = currentVersion.split(".");
        const latestSplit = latestVersion.split(".");
        for (var i = 0; i < 3; i++) {
            if (Number(currentSplit[i]) < Number(latestSplit[i])) {
                ChatLib.chat("&3[BHTSL] &aNew BHTSL version available! &7v&f" + currentVersion + "&a -> &7v&f" + latestVersion);
                ChatLib.chat(new Message(
                    "&3[BHTSL] ",
                    new TextComponent("&6[&eView changelog&6]").setClick("run_command", "/bhtsl latestchangelog"),
                    " ",
                    new TextComponent("&5[&dGithub&5]").setClick("open_url", "https://github.com/Builderboy271/BHTSL/releases/latest"),
                    " ",
                    new TextComponent("&2[&aDirect download&2]").setClick("open_url", "https://github.com/Builderboy271/BHTSL/releases/latest/download/BHTSL.zip")
                ));
            }
        }
    }).catch(error => {
        ChatLib.chat("&3[BHTSL] &cError while starting version check");
        console.log(error);
    });
};

/* export const checkVersion = () => {
    try {
        axios({
            url: "https://raw.githubusercontent.com/Builderboy271/BHTSL/main/metadata.json",
            method: "GET"
        }).then(response => {
            const latestVersion = response.data.version;
            const currentVersion = JSON.parse(FileLib.read("BHTSL", "./metadata.json")).version;
            
            if (Settings.loadMessage) ChatLib.chat("&3[BHTSL] &fLoaded successfully!");

            let v1 = currentVersion.split(".");
            let v2 = latestVersion.split(".");
            let isUpToDate = true;
            let minLength = Math.min(v1.length, v2.length);

            for (let i = 0; i < minLength; i++) {
                if (Number(v1[i]) > Number(v2[i])) {
                    isUpToDate = true;
                    break;
                }
                if (Number(v1[i]) < Number(v2[i])) {
                    isUpToDate = false;
                    break;
                }
                if (i === minLength - 1) {
                    isUpToDate = v1.length >= v2.length;
                }
            }

            if (isUpToDate) return;

            ChatLib.chat("&3[BHTSL] &aNew BHTSL version available! &7v&f" + currentVersion + "&7 -> v&f" + latestVersion);
            ChatLib.chat(new Message(
                "&3[BHTSL] ",
                new TextComponent("&6[&eView changelog&6]").setClick("run_command", "/bhtsl latestchangelog"),
                " ",
                new TextComponent("&5[&dGithub&5]").setClick("open_url", "https://github.com/Builderboy271/BHTSL/releases/latest"),
                " ",
                new TextComponent("&2[&aDirect download&2]").setClick("open_url", "https://github.com/Builderboy271/BHTSL/releases/latest/download/BHTSL.zip")
            ));
        }).catch(err => {
            ChatLib.chat("&3[BHTSL] &cError while checking version");
        });
    } catch (error) {
        ChatLib.chat("&3[BHTSL] &cError while starting version check");
    }
}; */

register("worldLoad", () => {
    checkVersion();
});