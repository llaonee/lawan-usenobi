import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_STORAGE = 'KEY_STORAGE';

export const setLocalStorage = async (data) => {
  try {
    await AsyncStorage.setItem(KEY_STORAGE, JSON.stringify(data))
  } catch (e) {
    console.log(e)
  }
}


export const getLocalStorage = async () => {
  try {
    const dataLocal = await AsyncStorage.getItem(KEY_STORAGE)
    return JSON.parse(dataLocal);
  } catch(e) {
    console.log(e)
  }
}

export const clearLocalStorage = async () => {
  try {
    return await AsyncStorage.clear()
  } catch(e) {
    console.log(e)
  }
}