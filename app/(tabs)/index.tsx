import React, { useState } from 'react';
import { View, Button, StyleSheet, Image, TextInput, KeyboardAvoidingView, Platform, StatusBar, useWindowDimensions } from 'react-native';

const App = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');
  React.useEffect(() => {
    if (screenWidth > screenHeight) {
      setOrientation('landscape');
    } else {
      setOrientation('portrait');
    }
  }, [screenWidth, screenHeight]);
  const statusBarStyle = Platform.select({
    ios: orientation === 'landscape' ? 'dark-content' : 'light-content',
    android: orientation === 'landscape' ? 'dark-content' : 'light-content',
  });

  const statusBarBackgroundColor = Platform.select({
    ios: orientation === 'landscape' ? '#FFFFFF' : '#6200EE',
    android: orientation === 'landscape' ? '#FFFFFF' : '#6200EE',
  });

  return (
    <>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarBackgroundColor}
        animated={true}
        hidden={false}
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })}
      >
        <Image
          source={{ uri: 'https://images2.thanhnien.vn/528068263637045248/2023/5/12/3306066302266602198058997380948135879162729n-168387144512910640190.jpeg' }}
          style={[
            styles.image,
            {
              width: screenWidth * 0.8,
              height: orientation === 'landscape' ? screenWidth * 0.8 * 0.3 : screenWidth * 0.8 * 0.5625,
            },
          ]}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter text here"
          placeholderTextColor="#888"
        />
        <View style={[styles.buttonWrapper, orientation === 'landscape' && styles.row]}>
          <View
            style={[
              styles.buttonContainer,
              {
                width: orientation === 'landscape' ? screenWidth / 2.2 : '100%',
                marginHorizontal: orientation === 'landscape' ? 10 : 0,
              },
            ]}
          >
            <Button
              title="Nút Bấm 1"
              onPress={() => alert('Nút Bấm 1 Đã Nhận')}
              color={Platform.select({ ios: '#6200EE', android: 'pink' })}
            />
          </View>

          <View
            style={[
              styles.buttonContainer,
              {
                width: orientation === 'landscape' ? screenWidth / 2.2 : '100%',
                marginHorizontal: orientation === 'landscape' ? 10 : 0,
              },
            ]}
          >
            <Button
              title="Nút Bấm 2"
              onPress={() => alert('Nút Bấm 2 Đã        ')}
              color={Platform.select({ ios: '#6200EE', android: 'pink' })}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Platform.select({
      ios: 20,
      android: 10,
    }),
  },
  buttonWrapper: {
    flexDirection: 'column', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: Platform.select({
      ios: 8, 
      android: 5,
    }),
  },
  image: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
    padding: Platform.select({
      ios: 12,
      android: 8,
    }),
  },
});

export default App;