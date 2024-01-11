import { Dimensions } from "react-native";
const wid = Dimensions.get("screen").width;

module.exports = {
    main_screen: {
        marginTop: (wid > 360) ? wid / 8 : wid / 2.60,

        backgroundColor: "#white",
        alignItems: "center",
        height: (wid > 360) ? wid / 0.5 : wid / 0.5,
        width: (wid > 360) ? wid : wid,


    },
    main_screen_display: {
        elevation: 10,
        width: "95%",
        backgroundColor: "white",
        borderRadius: 7,
        marginBottom: 10,
        padding: 10,
    },
    main_screen_display_text: {
        fontSize: (wid > 360) ? 40 : 45,
        textAlign: "right",
    },
    main_screen_keypad: {
        width: "100%",
        height: (wid > 360) ? "80%" : "75%",
        display: "flex",
        // flexDirection: "row",
    },
    main_screen_keypad_row: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: (wid > 360) ? 15 : 10,
    },
    btn_outer: {
        width: (wid > 360) ? wid / 5 : wid / 5.5,
        height: (wid > 360) ? wid / 5 : wid / 5.5,
        backgroundColor: "white",
        elevation: 10,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    bg_button: {
        backgroundColor: "white",
        color: "black",
        fontSize: 30,
        borderRadius: 20,
    },
    btn1_outer: {
        width: (wid > 360) ? wid / 5 : wid / 5.5,
        height: (wid > 360) ? wid / 5 : wid / 5.5,
        backgroundColor: '#FF5757',
        borderRadius: 90,
        elevation: 10,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    bg1_button: {
        // backgroundColor: '#FF5757',
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },
    btn2_outer: {

        width: (wid > 360) ? wid / 5 : wid / 5.5,
        height: (wid > 360) ? wid / 5 : wid / 5.5,
        backgroundColor: "grey",
        borderRadius: 90,
        elevation: 10,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
    },
    bg2_button: {
        // backgroundColor: "grey",
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    }
}