import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import ColorCounter from "./ColorCounter";


const SquareScreenV1 = () => {

    /*
    Changing the value of red directly does not update View. 
    Instead use setRed so RN know that view state has changed.
    
    useState() sets a default value to the const
    */

    const [red, setRed] = useState(0) 
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    const COLOR_INCREMENT = 15

   
    const setColor = (color, change) => {
        //color === `red`, `green`, `blue`
        //change === +15, -15

        switch (color) {
            case `red`:
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case `green`:
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case `blue`:
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    };

    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="Red" />
            <ColorCounter
                onIncrease={() => setColor(`green`, COLOR_INCREMENT)}
                onDecrease={() => setColor(`green`, -1 * COLOR_INCREMENT)}
                color="Green" />
            <ColorCounter
                onIncrease={() => setColor(`blue`, COLOR_INCREMENT)}
                onDecrease={() => setColor(`blue`, -1 * COLOR_INCREMENT)}
                color="Blue" />
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    );
};

const Styles = StyleSheet.create({})

export default SquareScreenV1;