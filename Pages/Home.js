import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal"



const Home = ({ navigation }) => {
    useEffect(() => {
        call()
    }, [])


    const call = async () => {
        const url = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Russia';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0b0901f1b6mshfef1ab99fcacbcfp117d2ejsn8c9ccd9220f1',
                'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const [visible, setVisible] = useState(false)
    return (
        <View style={{
            flex: 1,
            marginTop: 50
        }}>

            {/* past workout model modal */}

            <Modal style={{
                justifyContent: "flex-start",
                position: "relative",
                top: 20
            }} isVisible={visible}>
                <View style={{
                    width: "100%",
                    height: 420,
                    borderRadius: 30,
                    backgroundColor: "#fff"

                }}>
                    <View style={{
                        width: "60%",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: 30,
                        padding: 10
                    }}>
                        <View >
                            <TouchableOpacity>
                                <View style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: "rgb(255,110,74)",
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <FontAwesome5 name="fire" size={24} color="#fff" />
                                </View>

                            </TouchableOpacity>
                        </View>
                        <View style={{

                            alignItems: "center",
                            justifyContent: "center"
                        }} >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "500",
                            }}>New Workout</Text>
                        </View>
                    </View>

                    <Text style={{
                        marginTop: 20,
                        marginLeft: 25,
                        fontSize: 25,
                        fontWeight: "500"
                    }}>From Previous</Text>

                    <View >

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>


                            <View style={{
                                width: "50%",
                                alignSelf: "center",
                                marginTop: 40,
                                flexDirection: "row",
                                justifyContent: "space-around",
                                backgroundColor: "#fff",
                                elevation: 20,
                                padding: 30,
                                borderRadius: 10,
                                marginLeft: 10,
                                marginBottom: 5

                            }}>

                                <TouchableOpacity onPress={() => navigation.navigate('over')}>
                                    <View style={{
                                        width: 50,
                                        height: 65,
                                        backgroundColor: "rgb(14,175,216)",
                                        borderRadius: 10,
                                    }}>
                                        <View style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginTop: 14,

                                        }}>
                                            <Text style={{
                                                color: "#fff"
                                            }}>Aug</Text>
                                            <Text style={{
                                                color: "#fff",
                                                fontWeight: "bold"
                                            }}>19</Text>
                                        </View>
                                    </View>


                                </TouchableOpacity>


                                <View style={{
                                    marginTop: 7,
                                }}>
                                    <View style={{
                                        flexDirection: "row"
                                    }}>
                                        <Text style={{
                                            height: 4,
                                            width: 25,
                                            borderRadius: 50,
                                            backgroundColor: "rgb(243,136,43)"
                                        }}></Text>
                                        <Text style={{
                                            height: 4,
                                            width: 25,
                                            borderRadius: 50,
                                            backgroundColor: "rgb(78,91,249)"
                                        }}></Text>
                                        <Text style={{
                                            height: 4,
                                            width: 25,
                                            borderRadius: 50,
                                            backgroundColor: "rgb(78,214,249)"
                                        }}></Text>

                                    </View>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: "bold",
                                        marginTop: 3
                                    }}>Recent : Chest & Legs</Text>
                                    <Text style={{
                                        color: "rgb(192,192,192)",
                                        fontWeight: "600"

                                    }}>8 Exercises</Text>
                                </View>
                            </View>

                            <View style={{
                                width: "50%",
                                alignSelf: "center",
                                marginTop: 40,
                                flexDirection: "row",
                                justifyContent: "space-around",
                                backgroundColor: "#fff",
                                elevation: 20,
                                padding: 30,
                                borderRadius: 10,
                                marginLeft: 7,
                                marginBottom: 5

                            }}>
                                <View style={{
                                    width: 50,
                                    height: 65,
                                    backgroundColor: "rgb(78,91,249)",
                                    borderRadius: 10,
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 14,

                                    }}>
                                        <Text style={{
                                            color: "#fff"
                                        }}>Aug</Text>
                                        <Text style={{
                                            color: "#fff",
                                            fontWeight: "bold"
                                        }}>19</Text>
                                    </View>
                                </View>


                                <View style={{
                                    marginTop: 7,
                                }}>
                                    <View style={{
                                        flexDirection: "row"
                                    }}>
                                        <Text style={{
                                            height: 4,
                                            width: 25,
                                            borderRadius: 50,
                                            backgroundColor: "rgb(243,136,43)"
                                        }}></Text>
                                        <Text style={{
                                            height: 4,
                                            width: 25,
                                            borderRadius: 50,
                                            backgroundColor: "rgb(78,91,249)"
                                        }}></Text>
                                        <Text style={{
                                            height: 4,
                                            width: 25,
                                            borderRadius: 50,
                                            backgroundColor: "rgb(78,214,249)"
                                        }}></Text>

                                    </View>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: "bold",
                                        marginTop: 3
                                    }}>Recent : Chest & Legs</Text>
                                    <Text style={{
                                        color: "rgb(192,192,192)",
                                        fontWeight: "600"

                                    }}>8 Exercises</Text>
                                </View>


                            </View>
                        </ScrollView>
                    </View>

                    <TouchableOpacity onPress={() => setVisible(false)}>
                        <View style={{
                            flexDirection: "row",
                            padding: 30
                        }}>
                            <Ionicons name="ios-close" size={24} color="black" />
                            <Text style={{
                                marginLeft: 10,
                                fontSize: 20,
                                fontWeight: "bold"
                            }}>Close</Text>

                        </View>

                    </TouchableOpacity>
                </View>
            </Modal>

            {/* past workout modal end */}



            {/* home section */}

            <ScrollView>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <Image style={{
                                height: 60, width: 60, borderRadius: 50
                            }} source={require('../assets/foot.jpg')}></Image>
                            <Text style={{
                                marginLeft: 14, marginTop: 15,
                                fontWeight: "700",
                                fontSize: 20
                            }}>Hello David</Text>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => setVisible(true)}>
                                <View style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: "rgb(255,110,74)",
                                    borderRadius: 10,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <FontAwesome5 name="fire" size={24} color="#fff" />
                                </View>

                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={{
                        marginTop: 23
                    }}>
                        <Text style={{ textAlign: "center", fontSize: 40, fontWeight: "600", }}>Stats <Text style={{
                            fontWeight: 300, color: "rgb(220,220,220)"
                        }}>Muscles</Text></Text>
                    </View>

                    <View style={{
                        alignSelf: "center",
                        marginTop: 10
                    }}>
                        <Text style={{
                            fontSize: 60,
                            fontWeight: "500",
                            textAlign: "center"
                        }}>58</Text>
                        <Text style={{
                            textAlign: "center",
                            color: "rgb(192,192,192)",
                            fontSize: 15,
                            fontWeight: "500"
                        }}>Workout Completed</Text>
                    </View>

                    <View style={{
                        marginTop: 25,
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 35,
                                fontWeight: "500"
                            }}>72.4 <Text style={{
                                fontSize: 17
                            }}>kg</Text></Text>
                            <Text style={{
                                fontSize: 15,
                                color: "rgb(192,192,192)",
                                fontWeight: "500"
                            }}>Current Weight</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 600
                            }}>7.6 <Text style={{
                                fontSize: 13
                            }}>kg</Text> </Text>
                            <Text style={{
                                width: 100,
                                height: 3,
                                backgroundColor: "aqua",
                                marginTop: 5
                            }}></Text>
                            <Text style={{
                                color: "rgb(192,192,192)",
                                fontWeight: "600",
                                marginTop: 10
                            }}>Left to Gain</Text>

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

                    <View style={{
                        width: "85%",
                        alignSelf: "center",
                        marginTop: 40,
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                        <View style={{
                            width: 50,
                            height: 65,
                            backgroundColor: "rgb(14,175,216)",
                            borderRadius: 10,
                        }}>
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 14,

                            }}>
                                <Text style={{
                                    color: "#fff"
                                }}>Aug</Text>
                                <Text style={{
                                    color: "#fff",
                                    fontWeight: "bold"
                                }}>19</Text>
                            </View>
                        </View>


                        <View style={{
                            marginTop: 7,
                        }}>
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Text style={{
                                    height: 4,
                                    width: 25,
                                    borderRadius: 50,
                                    backgroundColor: "rgb(243,136,43)"
                                }}></Text>
                                <Text style={{
                                    height: 4,
                                    width: 25,
                                    borderRadius: 50,
                                    backgroundColor: "rgb(78,91,249)"
                                }}></Text>
                                <Text style={{
                                    height: 4,
                                    width: 25,
                                    borderRadius: 50,
                                    backgroundColor: "rgb(78,214,249)"
                                }}></Text>

                            </View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: "bold",
                                marginTop: 3
                            }}>Recent : Chest & Legs</Text>
                            <Text style={{
                                color: "rgb(192,192,192)",
                                fontWeight: "600"

                            }}>8 Exercises</Text>
                        </View>

                        <View style={{
                            width: 50,
                            height: 65,
                            backgroundColor: "rgb(240,240,240)",
                            borderRadius: 10,

                        }}>
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 18
                            }}>
                                <Ionicons name="ios-arrow-forward" size={24} color="black" />
                            </View>
                        </View>


                    </View>
                </View>


            </ScrollView>


        </View>
    )
}

export default Home;