import { Colors } from "../../../config";

export default {
  topContainer: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
  },

  input: {
    border: {
      borderRadius: 10,
      height: 32,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      backgroundColor: Colors.main.baseSearch,
    },
  },

  hint: {
    marginTop: 8,
  },

  right: {
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },

    input: {
      flex: 1,
      height: 40,
      justifyContent: 'center',
      fontSize: 15,
      color: Colors.main.baseWhite,
      paddingLeft: 8,
      padding: 0,
    },
  },
};
