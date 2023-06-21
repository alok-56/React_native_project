import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Pastworkout = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <AntDesign style={{
                marginTop: 50,
                marginLeft: 35
            }} name="left" size={24} color="black" />

            <View style={{
                marginTop: 20,
                marginLeft: 35
            }}>
                <Text style={{
                    fontSize: 40,
                    fontWeight: "500"
                }}>Past</Text>
                <Text style={{
                    fontSize: 35,
                    fontWeight: "400",
                    color: "rgb(220,220,220)"
                }}>Workouts</Text>
            </View>

            <View style={{
                width: "90%",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 35
            }}>
                <View style={{
                    backgroundColor: "rgb(222,223,224)",
                    padding: 12,
                    width: 130,
                    borderRadius: 10
                }}>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}>All workouts</Text>
                </View>
                <View style={{
                    padding: 12,

                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "rgb(128,128,128)"
                    }}>Favroites</Text>
                </View>
            </View>

            <Text style={{
                marginTop: 30,
                marginLeft: 30,
                fontSize: 30,
                fontWeight: "400"
            }}>This Month</Text>



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
                    backgroundColor: "rgb(243,136,43)",
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
    )
}

export default Pastworkout;