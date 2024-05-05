import { View, TouchableOpacity } from "react-native"
import CustomText from "./CustomText"
import i18n from "../languages/i18n"

const NavigationButton = ({ selectQuestion, currentQuestionIndex, questions, responses, ...props }) => {

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center",
                marginHorizontal: 10,
                marginBottom: 10,
                marginTop: 15,
            }}
        >
            {currentQuestionIndex > 0 ?
                <TouchableOpacity
                    style={{
                        height: 30,
                        alignSelf: "left",
                        backgroundColor: "white",
                        borderRadius: 10,
                        marginRight: 10,
                        width: "40%",
                    }}
                    onPress={() => selectQuestion(currentQuestionIndex, -1, responses)}
                >
                    <CustomText
                        style={{
                            fontSize: 13,
                            textAlign: "center",
                            // fontWeight: "500",
                            // vertical center
                            paddingVertical: 5,
                            marginHorizontal: 10,
                            color: "black",
                        }}
                    >
                        {i18n.t("gameQuestionsScreen.PreviousQuestion")}
                    </CustomText>
                </TouchableOpacity>
                :
                <View
                    style={{
                        height: 30,
                        alignSelf: "left",
                        backgroundColor: "transparent",
                        borderRadius: 10,
                        marginRight: 10,
                        width: "40%",
                    }}
                >
                </View>
            }
            {currentQuestionIndex + 1 < questions.length ?
                <View
                    style={{
                        height: 30,
                        alignSelf: "right",
                        backgroundColor: "white",
                        borderRadius: 10,
                        marginRight: 10,
                        width: "40%",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => selectQuestion(currentQuestionIndex, +1, responses)}
                    >
                        <CustomText
                            style={{
                                fontSize: 13,
                                textAlign: "center",
                                // fontWeight: "500",
                                paddingVertical: 5,
                                marginHorizontal: 10,
                                color: "black",
                            }}
                        >
                            {i18n.t("gameQuestionsScreen.SkipQuestion")}
                        </CustomText>
                    </TouchableOpacity>
                </View>
                :
                <View
                    style={{
                        height: 25,
                        alignSelf: "right",
                        backgroundColor: "transparent",
                        borderRadius: 10,
                        marginRight: 10,
                        width: "40%",
                    }}
                >
                </View>
            }
        </View>
    )
}

export default NavigationButton