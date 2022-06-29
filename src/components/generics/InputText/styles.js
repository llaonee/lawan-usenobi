import { Colors } from '../../../config';

export default {
    borderMain: {
      height: 40,
      borderRadius: 5,
      flexDirection: 'row',
      backgroundColor: Colors.main.baseDark,
      marginTop: 8
    },
    inputText: {
      fontSize: 14,
      marginLeft: 12,
      color: Colors.text.label,
      alignSelf: 'center',
      flex: 1,
    },
    touchInput: {
      flex: 1,
      alignItems: 'center',
    },
    label: {
      marginBottom: 8,
      color: Colors.text.label,
      fontSize: 15,
    },
    imageMain: {
      marginLeft: -8,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0.1,
    },
    image: {
      height: 15,
      width: 22,
    },
    errorMessage: {
      color: 'white',
      fontStyle: 'italic',
      marginTop: 8,
      color: Colors.text.gold,
      fontSize: 13,
    },
}