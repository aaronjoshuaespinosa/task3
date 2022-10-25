import { StyleSheet } from "react-native";

// styles
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1b1b1b',
        alignItems: "center",
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: "rgba(0,0,0,0.7)",
        height: '100%',
        width: '100%',
        padding: 35,
        alignItems: "center",
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: '#ebebeb',
        alignItems: "center",
        justifyContent: 'center',
        padding: 8,
        width: '100%',
        borderRadius: 5,
    },
    modalTitleAlert: {
        color: '#CA5E57',
        fontWeight: '900',
        fontSize: 20,
        marginVertical: 8,
    },
    modalTitleSuccess: {
        color: '#4CB543',
        fontWeight: '900',
        fontSize: 20,
        marginVertical: 8,
    },
    modalTxt: {
        marginVertical: 24,
    },
    modalBtnSuccess: {
        backgroundColor: '#4CB543',
        borderRadius: 5,
        marginVertical: 8,
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: 'center',
        width: '95%',
    },
    modalBtnSuccessTxt: {
        color: '#ebebeb',
        fontWeight: '600',
        fontSize: 16,
    },
    modalBtnAlert: {
        backgroundColor: '#CA5E57',
        borderRadius: 5,
        marginVertical: 8,
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: 'center',
        width: '95%',
    },
    modalBtnAlertTxt: {
        color: '#ebebeb',
        fontWeight: '600',
        fontSize: 16,
    },
    headerContainer: {
        flex: 0.2,
        width: '100%',
        backgroundColor: '#1b1b1b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTxt: {
        fontSize: 28,
        fontWeight: '800',
        color: '#ffa31a',
        textAlign: 'center',
        lineHeight: 28,
        marginHorizontal: 100,
        marginTop: 24,
    },
    formContainer: {
        flex: 0.8,
        width: '100%',
        backgroundColor: '#292929',
        alignItems: 'center',
    },
    note: {
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 14,
        fontStyle: 'italic',
        color: '#808080',
        marginHorizontal: 24,
        marginVertical: 32,
    },
    field: {
        width: '100%',
        paddingHorizontal: 16,
    },
    duoFieldContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    duoField1: {
        flex: 0.5,
        paddingLeft: 16,
        paddingRight: 8,
    },
    duoField2: {
        flex: 0.5,
        paddingLeft: 8,
        paddingRight: 16,
    },
    fieldPlaceholder: {
        fontWeight: '500',
        fontSize: 16,
        color: '#000',
        backgroundColor: '#ebebeb',
        borderRadius: 5,
        marginBottom: 16,
    },
    btns: {
        width: '100%',
        marginTop: 24,
        paddingHorizontal: 16,
        alignContent: 'center',
        justifyContent: 'center',
    },
    submitBtn: {
        width: '100%',
        backgroundColor: '#ffa31a',
        borderRadius: 5,
    },
    submitBtnTxt: {
        fontWeight: '600',
        fontSize: 16,
        padding: 16,
        textAlign: 'center',
        color: '#1b1b1b',
    },
});

export { styles }