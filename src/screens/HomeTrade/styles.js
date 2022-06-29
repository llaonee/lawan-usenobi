import { Colors, Sizes } from "../../config";

export default {
  header: {
    container: {
      flexDirection: 'row',
      marginLeft: 16,
    },
    search: {
      marginLeft: 8,
      width:Sizes.screen.width - 70
    }
  },
  list: {
    marginHorizontal: 22,
    marginTop: 8,
    marginBottom: 50,
  },
  itemList: {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: Colors.main.baseWhite15,
      paddingVertical: 13,
    },
    direction: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      height: 16,
      width: 16,
      marginRight: 8,
    },
    name: {
      fontSize: 17,
      fontWeight: 'bold',
      color: Colors.main.baseWhite,
    },
    amount: {
      fontSize: 17,
      color: Colors.main.baseWhite,
    },
  }
}