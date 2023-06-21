import React from "react";
import { View,Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

const Suboverview = () => {
    return (
        <View>
            <View style={{
                marginTop: 40,
                width: "90%",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-around"
            }}>
                <View style={{ width: "40%" }}>

                </View>
                <View style={{
                    width: "50%"
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                        <Text style={{
                            width: 8,
                            height: 8,
                            backgroundColor: "red",
                            borderRadius: 50,
                            marginTop: 8
                        }}></Text>
                        <Text style={{
                            color: "rgb(157,153,154)",
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>Cardio</Text>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold"
                        }}>56%</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                        <Text style={{
                            width: 8,
                            height: 8,
                            backgroundColor: "red",
                            borderRadius: 50,
                            marginTop: 8
                        }}></Text>
                        <Text style={{
                            color: "rgb(157,153,154)",
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>Strength</Text>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold"
                        }}>56%</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                        <Text style={{
                            width: 8,
                            height: 8,
                            backgroundColor: "red",
                            borderRadius: 50,
                            marginTop: 8
                        }}></Text>
                        <Text style={{
                            color: "rgb(157,153,154)",
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>Streth</Text>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold"
                        }}>56%</Text>
                    </View>
                </View>
            </View>

            <View style={{
                width: "85%",
                alignSelf: "center",
                marginTop: 40,
                flexDirection: "row",
                justifyContent: "space-around"
            }}>
                <View>
                    <View style={{
                        width: 55,
                        height: 55,
                        backgroundColor: "rgb(243,196,173)",
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <AntDesign name="staro" size={24} color="rgb(243,136,43)" />
                    </View>
                    <Text style={{
                        textAlign: "center",
                        marginTop: 15,
                        fontSize: 24,
                        fontWeight: "bold"
                    }}>13.5k <Text style={{
                        fontSize: 15
                    }}>cal</Text></Text>
                    <Text style={{
                        textAlign: "center",
                        color: "rgb(192,192,192)",
                        fontWeight: "600"
                    }}>Burned</Text>

                </View>
                <View>
                    <View style={{
                        width: 55,
                        height: 55,
                        backgroundColor: "rgb(218,224,249)",
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <MaterialCommunityIcons name="weight-lifter" size={24} color="rgb(78,91,249)" />
                    </View>
                    <Text style={{
                        textAlign: "center",
                        marginTop: 15,
                        fontSize: 24,
                        fontWeight: "bold"
                    }}>270k <Text style={{
                        fontSize: 15
                    }}>kg</Text></Text>
                    <Text style={{
                        textAlign: "center",
                        color: "rgb(192,192,192)",
                        fontWeight: "600",
                        fontWeight: "500"
                    }}>Lifted</Text>

                </View>
                <View>
                    <View style={{
                        width: 55,
                        height: 55,
                        backgroundColor: "rgb(218,244,249)",
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Entypo name="back-in-time" size={24} color="rgb(78,214,249)" />
                    </View>
                    <Text style={{
                        textAlign: "center",
                        marginTop: 15,
                        fontSize: 24,
                        fontWeight: "bold"
                    }}>13 <Text style={{
                        fontSize: 15,
                        fontWeight: "500"
                    }}>Weeks</Text></Text>
                    <Text style={{
                        textAlign: "center",
                        color: "rgb(192,192,192)",
                        fontWeight: "600"
                    }}>Training</Text>

                </View>
            </View>

            <TouchableOpacity style={{
                width: "70%",
                padding: 20,
                backgroundColor: "rgb(249,118,50)",
                alignSelf: "center",
                marginTop: 30,
                borderRadius: 20
            }}>
                <View style={{
                    flexDirection: "row",
                    alignSelf: 'center'
                }}>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 20,
                        color: "#fff",
                        fontWeight: "500"
                    }}>Repeat Workout</Text>
                    <AntDesign style={{
                        marginTop: 5,
                        marginLeft: 35
                    }} name="right" size={24} color="#fff" />
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default Suboverview;