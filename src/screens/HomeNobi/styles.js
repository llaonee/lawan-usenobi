import { Sizes, Colors } from "../../config"
export default {
  image: {
    width: Sizes.screen.width - 44,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: -20,
  },
  label: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 8,
  },
  text: {
    label: {
      color: Colors.text.label,
      fontSize: 14,
    },
    labelGreen: {
      color: Colors.main.baseGreen,
      fontSize: 14,
      fontWeight: 'bold'
    },
    amount: {
      fontSize: 44,
      fontWeight: 'bold',
      color: Colors.main.baseWhite,
      alignSelf: 'center',
      marginBottom: 36,
    }
  },
  button: {
    container: {
      marginHorizontal: 48,
      backgroundColor: Colors.main.baseGreen,
    },
    label: {
      color: Colors.main.baseWhite,
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 10,
    },
    animated: {
      marginHorizontal: 48,
      backgroundColor: Colors.main.baseGreen,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    }
  },
  logout: {
    innerContainer: {
      backgroundColor: Colors.main.baseColor,
      marginHorizontal: 47,
      marginTop: 15,
    },
    label: {
      color: Colors.main.baseWhite
    }
  },
}