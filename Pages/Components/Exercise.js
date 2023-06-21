import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Exercise = () => {
    return (
        <View>
            <View style={{
                width: "80%",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20

            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 500
                }}>Set 1</Text>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "500",
                    color: "rgb(206,207,207)",
                    marginTop: 5
                }}>Quards & Back</Text>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 15
            }}>
                <View style={{
                    width: 80, height: 80, backgroundColor: "red",
                    borderRadius: 10
                }}>
                    <Image style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 10
                    }} source={require('../../assets/exer.jpg')}></Image>

                </View>
                <View style={{
                    marginTop: 15
                }}>
                    <Text style={{
                        width: 25,
                        height: 3,
                        backgroundColor: "red"
                    }}></Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        marginTop: 5
                    }}>Side jump</Text>
                    <Text style={{
                        fontSize: 15,
                        marginTop: 3,
                        color: "rgb(206,207,207)",
                        fontWeight: "bold"
                    }}>15 minites</Text>
                </View>
                <View style={{
                    marginTop: 10
                }}>
                    <AntDesign name="hearto" size={24} color="red" />

                </View>

            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 30
            }}>
                <View style={{
                    width: 80, height: 80, backgroundColor: "red", borderRadius: 10
                }}>
                    <Image style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 10
                    }} source={require('../../assets/foot.jpg')}></Image>
                </View>
                <View style={{
                    marginTop: 15
                }}>
                    <Text style={{
                        width: 25,
                        height: 3,
                        backgroundColor: "red"
                    }}></Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        marginTop: 5
                    }}>Side jump</Text>
                    <Text style={{
                        fontSize: 15,
                        marginTop: 3,
                        color: "rgb(206,207,207)",
                        fontWeight: "bold"
                    }}>15 minites</Text>
                </View>
                <View style={{
                    marginTop: 10
                }}>
                    <AntDesign name="hearto" size={24} color="red" />

                </View>

            </View>
            <Text style={{
                marginTop: 10,
                marginLeft: 35,
                fontSize: 30,
                fontWeight: 500
            }}>Set 2</Text>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 13
            }}>
                <View style={{
                    width: 80, height: 80, backgroundColor: "red", borderRadius: 10
                }}>
                    <Image style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 10
                    }} source={require('../../assets/foot.jpg')}></Image>
                </View>
                <View style={{
                    marginTop: 15
                }}>
                    <Text style={{
                        width: 25,
                        height: 3,
                        backgroundColor: "red"
                    }}></Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        marginTop: 5
                    }}>Side jump</Text>
                    <Text style={{
                        fontSize: 15,
                        marginTop: 3,
                        color: "rgb(206,207,207)",
                        fontWeight: "bold"
                    }}>15 minites</Text>
                </View>
                <View style={{
                    marginTop: 10
                }}>
                    <AntDesign name="hearto" size={24} color="red" />

                </View>

            </View>

        </View>
    )
}

export default Exercise;