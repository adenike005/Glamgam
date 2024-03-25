import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ text, isSentByCurrentUser }) => {
  return (
    <View style={[styles.messageContainer, isSentByCurrentUser && styles.sentMessage]}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
});

export default Message;
