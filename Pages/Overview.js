import React, { useState } from "react";
import { View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import Suboverview from "./Components/Suboverview";
import Exercise from "./Components/Exercise";

const Overview = ({navigation}) => {

    const [selected, setSelected] = useState(1)
    return (
        <View style={{
            flex: 1
        }}>
            <AntDesign style={{
                marginTop: 50,
                marginLeft: 35
            }} name="left" size={24} onPress={()=>navigation.navigate('home')} color="black" />

            <View
                style={{
                    width: "95%",
                    alignSelf: "center",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: 20
                }}
            >
                <View >
                    <Text style={{
                        fontSize: 40,
                        fontWeight: "500"
                    }}>Chest</Text>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: "400",
                        color: "rgb(206,207,207)",
                        position: "relative",
                        bottom: 10
                    }}>and legs</Text>
                </View>
                <View style={{
                    width: 2,
                    height: 80,
                    marginTop: 10,
                    backgroundColor: "rgb(206,207,207)"
                }}></View>
                <View >
                    <Text style={{
                        fontSize: 20,
                        color: "rgb(206,207,207)",
                        fontWeight: "500",
                        marginTop: 10
                    }}>Aug</Text>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: "500",
                        position: "relative",
                        bottom: 6
                    }}>19</Text>
                </View>
            </View>

            <View style={{
                width: "85%",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 30
            }}>

                <TouchableOpacity onPress={() => setSelected(1)}>
                    <View style={{
                        backgroundColor: "rgb(222,223,224)",
                        padding: 12,
                        width: 100,
                        borderRadius: 10
                    }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}>Overview</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelected(2)}>
                    <View style={{

                        padding: 12,
                        width: 100,
                        borderRadius: 10
                    }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}>Exercise</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelected(3)}>
                    <View style={{

                        padding: 12,
                        width: 100,
                        borderRadius: 10
                    }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}>Muscles</Text>
                    </View>

                </TouchableOpacity>

            </View>

            {
                selected == 1 ? (
                   <Suboverview></Suboverview>
                ) : selected == 2 ? (
                  <Exercise></Exercise>
                ) : selected == 3 ? (
                    <Text>coming</Text>
                ) : null

            } 

        </View>
    )
}


export default Overview;