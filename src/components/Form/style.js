import { StyleSheet } from "react-native";

const style = StyleSheet.create(
    {
        formContext: {
            width: "100%",
            height: "100%",
            bottom: 0,
            justifyContent: "space-between",
            backgroundColor: "#ffffff",
            alignItems: "center",
            paddingTop: 30,
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
        button: {
            width: "90%",
            height: "auto",
            backgroundColor: "#ff0043",
            borderRadius: 25,
            alignItems: "center",
            marginTop: 30,
            marginBottom: 30,
            padding: 14,
            marginLeft: 12,
        },
        fontButton: {
            fontSize: 18,
            color: "#d5d5d5",
        },
        errorMessage: {
            marginLeft: 20,
            fontSize:12,
            color: "red",
            marginBottom:20,
            fontWeight: "bold",
        },
        resultImcResponse: {
            width:"100%",
            height: "50%",
            alignItems:"center"
        },
        listFull: {
        marginBottom:20
        },
        imcList: {
            flexGrow: 0,
        },
        resultImcItem: {
            fontSize:22,
            color:"#ff0055",
        },
        resultImcItemFinal:{
            
            fontSize:26,
            marginTop:12, 
            color:"red",
        }
    }
);

export default style;