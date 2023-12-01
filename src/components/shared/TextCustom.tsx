import React from 'react';
import { Text } from 'react-native';

/**Import Colors */
import Colors from './../../utils/Colors';

const TextCustom = (props: any) => {
    const { children, customStyle } = props;
    return (
        <Text style={[{ color: Colors.COLOR_3 }, customStyle ]}>
            {children}
        </Text>
    )
}

export default TextCustom