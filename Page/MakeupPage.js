import React, { useState } from 'react';
import { View, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import Message from './Message';

const MakeupPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  // const handleSendMessage = () => {
  //   if (inputText.trim() !== '') {
  //     // Send message from current user
  //     const newMessage = { text: inputText, isSentByCurrentUser: true };
  //     setMessages([...messages, newMessage]);
      
  //     // Simulate response from another user after a short delay
  //     setTimeout(() => {
  //       const responseMessage = { text: "I received your message!", isSentByCurrentUser: false };
  //       setMessages([...messages, responseMessage]);
  //     }, 1000); // Adjust the delay as needed
  //   }
  // };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      // Send message from current user
      const newMessage = { text: inputText, isSentByCurrentUser: true };
      setMessages([...messages, newMessage]);
      
      // Simulate response from another user after a short delay
      setTimeout(() => {
        const responseMessage = { text: "I received your message!", isSentByCurrentUser: false };
        setMessages([...messages, responseMessage]);
      }, 1000); // Adjust the delay as needed
      
      // Clear input text after sending the message
      // setInputText('');
    }
  };
  
  
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <Message text={item.text} isSentByCurrentUser={item.isSentByCurrentUser} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
});

export default MakeupPage;


