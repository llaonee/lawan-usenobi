import React, { useEffect, useState } from "react";
import { Text, View, ToastAndroid, RefreshControl, Image } from "react-native";
import { useQuery } from "react-query";
import { getList } from "../../apiServices";
import { Base } from "../../components/containers";
import InputSearch from "../../components/generics/InputSearch";
import { LeftDirection } from "../../config/Svgs";
import Styles from './styles';

export default function HomeNobi(props) {
  
  const [keyword, setKeyword] = useState('')
  const [listData, setListData] = useState([])
  const [listFiltered, setListFiltered] = useState([])
  const [isRefresh, setRefresh] = useState(false)

  const { isLoading: loading, refetch: getListData } = useQuery(
    'query-getlist',
    async () => {
      return await getList();
    },
    {
      onSuccess: (res) => {
        setListData(res.data.data)
        setListFiltered(res.data.data)
        setRefresh(false);
      },
      onError: (err) => {
        ToastAndroid.showWithGravity(
          err.message,
          ToastAndroid.SHORT,
          ToastAndroid.TOP
        )
        setRefresh(false);
      },
    }
  )

  useEffect(() => {
    getListData();
    setRefresh(loading)
  },[]);
  
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = listData.filter(function (item) {
        const itemData = item.ticker
          ? item.ticker.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setKeyword(text);
      setListFiltered(newData);
    } else {
      setListFiltered(listData);
      setKeyword(text);
    }
  };

  const setFormater = (data) => {
    const termData = parseFloat(data);
    return termData.toFixed(8);
  }

  const renderHeader = () => {
    return (
      <View style={Styles.header.container}>
        <LeftDirection />
        <InputSearch
          style={Styles.header.search}
          placeholder="Search"
          value={keyword}
          onChangeText={(text) => {
            searchFilterFunction(text)
            setKeyword(text);
          }}
          onClearText={() => {
            searchFilterFunction('')
            setKeyword('')
          }}
        />
      </View>
    )
  }

  const renderList = () => {
    return (
      <View style={Styles.list}>
        {listFiltered.map((item, idx) => (
          <View key={idx} style={Styles.itemList.container}>
            <View style={Styles.itemList.direction}>
              <Image source={{uri:item.image}} style={Styles.itemList.image}/>
              <Text style={Styles.itemList.name}>{item.ticker}</Text>
            </View>
            <Text style={Styles.itemList.amount}>{setFormater(item.amount)}</Text>
          </View>
        ))}

      </View>
    )
  }

  return (
    <Base 
      renderHeader={renderHeader()} 
      refreshControl={
      <RefreshControl
        refreshing={isRefresh}
        onRefresh={() => {
          setRefresh(true);
          getListData()
        }}
      />
      }>
      {renderList()}
    </Base>
  )
}