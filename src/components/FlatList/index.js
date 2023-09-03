import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, {useState} from 'react'
import DateView from '../DateView';

const DateFlatList = () => {
    
  const currentDate = new Date();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const data = Array.from({length: 30}).map((_, index) => ({
    id: index.toString(),
    index: index,
  }));

  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + item.index);

    const dayText =
      item.index === 0
        ? 'Today'
        : item.index === 1
        ? 'Tomorrow'
        : dayNames[date.getDay()];

    const day = date.getDate();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = monthNames[date.getMonth()];

    return (
      <DateView
        dayText={dayText}
        date={day}
        day={day}
        month={month}
        isSelected={item.id === selectedId}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };
  return (
    <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
  )
}

export default DateFlatList

const styles = StyleSheet.create({})