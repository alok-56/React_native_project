import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ActivityIndicator } from "react-native";
import { EvilIcons } from '@expo/vector-icons';


const Covid = () => {


    const [confirmed, setConfirmed] = useState('')
    const [dead, setDead] = useState('')
    const [recovered, setRecovered] = useState('')
    const [country, setCountry] = useState('')
    const [lastcheck, setLastcheck] = useState('')
    const [lastrepost, setLastreported] = useState('')
    const [load, setLoad] = useState(false)
    const call = async () => {
        setLoad(true)
        const url = `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${country}`;
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
            console.log(result.data.confirmed)
            setConfirmed(result.data.confirmed)
            setDead(result.data.deaths)
            setRecovered(result.data.recovered)
            setLastcheck(result.data.lastChecked)
            setLastreported(result.data.lastReported)
           
            if(result.message=="Country not found. Returning global stats. Please use a country name found in the data property.")
            {
                setCountry(' ')
            }
            setLoad(false)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        call()
    }, [])

    return (
        <View style={{
            flex: 1,
            marginTop: 30
        }}>

            <View style={{
                width: "90%",
                padding: 8,
                borderWidth: 1,
                alignSelf: "center",
                marginTop: 20,
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <TextInput onChangeText={(text) => setCountry(text)} placeholder="Enter country"></TextInput>
                <EvilIcons onPress={() => call()} name="search" size={24} color="black" />

            </View>

            {
                load ? <ActivityIndicator size={30}></ActivityIndicator> : <View style={{
                    width: "90%",
                    height: 200,
                    borderWidth: 1,
                    alignSelf: "center",
                    marginTop: 10,
                    backgroundColor: "#fff",
                    elevation: 20,
                    padding: 20
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "600"
                    }}>Country : {country==""? "Global": country }</Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "600"
                    }}>confirmed : {confirmed}</Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "600"
                    }}>deaths : {dead}</Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "600"
                    }}>Recovered : {recovered}</Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "600"
                    }}>lastchecked : {new Date(lastcheck).getDate()}/{new Date(lastcheck).getMonth()}/{new Date(lastcheck).getFullYear()}</Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "600"
                    }}>lastreported : {new Date(lastrepost).getDate()}/{new Date(lastrepost).getMonth()}/{new Date(lastrepost).getFullYear()}</Text>

                </View>

            }


        </View>
    )
}

export default Covid