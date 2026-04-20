/**
 * 
 * @typedef {object} HTSLActionData
 * @type {object}
 * @property {string} type The Housing ID for the action.
 * @property {string} full The corresponding HTSL code for the arguments.
 *                      This field also supports <argument_name> after the command name for arguments.
 * 
 * 
 */
/**
 * Contains metadata corresponding to HTSL actions and their corresponding Housing actions
 * @type {{actions: object.<string, HTSLActionData>}}
 * @const
 */
export default {
    actions: {
        copy: {
            type: "COPY",
            full: "copy"
        },
        paste: {
            type: "PASTE",
            full: "paste"
        },
        applyLayout: {
            type: "APPLY_LAYOUT",
            full: "applyLayout <layout> <comment>"
        },
        applyPotion: {
            type: "POTION_EFFECT",
            full: "applyPotion <effect> <duration> <level> <override_existing_effects> <show_potion_icon> <comment>"
        },
        balanceTeam: {
            type: "BALANCE_PLAYER_TEAM",
            full: "balanceTeam"
        },
        cancelEvent: {
            type: "CANCEL_EVENT",
            full: "cancelEvent"
        },
        globalstat: {
            type: "CHANGE_VARIABLE",
            full: "globalstat <variable> <operation> <value> <comment>",
            from: "globalstat"
        },
        globalvar: {
            type: "CHANGE_VARIABLE",
            full: "globalvar <variable> <operation> <value> <automatic_unset> <comment>",
            from: "globalvar"
        },
        changeHealth: {
            type: "SET_HEALTH",
            full: "changeHealth <mode> <health> <comment>"
        },
        hungerLevel: {
            type: "SET_HUNGER_LEVEL",
            full: "hungerLevel <mode> <level> <comment>"
        },
        maxHealth: {
            type: "SET_MAX_HEALTH",
            full: "maxHealth <mode> <max_health> <heal_on_change> <comment>"
        },
        changePlayerGroup: {
            type: "CHANGE_PLAYER_GROUP",
            full: "changePlayerGroup <group> <demotion_protection> <comment>"
        },
        changeGroup: {
            type: "CHANGE_PLAYER_GROUP",
            full: "changeGroup <group> <demotion_protection> <comment>"
        },
        stat: {
            type: "CHANGE_VARIABLE",
            full: "stat <variable> <operation> <value> <comment>",
            from: "stat"
        },
        var: {
            type: "CHANGE_VARIABLE",
            full: "var <variable> <operation> <value> <automatic_unset> <comment>",
            from: "var"
        },
        teamstat: {
            type: "CHANGE_VARIABLE",
            full: "teamstat <variable> <team> <operation> <value> <comment_team>",
            from: "teamstat"
        },
        teamvar: {
            type: "CHANGE_VARIABLE",
            full: "teamvar <variable> <team> <operation> <value> <automatic_unset> <comment_team>",
            from: "teamvar"
        },
        clearEffects: {
            type: "CLEAR_EFFECTS",
            full: "clearEffects"
        },
        closeMenu: {
            type: "CLOSE_MENU",
            full: "closeMenu"
        },
        actionBar: {
            type: "ACTION_BAR",
            full: "actionBar <message> <comment>"
        },
        displayMenu: {
            type: "DISPLAY_MENU",
            full: "displayMenu <menu> <comment>"
        },
        title: {
            type: "TITLE",
            full: "title <title> <subtitle> <fadein> <stay> <fadeout> <comment>"
        },
        enchant: {
            type: "ENCHANT_HELD_ITEM",
            full: "enchant <enchantment> <level> <comment>"
        },
        exit: {
            type: "EXIT",
            full: "exit"
        },
        failParkour: {
            type: "BAIL_PARKOUR",
            full: "failParkour <reason> <comment>"
        },
        fullHeal: {
            type: "FULL_HEAL",
            full: "fullHeal"
        },
        xpLevel: {
            type: "GIVE_EXP_LEVELS",
            full: "xpLevel <levels> <comment>"
        },
        giveItem: {
            type: "GIVE_ITEM",
            full: "giveItem <item> <allow_multiple> <inventory_slot> <replace_existing_item> <comment>"
        },
        houseSpawn: {
            type: "SPAWN",
            full: "houseSpawn"
        },
        kill: {
            type: "KILL",
            full: "kill"
        },
        parkCheck: {
            type: "PARKOUR_CHECKPOINT",
            full: "parkCheck"
        },
        pause: {
            type: "PAUSE",
            full: "pause <ticks_to_wait> <comment>"
        },
        sound: {
            type: "PLAY_SOUND",
            full: "sound <sound> <volume> <pitch> <location> <comment>"
        },
        removeItem: {
            type: "REMOVE_ITEM",
            full: "removeItem <item> <comment>"
        },
        resetInventory: {
            type: "RESET_INVENTORY",
            full: "resetInventory"
        },
        chat: {
            type: "SEND_MESSAGE",
            full: "chat <message> <comment> <comment>"
        },
        lobby: {
            type: "SEND_TO_LOBBY",
            full: "lobby <location> <comment>"
        },
        compassTarget: {
            type: "SET_COMPASS_TARGET",
            full: "compassTarget <location> <comment>"
        },
        gamemode: {
            type: "SET_GAMEMODE",
            full: "gamemode <gamemode> <comment>"
        },
        setTeam: {
            type: "SET_PLAYER_TEAM",
            full: "setTeam <team> <comment>"
        },
        tp: {
            type: "TELEPORT_PLAYER",
            full: "tp <location> <prevent_teleport_inside_blocks> <comment>"
        },
        function: {
            type: "TRIGGER_FUNCTION",
            full: "function <function> <trigger_for_all_players> <comment>"
        },
        consumeItem: {
            type: "USE_HELD_ITEM",
            full: "consumeItem"
        },
        dropItem: {
            type: "DROP_ITEM",
            full: "dropItem <item> <location> <drop_naturally> <prevent_item_merging> <prioritize_player> <fallback_to_inventory> <despawn_duration_ticks> <pickup_delay_ticks> <comment>"
        },
        changeVelocity: {
            type: "CHANGE_VELOCITY",
            full: "changeVelocity <x_direction> <y_direction> <z_direction> <comment>"
        },
        launchTarget: {
            type: "LAUNCH_TO_TARGET",
            full: "launchTarget <target_location> <launch_strength> <comment>"
        },
        if: {
            type: "CONDITIONAL",
            full: "if <match_any_condition> (<conditions>) {\n<if_actions>\n} else {\n<else_actions>\n} {<comment>}"
        },
        random: {
            type: "RANDOM_ACTION",
            full: "random {\n<actions>\n} {<comment>}"
        },
        playerWeather: {
            type: "SET_PLAYER_WEATHER",
            full: "playerWeather <weather> <comment>"
        },
        playerTime: {
            type: "SET_PLAYER_TIME",
            full: "playerTime <time> <comment>"
        },
        displayNametag: {
            type: "TOGGLE_NAMETAG_DISPLAY",
            full: "displayNametag <display_nametag> <comment>"
        }
    },
    conditions: {
        blockType: {
            type: "BLOCK_TYPE",
            full: "blockType <item> <match_type_only>"
        },
        damageAmount: {
            type: "DAMAGE_AMOUNT",
            full: "damageAmount <comparator> <compare_value>"
        },
        damageCause: {
            type: "DAMAGE_CAUSE",
            full: "damageCause <cause>"
        },
        doingParkour: {
            type: "IN_PARKOUR",
            full: "doingParkour"
        },
        fishingEnv: {
            type: "FISHING_ENVIRONMENT",
            full: "fishingEnv <environment>"
        },
        globalstat: {
            type: "VARIABLE_REQUIREMENT",
            full: "globalstat <variable> <comparator> <compare_value>",
            from: "globalstat"
        },
        globalvar: {
            type: "VARIABLE_REQUIREMENT",
            full: "globalvar <variable> <comparator> <compare_value> <fallback_value>",
            from: "globalvar"
        },
        hasItem: {
            type: "HAS_ITEM",
            full: "hasItem <item> <what_to_check> <where_to_check> <required_amount>"
        },
        hasPotion: {
            type: "POTION_EFFECT",
            full: "hasPotion <effect>"
        },
        isItem: {
            type: "IS_ITEM",
            full: "isItem <item> <what_to_check> <where_to_check> <required_amount>"
        },
        isSneaking: {
            type: "SNEAKING",
            full: "isSneaking"
        },
        maxHealth: {
            type: "MAX_HEALTH",
            full: "maxHealth <comparator> <compare_value>"
        },
        placeholder: {
            type: "PLACEHOLDER_NUMBER",
            full: "placeholder <placeholder> <comparator> <compare_value>"
        },
        isFlying: {
            type: "FLYING",
            full: "isFlying"
        },
        health: {
            type: "HEALTH",
            full: "health <comparator> <compare_value>"
        },
        hunger: {
            type: "HUNGER_LEVEL",
            full: "hunger <comparator> <compare_value>"
        },
        stat: {
            type: "VARIABLE_REQUIREMENT",
            full: "stat <variable> <comparator> <compare_value>",
            from: "stat"
        },
        var: {
            type: "VARIABLE_REQUIREMENT",
            full: "var <variable> <comparator> <compare_value> <fallback_value>",
            from: "var"
        },
        portal: {
            type: "PORTAL_TYPE",
            full: "portal <portal_type>"
        },
        canPvp: {
            type: "PVP_ENABLED",
            full: "canPvp"
        },
        gamemode: {
            type: "GAMEMODE",
            full: "gamemode <required_gamemode>"
        },
        hasGroup: {
            type: "IN_GROUP",
            full: "hasGroup <required_group> <include_higher_groups>"
        },
        inGroup: {
            type: "IN_GROUP",
            full: "inGroup <required_group> <include_higher_groups>"
        },
        hasPermission: {
            type: "HAS_PERMISSION",
            full: "hasPermission <required_permission>"
        },
        hasTeam: {
            type: "IN_TEAM",
            full: "hasTeam <required_team>"
        },
        inTeam: {
            type: "IN_TEAM",
            full: "inTeam <required_team>"
        },
        teamstat: {
            type: "VARIABLE_REQUIREMENT",
            full: "teamstat <variable> <team> <comparator> <compare_value>",
            from: "teamstat"
        },
        teamvar: {
            type: "VARIABLE_REQUIREMENT",
            full: "teamstat <variable> <team> <comparator> <compare_value> <fallback_value>",
            from: "teamvar"
        },
        inRegion: {
            type: "IN_REGION",
            full: "inRegion <region>"
        }
    }
}