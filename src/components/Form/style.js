import { StyleSheet } from "react-native";

const style = StyleSheet.create(
    {
        formContext: {
            width: "100%",
            height: "100%",
            bottom: 0,
            backgroundColor: "#ffffff",
            alignItems: "center",
            paddingTop: "25%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
        },
        textTitle: {
            color: "#ff0043",
            fontSize: 24,
            fontWeight: "bold",
        },
        form: {
            width: "100%",
            height: "auto",
            marginTop: 30,
            padding: 10,
        },
        formLabel: {
            color: "#505050",
            fontSize: 18,
            paddingLeft: 20,

        },
        input: {
            width: "90%",
            borderRadius: 50,
            backgroundColor: "#f6f6f6",
            height: 40,
            margin: 12,
            paddingLeft: 10,
        }, 
        
    }
);

export default style;